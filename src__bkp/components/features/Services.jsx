import React,{useState} from "react";
import FeatureSearchImage from "../../assets/images/features-search-icon.png";
import ProspectSearchImage from "../../assets/images/prospect-search.jpg";
import leadsImage from "../../assets/images/leads.jpg";

import FeatureOrgImage from "../../assets/images/features-org-icon.png";

import FeaturesImageIntelligence from '../../assets/images/features-social-intelligenc-icon.png';
import FeaturesRadiusImage from  '../../assets/images/features-radius-icon.png';
				

const Services=()=>{
    return (
    <>
        <section className="w3l-services py-5" id="services">
        <div className="container py-md-5 py-4">
            <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4 pb-xl-4" style={{"maxWidht":600}}>
                <h3 className="title-style mb-2">Beyond Leadz helps you gain unparalleled access to structured B2B information with</h3>
            </div>
        </div>
    </section>
    <section className="w3l-ab-section py-5">
        <div className="container py-md-5 py-4">
            <div className="row-features py-lg-4">
                <div className="col-lg-6 section-width align-self">
				<img src={FeatureSearchImage} alt="" title=""/>
                    <h3 className="title-style pr-xl-5">Smart Search</h3>
                    <p className="mt-lg-4 mt-3 pb-3">Type skywords and get instant rests for drect prospecting</p>
                    </div>
                <div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border1">
                        <img src={ProspectSearchImage} className="img-fluid video-popup-image" alt="video-popup"/>
	                </div>
           	   </div>
        </div>
		</div>
    </section>
    <section className="w3l-ab-section-left py-5">
        <div className="container py-md-5 py-4">
            <div className="row-features py-lg-4">
			<div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border1">
                        <img src={leadsImage} className="img-fluid video-popup-image" alt="video-popup"/>                    </div>
              </div>
                <div className="col-lg-6 section-width align-self">
			<img src={FeatureOrgImage} style={{"paddingLeft":"3rem"}} title="" alt=""/>
                    <h3 className="title-style-video-left pr-xl-5">Org. Chart</h3>
                    <p className="mt-lg-4 mt-3 pbl-3">Get easy access to companie organizational chart to narrow down your search Radius</p>
</div>
                
            </div>
        </div>
    </section>
    <section className="w3l-ab-section py-5">
        <div className="container py-md-5 py-4">
            <div className="row-features2 py-lg-4">
                <div className="col-lg-6 section-width align-self">
               <img src={FeaturesRadiusImage} className="img-fluid video-popup-image" alt="video-popup"/>
                    <h3 className="title-style pr-xl-5">Radius Search</h3>
                    <p className="mt-lg-4 mt-3 pb-3">Search can navigate and connect with the prospective clients and get access tp most 
comprehensive database through our location based search</p>
                    </div>
                <div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border1">
                   
                        <img src={ProspectSearchImage} className="img-fluid video-popup-image" alt="video-popup"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <section className="w3l-ab-section-left py-5">
        <div className="container py-md-5 py-4">
            <div className="row-features3 py-lg-4">
			<div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border1">
                        <img src={leadsImage} className="img-fluid video-popup-image" alt="video-popup"/>                    </div>
              </div>
                <div className="col-lg-6 section-width align-self">
             
			<img src={FeaturesImageIntelligence} style={{"paddingLeft":"3rem"}} title="" alt=""/>
                    <h3 className="title-style-video-left pr-xl-5">Social Intelligence</h3>
                    <p className="mt-lg-4 mt-3 pbl-3">Get easy access to companie organizational chart to narrow down your search Social Intelligence</p>
                    </div>
                
            </div>
        </div>
    </section>   
   
    </>
    )
    }
    export default Services;