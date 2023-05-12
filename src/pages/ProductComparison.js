import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/product-comparison/ComparisonBanner";
import ComparisonContent from "../components/product-comparison/ComparisonContent";



const ProductComparison = () => {

    return(
        <>
    <Layout>
        <Banner/>
        <ComparisonContent/>
         
    </Layout>
    
    </>
    
    )

}

export default ProductComparison;