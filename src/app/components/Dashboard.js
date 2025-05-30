import React, { useEffect } from 'react'
import MyNavbar from '../Navbar/MyNavbar'
import Banner from '../Banner/Banner'
import "../../App.css"
// import AboutUs from '../AboutUs/AboutUs'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import OurServices from '../OurServices/OurServices'
import Conferences from '../conferences/Conferences'
import OurClients from '../OurClients/OurClients'
import ClintTestimonials from '../Clienttestimonials/ClintTestimonials'
// import GlobalConsumer from '../GlobalConsumer/GlobalConsumer'
import WeHelp from '../Wehelp/WeHelp'
// import DeliveryPlatform from '../Deliveryplatform/DeliveryPlatform'
import LanguagePlatform from '../LanguagePlatform/LanguagePlatform'
import CertificationAndMembership from '../CertificationAndMembership/CertificaitonAndMembership'
import FloatingMenu from '../FloatingMenu/FloatingMenu'
import FooterMenu from '../FooterMenu/FooterMenu'
import Timeline from '../Timeline/Timeline'
import Shedule from '../SchaduleAConsultation/Shedule'
import OurExpertise from '../OurExpertise/OurExpertise'

const Dashboard = () => {
    useEffect(() => {
        document.title = "Translation Services in Mumbai,India|Shakti Enterprise";
        const metaDescription = document.createElement('meta');
        metaDescription.name = "description";
        metaDescription.content = "Translation Services in Mumbai Delhi Bangalore Hyderabad Pune: Shakti Enterprise provides professional document translation services, website translation services for all indian and foriegn languages.";
        document.head.appendChild(metaDescription);
        
        return () => {
            // Clean up the meta tag when component unmounts
            // document.title = ''
            document.head.removeChild(metaDescription);
        };
    }, []);
    return (
        <div style={{}}>
            {/* FloatingMenu */}
            <FloatingMenu />
            {/* navigation bar */}
            <MyNavbar />
            {/* banner */}
            <Banner />
            {/* timeline */}
            <Timeline />
            {/* About us */}
            {/* <AboutUs /> */}
            {/* Services Section */}
            <OurExpertise />
            {/* Shadule A Consultation */}
            <Shedule />
            {/* Deliveryplatform */}
            <LanguagePlatform />
            {/* conferences */}
            <Conferences />
            {/* Why Choose Us */}
            <WhyChooseUs />
            {/* Our expertise */}
            {/* <OurExpertise /> */}
            {/* GlobalConsumer */}
            {/* <GlobalConsumer /> */}
            {/* Clint testimonials */}
            <ClintTestimonials />
            {/* we help */}
            <WeHelp />
            {/* Deliveryplatform */}
            {/* <DeliveryPlatform /> */}
            {/* Our clients */}
            <OurClients />
            {/* Our services */}
            <OurServices />
            {/* certification and membership */}
            <CertificationAndMembership />
            {/* footer menu */}
            <FooterMenu />
        </div>
    )
}

export default Dashboard