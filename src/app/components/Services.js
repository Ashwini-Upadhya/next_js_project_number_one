// import { Container, Row, Col, Button, Form, InputGroup, Image } from "react-bootstrap";
// import "./services.css";
// import { Link } from "react-router-dom";
// import OurClients from "../OurClients/OurClients";
// import MyNavbar from "../Navbar/MyNavbar";
// import FooterMenu from "../FooterMenu/FooterMenu";
// import { FaPaperPlane } from "react-icons/fa";
// import Image1 from "../../assets/Images/servicesImages/card1.png"
// import Image2 from "../../assets/Images/servicesImages/card2.png"
// import Image3 from "../../assets/Images/servicesImages/card3.png"
// import Image4 from "../../assets/Images/servicesImages/card4.png"
// import Image5 from "../../assets/Images/servicesImages/card5.png"
// import Image6 from "../../assets/Images/servicesImages/card6.png"
// import Image7 from "../../assets/Images/servicesImages/card7.png"
// import Image8 from "../../assets/Images/servicesImages/card8.png"
// import Image9 from "../../assets/Images/servicesImages/card9.png"
// import Image10 from "../../assets/Images/servicesImages/card10.png"
// import Image11 from "../../assets/Images/servicesImages/card11.png"



// export default function LanguageServicesPage() {
//   return (
//     <div className="language-services-page">
//       <MyNavbar />
//       {/* Hero Section */}
//       <div className="hero-section position-relative overflow-hidden">
//         <div className="hero-bg position-absolute w-100 h-100"></div>
//         <Container fluid className="py-5">
//           <Row className="align-items-center">
//             <Col xs={12} lg={6} className="text-white py-5 ps-md-5 d-flex justify-content-center align-items-center">
//               <div className="hero-content ps-md-4">
//                 <p className="mb-0">
//                   <Link to="/" className="text-white text-decoration-none">
//                     Home
//                   </Link>{" "}
//                   / All Services
//                 </p>
//                 <h1 className="display-5 fw-bold mt-4 mb-4">
//                   LOCALIZATION IS THE KEY
//                   <br />
//                   FOR GLOBAL SUCCESS
//                 </h1>
//                 <p className="mb-4 pe-md-5">
//                   Localization Service We believe in utilizing in-nation and local language proficient translators who have area involvement with educational, human services, clinical, finance, advertising, legal.
//                 </p>
//                 <div className="d-flex flex-wrap gap-3">
//                   <Button variant="light" className="rounded-pill px-4 py-2">
//                     Get a Quote
//                   </Button>
//                   <Button variant="outline-light" className="rounded-pill px-4 py-2">
//                     Schedule a Call
//                   </Button>
//                 </div>
//               </div>
//             </Col>
//             <Col xs={12} lg={6} className="mt-5 mt-lg-0">
//               <div className="hero-image position-relative">
//                 <div className="image-container rounded-4 overflow-hidden">
//                   <Image
//                     src="/placeholder.svg?height=400&width=600"
//                     alt="Team meeting"
//                     width={600}
//                     height={400}
//                     className="w-100 h-auto"
//                   />
//                   <div className="play-button-overlay">
//                     <div className="play-button">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="play-icon"
//                       >
//                         <polygon points="5 3 19 12 5 21 5 3"></polygon>
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* Language Power Section */}
//       <div className="language-power-section py-5">
//         <Container>
//           <div className="text-center mb-5">
//             <p className="text-danger mb-2">LANGUAGE POWER</p>
//             <h2 className="fw-bold mb-3">We Are Your Language Power To Connect With Global Consumer</h2>
//             <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
//               Our services are oriented to meet Industry needs and therefore we lay great emphasis to ensure website content in the source document is effective from the reader’s perspective.
//             </p>
//           </div>

