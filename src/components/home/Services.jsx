import React,{useState} from "react";
import CompanySearchImage from "../../assets/images/company-search.jpg"

import ProspectSearchImage from "../../assets/images/prospect-search.jpg"
const Services=()=>{
    return (
    <>
        <section className="w3l-servicesblock py-5">
        <div className="container pb-lg-5">
            <div className="row pb-xl-5 align-items-center">
                <div className="col-lg-6 position-relative home-block-3-left pb-lg-0 pb-5">
                    <div className="position-relative">
                        <img src={CompanySearchImage} alt="" className="img-fluid radius-image"/>                    </div>
                    <div className="imginfo__box">
                        <h6 className="imginfo__title">Get a Price Quote Today!</h6>
                        <p>Nemo enim ipsam oluptatem quia oluptas<br/> sit aspernatur aut odit aut fugit. </p>
                        <a href="tel:http://1(800)7654321"><span className="fa fa-phone mr-2"></span> 1-800-654-3210</a>                    </div>
                </div>
                <div className="col-xl-5 col-lg-6 offset-xl-1 mt-lg-0 mt-5 pt-lg-0 pt-5">
                    <h3 className="title-style">Company Search - Get Instant insights on various companies with detailed business description and more</h3>
                    <p className="mt-lg-4 mt-3 mb-sm-5 mb-4">Get the most accurate B2B Database with verified company profiles and get most relevant insights on your targeted industries and companies.</p>
                    <div className="two-grids mt-md-0 mt-md-5 mt-4">
                        <div className="grids_info">
                            <i className="fas fa-search primary-clr-bg"></i>
                            <div className="detail">
                                <h4>Find</h4>
                                <p>Find relevant companies most suited for your potential business transactions.</p>
                            </div>
                        </div>
                        <div className="grids_info mt-5">
                            <i className="fas fa-bullseye green-clr-bg"></i>
                            <div className="detail">
                                <h4>Track</h4>
                                <p>Track companies` key parameters for quicker and higher revenue conversions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="w3l-ab-section py-5">
        <div className="container py-md-5 py-4">
            <div className="row py-lg-4">
                <div className="col-lg-6 section-width align-self">
                    <h3 className="title-style pr-xl-5">Executive Search - Find targeted contacts and convert them to potential customers</h3>
                    <p className="mt-lg-4 mt-3 pb-3">- Access most comprehensive and accurate executive data with their business emails and direct dials.</p>
                    <p className="mt-lg-4 mt-3 pb-3">- Get Actionable insights on executive profiles with work experience, education, social media links with instant alerts and Intent signals.</p>
                    <a href="services.html" className="btn btn-style mt-4">Our Services</a>                </div>
                <div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border">
                        <img src={ProspectSearchImage} className="img-fluid video-popup-image" alt="video-popup"/>

                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
    }
    export default Services;