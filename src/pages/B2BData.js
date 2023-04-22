import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/b2b-data/Banner";
import B2BCompanySearch from "../components/b2b-data/B2BCompanySearch";
import B2BExecutiveSearch from "../components/b2b-data/B2BExecutiveSearch";
import B2BCorporateEmailIds from "../components/b2b-data/B2BCorporateEmailIds";
import B2BDirectDials from "../components/b2b-data/B2BDirectDials";

const B2BData = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <B2BCompanySearch/>
        <B2BExecutiveSearch/>
        <B2BCorporateEmailIds/>
        <B2BDirectDials/>
    </Layout>
    
    </>
    
    )

}

export default B2BData;