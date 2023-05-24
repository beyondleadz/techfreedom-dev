import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/faq/Banner";
// import Plans from "../components/pricing/Plans";
import Faq from "../components/faq/Faq";

const PricingPlan = () => {

    return(
        <>
    <Layout>
        <Banner/>
        {/* <Plans/> */}
        <Faq/>
    </Layout>
    
    </>
    
    )

}

export default PricingPlan;