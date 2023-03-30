import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/privacy/Banner";
import Policy from "../components/privacy/Policy";
const Privacy = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <Policy/>
    </Layout>
    
    </>
    
    )

}

export default Privacy;