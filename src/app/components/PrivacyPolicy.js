import { Container, Row, Col, Button, Form, InputGroup, Image, Card } from "react-bootstrap";
// import "./services.css";
import { Link, useNavigate } from "react-router-dom";
import OurClients from "../OurClients/OurClients";
import MyNavbar from "../Navbar/MyNavbar";
import BgImage from "../../assets/Images/AllServices/bg-image.png"
import Footer from "../AllServices/Footer";
import BannerBgImage from "../../assets/Images/servicesImages/services-bg.png"
import VideoImage from "../../assets/Images/PrivacyPolicy/privacypolicy.jpg"


// Reusable components
const HeroSection = () => {
    // Get the hero content for the active service or use default

    return (
        <div
            className="hero-section"
            style={{
                backgroundImage: `url(${BannerBgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "650px",
                position: "relative",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            ></div>

            <Container className="h-100">
                <Row className="h-100 align-items-center">
                    {/* Text Content Column - Fixed height container */}
                    <Col lg={6} className="text-white py-5">
                        <div
                            className="hero-content"
                            style={{
                                minHeight: "400px", // Fixed height for content area
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <p className="mb-2">
                                <Link to="/" className="text-white text-decoration-none">
                                    Home
                                </Link>{" "}
                                /{" "}
                                <Link className="text-white text-decoration-none">
                                    Privacy Policy
                                </Link>
                            </p>

                            {/* Title with fixed space */}
                            <div style={{ minHeight: "80px" }}>
                                <h1 className="fw-bold mb-0" style={{ fontSize: "2.5rem" }}>
                                    Privacy Policy
                                </h1>
                            </div>

                            {/* Subtitle with fixed space (even when empty) */}
                            <div style={{ margin: "10px 0" }}>
                                This Privacy Policy explains how we handle your personal data, ensuring transparency and protection in accordance with applicable laws.
                            </div>


                            {/* Buttons - fixed position at bottom */}
                            <div className="d-flex flex-wrap gap-3 mt-5">
                                <span
                                    className="d-inline-flex both-buttons px-4 py-2 mb-3"
                                    style={{
                                        backgroundColor: "#CAD3DB60",
                                        borderRadius: '40px',
                                        border: '1px solid rgba(255, 255, 255, 0.63)',
                                        // minWidth: '180px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        cursor: 'pointer'
                                    }}

                                >
                                    Get a Quote
                                </span>
                                <span
                                    className="d-inline-flex both-buttons px-4 py-2 mb-3"
                                    style={{
                                        backgroundColor: "#CAD3DB60",
                                        borderRadius: '40px',
                                        border: '1px solid rgba(255, 255, 255, 0.63)',
                                        // minWidth: '180px',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        cursor: 'pointer'
                                    }}

                                >
                                    Schedule a Call
                                </span>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} lg={6} className="mt-5">
                        <div className="hero-image position-relative">
                            <div className="image-container rounded-4 overflow-hidden">
                                {/* YouTube iframe with autoplay */}
                                <div style={{ position: "relative", paddingBottom: "66.67%", height: 0, overflow: "hidden" }}>
                                    <img
                                        // width="650"
                                        // height="450"
                                        style={{ width: "100%" }}
                                        // src="https://videocdn.cdnpk.net/videos/710e0d64-07cc-4838-927c-a5a0d5543991/horizontal/previews/clear/large.mp4?token=exp=1743513023~hmac=d73dce562efb1175c5b8a840447957265867647044e6213c2c4b632f098371e6"
                                        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        // allowFullScreen
                                        // style={{ borderRadius: "12px" }}
                                        src={VideoImage}
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const MiddleSection = ({ services, isFirstSection }) => {
    return (
        <Container className="my-5">
            <div style={{ fontSize: "16px", color: "#737791" }}>
                At Shakti Enterprise we are committed to protecting to your data and privacy. So we have published this data protection guide to ensure that you are fully aware of how and why we collect information from you, to whom such information is used and what your rights are.

            </div>

            <div className="fw-bold text-justify mt-4" style={{ fontSize: "18px", color: "#F5454E" }}>What information do we collect and how do we obtain it?
            </div>
            <div className="mt-3 text-justify" style={{ fontSize: "16px", color: "#737791" }}>
                <ul style={{ paddingLeft: "1.2rem" }}>
                    <li>We receive information when you complete any of the forms on our website.</li>
                    <li>To complete your request, we need to know your name, email address, telephone number, and country of residence.</li>
                </ul>
            </div>



            <div className="fw-bold text-justify mt-4" style={{ fontSize: "18px", color: "#F5454E" }}>How do we use your information? </div>
            <div className="mt-2 text-justify" style={{ fontSize: "16px", color: "#737791" }}>
                <div style={{ fontSize: "16px", color: "#737791" }}>
                    We may use your information as follows :-
                </div>
                <ul style={{ paddingLeft: "1.2rem" }} className="mt-1">
                    <li>To produce your quotation,Invoices and online payment
                    </li>
                    <li>To disclose information about you to any relevant regulator if they require it or to anyone else, if we have a legal duty to do so.
                    </li>
                    <li>We may monitor or record telephone conversations with you to ensure consistent service levels, to prevent or detect fraud and for training purposes.
                    </li>
                    <li>Monitor customer traffic patterns and site usage to help us develop the design and layout of the site.
                    </li>
                    <li>We may occasionally notify you about enhancements to our services such as; functionality changes to the website, new services and special features and offers.
                    </li>
                    <li>The information we hold about you may be used to analyse your browsing preferences as part of our marketing programme. This may help us to select and tailor products, services or promotions we think you will be interested in.
                    </li>

                </ul>
            </div>


            <div className="fw-bold text-justify mt-4" style={{ fontSize: "18px", color: "#F5454E" }}>How do we protect your information?
            </div>
            <div className="mt-2 text-justify" style={{ fontSize: "16px", color: "#737791" }}>
                <div style={{ fontSize: "16px", color: "#737791" }}>
                    We protect your information in the following ways :-
                </div>
                <ul style={{ paddingLeft: "1.2rem" }} className="mt-1">
                    <li>We will not request information which is excessive for our purposes.
                    </li>
                    <li>Try, with your assistance, to keep any information we hold about you up to date and accurate
                    </li>
                    <li>Delete any information which we hold about you which is no longer relevant.
                    </li>
                    <li>Protect your data against unauthorised use. We follow strict security procedures in the storage and disclosure of information which you have given to us, to prevent unauthorised access.
                    </li>
                </ul>
            </div>


            <div className="fw-bold text-justify mt-4" style={{ fontSize: "18px", color: "#F5454E" }}>Receipt of Information </div>
            <div style={{ fontSize: "16px", color: "#737791" }}>
                If you do not want to continue to be contacted by Shakti Enterprise, please write to:

            </div>
            <div className="mt-2 text-justify" style={{ fontSize: "16px", color: "#737791" }}>
                <div style={{ fontSize: "16px", color: "#000", fontWeight: "500" }}>
                    Shakti Enterprise
                </div>
                <div style={{ fontSize: "16px", color: "#737791" }}>
                    506, Reena Complex, 5th Floor,
                </div>
                <div style={{ fontSize: "16px", color: "#737791" }}>
                    Ramdev Nagar Road, Vidyavihar (W)
                </div>
                <div style={{ fontSize: "16px", color: "#737791" }}>
                    Mumbai-400 086, India.
                </div>
                <div style={{ fontSize: "16px", color: "#737791" }}>
                    You may continue to receive communications to you for a short period of time while your suppression is being processed. You have the right to see personal information which is held about you or your company upon written request.
                </div>
            </div>


            <div className="fw-bold text-justify mt-4" style={{ fontSize: "18px", color: "#F5454E" }}>What about “cookies”?
            </div>
            <div className="mt-2 text-justify" style={{ fontSize: "16px", color: "#737791" }}>
                <ul style={{ paddingLeft: "1.2rem" }} className="mt-1">
                    <li>Cookies allow us to understand who has seen which pages and advertisements, to determine how frequently particular pages are visited and to determine the most popular areas of our website.
                    </li>
                    <li>Cookies also allow us to make our website more user friendly. We use cookies so that we can give you a better experience when you return to our website.
                    </li>
                </ul>
            </div>

            <div className="fw-bold text-justify mt-4" style={{ fontSize: "18px", color: "#F5454E" }}>Your Consent
            </div>
            <div className="mt-2 text-justify" style={{ fontSize: "16px", color: "#737791" }}>
                <div style={{ fontSize: "16px", color: "#737791" }}>
                    By completing any of our online forms, you are consenting to the collection, processing and use of this information by Shakti Enterprise.

                </div>

            </div>

        </Container>
    );
};
export default function PrivacyPolicy() {

    return (
        <div className="language-services-page" style={{
            backgroundImage: `url(${BgImage})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "repeat"
        }} >
            <MyNavbar />
            <HeroSection />
            <MiddleSection />
            <OurClients />
            <Footer />
        </div>
    );
}