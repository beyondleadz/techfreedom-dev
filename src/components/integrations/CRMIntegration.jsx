import React,{useState} from "react";
import CRMIntegrationImage from '../../assets/images/crm-integration.jpg'
// import CompnySearchIconImage from '../../assets/images/executive-search-company-icon.jpg'

const CRMIntegration=()=>{
    return <> 
    (
         
        <div className="container">
		<div className="privacy-security-term">
		<h3 align="center"><strong>Beyond Leadz Integrations</strong></h3><br/>
{/* <h5>B2B Business Profiles</h5> */}
<p><strong>BeyondLeadz</strong> provides information about businesses and their decision-makers, such as their contact details, company size, industry, and revenue. <strong>BeyondLedz</strong> is a valuable resource for businesses looking to target their sales and marketing efforts more effectively, by identifying and engaging with the right prospects at the right time. However, simply having access to B2B data is not enough - businesses also need to integrate this data with their CRM, internal systems, and third-party applications to fully realize its value.
</p>
</div>
    
	<section className="w3l-ab-section-left py-5">
        <div className="container py-md-5 py-4">
            <div className="row py-lg-4">
			<div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border">
                        <img src={CRMIntegrationImage} className="img-fluid video-popup-image" alt="video-popup"/>                    </div>
              </div>
                <div className="col-lg-6 section-width align-self">
				{/* <img src={CompnySearchIconImage} style={{"paddingLeft":"3rem"}}/> */}
                    <h3 className="title-style-video-left pr-xl-5">CRM Integration:</h3>
					 <p className="mt-lg-4 mt-3 pbl-3"> Integrating BeyondLeadz with a CRM system is essential for effective lead management. A CRM system helps businesses track and manage their interactions with prospects and customers, allowing them to identify opportunities for follow-up and conversion. By integrating BeyondLeadz with their CRM system, businesses can automatically enrich their lead and contact records with additional information such as company size, industry, and revenue, enabling them to segment their database and personalize their outreach efforts. This, in turn, can help businesses build stronger relationships with their prospects and customers, and increase their chances of closing deals.</p>
                
				</div>
                
            </div>
        </div>
    </section>
	</div>	
   
    )
    </>
}
export default CRMIntegration;