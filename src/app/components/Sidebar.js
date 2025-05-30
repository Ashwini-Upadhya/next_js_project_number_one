import { useState, useEffect } from "react"
import { Nav } from "react-bootstrap"
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md"
import "./sidebar.css"

const Sidebar = ({serviceSubItems, services, activeService, setActiveService , serviceUrlMapRef}) => {
  const [expandedServices, setExpandedServices] = useState(() => {
    const initialState = {}

    // If activeService is a top-level service, expand it
    if (serviceSubItems[activeService]) {
      initialState[activeService] = true
    }

    // If activeService is a subitem, expand its parent
    Object.entries(serviceSubItems).forEach(([service, subItems]) => {
      if (subItems.includes(activeService)) {
        initialState[service] = true
      }
    })

    return initialState
  })

  useEffect(() => {
    const newExpanded = {}

    // Expand if activeService is a top-level service
    if (serviceSubItems[activeService]) {
      newExpanded[activeService] = true
    }

    // Expand the parent if activeService is a subitem
    Object.entries(serviceSubItems).forEach(([service, subItems]) => {
      if (subItems.includes(activeService)) {
        newExpanded[service] = true
      }
    })

    setExpandedServices(newExpanded)
  }, [activeService])


  const toggleService = (service) => {
    if (serviceSubItems[service]) {
      setExpandedServices((prev) => {
        const isAlreadyExpanded = !!prev[service]
        const newState = {}
        if (!isAlreadyExpanded) {
          newState[service] = true
        }
        return newState
      })
    }
    setActiveService(service)
  }

  return (
    <div>
      <h4 className="sidebar-header">Services</h4>
      <Nav className="flex-column sidebar">
        {/* Only render the active service and its subitems */}
        {services.map((service, index) => {
          const isParentService = serviceSubItems[service]
          const isExpanded = expandedServices[service]

          // If the active service has no subitems, show all services
          const activeHasNoSubitems = !serviceSubItems[activeService] && !Object.values(serviceSubItems).some(subItems => subItems.includes(activeService))

          if (!activeHasNoSubitems && service !== activeService && !isExpanded) {
            return null
          }


          return (
            <div key={index} className="accordion-item">
              <Nav.Link
                className={`sidebar-link ${activeService === service ? "active" : ""} px-4 py-2 d-flex justify-content-between align-items-center`}
                onClick={() => toggleService(service)}
                style={{ fontSize: "14px", textAlign: "left", fontWeight: "500" }}
              >
                <span>{service}</span>
                {serviceSubItems[service] && (
                  <span className="accordion-icon">
                    {expandedServices[service] ? (
                      <MdOutlineKeyboardArrowDown size={18} />
                    ) : (
                      <MdOutlineKeyboardArrowRight size={18} />
                    )}
                  </span>
                )}
              </Nav.Link>

              <div
                className={`sub-items-container ${expandedServices[service] ? "expanded" : ""}`}
                style={{
                  maxHeight: expandedServices[service] ? `${(serviceSubItems[service]?.length || 0) * 40}px` : "0px",
                }}
              >
                {serviceSubItems[service] && (
                  <div className="sub-items">
                    {serviceSubItems[service].map((subItem, subIndex) => (
                      <Nav.Link
                        key={subIndex}
                        className={`sidebar-link sub-item ${activeService === subItem ? "active" : ""} px-5 py-2`}
                        onClick={(e) => {
                          e.stopPropagation()
                          setActiveService(subItem)
                        }}
                        style={{
                          fontSize: "13px", textAlign: "left", fontWeight: "400",
                          transitionDelay: `${subIndex * 50}ms`,
                        }}
                      >
                        {subItem}
                      </Nav.Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </Nav>
    </div>
  )
}

export default Sidebar
