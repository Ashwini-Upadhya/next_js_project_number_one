import React from 'react'
import Marquee from "react-fast-marquee";
import Wallmart from '../../assets/Images/OurClients/walmart.png'
import Aztec from '../../assets/Images/OurClients/aztec.png'
import Cisco from '../../assets/Images/OurClients/cisco.png'
import Cocacola from '../../assets/Images/OurClients/cocacola.png'
import Everyday from '../../assets/Images/OurClients/everyday.png'
import Gamescast from '../../assets/Images/OurClients/gamescast.png'
import { Container } from 'react-bootstrap';

const AdvertiseImages = () => {

    const images = [
        Wallmart, Aztec, Cisco, Cocacola, Everyday, Gamescast
    ]

    const MyComponent = () => {
        return (
            <div style={{ display: 'flex' }}>
                {
                    images.map((data, index) => {
                        return (
                            <img key={index} src={data} alt={`client-${index}`} style={{ margin: '0 40px' }} />
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className='' style={{ backgroundColor: "#fff", marginTop: '6rem', marginBottom: '6rem' }}>
            <div className="marquee-container">
                <Marquee direction="left" speed={200}>
                    <MyComponent />
                </Marquee>
            </div>
        </div>
    )
}

export default AdvertiseImages
