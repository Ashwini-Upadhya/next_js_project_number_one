import React from 'react'
import Marquee from "react-fast-marquee";
import Image1 from '../../assets/Images/CertificationAndMembership/image1.png';
import Image2 from '../../assets/Images/CertificationAndMembership/image2.png';
import Image3 from '../../assets/Images/CertificationAndMembership/image3.png';
import Image4 from '../../assets/Images/CertificationAndMembership/image4.png';
import Image5 from '../../assets/Images/CertificationAndMembership/image5.png';
import Image6 from '../../assets/Images/CertificationAndMembership/image6.png';

import { Container } from 'react-bootstrap';

const CertificationAndMembership = () => {

  const imageData = [
    { src: Image1, text: 'ISO 9001:2015 Management certification.' },
    { src: Image2, text: 'DIN EN 15308 Translation certification.' },
    { src: Image3, text: 'CRISIL Credit Rating Certificate' },
    { src: Image4, text: 'Corporate Member of American Translators Association.' },
    { src: Image5, text: 'IFT (International Federation of Translators)' },
    { src: Image6, text: 'ITA (Indian Translators Association)' },
    { src: Image1, text: 'ISO 9001:2015 Management certification.' },
    { src: Image2, text: 'DIN EN 15308 Translation certification.' },
    { src: Image3, text: 'CRISIL Credit Rating Certificate' }
  ];

  const MyComponent = () => {
    return (
      <div style={{ display: 'flex' }} className='my-5'>
        {
          imageData.map((item, index) => (
            <div key={index} className='mx-3 d-flex flex-column align-items-center'>
              <div style={{ border: "1px solid #C3CDDD", borderRadius: "8px", padding: "10px" }}>
                <img src={item.src} alt={`client-${index}`} style={{ height: "80px", width: "150px" }} />
              </div>
              <p style={{ fontSize: "15px", marginTop: "8px", textAlign: "center", fontWeight: "500" }}>
                {item.text}
              </p>
            </div>
          ))
        }
      </div>
    )
  }

  return (
    <Container className='mt-0'>
      <div className="text-uppercase fw-bold text-center" style={{ color: "#F5454E", fontSize: "20px" }}>
        Digital Marketing Services
      </div>
      <div className="text-black fw-bold text-center mt-1" style={{ fontSize: "30px" }}>
        Certificaiton & Membership
      </div>
      <div className="marquee-container">
        <Marquee direction="left" speed={200}>
          <MyComponent />
        </Marquee>
      </div>
    </Container>
  )
}

export default CertificationAndMembership;
