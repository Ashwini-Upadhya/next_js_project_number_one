// import React from "react";
// import Marquee from "react-fast-marquee";
// import { Container, Card } from "react-bootstrap";
// import DocumentIcon from "../../assets/Images/OurExpertise/image.png";
// import WebIcon from "../../assets/Images/OurExpertise/image1.png";
// import './OurExpertise.css'

// const OurExpertise = () => {
//     const services = [
//         { img: DocumentIcon, title: "Engineering" },
//         { img: WebIcon, title: "Business" },
//         { img: DocumentIcon, title: "Finance" },
//         { img: WebIcon, title: "Marketing" },
//         { img: DocumentIcon, title: "Legal" },
//     ];

//     // Duplicate the first few cards at the end to create a smooth loop
//     const repeatedServices = [...services, ...services.slice(0, 5)];

//     return (
//         <div style={{ marginTop: "3rem" }}>
//             <Container>
//                 <p
//                     style={{
//                         fontSize: "1.25rem",
//                         fontWeight: "bold",
//                         textTransform: "uppercase",
//                         color: "#F5454E",
//                         textAlign: "left",
//                     }}
//                 >
//                     Expertise
//                 </p>
//                 <h1 style={{ color: "black", fontWeight: "bold", textAlign: "left" }}>
//                     Our Expertise
//                 </h1>

//                 {/* Marquee for Infinite Scrolling */}
//                 <div className="mt-4">
//                     {/* <Marquee direction="left" speed={50} pauseOnHover> */}
//                     <div className="marquee-container">
//                         <Marquee direction="left" speed={100} >
//                             <div style={{ display: "flex", gap: "20px", paddingLeft: "20px", paddingRight: "20px" }}>
//                                 {repeatedServices.map((service, index) => (
//                                     <Card
//                                         key={index}
//                                         className="shadow mb-5 bg-white rounded"
//                                         style={{
//                                             width: "400px",
//                                             transition: "transform 0.5s ease-in-out",
//                                         }}
//                                     >
//                                         <Card.Body style={{ padding: 0 }}>
//                                             <div style={{ display: "flex" }}>
//                                                 <img
//                                                     src={service.img}
//                                                     alt=""
//                                                     style={{ width: "100%", height: "200px", objectFit: "cover" }}
//                                                 />
//                                             </div>
//                                             <Card.Title
//                                                 style={{
//                                                     paddingTop: "1rem",
//                                                     marginTop: "1rem",
//                                                     display: "flex",
//                                                     justifyContent: "center",
//                                                     textTransform: "uppercase",
//                                                     fontWeight: "bold",
//                                                     fontSize: "1.5rem",
//                                                     color: "#F5454E",
//                                                 }}
//                                             >
//                                                 {service.title}
//                                             </Card.Title>
//                                             <Card.Text
//                                                 className="px-4 pb-4"
//                                                 style={{
//                                                     fontSize: "16px",
//                                                     color: "#737791",
//                                                     textAlign: "center",
//                                                 }}
//                                             >
//                                                 We provide accurate and timely translation of your documents, ensuring clear and effective communication.
//                                             </Card.Text>
//                                         </Card.Body>
//                                     </Card>
//                                 ))}
//                             </div>
//                         </Marquee>
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     );
// };

// export default OurExpertise;



import React, { useState } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./OurExpertise.css";

// RED icons
import TranslationIcon from "../../assets/Images/OurExpertise/translationService-red.png";
import LocalizationIcon from "../../assets/Images/OurExpertise/localiseService-red.png";
import ContentIcon from "../../assets/Images/OurExpertise/contentIcon-red.png";
import DtpIcon from "../../assets/Images/OurExpertise/tpService-red.png";
import VoiceoverIcon from "../../assets/Images/OurExpertise/voiceOverService-red.png";
import InterpretationIcon from "../../assets/Images/OurExpertise/interpretationIcon-red.png";

// WHITE icons
import TranslationIconW from "../../assets/Images/OurExpertise/translationService-w.png";
import LocalizationIconW from "../../assets/Images/OurExpertise/localiseService-w.png";
import ContentIconW from "../../assets/Images/OurExpertise/contentIcon-w.png";
import DtpIconW from "../../assets/Images/OurExpertise/tpService-w.png";
import VoiceoverIconW from "../../assets/Images/OurExpertise/voiceOverService-w.png";
import InterpretationIconW from "../../assets/Images/OurExpertise/interpretationIcon-w.png";

