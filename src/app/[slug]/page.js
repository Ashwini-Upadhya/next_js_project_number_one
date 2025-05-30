import { Container, Row, Col, Card, Table, Button, Tooltip, Accordion } from "react-bootstrap";
import { ImCheckmark } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { GiRoundStar } from "react-icons/gi";
import { Bar, ComposedChart, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts";
import '../components/LanguagePlatform/LanguagePlatform.css'
import GetQuoteSubscriptionSection from "./GetQuoteSubscriptionSection/GetQuoteSubscriptionSection";
const Template = ({ response, LoadingWithRedirect }) => {

  const Heading = ({ data }) => {
    return (
      <div
        className="my-3 fw-bold text-justify"
        style={{ fontSize: "18px", color: "#F5454E" }}
      >
        {data?.children[0]?.text}
      </div>
    );
  }
  const Paragraph = ({ item, index }) => {
    return (
      <div className="text-justify my-2" key={index} style={{ fontSize: "15px", color: "#737791" }}>
        {item.children.map((item, index) => {
          switch (item.type) {
            case "link":
              return (
                <>
                  <span className="text-justify mt-1" key={index} style={{ fontSize: "15px", color: "#737791" }}>
                    <Link to={item.url} style={{ color: "#F5454E", textDecoration: "none", fontWeight: "bold", lineHeight: '27px' }}>
                      &nbsp;{item?.children[0]?.text && item?.children[0]?.text}
                    </Link>
                  </span>
                </>
              )
            case "text":
              return (
                <span key={index} className={`text-justify mt-1 ${item.bold === true ? 'fw-bold' : ''}`} style={{ fontSize: "15px", color: "#737791", lineHeight: '27px' }}>

                  {item.text}
                </span>
              )
            default:
              break;
          }
        })}
      </div>
    );
  }
  const List = ({ children }) => (
    <div className="mt-2" style={{ fontSize: "16px", color: "#737791" }}>
      {children.map((item, index) => (
        <div key={index} className="d-flex align-items-start mt-2">
          <ImCheckmark
            className="me-3"
            color="#53a653"
            size={16}
            style={{ flexShrink: 0, marginTop: "4px" }}
          />
          <div className="text-start">
            {item.children.map((child, idx) => (
              <span key={idx} style={{ lineHeight: '27px' }}>
                {child.bold ? <strong>{child.text}</strong> : child.text}{" "}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
  const FeedbackCard = ({ feedback }) => {
    const [expanded, setExpanded] = useState(false);
    const maxLength = 120;
    const comment = feedback.comment || '';
    const shouldTruncate = comment.length > maxLength && comment !== 'No comment.';
    const displayText = shouldTruncate && !expanded
      ? `${comment.substring(0, maxLength)}...`
      : comment;
    return (
      <Col xs={12} sm={6} md={4} lg={6} className="mb-2 d-flex mt-3">
        <Card className="flex-fill h-100 feedback-card shadow-sm" >
          <Card.Body className="d-flex flex-column">
            <Card.Title className="fw-bold mb-2" style={{ fontSize: "18px", color: "#F5454E" }}>
              {feedback.name}
            </Card.Title>

            <Row className="mb-2">
              <Col xs={12} sm={6}>
                <small className="text-muted">General Satisfaction:</small>
                <RatingStars rating={feedback.satisfactionLevel} />
              </Col>
              <Col xs={12} sm={6}>
                <small className="text-muted">Quality:</small>
                <RatingStars rating={feedback.quality} />
              </Col>
            </Row>

            <Row className="mb-1">
              <Col xs={12} sm={6}>
                <small className="text-muted">Costs:</small>
                <RatingStars rating={feedback.costs} />
              </Col>
              <Col xs={12} sm={6}>
                <small className="text-muted">Timely Delivery:</small>
                <RatingStars rating={feedback.timelyDelivery} />
              </Col>
            </Row>

            <div className="mt-2 text-justify flex-grow-1" style={{ fontSize: "14px", color: "#737791" }}>
              {displayText}
            </div>

            {shouldTruncate && (
              <Button
                variant="link"
                className="p-0 read-more-btn align-self-start mt-1"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? 'Read Less' : 'Read More'}
              </Button>
            )}
          </Card.Body>
        </Card>
      </Col>

    );
  };
  const RatingStars = ({ rating }) => {
    if (rating === null) return <span className="text-muted">Do not know</span>;

    return (
      <div className="d-flex gap-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <GiRoundStar
            key={i}
            color={i < rating ? (rating < 5 ? "#007bff" : "#f1c40f") : "#e4e5e9"} // blue for <5, yellow for 5, gray otherwise
            size={16}
          />
        ))}
      </div>
    );
  };
  const CaseStudiesCard = ({ feedback }) => {
    return (
      <Col xs={12} sm={6} md={4} lg={12} className="mb-2 d-flex mt-3">
        <Card className="flex-fill h-100 feedback-card shadow-sm" >
          <Card.Body className="d-flex flex-column">
            <Card.Title className="fw-bold mb-1" style={{ fontSize: "20px", color: "#F5454E" }}>
              {feedback.name}
            </Card.Title>


            <div className="mt-3" style={{ fontSize: "18px", color: "#F5454E", fontWeight: "500" }}>Background
            </div>
            <div className="mt-1 text-justify" style={{ fontSize: "16px", color: "#737791" }}>
              {feedback.background}
            </div>

            <div className="mt-3" style={{ fontSize: "18px", color: "#F5454E", fontWeight: "500" }}>Project Nature
            </div>
            <div className="mt-1 text-justify" style={{ fontSize: "16px", color: "#737791" }}>
              {feedback.project_nature}
            </div>


            <div className="mt-3" style={{ fontSize: "18px", color: "#F5454E", fontWeight: "500" }}>Our Solution

            </div>
            <div className="mt-1 text-justify" style={{ fontSize: "16px", color: "#737791" }}>
              {feedback.our_solution}
            </div>
          </Card.Body>
        </Card>
      </Col>

    );
  };
  const Graph = ({ Xtype, Ytype, AxisdataKey, dataKey, DataList }) => {
    return (
      <Row className="justify-content-start">
        <Col xs={12} md={10} lg={8}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart
              layout="vertical"
              data={DataList}
              margin={{ top: 20, right: 40, left: 40, bottom: 20 }}
            >
              <XAxis type={Xtype} />
              <YAxis
                dataKey={AxisdataKey}
                type={Ytype}
                width={100}
                tick={{ fontSize: 14 }}
              />
              <Tooltip />
              <Bar dataKey={dataKey} barSize={20} fill="#F5454E">
                <LabelList dataKey={dataKey} position="right" />
              </Bar>
            </ComposedChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    )
  }
  const LanguageCard = ({ item, index }) => {
    return <Col xs={12} sm={12} md={12} lg={3} xl={3} className="card p-3 shadow equal-card" key={index} onClick={() => navigate(`/langauges/${item.slug}`)}>
      <div className='language-heading'>{item.language}</div>
      {item.speakers ?
        <p className="mb-1" style={{ color: "#737791" }}>
          <strong style={{ fontWeight: "500", color: "#737791" }}>Native Speakers :</strong> {item.speakers} million
        </p>
        : null
      }
      <p className="mb-0 text-truncate" style={{ color: "#737791" }}>
        <strong style={{ fontWeight: "500", color: "#737791" }}>Location:</strong> {item.states}
      </p>
    </Col>
  }
  const Accordian = ({ item, index }) => {
    return (
      <Accordion className="mt-4" defaultActiveKey={null}>
        <Accordion.Item eventKey={index} className="mb-4 shadow">
          <Accordion.Header >
            <p className="m-0" style={{ fontSize: "14px" }}> {item.title}</p>
          </Accordion.Header>
          <Accordion.Body>
            <p className="m-0" style={{ fontSize: "14px" }}>{item.description && item?.description?.[0]?.children?.[0]?.text}</p>
            {item.media &&
              <Row className="g-3">
                {item.media?.map((item, index) => (
                  <Col key={index} xs={6} sm={4} md={3} lg={2}>
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}${item.url}`}
                      alt={`client-${index + 1}`}
                      className="img-fluid"
                      style={{ borderRadius: '8px' }}
                    />
                  </Col>
                ))}
              </Row>
            }
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
  }

  const blocks = response?.data?.[0]?.Blocks || [];
  const accordionBlocks = blocks.filter(block => block.__component === "shared.accordion-list");
  const otherBlocks = blocks.filter(block => block.__component !== "shared.accordion-list");
  return (
    <>
      <Container className="my-5 h-100">

        {response && response.data && response.data.length > 0 ? (
          <>
            <Row>
              <Col>

                {response && response.data && response?.data[0]?.title && (
                  <div className="fw-bold text-justify" style={{ fontSize: "18px", color: "#F5454E" }}>
                    {response?.data[0]?.Title || response?.data[0]?.title}

                  </div>)}
                {otherBlocks && otherBlocks.map((data, index) => {
                  switch (data.__component) {
                    case "shared.paragraph":
                      return (
                        <React.Fragment key={index}>
                          {data?.paragraph?.map((item, index) => {
                            switch (item.type) {
                              case "heading":
                                return <Heading key={index} data={item} />;
                              case "paragraph":
                                return (
                                  <div className="text-justify my-2" key={index} style={{ fontSize: "15px", color: "#737791" }}>
                                    {item.children.map((item, index) => {
                                      switch (item.type) {
                                        case "link":
                                          return (
                                            <>
                                              <span className="text-justify mt-1" key={index} style={{ fontSize: "15px", color: "#737791" }}>
                                                <Link to={item.url} style={{ color: "#F5454E", textDecoration: "none", fontWeight: "bold", lineHeight: '27px' }}>
                                                  &nbsp;{item?.children[0]?.text && item?.children[0]?.text}
                                                </Link>
                                              </span>
                                            </>
                                          )
                                        case "text":
                                          return (
                                            <span key={index} className={`text-justify mt-1 ${item.bold === true ? 'fw-bold' : ''}`} style={{ fontSize: "15px", color: "#737791", lineHeight: '27px' }}>

                                              {item.text}
                                            </span>
                                          )
                                        default:
                                          break;
                                      }
                                    })}
                                  </div>
                                )
                              case "list":
                                return <List key={index} children={item.children} />;
                              default:
                                break;
                            }

                          })
                          }
                        </React.Fragment>
                      );
                    case "shared.table":
                      return (
                        <Table bordered responsive className="my-3">
                          <thead className="text-center">
                            {data?.row?.map((row, index) => (
                              <tr key={index}>
                                {row?.Data?.map((item, itemIndex) => (
                                  <th key={itemIndex} className={`${index === 0 ? 'text-white text-center' : 'text-center font-bold'}`}
                                    style={{
                                      padding: "20px", backgroundColor: `${index === 0 ? '#F5454E' : ''}`,
                                      fontWeight: `${index === 0 ? 'bold' : 'normal'}`,
                                      color: '#737791', fontSize: '16px'
                                    }}>
                                    {item.children[0].text}
                                  </th>
                                ))}
                              </tr>
                            ))}
                          </thead>
                        </Table>
                      );
                    case "shared.content-component":
                      return (
                        <Row
                          key={data?.id}
                          className={`d-flex align-items-stretch mb-5 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                        >
                          <Col sm={12} md={12} lg={6} key={index} className="d-flex flex-column justify-content-around">
                            <div>
                              <React.Fragment key={index}>
                                {data?.description &&
                                  data?.description.map((data, subIndex) => {
                                    switch (data?.type) {
                                      case "heading":
                                        return <Heading key={subIndex} data={data} />;
                                      case "paragraph":
                                        return (
                                          <div className="text-justify my-2" key={subIndex} style={{ fontSize: "15px", color: "#737791", lineHeight: '27px' }}>
                                            {data.children.map((data, index) => {
                                              switch (data.type) {
                                                case "link":
                                                  return (
                                                    <span className="text-justify mt-1" key={index} style={{ fontSize: "15px", color: "#737791" }}>
                                                      <Link to={data.url} style={{ color: "#F5454E", textDecoration: "none", fontWeight: "bold", lineHeight: '27px' }}>
                                                        &nbsp;{data?.children[0]?.text && data?.children[0]?.text}
                                                      </Link>
                                                    </span>
                                                  )
                                                case "text":
                                                  return (
                                                    <span key={index} className={`text-justify mt-1 ${data.bold === true ? 'fw-bold' : ''}`} style={{ fontSize: "15px", color: "#737791", lineHeight: '27px' }}>

                                                      {data.text}
                                                    </span>
                                                  )
                                                default:
                                                  break;
                                              }
                                            })}
                                          </div>
                                        );
                                      case "list":
                                        return <List key={subIndex} children={data.children} />;
                                      default:
                                        return null;
                                    }
                                  })}
                              </React.Fragment>
                            </div>
                          </Col>
                          {/* Image */}
                          <Col sm={12} md={12} lg={6} className="d-flex align-items-center">
                            {data?.media && (
                              <img
                                src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}${data?.media?.url}`}
                                alt={data?.media[0]?.name || ''}
                                className="img-fluid w-100"
                                style={{ objectFit: 'contain' }}
                              />
                            )}
                          </Col>
                        </Row>
                      );
                    case "shared.card":
                      return (
                        <Row>
                          {data?.Feedback.map((data, index) => (
                            <FeedbackCard key={index} feedback={data} />
                          ))}
                        </Row>
                      );
                    case "shared.case-studies-card":
                      return (
                        <Row>
                          {data?.CaseStudies.map((feedback, index) => (
                            <CaseStudiesCard key={index} feedback={feedback} />
                          ))}
                        </Row>
                      );
                    case "shared.management-card":
                      return (
                        <>
                          {data?.Management.map((person, index) => (
                            <Card key={index} className="mb-4 shadow p-3 py-4 border-1 mt-3">
                              <Row>
                                <Col xs={12} md={3} className="d-flex align-items-center justify-content-center">
                                  <img
                                    src={`url(${person.image})`}
                                    alt={person.name}
                                    className="img-fluid rounded"
                                    style={{ objectFit: "contain" }}
                                  />
                                </Col>
                                <Col xs={12} md={9}>
                                  <h5 className="fw-bold" style={{ color: "#F5454E" }}>{person.name}</h5>
                                  <div className="mb-2" style={{ fontSize: "16px", color: "#F5454E" }}>{person.title}</div>
                                  <p style={{ fontSize: "16px", color: "#737791" }}>{person.description}</p>
                                </Col>
                              </Row>
                            </Card>
                          ))}
                        </>
                      );
                    case 'shared.media':
                      return (
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}${data?.file?.url}`}
                          alt={data?.file?.name || ''}
                          className="img-fluid w-100"
                          style={{ objectFit: 'contain' }}
                        />
                      );
                    case "shared.graph":
                      const formattedData = data.DataList.map(item => ({
                        language: item.key,
                        population: Number(item.Value),
                      }));

                      return (
                        <Graph
                          Xtype={data.XAsixType}
                          Ytype={data.YAxisType || "category"}
                          dataKey="population"
                          DataList={formattedData}
                        />
                      );
                    case "shared.languages-list":
                      return (
                        <Row className="d-flex flex-wrap gap-3 mt-3">
                          {data.LanguageData.map((item, index) => {
                            return <LanguageCard item={item} index={index} />
                          })}
                        </Row>
                      );
                    case "shared.accordion-list":
                      console.log('Accordian data', data)
                      return <Accordian item={data} />

                    default:
                      return null;
                  }
                })}
                {accordionBlocks.length > 0 && (
                  <Accordion defaultActiveKey={null} className="mt-4">
                    {accordionBlocks.map((item, index) => (
                      <Accordion.Item eventKey={String(index)} key={index} className="mb-4 shadow">
                        <Accordion.Header>
                          <p className="m-0" style={{ fontSize: "14px" }}>{item.title}</p>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="text-justify my-2" key={index} style={{ fontSize: "15px", color: "#737791" }}>
                            {item?.description?.map((item, index) => {
                              switch (item.type) {
                                case "link":
                                  return (
                                    <>
                                      <span className="text-justify mt-1" key={index} style={{ fontSize: "15px", color: "#737791" }}>
                                        <Link to={item.url} style={{ color: "#F5454E", textDecoration: "none", fontWeight: "bold", lineHeight: '27px' }}>
                                          &nbsp;{item?.children[0]?.text && item?.children[0]?.text}
                                        </Link>
                                      </span>
                                    </>
                                  )
                                case "text":
                                  return (
                                    <span key={index} className={`text-justify mt-1 ${item.bold === true ? 'fw-bold' : ''}`} style={{ fontSize: "15px", color: "#737791", lineHeight: '27px' }}>

                                      {item.text}
                                    </span>
                                  );
                                case "paragraph":
                                  return (
                                    <Paragraph item={item} index={index} />
                                  );
                                default:
                                  break;
                              }
                            })}
                          </div>
                          {item.media && (
                            <Row className="g-3">
                              {item.media.map((mediaItem, mediaIndex) => (
                                <Col key={mediaIndex} xs={6} sm={4} md={3} lg={2}>
                                  <img
                                    src={`${import.meta.env.VITE_REACT_APP_IMAGE_URL}${mediaItem.url}`}
                                    alt={`client-${mediaIndex + 1}`}
                                    className="img-fluid"
                                    style={{ borderRadius: '8px' }}
                                  />
                                </Col>
                              ))}
                            </Row>
                          )}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                )}

              </Col>
            </Row>

            <GetQuoteSubscriptionSection />
          </>
        )
          : (
            <LoadingWithRedirect />
          )}
      </Container>
    </>
  );
};

export default Template;