import { useState, useEffect, useRef, useContext } from "react"
import { Container, Row, Col, Modal } from "react-bootstrap"
import { Link, useParams, useNavigate } from "react-router-dom"
import BgImage from "../../assets/Images/AllServices/bg-image.png"
import OurClients from "../OurClients/OurClients"
import Footer from "../AllServices/Footer"
import MyNavbar from "../Navbar/MyNavbar"
import AboutUsSidebar from "./AboutUsSidebar"
import Quote from "../SchaduleAConsultation/Quote"
import ShaduleAConsultation from "../SchaduleAConsultation/SchaduleAConsultation"
import { ServiceContext } from "../ServiceContext"
import UnifiedMainContent from "../UnifiedMainComponent"

function AboutUs() {
    const { serviceType } = useParams()
    const {
        serviceUrlMapRef,
        reverseServiceUrlMap,
        heroContent,
        aboutusServices,
        aboutusSubItems,
    } = useContext(ServiceContext);
    const navigate = useNavigate()
    const [showQuoteModal, setShowQuoteModal] = useState(false);
    const [showScheduleModal, setShowScheduleModal] = useState(false);
    const initialService = serviceType && serviceUrlMapRef[serviceType]
        ? serviceUrlMapRef[serviceType]
        : "";
    const [activeService, setActiveService] = useState(initialService);

    // Update active service when URL changes
    useEffect(() => {
        if (Object.keys(serviceUrlMapRef.current).length > 0) {
            const currentMap = serviceUrlMapRef.current;
            const normalizedKey = serviceType?.trim().toLowerCase();
            if (normalizedKey && currentMap[normalizedKey]) {
                setActiveService(currentMap[normalizedKey]);
            } else if (!serviceType) {
                setActiveService("Company Profile");
            }
        }
    }, [serviceType, serviceUrlMapRef.current]);

    // Function to handle service change and update URL
    const handleServiceChange = (service) => {
        setActiveService(service);
        navigate(`/about/${reverseServiceUrlMap[service]}`);
    };

    const HeroSection = () => {
        // Get the hero content for the active service or use default
        const content = heroContent[activeService] || heroContent["default"]

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
                                    <Link to="/about" className="text-white text-decoration-none">
                                        About
                                    </Link>{" "}
                                    / {activeService}
                                </p>

                                {/* Title with fixed space */}
                                <div style={{ minHeight: "80px" }}>
                                    <h1 className="fw-bold mb-0" style={{ fontSize: "2.5rem" }}>
                                        {content.title}
                                    </h1>
                                </div>

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

                            {/* Quote Modal */}
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
                        <Col md={4} sm={12} lg={3} className="sidebar-col">
                            <AboutUsSidebar serviceSubItems={aboutusSubItems} services={aboutusServices} activeService={activeService} setActiveService={handleServiceChange} />
                        </Col>
                        <Col md={8} sm={12} lg={9}>
                            <UnifiedMainContent activeService={activeService} key={activeService} services={aboutusServices} serviceUrlMapRef={serviceUrlMapRef} mediaEndpoint={'all-about-uses'} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <OurClients />
            <Footer />
        </>
    )
}

export default AboutUs



