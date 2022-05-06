import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/free-mode";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import { Helmet } from "react-helmet";

const WhyUs = () => {
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
              <div class="col-lg-6  mobile-1">
                <h1>Why Us?</h1>
                <h2>
                  We inspire clients to make their most challenging <br />
                  business decisions with confidence.
                </h2>
              </div>
              <div class="col-lg-6">
                <img src="assets/img/about-pic.png" alt="image" />
              </div>
            </div>
          </div>
        </section>

        <section className="domain-expertise domain-expertise-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="domain-expertise-right-pic">
                  <img src="assets/img/why-side.png" alt="why-side" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="domain-expertise-left domain-expertise-left-1">
                  <div className="title-header">
                    <h3>
                      You deserve the full return on each dollar you invest in
                      your business solutions.
                    </h3>
                  </div>

                  <div className="domain-Expertise-list domain-Expertise-list-p">
                    <ul>
                      <li>
                        At Dynamics Square, our job is to act as your trusted
                        partner, using our expert product knowledge and industry
                        understanding to help you get the most out of your
                        software systems.
                      </li>
                      <li>
                        We've worked on hundreds of projects around the world,
                        helping our clients find enterprise software solutions
                        that push the boundaries of modern technology to solve
                        problems and provide a positive ROI.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-slider">
          <div className="container">
            <header class="section-header">
              <h3>Why Dynamics Square?</h3>
              <p>
                We employ market leading technologies, consultants, processes
                and proven methodologies to help clients to design, implement
                and manage their business solutions that align to business
                priorities, maximum return on their investment and to create
                high performance organizations.
              </p>
            </header>
            <div className="row pad-3y">
              <div className="col-lg-12">
                <Swiper
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 15,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                    992: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1400: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper mySwiperwhy"
                >
                  <SwiperSlide>
                    <div className="why-slider-sec">
                      <h4>
                        <i class="bi bi-check-lg"></i>{" "}
                        <span>Years of Expertise</span>
                      </h4>
                      <p>
                        Our team of consultants bring together their many years
                        of experience to new projects. Our consultants have
                        numerous successful projects to their credit, and they
                        can do the same for your business.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="why-slider-sec">
                      <h4>
                        <i class="bi bi-check-lg"></i>{" "}
                        <span>Experienced Team</span>
                      </h4>
                      <p>
                        Dynamics Square consultants are leading subject matter
                        experts in their fields. They bring their solid
                        credibility and impressive experience to every client's
                        project.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="why-slider-sec">
                      <h4>
                        <i class="bi bi-check-lg"></i>{" "}
                        <span>Quality Driven</span>
                      </h4>
                      <p>
                        Our dynamic professional teams help your business
                        implement the best software solutions for your
                        particular needs. We take the utmost pride in the
                        quality of our work, delivering the best possible
                        results for every client.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="why-slider-sec">
                      <h4>
                        <i class="bi bi-check-lg"></i>{" "}
                        <span>In-depth Product Knowledge</span>
                      </h4>
                      <p>
                        The team at Dynamics Square have in-depth product
                        knowledge so that you can get concrete, top-quality
                        implementation, support and upgrade services. Get in
                        touch with one of our Microsoft consultants to schedule
                        a free demo.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="why-slider-sec">
                      <h4>
                        <i class="bi bi-check-lg"></i>{" "}
                        <span>Timely Execution</span>
                      </h4>
                      <p>
                        Our extensive experience and product knowledge empower
                        us to deliver solutions in accordance with your expected
                        timeline, keeping the implementation process as
                        efficient as possible.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="why-slider-sec">
                      <h4>
                        <i class="bi bi-check-lg"></i>{" "}
                        <span>Fuelled by Passion</span>
                      </h4>
                      <p>
                        We strive to provide every one of our clients with the
                        best possible results. We’re driven to establish
                        ourselves as a leading name in consulting services, and
                        we work continuously to streamline and improve our
                        services.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="why-slider-sec">
                      <h4>
                        <i class="bi bi-check-lg"></i>{" "}
                        <span>Flexible Engagement Model</span>
                      </h4>
                      <p>
                        At Dynamic Square, our services feature a remarkable
                        degree of flexibility. We’ll be there when you need us
                        to keep your project on schedule and ensure its success.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="why-slider-sec">
                      <h4>
                        <i class="bi bi-check-lg"></i>{" "}
                        <span>Focused on Innovation</span>
                      </h4>
                      <p>
                        We deliver creative solutions to clients, using our
                        experience and expertise to develop new and efficient
                        implementation strategies.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="why-slider-sec">
                      <h4>
                        <i class="bi bi-check-lg"></i>{" "}
                        <span>High Customer Satisfaction</span>
                      </h4>
                      <p>
                        Our high success rate is a testament to our dedication
                        to quality, flexibility, and efficiency. Our
                        uncompromising efforts and dedication have brought
                        considerable returns for hundreds of businesses
                        worldwide.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
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
                  <h3>Give us a call today</h3>
                  <p>
                    Selecting the right implementation partner is most important
                    along with
                    <br />
                    right business solution for success of the project.
                  </p>
                  <div class="m-o-t m-o-t-inde">
                    <a href="#about" class="btn-get-started scrollto">
                      <span>Request a Call Back</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="clients clients-bt">
          <div className="container" data-aos="fade-up">
            <header class="section-header">
              <h3>Our Valuable Customers</h3>
              <p>
                We employ market leading technologies, consultants, processes
                and proven methodologies to help clients to design, implement
                and manage their business solutions that align to business
                priorities, maximum return on their investment and to create
                high performance organizations.
              </p>
            </header>
            <div className="row pdd1">
              <div className="col-lg-12">
                <div className="clients-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    <Swiper
                      autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        768: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                        },
                        992: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        1200: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                        1400: {
                          slidesPerView: 5,
                          spaceBetween: 30,
                        },
                      }}
                      slidesPerView={5}
                      spaceBetween={30}
                      freeMode={true}
                      pagination={{
                        clickable: false,
                      }}
                      modules={[Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <img
                            src="assets/img/clients/client-1.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="swiper-slide">
                          <img
                            src="assets/img/clients/client-2.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <img
                            src="assets/img/clients/client-3.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="swiper-slide">
                          <img
                            src="assets/img/clients/client-4.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <img
                            src="assets/img/clients/client-5.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <img
                            src="assets/img/clients/client-4.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
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

export default WhyUs;
