// lib/api.js
import axios from "axios";
import { API_BASE, IMAGE_BASE } from "@/constants/baseUrls";

// Returns: { slug: Title } mapping
export const getServiceUrlMap = async () => {
  const urls = {
    languages: `${API_BASE}all-languages?populate[Media][populate]=*`,
    services: `${API_BASE}all-services?populate[Media][populate]=*`,
    industries: `${API_BASE}all-industries-and-clients?populate[Media][populate]=*`,
    qualities: `${API_BASE}all-qualities?populate[Media][populate]=*`,
    aboutUs: `${API_BASE}all-about-uses?populate[Media][populate]=*`,
  };

  const [languages, services, industries, qualities, aboutUs] = await Promise.all([
    axios.get(urls.languages),
    axios.get(urls.services),
    axios.get(urls.industries),
    axios.get(urls.qualities),
    axios.get(urls.aboutUs),
  ]);

  const map = {};

  const parseMedia = (mediaArray) => {
    mediaArray.forEach((item) => {
      const title = item?.title || item?.NameOfPages;
      const slug = title?.trim().replace(/\s+/g, "-").toLowerCase();
      if (slug) map[slug] = title;
    });
  };

  parseMedia(languages?.data?.data?.[0]?.Media || []);
  parseMedia(services?.data?.data?.[0]?.Media || []);
  parseMedia(industries?.data?.data?.[0]?.Media || []);
  parseMedia(qualities?.data?.data?.[0]?.Media || []);
  parseMedia(aboutUs?.data?.data?.[0]?.Media || []);

  return map;
};

// Returns: { mergedContent: { slug: {title, description, image, etc} } }
export const fetchAllData = async () => {
  const urls = {
    languages: `${API_BASE}all-languages?populate[Media][populate]=*`,
    services: `${API_BASE}all-services?populate[Media][populate]=*`,
    industries: `${API_BASE}all-industries-and-clients?populate[Media][populate]=*`,
    qualities: `${API_BASE}all-qualities?populate[Media][populate]=*`,
    aboutUs: `${API_BASE}all-about-uses?populate[Media][populate]=*`,
  };

  const [languagesRes, servicesRes, industriesRes, qualitiesRes, aboutUsRes] = await Promise.all([
    axios.get(urls.languages),
    axios.get(urls.services),
    axios.get(urls.industries),
    axios.get(urls.qualities),
    axios.get(urls.aboutUs),
  ]);

  const parseMedia = (mediaArray) => {
    const map = {};
    if (!Array.isArray(mediaArray)) return map;
    mediaArray.forEach((item) => {
      const key = (item?.NameOfPages || item?.title || "").trim().toLowerCase().replace(/\s+/g, "-");
      if (!key) return;
      map[key] = {
        title: item.title,
        description: item.description,
        image: `${IMAGE_BASE}${item?.media?.[0]?.url}`,
      };
    });
    return map;
  };

  const mergedContent = {
    default: {
      title: "Top 10 Languages",
      image: 'Image1',
      description: "Delivering quality, timely service and giving value for money are the essential principles on which we do business.",
      bgImage: 'servicesBg',
      videoUrl: "https://videocdn.cdnpk.net/videos/9477d892-5d47-4582-942e-483809c868d9/horizontal/previews/clear/large.mp4"
    },
    ...parseMedia(languagesRes?.data?.data?.[0]?.Media || []),
    ...parseMedia(servicesRes?.data?.data?.[0]?.Media || []),
    ...parseMedia(industriesRes?.data?.data?.[0]?.Media || []),
    ...parseMedia(qualitiesRes?.data?.data?.[0]?.Media || []),
    ...parseMedia(aboutUsRes?.data?.data?.[0]?.Media || []),
  };

  return { mergedContent };
};
