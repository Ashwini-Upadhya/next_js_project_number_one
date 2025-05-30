import React, { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import servicesBg from "../assets/Images/AllServices/background-img.png";
import Image1 from "../assets/Images/servicesImages/card1.png";
import { SyncLoader } from "react-spinners";

export const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
    const serviceUrlMapRef = useRef({});
    const [heroContent, setHeroContent] = useState({});
    const [languageServices, setLanguageServices] = useState([]);
    const [translationServices, setTranslationServices] = useState([]);
    const [industryServices, setIndustryServices] = useState([]);
    const [qualityServices, setQualityServices] = useState([]);
    const [aboutusServices, setAboutusServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [languageSubItems, setLanguageSubItems] = useState({});
    const [translationSubItems, setTranslationSubItems] = useState({});
    const [industrySubItems, setIndustrySubItems] = useState({});
    const [qualitySubItems, setQualitySubItems] = useState({});
    const [aboutusSubItems, setAboutusSubItems] = useState({});


    function LoadingWithRedirect() {
        return (
            <div className="d-flex justify-content-center align-items-center h-100">
                <SyncLoader color="#ff8c8c" />
            </div>
        );
    }

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const base = import.meta.env.VITE_REACT_APP_BASE_URL;
                const imageBase = import.meta.env.VITE_REACT_APP_IMAGE_URL;

                const urls = {
                    languages: `${base}all-languages?populate[Media][populate]=*`,
                    services: `${base}all-services?populate[Media][populate]=*`,
                    industries: `${base}all-industries-and-clients?populate[Media][populate]=*`,
                    qualities: `${base}all-qualities?populate[Media][populate]=*`,
                    aboutUs: `${base}all-about-uses?populate[Media][populate]=*`,
                };

                const [languagesRes, servicesRes, industriesRes, qualitiesRes, aboutUsRes] = await Promise.all([
                    axios.get(urls.languages),
                    axios.get(urls.services),
                    axios.get(urls.industries),
                    axios.get(urls.qualities),
                    axios.get(urls.aboutUs),
                ]);

                const mergedContent = {};
                mergedContent["default"] = {
                    title: "Top 10 Languages",
                    image: Image1,
                    description: "Delivering quality, timely service and giving value for money are the essential principles on which we do business.",
                    bgImage: servicesBg,
                    videoUrl: "https://videocdn.cdnpk.net/videos/9477d892-5d47-4582-942e-483809c868d9/horizontal/previews/clear/large.mp4"
                };

                const parseMedia = (mediaArray, serviceListSetter, subItemsSetter) => {
                    const serviceList = [];
                    const subItemsMap = {};

                    if (!Array.isArray(mediaArray)) return [serviceList, subItemsMap];

                    mediaArray.forEach((element) => {
                        const title = element?.title;
                        const description = element?.description;
                        const NameOfPages = element?.NameOfPages;
                        const thirdLevelPages = element?.subItems || [];
                        const image = `${imageBase}${element?.media?.[0]?.url}`;
                        const pageKey = NameOfPages || title;

                        if (title && image) {
                            mergedContent[pageKey] = {
                                title,
                                image,
                                description,
                                bgImage: servicesBg,
                                videoUrl: mergedContent["default"].videoUrl,
                            };
                        }

                        if (thirdLevelPages.length > 0) {
                            subItemsMap[title] = thirdLevelPages.map((item) => {
                                const key = item?.NameOfPages || item?.title;
                                const value = item?.title || item?.NameOfPages;
                                return { [key]: value };
                            });

                            thirdLevelPages.forEach((item) => {
                                const itemKey = (item?.NameOfPages || item?.title || "").trim().replace(/\s+/g, "-").toLowerCase();
                                const itemValue = item?.NameOfPages || item?.title;
                                if (itemKey && itemValue && !serviceUrlMapRef.current[itemKey]) {
                                    serviceUrlMapRef.current[itemKey] = itemValue;
                                }
                            });
                        }


                        const key = pageKey?.trim().replace(/\s+/g, "-").toLowerCase();
                        if (key && pageKey && !serviceUrlMapRef.current[key]) {
                            serviceUrlMapRef.current[key] = pageKey;
                        }

                        serviceList.push(pageKey);
                    });

                    serviceListSetter([...new Set(serviceList)]);
                    subItemsSetter(subItemsMap);
                };

                parseMedia(
                    languagesRes?.data?.data?.[0]?.Media || [],
                    setLanguageServices,
                    setLanguageSubItems
                );
                parseMedia(
                    servicesRes?.data?.data?.[0]?.Media || [],
                    setTranslationServices,
                    setTranslationSubItems
                );
                parseMedia(
                    industriesRes?.data?.data?.[0]?.Media || [],
                    setIndustryServices,
                    setIndustrySubItems
                );
                parseMedia(
                    qualitiesRes?.data?.data?.[0]?.Media || [],
                    setQualityServices,
                    setQualitySubItems
                );
                parseMedia(
                    aboutUsRes?.data?.data?.[0]?.Media || [],
                    setAboutusServices,
                    setAboutusSubItems
                );

                setHeroContent(mergedContent);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching service data:", err);
            }
        };

        fetchAllData();
    }, []);

    const reverseServiceUrlMap = Object.entries(serviceUrlMapRef.current).reduce(
        (acc, [url, name]) => ({ ...acc, [name]: url }),
        {}
    );
    return (
        <ServiceContext.Provider
            value={{
                serviceUrlMapRef,
                reverseServiceUrlMap,
                heroContent,
                languageServices,
                translationServices,
                industryServices,
                qualityServices,
                aboutusServices,
                languageSubItems,
                translationSubItems,
                industrySubItems,
                qualitySubItems,
                aboutusSubItems
            }}
        >
            {!loading ? children : <LoadingWithRedirect />}
        </ServiceContext.Provider>
    );
};
