import { Container, Row, Col, Button, Form, Card, Modal, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerBgImage from "../../assets/Images/Contact/background-img.png"
import VideoImage from "../../assets/Images/Contact/Contact-us.png"
import MyNavbar from "../Navbar/MyNavbar";
import Footer from "../AllServices/Footer";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import gatewayImage from '../../assets/Images/Contact/gateway.png'; // Image similar to the top right corner icon in your screenshot
import "./ContactUs.css"
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneCallThin } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import Quote from "../SchaduleAConsultation/Quote";
import ShaduleAConsultation from "../SchaduleAConsultation/SchaduleAConsultation";
import axios from "axios";

const HeroSection = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  // Get the hero content for the active service or use default
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${BannerBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "550px",
        // position: "relative",
      }}
    >


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
                  Contact-US
                </Link>
              </p>

              {/* Title with fixed space */}
              <div style={{ minHeight: "80px" }}>
                <h1 className="fw-bold mb-0" style={{ fontSize: "2.5rem" }}>
                  Contact US
                </h1>
              </div>

              {/* Subtitle with fixed space (even when empty) */}
              <div style={{ margin: "10px 0" }}>
                Whether you are an individual or a corporate entity,
                we await your valuable queries with equal enthusiasm and assure you prompt and efficient language translation services.
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
                    style={{ width: "100%" }}
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


