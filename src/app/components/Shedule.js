import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Quote from "../SchaduleAConsultation/Quote";
import ScheduleAConsultation from "../SchaduleAConsultation/SchaduleAConsultation";
import "./form.css"

function QuoteSection() {
  return <div className="rounded-xl"> <Quote /> </div>;
}

function ConsultationSection() {
  return <div className="rounded-xl"><ScheduleAConsultation /></div>;
}

export default function Schedule() {
  const [activeComponent, setActiveComponent] = useState("quote");

  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <Row className="my-3">
          <p className='fw-bold text-uppercase text-center mt-5' style={{ color: "#F5454E", fontSize: "16px" }}>Schedule a Call</p>
          <h1 className='text-black fw-bold text-center' style={{ fontSize: "28px" }}>Get your 15 minutes consultation absolutely Free</h1>
        </Row>

        <div className="mb-3 d-flex justify-content-center align-items-center">
          <button
            style={{
              borderRadius: '30px',
              border: activeComponent === "quote" ? "none" : '1px solid #CAD3DB',
              backgroundColor: activeComponent === "quote" ? "#F5454E" : "transparent",
              color: activeComponent === "quote" ? "white" : "#737791"
            }}
            onClick={() => setActiveComponent("quote")}
            className="mb-0 px-4 py-2 mx-2 custom-hover-btn"
          >
            Get a Quote
          </button>

          <button
            style={{
              // width: '205px',
              // height: '60px',
              borderRadius: '30px',
              border: activeComponent === "consultation" ? "none" : '1px solid #CAD3DB',
              backgroundColor: activeComponent === "consultation" ? "#F5454E" : "transparent",
              color: activeComponent === "consultation" ? "white" : "#737791"
            }}
            onClick={() => setActiveComponent("consultation")}
            className="mb-0 px-4 py-2 mx-2 custom-hover-btn"
          >
            Schedule a Call
          </button>
        </div>

        <Container>
          {activeComponent === "quote" ? <QuoteSection /> : <ConsultationSection />}
        </Container>
      </div>
    </Container>

  );
} 
