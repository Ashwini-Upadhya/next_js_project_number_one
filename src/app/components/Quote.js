// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
// import { FaCloudUploadAlt } from "react-icons/fa";
// import Ai from '../../assets/Images/ScheduleAConsultation/Quote/ai.svg';
// import File from '../../assets/Images/ScheduleAConsultation/Quote/file.svg';
// import Tr from '../../assets/Images/ScheduleAConsultation/Quote/tr.svg';

// const Quote = () => {
//     const [fileName, setFileName] = useState("");

//     const handleFileUpload = () => {
//         document.getElementById('fileInput').click();
//     };

//     const handleFileChange = (e) => {
//         if (e.target.files.length > 0) {
//             setFileName(e.target.files[0].name);
//         }
//     };

//     return (
//         <Container className="mt-5">
//             <Row className="mt-0 d-flex justify-content-center">
//                 <Col md={6} className="p-4 border shadow-md" style={{ backgroundColor: "#F5454E1A", borderTopLeftRadius: '40px', borderBottomLeftRadius: '40px' }}>
//                     <p className="fw-bold mx-4" style={{ fontSize: "14px", color: '#737791' }}>Get a Quote</p>
//                     <h3 className="fw-bold fs-4 mt-4 mx-4 mb-5 m-5">Get Quotes for <br /> Document Translation in <br /> <span style={{ color: '#F5454E' }}>3 Steps</span></h3>
// <Row className="mx-4 mb-5 text-center">
//     <Col>
//         <a href="">
//             <img src={Tr} alt="Translation" /></a>
//         <p className="mt-2">Select Languages</p>
//     </Col>
//     <Col>
//         <a href="">
//             <img src={Ai} alt="industry" /></a>
//         <p className="mt-2">Select industry</p>
//     </Col>
//     <Col>
//         <a href="">
//             <img src={File} alt="Translation" /></a>
//         <p className="mt-2">upload document</p>
//     </Col>
// </Row>
//                     <p style={{ fontSize: '12px' }} className="text-muted mt-5">By sharing your personal data, you agree to our <a href="#">Privacy Policy</a>.</p>
//                 </Col>

//                 <Col md={6} className="p-4 border shadow-md" style={{ borderTopRightRadius: '40px', borderBottomRightRadius: '40px' }}>
//                     <Form className="mx-">
//                         <Form.Group className="mb-3" controlId="formGroupName">
//                             <Form.Label className="fw-bold">Full name*</Form.Label>
//                             <Form.Control type="text" placeholder="Your Full Name" className="p-3" style={{ borderRadius: '40px' }} />
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="formGroupLanguage">
//                             <Form.Label className="fw-bold">Select Languages*</Form.Label>
//                             <Form.Select className="p-3" style={{ borderRadius: '40px' }}>
//                                 <option>Select Languages</option>
//                                 {['English', 'Hindi', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Russian', 'Arabic', 'Italian', 'Portuguese', 'Bengali'].map((lang, index) => (
//                                     <option key={index} value={lang.toLowerCase()}>{lang}</option>
//                                 ))}
//                             </Form.Select>
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="formGroupIndustry">
//                             <Form.Label className="fw-bold">Select Industry*</Form.Label>
//                             <Form.Select className="p-3" style={{ borderRadius: '40px' }}>
//                                 <option>Select Industry</option>
//                                 {['Information Technology', 'Finance', 'Healthcare', 'Education', 'Retail', 'Manufacturing', 'Real Estate', 'Transportation', 'Hospitality', 'Media & Entertainment', 'Telecommunications', 'Agriculture'].map((industry, index) => (
//                                     <option key={index} value={industry.toLowerCase()}>{industry}</option>
//                                 ))}
//                             </Form.Select>
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="formGroupDocument">
//                             <Form.Label className="fw-bold">Upload Documents*</Form.Label>
//                             <InputGroup>
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Upload your document"
//                                     readOnly
//                                     value={fileName}
//                                     className="p-3"
//                                     style={{ borderRadius: '40px' }}
//                                 />
//                                 <input
//                                     type="file"
//                                     id="fileInput"
//                                     style={{ display: 'none' }}
//                                     onChange={handleFileChange}
//                                 />
//                                 <InputGroup.Text onClick={handleFileUpload} style={{ cursor: 'pointer', border: 'none', background: 'transparent' }}>
//                                     <FaCloudUploadAlt />
//                                 </InputGroup.Text>
//                             </InputGroup>
//                         </Form.Group>