const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    document: null,
    email: '',
    phone: '',
    message: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const map = L.map("map").setView([19.0760, 72.8777], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create FormData object
    const formDataToSend = new FormData();
    formDataToSend.append('email', formData.email);
    formDataToSend.append('name', formData.fullName);
    formDataToSend.append('additional_message', formData.message);
    formDataToSend.append('company_name', formData.company || 'Tech-Radix');
    formDataToSend.append('phone', formData.phone || '');

    // Append the file if it exists
    if (formData.document) {
      formDataToSend.append('uploaded_document', formData.document);
    }

    axios.post('https://api.shakti.radixforce.com/send_mail/', formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          document: null,
          email: '',
          phone: '',
          message: '',
          company: ''
        });
      })
      .catch(error => {
        console.error('API Error:', error.response?.data || error.message);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Container className="py-5" >
      <Row >
        <Col xs={12} md={12} lg={12} className="d-flex flex-column flex-md-row shadow overflow-hidden p-0" style={{ backgroundColor: "#F5454E1A", borderRadius: "40px" }}>
          <div className="w-100 p-4" style={{ backgroundColor: "#fff" }}>

            <div style={{ fontSize: "18px", fontWeight: "600", color: "#000" }}>
              Quick Contact Form
            </div>
            {submitStatus === 'success' && (
              <Alert className="mt-2" style={{ fontSize: "12px" }} variant="success" onClose={() => setSubmitStatus(null)} dismissible>
                Thank you! Your request has been sent successfully. We'll contact you soon.
              </Alert>
            )}
            {submitStatus === 'error' && (
              <Alert className="mt-2" style={{ fontSize: "12px" }} variant="danger" onClose={() => setSubmitStatus(null)} dismissible>
                There was an error submitting your request. Please try again later.
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Row className="mt-3">
                  <Col xs={12} md={6} className="mb-3">
                    <Form.Label style={{ fontSize: "14px" }} className='input-label-text'>Full Name*</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      className="py-2 rounded-pill input-text"
                      style={{ fontSize: "14px" }}
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col xs={12} md={6} className="mb-3">
                    <Form.Label style={{ fontSize: "14px" }} className='input-label-text'>Company*</Form.Label>
                    <Form.Control
                      type="text"
                      name="company"
                      placeholder="Company"
                      className="py-2 rounded-pill input-text"
                      style={{ fontSize: "14px" }}
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>

                <Row className="mt-1">
                  <Col xs={12} md={6} className="mb-3">
                    <Form.Label style={{ fontSize: "14px" }} className='input-label-text'>Email Address*</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="py-2 rounded-pill input-text"
                      style={{ fontSize: "14px" }}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col xs={12} md={6} className="mb-3">
                    <Form.Label style={{ fontSize: "14px" }} className='input-label-text'>Phone/Cell*</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="Phone/Cell"
                      className="py-2 rounded-pill input-text"
                      style={{ fontSize: "14px" }}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>

                <Form.Group controlId="formMessage" className="mb-2">
                  <Form.Label className='input-label-text'>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your Message"
                    className='rounded input-text py-2'
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formAttachment" className="mb-4">
                  <Form.Label className='input-label-text' >Attachment (Optional)</Form.Label>
                  <Form.Control
                    type="file"
                    className='input-text'
                    name="document"
                    onChange={handleChange}
                  />
                </Form.Group>

                {/* Newsletter checkbox and text */}
                <div className='d-flex align-items-center mt-3'>
                  <input
                    type="checkbox"
                    id="newsletter"
                    className='me-2'
                    style={{ accentColor: "#F5454E" }}
                  />
                  <div style={{ fontSize: "12px", color: "#737791" }}>
                    Subscribe To Our Newsletter For Best Offers And Discounts.
                  </div>
                </div>

                <div className="d-flex justify-content-center mt-4">
                  <Button
                    type="submit"
                    variant="light"
                    className="px-5 py-2 rounded-pill custom-hover-btn"
                    style={{
                      backgroundColor: "#CAD3DB40",
                      borderRadius: '40px',
                      border: '1px solid rgba(255, 255, 255, 0.63)',
                      minWidth: '180px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: "14px",
                      fontWeight: "500",
                      cursor: 'pointer',
                      color: "#737791"
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </div>

              </Form.Group>
            </Form>
          </div>
          <div className="w-100 bg-white">
            <div id="map" style={{ height: "100%", width: "100%" }}></div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

const locations = [
  {
    region: "Asia Pacific",
    cards: [
      {
        city: "Mumbai",
        address: "706, Reena Complex, 7th Floor, Ramdev Nagar Road, Vidyavihar (W) Pin - 400 086, India.",
        phone: "+91 7066316633",
        icon: <CiLocationOn className="circle-icon" size={30} color={"#F5454E"} />
      },
      {
        city: "Mumbai",
        address: "516, Bhaveshwar Complex, 5th Floor, Near Skyline Viha, Vidyavihar Pin - 400 086, India.",
        phone: "+91 7066316633",
        icon: <CiLocationOn className="circle-icon" size={30} color={"#F5454E"} />
      },
      {
        city: "Banglore",
        address: "Municipal No. 3, Old Madras Road, Benniganahalli village Krishnarajpuram, Bengaluru, Karnataka Pin - 560016, India.",
        icon: <CiLocationOn className="circle-icon" size={30} color={"#F5454E"} />
      },
      {
        city: "Hyderabad",
        address: "Shakti Enterprise, Level 2, Oval Building Centre, Plot no. 18, iLabs Hyderabad Technology Park, Inorbit Mall Rd, Hyderabad, Telangana 500081",
        icon: <CiLocationOn className="circle-icon" size={30} color={"#F5454E"} />
      },
      {
        city: "Delhi",
        address: "2/F, North B–5, District New Delhi, KLJ Tower, C-Block Community Center, Netaji Subash Place, Pitampura, Wazirpur, Delhi 110034",
        icon: <CiLocationOn className="circle-icon" size={30} color={"#F5454E"} />
      },
      {
        city: "Pune",
        address: "Tech Centre, 5th floor, Plot No. 30, Phase 1, Rajiv Gandhi Infotech Park, MIDC, Hinjewadi, Pune, 411057, Maharashtra, India",
        icon: <CiLocationOn className="circle-icon" size={30} color={"#F5454E"} />
      },
      {
        city: "Email ID",
        address: "General: info@shaktienterprise.com\nSales: sales@shaktienterprise.com\nTranslators: profiles@shaktienterprise.com",
        icon: <MdOutlineEmail size={30} color={"#F5454E"} />,
        isEmail: true
      }
    ]
  },
  {
    region: "Americas",
    cards: [
      {
        city: "Mexico City",
        address: "07th Floor Torre Corporativo Napoles. Av Insurgentes 863, Colonia Napoles, Mexico City, CP 03810, Standard time zone: UTC/GMT - 6 hours.",
        icon: <CiLocationOn size={30} color={"#F5454E"} />
      },
      {
        city: "Email ID",
        address: "Sales: sales.mx@shaktienterprise.com",
        icon: <MdOutlineEmail size={30} color={"#F5454E"} />,
        isEmail: true
      }
    ]
  }
];

const LocationCard = ({ icon, city, address, phone, isEmail }) => (
  <Card className="location-card px-3 py-2 shadow h-100 d-flex flex-column">
    <div className="d-flex justify-content-between align-items-start mb-2">
      <div className="city-name" style={{ fontSize: "16px", fontWeight: 400 }}>{city}</div>
      <img src={gatewayImage} alt="gateway" style={{ width: "40px", marginLeft: "0px" }} />
    </div>

    <div className="flex-grow-1">
      <Row className="mt-2 mb-3">
        <Col xs="auto">
          {icon}
        </Col>
        <Col>
          <div className="info-text" style={{ fontSize: "14px", whiteSpace: "pre-line" }}>
            {address}
          </div>
        </Col>
      </Row>

      {!isEmail && phone && (
        <Row className="align-items-start mt-2 mb-3">
          <Col xs="auto" className="icon-col">
            <PiPhoneCallThin className="circle-icon" size={30} color={"#F5454E"} />
          </Col>
          <Col>
            <div className="info-text" style={{ fontSize: "14px" }}>{phone}</div>
          </Col>
        </Row>
      )}
    </div>

    {!isEmail && (
      <div className="location-link mt-auto pt-2 text-end">
        <span className="info-text" style={{ fontSize: "14px" }}>Current Location</span>
        <span className="arrow"><BsArrowRight size={16} /></span>
      </div>
    )}
  </Card>
);



export default function Contactus() {

  return (
    <div className="language-services-page">
      <MyNavbar />
      <HeroSection />
      <ContactForm />
      <Container className="py-5">
        {locations.map((section, idx) => (
          <div key={idx} className="mb-5">
            <div style={{ fontSize: "20px", color: "#000", fontWeight: "500" }} className="mb-4">{section.region}</div>
            <Row className="g-4">
              {section.cards.map((card, i) => (
                <Col xs={12} sm={6} lg={4} key={i}>
                  <LocationCard {...card} />
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
      <Footer />
    </div>
  );
}