//           {/* Service Cards */}
//           <Row className="g-4">
//             <Col md={4}>
//               <div className="service-card border rounded-4 overflow-hidden h-100">
//                 <div className="service-image">
//                   <Image
//                     src={Image1}
//                     alt="Translation services"
//                   // width={400}
//                   // height={200}
//                   // className="w-100 h-auto"
//                   />
//                 </div>
//                 <div className="service-content p-4">
//                   <h4 className="text-danger fw-bold">Translation Type</h4>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
//                     mattis.
//                   </p>
//                   <Link href="#" className="text-decoration-none text-dark d-flex align-items-center">
//                     Read More
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="ms-2"
//                     >
//                       <line x1="5" y1="12" x2="19" y2="12"></line>
//                       <polyline points="12 5 19 12 12 19"></polyline>
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </Col>
//             <Col md={4}>
//               <div className="service-card border rounded-4 overflow-hidden h-100">
//                 <div className="service-image">
//                   <Image
//                     src={Image2}
//                     alt="Content writing services"
//                     width={400}
//                     height={200}
//                     className="w-100 h-auto"
//                   />
//                 </div>
//                 <div className="service-content p-4">
//                   <h4 className="text-danger fw-bold">Content Writing Services</h4>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
//                     mattis.
//                   </p>
//                   <Link href="#" className="text-decoration-none text-dark d-flex align-items-center">
//                     Read More
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="ms-2"
//                     >
//                       <line x1="5" y1="12" x2="19" y2="12"></line>
//                       <polyline points="12 5 19 12 12 19"></polyline>
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </Col>
//             <Col md={4}>
//               <div className="service-card border rounded-4 overflow-hidden h-100">
//                 <div className="service-image">
//                   <Image
//                     src={Image3}
//                     alt="Language study services"
//                     width={400}
//                     height={200}
//                     className="w-100 h-auto"
//                   />
//                 </div>
//                 <div className="service-content p-4">
//                   <h4 className="text-danger fw-bold">Language Study Services</h4>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
//                     mattis.
//                   </p>
//                   <Link href="#" className="text-decoration-none text-dark d-flex align-items-center">
//                     Read More
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="ms-2"
//                     >
//                       <line x1="5" y1="12" x2="19" y2="12"></line>
//                       <polyline points="12 5 19 12 12 19"></polyline>
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* Subscribe Section */}
//       <div className="subscribe-section py-5">
//         <Container>
//           <div className="subscribe-container p-4 p-md-5 position-relative">
//             <Row className="justify-content-center">
//               <Col md={10} lg={8}>
//                 <div className="text-center">
//                   <h4 className="fw-bold mb-3 text-dark">
//                     Subscribe to get information, latest news and other interesting offers about Cobham
//                   </h4>
//                   <Form className="mt-4">
//                     <InputGroup className="mb-3 subscribe-input-group">
//                       <Form.Control
//                         placeholder="Your email"
//                         aria-label="Your email"
//                         className="py-2 border-end-0"
//                       />
//                       <Button variant="danger" className="px-4 rounded-end">
//                         Subscribe
//                       </Button>
//                     </InputGroup>
//                   </Form>
//                 </div>
//               </Col>
//             </Row>
//             <div className="send-icon">
//               <FaPaperPlane className="text-white" />
//             </div>
//           </div>
//         </Container>
//       </div>

