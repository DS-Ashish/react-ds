import { React, useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 250) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <>
      <header id="header" className={fix ? "header fixed-top" : "header"}>
        <div className="container-fluid  d-flex align-items-center justify-content-between">
          <NavLink to="/react-ds/" className="logo d-flex align-items-center">
            <img src="assets/img/dynamicssqure-logo.svg" alt="logo" />
          </NavLink>
          <nav id="navbar" className="navbar">
            <ul>
              <li className="dropdown">
                <NavLink to="/react-ds/solution">
                  <span>Solutions</span> <i className="bi bi-chevron-down"></i>
                </NavLink>
                <ul>
                  <li className="dropdown">
                    <NavLink to="/react-ds/microsoft-dynamics-365">
                      <span>Microsoft Dynamics 365</span>
                      <i className="bi bi-chevron-right"></i>
                    </NavLink>
                    <ul>
                      <li className="dropdown">
                        <NavLink to="/react-ds/dynamics-365-business-central">
                          <span>Business Central</span>
                          <i className="bi bi-chevron-right"></i>
                        </NavLink>
                        <ul>
                          <li>
                            <NavLink to="/react-ds/dynamics-365-business-central-implementation">
                              Implementation
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/react-ds/dynamics-365-business-central-upgrade">
                              Upgrade
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/react-ds/dynamics-365-business-central-support">
                              Support
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NavLink to="/react-ds/finance">Finance</NavLink>
                      </li>
                      <li>
                        <NavLink to="/react-ds/supply-chain-management">
                          Supply Chain Management
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/react-ds/sales">Sales</NavLink>
                      </li>
                      <li>
                        <NavLink to="/react-ds/customer-service">
                          Customer Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/react-ds/field-service">
                          Field Service
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/react-ds/project-operations">
                          Project Operations
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/react-ds/marketing">Marketing</NavLink>
                      </li>
                      <li>
                        <NavLink to="/react-ds/human-resource">
                          Human Resource
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="/react-ds/azure-iot-internet-of-things">
                      <span>Azure IoT</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="/react-ds/azure-iot-hub">IoT Hub</NavLink>
                      </li>
                      <li>
                        <NavLink to="/react-ds/azure-iot-central">
                          IoT Central
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/react-ds/azure-sphere">
                          Azure Sphere
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/react-ds/azure-iot-edge">
                          IoT Edge
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/azure-digital-twins">
                          Digital Twins
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/react-ds/azure-machine-learning">
                          Machine Learning
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="/react-ds/microsoft-power-platform">
                      <span>Power Platform</span>
                      <i className="bi bi-chevron-right"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="/react-ds/microsoft-power-bi">
                          Power BI
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/react-ds/microsoft-power-apps">
                          Power Apps
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/react-ds/microsoft-power-automate">
                          Power Automate
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/react-ds/microsoft-power-virtual-agents">
                          Power Virtual Agents
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="#">
                      <span>Microsoft 365</span>
                      <i className="bi bi-chevron-right"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="#">Office 365</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">SharePoint</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Microsoft Teams</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <NavLink to="#">
                      <span>More Solutions</span>
                      <i className="bi bi-chevron-right"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="/react-ds/erp">
                          ERP Solutions (NAV/AX/GP)
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/react-ds/microsoft-dynamics-crm">
                          CRM Solutions
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/react-ds/microsoft-azure">
                          Microsoft Azure
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/react-ds/microsoft-dynamics-365-mixed-reality">
                          Mixed Reality
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/react-ds/microsoft-dynamics-365-ai">
                          Artificial Intelligence (AI)
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <NavLink to="#">
                  <span>Industries</span> <i className="bi bi-chevron-down"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="/react-ds/industries">Startup</NavLink>
                  </li>
                  <li>
                    <NavLink to="/react-ds/microsoft-cloud-for-nonprofit">
                      Not for Profit (Microsoft Cloud)
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/react-ds/ecommerce">Ecommerce</NavLink>
                  </li>
                  <li>
                    <NavLink to="/react-ds/microsoft-cloud-for-manufacturing">
                      Manufacturing (Microsoft Cloud)
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/react-ds/professional-services">
                      Professional Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/react-ds/food-and-beverages">
                      Food & Beverages
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <NavLink to="#">
                  <span>Our Services</span>{" "}
                  <i className="bi bi-chevron-down"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="#">Implementation Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Support Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Upgrade Services</NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <NavLink to="#">
                  <span>Company</span> <i className="bi bi-chevron-down"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="/react-ds/about-us">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Why Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Partner</NavLink>
                  </li>
                  <li>
                    <NavLink to="/react-ds/career">Career</NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <NavLink to="#">
                  <span>Resources</span> <i className="bi bi-chevron-down"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="#">Blogs</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Video Blogs</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Case Studies</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Webinars</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink className="nav-link" to="/react-ds/contact-us">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink className="getstarted" to="#">
                  0207 193 2502
                </NavLink>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
