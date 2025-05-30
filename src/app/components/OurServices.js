import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Card from "react-bootstrap/Card";
import ContentIcon from '../../assets/Images/OurServices/contentWriting.svg'
import ContentIconW from '../../assets/Images/OurServices/contentWritingW.svg'
import LocalizationIcon from '../../assets/Images/OurServices/localization.svg'
import LocalizationIconW from '../../assets/Images/OurServices/localizationW.svg'
import TranslationIcon from '../../assets/Images/OurServices/translation.svg'
import TranslationIconW from '../../assets/Images/OurServices/translationW.svg'
import Dtpicon from '../../assets/Images/OurServices/dtpicon.svg'
import DtpiconW from '../../assets/Images/OurServices/dtpiconW.svg'
import Interpretation from '../../assets/Images/OurServices/interpretation.svg'
import InterpretationW from '../../assets/Images/OurServices/interpretationW.svg'
import Voiceover from '../../assets/Images/OurServices/voiceover.svg'
import VoiceoverW from '../../assets/Images/OurServices/voiceoverW.svg'
import './OurServices.css';

const OurServices = () => {
    const [index, setIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const swiperRef = useRef(null);

    const services = [
        {
            img: TranslationIcon,
            imgHover: TranslationIconW,
            title: "Translation Services",
            description: "We only deal with local translators for all your language translation needs...",
            url: "/Services/translation-services"
        },
        {
            img: LocalizationIcon,
            imgHover: LocalizationIconW,
            title: "Localization Services",
            description: "Website, Multi-Media, and Software Localization in multiple languages...",
            url: "/Services/localization-services"
        },
        {
            img: ContentIcon,
            imgHover: ContentIconW,
            title: "Content Writing Services",
            description: "We help organizations to showcase their specialized ideas and skills...",
            url: "/Services/content-writing-services"
        },
        {
            img: Dtpicon,
            imgHover: DtpiconW,
            title: "DTP Services",
            description: "Our DTP and graphic designers are well versed with the most recent DTP Software...",
            url: "/Services/dtp-services"
        },
        {
            img: Voiceover,
            imgHover: VoiceoverW,
            title: "Voice Over Services",
            description: "We have the correct assets of voice over specialists...",
            url: "/Services/voice-over-services"
        },
        {
            img: Interpretation,
            imgHover: InterpretationW,
            title: "Interpretation Services",
            description: "We at Shakti Enterprise have custom tailored interpretation solutions...",
            url: "/Services/interpretation-services"
        },
    ];


    return (
        <div style={{ paddingBottom: "4rem" }}>
            <div className="text-center fw-bold" style={{ color: "#F5454E", fontSize: "18px", textTransform: "uppercase", }}>
                What We Offer
            </div>
            <div className="text-center fw-bold" style={{ color: "#000", fontSize: "30px" }}>
                Translation Services
            </div>
            <Container>
                <Row style={{ marginTop: "1.5rem" }} className="bg-white">
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setIndex(swiper.realIndex)}
                        slidesPerView={1}
                        spaceBetween={0}
                        breakpoints={{
                            576: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        initialSlide={0}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        {services.map((service, i) => (
                            <SwiperSlide key={i}>
                                <div className="d-flex h-100" onClick={() => window.location.href = service.url} style={{ cursor: 'pointer' }}>
                                    <Card
                                        className="flex-fill d-flex flex-column justify-content-between"
                                        style={{
                                            margin: '20px',
                                            borderRadius: "35px",
                                            borderColor: "#fff",
                                            boxShadow: "0px 3px 30px rgba(0, 0, 0, .1)",
                                        }}
                                        onMouseEnter={() => setHoveredIndex(i)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >

                                        <Card.Body className="p-3 boxshadowclass d-flex flex-column">
                                            <div className="d-flex justify-content-center align-items-center pt-3">
                                                <img
                                                    src={hoveredIndex === i ? service.imgHover : service.img}
                                                    alt=""
                                                    style={{ width: "13%" }}
                                                />
                                            </div>
                                            <Card.Title className="text-center boxshadowclasstext mt-4" style={{ textTransform: "uppercase", fontWeight: "bold", fontSize: "1.2rem", color: "#737791" }}>
                                                {service.title}
                                            </Card.Title>
                                            <Card.Text className="text-center boxshadowclasstext mt-auto pt-2" style={{ paddingBottom: "1rem", paddingLeft: "1rem", paddingRight: "1rem", fontSize: "0.9rem", color: "#737791" }}>
                                                {service.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Row>
                <div className="d-flex justify-content-center align-items-center mt-4 position-relative">
                    <div
                        style={{
                            position: "absolute",
                            width: "500px",
                            height: "1px",
                            backgroundColor: "#737791",
                            top: "50%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 2,
                        }}
                    ></div>
                    {services.map((_, btnIndex) => (
                        <span
                            key={btnIndex}
                            onClick={() => {
                                swiperRef.current?.slideToLoop(btnIndex); // Swiper loop-safe slide
                                setIndex(btnIndex);
                            }}
                            style={{
                                width: "11px",
                                height: "11px",
                                margin: "0 45px",
                                backgroundColor: index === btnIndex ? "#C3CDDD" : "#F5454E",
                                borderRadius: "50%",
                                display: "inline-block",
                                cursor: "pointer",
                                transition: "0.3s",
                                border: index === btnIndex ? "0.2px solid #C3CDDD" : "#F5454E",
                                position: "relative",
                                zIndex: 3,
                            }}
                        ></span>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default OurServices;
