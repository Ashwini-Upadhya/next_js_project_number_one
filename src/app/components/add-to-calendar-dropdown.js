"use client";

import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FaGoogle, FaMicrosoft, FaApple, FaDownload } from "react-icons/fa";

const CalendarModal = ({ show, onHide, calendarUrls, onCalendarSelect }) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add to Calendar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-grid gap-2">
                    <Button
                        variant="outline-primary"
                        onClick={() => onCalendarSelect("google")}
                        size="lg"
                        className="mb-2 d-flex align-items-center justify-content-center"
                    >
                        <FaGoogle className="me-2" />
                        Google Calendar
                    </Button>
                    <Button
                        variant="outline-primary"
                        onClick={() => onCalendarSelect("outlook")}
                        size="lg"
                        className="mb-2 d-flex align-items-center justify-content-center"
                    >
                        <FaMicrosoft className="me-2" />
                        Outlook Calendar
                    </Button>
                    <Button
                        variant="outline-primary"
                        onClick={() => onCalendarSelect("apple")}
                        size="lg"
                        className="mb-2 d-flex align-items-center justify-content-center"
                    >
                        <FaApple className="me-2" />
                        Apple Calendar
                    </Button>
                    <Button
                        variant="outline-secondary"
                        onClick={() => onCalendarSelect("ics")}
                        size="lg"
                        className="d-flex align-items-center justify-content-center"
                    >
                        <FaDownload className="me-2" />
                        Download ICS File
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default CalendarModal;