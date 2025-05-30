import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { FaPaperPlane } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'
import { PiPaperPlaneTiltFill } from 'react-icons/pi'

const SubscribeSection = ({ bgLight = false }) => {
    return (

        <div className="subscribe-section py-5">
            <Container>
                <div
                    className={`subscribe-container ${bgLight ? 'bg-light rounded-4' : 'position-relative'} p-4 p-md-5`}
                    style={{
                        backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20211009/pngtree-bg-abstrack-pink-color-image_910529.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Row className="justify-content-center">
                        <Col xs={12} md={10} lg={8}>
                            <div className="text-center py-4 py-md-5">
                                <h4
                                    className="fw-bold mb-4"
                                    style={{
                                        color: "#5E6282",
                                        fontSize: "18px", // 24px equivalent
                                    }}>
                                    Whether you are an individual or a corporate entity, we await your valuable queries with equal enthusiasm and assure you prompt and efficient language translation services.
                                </h4>
                                <Form>
                                    <Row className="justify-content-center">
                                        <Col xs={12} sm={12} lg={8}>
                                            <div style={{ position: "relative" }}>
                                                <IoMailOutline
                                                    style={{
                                                        position: "absolute",
                                                        top: "50%",
                                                        left: "15px",
                                                        transform: "translateY(-50%)",
                                                        color: "#555",
                                                        fontSize: "18px",
                                                    }}
                                                />
                                                <Form.Control
                                                    placeholder="Your email"
                                                    aria-label="Your email"
                                                    className="py-2 mb-2 ps-5"
                                                    style={{
                                                        borderRadius: "50px",
                                                        fontSize: "14px"
                                                    }} />
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={12} lg={4} className="text-center">
                                            <Button
                                                className="px-5 py-2 mt-2 mt-sm-0 mb-2 border-0"
                                                style={{
                                                    borderRadius: "50px",
                                                    backgroundColor: "#F5454E",
                                                }} >
                                                Contact Me
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>

                            </div>
                        </Col>
                    </Row>

                    {/* Optional Send Icon */}
                    <div className="send-icon">
                        <PiPaperPlaneTiltFill className="text-white" size={24} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SubscribeSection