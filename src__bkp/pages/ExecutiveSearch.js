import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/executive-search/Banner";
import CompanySearch from "../components/executive-search/CompanySearch";
import Prospects from "../components/executive-search/Prospects";
import LaserLists from "../components/executive-search/LaserLists";

import Connect from "../components/executive-search/Connect";
import Dashboard from "../components/executive-search/Dashboard";
import Clients from "../components/executive-search/Clients";

const ExecutiveSearch = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <CompanySearch/>
        <Prospects/>
        <LaserLists/>
        <Connect/>
        <Dashboard/>
        <Clients/>
    </Layout>
    
    </>
    
    )

}

export default ExecutiveSearch;