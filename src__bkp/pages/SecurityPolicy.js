import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/securitypolicy/Banner";
import Policy from "../components/securitypolicy/Policy";
const SecurityPolicy = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <Policy/>
    </Layout>
    
    </>
    
    )

}

export default SecurityPolicy;