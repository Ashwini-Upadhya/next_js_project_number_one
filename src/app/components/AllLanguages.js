import { useState, useEffect, useRef, useContext } from "react"
import { Container, Row, Col, Modal } from "react-bootstrap"
import { Link, useParams, useNavigate } from "react-router-dom"
import BgImage from "../../assets/Images/AllServices/bg-image.png"
import Image2 from "../../assets/Images/AllLanguages/card2.png"
import Image3 from "../../assets/Images/AllLanguages/card3.png"
import Image4 from "../../assets/Images/AllLanguages/card4.png"
import Image5 from "../../assets/Images/AllLanguages/card5.png"
import Image6 from "../../assets/Images/AllLanguages/card6.png"
import Image7 from "../../assets/Images/AllLanguages/card7.png"
import OurClients from "../OurClients/OurClients"
import Footer from "../AllServices/Footer"
import MyNavbar from "../Navbar/MyNavbar"
import Quote from "../SchaduleAConsultation/Quote"
import ShaduleAConsultation from "../SchaduleAConsultation/SchaduleAConsultation"
import { ServiceContext } from "../ServiceContext"
import UnifiedMainContent from "../UnifiedMainComponent"
import Sidebar from "../Sidebar"


const AllLangauges = () => {
  const { serviceType } = useParams();
  const {
    serviceUrlMapRef,
    reverseServiceUrlMap,
    heroContent,
    languageServices,
    languageSubItems,
  } = useContext(ServiceContext);
  const navigate = useNavigate()
  const languageImageMap = {
    "Indian Languages": {
      mainImage: Image2, // replace with actual import
      subItems: [
        "Assamese", "Bengali", "Bodo", "Bhojpuri", "Dogri", "Gujarati", "Hindi",
        "Kannada", "Kashmiri", "Konkani", "Maithili", "Malayalam", "Modi Script",
        "Manipuri", "Marathi", "Mizo", "Nepali", "Oriya", "Punjabi", "Sanskrit",
        "Santali", "Tamil", "Telugu", "Urdu"
      ]
    },
    "European Languages": {
      mainImage: Image3,
      subItems: [
        "Albanian", "Bulgarian", "Croatian", "Czech", "Dutch", "Danish", "English",
        "Finnish", "French", "German", "Greek", "Hungarian", "Irish", "Italian",
        "Latvian", "Lithuanian", "Maltese", "Macedonian", "Polish", "Portuguese",
        "Romanian", "Russian", "Romansh", "Serbian", "Slovak", "Slovene",
        "Spanish", "Swedish", "Turkish"
      ]
    },
    "Asian Languages": {
      mainImage: Image4,
      subItems: [
        "Standard Chinese", "Mandarin Chinese", "Japanese", "Armenian", "Azerbaijani",
        "Baluchi", "Korean", "Egyptian Arabic", "Georgian", "Persian", "Kurdish Arabic",
        "Hebrew", "Kazakh Russian", "Kyrgyz", "Turkmen", "Mongolian", "Dzongkha",
        "Maldivian", "Sinhala Tamil", "Bahasa Melayu", "Khmer", "Portuguese Tetum",
        "Indonesian", "Burmese", "Filipino English", "Malay", "Chinese", "Vietnamese",
        "Thai", "Tibetan"
      ]
    },
    "African Languages": {
      mainImage: Image7,
      subItems: [
        "Arabic", "Somali", "Afrikaans", "Swahili", "Siswati", "Xhosa", "Zulu"
      ]
    },
    "Eastern European Languages": {
      mainImage: Image6,
      subItems: ["Azeri", "Bosnian", "Ukrainian", "Uzbek"]
    },
    "American Languages": {
      mainImage: Image5,
      subItems: ["Tagalog"]
    }
  };

  // Set initial state from URL parameter
  const initialService = serviceType && serviceUrlMapRef[serviceType]
    ? serviceUrlMapRef[serviceType]
    : "";

  const [activeService, setActiveService] = useState(initialService);

  useEffect(() => {
    if (Object.keys(serviceUrlMapRef.current).length > 0) {
      const currentMap = serviceUrlMapRef.current;
      const normalizedKey = serviceType?.trim().toLowerCase();
      if (normalizedKey && currentMap[normalizedKey]) {
        setActiveService(currentMap[normalizedKey]);
      } else {
        setActiveService("Top 10 Languages");
      }
    }
  }, [serviceType])

  // Function to handle service change and update URL
  const handleServiceChange = (service) => {
    setActiveService(service);
    navigate(`/langauges/${reverseServiceUrlMap[service]}`);
  };

  const HeroSection = () => {

    const [showQuoteModal, setShowQuoteModal] = useState(false);
    const [showScheduleModal, setShowScheduleModal] = useState(false);
    // Get the hero content for the active service or use default
    let content = heroContent[activeService] || heroContent["default"];

    // Check if activeService is a sub-item and belongs to a mapped parent
    for (const parent in languageImageMap) {
      const { mainImage, subItems } = languageImageMap[parent];
      if (subItems.includes(activeService)) {
        content = {
          ...content,
          image: mainImage,
        };
        break;
      }
    }

    return (
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${content.bgImage})`,
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
                  <Link to="/langauges" className="text-white text-decoration-none">
                    Languages
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
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // or 'contain' based on preference
                      }}
                      src={content.image}
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
            <Col md={4} sm={12} lg={4} xl={3} className="sidebar-col">
              <Sidebar 
              serviceSubItems={languageSubItems} 
              services={languageServices} 
              activeService={activeService}
              title={'Languages'} 
              setActiveService={handleServiceChange} />
            </Col>
            <Col md={8} sm={12} lg={8} xl={9}>
              <UnifiedMainContent activeService={activeService} key={activeService} services={languageServices} serviceUrlMapRef={serviceUrlMapRef} mediaEndpoint={'all-languages'} />
            </Col>
          </Row>
        </Container>
      </div>
      <OurClients />
      <Footer />
    </>
  )
}

export default AllLangauges



