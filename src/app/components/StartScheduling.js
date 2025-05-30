// "use client"

// import { useState, useEffect } from "react"
// import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap"
// import Calendar from "react-calendar"
// import "react-calendar/dist/Calendar.css"
// import Shadule from "../../assets/Images/ScheduleAConsultation/shadule.svg"
// import Watch from "../../assets/Images/ScheduleAConsultation/watch.svg"
// import "./form.css"
// import { FaChevronLeft, FaChevronRight, FaCalendarAlt, FaPhone } from "react-icons/fa"
// import { RiTimeZoneLine } from "react-icons/ri"

// import { IoMdClose } from "react-icons/io"
// import { BsMicrosoftTeams } from "react-icons/bs"

// import MyNavbar from "../Navbar/MyNavbar"
// import OurClients from "../OurClients/OurClients"
// import FooterMenu from "../FooterMenu/FooterMenu"
// import Logo from "../../assets/Images/Navimages/Shakti-Logo.png"
// import { useNavigate } from "react-router-dom"

// const StartScheduling = () => {

//     const navigate = useNavigate()


//     const [date, setDate] = useState(new Date())
//     const [isDateSelected, setIsDateSelected] = useState(false)
//     const [timeStartIndex, setTimeStartIndex] = useState(0)
//     const [filteredTimeSlots, setFilteredTimeSlots] = useState([])
//     const [selectedTime, setSelectedTime] = useState(null)
//     const [showForm, setShowForm] = useState(false)
//     const [showGuestInput, setShowGuestInput] = useState(false)
//     const [guestEmail, setGuestEmail] = useState("")
//     const [guestEmails, setGuestEmails] = useState([])
//     const [selectedLocation, setSelectedLocation] = useState("Microsoft Teams")
//     const [phoneNumber, setPhoneNumber] = useState("")
//     const [showWarning, setShowWarning] = useState(false)
//     const [showSuccessModal, setShowSuccessModal] = useState(false)
//     const [showCalendarModal, setShowCalendarModal] = useState(false)
//     const [calendarUrls, setCalendarUrls] = useState({
//         google: "",
//         outlook: "",
//         apple: "",
//     })
//     const [selectedCalendarType, setSelectedCalendarType] = useState("")

//     const TIME_DISPLAY_LIMIT = 10

//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         company: "",
//         jobTitle: "",
//         serviceNeeded: [],
//         specificService: "",
//         numberOfEmployees: "",
//         helpDescription: "",
//     })

//     const TimeSlots = [
//         "10:00 AM",
//         "10:15 AM",
//         "10:30 AM",
//         "10:45 AM",
//         "11:00 AM",
//         "11:15 AM",
//         "11:30 AM",
//         "11:45 AM",
//         "12:00 PM",
//         "12:15 PM",
//         "12:30 PM",
//         "12:45 PM",
//         "1:00 PM",
//         "1:15 PM",
//         "1:30 PM",
//         "1:45 PM",
//         "2:00 PM",
//         "2:15 PM",
//         "2:30 PM",
//         "2:45 PM",
//         "3:00 PM",
//         "3:15 PM",
//         "3:30 PM",
//         "3:45 PM",
//         "4:00 PM",
//         "4:15 PM",
//         "4:30 PM",
//         "4:45 PM",
//         "5:00 PM",
//         "5:15 PM",
//         "5:30 PM",
//         "5:45 PM",
//     ]

//     useEffect(() => {
//         const savedEmail = localStorage.getItem("schedulingEmail")
//         const savedPhone = localStorage.getItem("schedulingPhone")

//         if (savedEmail && savedPhone) {
//             setFormData((prev) => ({
//                 ...prev,
//                 email: savedEmail,
//                 phone: savedPhone,
//             }))
//         }
//     }, [])

//     useEffect(() => {
//         if (!date) return

//         const today = new Date()
//         const selectedDate = new Date(date)

//         let validSlots = [...TimeSlots]

//         if (
//             selectedDate.getDate() === today.getDate() &&
//             selectedDate.getMonth() === today.getMonth() &&
//             selectedDate.getFullYear() === today.getFullYear()
//         ) {
//             const currentHour = today.getHours()
//             const currentMinutes = today.getMinutes()
//             const currentTimeInMinutes = currentHour * 60 + currentMinutes

//             validSlots = TimeSlots.filter((slot) => {
//                 const [time, modifier] = slot.split(" ")
//                 let [hours, minutes] = time.split(":").map(Number)

//                 if (modifier === "PM" && hours !== 12) hours += 12
//                 if (modifier === "AM" && hours === 12) hours = 0

//                 const slotTimeInMinutes = hours * 60 + minutes
//                 return slotTimeInMinutes > currentTimeInMinutes
//             })
//         }

//         setFilteredTimeSlots(validSlots)
//     }, [date])

//     const handleDateChange = (selectedDate) => {
//         if (!selectedDate) return

//         setDate(selectedDate)
//         const selectedDay = selectedDate.getDay()
//         setShowWarning(selectedDay === 0)
//         setTimeStartIndex(0)
//         setIsDateSelected(true)
//         setSelectedTime(null)
//     }

//     const handleTimeSelect = (time) => {
//         setSelectedTime(time)
//     }

//     const handleNextClick = () => {
//         setShowForm(true)
//     }

//     const handleBackClick = () => {
//         setShowForm(false)
//     }

//     const handleInputChange = (e) => {
//         const { name, value, type, checked } = e.target

//         if (type === "checkbox") {
//             const updatedServices = checked
//                 ? [...formData.serviceNeeded, value]
//                 : formData.serviceNeeded.filter((service) => service !== value)

//             setFormData({ ...formData, serviceNeeded: updatedServices })
//         } else {
//             setFormData({ ...formData, [name]: value })
//         }
//     }

//     const formatDateLong = (dateObj) => {
//         return dateObj.toLocaleDateString("en-US", {
//             weekday: "long",
//             month: "long",
//             day: "numeric",
//             year: "numeric",
//         })
//     }

//     // Update the generateCalendarFile function to properly format the URLs
//     const generateCalendarFile = () => {
//         if (!date || !selectedTime) return

//         // Parse the selected time
//         const [time, modifier] = selectedTime.split(" ")
//         let [hours, minutes] = time.split(":").map(Number)
//         if (modifier === "PM" && hours !== 12) hours += 12
//         if (modifier === "AM" && hours === 12) hours = 0

//         // Create start and end dates
//         const startDate = new Date(date)
//         startDate.setHours(hours, minutes, 0, 0)

//         const endDate = new Date(startDate)
//         endDate.setMinutes(endDate.getMinutes() + 15) // 15 minute meeting

//         // Format dates for URLs
//         const formatGoogleDate = (date) => {
//             return date.toISOString().replace(/-|:|\.\d+/g, "")
//         }

//         const formatOutlookDate = (date) => {
//             return date.toISOString().replace(/-|:|\.\d+/g, "")
//         }

//         // Create event details
//         const title = encodeURIComponent("Consultation with Shakti Enterprise")
//         const description = encodeURIComponent(
//             `Thank you ${formData.firstName} ${formData.lastName} for scheduling a consultation with Shakti Enterprise. We look forward to speaking with you.`,
//         )
//         const location = encodeURIComponent(selectedLocation)

//         // Create calendar links with properly formatted dates
//         const googleStart = formatGoogleDate(startDate)
//         const googleEnd = formatGoogleDate(endDate)
//         const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${description}&location=${location}&dates=${googleStart}/${googleEnd}`

//         const outlookStart = formatOutlookDate(startDate)
//         const outlookEnd = formatOutlookDate(endDate)
//         const outlookCalendarUrl = `https://outlook.office.com/calendar/0/deeplink/compose?subject=${title}&body=${description}&location=${location}&startdt=${startDate.toISOString()}&enddt=${endDate.toISOString()}`

//         // For Apple Calendar, we'll create an ICS file with a special MIME type
//         const icsContent = generateICSContent(startDate, endDate)
//         const appleCalendarUrl = `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`

//         // Show the calendar selection modal
//         setCalendarUrls({
//             google: googleCalendarUrl,
//             outlook: outlookCalendarUrl,
//             apple: appleCalendarUrl,
//         })
//         setShowCalendarModal(true)
//     }

//     // Add this helper function to generate ICS content
//     const generateICSContent = (startDate, endDate) => {
//         const formatICSDate = (date) => {
//             return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
//         }

