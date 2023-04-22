import React,{useState} from "react";
import ExecutiveSearchConnect from '../../assets/images/executive-search-connect-icon.jpg'
import InternalSystemsIntegrationImage from "../../assets/images/internal-systems-integration.jpg"

const InternalSystemsIntegration = () => {
    return(
<section className="w3l-ab-section py-5">
        <div className="container py-md-5 py-4">
            <div className="row py-lg-4">
                <div className="col-lg-6 section-width align-self">
				{/* <img src={ExecutiveSearchConnect} alt="" title=""/> */}
                    <h3 className="title-style pr-xl-5">Internal Systems Integration:</h3>
                    <p className="mt-lg-4 mt-3 pb-3">Integrating <strong>BeyondLeadz</strong> with internal systems such as marketing automation or sales enablement platforms can help businesses streamline their sales and marketing processes. By using <strong>BeyondLeadz</strong> B2B data to segment their database and target their outreach efforts, businesses can improve their lead generation efforts and ensure that the right messages are reaching the right people. Integrating BeyondLeadz B2B data with marketing automation platforms can also help businesses track and analyze their marketing campaigns, enabling them to refine their strategies and improve their ROI.</p>
				 </div>
                <div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border">
                        <img src={InternalSystemsIntegrationImage} className="img-fluid video-popup-image" alt="video-popup"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}
export default InternalSystemsIntegration;