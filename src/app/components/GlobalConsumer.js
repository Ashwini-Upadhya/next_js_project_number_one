import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import GlobalConsumerImage from '../../assets/Images/GlobalConsumer/Group.png'

const GlobalConsumer = () => {
    return (
        <Container className="my-5 pt-5">
            <Row className="">
                <Col xs={12} lg={6} className='text-center text-md-start d-flex flex-column align-items-start'>
                    <p className='fw-bold fs-3' style={{ color: '#F5454E' }}>
                        Global Consumer
                    </p>
                    <h2 className='fs-1 fw-bold'>We Are Your Language Power To Connect With Global Consumer</h2>
                    <p className='fs-5'>
                        At Shakti Enterprise, we are driven by the conviction that translation is about socilally associating with the intensity of clearness.
                    </p>
                    <div
                        className="heroBannerBtn px-5 py-3 text-black fw-semibold fs-5 my-3 position-relative"
                        style={{ backgroundColor: "#fff", borderRadius: '40px', border: '1px solid rgba(141, 141, 141, 0.63)' }}
                    >
                        Read more
                    </div>
                </Col>
                <Col xs={12} lg={6} className="">
                    <img src={GlobalConsumerImage} alt="About Us" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    )
}

export default GlobalConsumer
