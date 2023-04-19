import React from 'react';
import { BrowserRouter as Router, Route, useRoutes, Routes } from "react-router-dom";
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
import ExecutiveSearch from './pages/ExecutiveSearch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgetPassword from './pages/ForgetPassword';
import CompanySearch from './pages/CompanySearch';
import CompanySummary from './pages/CompanySummary';
//import Summary from './pages/Summary';
import OurData from './pages/OurData';
import DirectDials from './pages/DirectDials';
import LeadsManagement from './pages/LeadsManagement';
import Integrations from './pages/Integrations';


// import Test from './pages/Test';
import Demo from './pages/Demo';
const AppRoutes = (props) => {
    return (
        <Router basename={DEVMODE?"":"/beyondleads"}>
            {/* <Header setToken={props.setToken} /> */}
            <Routes path="/">
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
                <Route path='/executive-search' element={<ExecutiveSearch/>}/>
                <Route path='/search-company' element={<CompanySearch/>}/>
                <Route path='/company-summary' element={<CompanySummary/>}/>
                {/* <Route path='/summary' element={<Summary/>}/> */}
                <Route path='/our-data' element={<OurData/>}/>
                <Route path='/direct-dials' element={<DirectDials/>}/>
                <Route path='/lead-management' element={<LeadsManagement/>}/>
                <Route path='/integrations' element={<Integrations/>}/>
              
                {/* <Route path='/test' element={<Test/>}/> */}
                <Route path='/demo' element={<Demo/>}/>
                
                <Route path="*" element={<><center className="text-danger">Route NOT FOUND</center></>} />
            </Routes>
        </Router>
    );
}
export default AppRoutes;
