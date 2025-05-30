import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import {
  Container
} from 'react-bootstrap';

// Grayscale images
import Wallmart from '../../assets/Images/OurClients/walmart.png'
import Aztec from '../../assets/Images/OurClients/aztec.png'
import Cisco from '../../assets/Images/OurClients/cisco.png'
import Cocacola from '../../assets/Images/OurClients/cocacola.png'
import Everyday from '../../assets/Images/OurClients/everyday.png'
import Gamescast from '../../assets/Images/OurClients/gamescast.png'
import HPI from '../../assets/Images/OurClients/hp.png'
import Igneus from '../../assets/Images/OurClients/igneus.png'
import Natural from '../../assets/Images/OurClients/natural.png'
import Shell from '../../assets/Images/OurClients/shell.png'
import Spinworkx from '../../assets/Images/OurClients/spinworkx.png'
import Vodafone from '../../assets/Images/OurClients/vadafone.png'

// Color images
import WallmartColor from '../../assets/Images/OurClients/walmartColor.png'
import AztecColor from '../../assets/Images/OurClients/aztecColor.png'
import CiscoColor from '../../assets/Images/OurClients/ciscoColor.png'
import CocacolaColor from '../../assets/Images/OurClients/cocacolaColor.png'
import EverydayColor from '../../assets/Images/OurClients/everydayColor.png'
import GamescastColor from '../../assets/Images/OurClients/gamescastColor.png'
import HPIColor from '../../assets/Images/OurClients/hpColor.png'
import IgneusColor from '../../assets/Images/OurClients/igneusColor.png'
import NaturalColor from '../../assets/Images/OurClients/naturalColor.png'
import ShellColor from '../../assets/Images/OurClients/shellColor.png'
import SpinworkxColor from '../../assets/Images/OurClients/spinworkxColor.png'
import VodafoneColor from '../../assets/Images/OurClients/vadafoneColor.png'

const OurClients = () => {

  const images = [
    { gray: Wallmart, color: WallmartColor },
    { gray: Aztec, color: AztecColor },
    { gray: Cisco, color: CiscoColor },
    { gray: Cocacola, color: CocacolaColor },
    { gray: Everyday, color: EverydayColor },
    { gray: Gamescast, color: GamescastColor },
    { gray: HPI, color: HPIColor },
    { gray: Igneus, color: IgneusColor },
    { gray: Natural, color: NaturalColor },
    { gray: Shell, color: ShellColor },
    { gray: Spinworkx, color: SpinworkxColor },
    { gray: Vodafone, color: VodafoneColor },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  const MyComponent = () => {
    return (
      <div style={{ display: 'flex' }}>
        {
          images.map((img, index) => (
            <img
              key={index}
              src={hoverIndex === index ? img.color : img.gray}
              alt={`client-${index}`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              style={{ margin: '0 20px', height: '100px', transition: '0.3s ease' }}
            />
          ))
        }
      </div>
    );
  };

  return (
    <Container style={{ backgroundColor: "#fff", marginTop: '1rem', marginBottom: '6rem' }}>
      <div className="text-uppercase fw-bold text-center" style={{ color: "#F5454E", fontSize: "18px" }}>
        Our Clients
      </div>
      <div className="text-black fw-bold text-center" style={{ fontSize: "30px" }}>
        Our Esteemed Clients
      </div>
      <div className="marquee-container">
        <Marquee direction="left" speed={150}>
          <MyComponent />
        </Marquee>
      </div>
    </Container>
  );
};

export default OurClients;
