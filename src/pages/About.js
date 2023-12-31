import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/about/Banner";
import Services from "../components/about/Services";
import Aim from "../components/about/Aim";
import Stats from "../components/about/Stats";

import Team from "../components/about/Team";
import Testimonials from "../components/about/Testimonials";

const About = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <Services/>
        <Aim/>
        <Stats/>
        <Team/>
        {/* <Testimonials/> */}
    </Layout>
    
    </>
    
    )

}

export default About;