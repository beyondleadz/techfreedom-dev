import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import FeatureSearchImage from "../../assets/images/features-search-icon.png";
import ProspectSearchImage from "../../assets/images/prospect-search.jpg";
import leadsImage from "../../assets/images/leads.jpg";

import FeatureOrgImage from "../../assets/images/features-org-icon.png";

import FeaturesImageIntelligence from '../../assets/images/features-social-intelligenc-icon.png';
import FeaturesRadiusImage from  '../../assets/images/features-radius-icon.png';
				

const Faq=()=>{
    return (
    <>
       <div className="w3l-faq-block py-5" id="faq">
        <div className="container py-lg-5">
            <div className="row">
                <div className="col-lg-7">
                    <section className="w3l-faq" id="faq">
                        <h3 className="title-style">FAQ - Product Insights!</h3>
                        <p className="mt-3">Explore Frequently asked questions on BeyondLead’s data and key features</p>
                        <div className="faq-page mt-4">
                            <ul>
                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>What kind of data is available for sales professionals?</h2>
                                    <p>Sales professionals can get access to 100% verified B2B database across geographies with business emails, direct dials and mobile numbers.</p>
                                </li>
                                <li>
                                    <input type="checkbox"/>
                                    <i></i>
                                    <h2>What is an Org chart?</h2>
                                    <p>Organisation chart is a function based hierarchy built by BeyondLeadz to provide you instant insights on key designations/functions  within a company.</p>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>How can I convert data to leads?</h2>
                                    <p>You can not only  easily convert your targeted data into leads with single click but can also automate the entire lead capturing process.</p>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>How can I use the data? Can it be downloaded?</h2>
                                    <p>Data can be used in variety of ways , you can either download the data in Excel/PDF or directly convert them to leads or can also integrate with your CRM.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div className="col-lg-5 mt-lg-0 mt-sm-5 mt-4">
                    <div className="banner-form-w3">
                        <form>
                            <h3 className="title-style">Subscribe <span>Now !</span></h3>
                            <p className="mt-3 text-dark" style={{"color":"#343a40"}}>Get ready access to verified data</p>
                            <div className="form-style-w3ls mt-4">
                                {/* <input placeholder="Your Name" name="name" type="text" required=""/>
                                <input placeholder="Your Email" name="email" type="email" required=""/>
                                <input placeholder="Phone Number" name="phone" type="text" required=""/> */}
                                <NavLink to={"/signup"}>
                                <button className="btn btn-style w-100"> Subscribe</button>
                                 </NavLink>
                            </div>
                        </form>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    </>
    )
    }
    export default Faq;