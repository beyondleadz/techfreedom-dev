import React,{useState} from "react";
import Layout from "../layout/Layout";
import ExecutiveContent1 from "../components/executive-details1/ExecutiveContent1";
import ExecutiveHeader1 from "../components/executive-details1/ExecutiveHeader1";
import '../assets/css/dynemic-page.css';
import ExecutiveDetails1 from "../components/executive-details1/ExecutiveHeader1";
const ExecutiveDetails=()=>{
    return (
        <>
        <Layout>
        <div className="wrapper">
            <ExecutiveHeader1/>
            <div id="wrapper">
               <ExecutiveContent1/>
            </div>
        </div>
        
        </Layout>
        </>
    )
}
export default ExecutiveDetails;