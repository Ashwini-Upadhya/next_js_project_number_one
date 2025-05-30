import React, { useState } from 'react';
import { Accordion, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { GoPlus, } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";

const AccordionData = ({ title, header, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="p-3 border-top" >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fs-5 flex p-1 justify-between items-center w-full font-bold"
            >
                <span style={{ color: "#737791", fontSize: '20px' }}>{title}</span>
                {isOpen ? <HiMinus size={25} /> : <GoPlus size={25} />}
            </button>
            {isOpen && <div className="mt-2 fw-semibold text-black p-1" style={{ fontSize: "16px" }}>{header}</div>}
            {isOpen && <div className="mt-2 text-gray-600 p-1" style={{ color: "#737791" }}>{content}</div>}
        </div>
    );
};

const DeliveryPlatform = () => {
    const [activeKey, setActiveKey] = useState("0");

    const toggleAccordion = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    return (
        <>
            <Container className='my-5 '>
                <div className='text-center my-5'>
                    <p className='fs-2 fw-bold text-uppercase' style={{ color: '#F5454E' }} >Services</p>
                    <h2 className='fs-1 fw-bold mb-2'>Service Delivery Platform</h2>
                </div>
                <Row className='mt-4'>
                    <Col xs={12} lg={6}>
                        <AccordionData title="Translation Type" header="Identify the type of service that is right for you and enjoy the package benefits." content="We understand your need to control  cost, but we cannot reduce the cost of translation by resorting to machine translation where quality is a suspect.....Read More" />
                        <AccordionData title="Content Writing Services" header="Identify the type of service that is right for you and enjoy the package benefits." content="We understand your need to control  cost, but we cannot reduce the cost of translation by resorting to machine translation where quality is a suspect.....Read More" />
                        <AccordionData title="Language Studio Services" header="Identify the type of service that is right for you and enjoy the package benefits." content="We understand your need to control  cost, but we cannot reduce the cost of translation by resorting to machine translation where quality is a suspect.....Read More" />
                        <AccordionData title="DTP services" header="Identify the type of service that is right for you and enjoy the package benefits." content="We understand your need to control  cost, but we cannot reduce the cost of translation by resorting to machine translation where quality is a suspect.....Read More" />
                        <AccordionData title="360 Degree Language Solution" header="Identify the type of service that is right for you and enjoy the package benefits." content="We understand your need to control  cost, but we cannot reduce the cost of translation by resorting to machine translation where quality is a suspect.....Read More" />
                        <AccordionData title="Translation Type" header="Identify the type of service that is right for you and enjoy the package benefits." content="We understand your need to control  cost, but we cannot reduce the cost of translation by resorting to machine translation where quality is a suspect.....Read More" />
                        <div className='border-top'></div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <AccordionData title="Localization Services" header="Identify the type of service that is right for you and enjoy the package benefits." content="We understand your need to control  cost, but we cannot reduce the cost of translation by resorting to machine translation where quality is a suspect.....Read More" />
                        <AccordionData title="Project Services" header="Identify the type of service that is right for you and enjoy the package benefits." content="We understand your need to control  cost, but we cannot reduce the cost of translation by resorting to machine translation where quality is a suspect.....Read More" />
                        <AccordionData title="Proof Reading Services" header="Identify the type of service that is right for you and enjoy the package benefits." content="We understand your need to control  cost, but we cannot reduce the cost of translation by resorting to machine translation where quality is a suspect.....Read More" />
                        <AccordionData title="Interpretation Services" header="Identify the type of service that is right for you and enjoy the package benefits." content="We understand your need to control  cost, but we cannot reduce the cost of translation by resorting to machine translation where quality is a suspect.....Read More" />
                        <AccordionData title="Audio Visual Services" header="Identify the type of service that is right for you and enjoy the package benefits." content="We understand your need to control  cost, but we cannot reduce the cost of translation by resorting to machine translation where quality is a suspect.....Read More" />
                        <AccordionData title="Translation Services" header="Identify the type of service that is right for you and enjoy the package benefits." content="We understand your need to control  cost, but we cannot reduce the cost of translation by resorting to machine translation where quality is a suspect.....Read More" />
                        <div className='border-top'></div>
                        </Col>
                </Row>
            </Container>
        </>
    );
}

export default DeliveryPlatform;