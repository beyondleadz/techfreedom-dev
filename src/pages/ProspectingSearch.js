import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/prospecting-search/Banner";
import CompanySearch from "../components/prospecting-search/CompanySearch";
import Prospects from "../components/prospecting-search/Prospects";
import LaserLists from "../components/prospecting-search/LaserLists";

import Connect from "../components/prospecting-search/Connect";
import Dashboard from "../components/prospecting-search/Dashboard";
// import Clients from "../components/prospecting-search/Clients";

const ProspectingSearch = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <CompanySearch/>
        <Prospects/>
        <LaserLists/>
        <Connect/>
        <Dashboard/>
        {/* <Clients/> */}
    </Layout>
    
    </>
    
    )

}

export default ProspectingSearch;