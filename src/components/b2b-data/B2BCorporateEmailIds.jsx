import React,{useState} from "react";
import ExecutiveSearchIconImage from "../../assets/images/executive-search-leads-icon.jpg"
import B2BCorporateEmailIdsImage from "../../assets/images/b2b-corporate-email-ids.jpg"

const B2BCorporateEmailIds = () => {
    return (
<section className="w3l-ab-section-left py-5">
        <div className="container py-md-5 py-4">
            <div className="row py-lg-4">
			<div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border">
                        <img src={B2BCorporateEmailIdsImage} className="img-fluid video-popup-image" alt="video-popup"/>                    </div>
              </div>
                <div className="col-lg-6 section-width align-self">
				{/* <img src={ExecutiveSearchIconImage} style={{"paddingLeft":"3rem"}} alt="" title=""/> */}
                    <h3 className="title-style-video-left pr-xl-5">Corporate Email Ids:</h3>
					 <p className="mt-lg-4 mt-3 pbl-3"> BeyondLeadz offers ‘Business Emails’  that are associated with a specific company or organization. These email addresses are typically used by decision-makers or other key personnel within a company, and help businesses looking to reach out to potential customers. Companies can target their email marketing efforts more effectively by tailoring their messaging and content to specific individuals and organizations.
</p>
                    
				</div>
                
            </div>
        </div>
    </section>
  
    )
}

export default B2BCorporateEmailIds;