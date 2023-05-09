import React,{useState} from "react";
import Layout from "../layout/Layout";
import ExecutiveSummaryContent from "../components/executive-detailsdemo/ExecutiveSummaryContent";
import ExecutiveSummaryHeader from "../components/executive-detailsdemo/ExecutiveSummaryHeader";
import '../assets/css/dynemic-page.css';
const ExecutiveDetailsDemo=()=>{
    return (
        <>
        <Layout>
        <div class="wrapper">
            <ExecutiveSummaryHeader/>
            <div id="wrapper">
               <ExecutiveSummaryContent/>
            </div>
        </div>
        
        </Layout>
        </>
    )
}
export default ExecutiveDetailsDemo;