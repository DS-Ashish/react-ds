import React from 'react';
import {NavLink} from 'react-router-dom';



const Finance = () => {
  return (
<>
         <section className="Solution-banner hero-1 hero">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6 mobile-1">
                     <h1>Dynamics 365<br />
                        Finance
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
                     <img src="assets/img/Dynamics-365-Finance-Banner-1.svg" alt="image" />
                  </div>
               </div>
            </div>
            
         </section>
        
         
         <section>
            <div className="container">
               <header className="section-header">
                  <h3>What is dynamics 365<br />
                  Finance?
                  </h3>
                  <p>Bring accuracy and transparency to your financial operations with Microsoft Dynamics 365 Finance. Implementing D365 <br />Finance enables you to track & monitor your financial operations in real-time, predict financial outcomes, and manage global <br />compliances & risks to drive agility while maximizing growth in your business.</p>
               </header>
               <div className="row p-lg-6">
                  <div className='col-lg-6'>
                     <div className='finace-acc'>
                     <div class="accordion" id="accnew">
                           <div class="accordion-item">
                              <h2 class="accordion-header" id="headingTwo">
                                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fin1" aria-expanded="false" aria-controls="fin1">
                                 <div className='wr-in'><img src="assets/img/Budget.svg" alt="icons" /></div><span>Budgeting</span>
                                 </button>
                              </h2>
                              <div id="fin1" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accnew">
                                 <div class="accordion-body">
                                 Improve your planning and forecasting to impact your financial budgeting. Microsoft Dynamics 365 Finance enables businesses to seamlessly compare the actual budget with the allocated budget.
                                 </div>
                              </div>
                           </div>
                           <hr />
                           <div class="accordion-item">
                              <h2 class="accordion-header" id="headingTwo">
                                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fin2" aria-expanded="false" aria-controls="fin2">
                                 <div className='wr-in'><img src="assets/img/Financials-3.svg" alt="icons" /></div><span>Financials</span>
                                 </button>
                              </h2>
                              <div id="fin2" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accnew">
                                 <div class="accordion-body">
                                 Organize and manage your entire financial records using a general ledger. Manage your account payable, accounts receivable, tax management, and more with D365 Finance.
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
                                 <div className='wr-in'><img src="assets/img/Project.svg" alt="icons" /></div><span>Project Management</span>
                                 </button>
                              </h2>
                              <div id="fin3" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accnew">
                                 <div class="accordion-body">
                                 Effectively plan, create, manage, and control your projects leveraging Microsoft’s finance solution. Track and monitor your project status in real-time and drive a seamless flow to ensure success.
                                 </div>
                              </div>
                           </div>
                           <hr />
                           <div class="accordion-item">
                              <h2 class="accordion-header" id="headingTwo">
                                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fin4" aria-expanded="false" aria-controls="fin4">
                                 <div className='wr-in'><img src="assets/img/International-Accounting-3.svg" alt="icons" /></div><span>International Accounting</span>
                                 </button>
                              </h2>
                              <div id="fin4" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accnew">
                                 <div class="accordion-body">
                                 Support and enable quick adaption for your rapidly changing global accounting and financial requirements. With D365 Finance, simplify your regulatory reporting, and global accounting.
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
                     <h3>How does Microsoft Dynamics 365 Finance help to Elevate Your Financial Capabilities?<br />
                      
                     </h3>
                     
                     <h4>Microsoft Dynamics 365 Finance Features
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
                                 <h3>Enable Informed <br />Decisions</h3>
                                 <div className="overlay"></div>
                                 <p>Track your cash flow, predict & improve your margins. Develop accurate and intelligent budget proposals and simplify your global financial reporting while managing risks.</p>
                              </div>
                              <div className="why-solution-wrapper-inner">
                                 <h3>Automate Your  <br />Finance Operations
                                 </h3>
                                 <div className="overlay"></div>
                                 <p>Automate your invoice processing, manage your credit risks, improve your cash flow, and create a unified source of intelligent information to drive cross-functional collaboration.</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6 top-m">
                           <div className="why-solution-wrapper">
                              <div className="why-solution-wrapper-inner">
                                 <h3>Bring Strategic  <br />Impact & Reduce Costs
                                 </h3>
                                 <div className="overlay"></div>
                                 <p>Seamlessly deploy new subsidiaries, enable automated recurring billing, minimize audit costing, accurately calculate your financial reports & statements, and boost your workforce productivity.  </p>
                              </div>
                              <div className="why-solution-wrapper-inner">
                                 <h3>Manage Global  <br />Finance & Minimize Risks
                                 </h3>
                                 <div className="overlay"></div>
                                 <p>Manage and simplify your global payments, ensure global compliance, reduce risks, improve governance, speed up your invoice delivery, comply with local tax regulations.</p>
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
                              <h3>Dynamics NAV to Business Central Upgrade!
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
                        <h3>Dynamics 365 Finance Service</h3>
                        <p>Strategically Work Towards Fulfilling Your Financial Visions
                        </p>
                     </div>
                     <div className="busine_service_bottom-right">
                        <div className="card_new_img">
                           <img src="assets/img/Business-Central-Implementation-icons.svg" alt="Business-Central-Implementation-icons" />
                        </div>
                        <div className="card_new_content">
                           <h3>Implementation</h3>
                           <p>Get optimum D365 finance implementation services suited to your customized business needs</p>
                           <div className="action-content"><NavLink to="#">Get Started</NavLink></div>
                        </div>
                     </div>
                     <div className="busine_service_bottom-right">
                        <div className="card_new_img">
                           <img src="assets/img/Business Central Upgrade-icons.svg" alt="Business Central Upgrade-icons" />
                        </div>
                        <div className="card_new_content">
                           <h3>Upgrade</h3>
                           <p>Bring innovation and drive agility in your financial operations all through D365 Finance Upgrade.</p>
                           <div className="action-content"><NavLink to="#">Get Started</NavLink></div>
                        </div>
                     </div>
                     <div className="busine_service_bottom-right">
                        <div className="card_new_img">
                           <img src="assets/img/Business-Central-Support-icons.svg" alt="Business-Central-Support-icons" />
                        </div>
                        <div className="card_new_content">
                           <h3>Support</h3>
                           <p>Ensure smoother and uninterrupted flow in your business with our continuous support services. </p>
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
                  <h3>Dynamics 365 Finance Pricing
                  </h3>
                  <p>Automate your financial operations, improve decision making, bring strategic impact on your finance, and minimize global financial complexities & risks with dynamics 365 finance. </p>
               </header>
               <div className="row gy-4 p-9">
                  <div className="col-lg-3 col-md-3">
                     {/* <div className="box">
                        <h4>Business Central<br />
                           Essentials
                        </h4>
                        <div className="price"><sup>£</sup>52.80<span>Per-User/Per Month</span></div>
                        <ul>
                           <li> <i className="bi bi-check-lg"></i> Financial Management</li>
                           <li> <i className="bi bi-check-lg"></i> Inventory Management</li>
                           <li> <i className="bi bi-check-lg"></i> Order Management</li>
                           <li> <i className="bi bi-check-lg"></i> Purchase Order Management</li>
                           <li> <i className="bi bi-check-lg"></i> Project Management</li>
                           <li> <i className="bi bi-check-lg"></i> Additional Capabilities</li>
                        </ul>
                       
                     </div> */}
                  </div>
                  <div className="col-lg-6 col-md-6">
                     <div className="box box-22">
                        <h4>Business Central<br />
                           Essentials
                        </h4>
                        <div className="price"><sup>£</sup>135.70<span>Per-User/Per Month</span></div>
                        <ul>
                           <li> An intelligent, automated, and trusted core financial management solution.</li>
                        </ul>
                       
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                     {/* <div className="box">
                        <h4>Business Central<br />
                           Essentials
                        </h4>
                        <div className="price"><sup>£</sup>52.80<span>Per-User/Per Month</span></div>
                        <ul>
                           <li> <i className="bi bi-check-lg"></i> Read and Approve</li>
                           <li> <i className="bi bi-check-lg"></i> Employee Self Serve</li>
                           <li> <i className="bi bi-check-lg"></i> Run All Reports</li>
                        </ul>
                       
                     </div> */}
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
                        <p>Drive new business challenges by implementing Dynamics 365 Finance</p>
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
                     for Finance
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
                           <h4><NavLink to="#">Dynamics 365 Business Central 2022 Wave 1</NavLink></h4>
                           <span>19 April 2022</span>
                        </div>
                     </div>
                     <div className="blogs-extra-left">
                        <div className="blogs-extra-left-img">
                           <NavLink to="#"><img src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/04/BC-vs-D-CRM-300x157.jpg" alt="img" width="200" height="104" /></NavLink>
                        </div>
                        <div className="blogs-extra-left-content">
                           <h4><NavLink to="#">Dynamics 365 Business Central Vs Dynamics 365 CRM</NavLink></h4>
                           <span>12 April 2022</span>
                        </div>
                     </div>
                     <div className="blogs-extra-left">
                        <div className="blogs-extra-left-img">
                           <NavLink to="#"><img src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/03/D365-vs-GP-300x157.jpg" alt="img" width="200" height="104" /></NavLink>
                        </div>
                        <div className="blogs-extra-left-content">
                           <h4><NavLink to="#">Dynamics 365 Business Central Vs GP</NavLink>
                           </h4>
                           <span>28 March 2022</span>
                        </div>
                     </div>
                     <div className="blogs-extra-left">
                        <div className="blogs-extra-left-img">
                           <NavLink to="#"><img src="https://www.dynamicssquare.co.uk/wp-content/uploads/2022/03/Blog-Image-BC-vs-Finance-and-SC-1-300x157.jpg" alt="img" width="200" height="104" /></NavLink>
                        </div>
                        <div className="blogs-extra-left-content">
                           <h4><NavLink to="#">Business Central Vs Finance & Supply Chain</NavLink>
                           </h4>
                           <span>22 March 2022</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="blogs-extra-title">
                        <h4>Documents</h4>
                     </div>
                     <div className="blogs-extra-right">
                        <ul>
                           <li><NavLink to="#"><i className="bi bi-file-earmark-pdf"></i>  Nucleus Research Report 2020 - Dynamics 365 Finance</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-file-earmark-pdf"></i>Forrester Report - The Economic Impact of Dynamics 365 Finance</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-file-earmark-pdf"></i> Forrester Report - The Economic Impact of Dynamics 365 Finance</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-file-earmark-pdf"></i> A New Approach to Evaluating ERP</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-file-earmark-pdf"></i> Modular ERP: The Key to Corporate Agility</NavLink></li>
                           <li><NavLink to="#"><i className="bi bi-file-earmark-pdf"></i> Licensing Guide</NavLink></li>
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
                     questions about Finance?
                  </h3>
                  <p>Click through to our FAQ for the best answers!</p>
               </header>
               <div className="row justify-content-center mar-top-7">
                  <div className="col-md-8">
                     <div className="accordion accordion-flush" id="faqlist1">
                        <div className="accordion-item">
                           <h3 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                              What is Microsoft Dynamics 365 Finance?
                              </button>
                           </h3>
                           <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                              <div className="accordion-body">
                              Microsoft Dynamics 365 Finance is an advanced analytics solution to support continuously changing or evolving business needs. It enables enterprises to seamlessly control and manage finances. Users can plan and forecast with actual and relevant information to make timely and informed decisions.  Leveraging D365 Finance, businesses can manage their general ledger, cash & bank, tax, accounts payable & receivable, credits & collections, budgeting, fixed assets, cost accounting, electronic invoicing, and more.  
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item">
                           <h3 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                              What are the features of Dynamics 365 Finance?
                              </button>
                           </h3>
                           <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                              <div className="accordion-body">
                              Microsoft Dynamics 365 Finance is a modern finance management tool to simplify your finance practices while reducing manual efforts, data redundancies, and mitigating the risk of uncertainties. D365 Finance solution is designed to support modern enterprises seeking to simply their finance operations to drive profitability and efficiency.<br /><br />

                                 Here are the core features list:<br /><br />
                                 <ul>
                                    <li>General Ledger</li>
                                    <li> Accounts Payable</li>
                                    <li> Accounts Receivable</li>
                                    <li>Cash & Bank Management</li>
                                    <li> Tax Management</li>
                                    <li>Credit & Collections</li>
                                    <li>Budgeting</li>
                                    <li>Cost Accounting</li>
                                    <li>Electronic Invoicing</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item">
                           <h3 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                              How Microsoft Dynamics 365 Finance management can help your business to succeed?
                              </button>
                           </h3>
                           <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                              <div className="accordion-body">
                              To support and drive financial practices in today’s modern enterprises, there is a crucial need to manage end-to-end finances using a single interface. Dynamics 365 Finance boosts businesses to control their financial operations and brings transparency into their financial events in real-time. This helps and encourages the organizations to stay updated with every financial move across their organization and to support their financial decision-making.  <br /><br />
                              Leveraging Dynamics 365 Finance, businesses can have control over their entire financial practices. Using intelligent business insights and financial reports, enterprises can predict and control unexpected events or circumstances.   
                              Automation is something that reduces your efforts and allows you to drive smarter. Dynamics 365 Finance enables automated workflow across your organization wherein repetitive tasks can be automated. Greater visibility into insights helps to make strategic decisions in a timely manner. 
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item">
                           <h3 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                              What is included in Dynamics 365 Finance & Operation?
                              </button>
                           </h3>
                           <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                              <div className="accordion-body">
                              Dynamics 365 Finance & Operations is now – “Dynamics 365 Finance” and “Dynamics 365 Supply Chain Management” to manage all your financial operations in a seamless manner. This financial analytics tool is designed for SMBs to large size organizations to effectively roll out their financial data.  <br /><br />
                              
                              Leveraging D365 Finance, enterprises can manage their core to advance financial practices including budgeting & forecasting, banking, taxation, cost accounting, invoicing, credit & collections, fixed assets, and more. Businesses can also empower their financial hub with predictive data and other financial statements to make smarter financial decisions.  
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item">
                           <h3 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                              What is the Microsoft Dynamics 365 finance and operations model?
                              </button>
                           </h3>
                           <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                              <div className="accordion-body">
                              Microsoft Dynamics 365 for Finance & Operations has now converted to Dynamics 365 Finance and Dynamics 365 Supply Chain Management. With D365 Finance, businesses can efficiently manage their entire financial events. Depending on your specific requirements, you can even integrate your Dynamics 365 Finance with other Microsoft apps, CRM, analytics, or accounting software. 
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item">
                           <h3 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-6">
                              How much does it cost to implement Dynamics 365 Finance?
                              </button>
                           </h3>
                           <div id="faq-content-6" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                              <div className="accordion-body">
                              It could be a smart decision when it comes to Dynamics 365 Finance licensing. Users can avail of its licensing for 130 pounds (approx.) for First Dynamics 365 App and further, for Subsequent qualifying Dynamics 365 Finance app, it could cost you 21 pounds per users/per month (approx.)  
                              </div>
                           </div>
                        </div>
                        <div className="accordion-item">
                           <h3 className="accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-6">
                              Can I customize my Microsoft Dynamics 365 Finance? 
                              </button>
                           </h3>
                           <div id="faq-content-6" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                              <div className="accordion-body">
                              Yes, Dynamics 365 Finance comes with flexibility wherein you can avail of customization as per your specific business domain and set of practices you drive throughout your organization. You can even integrate or configure your D365 Finance with your existing system to enhance your business capabilities. It could be Microsoft’s own apps or could be a third-party application.  <br /><br />

If you want to get more information or how it works, contact Dynamics Square, we can suggest and implement a highly customized solution for your business.  
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

export default Finance;