//         return `BEGIN:VCALENDAR
// VERSION:2.0
// PRODID:-//Shakti Enterprise//Consultation//EN
// BEGIN:VEVENT
// UID:${Date.now()}@shakti-enterprise.com
// DTSTAMP:${formatICSDate(new Date())}
// DTSTART:${formatICSDate(startDate)}
// DTEND:${formatICSDate(endDate)}
// SUMMARY:Consultation with Shakti Enterprise
// DESCRIPTION:Thank you ${formData.firstName} ${formData.lastName} for scheduling a consultation with Shakti Enterprise. We look forward to speaking with you.
// LOCATION:${selectedLocation}
// END:VEVENT
// END:VCALENDAR`.trim()
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         generateCalendarFile()
//         // Note: We'll show the success modal after the user selects a calendar option
//     }

//     const downloadICSFile = () => {
//         if (!date || !selectedTime) return

//         // Parse the selected time
//         const [time, modifier] = selectedTime.split(" ")
//         let [hours, minutes] = time.split(":").map(Number)
//         if (modifier === "PM" && hours !== 12) hours += 12
//         if (modifier === "AM" && hours === 12) hours = 0

//         // Create start and end dates
//         const startDate = new Date(date)
//         startDate.setHours(hours, minutes, 0, 0)

//         const endDate = new Date(startDate)
//         endDate.setMinutes(endDate.getMinutes() + 15) // 15 minute meeting

//         // Format dates for iCalendar
//         const formatICSDate = (date) => {
//             return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
//         }

//         // Create the iCalendar content
//         const icsContent = `BEGIN:VCALENDAR
// VERSION:2.0
// PRODID:-//Shakti Enterprise//Consultation//EN
// BEGIN:VEVENT
// UID:${Date.now()}@shakti-enterprise.com
// DTSTAMP:${formatICSDate(new Date())}
// DTSTART:${formatICSDate(startDate)}
// DTEND:${formatICSDate(endDate)}
// SUMMARY:Consultation with Shakti Enterprise
// DESCRIPTION:Thank you ${formData.firstName} ${formData.lastName} for scheduling a consultation with Shakti Enterprise. We look forward to speaking with you.
// LOCATION:${selectedLocation}
// END:VEVENT
// END:VCALENDAR`.trim()

//         // Create and download the file
//         const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" })
//         const url = URL.createObjectURL(blob)

//         const a = document.createElement("a")
//         a.href = url
//         a.download = "shakti-consultation.ics"
//         document.body.appendChild(a)
//         a.click()
//         document.body.removeChild(a)
//         URL.revokeObjectURL(url)
//     }

//     // Update the handleCalendarSelect function to properly handle each calendar type
//     const handleCalendarSelect = (type) => {
//         setSelectedCalendarType(type)

//         if (type === "google") {
//             window.open(calendarUrls.google, "_blank")
//         } else if (type === "outlook") {
//             window.open(calendarUrls.outlook, "_blank")
//         } else if (type === "apple") {
//             // For Apple Calendar, create and trigger a download with the .ics extension
//             const icsContent = generateICSContent(
//                 new Date(date.setHours(...selectedTime.split(":")[0], ...selectedTime.split(":")[1].split(" ")[0])),
//                 new Date(date.setHours(...selectedTime.split(":")[0], ...(selectedTime.split(":")[1].split(" ")[0] + 15))),
//             )
//             const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" })
//             const url = URL.createObjectURL(blob)
//             const a = document.createElement("a")
//             a.href = url
//             a.download = "shakti-consultation.ics"
//             document.body.appendChild(a)
//             a.click()
//             document.body.removeChild(a)
//             URL.revokeObjectURL(url)
//         } else if (type === "ics") {
//             downloadICSFile()
//         }

//         setShowCalendarModal(false)
//         setShowSuccessModal(true)
//     }

//     const showPrev = timeStartIndex > 0
//     const showNext = timeStartIndex + TIME_DISPLAY_LIMIT < filteredTimeSlots.length

//     return (
//         <>
//             <MyNavbar />
//             <Container className="mt-2 mb-5">
//                 <Row className="my-3">
//                     <p className="fw-bold text-uppercase text-center mt-5" style={{ color: "#F5454E", fontSize: "16px" }}>
//                         Schedule time and date
//                     </p>
//                     <h1 className="text-black fw-bold text-center" style={{ fontSize: "28px" }}>
//                         Schedule A 15 Minute Consultation
//                     </h1>
//                 </Row>
//                 <Row className="justify-content-center mt-5">
//                     <Col
//                         xs={12}
//                         md={12}
//                         lg={12}
//                         className="d-flex flex-column flex-md-row shadow overflow-hidden p-0"
//                         style={{ backgroundColor: "#F5454E1A", borderRadius: "40px" }}
//                     >
//                         {!showForm ? (
//                             <>
//                                 <div
//                                     className="w-100 w-md-50 p-4 d-flex flex-column"
//                                     style={{
//                                         backgroundColor: "#F5454E1A",
//                                         height: "100%",
//                                         minHeight: "400px",
//                                     }}
//                                 >
//                                     <div>
//                                         <div className="mb-5 mt-4 d-flex justify-content-center align-items-center">
//                                             <img
//                                                 src={Logo || "/placeholder.svg"}
//                                                 alt="Logo"
//                                                 className="img-fluid"
//                                                 style={{ width: "300px" }}
//                                             />
//                                         </div>
//                                         <Row className="align-items-start">
//                                             <Col xs={8}>
//                                                 <h6 style={{ color: "#737791" }}>Kumiko Extent, Nurturing Manager</h6>
//                                                 <h4 className="fw-bold mt-3">Schedule A Call With Shakti Enterprise Representative</h4>
//                                             </Col>
//                                             <Col xs={4} className="d-flex justify-content-end">
//                                                 <img
//                                                     src={Shadule || "/placeholder.svg"}
//                                                     alt="Schedule Icon"
//                                                     style={{ height: "80px", width: "80px" }}
//                                                 />
//                                             </Col>
//                                         </Row>

//                                         <Form>
//                                             <Form.Group>
//                                                 <div className="d-flex align-items-center mt-3">
//                                                     <img src={Watch || "/placeholder.svg"} alt="Watch" className="me-2" />
//                                                     <span
//                                                         style={{
//                                                             fontSize: "16px",
//                                                             color: "#737791",
//                                                             fontWeight: "400",
//                                                         }}
//                                                     >
//                                                         15 min
//                                                     </span>
//                                                 </div>

//                                                 <Form.Label className="mt-3 fw-medium">Do you need assistance?</Form.Label>
//                                                 <div style={{ fontSize: "14px", color: "#737791" }}>
//                                                     Schedule a 15 minute call with our team, and they'll guide you. Can't find a time that works?
//                                                 </div>
//                                                 <div
//                                                     style={{
//                                                         fontSize: "14px",
//                                                         color: "#737791",
//                                                         marginTop: "5px",
//                                                     }}
//                                                 >
//                                                     <span
//                                                         style={{
//                                                             fontSize: "14px",
//                                                             color: "#F5454E",
//                                                             fontWeight: "bold",
//                                                         }}
//                                                     >
//                                                         Contact us here
//                                                     </span>{" "}
//                                                     and we'll get back to you shortly.
//                                                 </div>
//                                             </Form.Group>
//                                         </Form>
//                                     </div>

//                                     <div className="mt-auto">
//                                         <div
//                                             className="d-flex justify-content-start align-items-end"
//                                             style={{ color: "#737791", fontSize: "14px" }}
//                                         >
//                                             By Sharing Your Personal Data, You Agree To Our{" "}
//                                             <div style={{ color: "#F5454E" }} className="ms-1">
//                                                 {" "}
//                                                 Privacy Policy.
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="w-100 w-md-50 p-4 bg-white">
//                                     <h5 className="text-center mb-3">Select A Date & Time</h5>
//                                     <div>
//                                         <Calendar
//                                             onChange={handleDateChange}
//                                             value={date}
//                                             className="w-100"
//                                             tileDisabled={({ date }) => {
//                                                 const today = new Date()
//                                                 today.setHours(0, 0, 0, 0)
//                                                 return date < today
//                                             }}
//                                         />

//                                         {showWarning && (
//                                             <div className="mt-2 p-2 bg-red-50 text-red-500 text-sm rounded-md">
//                                                 Sunday is a holiday. Please choose another date.
//                                             </div>
//                                         )}
//                                     </div>

