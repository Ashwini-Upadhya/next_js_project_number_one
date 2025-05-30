import { Container, Row, Col, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerBgImage from "../../assets/Images/Contact/background-img.png"
import VideoImage from "../../assets/Images/Contact/Contact-us.png"
import MyNavbar from "../Navbar/MyNavbar";
import Footer from "../AllServices/Footer";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import Quote from "../SchaduleAConsultation/Quote";
import ShaduleAConsultation from "../SchaduleAConsultation/SchaduleAConsultation";
import OurClients from "../OurClients/OurClients";

const HeroSection = () => {
    const [showQuoteModal, setShowQuoteModal] = useState(false);
    const [showScheduleModal, setShowScheduleModal] = useState(false);

    // Get the hero content for the active service or use default
    return (
        <div
            className="hero-section"
            style={{
                backgroundImage: `url(${BannerBgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "550px",
                // position: "relative",
            }}
        >


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
                                <Link to="/Services" className="text-white text-decoration-none">
                                    Terms & Conditions
                                </Link>
                            </p>

                            {/* Title with fixed space */}
                            <div style={{ minHeight: "80px" }}>
                                <h1 className="fw-bold mb-0" style={{ fontSize: "2.5rem" }}>
                                    Terms & Conditions
                                </h1>
                            </div>

                            {/* Subtitle with fixed space (even when empty) */}
                            <div style={{ margin: "10px 0" }}>
                                Please read these Terms & Conditions carefully before using our services. By accessing or using any part of our platform, you agree to be bound by these terms.
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
                                    }} onClick={() => setShowQuoteModal(true)}>
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
                                    onClick={() => setShowScheduleModal(true)}
                                >
                                    Schedule a Call
                                </span>
                            </div>
                        </div>

                        {/* Quote Modal */}
                        <Modal
                            show={showQuoteModal}
                            onHide={() => setShowQuoteModal(false)}
                            size="xl"
                            centered>
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
                    </Col>

                    <Col xs={12} lg={6} className="mt-5">
                        <div className="hero-image position-relative">
                            <div className="image-container rounded-4 overflow-hidden">
                                {/* YouTube iframe with autoplay */}
                                <div style={{ position: "relative", paddingBottom: "66.67%", height: 0, overflow: "hidden" }}>
                                    <img
                                        style={{ width: "100%" }}
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

const MiddleSection = () => {
    return (
        <Container className="py-5">
            <Row>

                <div className="fw-bold" style={{ fontSize: "22px", color: "#F5454E" }}>Terms & Conditions </div>

                <div className="fw-bold mt-4" style={{ fontSize: "18px", color: "#F5454E" }}>Definitions</div>

                <div style={{ fontSize: "16px", color: "#737791" }} className="mb-3 mt-2">
                    Please take your time to read these Terms and Conditions carefully as they form the basis of your contract with Shakti Enterprise. (SE). It is implicit that you have accepted the Terms and Conditions as laid out below when you submit your order to SE. Client means the individual or entity that contract with SE. Work means the project assigned to SE.

                </div>


                <div className="fw-bold" style={{ fontSize: "18px", color: "#F5454E" }}>1. GENERAL</div>
                <div style={{ fontSize: "16px", color: "#737791" }} className="mb-3 mt-2">
                    1.1 These general terms and conditions apply to all legal relationships between Shakti Enterprise. (SE) and the Client, and supersede any terms and conditions referred to, offered or relied on by the Client, unless SE specifically approves the application of such terms in writing.

                    <br /><br />
                    1.2 I hereby authorize and give consent to Shakti Enterprise to send me, either through itself or through any third party service provider,from time to time various information / alerts / SMS / other messages or calls or commercial communication, and other services on the aforesaid listed telephone numbers, whether these numbers are registered with National Do Not Call Registry / listed in National Customer Preference Register or not.

                </div>

                <div className="fw-bold" style={{ fontSize: "18px", color: "#F5454E" }}>2. QUOTATIONS, CONCLUSION OF CONTRACTS</div>
                <div style={{ fontSize: "16px", color: "#737791" }} className="mb-3 mt-2">
                    2.1 Quotations and estimates issued by SE are free of obligation.

                    <br /><br />
                    2.2 SE may revoke quoted prices or terms of delivery if it has not had the opportunity to assess the entire project prior to issuing the quotation. The Client's oral or written acceptance of the quotation submitted by SE or, if no quotation was submitted, written confirmation by SE of an order placed by the Client shall constitute a contract.
                    <br /><br />
                    2.3 SE may consider as a Client any person or entity that has placed an order with SE, unless said person or entity has explicitly stated that they are acting on behalf and at the expense of a third party, whose name and address they shall provide SE on placing the order.
                    <br /><br />
                    2.4 Agreements with and promises made by representatives or personnel of SE shall not be binding unless confirmed by SE in writing.
                    <br /><br />
                    2.5 Any reasonable doubt on the part of SE about the Client's ability to pay shall entitle SE to require sufficient security from the Client before executing the order.
                </div>

                <div className="fw-bold" style={{ fontSize: "18px", color: "#F5454E" }}>3. CHANGES TO OR CANCELLATION OF ORDERS</div>
                <div style={{ fontSize: "16px", color: "#737791" }} className="mb-3 mt-2">
                    3.1 Any major changes made by the Client to an order after the contract has been concluded shall entitle SE to either modify the quoted price and/or term of delivery or refuse to execute the order. In the latter case, the Client shall pay for the work already performed.

                    <br /><br />
                    3.2 Cancellation of an order by the Client shall entitle SE to claim payment of any work already performed for that order as well as compensation for hours spent on research for the remainder of the order. SE shall make the work performed available to the Client at the latter's request, but shall accept no responsibility for its quality.

                    <br /><br />
                    3.3 If SE has reserved time for the execution of the order, it may charge the Client 50% of the fee for the non-executed part of the work.

                </div>

                <div className="fw-bold" style={{ fontSize: "18px", color: "#F5454E" }}>4. EXECUTION OF ORDERS, CONFIDENTIALITY</div>
                <div style={{ fontSize: "16px", color: "#737791" }} className="mb-3 mt-2">
                    4.1 SE undertakes to carry out orders to the best of its ability, bringing to bear sufficient professional know-how to meet the purpose indicated by the Client.

                    <br /><br />
                    4.2 SE shall keep any information provided by the Client strictly confidential and require its employees to do the same. However, SE shall not be liable for breaches of confidentiality by its employees if it can sufficiently demonstrate that it was unable to prevent the same.

                    <br /><br />
                    4.3 Unless explicitly agreed otherwise, SE shall be entitled to hire others to execute the order (in full or in part), without prejudice to SE's responsibility for the confidential treatment and proper execution of the same. SE shall require any third party involved in the execution of an order to keep confidential anything they may learn in the course of their duties.
                    <br /><br />
                    4.4 The Client shall honor any request for information by SE about the requirement of the project as far as possible, as well as requests for reference documentation and lists of terms if such are available. Such information and documentation shall be dispatched at the Client's expense and risk.
                </div>

                <div className="fw-bold" style={{ fontSize: "18px", color: "#F5454E" }}>5. TERM AND DATE OF DELIVERY</div>
                <div style={{ fontSize: "16px", color: "#737791" }} className="mb-3 mt-2">
                    5.1 Delivery dates are provisional, unless an explicit written agreement stipulates otherwise. SE shall notify the Client immediately if it perceives that it will be unable to meet an agreed delivery date.
                    <br /><br />
                    5.2 If a fixed delivery date is specifically provided for in writing and SE fails to meet it for reasons other than matters beyond its control, and if the Client cannot reasonably be expected to brook any delay, the Client shall be entitled to cancel the contract. In such cases, however, SE shall not be liable to pay any damages whatsoever.
                    <br /><br />
                    5.3 Delivery shall be deemed to have taken place the moment the work is sent by post, fax, telex, courier, modem, the Internet, etc.

                    <br /><br />
                    5.4 Data sent by electronic mail shall be deemed to have been delivered as soon as the medium has confirmed sending the message.

                    <br /><br />
                    5.5 The Client shall help SE execute the order by doing whatever may reasonably be necessary or conducive to its timely execution.

                    <br /><br />
                    5.6 The Client shall do everything in its power to facilitate delivery of the service produced by SE under the contract. Any refusal to accept SE's service shall constitute default on the part of the Client, and the provisions of sub-clause 6.5 shall apply accordingly, even if no explicit request for acceptance has been made.
                </div>


                <div className="fw-bold" style={{ fontSize: "18px", color: "#F5454E" }}>6. PRICES, PAYMENT AND REFUND</div>
                <div style={{ fontSize: "16px", color: "#737791" }} className="mb-3 mt-2">
                    6.1 Quoted prices shall apply only to services conforming to agreed specifications.

                    <br /><br />
                    6.2 SE shall be entitled to raise the agreed price if it is forced to perform more work or incur more costs than might reasonably have been foreseen on conclusion of the contract as a result of having to work with very difficult or unclear specifications, for example, or faulty files or computer programs supplied by the Client. This list of examples is not exhaustive.

                    <br /><br />
                    6.3 Payment for services supplied under the contract are due prior to commencement of work or, if agreed by SE, in staged payments for bulk material (or within any other term fixed by SE in writing). Payment shall be net and in full - without any discount, set-off or suspension - in the currency invoiced. If payment is not made by the due date, the Client shall be in default - immediately and without notice of default being required - as well as owing the statutory interest on the invoice amount from the due date until full settlement.


                    <br /><br />
                    6.4 In case of rejection from USCIS or any other agency/university, SE will refund 100% money to the customer. Refund is subject to written proof from the concerned agencies or university.
                </div>



                <div className="fw-bold" style={{ fontSize: "18px", color: "#F5454E" }}>7. COMPLAINTS AND DISPUTES</div>
                <div style={{ fontSize: "16px", color: "#737791" }} className="mb-3 mt-2">
                    7.1 If the Client has any complaints about the service supplied by SE, it shall submit them in writing as soon as possible, yet never later than 10 days after receiving the said service. Lodging a complaint shall not release the Client from its obligation to pay.
                    <br /><br />
                    7.2 If no complaints are made within the term fixed in sub-clause 9.1 above, the service shall be deemed to have been fully accepted, and SE shall only act on complaints if it sees fit to do so. SE's changing any part of the project including translated or edited text at the Client's request shall in no way constitute an acknowledgement on the part of SE of having supplied an inferior service.
                    <br /><br />
                    7.3 In the case of a valid complaint, SE shall be granted a reasonable period of time to improve or substitute the service. If SE cannot reasonably be expected to perform the required improvements or substitution, it may grant the Client a discount.
                    <br /><br />
                    7.4 The Client's right to complain shall lapse if the Client has itself edited or has hired others to edit the part or parts of the service concerned in the complaint, regardless of whether it has subsequently supplied the service to a third party or not.
                </div>

                <div className="fw-bold" style={{ fontSize: "18px", color: "#F5454E" }}>8. LIABILITY, INDEMNITY</div>
                <div style={{ fontSize: "16px", color: "#737791" }} className="mb-3 mt-2">
                    8.1 SE shall not be liable for any damage whatsoever in respect of any inconsistency or ambiguity of service rendered. SE shall under no circumstance be liable for other forms of damage, such as consequential damage, loss of profits or losses due to delays. SE's liability shall never exceed the invoice amount of the project in question.

                    <br /><br />
                    8.2 Ambiguity of the content provided by the client shall release SE from any liability whatsoever.

                    <br /><br />
                    8.3 The decision whether the use of a project (including text to be translated/edited or the translation/edited version thereof) produced by SE entails any risk of injury or losses due to injury shall be entirely at the Client's expense and risk.

                    <br /><br />
                    8.4 No liability whatsoever shall be incurred by SE in respect of damage to or loss of documents, data or data carriers provided by the Client to facilitate the contract's execution. Nor shall any liability be incurred by SE in respect of costs and/or damage incurred as a result of (a) the use of information technology and telecommunications media, (b) transport or dispatch of data or data carriers, or (c) the presence of computer viruses in any files or data carriers supplied by SE.
                    <br /><br />
                    8.5 SE's liability shall never exceed the value of the quotation per event.
                    <br /><br />
                    8.6 The Client shall indemnify SE against any claims by third parties deriving from use of the service, barring any liability incurred by SE by virtue of this clause.
                </div>

                <div className="fw-bold" style={{ fontSize: "18px", color: "#F5454E" }}>9. CANCELLATION & FORCE MAJEURE
                </div>
                <div style={{ fontSize: "16px", color: "#737791" }} className="mb-3 mt-2">
                    9.1 Any failure on the part of the Client to meet its obligations, including bankruptcy, a moratorium or liquidation in respect of the Client's company, etc; shall entitle SE to either cancel the contract (in part or in full) or postpone its execution without any claim to damages on the part of the Client. In such cases, SE shall also be entitled to demand immediate payment.
                    <br /><br />
                    9.2 If SE should prove unable to meet its obligations due to circumstances beyond its reasonable control, it shall be entitled to cancel the contract without being liable to pay damages. Such circumstances include, but are not limited to: fire, accidents, illness, strikes, riots, war, transport restrictions and delays, government measures, disruption of the services of Internet providers, and other instances of force majeure.
                    <br /><br />
                    9.3 If SE is compelled by force majeure to discontinue execution of the contract, the Client shall still pay for any work performed up until that moment as well as any costs and expenses incurred.
                </div>

                <div className="fw-bold" style={{ fontSize: "18px", color: "#F5454E" }}>10. COPYRIGHT
                </div>
                <div style={{ fontSize: "16px", color: "#737791" }} className="mb-3 mt-2">
                    10.1 Barring explicit, written agreement to the contrary, the copyright to any work or material produced by SE shall rest with the same.
                    <br /><br />
                    10.2 The Client shall indemnify SE against any and all claims by third parties in respect of alleged violation of property rights, patent rights, copyrights or other intellectual property rights relative to the execution of the contract.
                </div>

                <div className="fw-bold" style={{ fontSize: "18px", color: "#F5454E" }}>11. GOVERNING LAW</div>
                <div style={{ fontSize: "16px", color: "#737791" }} className="mb-3 mt-2">
                    11.1 All legal disputes are subject to the jurisdiction of Mumbai , India only

                    <br /><br />  </div>
            </Row>
        </Container>
    );
};
export default function TermsAndConditions() {

    return (
        <div className="language-services-page">
            <MyNavbar />
            <HeroSection />
            <MiddleSection />
            <OurClients />
            <Footer />
        </div>
    );
}