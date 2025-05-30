import React, { useEffect, useRef, useState } from 'react';
import Template from '../components/Template'; // Adjust path if needed
import axios from 'axios';
import pluralize from 'pluralize';
import { SyncLoader } from 'react-spinners';
const globalComponentMap = {};

const UnifiedMainContent = ({
  activeService,
  services,
  items,
  serviceUrlMapRef,
  mediaEndpoint,
  titleField = 'NameOfPages' || 'title'
}) => {
  const componentMapRef = useRef(globalComponentMap);
  const ComponentToRender = componentMapRef.current[activeService] || Template;
  const [content, setContent] = useState();

  function LoadingWithRedirect() {
    return (
      <div className="d-flex justify-content-center align-items-center h-75">
        <SyncLoader color="#ff8c8c" />
      </div>
    );
  }

  useEffect(() => {
    if (!activeService) return;

    // Use mapped service if available
    const mappedService =
      serviceUrlMapRef?.current?.[activeService] ||
      serviceUrlMapRef?.activeService ||
      activeService;

    let words = mappedService.trim().split(/\s+/);
    if (words.length > 0) {
      const lastWord = words[words.length - 1];
      words[words.length - 1] = pluralize(lastWord);
    }

    const pluralService = words.join(' ');
    const UID = pluralService.replace(/\s+/g, '-').toLowerCase();

    axios
      .get(`${import.meta.env.VITE_REACT_APP_BASE_URL}${UID}?populate[Blocks][populate]=*`)
      .then((res) => setContent(res?.data))
      .catch((err) => console.error('Error fetching content:', err));
  }, [activeService]);
  console.log('Content', content)
  useEffect(() => {
    const fetchAndExtendComponentMap = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BASE_URL}${mediaEndpoint}?populate[Media][populate]=*`
        );

        const mediaItems = response?.data?.data?.[0]?.Media;

        if (Array.isArray(mediaItems)) {
          mediaItems.forEach((item) => {
            const name = item?.[titleField]?.trim();
            if (name && !componentMapRef.current[name]) {
              componentMapRef.current[name] = Template;
            }
          });
        }
      } catch (err) {
        console.error(`Error fetching media from ${mediaEndpoint}:`, err);
      }
    };

    fetchAndExtendComponentMap();
  }, [mediaEndpoint, titleField]);


  // Store initial values at component mount
  const initialTitle = useRef(document.title);
  const initialDescription = useRef(
    document.querySelector('meta[name="description"]')?.content || null
  );

  // Set up effect for SEO tags
  let seoTitle = content?.data?.[0]?.Blocks?.filter(block => block.__component === "shared.seo")?.[0]?.metaTitle;
  let seoDescription = content?.data?.[0]?.Blocks?.filter(block => block.__component === "shared.seo")?.[0]?.metaDescription;
  useEffect(() => {

    // Update title if SEO title exists
    if (seoTitle) {
      document.title = seoTitle;
    }

    // Handle description meta tag
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (seoDescription) {
      if (!descriptionTag) {
        descriptionTag = document.createElement('meta');
        descriptionTag.name = "description";
        document.head.appendChild(descriptionTag);
      }
      descriptionTag.content = seoDescription;
    }

    // Cleanup function
    return () => {
      // Reset document title
      document.title = ''

      // Handle description meta tag cleanup
      const currentDescriptionTag = document.querySelector('meta[name="description"]');
      if (currentDescriptionTag) {
        if (initialDescription.current) {
          // Restore original description if it existed
          currentDescriptionTag.content = initialDescription.current;
        } else {
          // Remove the tag if we created it
          if (!initialDescription.current && descriptionTag) {
            document.head.removeChild(descriptionTag);
          }
        }
      }
    };
  }, [content]); // Re-run when content changes
  return (
    <div className="h-100">
      {content ? (
          <ComponentToRender
            activeService={activeService}
            services={services}
            items={items}
            response={content}
            LoadingWithRedirect={LoadingWithRedirect}
          />
      ) : (
        <LoadingWithRedirect />
      )}
    </div>

  );
};

export default UnifiedMainContent;