//       {/* Language Power Section */}
//       <div className="language-power-section py-5">
//         <Container>
//           {/* Service Cards */}
//           <Row className="g-4">
//             <Col md={4}>
//               <div className="service-card border rounded-4 overflow-hidden h-100">
//                 <div className="service-image">
//                   <Image
//                     src={Image4}
//                     alt="DTP services"
//                   // width={400}
//                   // height={200}
//                   // className="w-100 h-auto"
//                   />
//                 </div>
//                 <div className="service-content p-4">
//                   <h4 className="text-danger fw-bold">DTP services</h4>
//                   <p>
//                     Multilingual DTP is an art of creating a translated document that is faithful to the original.
//                   </p>
//                   <Link href="#" className="text-decoration-none text-dark d-flex align-items-center">
//                     Read More
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="ms-2"
//                     >
//                       <line x1="5" y1="12" x2="19" y2="12"></line>
//                       <polyline points="12 5 19 12 12 19"></polyline>
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </Col>
//             <Col md={4}>
//               <div className="service-card border rounded-4 overflow-hidden h-100">
//                 <div className="service-image">
//                   <Image
//                     src={Image5}
//                     alt="Content writing services"
//                     width={400}
//                     height={200}
//                     className="w-100 h-auto"
//                   />
//                 </div>
//                 <div className="service-content p-4">
//                   <h4 className="text-danger fw-bold">360 Degree Language Solution</h4>
//                   <p>
//                     Publishing software helps in producing a wide variety of materials, from presentations.
//                   </p>
//                   <Link href="#" className="text-decoration-none text-dark d-flex align-items-center">
//                     Read More
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="ms-2"
//                     >
//                       <line x1="5" y1="12" x2="19" y2="12"></line>
//                       <polyline points="12 5 19 12 12 19"></polyline>
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </Col>
//             <Col md={4}>
//               <div className="service-card border rounded-4 overflow-hidden h-100">
//                 <div className="service-image">
//                   <Image
//                     src={Image6}
//                     alt="Localization Services"
//                     width={400}
//                     height={200}
//                     className="w-100 h-auto"
//                   />
//                 </div>
//                 <div className="service-content p-4">
//                   <h4 className="text-danger fw-bold">Localization Services</h4>
//                   <p>
//                     Have you already created content for your Global Audiences?
//                   </p>
//                   <Link href="#" className="text-decoration-none text-dark d-flex align-items-center">
//                     Read More
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="ms-2"
//                     >
//                       <line x1="5" y1="12" x2="19" y2="12"></line>
//                       <polyline points="12 5 19 12 12 19"></polyline>
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* Subscribe Section */}
//       <div className="subscribe-section py-5">
//         <Container>
//           <div className="subscribe-container bg-light rounded-4 p-4 p-md-5">
//             <Row className="justify-content-center">
//               <Col md={10} lg={8}>
//                 <div className="text-center">
//                   <h4 className="fw-bold mb-3">
//                     Subscribe to get information, latest news and other interesting offers about Cobham
//                   </h4>
//                   <Form className="mt-4">
//                     <InputGroup className="mb-3 subscribe-input-group">
//                       <Form.Control placeholder="Your email" aria-label="Your email" className="py-2 border-end-0" />
//                       <Button variant="danger" className="px-4 rounded-end">
//                         Subscribe
//                       </Button>
//                     </InputGroup>
//                   </Form>
//                 </div>
//               </Col>
//             </Row>
//           </div>
//         </Container>
//       </div>

//       {/* Language Power Section */}
//       <div className="language-power-section py-5">
//         <Container>
//           {/* Service Cards */}
//           <Row className="g-4">
//             <Col md={4}>
//               <div className="service-card border rounded-4 overflow-hidden h-100">
//                 <div className="service-image">
//                   <Image
//                     src={Image7}
//                     alt="Project Services"
//                   // width={400}
//                   // height={200}
//                   // className="w-100 h-auto"
//                   />
//                 </div>
//                 <div className="service-content p-4">
//                   <h4 className="text-danger fw-bold">Project Services</h4>
//                   <p>
//                     Shakti Enterprise is a dedicated, full-fledged, ISO 2001:2008 and DIN 1508 certified,
//                   </p>
//                   <Link href="#" className="text-decoration-none text-dark d-flex align-items-center">
//                     Read More
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="ms-2"
//                     >
//                       <line x1="5" y1="12" x2="19" y2="12"></line>
//                       <polyline points="12 5 19 12 12 19"></polyline>
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </Col>
//             <Col md={4}>
//               <div className="service-card border rounded-4 overflow-hidden h-100">
//                 <div className="service-image">
//                   <Image
//                     src={Image8}
//                     alt="Proof Reading Services"
//                     width={400}
//                     height={200}
//                     className="w-100 h-auto"
//                   />
//                 </div>
//                 <div className="service-content p-4">
//                   <h4 className="text-danger fw-bold">Proof Reading Services</h4>
//                   <p>
//                     Planning to submit your research paper for
//                     peer review?
//                   </p>
//                   <Link href="#" className="text-decoration-none text-dark d-flex align-items-center">
//                     Read More
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="ms-2"
//                     >
//                       <line x1="5" y1="12" x2="19" y2="12"></line>
//                       <polyline points="12 5 19 12 12 19"></polyline>
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </Col>
//             <Col md={4}>
//               <div className="service-card border rounded-4 overflow-hidden h-100">
//                 <div className="service-image">
//                   <Image
//                     src={Image9}
//                     alt="Interpretation Services"
//                     width={400}
//                     height={200}
//                     className="w-100 h-auto"
//                   />
//                 </div>
//                 <div className="service-content p-4">
//                   <h4 className="text-danger fw-bold">Interpretation Services</h4>
//                   <p>
//                     In today's internet era, it is easier than ever to do business with people in countries across
//                     the world.
//                   </p>
//                   <Link href="#" className="text-decoration-none text-dark d-flex align-items-center">
//                     Read More
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="ms-2"
//                     >
//                       <line x1="5" y1="12" x2="19" y2="12"></line>
//                       <polyline points="12 5 19 12 12 19"></polyline>
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <OurClients />

