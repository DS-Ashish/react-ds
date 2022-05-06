import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const PowerBI = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Microsoft Power BI Experts, Pricing & Services | Data Visualization
        </title>
        <link rel="canonical" href="" />
        <meta
          name="description"
          content="Need Microsoft Power BI services? Hire a Power BI expert to tranform your data into actionable insights. Get free online consultation today."
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
                Power BI
              </h1>
              <h2>
                Our Power BI experts helps to transform your data into
                actionable insights.
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
                src="assets/img/Power-BI-1024x586.webp"
                alt="Power-BI-1024x586"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h3>Get Microsoft Power BI Consulting Services</h3>
            <p>
              With our dedicated Power BI consulting services you can transform
              and strengthen your data into actionable insights. With Microsoft
              Power BI solution, you can visualize data, create immersive
              reports and can share the same across their organization to
              strengthen everyone with productive decision-making capabilities.
            </p>
          </header>
          <div className="row p-lg-6">
            <div className="col-lg-6">
              <div className="finace-acc">
                <div class="accordion" id="accnew">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <div className="wr-in">
                          <img
                            src="assets/img/Power-BI-Desktop.svg"
                            alt="Power-BI-Desktop"
                          />
                        </div>
                        <span>Power BI Desktop</span>
                      </button>
                    </h2>
                    <div
                      id="fin1"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Leveraging Power BI Desktop, connect all your data
                        sources, create data models, and finally prepare
                        interactive visuals and key analytics to make smarter
                        decisions with instant efficiency.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <div className="wr-in">
                          <img
                            src="assets/img/Power-Bi-Service.svg"
                            alt="Power-Bi-Service"
                          />
                        </div>
                        <span>Power BI Service</span>
                      </button>
                    </h2>
                    <div
                      id="fin2"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Streamline your data visualization and key analytics
                        across your business channels so as everyone can make
                        effective and productive decisions fulfilling the timely
                        need.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <div class="accordion" id="accnew">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <div className="wr-in">
                          <img
                            src="assets/img/Power-Bi-Mobile.svg"
                            alt="Power-Bi-Mobile"
                          />
                        </div>
                        <span>Power BI Mobile</span>
                      </button>
                    </h2>
                    <div
                      id="fin3"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Stay connected to your data with mobile intelligence.
                        With Power BI Mobile, access, view, and leverage the
                        Power BI reports & insights whenever and wherever
                        required.
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
              <h3>Why Choose Power BI as a Business Intelligence Solution?</h3>
              <h4>Power BI Features & Capabilities</h4>
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
                        Customizable
                      </h3>
                      <div className="overlay"></div>
                      <p>
                        Power BI can be configured and customized suited to your
                        specific business requirements. Businesses can integrate
                        their Power BI with existing Microsoft apps or
                        third-party apps seamlessly.
                      </p>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Transform <br />
                        Your Data
                      </h3>
                      <div className="overlay"></div>
                      <p>
                        With Power BI, it becomes easy to create visual reports
                        & analytics, publish & share the insights, and enable
                        everyone to make data-driven decisions across the
                        organizational boundaries.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Secure <br />& Reliable
                      </h3>
                      <div className="overlay"></div>
                      <p>
                        Power BI is a highly secured and reliable tool that
                        meets your company’s compliance and regulation needs
                        when it comes to sharing data globally.
                      </p>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Easy User
                        <br /> Adaptation
                      </h3>
                      <div className="overlay"></div>
                      <p>
                        From creating powerful visual insights to publishing &
                        sharing with others; Power BI is built imbibing MS drag
                        and drop features, thereby, allows easy and quick user
                        adaption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call_to_action call_to_action-n call_to_action-t">
        <div className="container">
          <div className="swiper solution_new_callto">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="call_to_action-left">
                      <h3>
                        Lorem Ipsum is simply dummy <br />
                        text of the printing.{" "}
                      </h3>
                      <p>
                        {" "}
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.?
                      </p>
                      <div className="new-btn new-btn-nn">
                        <NavLink to="#about" className="btn-get-started-color">
                          <span>Read More Feature</span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="call_to_action-right call_to_action-right-t call_to_action-right-tt">
                      <img src="assets/img/Group-683.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="swiper-slide">
                     <div className="row">
                        <div className="col-md-8">
                           <div className="call_to_action-left">
                              <h3>Dynamics NAV to
                                 Business Central Upgrade!
                              </h3>
                              <p>Are you looking to upgrade from Dynamics NAV to Dynamics 365 BC?</p>
                              <div className="new-btn new-btn-nn">
                                 <NavLink to="#about" className="btn-get-started-color">
                                 <span>Read More Feature</span>
                                 </NavLink>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-4">
                           <div className="call_to_action-right"><img src="assets/img/Group-683.png" alt="image" /></div>
                        </div>
                     </div>
                    </div> */}
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
      <section className="busine_service_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <img
                    src="assets/img/bisin_leftimg.jpg"
                    className="fix-im"
                    alt="bisin_leftimg"
                  />
                  <img
                    src="assets/img/ico6.svg"
                    className="flot-img"
                    alt="ico6"
                  />
                  <div className="video-ytube">
                    <div className="popup-btn">
                      <NavLink data-bs-toggle="modal" to="#exampleModalToggle">
                        <img src="assets/img/contactfor-sede-img.jpg" />
                        <span className="cente-icns">
                          <img
                            src="assets/img/play_icons.svg"
                            alt="play_icons"
                          />
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="side-heading">
                <h3>Your Trusted Power BI Partner</h3>
                <p>
                  Uplift Your Business with our Power BI Consulting Services
                </p>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="assets/img/Business-Central-Implementation-icons.svg"
                    alt="Business-Central-Implementation-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Power BI Implementation</h3>
                  <p>
                    Get Power BI Implementation customized and configured suited
                    to your specific business needs.
                  </p>
                  <div className="action-content">
                    <NavLink to="#">Get Started</NavLink>
                  </div>
                </div>
              </div>
              {/* <div className="busine_service_bottom-right">
                        <div className="card_new_img">
                           <img src="assets/img/Business Central Upgrade-icons.svg" alt="Business Central Upgrade-icons" />
                        </div>
                        <div className="card_new_content">
                           <h3>Upgrade</h3>
                           <p>Bring innovation and drive agility in your financial operations all through D365 Finance Upgrade.</p>
                           <div className="action-content"><NavLink to="#">Get Started</NavLink></div>
                        </div>
                     </div> */}
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="assets/img/Business-Central-Support-icons.svg"
                    alt="Business-Central-Support-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Power BI Support</h3>
                  <p>
                    Get our Power BI Support Services to fully meet your
                    business needs. Contact our Power Expert Now.{" "}
                  </p>
                  <div className="action-content">
                    <NavLink to="#">Get Started</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h3>Microsoft Power BI Pricing</h3>
            <p>
              Being a Power BI Implementation Partner, we can reveal the
              best-suited Power BI plan for you.
            </p>
          </header>
          <div className="row gy-4 p-9">
            <div className="col-lg-4">
              <div className="box power-new-price">
                <h4>
                  Power BI <br />
                  Pro
                </h4>
                <div className="price price-power">
                  <sup>£</sup>7.50<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Connect to over 100 data
                    sources
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Mobile app
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>1GB model size limit
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Embed Power BI visuals
                    into PowerApps, SharePoint and Teams
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>8 Data refreshes daily
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>10 GB per user storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>AI visuals
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Embedded APIs and controls
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Data security and
                    encryption
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Metrics with content
                    creation and publishing
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Native integration with
                    other Microsoft solutions
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Share dashboards,
                    datasets, and reports with other Power BI users
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Create app work and
                    peer-to-peer sharing
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box power-new-price">
                <h4>
                  Power BI
                  <br />
                  Premium
                </h4>
                <div className="price price-power">
                  <sup>£</sup>15.10<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>100 GB model size limit
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>100 TB of storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Access to one API surface
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>XMLA endpoint read/write
                    connectivity
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Data flows
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Analyse data stored in
                    Azure Data Lake Storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Application lifecycle
                    management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Embed Power BI visuals
                    into PowerApps, SharePoint and Teams
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Larger storage size for
                    extended deployment
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Advanced AI features
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>48 data refreshes daily
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Geo distribution, pin to
                    memory and read-only replicas
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Publish reports to share
                    and collaborate
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box power-new-price">
                <h4>
                  Power BI
                  <br />
                  Premium
                </h4>
                <div className="price price-power">
                  <sup>£</sup>3,766.70<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>100 GB model size limit
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>100 TB of storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Access to one API surface
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>XMLA endpoint read/write
                    connectivity
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Data flows
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Analyse data stored in
                    Azure Data Lake Storage
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Application lifecycle
                    management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Embed Power BI visuals
                    into PowerApps, SharePoint and Teams
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Larger storage size for
                    extended deployment
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Advanced AI features
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>48 data refreshes daily
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Geo distribution, pin to
                    memory and read-only replicas
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>On-premise reporting
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>400 GB model size limit
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Azure Autoscale add-on
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Multi-location deployment
                    management
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="col-lg-6 col-md-6">
                     <div className="box box-22">
                        <h4>Business Central<br />
                           Essentials
                        </h4>
                        <div className="price"><sup>£</sup>135.70<span>Per-User/Per Month</span></div>
                        <ul>
                           <li> An intelligent, automated, and trusted core financial management solution.</li>
                        </ul>
                       
                     </div>
                  </div> */}
            {/* <div className="col-lg-3 col-md-3">
                     <div className="box">
                        <h4>Business Central<br />
                           Essentials
                        </h4>
                        <div className="price"><sup>£</sup>52.80<span>Per-User/Per Month</span></div>
                        <ul>
                           <li> <i className="bi bi-check-lg"></i> Read and Approve</li>
                           <li> <i className="bi bi-check-lg"></i> Employee Self Serve</li>
                           <li> <i className="bi bi-check-lg"></i> Run All Reports</li>
                        </ul>
                       
                     </div>
                  </div> */}

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <NavLink to="#about" className="btn-get-red">
                  <span>Get Power Bi Now</span>
                </NavLink>
                {/* <NavLink to="#about" className="btn-get-whit">
                              <span>See Licensing Guide</span>
                              </NavLink> */}
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
                <h3>Do you want to watch Power BI in Action?</h3>
                <p>
                  Discuss your business problems with our Power BI experts, we
                  can reveal the best-in-class Power BI solution customized to
                  your business.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <NavLink to="#about" className="btn-get-started scrollto">
                    <span>Get Started Now</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs-extra">
        <div className="container">
          <header className="section-header">
            <h3>
              Check out our Best Resources
              <br />
              for Power BI
            </h3>
          </header>
          <div className="row top-2 gx-5">
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h4>Articles</h4>
              </div>
              <div className="blogs-extra-left">
                <div className="blogs-extra-left-img">
                  <NavLink to="#">
                    <img
                      src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/04/Dynamics-365-Business-Central-2022-Wave-1-300x157.png"
                      alt="img"
                      width="200"
                      height="104"
                    />
                  </NavLink>
                </div>
                <div className="blogs-extra-left-content">
                  <h4>
                    <NavLink to="#">
                      Dynamics 365 Business Central 2022 Wave 1
                    </NavLink>
                  </h4>
                  <span>19 April 2022</span>
                </div>
              </div>
              <div className="blogs-extra-left">
                <div className="blogs-extra-left-img">
                  <NavLink to="#">
                    <img
                      src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/04/BC-vs-D-CRM-300x157.jpg"
                      alt="img"
                      width="200"
                      height="104"
                    />
                  </NavLink>
                </div>
                <div className="blogs-extra-left-content">
                  <h4>
                    <NavLink to="#">
                      Dynamics 365 Business Central Vs Dynamics 365 CRM
                    </NavLink>
                  </h4>
                  <span>12 April 2022</span>
                </div>
              </div>
              <div className="blogs-extra-left">
                <div className="blogs-extra-left-img">
                  <NavLink to="#">
                    <img
                      src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/03/D365-vs-GP-300x157.jpg"
                      alt="img"
                      width="200"
                      height="104"
                    />
                  </NavLink>
                </div>
                <div className="blogs-extra-left-content">
                  <h4>
                    <NavLink to="#">
                      Dynamics 365 Business Central Vs GP
                    </NavLink>
                  </h4>
                  <span>28 March 2022</span>
                </div>
              </div>
              <div className="blogs-extra-left">
                <div className="blogs-extra-left-img">
                  <NavLink to="#">
                    <img
                      src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/03/Blog-Image-BC-vs-Finance-and-SC-1-300x157.jpg"
                      alt="img"
                      width="200"
                      height="104"
                    />
                  </NavLink>
                </div>
                <div className="blogs-extra-left-content">
                  <h4>
                    <NavLink to="#">
                      Business Central Vs Finance & Supply Chain
                    </NavLink>
                  </h4>
                  <span>22 March 2022</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h4>Important Power BI Links:</h4>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-box-arrow-up-right"></i>What is Power
                      BI?
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-box-arrow-up-right"></i>Free Power BI
                      Webinar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-box-arrow-up-right"></i>Power BI
                      Licensing Guide
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-box-arrow-up-right"></i>Power BI
                      Architecture
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-box-arrow-up-right"></i>Power BI
                      Reports
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-box-arrow-up-right"></i>Why Your
                      Business Should Implement Power BI?
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solution-faq faq">
        <div className="container">
          <header className="section-header">
            <h3>
              Have you got
              <br />
              questions about Power BI ?
            </h3>
            <p>Click through to our FAQ for the best answers!</p>
          </header>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      What is Power BI?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Power BI is Microsoft’s highly embedded analytics tool to
                      develop and share reports with people across your
                      business. Power BI is designed that can seamlessly be
                      configured with Microsoft’s own applications as well as
                      other well-known third-party applications so as businesses
                      without disturbing their existing system set-up can avail
                      of Power BI and get it configured with their existing
                      system to work in an integrated manner.
                      <br />
                      <br />
                      Power BI helps enterprises to make powerful reporting
                      visuals, key analytics, and other graphical analysis.
                      Users can even develop their own visuals suited to their
                      specific business needs and can share the same within
                      their organization to be used further by their workforce.
                      All the Power BI reports can be published and demonstrated
                      on user dashboards. These reports and insights available
                      in different visualizations help businesses for better
                      decision making. Moreover, dashboards can also be
                      customized to address specific user needs. <br />
                      <br />
                      Get more insight about "What is Power BI?"
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      Does Power BI produce Paginated reports?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Yes, Power BI allows users to create pixel-perfect and
                      highly formatted Paginated reports that can be leveraged
                      for a printing purpose or to create a pdf version.
                      Paginated reports are developed and available in the Power
                      BI premium plan to fit well on multiple pages. User(s) can
                      publish and share paginated reports through the Power BI
                      dashboard across their workspace.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      Can I use Power BI for Budgeting & Forecasting?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Power BI is a powerful data visualization and business
                      analytics tool that makes effective use of the data
                      sources you connect with and prepares your data for
                      budgeting and forecasting insights.
                      <br />
                      <br />
                      You could have data on MS Excel, Salesforce, or
                      QuickBooks; Power BI utilizes your data sources and
                      prepares your data for budgeting and forecasting insights.
                      For instance, it could be sales forecasting reports,
                      production analysis, operational budgets, Cashflow
                      statements, asset planning, and more. To know more about
                      how it works, you can contact Dynamics Square.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >
                      How is Power BI different from traditional BI
                      implementations?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      When it comes to comparing Power BI with traditional BI
                      tools, there could be several differences. Power BI is a
                      next-generation Business Intelligence tool that is
                      facilitated with cloud and self-service opportunities.
                      <br />
                      <br />
                      The very first benefit of Power BI over a traditional one
                      is - Power BI can be configured for on-premises as well as
                      on-cloud i.e., Software as a Service (SaaS). Users can
                      access their data (hosted on Microsof's Azure Server)
                      simply using their browser. Cloud-based Power BI solution
                      eliminates the upfront cost, hardware investment, and
                      lowers the license pricing.
                      <br />
                      <br />
                      The Next but not the least benefit of Power BI over
                      traditional BI systems is Self-service facilitation. With
                      Power BI, you can create custom reports, create your own
                      visuals, and can extend the existing Power BI reports
                      which are not possible with traditional business
                      intelligence systems. Using traditional BI configuration,
                      users can make decisions based on guided analytics or
                      reports only; they can't make their own reports or perform
                      customizations, etc. Moreover, Power BI reduces your
                      costs, stimulates the development cycle, and accelerates
                      user adoption.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >
                      What is Power BI Report Server? Does this mean you are
                      making Power BI available for on-premises systems?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Power BI Report Server is the on-premises reporting
                      solution wherein users can create reports today and can
                      move to the cloud later. If you want to keep data within
                      your organizational boundaries, you can simply create,
                      access, and share accordingly. It is included in the Power
                      BI premium plan. It works on your own terms.
                      <br />
                      <br />
                      Report Server enables you to create interactive and
                      intuitive reports leveraging the reporting capabilities of
                      SSRS (SQL Server Reporting Services). You can even design
                      pixel-perfect paginated reports configured to your
                      business needs. Since the Power BI Report Server is an
                      enterprise-grade platform, it also allows you to scale
                      thousands of users.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                    >
                      How is Power BI licensed? How much does the Power BI
                      premium cost?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      In terms of Power BI licensing, Power BI Desktop is
                      available to download for free. All you need to register
                      your business at no cost. With this simple step, any
                      business user can start creating their reports, but this
                      will not allow you to share or distribute your reports to
                      the people in your organization.
                      <br />
                      <br />
                      Once you opt for the Power BI Pro license, you will be get
                      permitted to share your reports with other users (each
                      with a Power BI Pro license in your workspace. Rest, you
                      can always contact Dynamics Square to enquire about Power
                      BI licensing costs for your business.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-7"
                    >
                      What if I want more functionality or change?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist7"
                  >
                    <div className="accordion-body">
                      Power BI is a highly flexible business analytics solution
                      that can be customized as per your specific business
                      domain and contextual needs. Even post-implementation, you
                      can ask for more functionality from your Power BI
                      implementation provider.
                      <br />
                      <br />
                      For instance, your current system is on-premises
                      facilitated and you want cloud later or you are using
                      Power BI Pro and want to upgrade with Power BI premium.
                      You can even get your custom implementation for now and
                      can ask for more functionality upgrades or customization
                      suited to your continuously changing need. To get more
                      information on this, simply connect with Dynamics Square.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PowerBI;
