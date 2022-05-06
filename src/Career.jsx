import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Career = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
        <link rel="canonical" href="" />
        <meta name="description" content="" />
        <meta content="" name="keywords" />
      </Helmet>
      <main>
        <section class="Solution-banner hero-1 hero about-banner carrer-into">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 mobile-1 mobile-2">
                <h1>
                  If you are striving
                  <br />
                  to be the best
                  <br /> <span>we want you!</span>
                </h1>
              </div>
              <div class="col-lg-6">
                <img src="assets/img/carrer-banner.png" alt="carrer-banner" />
              </div>
            </div>
          </div>
        </section>

        <section className="caerrer-start">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="commen-left-pic">
                  <img
                    src="assets/img/carrer-left-pic.png"
                    alt="carrer-left-pic"
                  />
                </div>
              </div>

              <div className="col-lg-7">
                <div className="commen-right-content">
                  <h3>What Is Dynamics Square?</h3>
                  <p>
                    Dynamics Square is the UK trustworthy and Microsoft's
                    Authorized Gold Partner for highly customized business
                    solutions to bring digital transformation in businesses
                    through Microsoft Business Applications.
                    <br />
                    <br />
                    Our effective leaders knows- their company’s success depends
                    upon not just a vision or product, but the people who carry
                    out the vision and build the product day in and day out –
                    their employees
                    <br />
                    <br />
                    That’s why Dynamics Square is a successful company who is
                    carrying foster culture that allow their employees to thrive
                    and grow. We’ve rounded up some insights from great minds
                    that drive home the importance of having a happy, empowered,
                    curious and mission-driven team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="caerr-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="comm-left-info">
                  <h3>Your best work starts here.</h3>
                  <p>
                    When people ask what it's like to work at <br />
                    Dynamics Square, you'll usually hear the same few
                    sentiments.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-6 mov-u">
                    <div className="why-solution-wrapper">
                      <div className="why-solution-wrapper-inner why-solution-wrapper-new">
                        <h3>
                          <i class="bi bi-check-lg"></i> There's no <br />
                          inner circle.
                        </h3>
                        <div className="overlay"></div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.{" "}
                        </p>
                      </div>
                      <div className="why-solution-wrapper-inner why-solution-wrapper-new">
                        <h3>
                          <i class="bi bi-check-lg"></i> Everyone's empowered
                          <br />
                          to work autonomously.
                        </h3>
                        <div className="overlay"></div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mov-d">
                    <div className="why-solution-wrapper">
                      <div className="why-solution-wrapper-inner why-solution-wrapper-new">
                        <h3>
                          <i class="bi bi-check-lg"></i> Diverse perspectives{" "}
                          <br />
                          are celebrated.
                        </h3>
                        <div className="overlay"></div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.{" "}
                        </p>
                      </div>
                      <div className="why-solution-wrapper-inner why-solution-wrapper-new">
                        <h3>
                          <i class="bi bi-check-lg"></i> Employees are treated
                          like
                          <br />
                          people, not line items.
                        </h3>
                        <div className="overlay"></div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="callto-new-action">
          <div className="container">
            <header class="section-header">
              <h3>What employees are saying</h3>
              <p>
                Thanks to Employees' feedback and reviews over the years,
                <br /> we've been lucky to be named a great place to work.
              </p>
            </header>
            <div class="section-header section-heade-custom">
              <h3>
                4.5 <img src="assets/img/star-red.svg" alt="star-red" />
              </h3>
              <p>90% of Employees on Glassdoor Recommend Dynamics Square</p>
            </div>
            <div className="row  justify-content-center">
              <div className="col-lg-10">
                <div className="row nn-od">
                  <div className="col-lg-6">
                    <div className="leftinf">
                      <h4>Browse our open positions.</h4>
                      <a
                        href="#"
                        className="btn btn-lg- btn-warning bt-cust112"
                      >
                        See all open positions
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="rightinf">
                      <span>Or send us Your CV at:</span>
                      <a href="mailto:info@dynamicssquare.com">
                        info@dynamicssquare.com
                      </a>
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

export default Career;
