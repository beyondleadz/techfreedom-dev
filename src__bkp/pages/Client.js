import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/client/Banner";
import Services from "../components/client/Services";
import Testimonials from "../components/client/Testimonials";
const Client = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <Services/>
        <Testimonials/>
    </Layout>
    
    </>
    
    )

}

export default Client;