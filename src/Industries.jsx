import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { NavLink } from "react-router-dom";

const Industries = () => {
  return (
    <>
      <main>
        <section class="Solution-banner hero-1 hero">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 mobile-1">
                <h1>
                  Dynamics 365
                  <br />
                  For Startups
                </h1>
                <h2>
                  Leverage maximum possible resources to manage end-to-end
                  business processes for your Startup with <br />
                  Microsoft Dynamics 365.
                </h2>
                <div class="text-center text-lg-start">
                  <a href="#about" class="btn-get-started scrollto">
                    <span>Schedule a Demo</span>
                  </a>
                </div>
              </div>
              <div class="col-lg-6">
                <img src="assets/img/industry-startup-banner.png" alt="image" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <header class="section-header">
              <h3>
                kickstart your startup
                <br />
                with microsoft dynamics 365
              </h3>
              <p>
                Streamline your business processes, automate your data, and
                drive transformation throughout your organizational practices by
                seamlessly implementing Microsoft Dynamics 365 for Startups.
                <br /> <br />
                Speed up your processes, accelerate your productivity, and
                support your continuous add-on practices for your startup
                business. Simply upgrade your system to enlarge your business
                capabilities and support your current as well as a futuristic
                workflow with Microsoft Dynamics 365 solutions configured and
                highly customized suited to your specific domain and operational
                flow.
              </p>
            </header>
          </div>
        </section>
        <section class="Solution-business-why custom-pd-1">
          <div class="container">
            <div class="row gx-5">
              <div class="col-lg-6">
                <h3>
                  Why Choose
                  <br />
                  Dynamics 365 For <br />
                  Startups ?
                </h3>
                <p>
                  Support your startup ideation and maximize your growth
                  potential with customized offerings of Microsoft Dynamics 365
                  for small business. Maximize your resource utilization and
                  drive scalable growth strategy in your startup business.
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
                        Leverage potential tools and integrate with your
                        existing system to start running your business with an
                        efficient flow from the very initial stage.
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
                        Bring continuous flow with customized technical
                        sessions, content help, and online mentorship with the
                        help of Microsoft 365 Startup solutions.
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
                        Start outreaching your potential customer base utilizing
                        the highly customized and integrated system suited to
                        your hourly business needs.
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
                    Implement
                    <br />
                    Dynamics 365 for Startups!
                  </h3>
                  <p>
                    Share your customized process flow to get personalized
                    solution
                    <br />
                    for your startup business.
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
                    <h3>Seamless Customization</h3>
                    <p>
                      Manage your specific startup practices leveraging highly
                      configurable and seamlessly customizable Dynamics 365 for
                      the startup industry.
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
                    <h3>Centralize Data</h3>
                    <p>
                      Get a complete view of real-time data including customer
                      insights, sales, and reports & analytics that drives
                      innovation.
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
                    <h3>Manage Customers</h3>
                    <p>
                      Connect, engage, and provide seamless support &
                      personalized experience to your customers with Dynamics
                      365 for Startups.
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
                    <h3>Decision Making</h3>
                    <p>
                      By leveraging real-time data efficiency of Microsoft
                      Dynamics 365, support instant decision making to overcome
                      startup challenges.
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
                    <h3>Connect & Collaborate</h3>
                    <p>
                      Dynamics 365 for small business levels enable people to
                      connect and collaborate to drive innovation and
                      productivity.
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
                    <h3>Drive Automation</h3>
                    <p>
                      Improve your entire organizational flow with AI-equipped
                      practices and drive automation over a cloud-facilitated
                      platform.
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
                    <h3>Enterprise Mobility</h3>
                    <p>
                      Streamline and transform your entire organizational data
                      to drive transparency and impact enterprise mobility.
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
                    <h3>Predict Opportunity</h3>
                    <p>
                      With real-time key data, analytics, and insights, evaluate
                      and analyze the current situations and predict future
                      opportunities.
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
                    How Dynamics 365
                    <br />
                    Can Enable Transformation
                    <br />
                    in Your Startup?
                  </h3>
                  <p>
                    Empower maximum resource utilization and boost your process
                    flow with simplified and highly configured Microsoft
                    Dynamics 365 startup solutions.
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
                    Experts at Dynamics Square can embed your system to support
                    your entire startup practices.
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
                      <a href="#">
                        Business Central Vs Finance & Supply Chaint
                      </a>
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
                      <a href="#">
                        10 Powerful Reasons to Upgrade Accounting Software
                      </a>
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
                      <a href="#">
                        Dynamics 365 Business Central Wave 2: 2021 Highlights
                      </a>
                    </h4>
                    <span>28 March 2022</span>
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

export default Industries;
