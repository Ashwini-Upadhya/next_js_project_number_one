import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import Logo from '../../assets/Images/Navimages/logo-white.png'
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaLinkedin } from 'react-icons/fa';



const FooterMenu = () => {

    const navigate = useNavigate();


    useEffect(() => {
        const map = L.map("map").setView([19.0760, 72.8777], 12);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(map);

        return () => {
            map.remove();
        };
    }, []);

    return (
        <>
            {/* Footer Section */}
            <div style={{ backgroundColor: '#F5454E' }}>
                <Container className='mt-3'>
                    <Row>
                        <Col className='m-4'>
                            <h2 className='fw-bold' style={{ color: "white", fontSize: "20px" }}>Subscribe</h2>
                            <p style={{ color: '#FFFFFF' }}>
                                Whether you are an individual or a corporate entity, we await your valuable queries with equal enthusiasm and assure you prompt and efficient language translation services.
                            </p>
                        </Col>
                        <Col className='m-5'>
                            <Form>
                                <InputGroup>
                                    <Form.Control
                                        placeholder="Enter your email"
                                        aria-label="Email"
                                    />
                                    <InputGroup.Text>
                                        <Button style={{ backgroundColor: '#F5454E', border: 'none', color: "white" }} type="submit">
                                            Contact Me
                                        </Button>
                                    </InputGroup.Text>
                                </InputGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Map Section */}
            <div id="map" style={{ height: "40vh", width: "100%" }}></div>
            {/* footer */}
            <div style={{ backgroundColor: '#6F6464' }}>
                <Container >
                    <Row className='d-flex justify-content-center align-items-start py-3'>
                        {/* Empty column for spacing */}

                        {/* Logo and description */}
                        <Col sm={12} lg={3} md={6} className='p-3'>
                            <img
                                src={Logo}
                                alt="Company Logo" />
                            <div className="py-4" >
                                <span
                                    style={{ fontSize: "14px", cursor: 'pointer', color: 'white', textDecoration: 'underline', marginRight: '5px' }}
                                    onClick={() => window.open('https://www.beyondwordz.com/', '_blank')}
                                >
                                    Beyond Wordz
                                </span>
                                <span style={{ color: 'white' }}>|</span>
                                <span
                                    style={{ fontSize: "14px", cursor: 'pointer', color: 'white', textDecoration: 'underline', marginLeft: '5px' }}
                                    onClick={() => window.open('https://www.bhashabharatiarts.com/', '_blank')}
                                >
                                    Bhasha Bharati
                                </span>
                            </div>
                        </Col>


                        {/* Get to know us */}
                        <Col sm={12} lg={3} md={6} className='p-3'>
                            <ul className="text-white list-unstyled">
                                <li className='fw-bold mb-3' style={{ fontSize: "20px" }}>Get to know us</li>
                                <li className='mt-3' style={{ fontSize: "14px", fontWeight: "400", cursor: "pointer" }}
                                    onClick={() => navigate('/about')}>
                                    About us
                                </li>
                                <li className='mt-3' style={{ fontSize: "14px", fontWeight: "400", cursor: "pointer" }}
                                    onClick={() => navigate('/termsandcondition')}>
                                    Terms & Conditions
                                </li>
                                <li className='mt-3' style={{ fontSize: "14px", fontWeight: "400", cursor: "pointer" }}
                                    onClick={() => navigate('/privacypolicy')}>
                                    Privacy Policy
                                </li>
                                <li className='mt-3' style={{ fontSize: "14px", fontWeight: "400", cursor: "pointer" }}
                                    onClick={() => navigate('/about/faq')}>
                                    FAQ
                                </li>
                            </ul>
                        </Col>

                        {/* Let's work together */}
                        <Col sm={12} lg={3} md={6} className='p-3'>
                            <ul className="text-white list-unstyled">
                                <li className='fw-bold mb-3' style={{ fontSize: "20px" }}>Recent Blogs</li>
                                <li className='mt-3' style={{ fontSize: "14px", fontWeight: "400" }}>What Would Proofreading Services Cost?</li>
                                <li className='mt-3' style={{ fontSize: "14px", fontWeight: "400" }}>Top-5-translation-companies-in-india</li>
                                <li className='mt-3' style={{ fontSize: "14px", fontWeight: "400" }}>Why-do-you-need-website-translation-services-in-multiple-languages</li>
                                <li className='mt-3' style={{ fontSize: "14px", fontWeight: "400" }}>Importance Of Indian Language Translation Services to the Travel Industry</li>
                            </ul>
                        </Col>

                        {/* Contact Us */}
                        <Col sm={12} lg={3} md={6} className='p-3'>
                            <ul className="text-white list-unstyled">
                                <li className='fw-bold mb-3' style={{ fontSize: "20px" }}>Contact Us</li>
                                <li className='mt-3' style={{ fontSize: "14px", fontWeight: "400" }}>706, 7th Floor, Reena Complex
                                    Ramdev Nagar Road, Vidyavihar (West)
                                    Mumbai - 400 086, Maharashtra,
                                    India</li>
                                <li className='mt-3' style={{ fontSize: "14px", fontWeight: "400" }}>Phone : +91-7066316633</li>
                                <li className='mt-2' style={{ fontSize: "14px", fontWeight: "400" }}>
                                    General: <a href="mailto:info@shaktienterprise.com" className="text-white text-decoration-underline">info@shaktienterprise.com</a>
                                </li>

                                <li className='mt-3 fw-bold' style={{ fontSize: "18px" }}>Social media</li>
                                <li className='mt-3'>
                                    <div className='d-flex gap-3'>
                                        <a href="https://www.facebook.com/shaktitranslation/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                            <FaFacebookF size={"18px"} />
                                        </a>
                                        <a href="https://www.instagram.com/shaktienterprise/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                            <FaInstagram size={"18px"} />
                                        </a>
                                        <a href="https://x.com/i/flow/login?redirect_after_login=%2FSE_translation" target="_blank" rel="noopener noreferrer" className="social-icon">
                                            <FaTwitter size={"18px"} />
                                        </a>
                                        <a href="https://www.youtube.com/channel/UC_sKEjAtaeLcyb-g2xLp2xQ" target="_blank" rel="noopener noreferrer" className="social-icon">
                                            <FaYoutube size={"18px"} />
                                        </a>
                                        <a href="https://in.pinterest.com/shaktienterprise/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                            <FaPinterest size={"18px"} />
                                        </a>
                                        <a href="https://www.linkedin.com/company/shakti-enterprise/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                            <FaLinkedin size={"18px"} />
                                        </a>
                                    </div>
                                </li>

                            </ul>
                        </Col>

                        {/* Background image - hidden on md and sm screens */}

                    </Row>
                </Container>
            </div>
            <footer style={{ backgroundColor: 'black' }} className="text-white p-2 py-3 d-flex align-items-center justify-content-between">
                <div className="text-center w-100" style={{ marginLeft: '-40px' }}>
                    Copyright &#169; 2025 | All rights reserved | Shakti Enterprise : Translation Services India :
                    Mumbai, Pune, Bangalore, Hyderabad, Delhi, Mexico
                </div>
            </footer>

        </>
    );
};

export default FooterMenu;
