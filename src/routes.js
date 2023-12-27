import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';

import {DEVMODE} from './config'
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import MyView from './pages/MyView';
import MyDashboard from './pages/MyDashboard';
import Career from './pages/Career';
import Features from './pages/Features';
import Contact from './pages/Contact';
import PricingPlan from './pages/PricingPlan';
import Clients from './pages/Client';
import Gallery from './pages/Gallery';
import Privacy from './pages/Privacy';
import SecurityPolicy from './pages/SecurityPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ProspectingSearch from './pages/ProspectingSearch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgetPassword from './pages/ForgetPassword';
import CompanySearch from './pages/CompanySearch';
import ExecutiveSearch from './pages/ExecutiveSearch';
import LeadSearch from './pages/LeadSearch';
import ExecutiveDetails from './pages/ExecutiveDetails';
import ExecutiveDetails1 from './pages/ExecutiveDetails1';
import ProductComparison from './pages/ProductComparison';
import CompanySummary from './pages/CompanySummary';
//import Summary from './pages/Summary';
import OurData from './pages/OurData';
import DirectDials from './pages/DirectDials';
import LeadsManagement from './pages/LeadsManagement';
import Integrations from './pages/Integrations';
import B2BData from './pages/B2BData';
import Faq from './pages/Faq';
import Leads from './pages/Leads';
import LeadDetails from './pages/LeadDetails';
import LeadKanban from './pages/LeadKanban';
import MoreMenuContent from './pages/MoreMenuContent';
import LeadsTimeline from './pages/LeadsTimeline';

import { useEffect } from 'react';
// import { useLocation } from "react-router-dom";
import { topSearch} from "./actionCreator/headerActionCreater";
import { useDispatch } from "react-redux";
// import Test from './pages/Test';
import Demo from './pages/Demo';
const AppRoutes = (props) => {
//     // const location = useLocation();
//     const dispatch = useDispatch();

//   useEffect(() => {
//     console.log(window.location.pathname,'window.location')
//     if (window.location.pathname === "/search-executive" || window.location.pathname === "/search-company") {
//     }else{
//       dispatch(topSearch("")); 
//     }
//   },[window.location.pathname]);

    return (
        <Router basename={DEVMODE?"":"/beyondleads"} {...props}>
            {/* <Header setToken={props.setToken} /> */}
            <Routes path="/" {...props}>
                <Route index element={<Home />} />
                <Route path="/signin" element={<Login/>} />
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/forgetpassword' element={<ForgetPassword/>}/>
                <Route path="/about-us" element={<About/>} />
                <Route path="/dashboard-view" element={<MyDashboard/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/my-view" element={<MyView/>} />
                <Route path="/career" element={<Career/>} />
                <Route path="/features" element={<Features/>} />
                <Route path="/contact-us" element={<Contact/>} />
                <Route path="/pricing" element={<PricingPlan/>} />
                <Route path='/clients' element={<Clients/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/privacy-policy' element={<Privacy/>}/>
                <Route path='/security-policy' element={<SecurityPolicy/>}/>
                <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>
                <Route path='/prospecting-search' element={<ProspectingSearch/>}/>
                <Route path='/executive-search' element={<ExecutiveSearch/>}/>
                <Route path='/executive-details/:id' element={<ExecutiveDetails/>}/>
                <Route path='/executive-details/:id/:name' element={<ExecutiveDetails/>}/>
                <Route path='/executive-details1' element={<ExecutiveDetails1/>}/>
                <Route path='/product-comparison' element={<ProductComparison/>}/>
                <Route path='/search-company' element={<CompanySearch tab='1'/>}/>
                <Route path='/search-executive' element={<ExecutiveSearch tab='2'/>}/>
                <Route path='/search-lead' element={<LeadSearch tab='3'/>}/>
                <Route path='/company-summary/:id/:name' element={<CompanySummary/>}/>
                <Route path='/company-summary/:id' element={<CompanySummary/>}/>
                {/* <Route path='/summary' element={<Summary/>}/> */}
                <Route path='/our-data' element={<OurData/>}/>
                <Route path='/direct-dials' element={<DirectDials/>}/>
                <Route path='/lead-management' element={<LeadsManagement/>}/>
                <Route path='/integrations' element={<Integrations/>}/>
                <Route path='/b2b-data' element={<B2BData/>}/>
                <Route path='/faq' element={<Faq/>}/>
                <Route path='/leads' element={<Leads/>}/>
                <Route path='/lead-details/:id' element={<LeadDetails/>}/>
                <Route path='/create-lead' element={<LeadDetails/>}/>
                <Route path='/leadkanban' element={<LeadKanban/>}/>
                <Route path='/more-menu-content' element={<MoreMenuContent/>}/>
                <Route path='/leads-timeline' element={<LeadsTimeline tab='3'/>}/>
                {/* <Route path='/test' element={<Test/>}/> */}
                <Route path='/demo' element={<Demo/>}/>
                
                <Route path="*" element={<><center className="text-danger">Route NOT FOUND</center></>} />
            </Routes>
        </Router>
    );
}
export default AppRoutes;
