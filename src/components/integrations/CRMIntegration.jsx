import React,{useState} from "react";
import CompnySearchImage from '../../assets/images/company-search2.jpg'
import CompnySearchIconImage from '../../assets/images/executive-search-company-icon.jpg'

const CRMIntegration=()=>{
    return <> 
    (
         
        <div className="container">
		<div className="privacy-security-term">
		<h3 align="center"><strong>Data We Provide</strong></h3><br/>
<h5>B2B Business Profiles</h5>
<p>At BeyondLeadz, we offer B2B business profiles to our clients, which provide comprehensive information on businesses in various industries. These profiles include key details such as company size, location, revenue, contact information, and more.
</p>
</div>
    
	<section className="w3l-ab-section-left py-5">
        <div className="container py-md-5 py-4">
            <div className="row py-lg-4">
			<div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border">
                        <img src={CompnySearchImage} className="img-fluid video-popup-image" alt="video-popup"/>                    </div>
              </div>
                <div className="col-lg-6 section-width align-self">
				<img src={CompnySearchIconImage} style={{"paddingLeft":"3rem"}}/>
                    <h3 className="title-style-video-left pr-xl-5">Company Search</h3>
					 <p className="mt-lg-4 mt-3 pbl-3"><i className="fa fa-check" aria-hidden="true"></i> Find companies that match your ideal customer profile.</p>
					 <p className="mt-lg-4 mt-3 pbl-3"><i className="fa fa-check" aria-hidden="true"></i> Get up to 1,000 companies and enriched data in one search.</p>
					 <p className="mt-lg-4 mt-3 pbl-3"><i className="fa fa-check" aria-hidden="true"></i> Target high-priority accounts and exceed your goals.</p>
                   
				</div>
                
            </div>
        </div>
    </section>
	</div>	
   
    )
    </>
}
export default CRMIntegration;