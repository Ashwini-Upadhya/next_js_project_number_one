import React from 'react';
import { Card, Container, Row, Col, CardTitle, CardText } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const SingleServices = () => {
  const location = useLocation();

  return (
    <>
      <Container className='mt-3 me-5'>
        {location.pathname === '/Services/translation-type' && (
          <div className="translation-service">
            <Container className='mt-3'>
            <p className='fs-5'>Content marketing today is all about quality writing. This means engaging your customers with deep, rich ideas that help them believe your product or service is the answer to all their problems. It has meaningful interactions that start with your outbound messaging and end with your inbound sales.</p>
            <p className='fs-5'>Quality content becomes a platform for generating additional traffic to your business. So it is a must for every entrepreneur to keep their websites, blogs, and articles catchy and informative with engaging content. Well-written content allows the search engines to index your website and also the blogs that are posted. This is a quick go for your brand!</p>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle className='fs-4' style={{color:'#F5454E'}}>What should you know about Content Writing?</CardTitle>
                <CardText className='fs-5'>
                Content writing is a type of online writing, linked to web marketing campaigns. This means creating data on the websites that are designed to sell a specific product. Read through some content writing stats to understand its importance.
                <ul>
                <li>32% of marketers believe that visual images are an important form of content for every businesses.</li>
                <li> Content marketing gets three times more leads as compared to paid search advertising. </li>
                <li>LinkedIn is an effective social media platform for delivering content and securing audience engagement.</li>
                <li> 47% of buyers viewed 3-5 pieces of content before engaging with a sales rep. (Source: HubSpot)</li>
                </ul>
                </CardText>
              </Card.Body>
            </Card>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle  className='fs-4' style={{color:'#F5454E'}}>Who Is A Website Content Writer?</CardTitle>
                <CardText className='fs-5'>
                A web content writer is an individual who specializes in providing relevant content for websites. Every website has a specific target audience and requires relevant content to attract business. Content should contain keywords aimed towards improving the website's SEO. One who is specialized in this and knows how to craft such type of data is a good and reliable website content writer.               
                </CardText>
              </Card.Body>
            </Card>

            </Container>
             </div>
        )}

        {location.pathname === '/Services/content-writing-services' && (
          <div className="content-writing-services">
            <Container className='mt-3'>
            <p className='fs-5'>Content marketing today is all about quality writing. This means engaging your customers with deep, rich ideas that help them believe your product or service is the answer to all their problems. It has meaningful interactions that start with your outbound messaging and end with your inbound sales.</p>
            <p className='fs-5'>Quality content becomes a platform for generating additional traffic to your business. So it is a must for every entrepreneur to keep their websites, blogs, and articles catchy and informative with engaging content. Well-written content allows the search engines to index your website and also the blogs that are posted. This is a quick go for your brand!</p>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle className='fs-4' style={{color:'#F5454E'}}>What should you know about Content Writing?</CardTitle>
                <CardText className='fs-5'>
                Content writing is a type of online writing, linked to web marketing campaigns. This means creating data on the websites that are designed to sell a specific product. Read through some content writing stats to understand its importance.
                <ul>
                <li>32% of marketers believe that visual images are an important form of content for every businesses.</li>
                <li> Content marketing gets three times more leads as compared to paid search advertising. </li>
                <li>LinkedIn is an effective social media platform for delivering content and securing audience engagement.</li>
                <li> 47% of buyers viewed 3-5 pieces of content before engaging with a sales rep. (Source: HubSpot)</li>
                </ul>
                </CardText>
              </Card.Body>
            </Card>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle  className='fs-4' style={{color:'#F5454E'}}>Who Is A Website Content Writer?</CardTitle>
                <CardText className='fs-5'>
                A web content writer is an individual who specializes in providing relevant content for websites. Every website has a specific target audience and requires relevant content to attract business. Content should contain keywords aimed towards improving the website's SEO. One who is specialized in this and knows how to craft such type of data is a good and reliable website content writer.               
                </CardText>
              </Card.Body>
            </Card>

            </Container>
          </div>
        )}

        {location.pathname === '/Services/language-studio-services' && (
          <div className="language-studio-services">
            <Container className='mt-3'>
            <p className='fs-5'>Content marketing today is all about quality writing. This means engaging your customers with deep, rich ideas that help them believe your product or service is the answer to all their problems. It has meaningful interactions that start with your outbound messaging and end with your inbound sales.</p>
            <p className='fs-5'>Quality content becomes a platform for generating additional traffic to your business. So it is a must for every entrepreneur to keep their websites, blogs, and articles catchy and informative with engaging content. Well-written content allows the search engines to index your website and also the blogs that are posted. This is a quick go for your brand!</p>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle className='fs-4' style={{color:'#F5454E'}}>What should you know about Content Writing?</CardTitle>
                <CardText className='fs-5'>
                Content writing is a type of online writing, linked to web marketing campaigns. This means creating data on the websites that are designed to sell a specific product. Read through some content writing stats to understand its importance.
                <ul>
                <li>32% of marketers believe that visual images are an important form of content for every businesses.</li>
                <li> Content marketing gets three times more leads as compared to paid search advertising. </li>
                <li>LinkedIn is an effective social media platform for delivering content and securing audience engagement.</li>
                <li> 47% of buyers viewed 3-5 pieces of content before engaging with a sales rep. (Source: HubSpot)</li>
                </ul>
                </CardText>
              </Card.Body>
            </Card>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle  className='fs-4' style={{color:'#F5454E'}}>Who Is A Website Content Writer?</CardTitle>
                <CardText className='fs-5'>
                A web content writer is an individual who specializes in providing relevant content for websites. Every website has a specific target audience and requires relevant content to attract business. Content should contain keywords aimed towards improving the website's SEO. One who is specialized in this and knows how to craft such type of data is a good and reliable website content writer.               
                </CardText>
              </Card.Body>
            </Card>

            </Container>
          </div>
        )}

{location.pathname === '/Services/dtp-services' && (
          <div className="dtp-services">
             <Container className='mt-3'>
            <p className='fs-5'>Content marketing today is all about quality writing. This means engaging your customers with deep, rich ideas that help them believe your product or service is the answer to all their problems. It has meaningful interactions that start with your outbound messaging and end with your inbound sales.</p>
            <p className='fs-5'>Quality content becomes a platform for generating additional traffic to your business. So it is a must for every entrepreneur to keep their websites, blogs, and articles catchy and informative with engaging content. Well-written content allows the search engines to index your website and also the blogs that are posted. This is a quick go for your brand!</p>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle className='fs-4' style={{color:'#F5454E'}}>What should you know about Content Writing?</CardTitle>
                <CardText className='fs-5'>
                Content writing is a type of online writing, linked to web marketing campaigns. This means creating data on the websites that are designed to sell a specific product. Read through some content writing stats to understand its importance.
                <ul>
                <li>32% of marketers believe that visual images are an important form of content for every businesses.</li>
                <li> Content marketing gets three times more leads as compared to paid search advertising. </li>
                <li>LinkedIn is an effective social media platform for delivering content and securing audience engagement.</li>
                <li> 47% of buyers viewed 3-5 pieces of content before engaging with a sales rep. (Source: HubSpot)</li>
                </ul>
                </CardText>
              </Card.Body>
            </Card>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle  className='fs-4' style={{color:'#F5454E'}}>Who Is A Website Content Writer?</CardTitle>
                <CardText className='fs-5'>
                A web content writer is an individual who specializes in providing relevant content for websites. Every website has a specific target audience and requires relevant content to attract business. Content should contain keywords aimed towards improving the website's SEO. One who is specialized in this and knows how to craft such type of data is a good and reliable website content writer.               
                </CardText>
              </Card.Body>
            </Card>

            </Container>
          </div>
        )}

{location.pathname === '/Services/360-degree-language-solution' && (
          <div className="360-degree-language-solution">
             <Container className='mt-3'>
            <p className='fs-5'>Content marketing today is all about quality writing. This means engaging your customers with deep, rich ideas that help them believe your product or service is the answer to all their problems. It has meaningful interactions that start with your outbound messaging and end with your inbound sales.</p>
            <p className='fs-5'>Quality content becomes a platform for generating additional traffic to your business. So it is a must for every entrepreneur to keep their websites, blogs, and articles catchy and informative with engaging content. Well-written content allows the search engines to index your website and also the blogs that are posted. This is a quick go for your brand!</p>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle className='fs-4' style={{color:'#F5454E'}}>What should you know about Content Writing?</CardTitle>
                <CardText className='fs-5'>
                Content writing is a type of online writing, linked to web marketing campaigns. This means creating data on the websites that are designed to sell a specific product. Read through some content writing stats to understand its importance.
                <ul>
                <li>32% of marketers believe that visual images are an important form of content for every businesses.</li>
                <li> Content marketing gets three times more leads as compared to paid search advertising. </li>
                <li>LinkedIn is an effective social media platform for delivering content and securing audience engagement.</li>
                <li> 47% of buyers viewed 3-5 pieces of content before engaging with a sales rep. (Source: HubSpot)</li>
                </ul>
                </CardText>
              </Card.Body>
            </Card>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle  className='fs-4' style={{color:'#F5454E'}}>Who Is A Website Content Writer?</CardTitle>
                <CardText className='fs-5'>
                A web content writer is an individual who specializes in providing relevant content for websites. Every website has a specific target audience and requires relevant content to attract business. Content should contain keywords aimed towards improving the website's SEO. One who is specialized in this and knows how to craft such type of data is a good and reliable website content writer.               
                </CardText>
              </Card.Body>
            </Card>

            </Container>
          </div>
        )}

{location.pathname === '/Services/localization-services' && (
          <div className="localization-services">
           <Container className='mt-3'>
            <p className='fs-5'>Content marketing today is all about quality writing. This means engaging your customers with deep, rich ideas that help them believe your product or service is the answer to all their problems. It has meaningful interactions that start with your outbound messaging and end with your inbound sales.</p>
            <p className='fs-5'>Quality content becomes a platform for generating additional traffic to your business. So it is a must for every entrepreneur to keep their websites, blogs, and articles catchy and informative with engaging content. Well-written content allows the search engines to index your website and also the blogs that are posted. This is a quick go for your brand!</p>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle className='fs-4' style={{color:'#F5454E'}}>What should you know about Content Writing?</CardTitle>
                <CardText className='fs-5'>
                Content writing is a type of online writing, linked to web marketing campaigns. This means creating data on the websites that are designed to sell a specific product. Read through some content writing stats to understand its importance.
                <ul>
                <li>32% of marketers believe that visual images are an important form of content for every businesses.</li>
                <li> Content marketing gets three times more leads as compared to paid search advertising. </li>
                <li>LinkedIn is an effective social media platform for delivering content and securing audience engagement.</li>
                <li> 47% of buyers viewed 3-5 pieces of content before engaging with a sales rep. (Source: HubSpot)</li>
                </ul>
                </CardText>
              </Card.Body>
            </Card>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle  className='fs-4' style={{color:'#F5454E'}}>Who Is A Website Content Writer?</CardTitle>
                <CardText className='fs-5'>
                A web content writer is an individual who specializes in providing relevant content for websites. Every website has a specific target audience and requires relevant content to attract business. Content should contain keywords aimed towards improving the website's SEO. One who is specialized in this and knows how to craft such type of data is a good and reliable website content writer.               
                </CardText>
              </Card.Body>
            </Card>

            </Container>
          </div>
        )}

{location.pathname === '/Services/project-services' && (
          <div className="project-services">
             <Container className='mt-3'>
            <p className='fs-5'>Content marketing today is all about quality writing. This means engaging your customers with deep, rich ideas that help them believe your product or service is the answer to all their problems. It has meaningful interactions that start with your outbound messaging and end with your inbound sales.</p>
            <p className='fs-5'>Quality content becomes a platform for generating additional traffic to your business. So it is a must for every entrepreneur to keep their websites, blogs, and articles catchy and informative with engaging content. Well-written content allows the search engines to index your website and also the blogs that are posted. This is a quick go for your brand!</p>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle className='fs-4' style={{color:'#F5454E'}}>What should you know about Content Writing?</CardTitle>
                <CardText className='fs-5'>
                Content writing is a type of online writing, linked to web marketing campaigns. This means creating data on the websites that are designed to sell a specific product. Read through some content writing stats to understand its importance.
                <ul>
                <li>32% of marketers believe that visual images are an important form of content for every businesses.</li>
                <li> Content marketing gets three times more leads as compared to paid search advertising. </li>
                <li>LinkedIn is an effective social media platform for delivering content and securing audience engagement.</li>
                <li> 47% of buyers viewed 3-5 pieces of content before engaging with a sales rep. (Source: HubSpot)</li>
                </ul>
                </CardText>
              </Card.Body>
            </Card>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle  className='fs-4' style={{color:'#F5454E'}}>Who Is A Website Content Writer?</CardTitle>
                <CardText className='fs-5'>
                A web content writer is an individual who specializes in providing relevant content for websites. Every website has a specific target audience and requires relevant content to attract business. Content should contain keywords aimed towards improving the website's SEO. One who is specialized in this and knows how to craft such type of data is a good and reliable website content writer.               
                </CardText>
              </Card.Body>
            </Card>

            </Container>
          </div>
        )}

{location.pathname === '/Services/proof-reading-services' && (
          <div className="proof-reading-services">
           <Container className='mt-3'>
            <p className='fs-5'>Content marketing today is all about quality writing. This means engaging your customers with deep, rich ideas that help them believe your product or service is the answer to all their problems. It has meaningful interactions that start with your outbound messaging and end with your inbound sales.</p>
            <p className='fs-5'>Quality content becomes a platform for generating additional traffic to your business. So it is a must for every entrepreneur to keep their websites, blogs, and articles catchy and informative with engaging content. Well-written content allows the search engines to index your website and also the blogs that are posted. This is a quick go for your brand!</p>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle className='fs-4' style={{color:'#F5454E'}}>What should you know about Content Writing?</CardTitle>
                <CardText className='fs-5'>
                Content writing is a type of online writing, linked to web marketing campaigns. This means creating data on the websites that are designed to sell a specific product. Read through some content writing stats to understand its importance.
                <ul>
                <li>32% of marketers believe that visual images are an important form of content for every businesses.</li>
                <li> Content marketing gets three times more leads as compared to paid search advertising. </li>
                <li>LinkedIn is an effective social media platform for delivering content and securing audience engagement.</li>
                <li> 47% of buyers viewed 3-5 pieces of content before engaging with a sales rep. (Source: HubSpot)</li>
                </ul>
                </CardText>
              </Card.Body>
            </Card>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle  className='fs-4' style={{color:'#F5454E'}}>Who Is A Website Content Writer?</CardTitle>
                <CardText className='fs-5'>
                A web content writer is an individual who specializes in providing relevant content for websites. Every website has a specific target audience and requires relevant content to attract business. Content should contain keywords aimed towards improving the website's SEO. One who is specialized in this and knows how to craft such type of data is a good and reliable website content writer.               
                </CardText>
              </Card.Body>
            </Card>

            </Container>
          </div>
        )}

{location.pathname === '/Services/interpretation-services' && (
          <div className="interpretation-services">
            <Container className='mt-3'>
            <p className='fs-5'>Content marketing today is all about quality writing. This means engaging your customers with deep, rich ideas that help them believe your product or service is the answer to all their problems. It has meaningful interactions that start with your outbound messaging and end with your inbound sales.</p>
            <p className='fs-5'>Quality content becomes a platform for generating additional traffic to your business. So it is a must for every entrepreneur to keep their websites, blogs, and articles catchy and informative with engaging content. Well-written content allows the search engines to index your website and also the blogs that are posted. This is a quick go for your brand!</p>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle className='fs-4' style={{color:'#F5454E'}}>What should you know about Content Writing?</CardTitle>
                <CardText className='fs-5'>
                Content writing is a type of online writing, linked to web marketing campaigns. This means creating data on the websites that are designed to sell a specific product. Read through some content writing stats to understand its importance.
                <ul>
                <li>32% of marketers believe that visual images are an important form of content for every businesses.</li>
                <li> Content marketing gets three times more leads as compared to paid search advertising. </li>
                <li>LinkedIn is an effective social media platform for delivering content and securing audience engagement.</li>
                <li> 47% of buyers viewed 3-5 pieces of content before engaging with a sales rep. (Source: HubSpot)</li>
                </ul>
                </CardText>
              </Card.Body>
            </Card>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle  className='fs-4' style={{color:'#F5454E'}}>Who Is A Website Content Writer?</CardTitle>
                <CardText className='fs-5'>
                A web content writer is an individual who specializes in providing relevant content for websites. Every website has a specific target audience and requires relevant content to attract business. Content should contain keywords aimed towards improving the website's SEO. One who is specialized in this and knows how to craft such type of data is a good and reliable website content writer.               
                </CardText>
              </Card.Body>
            </Card>

            </Container>
          </div>
        )}

{location.pathname === '/Services/audio-visual-services' && (
          <div className="audio-visual-services">
             <Container className='mt-3'>
            <p className='fs-5'>Content marketing today is all about quality writing. This means engaging your customers with deep, rich ideas that help them believe your product or service is the answer to all their problems. It has meaningful interactions that start with your outbound messaging and end with your inbound sales.</p>
            <p className='fs-5'>Quality content becomes a platform for generating additional traffic to your business. So it is a must for every entrepreneur to keep their websites, blogs, and articles catchy and informative with engaging content. Well-written content allows the search engines to index your website and also the blogs that are posted. This is a quick go for your brand!</p>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle className='fs-4' style={{color:'#F5454E'}}>What should you know about Content Writing?</CardTitle>
                <CardText className='fs-5'>
                Content writing is a type of online writing, linked to web marketing campaigns. This means creating data on the websites that are designed to sell a specific product. Read through some content writing stats to understand its importance.
                <ul>
                <li>32% of marketers believe that visual images are an important form of content for every businesses.</li>
                <li> Content marketing gets three times more leads as compared to paid search advertising. </li>
                <li>LinkedIn is an effective social media platform for delivering content and securing audience engagement.</li>
                <li> 47% of buyers viewed 3-5 pieces of content before engaging with a sales rep. (Source: HubSpot)</li>
                </ul>
                </CardText>
              </Card.Body>
            </Card>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle  className='fs-4' style={{color:'#F5454E'}}>Who Is A Website Content Writer?</CardTitle>
                <CardText className='fs-5'>
                A web content writer is an individual who specializes in providing relevant content for websites. Every website has a specific target audience and requires relevant content to attract business. Content should contain keywords aimed towards improving the website's SEO. One who is specialized in this and knows how to craft such type of data is a good and reliable website content writer.               
                </CardText>
              </Card.Body>
            </Card>

            </Container>
          </div>
        )}

{location.pathname === '/Services/translation-services' && (
          <div className="translation-services">
              <Container className='mt-3'>
            <p className='fs-5'>Content marketing today is all about quality writing. This means engaging your customers with deep, rich ideas that help them believe your product or service is the answer to all their problems. It has meaningful interactions that start with your outbound messaging and end with your inbound sales.</p>
            <p className='fs-5'>Quality content becomes a platform for generating additional traffic to your business. So it is a must for every entrepreneur to keep their websites, blogs, and articles catchy and informative with engaging content. Well-written content allows the search engines to index your website and also the blogs that are posted. This is a quick go for your brand!</p>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle className='fs-4' style={{color:'#F5454E'}}>What should you know about Content Writing?</CardTitle>
                <CardText className='fs-5'>
                Content writing is a type of online writing, linked to web marketing campaigns. This means creating data on the websites that are designed to sell a specific product. Read through some content writing stats to understand its importance.
                <ul>
                <li>32% of marketers believe that visual images are an important form of content for every businesses.</li>
                <li> Content marketing gets three times more leads as compared to paid search advertising. </li>
                <li>LinkedIn is an effective social media platform for delivering content and securing audience engagement.</li>
                <li> 47% of buyers viewed 3-5 pieces of content before engaging with a sales rep. (Source: HubSpot)</li>
                </ul>
                </CardText>
              </Card.Body>
            </Card>
            <Card className='mt-5'>
              <Card.Body>
                <CardTitle  className='fs-4' style={{color:'#F5454E'}}>Who Is A Website Content Writer?</CardTitle>
                <CardText className='fs-5'>
                A web content writer is an individual who specializes in providing relevant content for websites. Every website has a specific target audience and requires relevant content to attract business. Content should contain keywords aimed towards improving the website's SEO. One who is specialized in this and knows how to craft such type of data is a good and reliable website content writer.               
                </CardText>
              </Card.Body>
            </Card>

            </Container>
          </div>
        )}


      </Container>
    </>
  );
};

export default SingleServices;

