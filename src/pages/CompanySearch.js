import React,{useState} from "react";
import CompanyLeft from "../components/company-search/CompanyLeft";
import CompanyContent from "../components/company-search/CompanyContent";
import CompanyHeader from "../components/company-search/CompanyHeader";
import '../assets/css/dynemic-page.css';
const CompanySearch=()=>{
    return (
        <>
        <div class="wrapper">
            <CompanyHeader/>
            <div id="wrapper">
                <CompanyLeft/>
                <CompanyContent/>
            </div>
        </div>
        </>
    )
}
export default CompanySearch;