//                                     <div className="d-flex justify-content-between align-items-center mt-3">
//                                         <div>
//                                             <div className="d-flex justify-content-start align-items-center">
//                                                 <div className="d-flex align-items-center">
//                                                     <img
//                                                         src={Watch || "/placeholder.svg"}
//                                                         alt="watch"
//                                                         style={{ width: "20px", height: "20px" }}
//                                                     />
//                                                     <div className="mb-0 ms-1" style={{ color: "#F5454E", fontSize: "14px", fontWeight: "bold" }}>
//                                                         Time Zone
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div style={{ fontSize: "14px", color: "#737791" }}>India Standard Time (IST)</div>
//                                         </div>

//                                         {isDateSelected && (
//                                             <div>
//                                                 <div className="d-flex justify-content-end align-items-center">
//                                                     <div className="d-flex align-items-center">
//                                                         <img
//                                                             src={Watch || "/placeholder.svg"}
//                                                             alt="watch"
//                                                             style={{ width: "20px", height: "20px" }}
//                                                         />
//                                                         <div
//                                                             className="mb-0 ms-1"
//                                                             style={{ color: "#F5454E", fontSize: "14px", fontWeight: "bold" }}
//                                                         >
//                                                             Date
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="text-end" style={{ fontSize: "14px", color: "#737791" }}>
//                                                     {formatDateLong(date)}
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>

//                                     {isDateSelected && (
//                                         <div className="mt-3">
//                                             <div className="d-flex justify-content-between align-items-center mb-2">
//                                                 {showPrev && (
//                                                     <Button
//                                                         variant="light"
//                                                         className="p-1"
//                                                         onClick={() => setTimeStartIndex(timeStartIndex - TIME_DISPLAY_LIMIT)}
//                                                     >
//                                                         <FaChevronLeft color="#F5454E" />
//                                                     </Button>
//                                                 )}
//                                                 <div className="flex-grow-1 text-center" style={{ color: "#737791", fontSize: "14px" }}>
//                                                     Available time slots
//                                                 </div>
//                                                 {showNext && (
//                                                     <Button
//                                                         variant="light"
//                                                         className="p-1"
//                                                         onClick={() => setTimeStartIndex(timeStartIndex + TIME_DISPLAY_LIMIT)}
//                                                     >
//                                                         <FaChevronRight color="#F5454E" />
//                                                     </Button>
//                                                 )}
//                                             </div>

//                                             <div className="d-flex flex-wrap justify-content-center gap-2">
//                                                 {filteredTimeSlots
//                                                     .slice(timeStartIndex, timeStartIndex + TIME_DISPLAY_LIMIT)
//                                                     .map((time, index) => (
//                                                         <div
//                                                             key={index}
//                                                             className={`px-3 py-1 custom-hover-btn rounded-pill text-center ${selectedTime === time ? "bg-danger text-white" : "bg-light"}`}
//                                                             style={{
//                                                                 minWidth: "80px",
//                                                                 cursor: "pointer",
//                                                                 fontSize: "14px",
//                                                                 maxWidth: "calc(50% - 8px)",
//                                                                 boxSizing: "border-box",
//                                                             }}
//                                                             onClick={() => handleTimeSelect(time)}
//                                                         >
//                                                             {time}
//                                                         </div>
//                                                     ))}
//                                             </div>

//                                             {selectedTime && (
//                                                 <div className="mt-3 text-end">
//                                                     <Button
//                                                         variant="danger"
//                                                         className="rounded-pill px-4 py-1 "
//                                                         style={{ backgroundColor: "#F5454E", fontSize: "14px" }}
//                                                         onClick={handleNextClick}
//                                                     >
//                                                         Next
//                                                     </Button>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     )}
//                                 </div>
//                             </>
//                         ) : (
//                             <>
//                                 <div
//                                     className="w-100 w-md-50 p-4 d-flex flex-column"
//                                     style={{
//                                         backgroundColor: "#F5454E1A",
//                                         height: "100%",
//                                         minHeight: "400px",
//                                     }}
//                                 >
//                                     <div>
//                                         <div className="mb-5 mt-4 d-flex justify-content-center align-items-center">
//                                             <img
//                                                 src={Logo || "/placeholder.svg"}
//                                                 alt="Logo"
//                                                 className="img-fluid"
//                                                 style={{ width: "300px" }}
//                                             />
//                                         </div>
//                                         <Row className="align-items-start">
//                                             <Col xs={8}>
//                                                 <h6 style={{ color: "#737791" }}>Kumiko Extent, Nurturing Manager</h6>
//                                                 <h4 className="fw-bold mt-3">Schedule A Call With Shakti Enterprise Representative</h4>
//                                             </Col>
//                                             <Col xs={4} className="d-flex justify-content-end">
//                                                 <img
//                                                     src={Shadule || "/placeholder.svg"}
//                                                     alt="Schedule Icon"
//                                                     style={{ height: "80px", width: "80px" }}
//                                                 />
//                                             </Col>
//                                         </Row>

//                                         <div className="mt-3">
//                                             <div className="d-flex align-items-center">
//                                                 <img src={Watch || "/placeholder.svg"} alt="Watch" className="me-2" />
//                                                 <span style={{ fontSize: "16px", color: "#737791", fontWeight: "400" }}>15 min</span>
//                                             </div>
//                                             <div className="mt-2">
//                                                 <span style={{ fontSize: "14px", color: "#F5454E", fontWeight: "500" }}>
//                                                     <FaCalendarAlt color="#737791" className="me-1" />
//                                                     Date
//                                                 </span>
//                                                 <div style={{ fontSize: "14px", color: "#737791", fontWeight: "400" }}>
//                                                     {selectedTime} • {formatDateLong(date)}
//                                                 </div>
//                                             </div>
//                                             <div className="mt-2">
//                                                 <span style={{ fontSize: "14px", color: "#F5454E", fontWeight: "500" }}>
//                                                     <RiTimeZoneLine color="#737791" className="me-1" />
//                                                     Time Zone
//                                                 </span>
//                                                 <div style={{ fontSize: "14px", color: "#737791", fontWeight: "400" }} className="mt-1">
//                                                     India Standard Time
//                                                 </div>
//                                             </div>

//                                             <Form.Label className="mt-3 fw-medium">Do you need assistance?</Form.Label>
//                                             <div style={{ fontSize: "14px", color: "#737791" }}>
//                                                 Schedule a 15 minute call with our team, and they'll guide you.
//                                             </div>
//                                             <div style={{ fontSize: "14px", color: "#737791", marginTop: "5px" }}>
//                                                 Can't find a time that works?
//                                             </div>
//                                             <div
//                                                 style={{
//                                                     fontSize: "14px",
//                                                     color: "#737791",
//                                                     marginTop: "5px",
//                                                 }}
//                                             >
//                                                 <span
//                                                     style={{
//                                                         fontSize: "14px",
//                                                         color: "#F5454E",
//                                                         fontWeight: "bold",
//                                                     }}
//                                                 >
//                                                     Contact us here
//                                                 </span>{" "}
//                                                 and we'll get back to you shortly.
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="mt-auto">
//                                         <div
//                                             className="d-flex justify-content-start align-items-end"
//                                             style={{ color: "#737791", fontSize: "14px" }}
//                                         >
//                                             By Sharing Your Personal Data, You Agree To Our{" "}
//                                             <div style={{ color: "#F5454E" }} className="ms-1">
//                                                 {" "}
//                                                 Privacy Policy.
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="w-100 w-md-50 p-4 bg-white">
//                                     <div className="d-flex justify-content-between align-items-center mb-4">
//                                         <h5 className="mb-0">Enter Details</h5>
//                                         <Button
//                                             variant="link"
//                                             onClick={handleBackClick}
//                                             style={{ color: "#F5454E", textDecoration: "none", fontSize: "14px" }}
//                                         >
//                                             Back
//                                         </Button>
//                                     </div>

//                                     <Form onSubmit={handleSubmit}>
//                                         <Row>
//                                             <Col md={6}>
//                                                 <Form.Group className="mb-3">
//                                                     <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
//                                                         First Name<span className="text-danger">*</span>
//                                                     </Form.Label>
//                                                     <Form.Control
//                                                         type="text"
//                                                         name="firstName"
//                                                         placeholder="Your First Name"
//                                                         value={formData.firstName}
//                                                         onChange={handleInputChange}
//                                                         required
//                                                         className="py-2 rounded-pill"
//                                                         style={{ fontSize: "14px" }}
//                                                     />
//                                                 </Form.Group>
//                                             </Col>
//                                             <Col md={6}>
//                                                 <Form.Group className="mb-3">
//                                                     <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
//                                                         Last Name<span className="text-danger">*</span>
//                                                     </Form.Label>
//                                                     <Form.Control
//                                                         type="text"
//                                                         name="lastName"
//                                                         placeholder="Your Last Name"
//                                                         value={formData.lastName}
//                                                         onChange={handleInputChange}
//                                                         required
//                                                         className="py-2 rounded-pill"
//                                                         style={{ fontSize: "14px" }}
//                                                     />
//                                                 </Form.Group>
//                                             </Col>
//                                         </Row>

