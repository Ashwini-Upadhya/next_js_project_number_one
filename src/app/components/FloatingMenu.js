import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FloatingMenu.css";
import GmailIcon from "../../assets/Images/FloatingMenu/gmail.svg";
import CallIcon from "../../assets/Images/FloatingMenu/call-user.svg";
import LanguageIcon from "../../assets/Images/FloatingMenu/language-translation-svgrepo-com.svg";
import Calendra from "../../assets/Images/FloatingMenu/calendra.svg";
import AtIcon from "../../assets/Images/FloatingMenu/aticon.svg";
import { Modal } from "react-bootstrap";
import ShaduleAConsultation from "../SchaduleAConsultation/SchaduleAConsultation";

const FloatingMenu = () => {
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [showScheduleModal, setShowScheduleModal] = useState(false);

    const menuItems = [
        { icon: GmailIcon, label: "Free Inquiry" },
        { icon: CallIcon, label: "India +91 7066316633" },
        { icon: AtIcon, label: "shaktient@gmail.com" },
        { icon: Calendra, label: "Schedule a Call" },
        { icon: LanguageIcon, label: "Language Services" },
    ];

    const handleClick = (label) => {
        switch (label) {
            case "Free Inquiry":
                navigate("/about");
                break;
            case "shaktient@gmail.com":
                window.open("https://mail.google.com/mail/?view=cm&fs=1&to=shaktient@gmail.com", "_blank");
                break;
            case "Language Services":
                navigate("/langauges");
                break;
            case "Schedule a Call":
                setShowScheduleModal(true);
                break;
            default:
                break;
        }
    };

    return (
        <div className="floating-menu-container">
            <div style={styles.menu}>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(item.label)}
                        style={{
                            ...styles.menuItem,
                            width: hoveredIndex === index ? "250px" : "50px",
                            paddingRight: hoveredIndex === index ? "10px" : "",
                            justifyContent: hoveredIndex === index ? "flex-start" : "center",
                            paddingLeft: hoveredIndex === index ? "15px" : "0px",
                            backgroundColor: "#F5454E",
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img src={item.icon} alt={item.label} style={styles.icon} />
                        {hoveredIndex === index && <span style={styles.text}>{item.label}</span>}
                    </div>
                ))}
            </div>

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

const styles = {
    menu: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "10px",
    },
    menuItem: {
        backgroundColor: "#737791",
        border: "none",
        borderTopLeftRadius: "50px",
        borderBottomLeftRadius: "50px",
        minWidth: "50px",
        height: "50px",
        fontSize: "20px",
        cursor: "pointer",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        transition: "all 0.3s ease-in-out",
        overflow: "hidden",
        whiteSpace: "nowrap",
    },
    icon: {
        width: "30px",
        height: "20px",
    },
    text: {
        fontSize: "16px",
        color: "#fff",
    },
};

export default FloatingMenu;
