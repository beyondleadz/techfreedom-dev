import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/ourdata/Banner";
import Policy from "../components/ourdata/OurData";
const OurData = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <Policy/>
    </Layout>
    
    </>
    
    )

}

export default OurData;