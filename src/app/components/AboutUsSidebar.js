import { useEffect, useState } from "react"
import { Nav } from "react-bootstrap"

const AboutUsSidebar = ({ services, activeService, setActiveService, serviceSubItems }) => {
    const [expandedServices, setExpandedServices] = useState(() => {
        const initialState = {}

        // Find the direct parent of the active subitem
        if (!serviceSubItems[activeService]) {  // if activeService is a subitem
            for (const [service, subItems] of Object.entries(serviceSubItems)) {
                if (subItems.includes(activeService)) {
                    initialState[service] = true
                    break  // only take the first parent found
                }
            }
        } else {  // if activeService is a parent
            initialState[activeService] = true
        }

        return initialState
    })

    useEffect(() => {
        const newExpanded = {}

        if (serviceSubItems[activeService]) {  // if activeService is a parent
            newExpanded[activeService] = true
        } else {  // if activeService is a subitem
            // Find the direct parent of the active subitem
            for (const [service, subItems] of Object.entries(serviceSubItems)) {
                if (subItems.includes(activeService)) {
                    newExpanded[service] = true
                    break  // only take the first parent found
                }
            }
        }

        setExpandedServices(newExpanded)
    }, [activeService])

    const toggleService = (service) => {
        if (serviceSubItems[service]) {
            setExpandedServices((prev) => {
                const isExpanded = !!prev[service]
                return isExpanded ? {} : { [service]: true }
            })
        }
        setActiveService(service)
    }

    return (
        <div>
            <h4 className="sidebar-header">About Us</h4>
            <Nav className="flex-column sidebar">
                {services.map((service, index) => {
                    const isParent = !!serviceSubItems[service]
                    const isExpanded = expandedServices[service]

                    const activeHasNoSubitems = !serviceSubItems[activeService] &&
                        !Object.values(serviceSubItems).some(subItems => subItems.includes(activeService))

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
                                {isParent && (
                                    <span className="accordion-icon">
                                        {isExpanded ? (
                                            <MdOutlineKeyboardArrowDown size={18} />
                                        ) : (
                                            <MdOutlineKeyboardArrowRight size={18} />
                                        )}
                                    </span>
                                )}
                            </Nav.Link>

                            <div
                                className={`sub-items-container ${isExpanded ? "expanded" : ""}`}
                                style={{
                                    maxHeight: isExpanded ? `${(serviceSubItems[service]?.length || 0) * 40}px` : "0px",
                                }}
                            >
                                {isParent && (
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

export default AboutUsSidebar
