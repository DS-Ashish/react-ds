import React from "react";
import Home from "./Home";
import BusinessCentral from "./BusinessCentral";
import Finance from "./Finance";
import Sales from "./Sales";
import CustomerService from "./CustomerService";
import SupplyChainManagement from "./SupplyChainManagement";
import FieldService from "./FieldService";
import ProjectOperations from "./ProjectOperations";
import Marketing from "./Marketing";
import HumanResource from "./HumanResource";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import Industries from "./Industries";
import MicrosoftCloudForNonprofit from "./MicrosoftCloudForNonprofit";
import Ecommerce from "./Ecommerce";
import Manufacturing from "./Manufacturing";
import ProfessionalService from "./ProfessionalService";
import FoodBeverages from "./FoodBeverages";

import AzureIoT from "./AzureIoT";
import AzureIoTHub from "./AzureIoTHub";
import AzureIoTCentral from "./AzureIoTCentral";
import AzureSphere from "./AzureSphere";
import AzureDigitalTwins from "./AzureDigitalTwins";
import AzureMachineLearning from "./AzureMachineLearning";
import AzureIoTEdge from "./AzureIoTEdge";

import PowerBI from "./PowerBI";
import PowerApps from "./PowerApps";
import PowerAutomate from "./PowerAutomate";
import PowerVirtualAgents from "./PowerVirtualAgents";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Career from "./Career";

import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/react-ds/" component={Home} />
        <Route exact path="/react-ds/solution" component={BusinessCentral} />
        <Route
          exact
          path="/react-ds/dynamics-365-business-central"
          component={BusinessCentral}
        />
        <Route exact path="/react-ds/finance" component={Finance} />
        <Route
          exact
          path="/react-ds/supply-chain-management"
          component={SupplyChainManagement}
        />
        <Route exact path="/react-ds/sales" component={Sales} />
        <Route
          exact
          path="/react-ds/customer-service"
          component={CustomerService}
        />
        <Route exact path="/react-ds/field-service" component={FieldService} />
        <Route
          exact
          path="/react-ds/project-operations"
          component={ProjectOperations}
        />
        <Route
          exact
          path="/react-ds/human-resource"
          component={HumanResource}
        />
        <Route exact path="/react-ds/marketing" component={Marketing} />
        <Route exact path="/react-ds/industries" component={Industries} />
        <Route
          exact
          path="/react-ds/microsoft-cloud-for-nonprofit"
          component={MicrosoftCloudForNonprofit}
        />
        <Route
          exact
          path="/react-ds/food-and-beverages"
          component={FoodBeverages}
        />
        <Route
          exact
          path="/react-ds/microsoft-cloud-for-manufacturing"
          component={Manufacturing}
        />
        <Route
          exact
          path="/react-ds/professional-services"
          component={ProfessionalService}
        />
        <Route exact path="/react-ds/ecommerce" component={Ecommerce} />

        <Route
          exact
          path="/react-ds/azure-iot-internet-of-things"
          component={AzureIoT}
        />
        <Route exact path="/react-ds/azure-iot-hub" component={AzureIoTHub} />
        <Route
          exact
          path="/react-ds/azure-iot-central"
          component={AzureIoTCentral}
        />
        <Route exact path="/react-ds/azure-sphere" component={AzureSphere} />
        <Route exact path="/react-ds/azure-iot-edge" component={AzureIoTEdge} />
        <Route
          exact
          path="/react-ds/azure-digital-twins"
          component={AzureDigitalTwins}
        />
        <Route
          exact
          path="/react-ds/azure-machine-learning"
          component={AzureMachineLearning}
        />

        <Route exact path="/react-ds/microsoft-power-bi" component={PowerBI} />
        <Route
          exact
          path="/react-ds/microsoft-power-apps"
          component={PowerApps}
        />
        <Route
          exact
          path="/react-ds/microsoft-power-automate"
          component={PowerAutomate}
        />
        <Route
          exact
          path="/react-ds/microsoft-power-virtual-agents"
          component={PowerVirtualAgents}
        />
        <Route exact path="/react-ds/about-us" component={AboutUs} />
        <Route exact path="/react-ds/contact-us" component={ContactUs} />
        <Route exact path="/react-ds/career" component={Career} />
        <Route exact path="/react-ds/contact" component={Contact} />

        <Redirect to="/" />
        <Home />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