//                                         <Row>
//                                             <Col md={6}>
//                                                 <Form.Group className="mb-3">
//                                                     <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
//                                                         Email<span className="text-danger">*</span>
//                                                     </Form.Label>
//                                                     <Form.Control
//                                                         type="email"
//                                                         name="email"
//                                                         placeholder="jehoh13939@iesotica.com"
//                                                         value={formData.email}
//                                                         onChange={handleInputChange}
//                                                         required
//                                                         className="py-2 rounded-pill"
//                                                         style={{ fontSize: "14px" }}
//                                                     />
//                                                 </Form.Group>
//                                             </Col>
//                                             <Col md={6}>
//                                                 <Form.Group className="mb-3">
//                                                     <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
//                                                         Phone Number<span className="text-danger">*</span>
//                                                     </Form.Label>
//                                                     <Form.Control
//                                                         type="tel"
//                                                         name="phone"
//                                                         placeholder="+91 9669606500"
//                                                         value={formData.phone}
//                                                         onChange={handleInputChange}
//                                                         required
//                                                         className="py-2 rounded-pill"
//                                                         style={{ fontSize: "14px" }}
//                                                     />
//                                                 </Form.Group>
//                                             </Col>
//                                         </Row>

//                                         <div className="mb-3">
//                                             {!showGuestInput ? (
//                                                 <button
//                                                     type="button"
//                                                     onClick={() => setShowGuestInput(true)}
//                                                     style={{
//                                                         borderRadius: "30px",
//                                                         border: "none",
//                                                         backgroundColor: "#F5454E",
//                                                         color: "white",
//                                                         fontSize: "14px",
//                                                     }}
//                                                     className="mb-0 px-4 py-2 mt-3"
//                                                     disabled={guestEmails.length >= 10}
//                                                 >
//                                                     {guestEmails.length > 0 ? `Add More Guests (${guestEmails.length}/10)` : "Add Guest"}
//                                                 </button>
//                                             ) : (
//                                                 <div className="guest-email-container">
//                                                     <div className="d-flex align-items-center">
//                                                         <Form.Control
//                                                             type="email"
//                                                             placeholder="Enter guest email"
//                                                             value={guestEmail}
//                                                             onChange={(e) => setGuestEmail(e.target.value)}
//                                                             className="py-2 rounded-pill me-2"
//                                                             style={{ fontSize: "14px", flex: 1 }}
//                                                         />
//                                                         <Button
//                                                             variant="danger"
//                                                             onClick={() => {
//                                                                 if (guestEmail && guestEmails.length < 10) {
//                                                                     setGuestEmails([...guestEmails, guestEmail])
//                                                                     setGuestEmail("")
//                                                                 }
//                                                                 if (guestEmails.length >= 9) {
//                                                                     setShowGuestInput(false)
//                                                                 }
//                                                             }}
//                                                             className="rounded-pill px-3 py-1"
//                                                             style={{ backgroundColor: "#F5454E", fontSize: "14px" }}
//                                                             disabled={!guestEmail || guestEmails.length >= 10}
//                                                         >
//                                                             Add
//                                                         </Button>
//                                                         <Button
//                                                             variant="link"
//                                                             onClick={() => setShowGuestInput(false)}
//                                                             style={{ color: "#F5454E", fontSize: "14px" }}
//                                                         >
//                                                             Cancel
//                                                         </Button>
//                                                     </div>
//                                                     <div className="mt-2">
//                                                         {guestEmails.map((email, index) => (
//                                                             <div key={index} className="d-flex align-items-center bg-light p-2 rounded mb-1">
//                                                                 <span style={{ fontSize: "14px", flex: 1 }}>{email}</span>
//                                                                 <IoMdClose
//                                                                     onClick={() => {
//                                                                         const updatedEmails = [...guestEmails]
//                                                                         updatedEmails.splice(index, 1)
//                                                                         setGuestEmails(updatedEmails)
//                                                                     }}
//                                                                     style={{ cursor: "pointer", color: "#F5454E" }}
//                                                                 />
//                                                             </div>
//                                                         ))}
//                                                     </div>
//                                                     <div className="text-muted mt-1" style={{ fontSize: "12px" }}>
//                                                         {guestEmails.length}/10 guests added
//                                                     </div>
//                                                 </div>
//                                             )}
//                                         </div>
//                                         <Form.Group className="mb-3">
//                                             <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
//                                                 Location<span className="text-danger">*</span>
//                                             </Form.Label>

//                                             <div className="mb-3">
//                                                 <div className="d-flex align-items-center mb-2">
//                                                     <Form.Check
//                                                         type="radio"
//                                                         id="radio-1"
//                                                         name="location"
//                                                         checked={selectedLocation === "Microsoft Teams"}
//                                                         onChange={() => setSelectedLocation("Microsoft Teams")}
//                                                         style={{ marginRight: "10px" }}
//                                                     />
//                                                     <BsMicrosoftTeams size={20} color="#4A52BC" style={{ marginRight: "8px" }} />
//                                                     <label htmlFor="radio-1" style={{ color: "#737791", fontSize: "14px", marginBottom: 0 }}>
//                                                         Microsoft Teams
//                                                     </label>
//                                                 </div>

//                                                 <div className="d-flex align-items-center">
//                                                     <Form.Check
//                                                         type="radio"
//                                                         id="radio-2"
//                                                         name="location"
//                                                         checked={selectedLocation === "Phone Call"}
//                                                         onChange={() => setSelectedLocation("Phone Call")}
//                                                         style={{ marginRight: "10px" }}
//                                                     />
//                                                     <FaPhone size={20} color="#F5454E" style={{ marginRight: "8px" }} />
//                                                     <label htmlFor="radio-2" style={{ color: "#737791", fontSize: "14px", marginBottom: 0 }}>
//                                                         Phone Call
//                                                     </label>
//                                                 </div>

//                                                 {selectedLocation === "Phone Call" && (
//                                                     <div className="mt-2">
//                                                         <Form.Control
//                                                             type="tel"
//                                                             placeholder="Enter phone number"
//                                                             value={phoneNumber}
//                                                             onChange={(e) => setPhoneNumber(e.target.value)}
//                                                             className="py-2 rounded-pill"
//                                                             style={{ fontSize: "14px" }}
//                                                             required
//                                                         />
//                                                     </div>
//                                                 )}
//                                             </div>
//                                         </Form.Group>

//                                         <Row>
//                                             <Col md={6}>
//                                                 <Form.Group className="mb-3">
//                                                     <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
//                                                         Company<span className="text-danger">*</span>
//                                                     </Form.Label>
//                                                     <Form.Control
//                                                         type="text"
//                                                         name="company"
//                                                         placeholder="Your Company"
//                                                         value={formData.company}
//                                                         onChange={handleInputChange}
//                                                         required
//                                                         className="py-2 rounded-pill"
//                                                         style={{ fontSize: "14px" }}
//                                                     />
//                                                 </Form.Group>
//                                             </Col>
//                                             <Col md={6}>
//                                                 <Form.Group className="mb-3">
//                                                     <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
//                                                         Job Title<span className="text-danger">*</span>
//                                                     </Form.Label>
//                                                     <Form.Control
//                                                         type="text"
//                                                         name="jobTitle"
//                                                         placeholder="Your Job Title"
//                                                         value={formData.jobTitle}
//                                                         onChange={handleInputChange}
//                                                         required
//                                                         className="py-2 rounded-pill"
//                                                         style={{ fontSize: "14px" }}
//                                                     />
//                                                 </Form.Group>
//                                             </Col>
//                                         </Row>

