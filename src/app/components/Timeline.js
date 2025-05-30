import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Col, Container, Row, Modal } from 'react-bootstrap';
import './Timeline.css';
import ShaduleAConsultation from '../SchaduleAConsultation/SchaduleAConsultation';

// Reusable Timeline Card Component
const TimelineCard = ({ year, title, description, isLast }) => {
  const cardRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);


  useEffect(() => {
    if (cardRef.current && !isLast) {
      const height = cardRef.current.offsetHeight;
      setLineHeight(height + 20); // Add some space between dots
    }
  }, [cardRef, isLast]);

  return (
    <Col className="d-flex align-items-start mb-4 position-relative">
      <div className="timeline-dot-container">
        <div className="timeline-dot">
          <span className="timeline-dot-inner">•</span>
        </div>
        {!isLast && <div className="timeline-line" style={{ height: `${lineHeight}px` }} />}
      </div>

      <Card className="timeline-card" ref={cardRef}>
        <Card.Body>
          <Card.Title className="d-flex align-items-start">
            <span className="timeline-year">{year}</span>
            <span className="ps-3 fs-6 font-normal timeline-title">{title}</span>
          </Card.Title>
          <Card.Text className="timeline-description">
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Timeline = () => {
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const timelineData = [
    {
      year: '1970-1975',
      title: 'Company Started',
      description: 'The foundation of the company was laid with a vision to serve quality and reliability. It began operations in a modest setup, focusing on establishing a strong base in the local market.'
    },
    {
      year: '1975-1980',
      title: 'Expansion Phase',
      description: 'With increasing demand and positive customer response, the company expanded its operations, added new product lines, and started serving neighboring regions.'
    },
    {
      year: '1980-1985',
      title: 'Product Launch',
      description: 'During this period, the company introduced its flagship products, which played a crucial role in shaping its identity and boosting brand recognition across the industry.'
    },
    {
      year: '1985-1990',
      title: 'Global Reach',
      description: 'The company marked its presence in the international market by establishing export channels and participating in global trade fairs and exhibitions.'
    },
    {
      year: '1990-1995',
      title: 'Technology Upgrade',
      description: 'To enhance efficiency and maintain quality standards, the company adopted modern technologies and upgraded its manufacturing infrastructure.'
    },
    {
      year: '1995-2000',
      title: 'Awards & Recognition',
      description: 'This phase saw the company receiving multiple industry awards and certifications for its excellence in product innovation, customer service, and operational excellence.'
    },
    {
      year: '2000-2005',
      title: 'Sustainability Initiatives',
      description: 'The company took conscious steps towards sustainability by adopting eco-friendly practices, reducing waste, and initiating community welfare programs.'
    },
    {
      year: '2005-2010',
      title: 'Digital Transformation',
      description: 'Embracing digital tools and automation, the company transformed its business operations, improving communication, supply chain management, and customer engagement.'
    },
    {
      year: '2010-2023',
      title: 'Current Achievements',
      description: 'Today, the company stands as an industry leader with a strong domestic and global presence, continuously innovating and delivering value to its customers.'
    }
  ]


  return (
    <div className="mt-5">
      <Container>
        <Row>
          {/* Left Section */}
          <Col lg={6}>
            <div className="fw-bold" style={{ color: "#F5454E", fontSize: "18px", }}>Timeline</div>
            <div className="fw-bold" style={{ fontSize: "30px" }}>India’s most preferred translation</div>
            <div className="fw-bold" style={{ fontSize: "30px" }}>service company for several decades</div>

            <Row className="g-3 d-flex justify-content-between mt-3">
              <Col xs={12} sm={4}>
                <Card className="text-center p-3 shadow-lg h-100 timeline-metric-card">
                  <Card.Body>
                    <div className="timeline-metric-number" >650+ million</div>
                    <div className="timeline-metric-label">WORDS TRANSLATED</div>
                  </Card.Body>


                </Card>
              </Col>

              <Col xs={12} sm={4}>
                <Card className="text-center p-3 shadow-lg h-100 timeline-metric-card">
                  <Card.Body>
                    <div className="timeline-metric-number" >1300</div>
                    <div className="timeline-metric-label">TRANSLATORS</div>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={4}>
                <Card className="text-center p-3 shadow-lg h-100 timeline-metric-card">
                  <Card.Body>
                    <div className="timeline-metric-number" >40+</div>
                    <div className="timeline-metric-label">YEARS EXPERIENCE</div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <p className="fs-6 mt-4" style={{ color: '#737791', lineHeight: "30px" }}>
              Shakti Enterprise is a professional translation agency in India, born out of the fundamental belief that translation is all about ‘saying what you mean’ in their language.
            </p>

            <div className="d-flex justify-content-start mt-4 mb-2">
              <Button variant="light" 
              className="px-4 py-2 schedule-custom-hover-btn" 
              style={{ fontWeight: "500", border: '1px solid #dcdcdc', borderRadius: '30px' }}
              onClick={() => setShowScheduleModal(true)}
              >
                Schedule a Call
              </Button>
            </div>
          </Col>

          {/* Right Section */}
          <Col xs={12} lg={6} className="d-flex justify-content-center timeline-scroll-wrapper">
            <Container className=" timeline-scroll-container">
              <Row className="flex-column position-relative timeline-wrapper">
                {timelineData.map((data, index) => (
                  <TimelineCard
                    key={index}
                    year={data.year}
                    title={data.title}
                    description={data.description}
                    isLast={index === timelineData.length - 1}
                  />
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
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

export default Timeline;