//                         <div className="d-flex justify-content-center">
//                             <Button style={{ borderRadius: '40px' }} className="text-center px-5 mt-3 submitbutton" variant="outline-secondary">Submit</Button>
//                         </div>
//                     </Form>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default Quote;



// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import Ai from '../../assets/Images/ScheduleAConsultation/Quote/ai.svg';
// import File from '../../assets/Images/ScheduleAConsultation/Quote/file.svg';
// import Tr from '../../assets/Images/ScheduleAConsultation/Quote/tr.svg';

// const Quote = () => {
//     return (
//         <Container className="mt-5">
//             <Row className="d-flex justify-content-center shadow" style={{ borderRadius: '25px', overflow: 'hidden' }}>
//                 {/* Left Section */}
//                 <Col md={6} className="p-5" style={{ background: '#F9F5F5' }}>
//                     <h6 style={{ color: "#737791" }}>Get a Quote</h6>
//                     <h3 className="fw-bold mt-2" style={{ lineHeight: '1.2' }}>
//                         Get Quotes For <br /> Document Translation In
//                     </h3>
//                     <h3 className="fw-bold" style={{ color: "#F5454E" }}>3 Steps</h3>

//                     <Row className="mt-4 text-center">
//                         <Col>
//                             <img src={Tr} alt="Select Languages" style={{ height: "70px", width: "70px" }} />
//                             <p className="mt-2 fw-semibold" style={{ color: "#737791" }}>Select Languages</p>
//                         </Col>
//                         <Col>
//                             <img src={Ai} alt="Select Industry" style={{ height: "70px", width: "70px" }} />
//                             <p className="mt-2 fw-semibold" style={{ color: "#737791" }}>Select Industry</p>
//                         </Col>
//                         <Col>
//                             <img src={File} alt="Upload Documents" style={{ height: "70px", width: "70px" }} />
//                             <p className="mt-2 fw-semibold" style={{ color: "#737791" }}>Upload Documents</p>
//                         </Col>
//                     </Row>

//                     <p className="text-center mt-4" style={{ color: "#737791", fontSize: '13px' }}>
//                         By Sharing Your Personal Data, You Agree To Our <span style={{ color: "#F5454E", cursor: 'pointer' }}>Privacy Policy</span>.
//                     </p>
//                 </Col>

//                 {/* Right Section */}
// <Col md={6} className="p-3 bg-white">
// <Form>
//     <Form.Group className="mb-3">
//         <Form.Label>Full Name<span style={{ color: "red" }}>*</span></Form.Label>
//         <Form.Control type="text" placeholder="Your Full Name" style={{ borderRadius: "50px" }} className="py-2" />
//     </Form.Group>

//     <Form.Group className="mb-3">
//         <Form.Label>Select Languages<span style={{ color: "red" }}>*</span></Form.Label>
//         <Form.Select style={{ borderRadius: "50px" }} className="py-2">
//             <option>Select Languages</option>
//         </Form.Select>
//     </Form.Group>

//     <Form.Group className="mb-3">
//         <Form.Label>Select Industry<span style={{ color: "red" }}>*</span></Form.Label>
//         <Form.Select style={{ borderRadius: "50px" }} className="py-2">
//             <option>Select Industry</option>
//         </Form.Select>
//     </Form.Group>

//     <Form.Group className="mb-3">
//         <Form.Label>Upload Documents<span style={{ color: "red" }}>*</span></Form.Label>
//         <Form.Control type="file" style={{ borderRadius: "50px" }} className="py-2" />
//     </Form.Group>

//     <Button variant="light" className="w-100 fw-semibold" style={{ border: '1px solid #dcdcdc', borderRadius: '30px', padding: '10px 0' }}>
//         Submit
//     </Button>
// </Form>
// </Col>
//             </Row>
//         </Container>
//     );
// }

// export default Quote;


import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Ai from '../../assets/Images/ScheduleAConsultation/Quote/ai.svg';
import File from '../../assets/Images/ScheduleAConsultation/Quote/file.svg';
import Tr from '../../assets/Images/ScheduleAConsultation/Quote/tr.svg';
import "./form.css";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import axios from 'axios';

