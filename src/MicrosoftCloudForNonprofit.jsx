import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { NavLink } from "react-router-dom";

const MicrosoftCloudForNonprofit = () => {
  return (
    <>
      <main>
        <section class="Solution-banner hero-1 hero">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 mobile-1">
                <h1>
                  Microsoft Cloud
                  <br />
                  For NonProfit
                </h1>
                <h2>
                  Drive Mission-Critical Practices And Ensure Continuous Growth
                  Of Your Non-Profit Organization With Microsoft Cloud <br />
                  For Non-Profit Solution.
                </h2>
                <div class="text-center text-lg-start">
                  <a href="#about" class="btn-get-started scrollto">
                    <span>Schedule a Demo</span>
                  </a>
                </div>
              </div>
              <div class="col-lg-6">
                <img
                  src="assets/img/n/Microsoft-Cloud-For-Non-Profits-Banner.png"
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
                Grow Your Nonprofit Business <br />
                With Microsoft Cloud
              </h3>
              <p>
                Know your donors and supporters, effectively engage & manage
                your volunteers, leverage program impact dashboard, secure your
                donors along with your program participant data to maximize
                mission outcomes and ensure lifelong success.
                <br /> <br />
                Microsoft Cloud for Nonprofits is designed to effectively carry
                out mission-critical practices ensuring growth for now
                scalability in the future. Designed specifically for
                fundraisers, volunteer managers, program managers, and other
                essential roles that take part to undertake and overcome
                day-to-day challenges. This non-profit industry solution brings
                the capability to seamlessly support the unique roles created to
                drive involved challenges.
              </p>
            </header>
          </div>
        </section>
        <section class="Solution-business-why custom-pd-1">
          <div class="container">
            <div class="row gx-5">
              <div class="col-lg-6">
                <h3>
                  Why Microsoft
                  <br />
                  Cloud for <br />
                  NonProfit ?
                </h3>
                <p>
                  Microsoft Cloud for Nonprofit enables non-profit hubs to
                  seamlessly manage their donors & supporters, ensure seamless
                  fundraising & engagement, and drive a smoother constituent
                  marketing journey. This non-profit industry solution helps to
                  effectively ensure their volunteer management, volunteer
                  engagement, volunteer center management, and more.
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
                        Considering your specific mission-critical needs, your
                        non-profit solution can be configured and customized to
                        fulfill your foundational needs and can serve the
                        purpose. The non-profit sector can drive unified
                        fundraising, ensure centralized data comprising both the
                        back office and frontline.
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
                        By making effective use of this cloud solution,
                        non-profit units can gain constituents’ analytics to
                        understand whenever any supporter or constituent ensures
                        interest and are likely to engage along with channel and
                        time constraints. To attain powerful visual analytics,
                        your cloud non-profit solution can be integrated
                        seamlessly with Power BI.
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
                        Microsoft’s cloud solution helps to ensure personalized
                        engagement through built-in capability, enables to
                        ensure seamless program delivery, allows to effectively
                        manage awards & donations, and drives purposeful
                        volunteer management.
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
                    Let’s understand how Microsoft Cloud for your Non-for-profit
                    organization
                    <br />
                    can support and serve your mission purpose.
                    <br />
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
                    <h3>Constituent Management</h3>
                    <p>
                      Attract, engage, and retain your donors to support your
                      foundational base. By leveraging the centralized view of
                      constituents’ data, know your donors, supports, or
                      fundraisers.
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
                    <h3>Personalized Engagement</h3>
                    <p>
                      Take advantage of personalized engagement and impact your
                      engaging campaigns wherein connect the donor with in-built
                      engaging capability via the most trusted platforms.
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
                    <h3>Constituent Analytics</h3>
                    <p>
                      Constituents Analytics can be leveraged to proactively
                      understand how likely your supporter, donor, or
                      constituent is interested to engage with you.
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
                    <h3>Unified Data</h3>
                    <p>
                      Unify your fundraising data, campaign data, and enable
                      non-profits to centralize back office and frontline data
                      comprising programs, finance & operations, etc.
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
                    <h3>Donation & Award Management</h3>
                    <p>
                      Cloud solution for non-profits strengthens donation and
                      award management capabilities including payment
                      processing, fund accounting, fundraising, awards, etc.
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
                    <h3>Volunteer Management</h3>
                    <p>
                      Cloud solution enables non-profits to match volunteer
                      skills with the needs and ensure collaborative efforts
                      between volunteer coordinators and volunteers.
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
                    <h3>Program Delivery</h3>
                    <p>
                      To ensure program or campaign success, cloud non-profit
                      solution helps to design, deliver, and measure the ongoing
                      campaigns to accelerate mission success.
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
                    How Microsoft Cloud
                    <br />
                    Solution for Nonprofits Can
                    <br />
                    Help to Ensure Program Success?
                  </h3>
                  <p>
                    Before moving ahead, here is a sneak peek about how
                    Microsoft Cloud for Non-Profit can help you to support your
                    customized nonprofit activities whether to engage donors,
                    drive successful events, manage volunteers, streamline data,
                    or get in-depth engagement analytics.
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
        <section id="pricing" className="pricing">
          <div className="container">
            <header className="section-header">
              <h3>Microsoft Cloud For Nonprofit Pricing</h3>
              <p>
                Contact Dynamics Square To Get Started With Microsoft Cloud For
                Nonprofit
              </p>
            </header>
            <div className="row gy-4 p-9">
              <div className="col-lg-3 col-md-3">
                <div className="box box-22 box-11">
                  <h4>Basic</h4>
                  <div className="price">
                    <sup>£</sup>0<span>Per Month</span>
                  </div>
                  <ul>
                    <li>
                      <strong>Available To Nonprofits Of All Sizes</strong>
                    </li>
                    <li> Prerequisite licensing costs only</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-3">
                <div className="box box-22 box-11">
                  <h4>Standard</h4>
                  <div className="price">
                    <sup>£</sup>554.79<span>Per Month</span>
                  </div>
                  <ul>
                    <li>
                      <strong>
                        Plan 1 For Nonprofits
                        <br /> 1-250 Employees
                      </strong>
                    </li>
                    <li>Prerequisite licensing costs +</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-3">
                <div className="box box-22 box-11">
                  <h4>Standard</h4>
                  <div className="price">
                    <sup>£</sup>1479.43<span>Per Month</span>
                  </div>
                  <ul>
                    <li>
                      <strong>
                        Plan 2 For Nonprofits And IGOs <br />
                        250+ Employees
                      </strong>
                    </li>
                    <li>Prerequisite licensing costs +</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-3">
                <div className="box box-22 box-11">
                  <h4>Azure Services</h4>
                  {/* <div className="price"><sup>£</sup>0<span>Per Month</span></div> */}
                  <ul>
                    <li className="textdd">
                      <strong>As Metered</strong>
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
        <section class="call-to-action-center hero-4">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12">
                <div class="call-to-action-content">
                  <h3>
                    How to bring Transformative Mission Impact with the Help of
                    Cloud Non-profit solution
                  </h3>
                  <p>
                    Considering your specific nonprofit movement, foundational
                    requirement, and to support your continuous scalability, we
                    can implement a highly configured and integrated Microsoft
                    Cloud solution for your non-profit domain to impact your
                    mission value and ensure campaign success.
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
      </main>
    </>
  );
};

export default MicrosoftCloudForNonprofit;
