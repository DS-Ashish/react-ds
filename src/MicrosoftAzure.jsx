import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const MicrosoftAzure = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Microsoft Azure | Microsoft Azure Cloud Services</title>
        <link rel="canonical" href="" />
        <meta
          name="description"
          content="Microsoft Azure is referred to cloud computing service owned and operated by Microsoft to manage hosted applications via its Microsoft-managed data centers."
        />
        <meta content="" name="keywords" />
      </Helmet>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1">
              <h1>
                Microsoft Azure
                <br />A Hybrid Cloud Application
              </h1>
              <h2>
                Elevate Your Ideation And Business Capabilities With Microsoft
                Azure Cloud Services​
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
              <img src="assets/img/azure-Banner.png" alt="azure-Banner" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <header className="section-header">
            <h3>
              What Is Microsoft
              <br /> Azure?
            </h3>
            <p>
              Microsoft Azure is referred to cloud computing service owned and
              operated by Microsoft to manage hosted applications via its
              Microsoft-managed data centers. Microsoft Azure solutions involve
              Software as a Service (SaaS), Platform as a Service (PaaS), and
              Infrastructure as a Service (IaaS). <br />
              With Microsoft Azure, enterprises can implement a highly secured
              next-generation solution.
              <br />
              Drive integrated experience with Microsoft Azure solutions by
              connecting your existing system with related third-party
              applications. Connect and bring together your system, data, and
              devices to enable a highly secure, reliable, and cost-effective
              solution.
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
                        <span>App Service</span>
                      </button>
                    </h2>
                    <div
                      id="fin1"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        App Service enables to quickly create and host
                        data-driven cloud apps for web and mobile platforms
                        using RESTful APIs facilitated with automated
                        deployments from Azure DevOps, GitHub, etc.
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
                        <span>Azure Cognitive Services</span>
                      </button>
                    </h2>
                    <div
                      id="fin2"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Azure Cognitive Services helps to create intelligent
                        apps, web applications, and virtual bots comprising
                        capabilities including speech recognition, natural
                        language processing, and more.
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
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <span>Azure Cosmos DB</span>
                      </button>
                    </h2>
                    <div
                      id="fin3"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Azure Cosmo DB refers to NoSQL database facilitates with
                        SLA speed, automatic scalability, etc. wrapped with
                        open-source APIs for cloud-native document databases
                        such as MongoDB and Cassandra.
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
                        <span>Azure Functions</span>
                      </button>
                    </h2>
                    <div
                      id="fin4"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Azure Functions facilitate with less server code and are
                        used to develop web APIs, quickly respond to changes
                        made to the database, process IoT streams, manage
                        messages or notifications queues, etc.
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
                        data-bs-target="#fin9"
                        aria-expanded="false"
                        aria-controls="fin9"
                      >
                        <span>Azure Kubernetes Services (AKS)</span>
                      </button>
                    </h2>
                    <div
                      id="fin9"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Leveraging Azure Kubernetes Services (AKS), quickly
                        deploy production-ready AKS cluster in Azure. AKS
                        facilitates simplifying deployment, management, and
                        operations of Kubernetes.
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
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <span>Azure Quantum (Preview)</span>
                      </button>
                    </h2>
                    <div
                      id="fin5"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Azure Quantum allows Python and Q# -quantum programming
                        languages to develop and deploy quantum programs in the
                        Azure Portal or in a local development environment using
                        the QDK kit.
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
                        <span>Azure SQL</span>
                      </button>
                    </h2>
                    <div
                      id="fin6"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Azure SQL refers to the modern SQL family (comprising
                        Azure SQL Database, Azure SQL Managed Instance, and SQL
                        Server on Azure VM) to ensure seamless migration and app
                        modernization.
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
                        data-bs-target="#fin7"
                        aria-expanded="false"
                        aria-controls="fin7"
                      >
                        <span>Azure Virtual Desktop</span>
                      </button>
                    </h2>
                    <div
                      id="fin7"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Azure Virtual Desktop helps to deploy virtual desktops
                        and remote apps with maximum potential control to any
                        device delivered on Azure to enjoy the best user
                        experience wrapped with minimized IT costs.
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
                        data-bs-target="#fin8"
                        aria-expanded="false"
                        aria-controls="fin8"
                      >
                        <span>Linux Virtual Machines</span>
                      </button>
                    </h2>
                    <div
                      id="fin8"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        Linux Virtual Machines are designed to build and manage
                        a separate application environment deployed on Azure.
                        Linux Virtual Machines can provision a virtual machine
                        for Ubuntu, Red Hat, etc.
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
                        data-bs-target="#fin10"
                        aria-expanded="false"
                        aria-controls="fin10"
                      >
                        <span>Windows Virtual Machines</span>
                      </button>
                    </h2>
                    <div
                      id="fin10"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div class="accordion-body">
                        The Windows Virtual Machine enables to ensure a separate
                        application environment deployed on Azure. Windows
                        Virtual Machine can provision virtual machines for
                        applicable or supportive versions.
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
                <h3>Let's Talk to Our Experts</h3>
                <p>
                  It's time to connect and share with experts at Dynamics Square
                  to reveal business solutions defining your core business
                  values and process flow.
                </p>
                <div className="text-center m-o-t new-btn-nn">
                  <NavLink to="#about" className="btn-get-started scrollto">
                    <span>Schedule a Demo</span>
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
              Microsoft Azure
              <br /> Features?
            </h3>
          </header>
          <div className="row pdd1">
            <div className="col-md-4">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Highly <br />
                    Embedded Cloud
                  </h3>
                  <div className="overlay"></div>
                  <p>
                    Leverage intensely secured cloud facilitation with Microsoft
                    Azure cloud services, develop highly configured cloud apps,
                    integrate and bring closure all your apps to drive highly
                    productive and scalable apps impacting your growth strategy
                    and improving your business values while adhering to the
                    global regulatory compliances.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Drive <br />
                    Improved Security
                  </h3>
                  <div className="overlay"></div>
                  <p>
                    Ensure highly secured business model with Microsoft Azure
                    fundamentals embedded with multi-layer security provided and
                    rolled out across Microsoft data centers, infrastructure,
                    and connected operations covered by security experts to
                    protect your business assets and data you drive over the
                    cloud network.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Accelerate <br />
                    Invention & Innovation
                  </h3>
                  <div className="overlay"></div>
                  <p>
                    Increase innovation, accelerate your development strategy,
                    faster your time to market, maximize your developer
                    velocity, and remove development barriers. Empower your
                    developers with the right set of tools and skillsets, bring
                    collaboration, and support the continuously changing needs,
                    for instance, to manage spikes in customer demand.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Build Your <br />
                    Business Case
                  </h3>
                  <div className="overlay"></div>
                  <p>
                    Get the maximum value out of your Azure investment by
                    building your business case on the Microsoft Azure portal
                    leveraging both the financial and technical guidance from
                    Azure. Discover your brand values and business efficiencies
                    that can be made possible on the cloud. Choose the
                    best-suited cloud development solutions and avail of greater
                    returns.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="why-solution-wrapper why-solution-wrapper-1">
                <div className="why-solution-wrapper-inner">
                  <h3>
                    Reliable <br />
                    Migration
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
                    Real-Time <br />
                    Data Analytics
                  </h3>
                  <div className="overlay"></div>
                  <p>
                    Transform your raw data into real-time actionable insights
                    and key analytics by building modernized cloud-based key
                    analytics solutions to address and fulfill your AI
                    (artificial intelligence), data warehousing, and advanced
                    analytics needs. With Azure cloud services, enable secure
                    data distribution across your distribution network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicrosoftAzure;
