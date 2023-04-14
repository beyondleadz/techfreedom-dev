import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/lead-management/Banner";
import LeadManage from "../components/lead-management/LeadsManagement";
const LeadsManagement = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <LeadManage/>
    </Layout>
    
    </>
    
    )

}

export default LeadsManagement;