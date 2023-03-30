import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/career/Banner";
import About from "../components/career/About";
import Benifits from "../components/career/Benifits";
import Gallery from "../components/career/Gallery";
import Team from "../components/career/Team";

const Career = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <About/>
        <Benifits/>
        <Gallery/>
        <Team/>
    </Layout>
    
    </>
    
    )

}

export default Career;