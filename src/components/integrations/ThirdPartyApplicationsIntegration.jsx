import React,{useState} from "react";
import ExecutiveSearchIconImage from "../../assets/images/executive-search-leads-icon.jpg"
import ThirdPartyApplicationsIntegrationImage from "../../assets/images/third-party-application-integration.jpg"

const ThirdPartyApplicationsIntegration = () => {
    return (
<section className="w3l-ab-section-left py-5">
        <div className="container py-md-5 py-4">
            <div className="row py-lg-4">
			<div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border">
                        <img src={ThirdPartyApplicationsIntegrationImage} className="img-fluid video-popup-image" alt="video-popup"/>                    </div>
              </div>
                <div className="col-lg-6 section-width align-self">
				{/* <img src={ExecutiveSearchIconImage} style={{"paddingLeft":"3rem"}} alt="" title=""/> */}
                    <h3 className="title-style-video-left pr-xl-5">Third-Party Applications Integration:</h3>
					 <p className="mt-lg-4 mt-3 pbl-3"> Integrating <strong>BeyondLeadz</strong> with third-party applications such as advertising platforms, social media tools, and data analytics software can help businesses expand their reach and gain valuable insights into their target audience. By leveraging <strong>BeyondLeadz</strong> B2B data to create custom audiences for advertising campaigns, businesses can improve their targeting and increase their conversion rates. Integrating <strong>BeyondLeadz</strong> B2B data with social media tools can also help businesses identify and engage with prospects on social media platforms, enabling them to build relationships and drive conversions. Finally, integrating <strong>BeyondLeadz</strong> B2B data can help businesses gain insights into their target audience, enabling them to make data-driven decisions and optimize their sales and marketing efforts.</p>
                    
				</div>
                
            </div>
        </div>
    </section>
  
    )
}

export default ThirdPartyApplicationsIntegration;