//                                         <Form.Group className="mb-3">
//                                             <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>Type Of Service Needed</Form.Label>
//                                             <div>
//                                                 <Form.Check
//                                                     type="checkbox"
//                                                     id="translation"
//                                                     label="Translation and adaptation"
//                                                     value="Translation and adaptation"
//                                                     checked={formData.serviceNeeded.includes("Translation and adaptation")}
//                                                     onChange={handleInputChange}
//                                                     className="mb-2"
//                                                     style={{ fontSize: "14px", color: "#737791" }}
//                                                 />
//                                                 <Form.Check
//                                                     type="checkbox"
//                                                     id="interpreting"
//                                                     label="Interpreting"
//                                                     value="Interpreting"
//                                                     checked={formData.serviceNeeded.includes("Interpreting")}
//                                                     onChange={handleInputChange}
//                                                     className="mb-2"
//                                                     style={{ fontSize: "14px", color: "#737791" }}
//                                                 />
//                                                 <Form.Check
//                                                     type="checkbox"
//                                                     id="digital-marketing"
//                                                     label="Digital Marketing"
//                                                     value="Digital Marketing"
//                                                     checked={formData.serviceNeeded.includes("Digital Marketing")}
//                                                     onChange={handleInputChange}
//                                                     style={{ fontSize: "14px", color: "#737791" }}
//                                                 />
//                                             </div>
//                                         </Form.Group>

//                                         <Form.Group className="mb-3">
//                                             <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>Pick A Service (If Known)</Form.Label>

//                                             <Form.Control
//                                                 as="select"
//                                                 name="specificService"
//                                                 value={formData.specificService}
//                                                 onChange={handleInputChange}
//                                                 className="py-2 rounded-pill"
//                                                 style={{ fontSize: "14px" }}
//                                             >
//                                                 <option value="">Select Service</option>
//                                                 <option value="Service 1">Service 1</option>
//                                                 <option value="Service 2">Service 2</option>
//                                                 <option value="Service 3">Service 3</option>
//                                             </Form.Control>
//                                         </Form.Group>

//                                         <Form.Group className="mb-3">
//                                             <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
//                                                 Number Of Employees<span className="text-danger">*</span>
//                                             </Form.Label>
//                                             <Form.Control
//                                                 as="select"
//                                                 name="numberOfEmployees"
//                                                 value={formData.numberOfEmployees}
//                                                 onChange={handleInputChange}
//                                                 required
//                                                 className="py-2 rounded-pill"
//                                                 style={{ fontSize: "14px" }}
//                                             >
//                                                 <option value="">Select Employees</option>
//                                                 <option value="1-10">1-10</option>
//                                                 <option value="11-50">11-50</option>
//                                                 <option value="51-200">51-200</option>
//                                                 <option value="201-500">201-500</option>
//                                                 <option value="500+">500+</option>
//                                             </Form.Control>
//                                         </Form.Group>

//                                         <Form.Group className="mb-3">
//                                             <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
//                                                 How Can We Help You?<span className="text-danger">*</span>
//                                             </Form.Label>

//                                             <Form.Control
//                                                 as="textarea"
//                                                 rows={3}
//                                                 name="helpDescription"
//                                                 // placeholder="Description"
//                                                 style={{ fontSize: "14px" }}
//                                                 value={formData.helpDescription}
//                                                 onChange={handleInputChange}
//                                                 required
//                                             />
//                                         </Form.Group>

//                                         <div
//                                             style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
//                                         >
//                                             <div className="mb-3" style={{ fontSize: "14px", color: "#737791" }}>
//                                                 By proceeding, you confirm that you have read and agree to our{" "}
//                                                 <span style={{ color: "#F5454E", fontWeight: "bold" }}>Terms of Service</span> and{" "}
//                                                 <span style={{ color: "#F5454E", fontWeight: "bold" }}>Privacy Policy</span>.
//                                             </div>
//                                             <button
//                                                 type="submit"
//                                                 style={{
//                                                     borderRadius: "30px",
//                                                     border: "none",
//                                                     backgroundColor: "#F5454E",
//                                                     color: "white",
//                                                     fontSize: "14px",
//                                                     fontWeight: "500",
//                                                 }}
//                                                 className="mb-0 px-4 py-2 mt-3"
//                                             >
//                                                 Schedule Event & Add to Calendar
//                                             </button>
//                                         </div>
//                                     </Form>
//                                 </div>
//                             </>
//                         )}
//                     </Col>
//                 </Row>
//             </Container>

//             <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Success!</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     Your consultation has been scheduled successfully! The calendar invite has been downloaded to your device.
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="danger" onClick={() => { setShowSuccessModal(false), navigate("/") }}>
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//             <Modal show={showCalendarModal} onHide={() => setShowCalendarModal(false)} centered>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Add to Calendar</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <div className="d-grid gap-2">
//                         <Form.Group className="mb-3">
//                             <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>Choose your preferred calendar</Form.Label>
//                             <div className="mb-3">
//                                 <div className="d-flex align-items-center mb-2">
//                                     <Form.Check
//                                         type="radio"
//                                         id="calendar-google"
//                                         name="calendarType"
//                                         checked={selectedCalendarType === "google"}
//                                         onChange={() => setSelectedCalendarType("google")}
//                                         style={{ marginRight: "10px" }}
//                                     />
//                                     <label htmlFor="calendar-google" style={{ color: "#737791", fontSize: "14px", marginBottom: 0 }}>
//                                         Google Calendar
//                                     </label>
//                                 </div>

//                                 <div className="d-flex align-items-center mb-2">
//                                     <Form.Check
//                                         type="radio"
//                                         id="calendar-outlook"
//                                         name="calendarType"
//                                         checked={selectedCalendarType === "outlook"}
//                                         onChange={() => setSelectedCalendarType("outlook")}
//                                         style={{ marginRight: "10px" }}
//                                     />
//                                     <label htmlFor="calendar-outlook" style={{ color: "#737791", fontSize: "14px", marginBottom: 0 }}>
//                                         Outlook Calendar
//                                     </label>
//                                 </div>

//                                 <div className="d-flex align-items-center mb-2">
//                                     <Form.Check
//                                         type="radio"
//                                         id="calendar-apple"
//                                         name="calendarType"
//                                         checked={selectedCalendarType === "apple"}
//                                         onChange={() => setSelectedCalendarType("apple")}
//                                         style={{ marginRight: "10px" }}
//                                     />
//                                     <label htmlFor="calendar-apple" style={{ color: "#737791", fontSize: "14px", marginBottom: 0 }}>
//                                         Apple Calendar
//                                     </label>
//                                 </div>

//                                 <div className="d-flex align-items-center">
//                                     <Form.Check
//                                         type="radio"
//                                         id="calendar-ics"
//                                         name="calendarType"
//                                         checked={selectedCalendarType === "ics"}
//                                         onChange={() => setSelectedCalendarType("ics")}
//                                         style={{ marginRight: "10px" }}
//                                     />
//                                     <label htmlFor="calendar-ics" style={{ color: "#737791", fontSize: "14px", marginBottom: 0 }}>
//                                         Download ICS File
//                                     </label>
//                                 </div>
//                             </div>
//                         </Form.Group>

//                         <Button
//                             variant="danger"
//                             onClick={() => handleCalendarSelect(selectedCalendarType)}
//                             className="rounded-pill"
//                             style={{ backgroundColor: "#F5454E", fontSize: "14px" }}
//                             disabled={!selectedCalendarType}
//                         >
//                             Add to Calendar
//                         </Button>
//                     </div>
//                 </Modal.Body>
//             </Modal>

//             <OurClients />
//             <FooterMenu />
//         </>
//     )
// }

// export default StartScheduling









"use client"
import { useState, useEffect } from "react"
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import Shadule from "../../assets/Images/ScheduleAConsultation/shadule.svg"
import Watch from "../../assets/Images/ScheduleAConsultation/watch.svg"
import "./form.css"
import { FaChevronLeft, FaChevronRight, FaCalendarAlt, FaPhone } from "react-icons/fa"
import { RiTimeZoneLine } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"
import { BsMicrosoftTeams } from "react-icons/bs"
import MyNavbar from "../Navbar/MyNavbar"
import OurClients from "../OurClients/OurClients"
import FooterMenu from "../FooterMenu/FooterMenu"
import Logo from "../../assets/Images/Navimages/Shakti-Logo.png"
import { useNavigate } from "react-router-dom"

