import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const SupplyChainManagement = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dynamics 365 Supply Chain Management | Dynamics Square</title>
        <link rel="canonical" href="" />
        <meta
          name="description"
          content="Dynamics 365 Supply Chain management helps organizations simplify, streamline, and accelerate their supply chain practices just to produce, drive, and scale high."
        />
        <meta content="" name="keywords" />
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1">
              <h1>
                Dynamics 365 <br />
                Supply Chain Management
              </h1>
              <h2>
                Explore new Supply Chain capabilities, optimize resources,
                maximize operational efficiency, and accelerate time to market
                while keeping real-time eyes in your end-to-end supply chain
                operations.
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
                src="assets/img/banner-supply-chain-management.svg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h3>
              What is dynamics 365
              <br />
              Supply Chain Management?
            </h3>
            <p>
              Bring a unified view of your entire supply chain cycle from
              inventory, warehousing, manufacturing, logistics, and more along{" "}
              <br />
              with predictive data to support instant and strategic
              decision-making. Microsoft Dynamics 365 Supply Chain helps
              organizations simplify, streamline, and accelerate their supply
              chain practices just to produce, drive, and scale high.
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
                          <img src="assets/img/Budget.svg" alt="icons" />
                        </div>
                        <span>Accelerate Time to Market</span>
                      </button>
                    </h2>
                    <div
                      id="fin1"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        With Dynamics 365 Supply Chain Management, accelerate
                        time to market, simplify your order management, and
                        seamlessly manage & resolve product quality issues to
                        improve customer satisfaction.
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
                          <img src="assets/img/Financials-3.svg" alt="icons" />
                        </div>
                        <span>Demand Analysis & Fulfillment</span>
                      </button>
                    </h2>
                    <div
                      id="fin2"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Organize and manage your entire financial records using
                        a general ledger. Manage your account payable, accounts
                        receivable, tax management, and more with D365 Finance.
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
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <div className="wr-in">
                          <img src="assets/img/Budget.svg" alt="icons" />
                        </div>
                        <span>Optimize Inventory & Logistics</span>
                      </button>
                    </h2>
                    <div
                      id="fin3"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Drive omnichannel inventory with real-time access,
                        automate your logistics and warehousing processes,
                        simplify your procurement management, and estimate
                        accurate landed costs with D365 Supply Chain Management.
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
                          <img src="assets/img/Project.svg" alt="icons" />
                        </div>
                        <span>Intelligent Manufacturing Operations </span>
                      </button>
                    </h2>
                    <div
                      id="fin3"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Bring agility and scalability in your manufacturing
                        processes, minimize errors, and drive business
                        continuity even in remote locations by implementing
                        Dynamics Supply Chain module embedded with AI, IoT, and
                        Mixed Reality.
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
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <div className="wr-in">
                          <img
                            src="assets/img/International-Accounting-3.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Increase Asset Uptime</span>
                      </button>
                    </h2>
                    <div
                      id="fin4"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Automate resource scheduling, reduce machine downtime,
                        and proactively manage critical supply chain operations
                        by applying predictive maintenance, and improving
                        equipment effectiveness all through D365 Supply Chain
                        Solutions.
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
                Why Dynamics <br />
                365 Supply Chain Management?
              </h3>

              <h4>Microsoft Dynamics 365 Supply Chain Management Features</h4>
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
                        Automate & <br />
                        Unify Operations{" "}
                      </h3>
                      <div className="overlay"></div>
                      <p>
                        Bring automation in your entire supply chain pipeline to
                        accelerate processes while reducing redundant tasks.
                        Streamline operations with a unified data view of
                        inventory, manufacturing, warehousing, logistics, and
                        more.
                      </p>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Drive Innovation <br />& Scalability
                      </h3>
                      <div className="overlay"></div>
                      <p>
                        Maximize operational efficiency, optimize your workforce
                        productivity, drive scalability by bringing transparency
                        in your supply chain cycle from ordering, warehousing,
                        forecasting to inventory management and automation. .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Drive Strategic
                        <br /> Planning
                      </h3>
                      <div className="overlay"></div>
                      <p>
                        With Microsoft 365 Supply Chain Management, turn your
                        supply chain and logistics data into predictive
                        analytics to make informed decisions and drive strategic
                        planning for better revenue outcomes.{" "}
                      </p>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Optimize
                        <br /> Resources
                      </h3>
                      <div className="overlay"></div>
                      <p>
                        Keep tracking your inventory levels, improve cost
                        management, predict customer demand, and enable better
                        resource and inventory planning to drive productive
                        growth while reducing downtime and eliminating
                        redundancies.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call_to_action call_to_action-n">
        <div className="container">
          <div className="swiper solution_new_callto">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="call_to_action-left">
                      <h3>
                        Create an intelligent and adaptable <br />
                        supply chain
                      </h3>
                      <p>
                        Discuss your business requirement with us, we can
                        suggest a highly customized solution for your Business.
                      </p>
                      <div className="new-btn new-btn-nn">
                        <NavLink to="#about" className="btn-get-started-color">
                          <span>Read More Feature</span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="call_to_action-right">
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
                <h3>Supply Chain Management Service</h3>
                <p>
                  Strategically Work Towards Fulfilling Your Financial Visions
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
                  <h3>Implementation</h3>
                  <p>
                    Elevate your business efficiency with our strategic and
                    highly customized D365 Supply Chain Management.{" "}
                  </p>
                  <div className="action-content">
                    <NavLink to="#">Get Started</NavLink>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="assets/img/Business Central Upgrade-icons.svg"
                    alt="Business Central Upgrade-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Upgrade</h3>
                  <p>
                    Upgrade your business capabilities with our seamless Supply
                    Chain upgrade services.{" "}
                  </p>
                  <div className="action-content">
                    <NavLink to="#">Get Started</NavLink>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="assets/img/Business-Central-Support-icons.svg"
                    alt="Business-Central-Support-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>Support</h3>
                  <p>
                    Enjoy uninterrupted business flow to maximize growth with
                    our premium support services.
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
            <h3>Supply Chain Management Pricing</h3>
            <p>
              Build a consistent and flexible supply chain by our Dynamics 365
              Supply Chain Management Packages
            </p>
          </header>
          <div className="row gy-4 p-9">
            <div className="col-lg-3">
              {/* <div className="box">
                        <h4>Business Central<br />
                           Essentials
                        </h4>
                        <div className="price"><sup>£</sup>52.80<span>Per-User/Per Month</span></div>
                        <ul>
                           <li> <i className="bi bi-check-lg"></i> Financial Management</li>
                           <li> <i className="bi bi-check-lg"></i> Inventory Management</li>
                           <li> <i className="bi bi-check-lg"></i> Order Management</li>
                           <li> <i className="bi bi-check-lg"></i> Purchase Order Management</li>
                           <li> <i className="bi bi-check-lg"></i> Project Management</li>
                           <li> <i className="bi bi-check-lg"></i> Additional Capabilities</li>
                        </ul>
                       
                     </div> */}
            </div>
            <div className="col-lg-6">
              <div className="box box-22">
                <h4>
                  Dynamics 365
                  <br />
                  Supply Chain Management
                </h4>
                <div className="price">
                  <sup>£</sup>135.70<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    Build Resilience with an Agile Supply Chain with Dynamics
                    365. Enhance Customer Service. Drive Business Sales. Manage
                    Topline Revenue. Market Smarter. Services: Cloud-Based CRM,
                    Customer Support, Automate Sales, Marketing Features.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              {/* <div className="box">
                        <h4>Business Central<br />
                           Essentials
                        </h4>
                        <div className="price"><sup>£</sup>52.80<span>Per-User/Per Month</span></div>
                        <ul>
                           <li> <i className="bi bi-check-lg"></i> Read and Approve</li>
                           <li> <i className="bi bi-check-lg"></i> Employee Self Serve</li>
                           <li> <i className="bi bi-check-lg"></i> Run All Reports</li>
                        </ul>
                       
                     </div> */}
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn price-btnasd d-flex justify-content-center">
                <NavLink to="#about" className="btn-get-red">
                  <span>Get Started Now</span>
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
                <h3>Maximize your business potentials</h3>
                <p>
                  Drive new business challenges by implementing Dynamics 365
                  Supply Chain Management
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
              for Supply Chain Management
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
                <h4>Documents</h4>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-file-earmark-pdf"></i>Nucleus Research
                      Report 2019
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-file-earmark-pdf"></i>The top 8 Trends
                      Every COO Should Know
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-file-earmark-pdf"></i>The Savvy
                      Leader’s Guide to Building Intelligent Supply Chain
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-file-earmark-pdf"></i>Creating an
                      Agile Supply Chain
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-file-earmark-pdf"></i>A Quick-Start
                      Guide for Improving Supply Chain Resilience
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-file-earmark-pdf"></i>Risk Mitigation
                      Across Today’s Supply Chain
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-file-earmark-pdf"></i> Licensing Guide
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* <div className="blogs-extra-title">
                        <h4>Learn More</h4>
                     </div>
                     <div className="blogs-extra-right">
                        <ul>
                           <li><NavLink to="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Collections automation</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Vendor invoice automation</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-box-arrow-up-right"></i> Why to Upgrade Dynamics NAV to Business Central</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Asset leasing</NavLink></li>
                        </ul>
                     </div> */}
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
              questions about Supply Chain Management?
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
                      What is Supply Chain Management in Dynamics 365?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Supply Chain Management is an all-in-one
                      package to simplify and transform the supply chain
                      practices for small to medium scale businesses. Dynamics
                      Supply Chain module empowers your supply chain workforce
                      with not just planning and logistics capabilities, even it
                      enables to gain predictive insights and other real-time
                      connectivity across supply chain operations including
                      production, planning, warehousing, and transportation
                      management to boost operational efficiency while
                      maximizing profitability and scalability.
                      <br />
                      <br />
                      To know more about how D365 Supply Chain Management
                      solutions can help to improve and maximize your supply
                      chain efficiency, Dynamics Square can help.
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
                      How Supply Chain Management helps in business?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Considering the rapid changes in the industry, increasing
                      customer demand, and continuously evolving market
                      competitions, businesses are required to implement a
                      solution to streamline and automate their supply chain
                      operations.
                      <br />
                      <br />
                      Initially, you can manage your operations manually. Once
                      your business starts growing, you need to support your
                      business continuity with smart business solutions like
                      Microsoft Dynamics 365 Supply Chain Management – a
                      cloud-based solution to seamlessly roll out your supply
                      chain efficiency.
                      <br />
                      <br />
                      Dynamics 365 for Supply Chain is embedded with AI, Mixed
                      Reality, and IoT capabilities, that help to eliminate your
                      repetitive tasks, empower your workforce to make instant
                      strategic decisions, and reduce downtime for your
                      equipment to eventually drive continuity, scale faster,
                      and remain productive.
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
                      Why Dynamics 365 Supply Chain Management?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 for Supply Chain Management is the key
                      solution to manage all your supply chain, warehousing, and
                      operational needs. You can stay updated with all the
                      happening in real-time with D365 Supply Chain Management
                      services. Whether you want to keep real-time eyes on your
                      inventory status, simplify your procurement process, or
                      drive seamless logistics operations, Microsoft’s Supply
                      Chain solutions help enterprises to manage their
                      end-to-end SCM practices. <br />
                      <br />
                      With Supply Chain Solutions (SCM), you can streamline your
                      processes and automate your data to modernize your supply
                      chain practices. With AI efficiency and prediction
                      capability, businesses can make informed decisions to
                      support growth, productivity, and scalability. Connect
                      with Dynamics Square to know how Microsoft’s Sup
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
                      What are the key features of Dynamics 365 Supply Chain
                      Management?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Supply Chain Management comes with several
                      business-driven features that help to manage the entire
                      supply chain practices with real-time data-driven
                      capability. Here is the list of D365 Supply Chain
                      Management features:
                      <br />
                      <br />
                      <ul>
                        <li>Asset Management</li>
                        <li>Cost Accounting</li>
                        <li>Cost Management</li>
                        <li>Inventory Management</li>
                        <li>IoT Intelligence</li>
                        <li>Master Planning</li>
                        <li>Procurement & Sourcing</li>
                        <li>Product Information Management</li>
                        <li>Production Control</li>
                        <li>Sales & Marketing</li>
                        <li>Service Management</li>
                        <li>Transportation Management</li>
                        <li>Warehouse Management</li>
                      </ul>
                      <br />
                      <br />
                      Depending on your key business requirement, you would
                      require customized features for your business. Dynamics
                      Square can develop and implement highly customized supply
                      chain solutions for your business.
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
                      How D365 Supply Chain Management helps to drive smarter?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      When you can automate your data and streamline your
                      practices while reducing costs and eliminating data
                      redundancies, it can help you bring a smoother flow across
                      your supply chain processes. <br />
                      <br />
                      D365 Supply Chain Management can help your enterprise to
                      bring real-time data efficiency across your supply chain
                      pipeline from managing inventories, to warehousing, to
                      logistics management, procurement to service, and
                      transportation management. <br />
                      <br />
                      Since Dynamics 365 Supply Chain eliminates your manual
                      efforts and enables access to real-time data and analytics
                      to make informed decisions. Hence, it helps businesses to
                      drive smarter.
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
                      How much does it cost to implement Dynamics 365 Supply
                      Chain Management?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      When it comes to Dynamics 365 Supply Chain Management
                      solutions, businesses are required to pay 135.70 pounds
                      (approx.) per user/per month. Rest depends on your number
                      of users; it will be calculated accordingly.
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
                      Can I customize or integrate my Supply Chain Management
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Microsoft Dynamics 365 Supply Comes with a number of
                      modules to support your business flow and bring continuity
                      in your supply chain pipeline with real-time access into
                      each process. <br />
                      <br />
                      We understand you could have a different set of practices
                      or flow in your supply chain, thereby Microsoft’s supply
                      chain solution comes with the flexibility that can be
                      customized according to your business suite and configured
                      or integrated to support your current as well as
                      futuristic needs.
                      <br />
                      <br />
                      If you want to discuss what sort of customization,
                      integration, or configuration can be performed addressing
                      your custom supply chain process, connect with Dynamics
                      Square.
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

export default SupplyChainManagement;