const Quote = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        languages: '',
        industry: '',
        document: null,
        email: '',
        message: '',
        phone: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [captchaInput, setCaptchaInput] = useState('');
    const [captchaError, setCaptchaError] = useState('');

    function generateCaptcha() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.languages) newErrors.languages = 'Please select language';
        if (!formData.industry) newErrors.industry = 'Please select industry';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (captchaInput.trim() !== captcha) {
            setCaptchaError('Captcha does not match');
        } else {
            setCaptchaError('');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0 && captchaInput.trim() === captcha;
    };


    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (!validateForm()) {
    //         return;
    //     }

    //     setIsSubmitting(true);

    //     try {
    //         // Prepare email content
    //         const emailContent = `
    //             New Translation Quote Request:

    //             Name: ${formData.fullName}
    //             Email: ${formData.email}

    //             Languages: ${formData.languages}
    //             Industry: ${formData.industry}

    //             Message: ${formData.message || 'No additional message'}

    //             Document: ${formData.document ? formData.document.name : 'No document uploaded'}
    //         `;

    //         // Send email using EmailJS (you'll need to set this up)
    //         await emailjs.send(
    //             'service_nf34bji',
    //             'template_h3gdsml',
    //             {
    //                 from_name: formData.fullName,
    //                 from_email: formData.email,
    //                 phone: formData.phone || 'Not provided',
    //                 languages: formData.languages,
    //                 industry: formData.industry,
    //                 message: formData.message || 'No additional message',
    //                 document: formData.document ? formData.document.name : 'No document uploaded',
    //             },
    //             'guP3mB_d0cSulTz10'
    //         );


    //         setSubmitStatus('success');
    //         setFormData({
    //             fullName: '',
    //             languages: '',
    //             industry: '',
    //             document: null,
    //             email: '',
    //             phone: '',
    //             message: ''
    //         });
    //     } catch (error) {
    //         console.error('Error sending email:', error);
    //         setSubmitStatus('error');
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };



    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Create FormData object
        const formDataToSend = new FormData();
        formDataToSend.append('email', formData.email);
        formDataToSend.append('name', formData.fullName);
        formDataToSend.append('preferred_languages', formData.languages);
        formDataToSend.append('industry_of_interest', formData.industry);
        formDataToSend.append('additional_message', formData.message);
        formDataToSend.append('company_name', 'Tech-Radix');
        formDataToSend.append('phone', formData.phone || '');

        // Append the file if it exists
        if (formData.document) {
            formDataToSend.append('uploaded_document', formData.document);
        }

        axios.post('https://api.shakti.radixforce.com/send_mail/', formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(response => {
                setSubmitStatus('success');
                setFormData({
                    fullName: '',
                    languages: '',
                    industry: '',
                    document: null,
                    email: '',
                    phone: '',
                    message: ''
                });
                setCaptcha(generateCaptcha());
                setCaptchaInput('');

            })
            .catch(error => {
                console.error('API Error:', error.response?.data || error.message);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };




    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={12} lg={12} className="d-flex flex-column flex-md-row shadow overflow-hidden p-0" style={{ backgroundColor: "#F5454E1A", borderRadius: "40px" }}>

                    {/* Left Section */}
                    <div className="w-100 w-md-50 p-4 d-flex flex-column justify-content-between" style={{ backgroundColor: "#F5454E1A" }}>
                        <div className="px-4">
                            <h6 style={{ color: "#737791" }}>Get a Quote</h6>
                            <h4 className="fw-bold">Get Quotes For</h4>
                            <h4 className="fw-bold">Document Translation In</h4>
                            <h4 className="fw-bold text-danger">3 Steps</h4>
                        </div>

                        <Row className="text-center mt-4">
                            <Col xs={4}>
                                <img src={Tr} alt="Translation" className="img-fluid mb-2" style={{ maxWidth: "80px" }} />
                                <p style={{ color: "#737791", fontSize: "14px", fontWeight: "600" }}>Select Languages</p>
                            </Col>
                            <Col xs={4}>
                                <img src={Ai} alt="Industry" className="img-fluid mb-2" style={{ maxWidth: "80px" }} />
                                <p style={{ color: "#737791", fontSize: "14px", fontWeight: "600" }}>Select Industry</p>
                            </Col>
                            <Col xs={4}>
                                <img src={File} alt="Upload" className="img-fluid mb-2" style={{ maxWidth: "80px" }} />
                                <p style={{ color: "#737791", fontSize: "14px", fontWeight: "600" }}>Upload document</p>
                            </Col>
                        </Row>

                        <p className="text-center mt-3" style={{ color: "#737791", fontSize: "0.9rem" }}>
                            By Sharing Your Personal Data, You Agree To Our <span style={{ color: "#F5454E", fontSize: "14px", cursor: "pointer" }} onClick={() => navigate("/privacypolicy")}>Privacy Policy</span>.
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="w-100 w-md-50 p-4 bg-white">
                        {submitStatus === 'success' && (
                            <Alert variant="success" onClose={() => setSubmitStatus(null)} dismissible>
                                Thank you! Your quote request has been sent successfully. We'll contact you soon.
                            </Alert>
                        )}
                        {submitStatus === 'error' && (
                            <Alert variant="danger" onClose={() => setSubmitStatus(null)} dismissible>
                                There was an error submitting your request. Please try again later.
                            </Alert>
                        )}

                        <Form onSubmit={handleSubmit} encType="multipart/form-data">
                            <Form.Group className="mb-3">
                                <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>Full Name / Company Name<span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    name="fullName"
                                    placeholder="Your Full Name"
                                    className="py-2 rounded-pill"
                                    style={{ fontSize: "14px" }}
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    isInvalid={!!errors.fullName}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.fullName}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>Email<span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="py-2 rounded-pill"
                                    style={{ fontSize: "14px" }}
                                    value={formData.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>Phone Number</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Phone Number"
                                    className="py-2 rounded-pill"
                                    style={{ fontSize: "14px" }}
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>Select Languages<span className="text-danger">*</span></Form.Label>
                                <Form.Select
                                    className="py-2 rounded-pill"
                                    style={{ fontSize: "14px" }}
                                    name="languages"
                                    value={formData.languages}
                                    onChange={handleChange}
                                    isInvalid={!!errors.languages}
                                >
                                    <option value="">Select Languages</option>
                                    <option>Chinese Translation</option>
                                    <option>Spanish Translation</option>
                                    <option>English Translation</option>
                                    <option>Hindi Translation</option>
                                    <option>Arabic Translation</option>
                                    <option>Portuguese Translation</option>
                                    <option>Bengali Translation</option>
                                    <option>Russian Translation</option>
                                    <option>Japanese Translation</option>
                                    <option>Punjabi Translation</option>
                                    <option>Hindi Translation</option>
                                    <option>Assamese Translation</option>
                                    <option>Bengali Translation</option>
                                    <option>Bhojpuri Translation</option>
                                    <option>Gujarati Translation</option>
                                    <option>Kannada Translation</option>
                                    <option>Malayalam Translation</option>
                                    <option>Marathi Translation</option>
                                    <option>Oriya Translation</option>
                                    <option>Punjabi Translation</option>
                                    <option>Tamil Translation</option>
                                    <option>Telugu Translation</option>
                                    <option>Urdu Translation</option>
                                    <option>Eastern European Languages</option>
                                    <option>Asian Languages</option>
                                    <option>American Language</option>
                                    <option>African Language</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.languages}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>Select Industry<span className="text-danger">*</span></Form.Label>
                                <Form.Select
                                    className="py-2 rounded-pill"
                                    style={{ fontSize: "14px" }}
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    isInvalid={!!errors.industry}
                                >
                                    <option value="">Select Industry</option>
                                    <option>Advertising &amp; Marketing</option>
                                    <option>Information Technology</option>
                                    <option>Manufacturing &amp; Engineering</option>
                                    <option>Medical and Healthcare</option>
                                    <option>Banking, Finance &amp; Insurance</option>
                                    <option>Travel &amp; Tourism</option>
                                    <option>E-Learning &amp; Training</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.industry}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>Upload Document <span>(Optional)</span></Form.Label>
                                <Form.Control
                                    type="file"
                                    className="py-2 rounded-pill"
                                    style={{ fontSize: "14px" }}
                                    name="document"
                                    onChange={handleChange}
                                    isInvalid={!!errors.document}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.document}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Any special requirements or details about your project"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{ fontSize: "14px", borderRadius: "20px" }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
                                    Captcha<span className="text-danger">*</span>
                                </Form.Label>

                                <div className="d-flex align-items-center gap-3 mb-2">
                                    <div
                                        style={{
                                            fontSize: "20px",
                                            fontWeight: "bold",
                                            letterSpacing: "2px",
                                            backgroundColor: "#f1f1f1",
                                            padding: "5px 30px",
                                            borderRadius: "6px",
                                            width: "fit-content",
                                        }}>{captcha}</div>

                                    <Form.Control
                                        type="text"
                                        placeholder="Enter captcha"
                                        className="py-2 rounded-pill"
                                        value={captchaInput}
                                        onChange={(e) => setCaptchaInput(e.target.value)}
                                        isInvalid={!!captchaError}
                                        style={{ fontSize: "14px" }}
                                    />
                                </div>

                                <Form.Control.Feedback type="invalid">
                                    {captchaError}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <div className="d-flex justify-content-center">
                                <Button
                                    variant="light"
                                    className="px-5 py-2 rounded-pill custom-hover-btn"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Submit'}
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Quote;