import Image1 from "../../assets/Images/OurExpertise/Translation-services.jpg";
import Image2 from "../../assets/Images/OurExpertise/Localization-service.jpg";
import Image3 from "../../assets/Images/OurExpertise/Content-Writing.jpg";
import Image4 from "../../assets/Images/OurExpertise/Dtp-service.jpg";
import Image5 from "../../assets/Images/OurExpertise/Voice-over.jpg";
import Image6 from "../../assets/Images/OurExpertise/Interpretation-service.jpg";


const services = [
    { icon: TranslationIcon, iconW: TranslationIconW, image: Image1, title: "Translation Services", description: "We only deal with local translators for all your language translation needs. With this the end report genuinely passes on the planned message to the user. We believe in utilizing in-nation and local language proficient translators who have area involvement with educational, human services, clinical, finance, advertising, legal, and industrial divisions so the last archive mirrors the expected message of the document." },
    { icon: LocalizationIcon, iconW: LocalizationIconW, image: Image2, title: "Localization Services", description: "Website, Multi-Media, and Software Localization in multiple languages empowers you to interact with the intended interest group and have the right effect. Have you already created content for your Global Audiences? To curtail this urgent need of globalization opting for localization services can be a perfect option. Every region has a different dialect and hence the same content cannot be used everywhere." },
    { icon: ContentIcon, iconW: ContentIconW, image: Image3, title: "Content Writing Services", description: "We help organizations to showcase their specialized ideas and skills by creating content that is effectively comprehended by even a layman. Content marketing today is all about quality writing. This means engaging your customers with deep, rich ideas that help them believe your product or service is the answer to all their problems. It has meaningful interactions that start with your outbound messaging and end with your inbound sales." },
    { icon: DtpIcon, iconW: DtpIconW, image: Image4, title: "DTP Services", description: "Our DTP and graphic designers are well versed with the most recent DTP Software to give you the localized ready-to-print file as per the source document. Multilingual DTP is an art of creating a translated document that is faithful to the original in terms of layout and design aesthetics. Desktop Publishing software helps in producing a wide variety of materials, from presentations, user manuals, menus, magazines, or books." },
    { icon: VoiceoverIcon, iconW: VoiceoverIconW, image: Image5, title: "Voice Over Services", description: "We have the correct assets of voice over specialists who are in-nation experts for dubbing your corporate and all promotional AVs in more than 100 dialects. Voice Over is a narration or dialogue done by an off-screen narrator/ voice artist. This is used in radio, TV, films, theatre, documentaries, news reports, etc. It is usually pre-recorded and is attached to the video file later on." },
    { icon: InterpretationIcon, iconW: InterpretationIconW, image: Image6, title: "Interpretation Services", description: "We at Shakti Enterprise have custom fitted interpretation solutions for all of your needs. In today's internet era, it is easier than ever to do business with people in countries across the world. As companies are going global, it is essential to utilize interpretation services that help you interact with global audience." },
];

const OurExpertise = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div style={{ marginTop: "3rem" }}>
            <Container>
                <div className="section-subtitle">EXPERTISE</div>
                <div className="section-title">Our Expertise</div>
                <Row className="" >
                    {/* Sidebar */}
                    <Col md={4} className=" d-flex flex-column">
                        <Card className="border-0 h-100  justify-content-between">
                            {services.map((service, index) => (
                                <Card
                                    key={index}
                                    className={`mb-2 expertise-card shadow ${activeIndex === index ? "active" : ""}`}
                                    onClick={() => setActiveIndex(index)}
                                    onMouseEnter={() => setHoverIndex(index)}
                                    onMouseLeave={() => setHoverIndex(null)}
                                >
                                    <Card.Body className="d-flex align-items-center gap-2 py-2 px-3">
                                        <Image
                                            src={
                                                activeIndex === index || hoverIndex === index
                                                    ? service.iconW
                                                    : service.icon
                                            }
                                            width={35}
                                            height={35}
                                        />
                                        <span className="service-text">{service.title}</span>
                                    </Card.Body>
                                </Card>

                            ))}
                        </Card>
                    </Col>

                    {/* Content */}
                    <Col md={8} >
                        <Card className="expertise-right-card border-0 h-100">
                            <Row className="h-100 d-flex justify-content-between align-items-center">
                                <Col md={7} lg={7} >
                                    <h5 className="content-title mt-2">{services[activeIndex].title}</h5>
                                    <p className="content-description">
                                        {services[activeIndex].description}
                                    </p>
                                </Col>
                                <Col md={5} lg={5} className="position-relative  d-flex justify-content-center align-items-center">
                                    <div className="icon-badge">
                                        <Image src={services[activeIndex].iconW} width={40} height={40} />
                                    </div>
                                    <Image src={services[activeIndex].image} className="rounded content-image" />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default OurExpertise;