const StartScheduling = () => {
    const navigate = useNavigate()
    const [date, setDate] = useState(new Date())
    const [isDateSelected, setIsDateSelected] = useState(false)
    const [timeStartIndex, setTimeStartIndex] = useState(0)
    const [filteredTimeSlots, setFilteredTimeSlots] = useState([])
    const [selectedTime, setSelectedTime] = useState(null)
    const [showForm, setShowForm] = useState(false)
    const [showGuestInput, setShowGuestInput] = useState(false)
    const [guestEmail, setGuestEmail] = useState("")
    const [guestEmails, setGuestEmails] = useState([])
    const [selectedLocation, setSelectedLocation] = useState("Microsoft Teams")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [showWarning, setShowWarning] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const TIME_DISPLAY_LIMIT = 10

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        serviceNeeded: [],
        specificService: "",
        numberOfEmployees: "",
        helpDescription: "",
    })

    const TimeSlots = [
        "10:00 AM",
        "10:15 AM",
        "10:30 AM",
        "10:45 AM",
        "11:00 AM",
        "11:15 AM",
        "11:30 AM",
        "11:45 AM",
        "12:00 PM",
        "12:15 PM",
        "12:30 PM",
        "12:45 PM",
        "1:00 PM",
        "1:15 PM",
        "1:30 PM",
        "1:45 PM",
        "2:00 PM",
        "2:15 PM",
        "2:30 PM",
        "2:45 PM",
        "3:00 PM",
        "3:15 PM",
        "3:30 PM",
        "3:45 PM",
        "4:00 PM",
        "4:15 PM",
        "4:30 PM",
        "4:45 PM",
        "5:00 PM",
        "5:15 PM",
        "5:30 PM",
        "5:45 PM",
    ]

    useEffect(() => {
        const savedEmail = localStorage.getItem("schedulingEmail")
        const savedPhone = localStorage.getItem("schedulingPhone")

        if (savedEmail && savedPhone) {
            setFormData((prev) => ({
                ...prev,
                email: savedEmail,
                phone: savedPhone,
            }))
        }
    }, [])

    useEffect(() => {
        if (!date) return

        const today = new Date()
        const selectedDate = new Date(date)

        let validSlots = [...TimeSlots]

        if (
            selectedDate.getDate() === today.getDate() &&
            selectedDate.getMonth() === today.getMonth() &&
            selectedDate.getFullYear() === today.getFullYear()
        ) {
            const currentHour = today.getHours()
            const currentMinutes = today.getMinutes()
            const currentTimeInMinutes = currentHour * 60 + currentMinutes

            validSlots = TimeSlots.filter((slot) => {
                const [time, modifier] = slot.split(" ")
                let [hours, minutes] = time.split(":").map(Number)

                if (modifier === "PM" && hours !== 12) hours += 12
                if (modifier === "AM" && hours === 12) hours = 0

                const slotTimeInMinutes = hours * 60 + minutes
                return slotTimeInMinutes > currentTimeInMinutes
            })
        }

        setFilteredTimeSlots(validSlots)
    }, [date])

    const handleDateChange = (selectedDate) => {
        if (!selectedDate) return

        setDate(selectedDate)
        const selectedDay = selectedDate.getDay()
        setShowWarning(selectedDay === 0)
        setTimeStartIndex(0)
        setIsDateSelected(true)
        setSelectedTime(null)
    }

    const handleTimeSelect = (time) => {
        setSelectedTime(time)
    }

    const handleNextClick = () => {
        setShowForm(true)
    }

    const handleBackClick = () => {
        setShowForm(false)
    }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target

        if (type === "checkbox") {
            const updatedServices = checked
                ? [...formData.serviceNeeded, value]
                : formData.serviceNeeded.filter((service) => service !== value)

            setFormData({ ...formData, serviceNeeded: updatedServices })
        } else {
            setFormData({ ...formData, [name]: value })
        }
    }

    const formatDateLong = (dateObj) => {
        return dateObj.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        })
    }

    const getISODateTime = (date, time) => {
        const [hours, minutes] = time.split(':');
        const combinedDate = new Date(date);
        combinedDate.setHours(parseInt(hours, 10));
        combinedDate.setMinutes(parseInt(minutes, 10));
        combinedDate.setSeconds(0);
        return combinedDate.toISOString(); // returns "YYYY-MM-DDTHH:mm:ss.sssZ"
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            // Format the date and time for the API
            const formattedDate = date.toISOString().split('T')[0];
            const [time, modifier] = selectedTime.split(' ');
            let [hours, minutes] = time.split(':').map(Number);

            if (modifier === 'PM' && hours !== 12) hours += 12;
            if (modifier === 'AM' && hours === 12) hours = 0;

            const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`;

            const requestBody = {
                email: formData.email,
                guest: guestEmails.join(", "),
                full_name: `${formData.firstName} ${formData.lastName}`,
                phone: formData.phone,
                company: formData.company,
                location: selectedLocation,
                job_title: formData.jobTitle,
                type_of_service: formData.serviceNeeded.join(", "),
                pick_service: formData.specificService,
                no_of_employee: formData.numberOfEmployees,
                help: formData.helpDescription,
                date: getISODateTime(date, selectedTime),
                duration: "15 minutes",
            };
            console.log("requestBody", requestBody)
            const response = await fetch("https://api.shakti.radixforce.com/schedule_call/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error("Failed to schedule call");
            }

            setShowSuccessModal(true);
        } catch (err) {
            setError(err.message || "An error occurred while scheduling the call");
        } finally {
            setIsLoading(false);
        }
    }

    const showPrev = timeStartIndex > 0
    const showNext = timeStartIndex + TIME_DISPLAY_LIMIT < filteredTimeSlots.length

    return (
        <>
            <MyNavbar />
            <Container className="mt-2 mb-5">
                <Row className="my-3">
                    <p className="fw-bold text-uppercase text-center mt-5" style={{ color: "#F5454E", fontSize: "16px" }}>
                        Schedule time and date
                    </p>
                    <h1 className="text-black fw-bold text-center" style={{ fontSize: "28px" }}>
                        Schedule A 15 Minute Consultation
                    </h1>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col
                        xs={12}
                        md={12}
                        lg={12}
                        className="d-flex flex-column flex-md-row shadow overflow-hidden p-0"
                        style={{ backgroundColor: "#F5454E1A", borderRadius: "40px" }}
                    >
                        {!showForm ? (
                            <>
                                <div
                                    className="w-100 w-md-50 p-4 d-flex flex-column"
                                    style={{
                                        backgroundColor: "#F5454E1A",
                                        height: "100%",
                                        minHeight: "400px",
                                    }}
                                >
                                    <div>
                                        <div className="mb-5 mt-4 d-flex justify-content-center align-items-center">
                                            <img
                                                src={Logo || "/placeholder.svg"}
                                                alt="Logo"
                                                className="img-fluid"
                                                style={{ width: "300px" }}
                                            />
                                        </div>
                                        <Row className="align-items-start">
                                            <Col xs={8}>
                                                <h6 style={{ color: "#737791" }}>Kumiko Extent, Nurturing Manager</h6>
                                                <h4 className="fw-bold mt-3">Schedule A Call With Shakti Enterprise Representative</h4>
                                            </Col>
                                            <Col xs={4} className="d-flex justify-content-end">
                                                <img
                                                    src={Shadule || "/placeholder.svg"}
                                                    alt="Schedule Icon"
                                                    style={{ height: "80px", width: "80px" }}
                                                />
                                            </Col>
                                        </Row>

                                        <Form>
                                            <Form.Group>
                                                <div className="d-flex align-items-center mt-3">
                                                    <img src={Watch || "/placeholder.svg"} alt="Watch" className="me-2" />
                                                    <span
                                                        style={{
                                                            fontSize: "16px",
                                                            color: "#737791",
                                                            fontWeight: "400",
                                                        }}
                                                    >
                                                        15 min
                                                    </span>
                                                </div>

                                                <Form.Label className="mt-3 fw-medium">Do you need assistance?</Form.Label>
                                                <div style={{ fontSize: "14px", color: "#737791" }}>
                                                    Schedule a 15 minute call with our team, and they'll guide you. Can't find a time that works?
                                                </div>
                                                <div
                                                    style={{
                                                        fontSize: "14px",
                                                        color: "#737791",
                                                        marginTop: "5px",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: "14px",
                                                            color: "#F5454E",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        Contact us here
                                                    </span>{" "}
                                                    and we'll get back to you shortly.
                                                </div>
                                            </Form.Group>
                                        </Form>
                                    </div>

                                    <div className="mt-auto">
                                        <div
                                            className="d-flex justify-content-start align-items-end"
                                            style={{ color: "#737791", fontSize: "14px" }}
                                        >
                                            By Sharing Your Personal Data, You Agree To Our{" "}
                                            <div style={{ color: "#F5454E" }} className="ms-1">
                                                {" "}
                                                Privacy Policy.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 w-md-50 p-4 bg-white">
                                    <h5 className="text-center mb-3">Select A Date & Time</h5>
                                    <div>
                                        <Calendar
                                            onChange={handleDateChange}
                                            value={date}
                                            className="w-100"
                                            tileDisabled={({ date }) => {
                                                const today = new Date()
                                                today.setHours(0, 0, 0, 0)
                                                return date < today
                                            }}
                                        />

                                        {showWarning && (
                                            <div className="mt-2 p-2 bg-red-50 text-red-500 text-sm rounded-md">
                                                Sunday is a holiday. Please choose another date.
                                            </div>
                                        )}
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <div className="d-flex justify-content-start align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={Watch || "/placeholder.svg"}
                                                        alt="watch"
                                                        style={{ width: "20px", height: "20px" }}
                                                    />
                                                    <div className="mb-0 ms-1" style={{ color: "#F5454E", fontSize: "14px", fontWeight: "bold" }}>
                                                        Time Zone
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ fontSize: "14px", color: "#737791" }}>India Standard Time (IST)</div>
                                        </div>

                                        {isDateSelected && (
                                            <div>
                                                <div className="d-flex justify-content-end align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <img
                                                            src={Watch || "/placeholder.svg"}
                                                            alt="watch"
                                                            style={{ width: "20px", height: "20px" }}
                                                        />
                                                        <div
                                                            className="mb-0 ms-1"
                                                            style={{ color: "#F5454E", fontSize: "14px", fontWeight: "bold" }}
                                                        >
                                                            Date
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-end" style={{ fontSize: "14px", color: "#737791" }}>
                                                    {formatDateLong(date)}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {isDateSelected && (
                                        <div className="mt-3">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                {showPrev && (
                                                    <Button
                                                        variant="light"
                                                        className="p-1"
                                                        onClick={() => setTimeStartIndex(timeStartIndex - TIME_DISPLAY_LIMIT)}
                                                    >
                                                        <FaChevronLeft color="#F5454E" />
                                                    </Button>
                                                )}
                                                <div className="flex-grow-1 text-center" style={{ color: "#737791", fontSize: "14px" }}>
                                                    Available time slots
                                                </div>
                                                {showNext && (
                                                    <Button
                                                        variant="light"
                                                        className="p-1"
                                                        onClick={() => setTimeStartIndex(timeStartIndex + TIME_DISPLAY_LIMIT)}
                                                    >
                                                        <FaChevronRight color="#F5454E" />
                                                    </Button>
                                                )}
                                            </div>

                                            <div className="d-flex flex-wrap justify-content-center gap-2">
                                                {filteredTimeSlots
                                                    .slice(timeStartIndex, timeStartIndex + TIME_DISPLAY_LIMIT)
                                                    .map((time, index) => (
                                                        <div
                                                            key={index}
                                                            className={`px-3 py-1 custom-hover-btn rounded-pill text-center ${selectedTime === time ? "bg-danger text-white" : "bg-light"}`}
                                                            style={{
                                                                minWidth: "80px",
                                                                cursor: "pointer",
                                                                fontSize: "14px",
                                                                maxWidth: "calc(50% - 8px)",
                                                                boxSizing: "border-box",
                                                            }}
                                                            onClick={() => handleTimeSelect(time)}
                                                        >
                                                            {time}
                                                        </div>
                                                    ))}
                                            </div>

                                            {selectedTime && (
                                                <div className="mt-3 text-end">
                                                    <Button
                                                        variant="danger"
                                                        className="rounded-pill px-4 py-1 "
                                                        style={{ backgroundColor: "#F5454E", fontSize: "14px" }}
                                                        onClick={handleNextClick}
                                                    >
                                                        Next
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
                                <div
                                    className="w-100 w-md-50 p-4 d-flex flex-column"
                                    style={{
                                        backgroundColor: "#F5454E1A",
                                        height: "100%",
                                        minHeight: "400px",
                                    }}
                                >
                                    <div>
                                        <div className="mb-5 mt-4 d-flex justify-content-center align-items-center">
                                            <img
                                                src={Logo || "/placeholder.svg"}
                                                alt="Logo"
                                                className="img-fluid"
                                                style={{ width: "300px" }}
                                            />
                                        </div>
                                        <Row className="align-items-start">
                                            <Col xs={8}>
                                                <h6 style={{ color: "#737791" }}>Kumiko Extent, Nurturing Manager</h6>
                                                <h4 className="fw-bold mt-3">Schedule A Call With Shakti Enterprise Representative</h4>
                                            </Col>
                                            <Col xs={4} className="d-flex justify-content-end">
                                                <img
                                                    src={Shadule || "/placeholder.svg"}
                                                    alt="Schedule Icon"
                                                    style={{ height: "80px", width: "80px" }}
                                                />
                                            </Col>
                                        </Row>

                                        <div className="mt-3">
                                            <div className="d-flex align-items-center">
                                                <img src={Watch || "/placeholder.svg"} alt="Watch" className="me-2" />
                                                <span style={{ fontSize: "16px", color: "#737791", fontWeight: "400" }}>15 min</span>
                                            </div>
                                            <div className="mt-2">
                                                <span style={{ fontSize: "14px", color: "#F5454E", fontWeight: "500" }}>
                                                    <FaCalendarAlt color="#737791" className="me-1" />
                                                    Date
                                                </span>
                                                <div style={{ fontSize: "14px", color: "#737791", fontWeight: "400" }}>
                                                    {selectedTime} • {formatDateLong(date)}
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <span style={{ fontSize: "14px", color: "#F5454E", fontWeight: "500" }}>
                                                    <RiTimeZoneLine color="#737791" className="me-1" />
                                                    Time Zone
                                                </span>
                                                <div style={{ fontSize: "14px", color: "#737791", fontWeight: "400" }} className="mt-1">
                                                    India Standard Time
                                                </div>
                                            </div>

                                            <Form.Label className="mt-3 fw-medium">Do you need assistance?</Form.Label>
                                            <div style={{ fontSize: "14px", color: "#737791" }}>
                                                Schedule a 15 minute call with our team, and they'll guide you.
                                            </div>
                                            <div style={{ fontSize: "14px", color: "#737791", marginTop: "5px" }}>
                                                Can't find a time that works?
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: "14px",
                                                    color: "#737791",
                                                    marginTop: "5px",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "14px",
                                                        color: "#F5454E",
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    Contact us here
                                                </span>{" "}
                                                and we'll get back to you shortly.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <div
                                            className="d-flex justify-content-start align-items-end"
                                            style={{ color: "#737791", fontSize: "14px" }}
                                        >
                                            By Sharing Your Personal Data, You Agree To Our{" "}
                                            <div style={{ color: "#F5454E" }} className="ms-1">
                                                {" "}
                                                Privacy Policy.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100 w-md-50 p-4 bg-white">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h5 className="mb-0">Enter Details</h5>
                                        <Button
                                            variant="link"
                                            onClick={handleBackClick}
                                            style={{ color: "#F5454E", textDecoration: "none", fontSize: "14px" }}
                                        >
                                            Back
                                        </Button>
                                    </div>

                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
                                                        First Name<span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="firstName"
                                                        placeholder="Your First Name"
                                                        value={formData.firstName}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="py-2 rounded-pill"
                                                        style={{ fontSize: "14px" }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
                                                        Last Name<span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="lastName"
                                                        placeholder="Your Last Name"
                                                        value={formData.lastName}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="py-2 rounded-pill"
                                                        style={{ fontSize: "14px" }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
                                                        Email<span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        placeholder="jehoh13939@iesotica.com"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="py-2 rounded-pill"
                                                        style={{ fontSize: "14px" }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
                                                        Phone Number<span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="tel"
                                                        name="phone"
                                                        placeholder="+91 9669606500"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="py-2 rounded-pill"
                                                        style={{ fontSize: "14px" }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <div className="mb-3">
                                            {!showGuestInput ? (
                                                <button
                                                    type="button"
                                                    onClick={() => setShowGuestInput(true)}
                                                    style={{
                                                        borderRadius: "30px",
                                                        border: "none",
                                                        backgroundColor: "#F5454E",
                                                        color: "white",
                                                        fontSize: "14px",
                                                    }}
                                                    className="mb-0 px-4 py-2 mt-3"
                                                    disabled={guestEmails.length >= 10}
                                                >
                                                    {guestEmails.length > 0 ? `Add More Guests (${guestEmails.length}/10)` : "Add Guest"}
                                                </button>
                                            ) : (
                                                <div className="guest-email-container">
                                                    <div className="d-flex align-items-center">
                                                        <Form.Control
                                                            type="email"
                                                            placeholder="Enter guest email"
                                                            value={guestEmail}
                                                            onChange={(e) => setGuestEmail(e.target.value)}
                                                            className="py-2 rounded-pill me-2"
                                                            style={{ fontSize: "14px", flex: 1 }}
                                                        />
                                                        <Button
                                                            variant="danger"
                                                            onClick={() => {
                                                                if (guestEmail && guestEmails.length < 10) {
                                                                    setGuestEmails([...guestEmails, guestEmail])
                                                                    setGuestEmail("")
                                                                }
                                                                if (guestEmails.length >= 9) {
                                                                    setShowGuestInput(false)
                                                                }
                                                            }}
                                                            className="rounded-pill px-3 py-1"
                                                            style={{ backgroundColor: "#F5454E", fontSize: "14px" }}
                                                            disabled={!guestEmail || guestEmails.length >= 10}
                                                        >
                                                            Add
                                                        </Button>
                                                        <Button
                                                            variant="link"
                                                            onClick={() => setShowGuestInput(false)}
                                                            style={{ color: "#F5454E", fontSize: "14px" }}
                                                        >
                                                            Cancel
                                                        </Button>
                                                    </div>
                                                    <div className="mt-2">
                                                        {guestEmails.map((email, index) => (
                                                            <div key={index} className="d-flex align-items-center bg-light p-2 rounded mb-1">
                                                                <span style={{ fontSize: "14px", flex: 1 }}>{email}</span>
                                                                <IoMdClose
                                                                    onClick={() => {
                                                                        const updatedEmails = [...guestEmails]
                                                                        updatedEmails.splice(index, 1)
                                                                        setGuestEmails(updatedEmails)
                                                                    }}
                                                                    style={{ cursor: "pointer", color: "#F5454E" }}
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="text-muted mt-1" style={{ fontSize: "12px" }}>
                                                        {guestEmails.length}/10 guests added
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
                                                Location<span className="text-danger">*</span>
                                            </Form.Label>

                                            <div className="mb-3">
                                                <div className="d-flex align-items-center mb-2">
                                                    <Form.Check
                                                        type="radio"
                                                        id="radio-1"
                                                        name="location"
                                                        checked={selectedLocation === "Microsoft Teams"}
                                                        onChange={() => setSelectedLocation("Microsoft Teams")}
                                                        style={{ marginRight: "10px" }}
                                                    />
                                                    <BsMicrosoftTeams size={20} color="#4A52BC" style={{ marginRight: "8px" }} />
                                                    <label htmlFor="radio-1" style={{ color: "#737791", fontSize: "14px", marginBottom: 0 }}>
                                                        Microsoft Teams
                                                    </label>
                                                </div>

                                                <div className="d-flex align-items-center">
                                                    <Form.Check
                                                        type="radio"
                                                        id="radio-2"
                                                        name="location"
                                                        checked={selectedLocation === "Phone Call"}
                                                        onChange={() => setSelectedLocation("Phone Call")}
                                                        style={{ marginRight: "10px" }}
                                                    />
                                                    <FaPhone size={20} color="#F5454E" style={{ marginRight: "8px" }} />
                                                    <label htmlFor="radio-2" style={{ color: "#737791", fontSize: "14px", marginBottom: 0 }}>
                                                        Phone Call
                                                    </label>
                                                </div>

                                                {selectedLocation === "Phone Call" && (
                                                    <div className="mt-2">
                                                        <Form.Control
                                                            type="tel"
                                                            placeholder="Enter phone number"
                                                            value={phoneNumber}
                                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                                            className="py-2 rounded-pill"
                                                            style={{ fontSize: "14px" }}
                                                            required
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </Form.Group>

                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
                                                        Company<span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="company"
                                                        placeholder="Your Company"
                                                        value={formData.company}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="py-2 rounded-pill"
                                                        style={{ fontSize: "14px" }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
                                                        Job Title<span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="jobTitle"
                                                        placeholder="Your Job Title"
                                                        value={formData.jobTitle}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="py-2 rounded-pill"
                                                        style={{ fontSize: "14px" }}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>Type Of Service Needed</Form.Label>
                                            <div>
                                                <Form.Check
                                                    type="checkbox"
                                                    id="translation"
                                                    label="Translation and adaptation"
                                                    value="Translation and adaptation"
                                                    checked={formData.serviceNeeded.includes("Translation and adaptation")}
                                                    onChange={handleInputChange}
                                                    className="mb-2"
                                                    style={{ fontSize: "14px", color: "#737791" }}
                                                />
                                                <Form.Check
                                                    type="checkbox"
                                                    id="interpreting"
                                                    label="Interpreting"
                                                    value="Interpreting"
                                                    checked={formData.serviceNeeded.includes("Interpreting")}
                                                    onChange={handleInputChange}
                                                    className="mb-2"
                                                    style={{ fontSize: "14px", color: "#737791" }}
                                                />
                                                <Form.Check
                                                    type="checkbox"
                                                    id="digital-marketing"
                                                    label="Digital Marketing"
                                                    value="Digital Marketing"
                                                    checked={formData.serviceNeeded.includes("Digital Marketing")}
                                                    onChange={handleInputChange}
                                                    style={{ fontSize: "14px", color: "#737791" }}
                                                />
                                            </div>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>Pick A Service (If Known)</Form.Label>

                                            <Form.Control
                                                as="select"
                                                name="specificService"
                                                value={formData.specificService}
                                                onChange={handleInputChange}
                                                className="py-2 rounded-pill"
                                                style={{ fontSize: "14px" }}
                                            >
                                                <option value="">Select a Service</option>
                                                <option value="Content Writing Services">Content Writing Services</option>
                                                <option value="Language Studio Services">Language Studio Services</option>
                                                <option value="DTP Services">DTP Services</option>
                                                <option value="360 Degree Language Solutions">360 Degree Language Solutions</option>
                                                <option value="Localization Services">Localization Services</option>
                                                <option value="Project Services">Project Services</option>
                                                <option value="Proof Reading Services">Proof Reading Services</option>
                                                <option value="Interpretation Services">Interpretation Services</option>
                                                <option value="Audio Visual Services">Audio Visual Services</option>
                                                <option value="Translation Services">Translation Services</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
                                                Number Of Employees<span className="text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                as="select"
                                                name="numberOfEmployees"
                                                value={formData.numberOfEmployees}
                                                onChange={handleInputChange}
                                                required
                                                className="py-2 rounded-pill"
                                                style={{ fontSize: "14px" }}
                                            >
                                                <option value="">Select Employees</option>
                                                <option value="1-10">1-10</option>
                                                <option value="11-50">11-50</option>
                                                <option value="51-200">51-200</option>
                                                <option value="201-500">201-500</option>
                                                <option value="500+">500+</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ fontSize: "14px", fontWeight: "600" }}>
                                                How Can We Help You?<span className="text-danger">*</span>
                                            </Form.Label>

                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                name="helpDescription"
                                                style={{ fontSize: "14px" }}
                                                value={formData.helpDescription}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </Form.Group>

                                        {error && (
                                            <div className="alert alert-danger" style={{ fontSize: "14px" }}>
                                                {error}
                                            </div>
                                        )}

                                        <div
                                            style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
                                        >
                                            <div className="mb-3" style={{ fontSize: "14px", color: "#737791" }}>
                                                By proceeding, you confirm that you have read and agree to our{" "}
                                                <span style={{ color: "#F5454E", fontWeight: "bold" }}>Terms of Service</span> and{" "}
                                                <span style={{ color: "#F5454E", fontWeight: "bold" }}>Privacy Policy</span>.
                                            </div>
                                            <button
                                                type="submit"
                                                style={{
                                                    borderRadius: "30px",
                                                    border: "none",
                                                    backgroundColor: "#F5454E",
                                                    color: "white",
                                                    fontSize: "14px",
                                                    fontWeight: "500",
                                                }}
                                                className="mb-0 px-4 py-2 mt-3"
                                                disabled={isLoading}
                                            >
                                                {isLoading ? "Submitting..." : "Schedule Consultation"}
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            </>
                        )}
                    </Col>
                </Row>
            </Container>

            <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "green", fontWeight: "500" }}>Success!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ color: "green", fontWeight: "500" }}>
                        Your consultation has been scheduled successfully!<br />

                    </p>

                    <p>
                        Our team will contact you shortly to confirm the details.<br />
                        Thank you for choosing our services, we look forward to speaking with you!
                    </p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => { setShowSuccessModal(false); navigate("/") }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <OurClients />
            <FooterMenu />
        </>
    )
}

export default StartScheduling