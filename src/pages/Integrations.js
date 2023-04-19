import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/integrations/Banner";
import CRMIntegration from "../components/integrations/CRMIntegration";
import InternalSystemsIntegration from "../components/integrations/InternalSystemsIntegration";
import LaserLists from "../components/integrations/LaserLists";
// import Connect from "../components/integrations/InternalSystemsIntegration";

const ExecutiveSearch = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <CRMIntegration/>
        <InternalSystemsIntegration/>
        <LaserLists/>
        {/* <Connect/> */}
    </Layout>
    
    </>
    
    )

}

export default ExecutiveSearch;