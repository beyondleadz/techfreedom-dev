import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/pricing/Banner";
import Plans from "../components/pricing/Plans";
import Faq from "../components/pricing/Faq";

const PricingPlan = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <Plans/>
        <Faq/>
    </Layout>
    
    </>
    
    )

}

export default PricingPlan;