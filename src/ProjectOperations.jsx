import React from 'react';
import {NavLink} from 'react-router-dom';



const ProjectOperations = () => {
  return (
<>
         <section className="Solution-banner hero-1 hero">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 mobile-1">
                     <h1>Dynamics 365<br />
                     Project Operations
                     </h1>
                     <h2>Bring Agility, Improve Transparency, and Streamline Your Projects with Dynamics 365 Project Operations</h2>
                     <div>
                        <div className="text-center text-lg-start">
                           <NavLink to="#" className="btn-get-started scrollto">
                           <span>Schedule a Demo</span>
                           </NavLink>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <img src="assets/img/project-operation-banner.png" alt="image" />
                  </div>
               </div>
            </div>
            
         </section>
        
         
         <section>
            <div className="container">
               <header className="section-header">
                  <h3>What is dynamics 365<br />
                  Project Operations?
                  </h3>
                  <p>Connect your project operations from sales, resourcing, and financing to project management by <br />effectively leveraging Dynamics 365 Project Operations. A single unified app helps to bring your team together <br />to drive collaboration, faster your project delivery, and maximize your growth potentials.</p>
               </header>
               <div className="row p-lg-6">
                  <div className='col-lg-6'>
                     <div className='finace-acc'>
                     <div class="accordion" id="accnew">
                           <div class="accordion-item">
                              <h2 class="accordion-header" id="headingTwo">
                                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fin1" aria-expanded="false" aria-controls="fin1">
                                 <div className='wr-in'><img src="assets/img/icon-automation.svg" alt="icons" /></div><span>Project Automation</span>
                                 </button>
                              </h2>
                              <div id="fin1" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accnew">
                                 <div class="accordion-body">
                                 Enable project automation to allow people involved from the top level to executive level to stay updated with the real-time status of the project to plan and execute the project accordingly.
                                 </div>
                              </div>
                           </div>
                           <hr />
                           <div class="accordion-item">
                              <h2 class="accordion-header" id="headingTwo">
                                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fin2" aria-expanded="false" aria-controls="fin2">
                                 <div className='wr-in'><img src="assets/img/icons_resource-management.svg" alt="icons" /></div><span>Resource Management</span>
                                 </button>
                              </h2>
                              <div id="fin2" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accnew">
                                 <div class="accordion-body">
                                 Elevate your project delivery model by aligning the right talent to the right project impacting the overall project development cycle while ensuring the quality of the project and fulfilling deadlines.
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
                                 <div className='wr-in'><img src="assets/img/icons_finance-management.svg" alt="icons" /></div><span>Finance Management</span>
                                 </button>
                              </h2>
                              <div id="fin3" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accnew">
                                 <div class="accordion-body">
                                 Simplify your finance from project costing, budgeting, invoicing & billing, revenue recognition, and compliance management while enabling visibility into every project status.
                                 </div>
                              </div>
                           </div>
                           <hr />
                           <div class="accordion-item">
                              <h2 class="accordion-header" id="headingTwo">
                                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fin4" aria-expanded="false" aria-controls="fin4">
                                 <div className='wr-in'><img src="assets/img/icons_data-management.svg" alt="icons" /></div><span>Data Management</span>
                                 </button>
                              </h2>
                              <div id="fin4" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accnew">
                                 <div class="accordion-body">
                                 Streamline your data to be accessed and utilized by everyone involved in the project to accelerate project delivery, drive quality assurance, and attain project success.
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
                     <h3>Streamline your Project Operations & Accelerate Delivery with D365 Project Operations?<br />
                      
                     </h3>
                     
                     <h4>Microsoft Dynamics 365 Project Operations Features
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
                                 <h3>Optimize <br />Resource Utilization</h3>
                                 <div className="overlay"></div>
                                 <p>With Dynamics 365 Project Service Automation, assign the right people to the right project leveraging skill-matching, scheduling, and resourcing insights.</p>
                              </div>
                              <div className="why-solution-wrapper-inner">
                                 <h3>Accelerate Project  <br />Management</h3>
                                 <div className="overlay"></div>
                                 <p>Make effective use of inbuilt Microsoft Project Management capabilities such as Kanban boards, Gantt charts, etc. to faster the Project delivery.</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6 top-m">
                           <div className="why-solution-wrapper">
                              <div className="why-solution-wrapper-inner">
                                 <h3>Streamline Project  <br />Financials</h3>
                                 <div className="overlay"></div>
                                 <p>Streamline your project financials from project accounting, budgeting to ensuring global financial reporting standards compliance.</p>
                              </div>
                              <div className="why-solution-wrapper-inner">
                                 <h3>Time & Expense  <br />Management</h3>
                                 <div className="overlay"></div>
                                 <p>Effortlessly submit time and expenses, automate the entire workflow, and improve your submissions, approvals, and reporting capabilities.</p>
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
                              <h3>Connect & Discuss with Our Experts</h3>
                              <p>Connect and reveal a healthy deal for your business to improve business processes and maximize business capabilities.</p>
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
                        <h3>Dynamics 365 Project Operations</h3>
                        <p>We offer a full range of services to support you on your Dynamics journey including implementation, upgrade and support.</p>
                     </div>
                     <div className="busine_service_bottom-right">
                        <div className="card_new_img">
                           <img src="assets/img/Business-Central-Implementation-icons.svg" alt="Business-Central-Implementation-icons" />
                        </div>
                        <div className="card_new_content">
                           <h3>Implementation</h3>
                           <p>Implementing Microsoft Project solutions can help to manage your project operations seamlessly.</p>
                           <div className="action-content"><NavLink to="#">Get Started</NavLink></div>
                        </div>
                     </div>
                     <div className="busine_service_bottom-right">
                        <div className="card_new_img">
                           <img src="assets/img/Business Central Upgrade-icons.svg" alt="Business Central Upgrade-icons" />
                        </div>
                        <div className="card_new_content">
                           <h3>Upgrade</h3>
                           <p>Bring agility across your project operations with our improved and highly optimized support system.</p>
                           <div className="action-content"><NavLink to="#">Get Started</NavLink></div>
                        </div>
                     </div>
                     <div className="busine_service_bottom-right">
                        <div className="card_new_img">
                           <img src="assets/img/Business-Central-Support-icons.svg" alt="Business-Central-Support-icons" />
                        </div>
                        <div className="card_new_content">
                           <h3>Support</h3>
                           <p>Drive project-centric approach across your business by upgrading Dynamics 365 Project Operations.</p>
                           <div className="action-content"><NavLink to="#">Get Started</NavLink></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="pricing" className="pricing">
            <div className="container">
               <header className="section-header">
                  <h3>Dynamics 365 Project Operations Pricing
                  </h3>
                  <p>Find Dynamics 365 Project Operations plans and pricing to choose the applications that are right for your business needs.</p>
               </header>
               <div className="row gy-4 p-9">
                 
                  <div className="col-lg-6 col-md-6">
                     <div className="box box-22">
                        <h4>First Dynamics 365<br />
                           App
                        </h4>
                        <div className="price"><sup>£</sup>90.50<span>Per-User/Per Month</span></div>
                        <ul>
                           <li>An intelligent, automated, and trusted core financial management solution.</li>
                        </ul>
                       
                     </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                     <div className="box box-22">
                        <h4>Subsequent Dynamics 365 <br />
                        App
                        </h4>
                        <div className="price"><sup>£</sup>22.60<span>Per-User/Per Month</span></div>
                        <ul>
                           <li>An intelligent, automated, and trusted core financial management solution.</li>
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
         <section className="call-to-action-center hero-4">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-8">
                     <div className="call-to-action-content">
                        <h3>Maximize your business potentials</h3>
                        <p>Drive new business challenges by implementing Dynamics 365 Project Operations</p>
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
   
         <section className="blogs-extra">
            <div className="container">
               <header className="section-header">
                  <h3>Check out our Best Resources<br />
                     for Project Operations
                  </h3>
               </header>
               <div className="row top-2 gx-5">
                  <div className="col-lg-6">
                     <div className="blogs-extra-title">
                        <h4>Articles</h4>
                     </div>
                     <div className="blogs-extra-left">
                        <div className="blogs-extra-left-img">
                           <NavLink to="#"><img src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/04/Dynamics-365-Business-Central-2022-Wave-1-300x157.png" alt="img" width="200" height="104" /></NavLink>
                        </div>
                        <div className="blogs-extra-left-content">
                           <h4><NavLink to="#">Dynamics 365 Business Central Vs GP</NavLink></h4>
                           <span>28 March 2022</span>
                        </div>
                     </div>
                     <div className="blogs-extra-left">
                        <div className="blogs-extra-left-img">
                           <NavLink to="#"><img src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/04/BC-vs-D-CRM-300x157.jpg" alt="img" width="200" height="104" /></NavLink>
                        </div>
                        <div className="blogs-extra-left-content">
                           <h4><NavLink to="#">Business Central Vs Finance & Supply Chaint</NavLink></h4>
                           <span>28 March 2022</span>
                        </div>
                     </div>
                     <div className="blogs-extra-left">
                        <div className="blogs-extra-left-img">
                           <NavLink to="#"><img src="https://www.dynamicssquare.co.uk/wp-content/uploads/2021/10/upgrade-accounting-software-300x169.jpg" alt="img" width="200" height="104" /></NavLink>
                        </div>
                        <div className="blogs-extra-left-content">
                           <h4><NavLink to="#">10 Powerful Reasons to Upgrade
                              Accounting Software</NavLink>
                           </h4>
                           <span>28 March 2022</span>
                        </div>
                     </div>
                     <div className="blogs-extra-left">
                        <div className="blogs-extra-left-img">
                           <NavLink to="#"><img src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/03/D365-vs-GP-300x157.jpg" alt="img" width="200" height="104" /></NavLink>
                        </div>
                        <div className="blogs-extra-left-content">
                           <h4><NavLink to="#">Dynamics 365 Business Central Wave 2:
                              2021 Highlights</NavLink>
                           </h4>
                           <span>28 March 2022</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="blogs-extra-title">
                        <h4>Documents</h4>
                     </div>
                     <div className="blogs-extra-right">
                        <ul>
                           <li><NavLink to="#"><i className="bi bi-file-earmark-pdf"></i>Nucleus Research Report 2020 - Dynamics 365 Finance</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-file-earmark-pdf"></i>Forrester Report - The Economic Impact of Dynamics 365 Finance</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-file-earmark-pdf"></i>Forrester Report - The Economic Impact of Dynamics 365 Finance</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-file-earmark-pdf"></i>New Approach to Evaluating ERP</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-file-earmark-pdf"></i>Modular ERP: The Key to Corporate Agility</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-file-earmark-pdf"></i>Licensing Guide</NavLink></li>
                        </ul>
                     </div>
                     <div className="blogs-extra-title">
                        <h4>Learn More</h4>
                     </div>
                     <div className="blogs-extra-right">
                        <ul>
                           <li><NavLink to="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Collections automation</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Vendor invoice automation</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-box-arrow-up-right"></i> Why to Upgrade Dynamics NAV to Business Central</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-box-arrow-up-right"></i> Dynamics 365 Finance: Asset leasing</NavLink></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="solution-faq faq">
            <div className="container">
               <header className="section-header">
                  <h3>Have you got<br />
                     questions about Project Operations?
                  </h3>
                  <p>Click through to our FAQ for the best answers!</p>
               </header>
               <div className="row justify-content-center mar-top-7">
                  <div className="col-md-8">
                     <div className="accordion accordion-flush" id="faqlist1">
                     <div className="accordion-item">
                           <h3 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                              What is Project Operations in Dynamics 365?
                              </button>
                           </h3>
                           <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                              <div className="accordion-body">
                              Microsoft Dynamics 365 Project Operations is designed to connect sales, optimize resources, manage projects, and simplify finances using a single unified application that helps to close deals faster and accelerate project delivery while maximizing the revenue outcomes.
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item">
                           <h3 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                              How do I install Project Operations in Dynamics 365?
                              </button>
                           </h3>
                           <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                              <div className="accordion-body">
                              When it comes to installing project operations in Dynamics 365, multiple deployment options come ahead. You can either install Project Operations:<br /><br />
                              <ul>
                                 <li>To a new CDS environment</li>
                                 <li>To an existing CDS environment</li>
                              </ul>
                              <br />In the case of a new CDS environment, you need to have access to Global or Power Platform Administrator with licensing of Project Operations. Now, create a new CDS environment using the Power Platform admin center. The next step is to select Microsoft Dynamics 365 Project Operations going through:<br /><br />
                              <b>Dynamics 365 Apps-> Microsoft Dynamics 365 Project Operations</b><br /><br />In the case of an existing CDS environment, you are required to have access to Global or Power Platform Administrator with Project Operations licensing. Now, all you need to locate the environment by going through the Power Platform admin center. Here, you can install project operations.Here is the navigation:<br />Manage Dynamics 365 Apps-> Microsoft Dynamics 365 Project Operations.
                              </div>
                           </div>
                        </div>
                        
                        <div className="accordion-item">
                           <h3 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                              Does Project Operations integrate with Dynamics 365 Business Central?
                              </button>
                           </h3>
                           <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                              <div className="accordion-body">
                              Dynamics 365 Project Operations is designed to fulfill a particular purpose. It comprises its sufficient capabilities to streamline and simplify project management. However, you can integrate your Project Operations not just with Business Central even with Microsoft's other products too.
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item">
                           <h3 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                              How do I create a project category in Dynamics 365?
                              </button>
                           </h3>
                           <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                              <div className="accordion-body">
                              In Microsoft Dynamics 365, each category works under the category group. Hence, you need to define the group categories first. Thereafter, you can create project categories under the specific group. Now, let's understand how to create a group category first.<br /><br />To Create Group Category, navigate through:<br /><br />Project Management and Accounting Setup  Categories Category Groups<br /><br />After reaching to Category Group, navigate through clicking New, then Category group field, and then select & enter an identifier for the category group.<br /><br />To Create a project category, navigate through:<br /><br />Project Management and Accounting Setup Categories Project Categories<br /><br />Now, click New once you reach Project Categories.<br /><br />The last step is to select the identifier of the project category.
                              </div>
                           </div>
                        </div>
                        
                        
                        
                     </div>
                  </div>
               </div>
            </div>
         </section>
    
    
    
    </>
  
  );
}

export default ProjectOperations;