import React,{useState} from "react";
import Layout from "../layout/Layout";
import SummaryContent from "../components/company-summary/SummaryContent";
import SummaryHeader from "../components/company-summary/SummaryHeader";
import '../assets/css/dynemic-page.css';
const CompanySummary=()=>{
    return (
        <>
        <Layout>
        <div class="wrapper">
            <SummaryHeader/>
            <div id="wrapper">
               <SummaryContent/>
            </div>
        </div>
        
        </Layout>
        </>
    )
}
export default CompanySummary;