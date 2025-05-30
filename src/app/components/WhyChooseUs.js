import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Container, Row, Card } from 'react-bootstrap'
import Satisfaction from '../../assets/Images/WhyChooseUs/satisfaction.png'
import Data from '../../assets/Images/WhyChooseUs/datasafety.png'
import Ai from '../../assets/Images/WhyChooseUs/aipower.png'
import Vector2 from '../../assets/Images/WhyChooseUs/Vector2.png'
import Vector3 from '../../assets/Images/WhyChooseUs/Vector3.png'
import Vector4 from '../../assets/Images/WhyChooseUs/Vector4.png'
import "./WhyChooseUs.css"

const WhyChooseUs = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const navigate = useNavigate();

    return (
        <Container>
            <Row className='mx-2 mt-3 d-flex align-items-center justify-content-center'>
                <Col xs={12} className="d-flex flex-column align-items-center">
                    <div className="text-uppercase fw-bold" style={{ fontSize: "22px", color: "#F5454E", fontFamily: 'Inter, sans-serif' }}>
                        Why choose Shakti Enterprise
                    </div>
                    <div className="text-black fw-bold" style={{ fontSize: "30px" }}>
                        Delivering Cultural Precision
                    </div>
                </Col>
            </Row>

            <Row style={{ maxWidth: '850px' }} className="mt-5 mx-auto justify-content-center">
                {/* First Card */}
                <Col xs={12} sm={6} md={4} className="mb-4 d-flex justify-content-center align-items-start">
                    <Card
                        style={{ width: '100%', maxWidth: '15rem', minHeight: '16rem', border: 'none', borderRadius: '25px', boxShadow: '7px 12px 43px 0px #00000024' }}
                        className="why-card boxshadowclass text-center shadow rounded-5"
                        onMouseEnter={() => setHoveredCard("card1")}
                        onMouseLeave={() => setHoveredCard(null)}
                        onClick={() => navigate('/services')}
                        role="button"
                    >
                        <Card.Body>
                            <img
                                src={hoveredCard === 'card1' ? Vector2 : Satisfaction}
                                alt="Satisfaction"
                                className="mx-auto mt-3 mb-3 img-fluid"
                            />
                            <Card.Title className='boxshadowclasstext fs-5 fw-bold' style={{ color: '#F5454E' }}>Satisfaction</Card.Title>
                            <Card.Text className='boxshadowclasstext' style={{ fontSize: "14px", color: '#737791' }}>
                                we are known for delivering accurate language translation services
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Second Card */}
                <Col xs={12} sm={6} md={4} className="mb-4 d-flex justify-content-center align-items-start">
                    {/* <a
                        href="https://www.shaktienterprise.com/privacy-policy.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                    > */}
                    <Card
                        style={{ borderRadius: '25px', width: '100%', maxWidth: '15rem', border: 'none', boxShadow: '7px 12px 43px 0px #00000024', marginTop: '80px', marginBottom: '40px' }}
                        className="why-card boxshadowclass text-center shadow rounded-5"
                        onMouseEnter={() => setHoveredCard("card2")}
                        onMouseLeave={() => setHoveredCard(null)}
                        onClick={() => navigate('/privacypolicy')}

                    >
                        <Card.Body>
                            <img
                                src={hoveredCard === 'card2' ? Vector3 : Data}
                                alt="Data safety"
                                className="mx-auto mt-3 mb-3 img-fluid"
                            />
                            <Card.Title className='boxshadowclasstext fs-5 fw-bold' style={{ color: '#F5454E' }}>Data safety</Card.Title>
                            <Card.Text className='boxshadowclasstext' style={{ fontSize: "14px", color: '#737791' }}>
                                we are committed to protect your data and privacy
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    {/* </a> */}
                </Col>

                {/* Third Card */}
                <Col xs={12} sm={6} md={4} className="mb-4 d-flex justify-content-center align-items-start">
                    <a
                        href="https://www.shaktienterprise.com/memory-tools.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                    >
                        <Card
                            style={{ borderRadius: '25px', width: '100%', maxWidth: '15rem', border: 'none', boxShadow: '7px 12px 43px 0px #00000024' }}
                            className="why-card boxshadowclass text-center shadow rounded-5"
                            onMouseEnter={() => setHoveredCard("card3")}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <Card.Body>
                                <img
                                    src={hoveredCard === 'card3' ? Vector4 : Ai}
                                    alt="AI Powered"
                                    className="mx-auto mt-3 mb-3 img-fluid"
                                />
                                <Card.Title className='boxshadowclasstext fs-5 fw-bold' style={{ color: '#F5454E' }}>Ai powered</Card.Title>
                                <Card.Text className='boxshadowclasstext' style={{ fontSize: "14px", color: '#737791' }}>
                                    we deliver faster, context-aware, and culturally accurate translations across industries
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>

            </Row>
        </Container>
    )
}

export default WhyChooseUs