//       {/* Language Power Section */}
//       <div className="language-power-section py-5 d-flex justify-content-center align-items-center">
//         <Container>
//           {/* Service Cards */}
//           <Row className="g-4">
//             <Col md={4}>
//               <div className="service-card border rounded-4 overflow-hidden h-100">
//                 <div className="service-image">
//                   <Image
//                     src={Image10}
//                     alt="Audio Visual Services"
//                   // width={400}
//                   // height={200}
//                   // className="w-100 h-auto"
//                   />
//                 </div>
//                 <div className="service-content p-4">
//                   <h4 className="text-danger fw-bold">Audio Visual Services</h4>
//                   <p>
//                     Shakti Enterprise is a professional translation service agency for global language.
//                   </p>
//                   <Link href="#" className="text-decoration-none text-dark d-flex align-items-center">
//                     Read More
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="ms-2"
//                     >
//                       <line x1="5" y1="12" x2="19" y2="12"></line>
//                       <polyline points="12 5 19 12 12 19"></polyline>
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </Col>
//             <Col md={4}>
//               <div className="service-card border rounded-4 overflow-hidden h-100">
//                 <div className="service-image">
//                   <Image
//                     src={Image11}
//                     alt="Translation Services"
//                     width={400}
//                     height={200}
//                     className="w-100 h-auto"
//                   />
//                 </div>
//                 <div className="service-content p-4">
//                   <h4 className="text-danger fw-bold">Translation Services</h4>
//                   <p>
//                     We believe in utilizing in-nation and local language proficient translators who have area involvement
//                   </p>
//                   <Link href="#" className="text-decoration-none text-dark d-flex align-items-center">
//                     Read More
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="ms-2"
//                     >
//                       <line x1="5" y1="12" x2="19" y2="12"></line>
//                       <polyline points="12 5 19 12 12 19"></polyline>
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </Col>
//             <Col md={4}>
//               <div className="service-card border rounded-4 overflow-hidden h-100">
//                 <div className="service-image">
//                   <Image
//                     src={Image11}
//                     alt="Interpretation Services"
//                     width={400}
//                     height={200}
//                     className="w-100 h-auto"
//                   />
//                 </div>
//                 <div className="service-content p-4">
//                   <h4 className="text-danger fw-bold">Interpretation Services</h4>
//                   <p>
//                     In today's internet era, it is easier than ever to do business with people in countries across
//                     the world.
//                   </p>
//                   <Link href="#" className="text-decoration-none text-dark d-flex align-items-center">
//                     Read More
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="ms-2"
//                     >
//                       <line x1="5" y1="12" x2="19" y2="12"></line>
//                       <polyline points="12 5 19 12 12 19"></polyline>
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <FooterMenu />
//     </div>
//   );
// }





