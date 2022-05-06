import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Sales = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dynamics 365 Sales | Microsoft Sales CRM Solutions</title>
        <link rel="canonical" href="" />
        <meta
          name="description"
          content="Dynamics 365 for sales is a customer relationship management software that helps to effortlessly build strong relationships with your customers and seamlessly."
        />
        <meta content="" name="keywords" />
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1">
              <h1>
                Dynamics 365
                <br />
                Sales
              </h1>
              <h2>
                Upgrade your system with Microsoft Dynamics 365 Sales to impact
                your sales drive and improve sound customer relationships to
                elevate your business values while maximizing your revenue
                outcomes.
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
              <img src="assets/img/Dynamics-365-Sales-Banner.svg" alt="image" />
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
              Sales?
            </h3>
            <p>
              Microsoft Dynamics 365 for Sales (formerly known as Dynamics CRM)
              helps to improve end-to-end sales practices, build & improve{" "}
              <br />
              your customer relationship, and supports to close sales deals
              faster. With actionable sales insights configured for mobile
              devices, it helps to make instant productive decisions, engage
              customers, and drive effective sales strategy.
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
                          <img src="assets/img/sales-hub-app.svg" alt="icons" />
                        </div>
                        <span>Sales Hub App</span>
                      </button>
                    </h2>
                    <div
                      id="fin1"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Developed on unified interface framework configured with
                        responsiveness that facilitates users with interactive
                        app view and navigation for any screen or device. The
                        Sales Hub app is designed to be used by both desktops
                        and mobile devices and comes with Microsoft Dynamics 365
                        Sales Enterprise Plan.
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
                            src="assets/img/sales-proffesional-app.svg"
                            alt="icons"
                          />
                        </div>
                        <span>Sales Professional App</span>
                      </button>
                    </h2>
                    <div
                      id="fin3"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Sales Professional App is designed similar to the Sales
                        Hub app. The only difference is- the entities that Sales
                        Professional app comprises are a subset of entities
                        included in the Sales Enterprise licensing. This app
                        comes and can be availed of with Microsoft Dynamics 365
                        Sales Professional licensing Plan.
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
                Why Implement Microsoft Dynamics 365 Sales for Your Business?
              </h3>

              <h4>Dynamics 365 For Sales Features</h4>
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
                        Build & Improve <br />
                        Customer Relationship{" "}
                      </h3>
                      <div className="overlay"></div>
                      <p>
                        With a unified view of interactions and real-time
                        engaging facilitation, connect, engage, and build
                        customer relationships. Identify whom and how to engage
                        to drive conversions.
                      </p>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Collaborate & <br />
                        Engage Faster
                      </h3>
                      <div className="overlay"></div>
                      <p>
                        Gain visibility into the right data insights,
                        collaborate with your sales team in real-time, and
                        manage your end-to-end sales pipeline leveraging a
                        single collaborated workspace.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Close <br />
                        Sales Faster
                      </h3>
                      <div className="overlay"></div>
                      <p>
                        Leveraging AI-based insights, connect and engage with
                        the right customers across communication channels. Meet
                        and collaborate with your customers virtually to close
                        sales faster.
                      </p>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                        Make Informed <br />
                        Decisions
                      </h3>
                      <div className="overlay"></div>
                      <p>
                        With AI-based data-driven practices, automate your sales
                        and marketing practices and make informed decisions to
                        enable and drive continuous productivity.{" "}
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
                      <h3>Talk to Our Experts</h3>
                      <p>
                        Discuss and reveal a business solution best suited to
                        your specific sales processes.
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
                <h3>Dynamics 365 Sales Service</h3>
                <p>
                  We offer a full range of services to support you on your
                  Dynamics 365 Sales journey including implementation, upgrade
                  and support.
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
                    Proactively manage your sales with an improved customer
                    experience by implementing Dynamics 365 Sales.
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
                    Uplift your business deliveries by simply upgrading your
                    system with Microsoft’s Sales Management Solution.
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
                    Bring continuity and drive sales efficiency all through
                    Dynamics 365 Sales support services.
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
            <h3>Dynamics 365 Sales Pricing</h3>
            <p>
              Choose The Applications That Are Right For Your Business Needs.{" "}
            </p>
          </header>
          <div className="row gy-4 p-9">
            <div className="col-lg-4">
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
              <div className="box box-22">
                <h4>
                  Dynamics 365 Sales
                  <br />
                  Professional
                </h4>
                <div className="price">
                  <sup>£</sup>49<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    {" "}
                    Core sales force automation and Microsoft 365 integration
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box box-22">
                <h4>
                  Dynamics 365 Sales
                  <br />
                  Essentials
                </h4>
                <div className="price">
                  <sup>£</sup>71.60<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    Industry-leading sales force automation with contextual
                    insights and advanced customisation capabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
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
              <div className="box box-22">
                <h4>
                  Dynamics 365 Sales
                  <br />
                  Premium
                </h4>
                <div className="price">
                  <sup>£</sup>101.80<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    {" "}
                    Dynamics 365 Sales Enterprise plus prebuilt customisable
                    intelligence solutions for sellers and managers
                  </li>
                </ul>
              </div>
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
                  Sales
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
              for Finance
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
                      Business Central Vs Finance & Supply Chaint
                    </NavLink>
                  </h4>
                  <span>28 March 2022</span>
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
                      10 Powerful Reasons to Upgrade Accounting Software
                    </NavLink>
                  </h4>
                  <span>28 March 2022</span>
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
                      Dynamics 365 Business Central Wave 2: 2021 Highlights
                    </NavLink>
                  </h4>
                  <span>28 March 2022</span>
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
                      <i className="bi bi-file-earmark-pdf"></i>6 Strategies to
                      Boost Sales Productivity
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-file-earmark-pdf"></i>Building
                      Relationships in Today’s Sales Environment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-file-earmark-pdf"></i>Dynamics 365
                      Sales Professional
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i className="bi bi-file-earmark-pdf"></i>Key Capability
                      of Dynamics 365 Sales
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
              questions about Sales?
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
                      What is Microsoft Dynamics 365 Sales?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 for sales is a customer relationship
                      management software that helps to effortlessly build
                      strong relationships with your customers and seamlessly
                      manage your sales campaigns to close sales faster.
                      AI-based sales insights help businesses effectively
                      leverage their sales data to connect and engage with the
                      right customers from anywhere and anytime. With mobile
                      efficiency, Salespeople and Sales Managers can stay
                      updated with any sales activity and customer behavior in
                      real-time.
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
                      What is Dynamics 365 for Sales used for?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Sales is a powerful sales management solution
                      to manage sales and customers using a single app
                      leveraging mobile devices. It helps to identify actual
                      customers to connect and engage with them in real-time.
                      Utilizing sales insights and customer data, salespeople
                      can make instant and productive decisions supporting their
                      sales campaigns. Sales managers can monitor their sales
                      team’s performance and, if necessary, can guide them to
                      improve things to obtain better results and ensure
                      campaign success.
                      <br />
                      <br />
                      When you implement Dynamics 365 Sales, it enables sales
                      managers to access and create excel documents without
                      switching apps. They can even instantly create sales
                      documents using a single interface when configured with
                      other Microsoft apps..
                      <br />
                      <br />
                      To avail of a free consultation to manage your sales and
                      customers or to implement Microsoft Dynamics CRM solution
                      for your business, experts at Dynamics Square can help.
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
                      How does Microsoft Dynamics 365 help in Sales?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Microsoft Dynamics 365 for Sales helps enterprises to
                      effectively roll out their sales campaigns, manage
                      customers, and drive productivity. This sales management
                      solution helps to streamline their sales data, connect &
                      engage customers, and make informed decisions leveraging
                      sales analytics to close maximized sales in a faster
                      manner.
                      <br />
                      <br />
                      Dynamics 365 for Sales helps enterprises to eliminate
                      their time-consuming manual efforts, repetitive tasks, and
                      other redundancies. It enables businesses to focus more on
                      their core sales tasks that drive sales, customers,
                      profitability.
                      <br />
                      <br />
                      No matter what business context you belong to, out of the
                      available CRM systems, Microsoft Dynamics 365 Sales can
                      help you bring your entire sales and customers data at the
                      siloed interface that can be seamlessly accessed, edited,
                      utilized, and shared with anyone in your organizational
                      connection even without switching apps.
                      <br />
                      <br />
                      With Dynamics 365 Sales, everyone involved in the Sales
                      process can access data and manage customers from anywhere
                      and at any time using mobile or tab devices. To know how
                      Dynamics 365 sales can help to improve your customer
                      experience and impact your sales drive, contact experts at
                      Dynamics Square.
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
                      Is Dynamics 365 Sales available on-premises?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Yes, Dynamics 365 Sales is available on-premises but only
                      for Dynamics 365 Sales Enterprise Plan not for the Sales
                      Professional plan. Enterprise Plan comes with both the
                      on-premises and cloud versions whereas Sales Professional
                      license comes with cloud facilitation only.
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
                      How much does it cost to implement Microsoft Dynamics 365
                      for Sales?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Addressing your specific business needs and a number of
                      user requirements, your licensing need for Dynamics 365
                      Sales may go different. To know your exact licensing cost,
                      connect with Dynamics Square. Here, we are giving a rough
                      idea of licensing to implement Dynamics 365 Sales
                      considering the most common licensing model:
                      <br />
                      <br />
                      <b>Dynamics 365 Sales Professional</b>
                      <br />
                      <br />
                      <ul>
                        <li>
                          For first Dynamics 365 App – 49 pounds/ per user
                          (approx.)
                        </li>
                        <li>
                          For Subsequent Dynamics 365 App – 15 pounds/per user
                          (approx.)
                        </li>
                      </ul>
                      <b>Dynamics 365 Sales Enterprise</b>
                      <br />
                      <br />
                      <ul>
                        <li>
                          For First Dynamics 365 App – 71.60 Pounds/per user
                          (approx.)
                        </li>
                        <li>
                          For Subsequent Dynamics 365 App – 15 pounds/per user
                          (approx.)
                        </li>
                      </ul>
                      <b>Dynamics 365 Sales Premium </b>
                      <br />
                      <br />
                      <ul>
                        <li>
                          For First Dynamics 365 App – 101.80 Pounds/per user.
                        </li>
                      </ul>
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
                      How does Dynamics 365 Sales Works?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Sales helps to transform your entire sales
                      model. It enables businesses to improve and uplift their
                      digital sales experience. They can connect and engage the
                      actual customers in real-time. With centralized data,
                      Dynamics 365 Sales enables people to collaborate and
                      process the same customer data in real-time which helps to
                      streamline and accelerate sales.
                      <br />
                      <br />
                      Instant sales reports and other actionable insights help
                      everyone in the sales team to make informed decisions in
                      real-time as Dynamics 365 sales eliminate the need for
                      manual data processing and repetitive tasks.
                      <br />
                      <br />
                      When you get handy with sales insights and customer
                      behavior in real-time, it helps convert the leads and
                      close the sales faster. Sales managers can monitor and
                      control the sales process and can suggest supporting the
                      ongoing sales process or campaign.
                      <br />
                      <br />
                      With predictive insights, salespeople can manage sales,
                      customers, and can determine their priorities to impact
                      and accelerate sales and profitability.
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
                      How do I access Dynamics 365 Sales Professional?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      All you need to sign in to your Microsoft 365 account in
                      your Sales Professional App, now select Microsoft 365 App
                      launcher, and then Dynamics 365. The selection of the app
                      entirely depends on the subscription you have availed of.
                      <br />
                      <br />
                      Now, select Sales Professional on Dynamics 365 Home Page
                      and you are ready to navigate according to your need
                      leveraging the Navigation bar, Site map, Data records, and
                      other business practices available in your Dynamics 365
                      Sales Professional.
                      <br />
                      <br />
                      To know further how to efficiently make use of Microsoft
                      Dynamics Sales features, contact Dynamics Square today,
                      our Dynamics 365 sales experts can assist you.
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

export default Sales;
