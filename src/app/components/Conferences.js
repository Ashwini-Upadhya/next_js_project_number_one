import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import Rectengle from '../../assets/Images/Conferences/Rectengle.png'

const SliderComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="my-3 d-flex flex-column justify-content-center">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="w-100 mt-5"
        style={{ maxWidth: "1400px" }}
        controls={false}
        indicators={false}
        interval={1500}
      >

        {/* Slide 1 */}
        <Carousel.Item>
          <div
            className="d-flex align-items-center justify-content-center align-items-center text-center text-white"
            style={{
              height: "350px",
              backgroundImage: `url(${Rectengle})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div style={{ position: "relative" }}>
              <h1 className="fs-1 fw-bold">Conferences Your Business</h1>
              <p style={{ padding: '0px 50px', marginTop: '20px', marginBottom: "40px", fontSize: "18px" }} className="" >Our solutions empower your business to expand and succeed.</p>
              <span
                className="d-inline-flex heroBannerBtn px-4 py-2 mb-3"
                style={{
                  backgroundColor: "#CAD3DB60",
                  borderRadius: '40px',
                  border: '1px solid rgba(255, 255, 255, 0.63)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: "16px",
                  fontWeight: "500",
                  cursor: 'pointer'
                }}
              >
                Read More
              </span>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div
            className="d-flex align-items-center justify-content-center align-items-center text-center text-white"
            style={{
              height: "350px",
              backgroundImage: `url(${Rectengle})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div style={{ position: "relative" }}>
              <h1>AI Revolution</h1>
              <p style={{ padding: '0px 50px', marginTop: '20px', marginBottom: "40px", fontSize: "18px" }} className="" >Unleash the power of AI to enhance your business operations.</p>
              <span
                className="d-inline-flex heroBannerBtn px-4 py-2 mb-3"
                style={{
                  backgroundColor: "#CAD3DB60",
                  borderRadius: '40px',
                  border: '1px solid rgba(255, 255, 255, 0.63)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: "16px",
                  fontWeight: "500",
                  cursor: 'pointer'
                }}
                onClick={() => setShowQuoteModal(true)}
              >
                Read More
              </span>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div
            className="d-flex align-items-center justify-content-center align-items-center text-center text-white"
            style={{
              height: "350px",
              backgroundImage: `url(${Rectengle})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div style={{ position: "relative" }}>
              <h1 className="fs-1 fw-bold">Conferences Your Business</h1>
              <p style={{ padding: '0px 50px', marginTop: '20px', marginBottom: "40px", fontSize: "18px" }} className="" >Our solutions empower your business to expand and succeed.</p>
              <span
                className="d-inline-flex heroBannerBtn px-4 py-2 mb-3"
                style={{
                  backgroundColor: "#CAD3DB60",
                  borderRadius: '40px',
                  border: '1px solid rgba(255, 255, 255, 0.63)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: "16px",
                  fontWeight: "500",
                  cursor: 'pointer'
                }}
              >
                Read More
              </span>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 4 */}
        <Carousel.Item>
          <div
            className="d-flex align-items-center justify-content-center text-center text-white"
            style={{
              height: "350px",
              backgroundImage: `url(${Rectengle})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div style={{ position: "relative" }}>
              <h1>Achieve Success</h1>
              <p style={{ padding: '0px 50px', marginTop: '20px', marginBottom: "40px", fontSize: "18px" }} className="" >Take your business to new heights with our expert solutions.</p>
              <span
                className="d-inline-flex heroBannerBtn px-4 py-2 mb-3"
                style={{
                  backgroundColor: "#CAD3DB60",
                  borderRadius: '40px',
                  border: '1px solid rgba(255, 255, 255, 0.63)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: "16px",
                  fontWeight: "500",
                  cursor: 'pointer'
                }}
                onClick={() => setShowQuoteModal(true)}
              >
                Read More
              </span>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="d-flex justify-content-center align-items-center mt-3 position-relative" style={{ top: "-75px" }}>
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "1px",
            marginTop: "12px",
            backgroundColor: "white",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        ></div>

        {[0, 1, 2, 3].map((btnIndex) => (
          <span
            className="mt-4"
            key={btnIndex}
            onClick={() => setIndex(btnIndex)}
            style={{
              width: "11px",
              height: "11px",
              margin: "0 45px",
              backgroundColor: index === btnIndex ? "#fff" : "#F5454E",
              borderRadius: "50%",
              display: "inline-block",
              cursor: "pointer",
              transition: "0.3s",
              border: index === btnIndex ? "0.2px solid #fff" : "#F5454E",
              position: "relative",
              zIndex: 3,
            }}
          ></span>
        ))}
      </div>
    </Container>
  );
};

export default SliderComponent;
