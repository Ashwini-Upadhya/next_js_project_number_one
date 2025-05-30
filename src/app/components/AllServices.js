import { useState, useEffect, useRef, useContext } from "react"
import { Container, Row, Col, Modal } from "react-bootstrap"
import "./AllServices.css"
import Sidebar from "../Sidebar"
import { Link, useParams, useNavigate } from "react-router-dom"
import GetQuoteForm from "./GetQuoteForm"
import Footer from "./Footer"
import servicesBg from "../../assets/Images/AllServices/background-img.png"
import MyNavbar from "../Navbar/MyNavbar"
import OurClients from "../OurClients/OurClients"
import BgImage from "../../assets/Images/AllServices/bg-image.png"
import Image1 from "../../assets/Images/servicesImages/card1.png"
import Image5 from "../../assets/Images/servicesImages/card5.png"
import Image6 from "../../assets/Images/servicesImages/card6.png"
import Image9 from "../../assets/Images/servicesImages/card9.png"
import Image10 from "../../assets/Images/servicesImages/card10.png"
import Quote from "../SchaduleAConsultation/Quote"
import ShaduleAConsultation from "../SchaduleAConsultation/SchaduleAConsultation"
import { ServiceContext } from "../ServiceContext"
import UnifiedMainContent from "../UnifiedMainComponent"

function AllServices() {
  const { serviceType } = useParams()
  const navigate = useNavigate()
  const {
    serviceUrlMapRef,
    reverseServiceUrlMap,
    heroContent,
    translationServices,
    translationSubItems,
  } = useContext(ServiceContext);
  const serviceImageMap = {
    "Translation Services": {
      mainImage: Image5,
      mainDescription: "Native-language professionals deliver translations that truly reflect your intent, industry context, and local expectations.",
      subItems: [
        "Document Translation",
        "Certificate Translation",
        "Legal Translation",
        "Medical Translation",
        "Technical Translation",
        "Financial Translation",
        "Literary Translation",
        "Website Translation",
        "Academic Translation"
      ]
    },
    "Localization Services": {
      mainImage: Image6,
      mainDescription: "Culturally tuned adaptations of your content for websites, apps, and media to maximize global relevance and impact.",
      subItems: [
        "Game Localization",
        "Website Localization",
        "Software Localization",
        "Mobile Apps & Web Apps",
        "Multilingual SEO",
        "Graphic Localization",
        "Broadcast Localization Services"
      ]
    },
    "Interpretation Services": {
      mainImage: Image9,
      mainDescription: "Professional interpreters for events, conferences, and calls — bridging real-time communication across languages and cultures.",
      subItems: [
        "Interpretation Equipment",
        "Simultaneous Interpretation",
        "Consecutive Interpretation",
        "Teleconference Interpreting",
        "Escort Interpreting",
        "Medical Interpretation",
        "Legal Interpretation"
      ]
    },
    "Audio Visual Services": {
      mainImage: Image10,
      mainDescription: "Voiceovers, subtitles, and language adaptation for AV content — crafted by in-nation experts across 100+ languages.",
      subItems: [
        "Captioning Services",
        "Subtitling Services",
        "Transcription Services",
        "Voice Over Services"
      ]
    }
  };
  const initialService = serviceType && serviceUrlMapRef.current[serviceType]
    ? serviceUrlMapRef.current[serviceType]
    : "";

  // Set initial state from URL parameter
  const [activeService, setActiveService] = useState(initialService); // Default value
  useEffect(() => {
    if (Object.keys(serviceUrlMapRef.current).length > 0) {
      const currentMap = serviceUrlMapRef.current;
      const normalizedKey = serviceType?.trim().toLowerCase();
      if (normalizedKey && currentMap[normalizedKey]) {
        setActiveService(currentMap[normalizedKey]);
      } else {
        setActiveService("Translation Type");
      }
    }
  }, [serviceType, serviceUrlMapRef.current])

  // Function to handle service change and update URL
  const handleServiceChange = (service) => {
    setActiveService(service);
    navigate(`/Services/${reverseServiceUrlMap[service]}`);
  };


  console.log('activeService', activeService);
  // Add the default entry
  heroContent["default"] = {
    title: activeService,
    image: Image1,
    description:
      "Delivering quality, timely service and giving value for money are the essential principles on which we do business.",
    bgImage: servicesBg,
    videoUrl:
      "https://videocdn.cdnpk.net/videos/9477d892-5d47-4582-942e-483809c868d9/horizontal/previews/clear/large.mp4?token=exp=1743509335~hmac=b20f13a90c049725111fdc9d593315a950492c6fc1cca6d442ae242bf136377d",
  };

  const HeroSection = () => {
    const [showQuoteModal, setShowQuoteModal] = useState(false);
    const [showScheduleModal, setShowScheduleModal] = useState(false);


    // Get the hero content for the active service
    let content = heroContent[activeService] || heroContent["default"];


    // Fallback logic for sub-items
    for (const parent in serviceImageMap) {
      const { mainImage, mainDescription, subItems } = serviceImageMap[parent];
      if (subItems.includes(activeService)) {
        content = {
          ...content,
          image: mainImage,
          description: mainDescription,
        };
        break;
      }
    }

    // Optional: Loading state or fallback UI




    return (
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${servicesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "550px",
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
        {content ? (
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
                    </Link>{" "}
                    / {activeService}
                  </p>

                  {/* Title with fixed space */}
                  <div style={{ minHeight: "80px" }}>
                    <h1 className="fw-bold mb-0" style={{ fontSize: "2.5rem" }}>
                      {content.title}
                    </h1>
                  </div>

                  {/* Subtitle with fixed space (even when empty) */}
                  <div style={{ margin: "10px 0" }}>{content.subtitle && <h5>{content.subtitle}</h5>}</div>

                  {/* Description with fixed height and scroll if needed */}
                  <div
                    style={{
                      overflowY: "auto",
                    }}
                  >
                    <p style={{ fontSize: "16px", marginBottom: 0 }}>{content.description}</p>
                  </div>

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
                        src={content.image}
                        alt=""
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover", // or 'contain' based on preference
                        }}
                      />
                    </div>

                  </div>
                </div>
              </Col>
            </Row>
          </Container>)
          :
          (<div>Loading hero content...</div>
          )}
      </div>
    )
  }

  return (
    <>
      <MyNavbar />
      <HeroSection />
      <div
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >

        <Container fluid className="app-container" style={{ position: 'relative' }}>
          <Row>
            <Col md={4} sm={12} xl={2} className="sidebar-col">
              {serviceUrlMapRef &&
                <Sidebar serviceSubItems={translationSubItems}
                  services={translationServices}
                  activeService={activeService}
                  serviceUrlMapRef={serviceUrlMapRef}
                  setActiveService={handleServiceChange} />
              }
            </Col>
            <Col md={8} sm={12} xl={8}>
              {
                activeService && (
                  <UnifiedMainContent activeService={activeService} key={activeService} services={translationServices} serviceUrlMapRef={serviceUrlMapRef} mediaEndpoint={'all-services'} />
                )
              }
            </Col>
            <Col md={12} sm={12} xl={2}>
              <GetQuoteForm />
            </Col>
          </Row>
        </Container>
      </div>
      <OurClients />
      <Footer />
    </>
  )
}

export default AllServices