import { Container, Row, Col, Button, Form, InputGroup, Image, Card, Modal } from "react-bootstrap";
import "./services.css";
import { Link, useNavigate } from "react-router-dom";
import OurClients from "../OurClients/OurClients";
import MyNavbar from "../Navbar/MyNavbar";
import { FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import BgImage from "../../assets/Images/AllServices/bg-image.png"
import SubscribeBgImage from "../../assets/Images/servicesImages/subscribe-bg.png"

import Image1 from "../../assets/Images/servicesImages/card1.png"
import Image2 from "../../assets/Images/servicesImages/card2.png"
import Image3 from "../../assets/Images/servicesImages/card3.png"
import Image4 from "../../assets/Images/servicesImages/card4.png"
import Image5 from "../../assets/Images/servicesImages/card5.png"
import Image6 from "../../assets/Images/servicesImages/card6.png"
import Image7 from "../../assets/Images/servicesImages/card7.png"
import Image8 from "../../assets/Images/servicesImages/card8.png"
import Image9 from "../../assets/Images/servicesImages/card9.png"
import Image10 from "../../assets/Images/servicesImages/card10.png"
import Image11 from "../../assets/Images/servicesImages/card11.png"

import Footer from "../AllServices/Footer";
import BannerBgImage from "../../assets/Images/servicesImages/services-bg.png"
import VideoImage from "../../assets/Images/AllServices/ServicesBannerImage.png"
import SubscribeSection from "../AllServices/subscribeSection/SubscribeSection";
import Quote from "../SchaduleAConsultation/Quote";
import ShaduleAConsultation from "../SchaduleAConsultation/SchaduleAConsultation";
import { useState } from "react";
import GetQuoteSubscriptionSection from "../GetQuoteSubscriptionSection/GetQuoteSubscriptionSection";
// Service data array to avoid repetition
const services = [
  {
    id: 1,
    title: "Translation Type",
    image: Image1,
    description: "Accurate, domain-specific translations tailored by native experts to ensure clarity, tone, and message consistency across languages.",
  },
  {
    id: 2,
    title: "Content Writing Services",
    image: Image2,
    description: "Engaging, high-impact content crafted to connect with diverse audiences and elevate your brand’s authority and trust.",
  },
  {
    id: 3,
    title: "Language Studio Services",
    image: Image3,
    description: "End-to-end language production: voiceovers, dubbing, subtitling, and studio-grade audio for culturally nuanced communication.",
  },
  {
    id: 4,
    title: "DTP services",
    image: Image4,
    description: "We deliver perfectly formatted, multilingual documents — design-accurate, print-ready, and localized for every region.",
  },
  {
    id: 5,
    title: "360 Degree Language Solutions",
    image: Image5,
    description: "Comprehensive language services — from writing to localization — for seamless communication across print, digital, and AV.",
  },
  {
    id: 6,
    title: "Localization Services",
    image: Image6,
    description: "Culturally tuned adaptations of your content for websites, apps, and media to maximize global relevance and impact.",
  },
  {
    id: 7,
    title: "Project Services",
    image: Image7,
    description: "From planning to delivery, we manage multilingual projects with precision, process control, and global language expertise.",
  },
  {
    id: 8,
    title: "Proof Reading Services",
    image: Image8,
    description: "Ensure academic, legal, or technical papers meet the highest standards before peer review or international publication.",
  },
  {
    id: 9,
    title: "Interpretation Services",
    image: Image9,
    description: "Professional interpreters for events, conferences, and calls — bridging real-time communication across languages and cultures.",
  },
  {
    id: 10,
    title: "Audio Visual Services",
    image: Image10,
    description: "Voiceovers, subtitles, and language adaptation for AV content — crafted by in-nation experts across 100+ languages.",
  },
  {
    id: 11,
    title: "Translation Services",
    image: Image11,
    description: "Native-language professionals deliver translations that truly reflect your intent, industry context, and local expectations.",
  },

];


// Reusable components


const HeroSection = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${BannerBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "650px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></div>

      <Container className="h-100">
        <Row className="h-100 align-items-center">
          {/* Text Content Column - Fixed height container */}
          <Col lg={6} className="text-white py-5">
            <div
              className="hero-content"
              style={{
                minHeight: "400px", // Fixed height for content area
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>{" "}
                /{" "}
                <Link to="/Services" className="text-white text-decoration-none">
                  All Services
                </Link>
              </p>

              {/* Title with fixed space */}
              <div style={{ minHeight: "80px" }}>
                <h1 className="fw-bold mb-0" style={{ fontSize: "2.5rem" }}>
                  Localization is the key
                  for Global success
                </h1>
              </div>

              {/* Subtitle with fixed space (even when empty) */}
              <div style={{ margin: "10px 0" }}>Localization Service We believe in utilizing in-nation and local language proficient translators who have area involvement with educational, human services, clinical, finance, advertising, legal.</div>

              {/* Buttons - fixed position at bottom */}
              <div className="d-flex flex-wrap gap-3 mt-5">
                <span
                  className="d-inline-flex both-buttons px-4 py-2 mb-3"
                  style={{
                    backgroundColor: "#CAD3DB60",
                    borderRadius: '40px',
                    border: '1px solid rgba(255, 255, 255, 0.63)',
                    // minWidth: '180px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: 'pointer'
                  }} onClick={() => setShowQuoteModal(true)}>
                  Get a Quote
                </span>
                <span
                  className="d-inline-flex both-buttons px-4 py-2 mb-3"
                  style={{
                    backgroundColor: "#CAD3DB60",
                    borderRadius: '40px',
                    border: '1px solid rgba(255, 255, 255, 0.63)',
                    // minWidth: '180px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: 'pointer'
                  }}
                  onClick={() => setShowScheduleModal(true)}
                >
                  Schedule a Call
                </span>
              </div>
            </div>

            <Modal
              show={showQuoteModal}
              onHide={() => setShowQuoteModal(false)}
              size="xl"
              centered>
              <Modal.Body className='p-0'>
                <Quote />
              </Modal.Body>
            </Modal>

            {/* Schedule Modal */}
            <Modal
              show={showScheduleModal}
              onHide={() => setShowScheduleModal(false)}
              size="xl"
              centered
            >
              <Modal.Body className='p-0'>
                <ShaduleAConsultation />
              </Modal.Body>
            </Modal>
          </Col>

          <Col xs={12} lg={6} className="mt-5">
            <div className="hero-image position-relative">
              <div className="image-container rounded-4 overflow-hidden">
                {/* YouTube iframe with autoplay */}
                <div style={{ position: "relative", paddingBottom: "66.67%", height: 0, overflow: "hidden" }}>
                  <img
                    // width="650"
                    // height="450"
                    style={{ width: "100%" }}
                    // src="https://videocdn.cdnpk.net/videos/710e0d64-07cc-4838-927c-a5a0d5543991/horizontal/previews/clear/large.mp4?token=exp=1743513023~hmac=d73dce562efb1175c5b8a840447957265867647044e6213c2c4b632f098371e6"
                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    // allowFullScreen
                    // style={{ borderRadius: "12px" }}
                    src={VideoImage}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const ServiceCard = ({ title, image, description }) => {
  const navigate = useNavigate(); // Move useNavigate inside the component

  const handleCardClick = () => {
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/Services/${slug}`);
  };

  return (
    <Card className="service-card border rounded-4 overflow-hidden shadow h-100" onClick={handleCardClick}>
      <Image src={image} alt={title} className="service-image shadow" />
      <div className="service-content px-4 mb-3 mt-3 h-100 d-flex justify-content-between align-items-cetner flex-column">
        <h4 className="fw-bold text-center" style={{ color: "#F5454E", fontSize: "18px" }}>{title}</h4>
        <div className="text-center"
          style={{
            fontSize: "14px",
            color: "#737791",
            maxHeight: "60px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            lineHeight: "1.4",
          }}
        >{description}</div>
        <div className="d-flex justify-content-end mt-3">
          <div className="d-flex align-items-center" style={{ color: "#737791", fontSize: "14px" }}>
            Read More
            <HiArrowNarrowRight className="ms-1" color={"#F5454E"} />
          </div>
        </div>
      </div>
    </Card>
  );
};


const LanguagePowerSection = ({ title, subtitle, services }) => (
  <div className="language-power-section py-5" >
    <Container>
      {title && (
        <div className="text-center mb-5">
          <div className="mb-2 fw-bold" style={{ color: "#F5454E", fontSize: "18px", textTransform: "uppercase", }}>{title}</div>
          <h2 className="fw-bold mb-3" style={{ fontSize: "30px", color: "#000", }}>{subtitle}</h2>
          <div className=" mx-auto" style={{ maxWidth: "900px", fontSize: "14px", color: "#737791" }}>
            Our services are oriented to meet Industry needs and therefore we lay great emphasis to ensure website content in the source document is effective from the reader's perspective.
          </div>
        </div>
      )}
      <Row className="g-4">
        {services.map(service => (
          <Col md={4} key={service.id} style={{ cursor: 'pointer' }}>
            <ServiceCard {...service} />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default function LanguageServicesPage() {

  return (
    <div className="language-services-page">
      <MyNavbar />
      <HeroSection />
      <div
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          // backgroundAttachment: "fixed", 
        }} >
        <LanguagePowerSection
          title="LANGUAGE POWER"
          subtitle="We Are Your Language Power To Connect With Global Consumer"
          services={services.slice(0, 3)} />
        <SubscribeSection />
        <LanguagePowerSection services={services.slice(3, 6)} />
        <GetQuoteSubscriptionSection />
        <LanguagePowerSection services={services.slice(6, 9)} />
        <OurClients />
        <div className="language-power-section py-5 d-flex justify-content-center align-items-center">
          <Container>
            <Row className="g-4 d-flex justify-content-center">
              {services.slice(9).map(service => (
                <Col md={4} key={service.id} style={{ cursor: 'pointer' }}>
                  <ServiceCard {...service} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}