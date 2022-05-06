import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const BusinessCentralImplementation = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
        <link rel="canonical" href="" />
        <meta name="description" content="" />
        <meta content="" name="keywords" />
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1">
              <h1>
                Dynamics 365 <br />
                Business Central Implementation
              </h1>
              <h2>
                Connect your finance, sales, service, people & operations by our
                Dynamics 365 Business Central implementation process
              </h2>
              <div>
                <div className="text-center text-lg-start">
                  <NavLink to="#" className="btn-get-started scrollto">
                    <span>Schedule a Demo</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="assets/img/business-central-implementation-banner (1).svg"
                alt="business-central-implementation-banner"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h3>
              What's Include In Dynamics 365
              <br />
              Business Central Implementation?
            </h3>
            <p>
              Bring accuracy and transparency to your financial operations with
              Microsoft Dynamics 365 Finance. Implementing D365 <br />
              Finance enables you to track & monitor your financial operations
              in real-time, predict financial outcomes, and manage global <br />
              compliances & risks to drive agility while maximizing growth in
              your business.
            </p>
          </header>
          <div className="row p-lg-6">
            <div className="col-lg-6">
              <div className="finace-acc">
                <div class="accordion" id="accnew">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <div className="wr-in">
                          <img
                            src="assets/img/icons_finance.svg"
                            alt="icons_finance"
                          />
                        </div>
                        <span>Finance</span>
                      </button>
                    </h2>
                    <div
                      id="fin1"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        With Business Central, manage your inventory levels,
                        forecast demand, predict future potentials, and drive
                        smarter experience throughout your supply chain. With
                        real-time insights into your entire supply chain
                        pipeline, keep eyes to manage stock-out conditions and
                        enable creating purchase orders automatically.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <div className="wr-in">
                          <img
                            src="assets/img/icons_sales.svg"
                            alt="icons_sales"
                          />
                        </div>
                        <span>Sales</span>
                      </button>
                    </h2>
                    <div
                      id="fin2"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Implement Dynamics 365 Business Central to accelerate
                        your entire sales process. Keep tracking your
                        interactions with your customers, get real-time guidance
                        to manage upsell & cross-sell situations, and get
                        notified for renewal opportunities throughout your sales
                        while improving the flow of your cash management.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <div className="wr-in">
                          <img
                            src="assets/img/icons_customer.svg"
                            alt="icons_customer"
                          />
                        </div>
                        <span>Customer</span>
                      </button>
                    </h2>
                    <div
                      id="fin5"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Ensure a smoother transition from sales to the service
                        part. With centralized data, automatically feed your
                        shipped items as service items, enable collaboration
                        between sales and service team to respond to customer
                        inquiries quickly, track customer order returns, stay
                        updated with service agreements, and more with Business
                        Central.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <div className="wr-in">
                          <img
                            src="assets/img/icons_project.svg"
                            alt="icons_project"
                          />
                        </div>
                        <span>Project</span>
                      </button>
                    </h2>
                    <div
                      id="fin6"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Improve your project management from costing and
                        accounting to job costing and reporting. Optimize
                        resource levels. Track and manage customer invoicing for
                        both the planned and actual order costs. Leverage
                        real-time project insights to stay updated with project
                        status, resource utilization key data, and profitability
                        reports.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="finace-acc">
                <hr class="mob-disp" />
                <div class="accordion" id="accnew">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <div className="wr-in">
                          <img
                            src="assets/img/icons_supply-chain.svg"
                            alt="icons_supply-chain"
                          />
                        </div>
                        <span>Supply Chain</span>
                      </button>
                    </h2>
                    <div
                      id="fin3"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Improve and drive smoother engagement with your
                        suppliers, convert offers into orders. Ensure regulatory
                        compliance with both internal and external policies.
                        With transparent and built-in intelligence view into
                        inventory levels and process flow, predict stock
                        replenishment and analyze demand.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <div className="wr-in">
                          <img
                            src="assets/img/icons_warehouse.svg"
                            alt="icons_warehouse"
                          />
                        </div>
                        <span>Warehousing</span>
                      </button>
                    </h2>
                    <div
                      id="fin4"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Support and enable quick adaption for your rapidly
                        changing global accounting and financial requirements.
                        With D365 Finance, simplify your regulatory reporting,
                        and global accounting.
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <div className="wr-in">
                          <img
                            src="assets/img/icons_manufacturing.svg"
                            alt="icons_manufacturing"
                          />
                        </div>
                        <span>Manufacturing</span>
                      </button>
                    </h2>
                    <div
                      id="fin4"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Produce according to supply and capacity, plan your
                        production even in an agile environment or complex
                        situations. Determine raw materials, bills of materials,
                        etc. comprising a finished product. Support assembly to
                        order process, register consumption output across your
                        BOMs, and reconcile scrap in consumption & output.
                      </div>
                    </div>
                  </div>
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
                <h3>Implement Dynamics 365 Business Central</h3>
                <p>
                  Got questions about Business Central Implementation? Talk to
                  our experts today!
                </p>
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

      <section className="Solution-business-why mar-back">
        <div className="container">
          <header className="section-header">
            <h3>
              Why Choose Dynamics Square As Your <br /> Dynamics 365 Business
              Central Implementation Partner?
            </h3>
            <p>
              The team at Dynamics Square provides a holistic approach to the
              implementation process. Our primary aim is to understand your
              business operations and deliver the best plan for a smoother and
              stress-free Business Central implementation.
            </p>
          </header>
          <div className="row pdd1">
            <div className="col-md-4">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Gain <br />
                    Financial Insights
                  </h3>
                  <div className="overlay"></div>
                  <p>
                    Make informed decisions leveraging financial data insights
                    from customer transactions to inventory, purchasing,
                    accounting, financial reporting & key analytics. Gain
                    insights into accounts payable and receivables, track
                    general ledger, predict sales, analyze budgeting, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Improve
                    <br />
                    Customer Experience
                  </h3>
                  <div className="overlay"></div>
                  <p>
                    With Dynamics 365 Business Central Implementation, gain an
                    in-depth overview of your customers. Effortlessly engage and
                    serve a personalized deal to your customers. Accelerate your
                    project flow and ensure on-time project delivery with
                    cost-effectiveness and improved efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Maximize
                    <br />
                    Your Sales
                  </h3>
                  <div className="overlay"></div>
                  <p>
                    Manage your resources, simplify your end-to-end sales
                    process, forecast sales, optimize planning & execution, and
                    keep tracking your sales data in real-time via AI-based
                    sales insights, reporting, and key analytics all through
                    with Microsoft Dynamics 365 Business Central Implementation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Optimize
                    <br />
                    Supply Chain
                  </h3>
                  <div className="overlay"></div>
                  <p>
                    Build improved suppliers' relationships and convert your
                    offers into orders while ensuring compliance with both
                    internal-external policies. Track and ensure replenishment
                    of your inventories leveraging built-in intelligence, sales
                    forecasts, and automatically generated purchase orders
                    whenever stock-outs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Automate <br />
                    Your Processes
                  </h3>
                  <div className="overlay"></div>
                  <p>
                    Migrate your data with confidence and reliability on the
                    cloud. Get guidance resources at every stage of your
                    migration process or strategy. Leverage related tools, and
                    skill set helping you to move your data, server, apps, or
                    workloads to Microsoft Azure cloud. Get ready to face &
                    drive challenges by adopting a cloud-equipped business model
                    implemented on the IaaS model.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Ensure Data <br />
                    Security & GDPR Compliance
                  </h3>
                  <div className="overlay"></div>
                  <p>
                    Business Central is a highly embedded and secured ERP
                    platform. With Microsoft’s cloud model, it is stored,
                    processed, and transferred securely. It ensures and prevents
                    your data from any unauthorized attempts as your data
                    privacy is highly protected with GDPR law compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h3>
              Dynamics 365 Business Central <br />
              Implementation Pricing
            </h3>
            <p>
              As a leading Microsoft Dynamics 365 Business Central partners UK,
              we provide cost effective Business Central Implementation plans.
            </p>
          </header>
          <div className="row gy-4 p-9 justify-content-center">
            <div className="col-lg-4">
              <div className="box box-22">
                <h4>
                  Business Central
                  <br />
                  Essentials
                </h4>
                <div className="price">
                  <sup>£</sup>52.80<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    An intelligent, automated, and trusted core financial
                    management solution.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box box-22">
                <h4>
                  Business Central
                  <br />
                  Premium
                </h4>
                <div className="price">
                  <sup>£</sup>75.40<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    An intelligent, automated, and trusted core financial
                    management solution.
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

      <section className="solution-faq faq">
        <div className="container">
          <header className="section-header">
            <h3>
              Have you got
              <br />
              questions about Business Central Implementation?
            </h3>
            <p>Click through to our FAQ for the best answers!</p>
          </header>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      Is Business Central an ERP?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Business Central is a highly embedded ERP
                      designed to support the end-to-end enterprise practices
                      while improving the entire workflow and accelerating the
                      overall performance to maximize profitability. Business
                      Central can be configured whether on-cloud or on-premises
                      depending on your specific need. Further, it can be
                      customized as per your specific business domain or
                      industry context.
                      <br />
                      <br />
                      To drive streamlined enterprise practices, Business
                      Central can be integrated with any of your existing
                      Microsoft apps or even any third-party applications. This
                      helps to seamlessly manage, access, and drive your data to
                      attain overall success. To know how Business Central can
                      help or work for your business, connect with experts at
                      Dynamics Square, we can help.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      What is Business Central used for?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Business Central is specially designed to manage your
                      day-to-day enterprise tasks or process from Sales,
                      Customers, Finance, Project, Supply Chain, Warehousing to
                      Manufacturing to Human resources. It helps to centralize
                      your data and drive a collaborative data experience.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      What is included in Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      When you implement an ERP system like Business Central, it
                      includes a complete set of business solutions helping
                      businesses to automate their manual processes, streamline
                      their data-driven activities in real-time, connect people,
                      processes, and workflows. Business Central also enables
                      you to manage your sales, inventory, warehousing,
                      manufacturing, and finance practices. Everyone from top
                      management to the executive level can be benefitted from
                      Business Central.
                      <br />
                      <br />
                      With AI-built business insights, people in your
                      organization can forecast data and can have real-time eyes
                      into actual performance, profit or margins, and potentials
                      for improvement, etc.
                      <br />
                      <br />
                      If you are seeking more information about Business
                      Central, do not hesitate to connect with us. Talk to us,
                      we are here to help you out. Dial{" "}
                      <a href="tel:+442071932502">0207 193 2502</a>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >
                      How do I implement Microsoft Dynamics 365 Business
                      Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Business Central implementation process
                      requires a step-by-step effort to be followed. Let's
                      understand the implementation process flow for Business
                      Central. Steps are given below:
                      <br />
                      <br />
                      <strong>Setup</strong>
                      <br />
                      <br />
                      Very first you need to leverage Business Central Setup
                      just to install the different required components. The
                      components include Business Central production or
                      development environment.
                      <br />
                      <br />
                      Setup can be found in installation media named with
                      setup.exe file. Once you run the installation, you will be
                      having options whether to install the individual
                      components or select the predefined option to install the
                      logical set of components.
                      <br />
                      <br />
                      <strong>Configuration</strong>
                      <br />
                      <br />
                      During the installation phase, several configuration
                      settings will be demonstrated wherein you can either
                      choose to customize the settings or can go with the
                      initial settings. Once your set gets done, you can even
                      change the configuration settings by making use of tools
                      like Business Central Server Administration tool and
                      Business Central Administration Shell.
                      <br />
                      <br />
                      <strong>Prerequisite Installations</strong>
                      <br />
                      <br />
                      To complete the installation process, you are required to
                      install the other software too such as database requires
                      SQL Server and Web client requires IIS.
                      <br />
                      <br />
                      <strong>
                        Downloading Business Central to Install Further
                      </strong>
                      <br />
                      <br />
                      Business central is available and can be downloaded from
                      Microsoft Support. The downloaded file will contain
                      setup.exe file. You can find several versions to choose
                      from. Every release is equipped even with minor updates
                      that are published on regular basis.
                      <br />
                      <br />
                      <strong>Download Files</strong>
                      <br />
                      <br />
                      Now, all you need is to go to the update page to download
                      the release that you are willing to install. Once your
                      download gets completed, you are required to install the
                      setup. To download the setup, follow the initial steps.
                      <br />
                      <br />
                      Implementing Dynamics 365 Business Central requires expert
                      practices, training, and support, if you need experts for
                      Dynamics 365 Business Central Services, discuss your
                      requirement with Dynamics Square, your trusted{" "}
                      <a href="https://www.dynamicssquare.co.uk/">
                        Dynamics 365 implementation partner in UK
                      </a>
                      , London. We can help to implement a highly customized
                      solution suited to your exact business needs.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >
                      How long does it take to implement Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      The implementation process of Business Central may vary
                      from project to project, business to business, and
                      industry to industry. Depending on your project
                      complexity, customization requirement, and integration
                      needs, it can take 3 to 9 months. If are seeking to
                      implement Dynamics 365 Business Central, contact Dynamics
                      Square, by evaluating and analyzing your exact
                      implementation needs, we can tell you how long your
                      project implementation will take.
                      <br />
                      <br />
                      You can also connect with us for{" "}
                      <a
                        href="https://www.dynamicssquare.co.uk/free-dynamics-365-system-health-check/"
                        target={"_blank"}
                      >
                        Dynamics 365 system health check
                      </a>{" "}
                      at no cost, as we are here to implement your dream project
                      in the most productive way associated with our appropriate
                      training &amp; assistance.
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
};

export default BusinessCentralImplementation;
