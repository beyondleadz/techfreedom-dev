import React, {useMemo} from 'react';
import { BrowserRouter as Router, Route, useRoutes, Routes, useMatch } from "react-router-dom";
import Home from './pages/Home';

import {DEVMODE} from './config'
import About from './pages/About';
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
// import Test from './pages/Test';
import Demo from './pages/Demo';
const AppRoutes = (props) => {
    return (
        <Router basename={DEVMODE?"":"/beyondleads"} {...props}>
            {/* <Header setToken={props.setToken} /> */}
            <Routes path="/" {...props}>
                <Route index element={<Home />} />
                <Route path="/signin" element={<Login/>} />
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/forgetpassword' element={<ForgetPassword/>}/>
                <Route path="/about-us" element={<About/>} />
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
                <Route path='/executive-details1' element={<ExecutiveDetails1/>}/>
                <Route path='/product-comparison' element={<ProductComparison/>}/>
                <Route path='/search-company' element={<CompanySearch tab='1'/>}/>
                <Route path='/search-executive' element={<ExecutiveSearch tab='2'/>}/>
                <Route path='/search-lead' element={<LeadSearch tab='3'/>}/>
                {/* <Route path='/company-summary' element={<CompanySummary/>}/> */}
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
                {/* <Route path='/test' element={<Test/>}/> */}
                <Route path='/demo' element={<Demo/>}/>
                
                <Route path="*" element={<><center className="text-danger">Route NOT FOUND</center></>} />
            </Routes>
        </Router>
    );
}
export default AppRoutes;
