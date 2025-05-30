import React, { useState } from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap';
import Quote from '../SchaduleAConsultation/Quote';
import ShaduleAConsultation from '../SchaduleAConsultation/SchaduleAConsultation';
import { FaPhoneAlt } from 'react-icons/fa';


const GetQuoteSubscriptionSection = () => {
    const [showQuoteModal, setShowQuoteModal] = useState(false);
    const [showScheduleModal, setShowScheduleModal] = useState(false);
    return (
        <div className="subscribe-section py-5">
            <Container className="">
                <div className="subscribe-container position-relative p-4 p-md-5"
                    style={{
                        backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20211009/pngtree-bg-abstrack-pink-color-image_910529.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Row className="justify-content-center">
                        <Col md={10} lg={8}>
                            <div className="text-center py-5">
                                <h4 className={`fw-bold mb-3 `} style={{ color: "#5E6282", fontSize: "18px" }}>
                                    Rely on Shakti enterprise, a qualified and certified translation agency in India with a track record of more than 4 decades of translation service and trusted world over by companies big and small.
                                </h4>
                                <div className="d-flex justify-content-center gap-4 mt-4">
                                    <div className="d-flex flex-wrap gap-3">
                                        <span
                                            className="d-inline-flex global-both-buttons px-4 py-2 mb-3"
                                            style={{
                                                backgroundColor: "#CAD3DB20",
                                                borderRadius: '40px',
                                                border: '1px solid rgba(255, 255, 255, 0.63)',
                                                // minWidth: '180px',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                fontSize: "14px",
                                                fontWeight: "400",
                                                cursor: 'pointer'
                                            }} onClick={() => setShowQuoteModal(true)}>
                                            Get a Quote
                                        </span>
                                        <span
                                            className="d-inline-flex global-both-buttons px-4 py-2 mb-3"
                                            style={{
                                                backgroundColor: "#CAD3DB20",
                                                borderRadius: '40px',
                                                border: '1px solid rgba(255, 255, 255, 0.63)',
                                                // minWidth: '180px',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                fontSize: "14px",
                                                fontWeight: "400",
                                                cursor: 'pointer'
                                            }} onClick={() => setShowScheduleModal(true)}>
                                            Schedule a Call
                                        </span>
                                    </div>
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
                    </Row>
                    <div className="send-icon">
                        <FaPhoneAlt className="text-white" />
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default GetQuoteSubscriptionSection