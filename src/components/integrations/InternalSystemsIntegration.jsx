import React,{useState} from "react";
import ExecutiveSearchConnect from '../../assets/images/executive-search-connect-icon.jpg'
import ProspectSearchImage from "../../assets/images/prospect-search.jpg"

const InternalSystemsIntegration = () => {
    return(
<section className="w3l-ab-section py-5">
        <div className="container py-md-5 py-4">
            <div className="row py-lg-4">
                <div className="col-lg-6 section-width align-self">
				<img src={ExecutiveSearchConnect} alt="" title=""/>
                    <h3 className="title-style pr-xl-5">Connect with Decision-Makers</h3>
	<p className="mt-lg-4 mt-3 pb-3"><i className="fa fa-check" aria-hidden="true"></i> Get verified contact data to connect with the right decision‑makers.</p>
	<p className="mt-lg-4 mt-3 pb-3"><i className="fa fa-check" aria-hidden="true"></i> Add contacts to your Outreach sequences so you can build pipeline faster.</p>
	<p className="mt-lg-4 mt-3 pb-3"><i className="fa fa-check" aria-hidden="true"></i> Personalize your communication with pre-built email templates tailored just for you.</p>
				 </div>
                <div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border">
                        <img src={ProspectSearchImage} className="img-fluid video-popup-image" alt="video-popup"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}
export default InternalSystemsIntegration;