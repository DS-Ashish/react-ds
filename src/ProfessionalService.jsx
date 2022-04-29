import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { NavLink } from "react-router-dom";

const ProfessionalService = () => {
  return (
    <>
      <main>
        <section class="Solution-banner hero-1 hero">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 mobile-1">
                <h1>
                  Dynamics 365 <br />
                  For Professional Services
                </h1>
                <h2>
                  Streamline And Efficiently Manage Your Professional Services
                  From End-To-End Administration To Project Automation To
                  Financial Management, And More.
                </h2>
                <div class="text-center text-lg-start">
                  <a href="#about" class="btn-get-started scrollto">
                    <span>Schedule a Demo</span>
                  </a>
                </div>
              </div>
              <div class="col-lg-6">
                <img
                  src="assets/img/n/Dynamics-365-for-professional-services.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <header class="section-header">
              <h3>
                Boost Your Professional Services <br />
                with Dynamics 365
              </h3>
              <p>
                Enable project automation, budget control, time & expense
                management, accuracy in reports & invoices, resource management,
                warehousing management, etc. all through implementing Dynamics
                365 for Professional Services.
                <br /> <br />
                At Dynamics Square, we have experts to boost your operational
                efficiency and transform your professional services by upgrading
                your system with Dynamics 365 solutions for Professional
                Services. By analyzing your current business practices and
                evaluating your futuristic needs, we configure and implement an
                ERP solution to seamlessly manage your professional needs.
              </p>
            </header>
          </div>
        </section>
        <section class="Solution-business-why custom-pd-1">
          <div class="container">
            <div class="row gx-5">
              <div class="col-lg-6">
                <h3>
                  How Dynamics 365 Professional
                  <br />
                  Services Can Boost <br />
                  Your Business Potentials?
                </h3>
                <p>
                  Dynamics 365 solutions for Professional Services are designed
                  to manage your end-to-end project execution, track project
                  status in real-time, manage & automate finance, and drive an
                  efficient and innovative approach across your project
                  development cycle.
                </p>
              </div>
              <div class="col-lg-6">
                <div class="content-icons-modil-1">
                  <div class="content-inner-moil-1">
                    <div class="icons-left">
                      <div class="ext-bord">
                        <i class="bi bi-check2"></i>
                      </div>
                    </div>
                    <div class="cintent-right">
                      <p>
                        With an all-in-one integrated ERP solution, enterprises
                        can manage their day-to-day tasks with data automation,
                        simplify their decision-making process with AI-based
                        reports & key analytics in real-time.
                      </p>
                    </div>
                  </div>

                  <div class="content-inner-moil-1">
                    <div class="icons-left">
                      <div class="ext-bord">
                        <i class="bi bi-check2"></i>
                      </div>
                    </div>
                    <div class="cintent-right">
                      <p>
                        Project managers can focus more on successful project
                        completion rather than indulging in repetitive and
                        time-consuming data-driven practices.
                      </p>
                    </div>
                  </div>

                  <div class="content-inner-moil-1">
                    <div class="icons-left">
                      <div class="ext-bord">
                        <i class="bi bi-check2"></i>
                      </div>
                    </div>
                    <div class="cintent-right">
                      <p>
                        It is seamless data-driven practices that eliminate the
                        data redundancies and enable everyone involved in the
                        project can stay updated with real-time project
                        completion levels and ongoing activities to ensure
                        hassle-free and timely completion of the project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="call_to_action call_to_action-height">
          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <div class="call_to_action-right over-img">
                  <img src="assets/img/MaskGroup8.png" alt="image" />
                </div>
              </div>
              <div class="col-lg-7">
                <div class="call_to_action-left">
                  <h3>
                    Talk to <br />
                    Our Expert Team
                  </h3>
                  <p>
                    Connect, discuss, and allow us to diagnose your business
                    requirementssuited <br /> to your customized professional
                    service needs. can support and serve your mission purpose.
                  </p>
                  <div class="m-o-t m-o-t-inde">
                    <a href="#about" class="btn-get-started scrollto">
                      <span>Schedule a Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="industry_service_bottom">
          <div class="container">
            <div class="row position-relative">
              <div class="col-lg-4">
                <div class="busine_service_bottom-right-indst">
                  <div class="card_new_img">
                    <img
                      src="assets/img/Business-Central-Implementation-icons.svg"
                      alt="Business-Central-Implementation-icons"
                    />
                  </div>
                  <div class="card_new_content">
                    <h3>Custom CRM Solution</h3>
                    <p>
                      Get a 360-degree view of your clients or customer data
                      from lead generation to opportunity management, making
                      proposals to managing finance, and more.
                    </p>
                  </div>
                </div>
                <div class="busine_service_bottom-right-indst">
                  <div class="card_new_img">
                    <img
                      src="assets/img/Business Central Upgrade-icons.svg"
                      alt="Business Central Upgrade-icons"
                    />
                  </div>
                  <div class="card_new_content">
                    <h3>HR & Payroll</h3>
                    <p>
                      Accelerate onboarding, improve your resource utilization,
                      quickly resolve issues, maximize adaption rate in your
                      organization with D365 for Professional Services.
                    </p>
                  </div>
                </div>
                <div class="busine_service_bottom-right-indst">
                  <div class="card_new_img">
                    <img
                      src="assets/img/Business-Central-Support-icons.svg"
                      alt="Business-Central-Support-icons"
                    />
                  </div>
                  <div class="card_new_content">
                    <h3>Employee Collaboration Portal</h3>
                    <p>
                      Enable your workforce to collaborate and drive effective
                      communication along with a centralized data-driven
                      approach with Professional Service industry solutions.
                    </p>
                  </div>
                </div>
                <div class="busine_service_bottom-right-indst">
                  <div class="card_new_img">
                    <img
                      src="assets/img/Business-Central-Support-icons.svg"
                      alt="Business-Central-Support-icons"
                    />
                  </div>
                  <div class="card_new_content">
                    <h3>Business Intelligence Analytics</h3>
                    <p>
                      Support and ensure productive decision making, future
                      predictions, and more with AI-based insights and
                      IoT-connected data experience.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4"></div>
              <div class="col-lg-4">
                <div class="busine_service_bottom-right-indst">
                  <div class="card_new_img">
                    <img
                      src="assets/img/Business-Central-Implementation-icons.svg"
                      alt="Business-Central-Implementation-icons"
                    />
                  </div>
                  <div class="card_new_content">
                    <h3>Custom Development</h3>
                    <p>
                      Get custom-built deployment to support across your
                      customized processes to streamline your processes and
                      drive consistent flow throughout your organization.
                    </p>
                  </div>
                </div>
                <div class="busine_service_bottom-right-indst">
                  <div class="card_new_img">
                    <img
                      src="assets/img/Business Central Upgrade-icons.svg"
                      alt="Business Central Upgrade-icons"
                    />
                  </div>
                  <div class="card_new_content">
                    <h3>Budgeting & Planning</h3>
                    <p>
                      Leverage AI and ML-based insights in real-time to forecast
                      data, manage finances, and plan budgeting to accelerate
                      processes and maximize productivity.
                    </p>
                  </div>
                </div>
                <div class="busine_service_bottom-right-indst">
                  <div class="card_new_img">
                    <img
                      src="assets/img/Business-Central-Support-icons.svg"
                      alt="Business-Central-Support-icons"
                    />
                  </div>
                  <div class="card_new_content">
                    <h3>Time & Expense Management</h3>
                    <p>
                      Dynamics 365 for Professional Services when configured and
                      integrated with your other applications can help to
                      seamlessly manage time and expenses to boost productivity.
                    </p>
                  </div>
                </div>

                <div class="busine_service_bottom-right-indst">
                  <div class="card_new_img">
                    <img
                      src="assets/img/Business Central Upgrade-icons.svg"
                      alt="Business Central Upgrade-icons"
                    />
                  </div>
                  <div class="card_new_content">
                    <h3>Control & Analysis</h3>
                    <p>
                      Insights based on past project performance and other
                      business data help to manage control and analyze things to
                      faster the project delivery and ensure project success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row movi-up ">
              <div class="col-lg-12">
                <div class="center-pic">
                  <img src="assets/img/Group-948.png" alt="Group-948.png" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="busine_service_bottom">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="busine_service_bottom-left">
                  <div class="busine_service_bottom-right">
                    <img
                      src="assets/img/bisin_leftimg.jpg"
                      class="fix-im"
                      alt="bisin_leftimg"
                    />
                    <img
                      src="assets/img/ico6.svg"
                      class="flot-img"
                      alt="ico6"
                    />
                    <div class="video-ytube">
                      <div class="popup-btn">
                        <a data-bs-toggle="modal" href="#exampleModalToggle">
                          <img
                            src="assets/img/contactfor-sede-img.jpg"
                            alt="img"
                          />
                          <span class="cente-icns">
                            <img
                              src="assets/img/play_icons.svg"
                              alt="play_icons"
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center">
                <div class="side-heading">
                  <h3>
                    How Dynamics 365 <br />
                    for Professional Services <br />
                    can maximize your business potentials?
                  </h3>
                  <p>
                    Let’s have a complete visualization of how Dynamics 365
                    Solutions for Professional Services can help your business
                    to improve the overall business flow, simplify practices,
                    and accelerate service delivery.
                  </p>
                  <div class="text-lg-start mm-t">
                    <a href="#about" class="btn-get-started scrollto">
                      <span>Schedule a Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="call-to-action-center hero-4">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12">
                <div class="call-to-action-content">
                  <h3>
                    How Microsoft's Professional Service Solution Can Help Your
                    Business to Uplift High
                  </h3>
                  <p>
                    If your processes are compromising at some level, nothing
                    will work out, and making productive decisions in business
                    can lead your business toward a productive path. Share your
                    pain business points with us, experts at Dynamics Square can
                    reveal your business requirement and suggest a productive
                    solution for your business.
                  </p>
                  <div class="text-center m-o-t m-o-t-hv">
                    <a href="#about" class="btn-get-started scrollto">
                      <span>Get Started Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="industry-more-sec">
          <div class="container">
            <header class="section-header">
              <h3>EXPLORE Other Industries</h3>
            </header>
            <div class="row mobile-margin-01">
              <div class="col-lg-12">
                <div class="swiper mySwiper">
                  <div class="swiper-wrapper">
                    <Swiper
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      slidesPerView={3}
                      spaceBetween={30}
                      freeMode={true}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Autoplay, FreeMode, Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div class="swiper-slide">
                          <div class="industries-list-more">
                            <NavLink to="/food-and-beverages">
                              <div class="img-wrp">
                                <img
                                  src="assets/img/Food-and-beverage.svg"
                                  alt="Food-and-beverage"
                                />
                              </div>
                              <div class="text-wrp-content">
                                <h3>Food & Beverages</h3>
                                <p>
                                  Efficiently manage your inventory and supply
                                  chain by implementing Dynamics 365 for Food
                                  and Beverages business.
                                </p>
                                <span>Explore Now</span>
                              </div>
                            </NavLink>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div class="swiper-slide">
                          <div class="swiper-slide">
                            <div class="industries-list-more">
                              <NavLink to="/microsoft-cloud-for-nonprofit">
                                <div class="img-wrp">
                                  <img
                                    src="assets/img/NotforProfit.svg"
                                    alt="NotforProfit"
                                  />
                                </div>
                                <div class="text-wrp-content">
                                  <h3>Not for Profit</h3>
                                  <p>
                                    Bring Transparency And Drive Efficiency In
                                    Your Non-Profit Organization With Microsoft
                                    Dynamics 365 For Charities.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div class="swiper-slide">
                          <div class="swiper-slide">
                            <div class="industries-list-more">
                              <NavLink to="/ecommerce">
                                <div class="img-wrp">
                                  <img
                                    src="assets/img/Ecommerce.svg"
                                    alt="Ecommerce"
                                  />
                                </div>
                                <div class="text-wrp-content">
                                  <h3>E-Commerce</h3>
                                  <p>
                                    Optimize Your End-To-End Ecommerce Processes
                                    And Improve Your Customer Experience.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div class="swiper-slide">
                          <div class="swiper-slide">
                            <div class="industries-list-more">
                              <NavLink to="/professional-services">
                                <div class="img-wrp">
                                  <img
                                    src="assets/img/proffesional-service.svg"
                                    alt="proffesional-service"
                                  />
                                </div>
                                <div class="text-wrp-content">
                                  <h3>Professional Services</h3>
                                  <p>
                                    Streamline And Efficiently Manage Your
                                    Professional Services with Microsoft
                                    Dynamics 365 Business Applications.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div class="swiper-slide">
                          <div class="swiper-slide">
                            <div class="industries-list-more">
                              <NavLink to="/microsoft-cloud-for-manufacturing">
                                <div class="img-wrp">
                                  <img
                                    src="assets/img/Food-and-beverage.svg"
                                    alt="Food-and-beverage"
                                  />
                                </div>
                                <div class="text-wrp-content">
                                  <h3>Manufacturing & Distribution</h3>
                                  <p>
                                    Keep track of your production lines and
                                    bring transparency with Microsoft Dynamics
                                    365 for Manufacturing and Distribution.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div class="swiper-slide">
                          <div class="swiper-slide">
                            <div class="industries-list-more">
                              <NavLink to="/industries">
                                <div class="img-wrp">
                                  <img
                                    src="assets/img/Food-and-beverage.svg"
                                    alt="Food-and-beverage"
                                  />
                                </div>
                                <div class="text-wrp-content">
                                  <h3>Startups</h3>
                                  <p>
                                    Leverage maximum possible resources to
                                    manage end-to-end business processes for
                                    your Startup with Microsoft Dynamics 365.
                                  </p>
                                  <span>Explore Now</span>
                                </div>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="blogs-extra">
          <div class="container">
            <header class="section-header">
              <h3>
                Check out our Best Resources
                <br />
                for Business Central
              </h3>
            </header>
            <div class="row top-2 gx-5">
              <div class="col-lg-6">
                <div class="blogs-extra-title">
                  <h4>Articles</h4>
                </div>
                <div class="blogs-extra-left">
                  <div class="blogs-extra-left-img">
                    <a href="#">
                      <img
                        src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/03/D365-vs-GP-300x157.jpg"
                        alt="img"
                        width="200"
                        height="104"
                      />
                    </a>
                  </div>
                  <div class="blogs-extra-left-content">
                    <h4>
                      <a href="#">Dynamics 365 Business Central 2022 Wave 1</a>
                    </h4>
                    <span>19 April 2022</span>
                  </div>
                </div>
                <div class="blogs-extra-left">
                  <div class="blogs-extra-left-img">
                    <a href="#">
                      <img
                        src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/03/D365-vs-GP-300x157.jpg"
                        alt="img"
                        width="200"
                        height="104"
                      />
                    </a>
                  </div>
                  <div class="blogs-extra-left-content">
                    <h4>
                      <a href="#">
                        Dynamics 365 Business Central Vs Dynamics 365 CRM
                      </a>
                    </h4>
                    <span>12 April 2022</span>
                  </div>
                </div>
                <div class="blogs-extra-left">
                  <div class="blogs-extra-left-img">
                    <a href="#">
                      <img
                        src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/03/D365-vs-GP-300x157.jpg"
                        alt="img"
                        width="200"
                        height="104"
                      />
                    </a>
                  </div>
                  <div class="blogs-extra-left-content">
                    <h4>
                      <a href="#">Dynamics 365 Business Central Vs GP</a>
                    </h4>
                    <span>28 March 2022</span>
                  </div>
                </div>
                <div class="blogs-extra-left">
                  <div class="blogs-extra-left-img">
                    <a href="#">
                      <img
                        src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/03/D365-vs-GP-300x157.jpg"
                        alt="img"
                        width="200"
                        height="104"
                      />
                    </a>
                  </div>
                  <div class="blogs-extra-left-content">
                    <h4>
                      <a href="#">Business Central Vs Finance & Supply Chain</a>
                    </h4>
                    <span>22 March 2022</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="blogs-extra-title">
                  <h4>Documents</h4>
                </div>
                <div class="blogs-extra-right">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="bi bi-file-earmark-pdf"></i> Is Your Business
                        Outgrowing Your Accounting Software?
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bi bi-file-earmark-pdf"></i> Business Owner's
                        Guide
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bi bi-file-earmark-pdf"></i> Reimagine
                        Productivity
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bi bi-file-earmark-pdf"></i> Licensing Guide
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bi bi-file-earmark-pdf"></i> Technology Trends
                        Helping Businesses Thrive in a Digital World
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bi bi-file-earmark-pdf"></i> Reinvent
                        productivity with Dynamics 365 and Microsoft 365
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bi bi-file-earmark-pdf"></i> The Total
                        Economic Impact of Dynamics 365 Business Central
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="blogs-extra-title">
                  <h4>Learn More</h4>
                </div>
                <div class="blogs-extra-right">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="bi bi-box-arrow-up-right"></i> Why Choose
                        Microsoft Dynamics 365 Business Central?
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bi bi-box-arrow-up-right"></i> Advantages and
                        Capabilities
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bi bi-box-arrow-up-right"></i> Why to Upgrade
                        Dynamics NAV to Business Central
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="bi bi-box-arrow-up-right"></i> Is Your
                        Business Outgrowing Your Accounting Software?
                      </a>
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
                questions about Professional Services industry?
              </h3>
              <p>Click through to our FAQ for the best answers!</p>
            </header>
            <div className="row justify-content-center mar-top-7">
              <div className="col-md-8">
                <div className="accordion accordion-flush" id="faqlist1">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-1"
                      >
                        What is Microsoft Dynamics 365 for Professional Services
                        industry?
                      </button>
                    </h3>
                    <div
                      id="faq-content-1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist1"
                    >
                      <div className="accordion-body">
                        Microsoft Dynamics 365 offers a comprehensive solution
                        for the Professional service industry. Organizations can
                        simplify and drive their end-to-end tasks that come
                        across their professional services domain. Organizations
                        can manage, automate, & faster their tasks, empower
                        their workforce, and drive excellence in their business.
                        <br />
                        <br />
                        Whether it comes to project automation, financial
                        management, client & vendor management, or customer
                        engagement; Dynamics 365 can help and empower everyone
                        in your organization from top management to executive
                        level to simply, manage, and accelerate their tasks.
                        With powerful decision-making capability, businesses can
                        make instant, productive, and informed decisions to
                        support and strengthen the bottom line and to drive
                        maximized revenues.
                        <br />
                        <br />
                        To know how Dynamics 365 can help your enterprise manage
                        your professional services, connect with us, we can
                        share the best potential deal for your business.
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
                        What is included in Dynamics 365 for Professional
                        Services industry?
                      </button>
                    </h3>
                    <div
                      id="faq-content-2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist1"
                    >
                      <div className="accordion-body">
                        Dynamics 365 comprises a range of business applications
                        that can be combined and configured to manage your
                        specific processes or operations. Whether you need to
                        manage your operations, human resource, project
                        automation, financial part, service & delivery model,
                        production line, clients, and more, Dynamics 365 can be
                        implemented and customized as per your customized
                        business model addressing the core behavior of your
                        business.
                        <br />
                        <br />
                        We are always here to help you out if you have any sort
                        of queries. Do not hesitate to contact us, our experts
                        have a solution for your specific professional services
                        or practices.
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
                        What are the benefits of Microsoft Dynamics 365 for the
                        Professional Services industry?
                      </button>
                    </h3>
                    <div
                      id="faq-content-3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist1"
                    >
                      <div className="accordion-body">
                        By implementing Microsoft Dynamics solutions for
                        professional services, you can manage across your
                        processes and bring the capability to drive challenges
                        leading your business to drive profitability and
                        scalability. Here are the benefits that are involved
                        once you implement Dynamics 365 for your business:
                        <br />
                        <br />
                        <ul>
                          <li>
                            With Dynamics 365 solutions for the professional
                            services industry, businesses can estimate revenue
                            and keep real-time eyes on every process or activity
                            that takes place.
                          </li>
                          <li>
                            Enterprises can leverage opportunity management and
                            faster their client or customer delivery by bringing
                            transparency, real-time efficiency, and improving
                            collaboration for timely engagement.
                          </li>
                          <li>
                            Bring automation to your projects and simplify your
                            billing & invoicing.
                          </li>
                          <li>
                            Empower your resources to faster project delivery
                            and maximize their utilization to drive
                            productivity.
                          </li>
                          <li>
                            Businesses can list key stakeholders, analyze
                            management information, drive engagement
                            profitability, and optimize growth.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProfessionalService;
