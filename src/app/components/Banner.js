import { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import BannerVideo from '../../assets/videos/bg-video1.mp4';
import Quote from '../SchaduleAConsultation/Quote';
import ShaduleAConsultation from '../SchaduleAConsultation/SchaduleAConsultation';

const Banner = () => {
    const [showQuoteModal, setShowQuoteModal] = useState(false);
    const [showScheduleModal, setShowScheduleModal] = useState(false);

    return (
        <div className="bg-black">
            <div className="d-flex align-items-end position-relative" style={{ minHeight: '100vh', width: '100%' }}>

                {/* Background Video */}
                <video autoPlay loop muted className="video-bg"
                    style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'fill' }}>
                    <source src={BannerVideo} type="video/mp4" />
                </video>

                <Container className="position-relative text-white" style={{ zIndex: 1 }}>
                    {/* <p className="text-lg font-medium mt-2 fs-3 fs-sm-4">
                        Professional Translation Services
                    </p>
                    <h1 className="display-3 display-sm-4 fw-bold">Break the Language Barrier with</h1>
                    <h1 className="fw-bold display-3 display-sm-4">Power of Clarity</h1> */}

                    <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap" style={{ marginBottom: "200px" }}>
                        <span
                            className="d-inline-flex bannerBtn px-5 py-3 mb-3"
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: '2.5rem',           // 40px → 2.5rem
                                border: '0.125rem solid #F5454E', // 2px → 0.125rem
                                minWidth: '11.25rem',             // 180px → 11.25rem
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: "1rem",                 // 16px → 1rem
                                fontWeight: "500",
                                cursor: 'pointer',
                                color: "#F5454E"
                            }}
                            onClick={() => setShowQuoteModal(true)}
                        >
                            Get a Quote
                        </span>

                        <span
                            className="d-inline-flex bannerBtn px-4 py-3 mb-3"
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: '2.5rem',           // 40px → 2.5rem
                                border: '0.125rem solid #F5454E', // 2px → 0.125rem
                                minWidth: '11.25rem',             // 180px → 11.25rem
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: "1rem",                 // 16px → 1rem
                                fontWeight: "500",
                                cursor: 'pointer',
                                color: "#F5454E"
                            }}
                            onClick={() => setShowScheduleModal(true)} >
                            Schedule a Call
                        </span>
                    </div>
                </Container>
            </div>

            {/* Quote Modal */}
            <Modal
                show={showQuoteModal}
                onHide={() => setShowQuoteModal(false)}
                size="xl"
                centered
            // backdrop="static"
            >
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
        </div>
    );
};

export default Banner;




