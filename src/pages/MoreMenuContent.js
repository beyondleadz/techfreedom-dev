import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/more-menu-content/Banner";
// import Services from "../components/more-menu-content/Services";
import MoreFeatures from "../components/more-menu-content/MoreFeatures";
// import Testimonials from "../components/client/Testimonials";
const Client = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <MoreFeatures/>
        {/* <Services/>
        <Testimonials/> */}
    </Layout>
    
    </>
    
    )

}

export default Client;