import React from 'react';
import {NavLink} from 'react-router-dom';



const HumanResource = () => {
  return (
<>
         <section className="Solution-banner hero-1 hero">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 mobile-1">
                     <h1>Dynamics 365<br />
                     Human Resources
                     </h1>
                     <h2>Boost your organization's ability to develop, modify and control budgets, make faster financial decision making with Microsoft Dynamics 365 Finance.</h2>
                     <div>
                        <div className="text-center text-lg-start">
                           <NavLink to="#" className="btn-get-started scrollto">
                           <span>Schedule a Demo</span>
                           </NavLink>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <img src="assets/img/MicrosoftTeams-image-9.webp" alt="image" />
                  </div>
               </div>
            </div>
            
         </section>
        
         
         <section>
            <div className="container">
               <header className="section-header">
                  <h3>What is dynamics 365<br />
                  Human Resources?
                  </h3>
                  <p>Microsoft Dynamics 365 Human Resources (formerly known as Microsoft Dynamics 365 Talent) is designed to boost your <br /> resourcing capabilitiesand manage your entire workforce to produce better results. It helps to hire the right talent, onboard  <br />the right resources,and retain the dedicated people in your organization to impact your organizational growth and scalability.</p>
               </header>
               <div className="row p-lg-6">
                  <div className='col-lg-6'>
                     <div className='finace-acc'>
                     <div class="accordion" id="accnew">
                           <div class="accordion-item">
                              <h2 class="accordion-header" id="headingTwo">
                                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fin1" aria-expanded="false" aria-controls="fin1">
                                 <div className='wr-in'><img src="assets/img/icons-_Highly-Flexible-Solution.svg" alt="icons" /></div><span>Highly Flexible Solution</span>
                                 </button>
                              </h2>
                              <div id="fin1" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accnew">
                                 <div class="accordion-body">
                                 Explore your business capabilities with Dynamics 365 Human Resource solution. Extend your resource optimization by connecting it with partner solutions or integrating with other Microsoft solutions.
                                 </div>
                              </div>
                           </div>
                           <hr />
                           <div class="accordion-item">
                              <h2 class="accordion-header" id="headingTwo">
                                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fin2" aria-expanded="false" aria-controls="fin2">
                                 <div className='wr-in'><img src="assets/img/icons-_Connected-HR-Practices.svg" alt="icons" /></div><span>Connected HR Practices</span>
                                 </button>
                              </h2>
                              <div id="fin2" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accnew">
                                 <div class="accordion-body">
                                 Manage end-to-end tasks from onboarding, compensation & benefits management, leave, absence, & compliance management, payroll & performance management to training & certification.
                                 </div>
                              </div>
                           </div>
                          
                        </div>
                     </div>
                  </div>


                  <div className='col-lg-6'>
                     <div className='finace-acc'>
                     <div class="accordion" id="accnew">
                           <div class="accordion-item">
                              <h2 class="accordion-header" id="headingTwo">
                                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fin3" aria-expanded="false" aria-controls="fin3">
                                 <div className='wr-in'><img src="assets/img/icons-_Actionable-Insights.svg" alt="icons" /></div><span>Actionable Insights</span>
                                 </button>
                              </h2>
                              <div id="fin3" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accnew">
                                 <div class="accordion-body">
                                 Attain built-in AI insights of your workforce, ensure regulatory compliance, and empower your HR people with depth insights to make timely decisions and drive smoother human resourcing practices.
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
                     <h3>How does Microsoft Dynamics 365  Human Resources help to Elevate Your Financial Capabilities?<br />
                      
                     </h3>
                     
                     <h4>Microsoft Dynamics 365  Human Resources Features
                     </h4>
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
                                 <h3>Boost Employee <br /> Experience</h3>
                                 <div className="overlay"></div>
                                 <p>Empower your HR managers with the right tools, centralize your employees’ data, enable your employees with self-service capability, drive improved employee engagement and development with HR solutions.</p>
                              </div>
                              <div className="why-solution-wrapper-inner">
                                 <h3>Optimize HR<br />Practices
                                 </h3>
                                 <div className="overlay"></div>
                                 <p>Enterprises can optimize their human resource practices, improve employee engagement, and manage end-to-end HR tasks embedded with AI insights that drive growth and sustainability.</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6 top-m">
                           <div className="why-solution-wrapper">
                              <div className="why-solution-wrapper-inner">
                                 <h3>Maximize<br />Agility
                                 </h3>
                                 <div className="overlay"></div>
                                 <p>Automate HR administration, streamline HR process flow, and easily integrate with third-party HR solutions to improve your business performance while ensuring security, privacy, and compliance part.</p>
                              </div>
                              <div className="why-solution-wrapper-inner">
                                 <h3>Gain Workforce<br />Insights
                                 </h3>
                                 <div className="overlay"></div>
                                 <p>Centralize your human resource data, stay updated with real-time employees’ insights, and make instant decisions leveraging embedded analytics with Microsoft Dynamics 365 Human Resource solution.
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
                        <div className="col-md-8">
                           <div className="call_to_action-left">
                              <h3>Microsoft Dynamics 365Human Resources
                              </h3>
                              <p>We are here to understand your requirement and convert it into valuable solutions to simplify and seamlessly manage your business practices.</p>
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
                  <div className="col-md-6">
                     <div className="busine_service_bottom-left">
                        <div className="busine_service_bottom-right">
                           <img src="assets/img/bisin_leftimg.jpg" className="fix-im" alt="bisin_leftimg" />
                           <img src="assets/img/ico6.svg" className="flot-img" alt="ico6" />
                           <div className="video-ytube">
                              <div className="popup-btn" ><NavLink data-bs-toggle="modal" to="#exampleModalToggle"><img src="assets/img/contactfor-sede-img.jpg" /><span className="cente-icns"><img src="assets/img/play_icons.svg" alt="play_icons" /></span></NavLink></div>
                           
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="side-heading">
                        <h3>Dynamics 365 Human Resources Service</h3>
                        <p>Manage your workforce, maximize resource utilization, bring organizational agility, engage and onboard the right talent, leverage valuable AI insights to craft a better workspace with Dynamics 365 Human Resources.</p>
                     </div>
                     <div className="busine_service_bottom-right">
                        <div className="card_new_img">
                           <img src="assets/img/Business-Central-Implementation-icons.svg" alt="Business-Central-Implementation-icons" />
                        </div>
                        <div className="card_new_content">
                           <h3>Implementation</h3>
                           <p>Improve and accelerate your human resource processes by implementing Dynamics 365 Human Resources.</p>
                           <div className="action-content"><NavLink to="#">Get Started</NavLink></div>
                        </div>
                     </div>
                     <div className="busine_service_bottom-right">
                        <div className="card_new_img">
                           <img src="assets/img/Business Central Upgrade-icons.svg" alt="Business Central Upgrade-icons" />
                        </div>
                        <div className="card_new_content">
                           <h3>Upgrade</h3>
                           <p>Configure your system with advanced human resource capabilities to upgrade your resource optimization.</p>
                           <div className="action-content"><NavLink to="#">Get Started</NavLink></div>
                        </div>
                     </div>
                     <div className="busine_service_bottom-right">
                        <div className="card_new_img">
                           <img src="assets/img/Business-Central-Support-icons.svg" alt="Business-Central-Support-icons" />
                        </div>
                        <div className="card_new_content">
                           <h3>Support</h3>
                           <p>Keep optimizing your resources and drive a smoother flow in your organization with our Dynamics 365 support services.</p>
                           <div className="action-content"><NavLink to="#">Get Started</NavLink></div>
                        </div>
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
                        <p>Drive new business challenges by implementing Dynamics 365 Human Resources</p>
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
   
        
       
    
    
    
    </>
  
  );
}

export default HumanResource;