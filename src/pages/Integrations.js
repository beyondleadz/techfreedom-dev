import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/integrations/Banner";
import CRMIntegration from "../components/integrations/CRMIntegration";
import InternalSystemsIntegration from "../components/integrations/InternalSystemsIntegration";
import ThirdPartyApplicationsIntegration from "../components/integrations/ThirdPartyApplicationsIntegration";
// import Connect from "../components/integrations/InternalSystemsIntegration";

const Integrations = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <CRMIntegration/>
        <InternalSystemsIntegration/>
        <ThirdPartyApplicationsIntegration/>
        {/* <Connect/> */}
    </Layout>
    
    </>
    
    )

}

export default Integrations;