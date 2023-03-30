import React,{useState} from "react";
import LeadsImage from '../../assets/images/leads.jpg'
const Leads = () => {
    return (
        <section className="w3l-ab-section-left py-5">
        <div className="container py-md-5 py-4">
            <div className="row py-lg-4">
			<div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border">
                        <img src={LeadsImage} className="img-fluid video-popup-image" alt="video-popup"/>                    </div>
              </div>
                <div className="col-lg-6 section-width align-self">
                    <h3 className="title-style-video-left pr-xl-5">Leads - Data Driven Lead Generation & Engagement</h3>
                    <p className="mt-lg-4 mt-3 pbl-3"><strong>“Manage your lead velocity with ease!”</strong></p>
                    <p className="mt-lg-4 mt-3 pbl-3">- Drive higher lead conversions by using insights from BeyondLeadz accurate B2B data to identify and target potential customers.</p>
                    <a href="services.html" className="btn btn-style mt-4" style={{"marginLeft":"3rem"}}>Our Services</a>                </div>
                
            </div>
        </div>
    </section>
    )
}
export default Leads;