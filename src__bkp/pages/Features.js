import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/features/Banner";
import Services from "../components/features/Services";
import Faq from "../components/features/Faq";

const Features = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <Services/>
        <Faq/>
    </Layout>
    
    </>
    
    )

}

export default Features;