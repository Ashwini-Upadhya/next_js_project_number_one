import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Card from "react-bootstrap/Card";
import Man1 from '../../assets/Images/Clienttestimonials/man1.png';
import Man2 from '../../assets/Images/Clienttestimonials/man2.png';
import Man3 from '../../assets/Images/Clienttestimonials/man3.png';
import VecT from '../../assets/Images/Clienttestimonials/Vectt.svg';
import VecB from '../../assets/Images/Clienttestimonials/Vecbb.svg';
import StarS from '../../assets/Images/Clienttestimonials/stars.svg';
import Starw from '../../assets/Images/Clienttestimonials/starw.svg';

const OurServices = () => {
    const [index, setIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const services = [
        { img: Man1, title: "Albert Flores", position: "CEO, Company A", description: "Hi Amit, this project was unique and I am really happy with the way you handled this task." },
        { img: Man3, title: "Dianne Russell", position: "Designer, Company C", description: "Thank you for all your support. I had given you thin timelines to work on this project. Really appreciate for all the efforts put in by you and your team to complete the project on time." },
        { img: Man1, title: "Albert Flores", position: "CEO, Company A", description: "Hi Amit, this project was unique and I am really happy with the way you handled this task." },
        { img: Man2, title: "Marvin McKinney", position: "Manager, Company B", description: "It was a pleasure working together with you and I am impressed by your work! We will definitely recommend you to anyone who would want their websites to be translated!" },

    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % services.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [services.length]);

    return (
        <div className="py-1">
            <div className="text-center fw-bold" style={{ color: "#F5454E", fontSize: "18px", textTransform: "uppercase" }}>
                Client Testimonials
            </div>
            <div className="text-center  fw-bold mb-3" style={{ color: "#000", fontSize: "30px" }}>
                What our Customers are saying
            </div>
            <p className="text-center fs-6" style={{ color: '#737791' }}>At Shakti Enterprise, we are driven by the conviction that translation is about</p>
            <Container>
                <Row style={{ marginTop: "3.5rem" }}>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={0}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        initialSlide={1}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                        onSlideChange={(swiper) => setIndex(swiper.realIndex)}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {services.map((service, i) => (
                            <SwiperSlide key={i}>
                                {({ isActive }) => (
                                    <Col xs={12} sm={12} >
                                        <div
                                            onMouseEnter={() => setHoveredIndex(i)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                            style={{ position: "relative" }}
                                        >
                                            <Card
                                                style={{
                                                    margin: '40px',
                                                    borderRadius: "35px",
                                                    transform: isActive ? "scale(1.1)" : "scale(1)",
                                                    backgroundColor: isActive ? "#F5454E" : "#fff",
                                                    transition: "transform 0.3s ease-in-out",
                                                    boxShadow: !isActive
                                                        ? "5.71px 9.79px 35.08px 0px #00000024" // Shadow for side cards
                                                        : "0px 4px 15px rgba(0, 0, 0, 0.2)", // Shadow for active card
                                                    border: "none", // Border removed
                                                    marginTop: "80px",
                                                    position: "relative", // Added for absolute positioning of images
                                                    maxHeight: "270px",
                                                    minHeight: "270px"
                                                }}
                                            >
                                                {/* VecT image at top-left */}
                                                <img
                                                    src={VecT}
                                                    alt="VecT"
                                                    style={{
                                                        position: "absolute",
                                                        top: "10px",
                                                        left: "10px",
                                                        width: "60px", // Larger size
                                                        height: "60px", // Larger size
                                                        opacity: 0.5,
                                                        zIndex: 1,
                                                    }}
                                                />
                                                <Card.Body className="p-3" style={{ padding: 0, borderRadius: "35px" }}>
                                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)" }}>
                                                        <img
                                                            src={service.img}
                                                            alt={service.title}
                                                            style={{
                                                                width: "80px",
                                                                height: "80px",
                                                                borderRadius: "50%",
                                                                border: "5px solid #fff",
                                                                transform: hoveredIndex === i ? "rotateY(360deg)" : "rotateY(0deg)",
                                                                transition: "transform 0.5s ease-in-out",
                                                            }}
                                                        />
                                                    </div>
                                                    <Card.Title
                                                        className="text-center"
                                                        style={{
                                                            paddingTop: "1rem",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            textTransform: "uppercase",
                                                            fontWeight: "bold",
                                                            fontSize: "18px",
                                                            color: isActive ? "#fff" : "#737791",
                                                        }}
                                                    >
                                                        {service.title}
                                                    </Card.Title>
                                                    {/* Position below the name */}
                                                    <p
                                                        className="text-center"
                                                        style={{
                                                            marginTop: "0.5rem",
                                                            fontSize: "14px",
                                                            color: isActive ? "#fff" : "#737791",
                                                        }}
                                                    >
                                                        {service.position}
                                                    </p>
                                                    <Card.Text
                                                        className="text-center"
                                                        style={{
                                                            paddingTop: "0.5rem",
                                                            paddingBottom: "0.5rem", // Reduced padding
                                                            paddingLeft: "1rem",
                                                            paddingRight: "1rem",
                                                            fontSize: "14px",
                                                            color: isActive ? "#fff" : "#737791",
                                                        }}
                                                    >
                                                        {service.description}
                                                    </Card.Text>
                                                    {/* Stars and VecB at the bottom */}
                                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "0.5rem", position: "relative" }}> {/* Reduced margin */}
                                                        {/* Stars */}
                                                        <div style={{ marginRight: "10px" }}>
                                                            {isActive ? (
                                                                <img
                                                                    src={Starw}
                                                                    alt="Starw"
                                                                    style={{
                                                                        width: "140px", // Smaller size
                                                                        height: "20px", // Smaller size
                                                                        opacity: 0.8,
                                                                    }}
                                                                />
                                                            ) : (
                                                                <img
                                                                    src={StarS}
                                                                    alt="StarS"
                                                                    style={{
                                                                        width: "140px", // Smaller size
                                                                        height: "20px", // Smaller size
                                                                        opacity: 0.8,
                                                                    }}
                                                                />
                                                            )}
                                                        </div>
                                                        {/* VecB image at the end */}
                                                        <img
                                                            src={VecB}
                                                            alt="VecB"
                                                            style={{
                                                                width: "25px", // Smaller size
                                                                height: "25px", // Smaller size
                                                                opacity: 0.5,
                                                                position: "absolute",
                                                                right: "10px", // Move to the end
                                                            }}
                                                        />
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Col>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Row>
                <div className="d-flex justify-content-center align-items-center mt-4 position-relative">
                    <div
                        style={{
                            position: "absolute",
                            width: "300px",
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
                            onClick={() => setIndex(btnIndex)}
                            style={{
                                width: "11px",
                                height: "11px",
                                margin: "0 45px",
                                backgroundColor: index === btnIndex ? "#C3CDDD" : "#F5454E",
                                borderRadius: "50%",
                                display: "inline-block",
                                cursor: "pointer",
                                transition: "0.3s",
                                border: index === btnIndex ? "0.2px solid #C3CDDD" : "0.2px solid #F5454E",
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







// import React, { useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// import Man1 from '../../assets/Images/Clienttestimonials/man1.png';
// import Man2 from '../../assets/Images/Clienttestimonials/man2.png';
// import Man3 from '../../assets/Images/Clienttestimonials/man3.png';
// import VecT from '../../assets/Images/Clienttestimonials/Vectt.svg';
// import VecB from '../../assets/Images/Clienttestimonials/Vecbb.svg';
// import StarS from '../../assets/Images/Clienttestimonials/stars.svg';
// import Starw from '../../assets/Images/Clienttestimonials/starw.svg';

// const OurServices = () => {
//     const [hoveredIndex, setHoveredIndex] = useState(null);

//     const services = [
//         { img: Man1, title: "Albert Flores", position: "CEO, Company A", description: "Hi Amit, this project was unique and I am really happy with the way you handled this task." },
//         { img: Man2, title: "Marvin McKinney", position: "Manager, Company B", description: "It was a pleasure working together with you and I am impressed by your work! We will definitely recommend you to anyone who would want their websites to be translated!" },
//         { img: Man3, title: "Dianne Russell", position: "Designer, Company C", description: "Thank you for all your support. I had given you thin timelines to work on this project. Really appreciate for all the efforts put in by you and your team to complete the project on time." },
//     ];

//     return (
//         <div className="py-1">
//             <div className="text-center fw-bold" style={{ color: "#F5454E", fontSize: "18px", textTransform: "uppercase" }}>
//                 Client Testimonials
//             </div>
//             <div className="text-center  fw-bold mb-3" style={{ color: "#000", fontSize: "30px" }}>
//                 What our Customers are saying
//             </div>
//             <p className="text-center fs-6" style={{ color: '#737791' }}>we are driven by the conviction that translation is about socially associating with the intensity of clearness</p>
//             <Container>
//                 <Row style={{ marginTop: "3.5rem" }}>
//                     {services.map((service, i) => (
//                         <Col key={i} xs={12} md={4} className="d-flex">
//                             <div
//                                 onMouseEnter={() => setHoveredIndex(i)}
//                                 onMouseLeave={() => setHoveredIndex(null)}
//                                 style={{ position: "relative", width: "100%" }}
//                             >
//                                 <Card
//                                     style={{
//                                         margin: '20px',
//                                         borderRadius: "35px",
//                                         backgroundColor: hoveredIndex === i ? "#F5454E" : "#fff",
//                                         boxShadow: "5.71px 9.79px 35.08px 0px #00000024",
//                                         border: "none",
//                                         marginTop: "40px",
//                                         position: "relative",
//                                         transition: "all 0.3s ease-in-out",
//                                     }} className="h-75 "
//                                 >
//                                     <img
//                                         src={VecT}
//                                         alt="VecT"
//                                         style={{
//                                             position: "absolute",
//                                             top: "10px",
//                                             left: "10px",
//                                             width: "60px",
//                                             height: "60px",
//                                             opacity: 0.5,
//                                             zIndex: 1,
//                                         }}
//                                     />
//                                     <Card.Body className="p-3 d-flex flex-column justify-content-between align-items-center" style={{ padding: 0, borderRadius: "35px" }}>
//                                         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)" }}>
//                                             <img
//                                                 src={service.img}
//                                                 alt={service.title}
//                                                 style={{
//                                                     width: "80px",
//                                                     height: "80px",
//                                                     borderRadius: "50%",
//                                                     border: "5px solid #fff",
//                                                     transform: hoveredIndex == i ? "rotateY(360deg)" : "rotateY(0deg)",
//                                                     transition: "transform 0.5s ease-in-out",
//                                                 }}
//                                             />
//                                         </div>
//                                         <Card.Title
//                                             className="text-center"
//                                             style={{
//                                                 paddingTop: "1rem",
//                                                 display: "flex",
//                                                 justifyContent: "center",
//                                                 textTransform: "uppercase",
//                                                 fontWeight: "bold",
//                                                 fontSize: "18px",
//                                                 color: hoveredIndex === i ? "#fff" : "#737791",
//                                             }}
//                                         >
//                                             {service.title}
//                                         </Card.Title>
//                                         <p
//                                             className="text-center"
//                                             style={{
//                                                 marginTop: "0.5rem",
//                                                 fontSize: "14px",
//                                                 color: hoveredIndex === i ? "#fff" : "#737791",
//                                             }}
//                                         >
//                                             {service.position}
//                                         </p>
//                                         <Card.Text
//                                             className="text-center"
//                                             style={{
//                                                 paddingTop: "0.5rem",
//                                                 paddingBottom: "0.5rem",
//                                                 paddingLeft: "1rem",
//                                                 paddingRight: "1rem",
//                                                 fontSize: "14px",
//                                                 color: hoveredIndex === i ? "#fff" : "#737791",
//                                             }}
//                                         >
//                                             {service.description}
//                                         </Card.Text>
//                                         <div className="d-flex justify-content-between mb-5" >
//                                             <img
//                                                 src={hoveredIndex === i ? Starw : StarS}
//                                                 alt="Stars"
//                                                 style={{
//                                                     width: "140px",
//                                                     height: "20px",
//                                                     opacity: 0.8,
//                                                 }}
//                                             />
//                                             <img
//                                                 src={VecB}
//                                                 alt="VecB"
//                                                 style={{
//                                                     width: "25px",
//                                                     height: "25px",
//                                                     opacity: 0.5,
//                                                     position: "absolute",
//                                                     right: "10px",
//                                                 }}
//                                             />
//                                         </div>




//                                     </Card.Body>
//                                 </Card>
//                             </div>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </div>
//     );
// };

// export default OurServices;