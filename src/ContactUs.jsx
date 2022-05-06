import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Helmet } from "react-helmet";

const ContactUs = () => {
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
        <section class="Solution-banner hero-1 hero about-banner">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 mobile-1">
                <h1>Contact Us</h1>
                <h2>
                  Our IT experts are here to help provide <br />
                  Microsoft Business Apps support
                </h2>
              </div>
              <div class="col-lg-6">
                <img src="assets/img/contact-us-pic.png" alt="contact-us-pic" />
              </div>
            </div>
          </div>
        </section>

        <section className="cont-into">
          <div className="container">
            <header class="section-header">
              <h3>Get in touch with Us</h3>
              <p>
                Dynamics Square assists brands in deploying Microsoft Business
                Applications.
                <br />
                Let's chat if you are interested in learning more.
              </p>
            </header>
            <div className="row neew-pd0">
              <div className="col-lg-6">
                <div className="addre-left">
                  <p>
                    Kemp House, 152-160 City Road,
                    <br />
                    London, EC1V 2NX, U.K
                  </p>
                  <a href="#">Locate Us on Google</a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="addre-rigt">
                  <div className="cont-info">
                    <i class="bi bi-telephone"></i> Call us direct{" "}
                    <span> 0207 193 2502</span>
                  </div>
                  <div className="cont-info">
                    <i class="bi bi-envelope"></i> Mail us at{" "}
                    <span>
                      {" "}
                      <a href="mailto:info@dynamicssquare.co.uk">
                        info@dynamicssquare.co.uk
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cont-ff">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-10 col-md-10">
                <div className="row g-0 extra-height">
                  <div className="col-md-6 col-lg-6">
                    <div className="contactform">
                      <div
                        id="crmWebToEntityForm"
                        className="zcwf_lblTopBottom crmWebToEntityForm"
                      >
                        <form>
                          <div className="zcwf_row">
                            <div className="zcwf_col_fld img1">
                              <input
                                type="text"
                                id="Last_Name"
                                name="Last Name"
                                maxlength="80"
                                placeholder="* Full Name"
                              />
                              <div className="zcwf_col_help"></div>
                            </div>
                          </div>
                          <div className="zcwf_row">
                            <div className="zcwf_col_fld img2">
                              <input
                                type="text"
                                ftype="email"
                                id="Email"
                                name="Email"
                                maxlength="100"
                                placeholder="* Work Email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                              />
                              <div className="zcwf_col_help"></div>
                            </div>
                          </div>
                          <div className="zcwf_row">
                            <div className="zcwf_col_fld img3">
                              <input
                                type="text"
                                id="Company"
                                name="Company"
                                maxlength="100"
                                placeholder="Company Name"
                              />
                              <div className="zcwf_col_help"></div>
                            </div>
                          </div>
                          <div className="zcwf_row">
                            <div className="zcwf_col_fld img4">
                              <input
                                type="text"
                                id="Phone"
                                name="Phone"
                                maxlength="30"
                                placeholder="* Phone"
                                pattern="^\d{10,15}$"
                              />
                            </div>
                          </div>
                          <div className="zcwf_row">
                            <div className="zcwf_col_fld img5">
                              <textarea
                                id="Description"
                                name="Description"
                                placeholder="* How Can We Help You?"
                              ></textarea>
                              <div className="zcwf_col_help"></div>
                            </div>
                          </div>
                          <div className="zcwf_row">
                            <div className="zcwf_privacy">
                              <div className="dIB vat" align="left">
                                <div className="displayPurpose  f13">
                                  <label className="newCustomchkbox-md dIB w100per">
                                    <input
                                      autocomplete="off"
                                      id="privacyTool196947000003284069"
                                      type="checkbox"
                                      name="privacyTool"
                                    />
                                  </label>
                                </div>
                              </div>
                              <div className="dIB zcwf_privacy_txt">
                                I agree to the{" "}
                                <a
                                  href="https://www.dynamicssquare.co.uk/privacy-policy/"
                                  title="https://www.dynamicssquare.co.uk/privacy-policy/"
                                  target="_blank"
                                >
                                  Privacy Policy
                                </a>{" "}
                                and{" "}
                                <a
                                  href="https://www.dynamicssquare.co.uk/terms-of-use/"
                                  title="https://www.dynamicssquare.co.uk/terms-of-use/"
                                  target="_blank"
                                >
                                  Terms of Service
                                </a>
                                .
                              </div>
                            </div>
                          </div>
                          <div className="zcwf_row">
                            <div className="zcwf_col_lab"></div>
                            <div className="zcwf_col_fld zcwf_col_flds">
                              <div
                                className="g-recaptcha"
                                id="recap196947000003284069"
                              ></div>
                            </div>
                          </div>
                          <div className="zcwf_row">
                            <div className="zcwf_col_lab"></div>
                            <div className="zcwf_col_fld">
                              <input
                                type="submit"
                                id="formsubmit"
                                className="formsubmit zcwf_button"
                                value="Submit"
                                title="Submit"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <img
                      src="assets/img/contactfor-sede-img.jpg"
                      alt="contactfor-sede-img"
                      className="image-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hero-bgs">
          <div className="container">
            <header className="section-header">
              <h3>Our offices around the world</h3>
            </header>
            <div className="row hero-bg-3">
              <div className="col-md-12">
                <ul
                  class="nav nav-tabs justify-content-center contact-tbs"
                  id="myTab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      UK
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      {" "}
                      USA
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="contact-tab-1"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-1"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Canada
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="contact-tab-2"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-2"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Netherlands
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="contact-tab-3"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-3"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      India
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="contact-tab-4"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-4"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Singapore
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="contact-tab-5"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-5"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Australia
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>London</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Manchester</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Netherlands</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>London</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Manchester</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Netherlands</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="contact-1"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>London</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Manchester</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Netherlands</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="contact-2"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>London</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Manchester</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Netherlands</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="contact-3"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>London</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Manchester</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Netherlands</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="contact-4"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>London</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Manchester</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Netherlands</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="contact-5"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>London</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Manchester</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="cont-hh">
                          <h3>Netherlands</h3>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-geo-alt"></i>
                          </div>
                          <div className="content-right">
                            Kemp House, 152-160 City Road,London, EC1V 2NX, U.K.
                          </div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-telephone"></i>
                          </div>
                          <div className="content-right">+44 207 193 2502</div>
                        </div>
                        <div className="contact-list">
                          <div className="icons-left">
                            <i className="bi bi-envelope"></i>
                          </div>
                          <div className="content-right">
                            <a href="mailto:info@dynamicssquare.co.uk">
                              info@dynamicssquare.co.uk
                            </a>
                          </div>
                        </div>
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

export default ContactUs;
