import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/features/Banner";
import Feature from "../components/features/Features";
import Services from "../components/features/Services";
import Faq from "../components/features/Faq";

const Features = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <Feature/>
        <Services/>
        <Faq/>
    </Layout>
    
    </>
    
    )

}

export default Features;