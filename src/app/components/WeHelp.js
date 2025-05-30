import React, { useState } from 'react';
import { Row, Col, Container, Modal } from 'react-bootstrap';
import Coin from '../../assets/Images/WeHelp/coin1.svg';
import Call from '../../assets/Images/WeHelp/call1.svg';
import User from '../../assets/Images/WeHelp/user.svg';
import './WeHelp.css';
import ShaduleAConsultation from '../SchaduleAConsultation/SchaduleAConsultation';
import Quote from '../SchaduleAConsultation/Quote';
import { useNavigate } from 'react-router-dom';

const WeHelp = () => {

  const navigate = useNavigate();


  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const cardData = [
    {
      title: 'Connect To An Advisor',
      text: 'Our local translators and experts provide solutions for ever changing Industry patterns across all regions',
      icon: User,
      alignment: 'start',
      action: () => setShowScheduleModal(true),
    },
    {
      title: 'In Need Of An Interpreter?',
      text: 'We have custom fitted interpretation solutions to converse with the target audience without any language barrier',
      icon: Call,
      alignment: 'end',
      action: () => navigate("/Services/interpretation-services"),

    },
    {
      title: 'Get An Instant Price Quote',
      text: 'we await your valuable queries with enthusiasm and assure prompt and efficient language translation services.',
      icon: Coin,
      alignment: 'start',
      action: () => setShowQuoteModal(true),
    }
  ];

  return (
    <Container className="p-5">
      <Row className="align-items-center">
        <Col xs={12} lg={6} className="text-center text-lg-start">
          <p className="fw-bold mb-1" style={{ letterSpacing: '1px', color: "#F5454E" }}>NOT 100% SURE WHICH SERVICE YOU NEED?</p>
          <h2 className="fw-bold mb-3">How Can We Help?</h2>
          <p className="text-secondary" style={{ fontSize: '16px', textAlign: 'justify' }}>
            India’s most preferred translation service company for global language communication through Print, Audio-Visual, and Digital media. We offer Content Writing, Document Translation, Website Translation, Multilingual SEO and Software Localization services and other specialized services such as Desktop publishing, Transcription and Interpretation and voice over service
          </p>
        </Col>

        <Col xs={12} lg={6} className="mt-4 mt-lg-0">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className={`d-flex flex-row justify-content-${card.alignment} align-items-center mb-4`}
              onClick={card.action} // Only the first card will have an action
              style={{ cursor: card.action ? 'pointer' : 'default' }}
            >
              <div className="icon-circle me-3">
                <img src={card.icon} alt="icon" className="img-fluid" />
              </div>
              <div className="custom-card shadow-sm">
                <h5 className="fw-bold mb-2">{card.title}</h5>
                <p className="text-secondary m-0" style={{ fontSize: '14px' }}>{card.text}</p>
              </div>
            </div>
          ))}
        </Col>
      </Row>

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
    </Container>
  );
};

export default WeHelp;
