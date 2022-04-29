import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { NavLink } from "react-router-dom";

const FoodBeverages = () => {
  return (
    <>
      <main>
        <section class="Solution-banner hero-1 hero">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 mobile-1">
                <h1>
                  Dynamics 365 <br />
                  For Food & Beverages
                </h1>
                <h2>
                  Efficiently manage your inventory and supply chain by
                  implementing Dynamics 365 for Food and Beverages business.
                </h2>
                <div class="text-center text-lg-start">
                  <a href="#about" class="btn-get-started scrollto">
                    <span>Schedule a Demo</span>
                  </a>
                </div>
              </div>
              <div class="col-lg-6">
                <img
                  src="assets/img/n/Dynamics-food-beverages-Banner.png"
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
                Why Dynamics 365 for your <br />
                food & beverages industry?
              </h3>
              <p>
                Dynamics 365 for Food and Beverages business solution can be
                implemented to support your entire food & beverage management
                system. At Dynamics Square, we implement a highly customized
                solution for Food & Beverage industry helping brands to
                seamlessly manage their customers, ensure quality control, and
                drive desired outcomes while enabling process automation and
                real-time efficiency.
              </p>
            </header>
          </div>
        </section>
        <section class="Solution-business-why custom-pd-1">
          <div class="container">
            <div class="row gx-5">
              <div class="col-lg-6">
                <h3>
                  How Dynamics 365
                  <br />
                  Food & Beverage ERP
                  <br />
                  Helps to Unify Your Business Practices
                </h3>
                <p>
                  Microsoft Dynamics 365 Food & Beverage ERP is designed to
                  connect, streamline, and drive end-to-end processes from human
                  resource management to financial management to warehousing,
                  distribution, and quality assurance. With real-time tracking
                  and depth insights, it allows enterprises to make profitable
                  decisions.
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
                        Dynamics 365 for Food and Beverages helps manufacturing
                        units to analyze demand, manage inventory levels, and
                        drive real-time financial visibility to minimize costs
                        and maximize outcomes.
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
                        Drive seamless ordering and delivery model by
                        implementing Dynamics 365 for Food and Beverages
                        industry. With improved insights into the warehousing
                        pipeline, instantly respond to fulfill timely changing
                        demands and customer anticipations.
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
                        Connect, communicate, and roll out effective business
                        strategy in your food and beverage operations with
                        Dynamics 365 Food & Beverage ERP.
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
                    Talk to our Dynamics 365 expert to get the best solution for
                    your Food & Beverage industry.
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
                    <h3>Warehouse & Distribution Management</h3>
                    <p>
                      Bring real-time transparency into every step of your goods
                      movement while minimizing the transportation cost and
                      maximizing efficiency.
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
                    <h3>Marketing & Sales</h3>
                    <p>
                      Track and manage all your customers' activities, marketing
                      campaigns, and sales pipeline leveraging a single
                      integrated system with Food & Beverage ERP.
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
                    <h3>Customer Management</h3>
                    <p>
                      Connect, engage, and sustain a healthy relationship with
                      your customers. Serve them a personalized deal with
                      Dynamics 365 for Food & Beverages.
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
                    <h3>Manufacturing Management</h3>
                    <p>
                      Drive seamless manufacturing from planning & organizing to
                      production and supply. Keep tracing and stay updated with
                      your manufacturing operations.
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
                    <h3>Supply Chain Management</h3>
                    <p>
                      Streamline and bring transparency across your supply chain
                      pipeline and drive efficiency by implementing Dynamics 365
                      for Food & Beverages industry.
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
                    <h3>Analytics & Insights</h3>
                    <p>
                      Make smarter yet productive data-driven decisions
                      instantly without waiting for manual reports leveraging
                      AI-equipped Dynamics 365 Food & Beverage ERP.
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
                    <h3>Production & Quality Control</h3>
                    <p>
                      Have control over the right production cycle and maintain
                      the quality standards while increasing food safety and
                      enabling the right planning & execution strategy.
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
                    <h3>Financial Management</h3>
                    <p>
                      Keep real-time eyes on your every financial move. Drive
                      strategic flow from tax & duty management to discount
                      management, and more.
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
                    How Dynamics 365 <br /> Food and Beverages <br />
                    Can Help to Elevate Your Business Results?
                  </h3>
                  <p>
                    Let's understand, how Microsoft Dynamics 365 for Food &
                    Beverages industry can simplify & automate your processes
                    and trigger your productivity.
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
                  <h3>Talk to Us to Reveal Your Actual Requirements</h3>
                  <p>
                    Every specific industry comprises a different set of
                    practices and hence, requires a highly customized solution
                    to drive innovation, flexibility, and scalability. So, you
                    are one step away to start driving productive results. With
                    Microsoft Dynamics 365 Food & Beverage ERP, enterprises can
                    efficiently manage their end-to-end operational practices to
                    accomplish the desired results.
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
                            <NavLink to="/react-ds/food-and-beverages">
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
                              <NavLink to="/react-ds/microsoft-cloud-for-nonprofit">
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
                              <NavLink to="/react-ds/ecommerce">
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
                              <NavLink to="/react-ds/professional-services">
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
                              <NavLink to="/react-ds/microsoft-cloud-for-manufacturing">
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
                              <NavLink to="/react-ds/industries">
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
                for food and beverages
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

export default FoodBeverages;
