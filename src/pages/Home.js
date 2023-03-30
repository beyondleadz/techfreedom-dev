import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/home/Banner";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Homeservices from "../components/home/Homeservices";
import Leads from "../components/home/Leads";
import Stats from "../components/home/Stats";
import Subscribe from "../components/home/Subscribe";
import Testimonials from "../components/home/Testimonials";

const Home = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <About/>
        <Services/>
        <Leads/>
        <Homeservices/>
        <Stats/>
        <Testimonials/>
        <Subscribe/>
    </Layout>
    
    </>
    
    )

}

export default Home;