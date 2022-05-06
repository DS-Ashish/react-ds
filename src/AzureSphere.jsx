import React from "react";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet";

const AzureSphere = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Microsoft Azure Sphere | Cloud Security Services</title>
        <link rel="canonical" href="" />
        <meta
          name="description"
          content="Develop & deploy highly secured IoT applications with Azure Sphere leveraging its set of components and ensure secure communication between your IoT devices and Azure Cloud."
        />
        <meta content="" name="keywords" />
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1">
              <h1>
                Microsoft
                <br />
                Azure Sphere
              </h1>
              <h2>
                Develop & deploy highly secured IoT applications with Azure
                Sphere leveraging its set of components and ensure secure
                communication between your IoT devices and Azure Cloud.
              </h2>
              <div>
                <div className="text-center text-lg-start">
                  <NavLink to="#" className="btn-get-started scrollto">
                    <span>Schedule a Demo</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="assets/img/azure-sphere-banner.svg"
                alt="azure-sphere-banner"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h3>What is Microsoft Azure Sphere?</h3>
            <p>
              Azure Sphere is an embedded security service for your IoT devices.
              When you connect millions of IoT devices to your cloud network, it
              becomes essential to protect or safeguard your devices in terms of
              data, privacy, physical safety, and overall IoT infrastructure.
              Azure Sphere allows device connectivity whether using Wireless
              network connectivity (Azure Sphere Chip), Ethernet connectivity,
              Bluetooth LE connectivity, or cellular connectivity.
            </p>
            <br /> <br />
            <h3>Azure Sphere Benefits</h3>
            <p>
              Secure your millions of devices along with data, privacy, physical
              architecture, and the entire IoT infrastructure with Microsoft
              Azure Sphere. With Azure Sphere security services, enterprises can
              maximize their equipment value and performance by ensuring
              tracking and monitoring their devices in real-time. Since Azure
              IoT comes with its own Azure Sphere Operating System that adds
              extra protection layers and ensures additional security updates.
            </p>
          </header>
          <div className="row p-lg-6">
            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <div className="wr-in">
                          <img
                            src="assets/img/icons-power-sphere_High-End-Connectivity.svg"
                            alt="icons-power-sphere_High-End-Connectivity"
                          />
                        </div>
                        <span>High-End Connectivity</span>
                      </button>
                    </h2>
                    <div
                      id="fin1"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        Introduces built-in Microsoft security that ensures
                        high-end connectivity as it comes with
                        Azure-Sphere-certified chips from hardware vendors.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <div className="wr-in">
                          <img
                            src="assets/img/icons-power-sphere_Highly-Secure.svg"
                            alt="icons-power-sphere_Highly-Secure"
                          />
                        </div>
                        <span>Highly Secure OS</span>
                      </button>
                    </h2>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        As comprises its own operating system, thereby adds
                        extra security layers that ensure a highly secured
                        platform to seamlessly drive new IoT experience.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <div className="accordion" id="accneww">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <div className="wr-in">
                          <img
                            src="assets/img/icons-power-sphere_threat-detection.svg"
                            alt="icons-power-sphere_threat-detection"
                          />
                        </div>
                        <span>Detect Threats</span>
                      </button>
                    </h2>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        Azure Sphere security services are designed to establish
                        device-to-cloud communication, help to detect threats,
                        and maximize the connected IoT devices' security.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <div className="wr-in">
                          <img
                            src="assets/img/icons-power-sphere_Build-iot-device.svg"
                            alt="icons-power-sphere_Build-iot-device"
                          />
                        </div>
                        <span>Build Highly Secured IoT Devices</span>
                      </button>
                    </h2>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accneww"
                    >
                      <div className="accordion-body">
                        Enables both the developers and manufacturers to build
                        highly secured connected IoT devices from the production
                        stage to lifelong experience of the device.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 m--t">
              <h3>
                Unwrap the IoT Potentials in Your Device Security with Azure
                Sphere
              </h3>
              <h4>Azure Sphere Features</h4>
              <div className="m-o-t m-o-t-b">
                <NavLink to="#about" className="btn-get-started scrollto">
                  <span>Know More</span>
                </NavLink>
              </div>
              {/* <div className="downlad_guid">
                        <NavLink to="#">
                        <span>Download Microsoft Guide</span>
                        </NavLink>
                     </div> */}
            </div>
            <div className="col-lg-7">
              <div className="row gx-4">
                <div className="col-lg-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Highly <br />
                        Secure
                      </h3>
                      <div className="overlay"></div>
                      <p>
                        Embedded with multiple layers of protection that helps
                        to safeguard all your registered IoT devices against any
                        threats as well as respond the same.
                      </p>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Deployment
                        <br />
                        Flexibility
                      </h3>
                      <div className="overlay"></div>
                      <p>
                        Provide support and extra security layers to your
                        devices that help enterprises to secure their existing
                        equipment as well as ensure to build protection layers
                        into new IoT investments.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Over-the-air
                        <br />
                        Updates
                      </h3>
                      <div className="overlay"></div>
                      <p>
                        With its Over-the-air (OTA) updates, Azure Sphere
                        enables enterprises to quickly add newly updated
                        features and improve the device performance across the
                        device infrastructure.
                      </p>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Automated
                        <br />
                        Updates
                      </h3>
                      <div className="overlay"></div>
                      <p>
                        With the help of error reporting and automated security
                        updates, Azure Sphere security service enables you to
                        stay updated with current as well as potential security
                        threats.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Talk to Our Azure Sphere Experts</h3>
                <p>
                  Seeking to deploy security solutions for your IoT devices,
                  connect with our experts today, we can help with our Azure
                  Sphere security services.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <NavLink to="#about" className="btn-get-started scrollto">
                    <span>Book a Callback</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AzureSphere;
