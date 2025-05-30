import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Modal, Overlay, Popover } from "react-bootstrap";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Shadule from '../../assets/Images/ScheduleAConsultation/shadule.svg';
import Watch from '../../assets/Images/ScheduleAConsultation/watch.svg';
import "./form.css";
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ShaduleAConsultation = () => {
    const navigate = useNavigate()

    const [date, setDate] = useState(new Date());
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [calendarDisabled, setCalendarDisabled] = useState(false);
    const [timeStartIndex, setTimeStartIndex] = useState(0);
    const [filteredTimeSlots, setFilteredTimeSlots] = useState([]);
    const [showWarning, setShowWarning] = useState(false);
    const calendarRef = useRef(null);

    const TIME_DISPLAY_LIMIT = 5;

    const TimeSlots = [
        "12:00 AM", "12:15 AM", "12:30 AM", "12:45 AM",
        "1:00 AM", "1:15 AM", "1:30 AM", "1:45 AM",
        "2:00 AM", "2:15 AM", "2:30 AM", "2:45 AM",
        "3:00 AM", "3:15 AM", "3:30 AM", "3:45 AM",
        "4:00 AM", "4:15 AM", "4:30 AM", "4:45 AM",
        "5:00 AM", "5:15 AM", "5:30 AM", "5:45 AM",
        "6:00 AM", "6:15 AM", "6:30 AM", "6:45 AM",
        "7:00 AM", "7:15 AM", "7:30 AM", "7:45 AM",
        "8:00 AM", "8:15 AM", "8:30 AM", "8:45 AM",
        "9:00 AM", "9:15 AM", "9:30 AM", "9:45 AM",
        "10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM",
        "11:00 AM", "11:15 AM", "11:30 AM", "11:45 AM",
        "12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM",
        "1:00 PM", "1:15 PM", "1:30 PM", "1:45 PM",
        "2:00 PM", "2:15 PM", "2:30 PM", "2:45 PM",
        "3:00 PM", "3:15 PM", "3:30 PM", "3:45 PM",
        "4:00 PM", "4:15 PM", "4:30 PM", "4:45 PM",
        "5:00 PM", "5:15 PM", "5:30 PM", "5:45 PM",
        "6:00 PM", "6:15 PM", "6:30 PM", "6:45 PM",
        "7:00 PM", "7:15 PM", "7:30 PM", "7:45 PM",
        "8:00 PM", "8:15 PM", "8:30 PM", "8:45 PM",
        "9:00 PM", "9:15 PM", "9:30 PM", "9:45 PM",
        "10:00 PM", "10:15 PM", "10:30 PM", "10:45 PM",
        "11:00 PM", "11:15 PM", "11:30 PM", "11:45 PM"
    ];

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
        const selectedDay = selectedDate.getDay(); // 0 = Sunday
        setShowWarning(selectedDay === 0);
        setTimeStartIndex(0);
    };

    const disablePastDates = ({ date }) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };

    const formatTimeTo24 = (timeStr) => {
        const [time, modifier] = timeStr.split(" ");
        let [hours, minutes] = time.split(":").map(Number);
        if (modifier === "PM" && hours !== 12) hours += 12;
        if (modifier === "AM" && hours === 12) hours = 0;
        return { hours, minutes };
    };

    const getCurrentTimeInMinutes = () => {
        const now = new Date();
        return now.getHours() * 60 + now.getMinutes();
    };

    useEffect(() => {
        const today = new Date();
        const selectedDate = new Date(date);

        let validSlots = [...TimeSlots];

        if (
            selectedDate.getDate() === today.getDate() &&
            selectedDate.getMonth() === today.getMonth() &&
            selectedDate.getFullYear() === today.getFullYear()
        ) {
            const currentMinutes = getCurrentTimeInMinutes();

            validSlots = TimeSlots.filter((slot) => {
                const { hours, minutes } = formatTimeTo24(slot);
                return hours * 60 + minutes > currentMinutes;
            });
        }

        setFilteredTimeSlots(validSlots);
    }, [date]);

    const showPrev = timeStartIndex > 0;
    const showNext = timeStartIndex + TIME_DISPLAY_LIMIT < filteredTimeSlots.length;


    const handleStartScheduling = () => {
        if (email.trim() && phone.trim()) {
            // Store form data in localStorage to pass to the next page
            localStorage.setItem("schedulingEmail", email)
            localStorage.setItem("schedulingPhone", phone)
            navigate("/start-scheduling")
        }
    }



    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={12} lg={12} className="d-flex flex-column flex-md-row shadow overflow-hidden p-0" style={{ backgroundColor: "#F5454E1A", borderRadius: "40px" }}>
                    <div className="w-100 w-md-50 p-4" style={{ backgroundColor: "#F5454E1A" }}>
                        <Row className="align-items-start">
                            <Col xs={8}>
                                <h6 style={{ color: "#737791" }}>Kumiko Extent, Nurturing Manager</h6>
                                <h4 className="fw-bold mt-3">Schedule A Call With Shakti Enterprise</h4>
                            </Col>
                            <Col xs={4} className="d-flex justify-content-end">
                                <img src={Shadule} alt="Schedule Icon" style={{ height: "80px", width: "80px" }} />
                            </Col>
                        </Row>

                        <Form>
                            <Form.Group>
                                <div className="d-flex align-items-center mt-3">
                                    <img src={Watch} alt="Watch" className="me-2" />
                                    <span style={{ fontSize: "16px", color: "#737791", fontWeight: "400" }}>15 min</span>
                                </div>

                                <Form.Label className="mt-3 fw-medium">Add Your Business Email Address</Form.Label>
                                <p style={{ fontSize: "16px", color: "#737791" }}>
                                    Before proceeding, we need to validate your company email address to ensure we have the correct details.
                                </p>

                                <Row className="mt-3">
                                    <Col xs={12} md={6} className="mb-3">
                                        <Form.Label style={{ fontSize: "14px" }} className="fw-medium">Work Email*</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Your Email Address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="py-2 rounded-pill"
                                            style={{ fontSize: "14px" }}
                                        />
                                    </Col>
                                    <Col xs={12} md={6} className="mb-3">
                                        <Form.Label style={{ fontSize: "14px" }} className="fw-medium">Phone Number*</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Your Phone Number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="py-2 rounded-pill"
                                            style={{ fontSize: "14px" }}
                                        />

                                    </Col>
                                </Row>

                                <div className="d-flex justify-content-center mt-4">
                                    <Button
                                        variant="light"
                                        className="px-5 py-2 rounded-pill custom-hover-btn"
                                        style={{
                                            backgroundColor: email.trim() && phone.trim() ? "#F5454E" : "#CAD3DB40",
                                            color: email.trim() && phone.trim() ? "#fff" : "#737791",
                                            borderRadius: '40px',
                                            border: '1px solid rgba(255, 255, 255, 0.63)',
                                            minWidth: '180px',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            fontSize: "14px",
                                            fontWeight: "500",
                                            cursor: email.trim() && phone.trim() ? 'pointer' : 'not-allowed',
                                            pointerEvents: email.trim() && phone.trim() ? 'auto' : 'none',
                                        }}
                                        disabled={!(email.trim() && phone.trim())}
                                        onClick={handleStartScheduling}
                                    >
                                        Start Scheduling
                                    </Button>


                                </div>
                            </Form.Group>
                        </Form>

                        <p className="mt-4 text-start" style={{ color: "#737791", fontSize: "14px" }}>
                            By Sharing Your Personal Data, You Agree To Our <span style={{ color: "#F5454E", fontSize: "14px", cursor: "pointer" }} onClick={() => navigate("/privacypolicy")}>Privacy Policy</span>.
                        </p>
                    </div>

                    <div className="w-100 w-md-50 p-4 bg-white">
                        <h5 className="text-center mb-3">Select A Date & Time</h5>

                        <div ref={calendarRef}>
                            <Calendar
                                onChange={handleDateChange}
                                value={date}
                                className="w-100 calendar-disabled"
                                tileDisabled={() => true} // disables all tiles
                                disabled={true}
                            />


                        </div>

                        <Overlay
                            target={calendarRef.current}
                            show={showWarning}
                            placement="right"
                        >
                            {(props) => (
                                <Popover {...props}>
                                    <Popover.Body style={{ color: "#F5454E", fontSize: "14px", fontWeight: "500" }}>
                                        Sunday is a holiday. Please choose another date.
                                    </Popover.Body>
                                </Popover>
                            )}
                        </Overlay>

                        <div className="d-flex justify-content-start align-items-center mt-4 mb-2">
                            <img src={Watch} alt="watch" style={{ width: "20px", height: "20px" }} />
                            <div className="mb-0 ms-1" style={{ color: "#F5454E", fontSize: "14px", fontWeight: "bold" }}>Time Zone</div>
                        </div>
                        <div className="mb-0 ms-2" style={{ color: "#737791", fontSize: "14px", fontWeight: "500" }}>India standard Time(11:00 AM)</div>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ShaduleAConsultation;
