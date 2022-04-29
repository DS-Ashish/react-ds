import React from 'react';
import {NavLink} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";






const AboutUs = () => {
  return (
    <main>
      <section class="Solution-banner hero-1 hero about-banner">
            <div class="container">
               <div class="row">
                  <div class="col-lg-6  mobile-1">
                     <h1>About Us</h1>
                     <h2>Learn about Dynamics Square and explore what make us unique and one of the leading Dynamics 365 Business Central Partners in London, UK. </h2>
                  </div>
                  <div class="col-lg-6">
                     <img src="assets/img/about-pic.png" alt="image" />
                  </div>
               </div>
            </div>
         </section>

         <section className='about-intr'>
           <div className='container'>
             <div className='col-lg-12'>
                <div className='about-intr-wrpper'>
                  <div className='left-content'>
                    <h3>We're Microsoft<br />Gold Partners</h3>
                  </div>
                  <div className='right-content'>
                    <p>Dynamics Square is the UK trustworthy and Microsoft's Authorized Gold Partner for highly customized business solutions to bring digital transformation in businesses through Microsoft Business Applications.</p>
                  </div>
                </div>
             </div>
           </div>
         </section>
         <section className='counter-sec'>
           <div className='container'>
             <div className='row inner-side-pad'>
               <div className='col-lg-4'>
                  <div className='counter-sec inerr'>
                    <h3>250+</h3>
                    <p>Clients Worldwide</p>
                  </div>
               </div>
               <div className='col-lg-4'>
                  <div className='counter-sec inerr'>
                    <h3>135+</h3>
                    <p>Certified Pofessionals</p>
                  </div>
               </div>
               <div className='col-lg-4'>
                  <div className='counter-sec inerr'>
                    <h3>11+</h3>
                    <p>Years Experience</p>
                  </div>
               </div>
             </div>
           </div>
         </section>

         <section className='mission'>
           <div className='container'>
             <div className='row'>
               <div className='col-md-6'>
                 <div className='mission-pic'>
                  <img src="assets/img/miss-lefiimage.png" alt="miss-lefiimage" />
                 </div>
               </div>
               <div className='col-md-6'>
                <div className='mission-content'>
                    <div className='mission-inner-con'>
                    <img src="assets/img/mission.svg" alt="mission" />
                      <h4>Our Mission</h4>
                      <p>To empower every individual and organization in the region to achieve more through Microsoft Business Application Suite.</p>
                    </div>

                    <div className='mission-inner-con'>
                    <img src="assets/img/vission.svg" alt="vission" />
                      <h4>Our Vision</h4>
                      <p>To empower every individual and organization in the region to achieve more through Microsoft Business Application Suite.</p>
                    </div>
                </div>
               </div>
             </div>
           </div>
         </section>

         <section>
            <div className='container'>
            <header class="section-header"><h3>Milestones We Achieved</h3></header>
              <div className='row'>
                
                <div className='col-lg-12'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        // autoplay={{
                        //   delay: 5000,
                        //   disableOnInteraction: false,
                        // }}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper about-timeline"
                    >
                        <SwiperSlide>
                          <div className='inner-slider-cont'>
                            <h4>2011</h4>
                            <p>Dynamics Square came into existence</p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='inner-slider-cont'>
                            <h4>2012</h4>
                            <p>Became Microsoft Certified Silver Partner</p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide><div className='inner-slider-cont'>
                            <h4>2015</h4>
                            <p>Started our Footprints in Australia</p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='inner-slider-cont'>
                            <h4>2016</h4>
                            <p>Launched US/UK Operations</p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='inner-slider-cont'>
                            <h4>2017</h4>
                            <p>Became Competent for D365 Customer Engagement</p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className='inner-slider-cont'>
                            <h4>2018</h4>
                            <p>Became Microsoft Gold Certified Partner</p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className='inner-slider-cont'>
                            <h4>2019</h4>
                            <p>Launched Singapore Operations</p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide> 
                          <div className='inner-slider-cont'>
                            <h4>2020</h4>
                            <p>Emerged as Power Platform competent</p>
                          </div></SwiperSlide>
                        <SwiperSlide> <div className='inner-slider-cont'>
                            <h4>2021</h4>
                            <p>Gained competency with entire Microsoft Business Applications</p>
                          </div></SwiperSlide>
                </Swiper>
                </div>
              </div>
            </div>
          </section>

         <section className='domain-expertise'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6'>
                    <div className='domain-expertise-left'>
                        <div className='title-header'>
                            <h3>Domain Expertise</h3>
                            <p>Transforming your visions through our highly embedded industry-specific solutions.</p>
                        </div>

                        <div className='domain-Expertise-list'>
                            <ul>
                              <li><a href='#'><i class="bi bi-arrow-right-circle"></i> Enterprise Resource Planning</a></li>
                              <li><a href='#'><i class="bi bi-arrow-right-circle"></i> Customer Relationship Management</a></li>
                              <li><a href='#'><i class="bi bi-arrow-right-circle"></i> Business Intelligence</a></li>
                              <li><a href='#'><i class="bi bi-arrow-right-circle"></i> IoT Deployment</a></li>
                              <li><a href='#'><i class="bi bi-arrow-right-circle"></i> Supply Chain Management</a></li>
                              <li><a href='#'><i class="bi bi-arrow-right-circle"></i> Financial Management</a></li>
                              <li><a href='#'><i class="bi bi-arrow-right-circle"></i> Project Operations</a></li>
                              <li><a href='#'><i class="bi bi-arrow-right-circle"></i> Human Resource Management</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='domain-expertise-right-pic'>
                        <img src='assets/img/about-right.png' alt='about-right' />
                    </div>
                </div>
              </div>
            </div>
         </section>


         <section>
           <div className='container'>
           <header class="section-header"><h3>Our Presence Worldwide</h3></header>
           <div className='row'>
            <div className='col-lg-12'>
            <img src='assets/img/word-map.png' alt="word-map"></img>
            </div>
          </div>
           </div>
         
         </section>

          

    </main>
  
  );
}

export default AboutUs;