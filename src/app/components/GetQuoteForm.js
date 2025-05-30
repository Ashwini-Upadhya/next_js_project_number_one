import React, { useState } from 'react'
import { Alert, Button, Card, Col, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import axios from 'axios';

const GetQuoteForm = () => {

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

        axios.post('https://api.adroit.catalog.radixforce.com/send_mail/', formDataToSend, {
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
        <div >
            <Card.Title>Get Quote</Card.Title>
            <Card className="quote-form mt-3 shadow-sm ">
                <Card.Body>
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
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName" className="mb-2">
                            <Form.Label className='input-label-text' >Full Name / Company Name*</Form.Label>
                            <Form.Control value={formData.fullName} name="fullName"
                                onChange={handleChange}
                                isInvalid={!!errors.fullName}
                                type="text" placeholder="Your Full Name / Company Name" className='input-text py-2' />
                            <Form.Control.Feedback type="invalid">
                                {errors.fullName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-2">
                            <Form.Label className='input-label-text'>Email Address*</Form.Label>
                            <Form.Control name="email" value={formData.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                                type="email" placeholder="Your Email Address" className='input-text py-2' />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formPhone" className="mb-2">
                            <Form.Label className='input-label-text'>Phone/Cell*</Form.Label>
                            <Form.Control name="phone" value={formData.phone}
                                onChange={handleChange} type="tel" placeholder="Your Phone/Cell" className='input-text py-2' />

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
                                <option>Industries Served</option>
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

                        <Form.Group controlId="formMessage" className="mb-2">
                            <Form.Label className='input-label-text'>Message</Form.Label>
                            <Form.Control name="message"
                                value={formData.message}
                                onChange={handleChange}
                                as="textarea" rows={3} placeholder="Your Message" className='rounded input-text py-2' />

                        </Form.Group>

                        <Form.Group controlId="formAttachment" className="mb-4">
                            <Form.Label className='input-label-text' >Attachment (Optional)</Form.Label>
                            <Form.Control onChange={handleChange} name="document"
                                isInvalid={!!errors.document} type="file" className='input-text py-2' />
                            <Form.Control.Feedback type="invalid">
                                {errors.document}
                            </Form.Control.Feedback>
                        </Form.Group>

                        {/* Newsletter checkbox and text */}
                        {/* <div className='d-flex align-items-center mt-3'>
                            <input
                                type="checkbox"
                                id="newsletter"
                                className='me-2'
                                style={{ accentColor: "#F5454E" }}
                            />
                            <div style={{ fontSize: "10px", color: "#737791" }}>
                                Subscribe To Our Newsletter For Best Offers And Discounts.
                            </div>
                        </div> */}
                        <Form.Group className="mb-3">
                            <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>Captcha<span className="text-danger">*</span></Form.Label>
                            <div className="d-flex align-items-center mb-2" style={{ fontSize: "20px", fontWeight: "bold", letterSpacing: "2px", backgroundColor: "#fff", padding: "5px 20px", borderRadius: "10px", width: "fit-content" }}>
                                {captcha}
                            </div>
                            <Form.Control
                                type="text"
                                placeholder="Enter the text shown above"
                                className="py-2 rounded-pill"
                                value={captchaInput}
                                onChange={(e) => setCaptchaInput(e.target.value)}
                                isInvalid={!!captchaError}
                                style={{ fontSize: "14px" }}
                            />
                            <Form.Control.Feedback type="invalid">
                                {captchaError}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className="d-flex justify-content-center">
                            <Button
                                variant="light"
                                className="px-4 py-1 rounded-pill custom-hover-btn"
                                type="submit"
                                disabled={isSubmitting}
                                style={{ fontSize: "14px" }}
                            >
                                {isSubmitting ? 'Sending...' : 'Submit'}
                            </Button>
                        </div>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GetQuoteForm