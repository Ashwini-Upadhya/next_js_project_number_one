import React, { useState, useEffect, useRef } from "react";
import { Col, Nav, Row, Button, Dropdown, NavDropdown, Navbar, Container, Offcanvas, Form, } from "react-bootstrap";
import Toggle from '../../assets/Images/Navimages/Togglebar.svg';
import Logo from '../../assets/Images/Navimages/Logo.svg';
import DropIcon from '../../assets/Images/Navimages/dropicon.svg';
import Search from '../../assets/Images/Navimages/Search.svg';
import Calling from '../../assets/Images/Navimages/calling.svg';
import InstagramIcon from '../../assets/Images/Navimages/InstagramIcon.svg';
import TwitterIcon from '../../assets/Images/Navimages/Twitter.svg';
import Facebookicon from '../../assets/Images/Navimages/Facebookicon.svg';
import Mail from '../../assets/Images/Navimages/mail.svg';
import notch from '../../assets/Images/FloatingMenu/Subtract.svg'
import { GoTriangleDown } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import './MyNavbar.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SyncLoader } from "react-spinners";

const MyNavbar = () => {

  const navigate = useNavigate();

  const [navbarBg, setNavbarBg] = useState("rgba(255, 255, 255, 1)");
  const [flag, setFlag] = useState('🇬🇧');
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [menuWidth, setMenuWidth] = useState([]);
  const [submenu, setSubmenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };
  function LoadingWithRedirect() {
    return (
      <div className="d-flex justify-content-center align-items-center h-75 my-5">
        <SyncLoader color="#ff8c8c" />
      </div>
    );
  }

  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const nav = [
    { label: "Home", icon: "pi pi-home", command: () => navigate("/"), },
    {
      label: (
        <span
          onClick={(e) => {
            e.stopPropagation();
            navigate("/about");
          }}
          style={{ cursor: "pointer" }}
        >
          About Us
        </span>
      ),
      icon: "pi pi-info-circle",
      items: []
    },
    {
      label: (
        <span
          onClick={(e) => {
            e.stopPropagation();
            // window.location.href = "/quality";
            navigate("/quality");

          }}
          style={{ cursor: "pointer" }}
        >
          Quality
        </span>
      ),
      icon: "pi pi-info-circle",
      items: []
    },
    {
      label: (
        <span
          onClick={(e) => {
            e.stopPropagation(); // Prevents triggering the dropdown
            navigate("/services");
          }}
          style={{ cursor: "pointer" }}
        >
          Services
        </span>
      ),
      icon: "pi pi-cog",
      items: [],
    },
    {
      label: (
        <span
          onClick={(e) => {
            e.stopPropagation();
            navigate("/industriesandclients");
          }}
          style={{ cursor: "pointer" }}
        >
          Industries
        </span>
      ),
      icon: "pi pi-briefcase",
      items: []
    },
    {
      label: (
        <span
          onClick={(e) => {
            e.stopPropagation();
            navigate("/langauges");
          }}
          style={{ cursor: "pointer" }}
        >
          Languages
        </span>
      ),
      icon: "pi pi-globe",
      items: []
    },
    { label: "Blog", icon: "pi pi-book", command: () => navigate("/blog") },
    { label: "Contactus", icon: "pi pi-book", command: () => navigate("/contact-us") },
  ];
  const [items, setItems] = useState(nav);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 992);
  };

  const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const endpoints = [
    { url: 'all-about-uses', labelIndex: 1, pathPrefix: 'about', modify: (t) => t },
    { url: 'all-qualities', labelIndex: 2, pathPrefix: 'quality', modify: (t) => t.replace(/and/i, '&').replace(/industry|services/gi, '').trim() },
    { url: 'all-services', labelIndex: 3, pathPrefix: 'AllServices', modify: (t) => t.replace(/services/gi, '').replace(/simultaneous/gi, '').trim() },
    { url: 'all-industries-and-clients', labelIndex: 4, pathPrefix: 'industriesandclients', modify: (t) => t.replace(/and/i, '&').replace(/industry|services/gi, '').trim() },
    { url: 'all-languages', labelIndex: 5, pathPrefix: 'AllLangauges', modify: (t) => t.replace(/services/gi, '').replace(/simultaneous/gi, '').trim() },
  ];

  Promise.all(
    endpoints.map(({ url }) =>
      axios.get(`${baseURL}${url}?populate[Media][populate]=*`)
    )
  )
    .then(responses => {
      const updatedItems = [...Array(6).fill(null)].map((_, i) => ({ items: [] })); // Assume 6 main menu items

      responses.forEach((response, i) => {
        const { labelIndex, pathPrefix, modify } = endpoints[i];
        const serviceItems = [];
        let subItems = [];
        const media = response?.data?.data?.[0]?.Media;

        if (Array.isArray(media)) {
          media.forEach(element => {
            const title = element?.title;
            const NameOfPages = element?.NameOfPages;
            const thirdLevelPages = element?.subItems;

            if (Array.isArray(thirdLevelPages) && thirdLevelPages.length > 0) {
              thirdLevelPages.forEach(item => {
                let label = item?.title || '';
                label = modify(label);
                const subPage = item?.NameOfPages;

                subItems.push({
                  label,
                  command: () => navigate(`/${pathPrefix}/${subPage.replace(/\s+/g, '-').toLowerCase()}`)
                });
              });
            }

            if (title) {
              const pageTitle = NameOfPages || title;
              const item = {
                label: pageTitle,
                command: () => navigate(`/${pathPrefix}/${pageTitle.replace(/\s+/g, '-').toLowerCase()}`),
              };

              if (subItems.length > 0) {
                item.items = subItems;
                subItems = [];
              }

              serviceItems.push(item);
            }
          });
        }

        // Merge new items into the existing menu
        setItems(prevItems => {
          const newItems = [...prevItems];
          const existingLabels = newItems[labelIndex]?.items?.map(item => item.label) || [];
          const filteredServiceItems = serviceItems.filter(
            newItem => !existingLabels.includes(newItem.label)
          );

          if (filteredServiceItems.length > 0) {
            newItems[labelIndex] = {
              ...newItems[labelIndex],
              items: [...(newItems[labelIndex]?.items || []), ...filteredServiceItems],
            };
          }

          return newItems;
        });
      });
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  const showDropdown = (index) => {
    setSubmenu(submenu === index ? null : index);
    setActiveSubmenu(activeSubmenu === null);
  }

  const [activeSubmenu, setActiveSubmenu] = useState({ parentIndex: null, subIndex: null });

  const handleSubmenuClick = (parentIndex, subIndex) => {
    if (
      activeSubmenu.parentIndex === parentIndex &&
      activeSubmenu.subIndex === subIndex
    ) {
      setActiveSubmenu({ parentIndex: null, subIndex: null });
    } else {
      setActiveSubmenu({ parentIndex, subIndex });
    }
  };

  const renderDropdownItems = (items) => {
    return items.map((item, index) => {
      if (Array.isArray(item)) {
        // Handle deeply nested structure (like Translation Services)
        return renderDropdownItems(item);
      }

      if (item.items) {
        // If the item has sub-items, create a nested dropdown
        return (
          <NavDropdown
            key={index}
            title={item.label}
            id={`nested-dropdown-${index}`}
            className="align-items-center justify-content-center flex-column"
          >
            {renderDropdownItems(item.items)}
          </NavDropdown>
        );
      } else {
        // Otherwise, just render a normal dropdown item
        return (
          <NavDropdown.Item key={index} onClick={item.command} href="#">
            {item.label}
          </NavDropdown.Item>
        );
      }
    });
  };



  const Submenu = (data, index) => {
    if (!data?.items) return null;
    return (
      <>
        {data?.items && (
          <div style={{
            position: 'absolute',
            left: '55%',
            transform: 'translateX(-45%)',
            zIndex: 1000,
            width: '100%'
          }}>
            <div className={`submenu text-white justify-center mx-0 w-100 ${submenu === index ? 'd-flex' : 'd-none'} flex-wrap text-center`}
              style={{
                position: 'relative',
                top: '20px',
                minWidth: `${(data.items.length <= 3) ? 'max-content' : '60dvw'}`,
                // backgroundColor: '#737791',
                padding: 'px',
                borderRadius: '15px'
              }}
            >
              <img style={{ position: 'absolute', height: '1rem', bottom: '100%', right: '45%' }} src={notch} alt="" />
              { data.items.length > 0 ?
              (data.items.map((subItem, subIndex) => (
                <span key={subIndex} className="submenu-item my-2 mx-1 py-1 justify-center"
                  onClick={(event) => {
                    event.preventDefault();
                    subItem?.command ? subItem.command() : handleSubmenuClick(index, subIndex);
                    showDropdown(index);
                  }}
                  style={{
                    fontSize: '1rem',
                    backgroundColor: `${activeSubmenu === subIndex ? 'white' : ''}`,
                    color: `${activeSubmenu === subIndex ? '#3a3a3f' : '#FFFFFF'}`,
                    whiteSpace: 'nowrap'
                  }}>
                  <span>
                    {subItem.label}
                  </span>
                  {subItem.items && <span className="ms-1"><GoTriangleDown className="triangleDown"
                    style={{
                      transform: `${activeSubmenu === subIndex ? 'rotate(180deg)' : ''}`,
                      transition: 'transform 0.3s ease',
                    }}
                    onClick={(event) => {
                      event.stopPropagation();
                      handleSubmenuClick(index, subIndex);
                    }}
                    color={`${activeSubmenu === subIndex ? '#3a3a3f' : ''}`}
                    size={15} /></span>}
                </span>
              )))
              : (<LoadingWithRedirect/>)
              }
            </div>

            <div className="subnav" style={{
              position: 'absolute',
              marginTop: '30px',
              left: '0%',
              transform: 'translateX(-50%)',
              minWidth: 'max-content',
              top: '100%',
              zIndex: 1001,
              width: '100%',
            }}>
              {data.items.map((subItem, subIndex) => (
                activeSubmenu.parentIndex === index &&
                activeSubmenu.subIndex === subIndex && (
                  <div className="nested mx-0 d-flex flex-row flex-wrap text-start w-100"
                    style={{
                      // backgroundColor: '#737791',
                      padding: '10px',
                      borderRadius: '15px',
                      marginTop: '5px'
                    }}>
                    <img style={{
                      position: 'absolute',
                      height: '1rem',
                      bottom: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      // right: `${subIndex === 0 ? '80%' :
                      //   subIndex === 1 ? '66%' :
                      //     subIndex === 2 ? '50%' :
                      //       subIndex === 3 ? '33%' : '15%'}`,
                      transition: 'position 0.2s ease'
                    }} src={notch} alt="" />

                    <div className="translation-grid p-2">
                      {subItem.items.map((nestedItem, index) => (
                        <div
                          key={index}
                          className="services text-start py-2 px-2"
                          onClick={(e) => { nestedItem.command(); setActiveSubmenu(activeSubmenu === null); setSubmenu(null) }}
                        >
                          <span className="redhover p-1">
                            {nestedItem.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        )}
      </>
    )
  }




  const MobileNavbar = () => {
    if (!isMobile) return null;
    return (
      <Navbar key={false} expand={false} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <a className="d-flex align-items-center" onClick={() => navigate("/")}>
              <img src={Logo} alt="Logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                <a className="d-flex align-items-center" onClick={() => navigate("/")}>
                  <img src={Logo} alt="Logo" />
                </a>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                {items.map((data, index) => (
                  <Nav.Link key={index} onClick={data.command} className="text-center">
                    <i className={data.icon}></i>
                    <span className="labelText py-2" style={{ color: "#737791" }}>
                      {typeof data.label === "string" && !["Services", "Quality", "Industries", "Languages", "About Us"].includes(data.label) ? data.label : null}
                    </span>

                    {data.items && Array.isArray(data.items) && (
                      <NavDropdown
                        className="align-items-center justify-content-center flex-column"
                        title={data.label}
                        id={`offcanvasNavDropdown-${index}`}
                      >
                        {renderDropdownItems(data.items)}
                      </NavDropdown>
                    )}
                  </Nav.Link>
                ))}
              </Nav>
              <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#737791' }} >
                <span ><img src={Search} alt="" /></span>&nbsp;&nbsp;
                <span style={{ color: "#fff" }}>|</span>&nbsp;&nbsp;
                <div className="d-flex align-items-center justify-content-center" onClick={() => setOpen(!open)}>
                  {flag == "🇬🇧" ? <p className="m-0 fs-5">🇬🇧</p> : null}
                  {flag == "🇺🇸" ? <p className="m-0 fs-5">🇺🇸</p> : null}
                  {flag == "🇮🇳" ? <p className="m-0 fs-5">🇮🇳</p> : null}
                  {flag == "🇫🇷" ? <p className="m-0 fs-5">🇫🇷</p> : null}
                  <div className="position-relative">
                    <span><img src={DropIcon} className="px-2" alt="Dropdown" style={{ transform: `${open ? 'rotate(180deg)' : ''}`, transition: 'transform 0.2s ease' }} /></span>
                    {open && (
                      <div
                        className="position-absolute start-1 top-1 mt-1 border rounded shadow-lg"
                        style={{ backgroundColor: "#737791" }}
                      >
                        <ul id="language-select" onchange="translateLanguage(this.value)" className="text-white p-0 m-0" style={{ listStyleType: "none" }}>
                          <li value="en-GB"
                            className="p-0 d-flex text-nowrap px-4 mt-2 py-2"
                            style={{ cursor: "pointer", backgroundColor: "transparent" }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#ffffff20")}
                            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
                            onClick={() => setFlag("🇬🇧")}
                          >
                            🇬🇧 <span>&nbsp; &nbsp;</span> English (UK)
                          </li>
                          <li value="en-US"
                            className="p-0 d-flex text-nowrap px-4 py-2"
                            style={{ cursor: "pointer", backgroundColor: "transparent" }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#ffffff20")}
                            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
                            onClick={() => setFlag("🇺🇸")}
                          >
                            🇺🇸 <span>&nbsp; &nbsp;</span> English (USA)
                          </li>
                          <li value="hi"
                            className="p-0 d-flex text-nowrap px-4 py-2"
                            style={{ cursor: "pointer", backgroundColor: "transparent" }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#ffffff20")}
                            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
                            onClick={() => setFlag("🇮🇳")}
                          >
                            🇮🇳 <span>&nbsp; &nbsp;</span> Hindi (INDIA)
                          </li>
                          <li value="fr"
                            className="p-0 d-flex text-nowrap px-4 py-2"
                            style={{ cursor: "pointer", backgroundColor: "transparent" }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#ffffff20")}
                            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
                            onClick={() => setFlag("🇫🇷")}
                          >
                            🇫🇷 <span>&nbsp; &nbsp;</span> French (FRANCE)
                          </li>
                        </ul>
                      </div>

                    )}
                  </div>
                </div>
                <span className="px-2" style={{ color: "#fff" }}>|</span>

                <a href="https://zoom.us/j/1234567890" target="_blank" rel="noopener noreferrer" className="px-2">
                  <img src={Calling} alt="Calling" />
                </a>

                <a href="https://mail.google.com/mail/u/0/?fs=1&to=shaktient@gmail.com&tf=cm" target="_blank" rel="noopener noreferrer" className="px-2">
                  <img src={Mail} alt="Mail" />
                </a>

                <span className="px-2" style={{ color: "#fff" }}>|</span>

                <a href="https://x.com/i/flow/login?redirect_after_login=%2FSE_translation" target="_blank" rel="noopener noreferrer" className="px-2">
                  <img src={TwitterIcon} alt="Twitter" />
                </a>

                <a href="https://www.instagram.com/shaktienterprise/" target="_blank" rel="noopener noreferrer" className="px-2">
                  <img src={InstagramIcon} alt="Instagram" />
                </a>

                <a href="https://www.facebook.com/shaktitranslation/" target="_blank" rel="noopener noreferrer" className="px-2">
                  <img src={Facebookicon} alt="Facebook" />
                </a>

              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )
  }




  return (
    <>{isMobile ?
      (MobileNavbar())
      :
      (<Nav className="w-100" style={{ position: 'sticky', top: '0px', zIndex: '999', backgroundColor: '#737791' }}>
        <Row className="w-100 align-items-center justify-content-center">
          <Col xs={12} lg={3} className={`d-flex justify-content-around ${isMobile ? '' : 'h-100 bg-white'}`}>
            <a className="d-flex align-items-center justify-center" onClick={() => navigate("/")}>
              <img src={Logo} alt="Logo" />
            </a>
          </Col>
          <Col xs={12} lg={6} className={`nav-menu d-flex ${isMobile ? 'flex-column' : 'justify-content-end'}`} style={{ backgroundColor: '#FFF', position: 'relative' }}>
            {items.map((data, index) => (
              <div key={index} className="w-100" style={{ position: 'relative' }}>
                <div
                  style={{ fontSize: '0.8rem', backgroundColor: submenu === index ? '#EF1016' : 'white', transform: 'skew(-20deg)', }}
                  className={`nav-item py-3 h-100 w-100 ${isMobile ? 'text-center' : ''}`}
                  onClick={(e) => (data?.command ? data.command() : showDropdown(index))}
                >
                  <div className="nav-link" style={{ transform: 'skewX(20deg)' }}>
                    <i className={data.icon}></i>
                    <span className="labelText py-2" style={{ color: submenu === index ? 'white' : '#737791', }}>
                      {data.label}
                    </span>
                    {data.items && <GoTriangleDown className="triangleDown"
                      style={{
                        transform: `${submenu === index ? 'rotate(180deg)' : ''}`,
                        transition: 'transform 0.3s ease',
                      }}
                      color={`${submenu === index ? 'white' : ''}`}
                      size={15} />}
                  </div>
                </div>
                {Submenu(data, index)}
              </div>
            ))}
          </Col>
          <Col xs={12} lg={3} xl={3} className={`navicons d-flex justify-content-around h-100 ${window.innerWidth > 1350 ? 'px-5' : ''}`}
            style={{
              transform: `${isMobile ? 'none' : 'skewX(-20deg)'}`,
              backgroundColor: `${isMobile ? 'transparent' : '#737791'}`
            }}>
            <Container
              className="d-flex flex-nowrap justify-content-around align-items-center"
              style={{ transform: 'skewX(20deg)', }}
            >
              <div className="d-flex align-items-center" onClick={() => setOpen(!open)} style={{ cursor: 'pointer', }}>
                {flag === "🇬🇧" && <p className="m-0 fs-5">🇬🇧</p>}
                {flag === "🇺🇸" && <p className="m-0 fs-5">🇺🇸</p>}
                {flag === "🇮🇳" && <p className="m-0 fs-5">🇮🇳</p>}
                {flag === "🇫🇷" && <p className="m-0 fs-5">🇫🇷</p>}
                {flag === "🇮🇹" && <p className="m-0 fs-5">🇮🇹</p>}
                <div className="position-relative">
                  <span>
                    <MdOutlineKeyboardArrowDown size={24} color="white" style={{
                      transform: `${open ? 'rotate(180deg)' : ''}`,
                      transition: 'transform 0.2s ease'
                    }} />
                  </span>

                  {open && (
                    <div
                      className="position-absolute end-0 mt-3 border  rounded-4 py-2 shadow-lg"
                      style={{ backgroundColor: "#73779180", backdropFilter: 'blur(16px)', zIndex: 10, minWidth: 'max-content' }}
                    >
                      <ul className="text-white p-0 m-0" style={{ listStyleType: "none" }}>
                        {[
                          { flag: "🇬🇧", label: "English (UK)", value: "en-US" },
                          { flag: "🇺🇸", label: "English (USA)", value: "en-GB" },
                          { flag: "🇫🇷", label: "French (FRANCE)", value: "fr" },
                          { flag: "🇮🇳", label: "Hindi (INDIA)", value: "hi" },
                          { flag: "🇮🇹", label: "Italian (ITALY)", value: "it" },
                        ].map((item, idx) => (
                          <li
                            onClick={() => {
                              setFlag(item.flag);
                              localStorage.setItem("preferredLang", item.value);
                              localStorage.setItem("preferredFlag", item.flag);
                            }}
                            key={idx}
                            className="px-2 py-2 d-flex align-items-center text-nowrap"
                            style={{ cursor: "pointer", backgroundColor: "transparent", fontSize: '1.2rem' }}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#ffffff20")}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                          >
                            {item.flag} <span className="ms-2" style={{ fontSize: '0.9rem' }}>{item.label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="d-flex align-items-center flex-nowrap gap-1 justify-content-around w-100 text-white">
                {showSearch ? (
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type to search..."
                  />
                ) : (
                  <>
                    <span>|</span>
                    <span onClick={handleSearchClick} style={{ cursor: "pointer" }}>
                      <img className="img-fluid" src={Search} alt="Search" />
                    </span>
                    <span>|</span>

                    <a href="https://zoom.us/j/1234567890" target="_blank" rel="noopener noreferrer">
                      <img className="img-fluid" src={Calling} alt="Calling" />
                    </a>

                    <a
                      href="https://mail.google.com/mail/u/0/?fs=1&to=shaktient@gmail.com&tf=cm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="img-fluid" src={Mail} alt="Mail" />
                    </a>

                    <span>|</span>

                    <a href="https://x.com/i/flow/login?redirect_after_login=%2FSE_translation" target="_blank" rel="noopener noreferrer">
                      <img className="img-fluid" src={TwitterIcon} alt="Twitter" />
                    </a>

                    <a href="https://www.instagram.com/shaktienterprise/" target="_blank" rel="noopener noreferrer">
                      <img className="img-fluid" src={InstagramIcon} alt="Instagram" />
                    </a>

                    <a href="https://www.facebook.com/shaktitranslation/" target="_blank" rel="noopener noreferrer">
                      <img className="img-fluid" src={Facebookicon} alt="Facebook" />
                    </a>
                  </>
                )}
              </div>
            </Container>
          </Col>
        </Row>
      </Nav>)
    }
    </>
  );
};

export default MyNavbar;

