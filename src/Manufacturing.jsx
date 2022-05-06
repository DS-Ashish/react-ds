import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
const Manufacturing = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title></title>
        <link rel="canonical" href="" />
        <meta name="description" content="" />
        <meta content="" name="keywords" />
      </Helmet>
      <main>
        <section class="Solution-banner hero-1 hero">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 mobile-1">
                <h1>
                  Microsoft Cloud
                  <br />
                  For Manufacturing
                </h1>
                <h2>
                  Connect your people, workflow, and operations to impact your
                  productivity level, improve your customer satisfaction, and
                  uplift
                  <br />
                  your outcomes with Microsoft Cloud for Manufacturing
                  Solutions.
                </h2>
                <div class="text-center text-lg-start">
                  <a href="#about" class="btn-get-started scrollto">
                    <span>Schedule a Demo</span>
                  </a>
                </div>
              </div>
              <div class="col-lg-6">
                <img
                  src="assets/img/n/Cloud-For-Manufacturing-banner.png"
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
                Manage it all, with <br />
                Microsoft Cloud for Manufacturing!
              </h3>
              <p>
                With Microsoft cloud for Manufacturing, improve your
                capabilities to manage and drive your core processes and bring
                continuous
                <br /> flow in your operations. With the help of integrated
                manufacturing cloud solutions, uncover new manufacturing <br />
                capabilities to effectively connect your employees, workflow,
                processes, and to drive transparency, profitability, and
                agility.
              </p>
            </header>
          </div>
        </section>
        <section class="Solution-business-why custom-pd-1">
          <div class="container">
            <div class="row gx-5">
              <div class="col-lg-6">
                <h3>
                  Why Cloud <br />
                  Manufacturing Solution?
                </h3>
                <p>
                  By enabling IoT-connected experience integrated with AI, Mixed
                  Reality, and Predictive technologies, Cloud Manufacturing
                  solution is designed to maximize operational capability,
                  empower frontline workers, enable remote efficiency, unlock
                  cloud-based potentials, and maximize the overall productivity
                  wrapped with regulatory compliance, required privacy, and
                  transparency.
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
                        Improve your employees' skills, streamline your
                        production line, and maximize your customer satisfaction
                        with highly integrated cloud manufacturing solutions.
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
                        Connect across your digital channels including Dynamics
                        365, Microsoft 365, Microsoft Teams, Power Platforms,
                        HoloLens 2, and Microsoft Azure with Microsoft Cloud
                        Manufacturing to drive a highly innovative, productive,
                        and customer-driven experience.
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
                        Start delivering new products, improved services, and
                        maximized experiences to your customers by upskilling
                        your workforce capability, introducing smart factory
                        modernization, and enabling intelligent systems all
                        through with integrated and embedded cloud manufacturing
                        solutions.
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
                    Let's explore and extend modernized capabilities with
                    Microsoft Cloud solution for Manufacturing.
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
                    <h3>Workforce Management</h3>
                    <p>
                      Strengthen your workforce capability by enabling them to
                      connect, operate, and collaborate from anywhere. Support
                      your remote work securely and effectively
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
                    <h3>Drive Agility</h3>
                    <p>
                      Bring agile manufacturing capabilities with Microsoft's
                      cloud manufacturing solutions. Enable your workforce to
                      cope with the complexities and drive challenges.
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
                    <h3>Resilient Supply Chain</h3>
                    <p>
                      Connect both your internal and external supply chain,
                      stakeholders, customers, and key data to improve your
                      supply chain resilience while reducing the supply chain
                      disruption.
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
                    <h3>Digital Transformation</h3>
                    <p>
                      Build digital twins and bring digital thread capability to
                      uplift your product and services. Leverage IoT
                      intelligence to improve visibility and drive digital
                      innovation.
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
                    <h3>Customer Engagement</h3>
                    <p>
                      Empower your sellers, marketers, and service team to
                      connect and engage customers across your digital platforms
                      to improve their experience while reserving profit
                      margins.
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
                    <h3>Improved Visibility</h3>
                    <p>
                      Boost your service team's capability to proactively know
                      their customer issues before the customer could realize
                      and quickly detect as well as resolve the problem.
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
                    <h3>Streamline Operations</h3>
                    <p>
                      Securely connect employees, products, and processes with
                      real-time efficiency to quickly optimize the issues and
                      drive improved workflow with manufacturing cloud
                      solutions.
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
                    <h3>Manufacturing Intelligence</h3>
                    <p>
                      Leveraging AI-powered automation combined with IoT and
                      Mixed Reality, optimize processes, improve equipment
                      effectiveness, protect industrial IoT, and ensure OT
                      security.
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
              <div class="col-lg-6">
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
                    How to Adopt New Manufacturing Capabilities and Maximize
                    Your Service Capability?
                  </h3>
                  <p>
                    This is how to deploy smart factory experience, adapt
                    faster, and drive digital transformation through dedicated
                    cloud manufacturing solutions.
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
                    How to Maximize Your Business Capabilities with Microsoft
                    Cloud Manufacturing
                  </h3>
                  <p>
                    A healthy conversation with us could be a profitable deal
                    for your business ahead. Let's come closure, share your
                    operational limitations or difficulty with us, and
                    understand your business scope with cloud manufacturing
                    solutions.
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
                        src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/04/Dynamics-365-Business-Central-2022-Wave-1-300x157.png"
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
                        src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/04/BC-vs-D-CRM-300x157.jpg"
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
                        src="https://www.dynamicssquare.co.uk/wp-content/uploads/2021/10/upgrade-accounting-software-300x169.jpg"
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
      </main>
    </>
  );
};

export default Manufacturing;
