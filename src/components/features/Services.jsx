import React,{useState} from "react";
import ProspectSearchImage from "../../assets/images/prospect-search.jpg";
import leadsImage from "../../assets/images/leads.jpg";
import DirectDialImage from "../../assets/images/direct-dials-business-emails.jpg";

import FeatureOrgImage from "../../assets/images/features-org-icon.png";
import FeatureSearchImage from "../../assets/images/features-search-icon.png";
import FeaturesImageIntelligence from '../../assets/images/features-social-intelligenc-icon.png';
import FeaturesSalesTriggersImage from  '../../assets/images/features-sales-riggers-icon.png';
import FeatureDirectDialImage from "../../assets/images/features-direct-dial-icon.png";
import FeatureLeadsImage from "../../assets/images/features-leads-management-icon.png";
				

const Services=()=>{
    return (
    <>
        <section className="w3l-services py-5" id="services">
        <div className="container py-md-5 py-4">
            <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4 pb-xl-4" style={{"maxWidht":700}}>
                <h3 className="title-style mb-2" style={{marginTop:-50}}>Accurate | Comprehensive | Actionable</h3>
                <h5 style={{marginBottom:-50}}>Let your sales teams be more informed and accurate than ever with our comprehensive and actionable data for every sales professionals.</h5>
            </div>
        </div>
    </section>
    <section className="w3l-ab-section py-5">
        <div className="container py-md-5 py-4">
            <div className="row-features py-lg-4">
                <div className="col-lg-6 section-width align-self">
				<img src={FeatureSearchImage} alt="" title=""/>
                    <h3 className="title-style pr-xl-5">SmartSearch & Recommendation</h3>
                    <p className="mt-lg-4 mt-3 pb-3">Smart Search uses data analytics and AI to identify potential prospects who are most likely to become customers.</p>
                    <p className="mt-lg-4 mt-3 pb-3">Smart Search can identify key indicators that suggest a person or business is interested in your product or service.it can help you identify key prospects, provide quick contact access, and improve your overall understanding of your customers.</p>
                    <p className="mt-lg-4 mt-3 pb-3">In addition to identifying potential prospects, Smart Search can provide insights that help you improve your marketing and sales strategies, leading to even higher conversions and greater customer loyalty.</p>
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
                    <p className="mt-lg-4 mt-3 pbl-3">Actionable Org. Charts can help you identify the key decision makers within an organization. By understanding the reporting structure and hierarchy of a company, you can see who holds the most influential positions and who is responsible for making decisions within the desired functions and levels.</p>
</div>
                
            </div>
        </div>
    </section>
    <section className="w3l-ab-section py-5">
        <div className="container py-md-5 py-4">
            <div className="row-features2 py-lg-4">
                <div className="col-lg-6 section-width align-self">
               <img src={FeatureLeadsImage} className="img-fluid video-popup-image" alt="video-popup"/>
                    <h3 className="title-style pr-xl-5">Lead Management</h3>
                    <p className="mt-lg-4 mt-3 pb-3">Capture, nurture and manage leads at one place. Our “Leads” feature helps you identify potential prospects from the sales ready database and converts them into potential opportunities. Simply automate your outreach process and start capturing, nurturing and  tracking leads.</p>
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
             
			<img src={FeaturesSalesTriggersImage} style={{"paddingLeft":"3rem"}} title="" alt=""/>
                    <h3 className="title-style-video-left pr-xl-5">Sales Triggers</h3>
                    <p className="mt-lg-4 mt-3 pbl-3">Sales triggers are  signals provided by BeyondLeadz on changes that indicate a potential sales opportunity, such as a new product launch or a change in a prospect's organizational structure,new funding, or the adoption of new technology. By monitoring and responding to these triggers, sales professionals can increase their chances of success and proactively engage with prospects, tailor their messaging to meet their needs, and ultimately increase their chances of closing a sale.</p>
                    </div>
                
            </div>
        </div>
    </section>

    <section className="w3l-ab-section py-5">
        <div className="container py-md-5 py-4">
            <div className="row-features py-lg-4">
                <div className="col-lg-6 section-width align-self">
				<img src={FeaturesImageIntelligence} alt="" title=""/>
                    <h3 className="title-style pr-xl-5">Social Intelligence</h3>
                    <p className="mt-lg-4 mt-3 pb-3">Get actionable insights into your leads profile with additional details like Linkedin Profile link, Executive Bios, Work Experience etc.</p>
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
                        <img src={DirectDialImage} className="img-fluid video-popup-image" alt="video-popup"/>                    
                    </div>
            </div>
                <div className="col-lg-6 section-width align-self">
			        <img src={FeatureDirectDialImage} style={{"paddingLeft":"3rem"}} title="" alt=""/>
                    <h3 className="title-style-video-left pr-xl-5">Direct Dials and Business Emails</h3>
                    <p className="mt-lg-4 mt-3 pbl-3">Direct dials and business emails are critical components of B2B sales prospecting, as they provide a direct line of communication to potential customers. By leveraging accurate and up-to-date contact information offered by BeyondLeadz, sales professionals can increase the efficiency of their prospecting efforts, and ensure that their messaging is reaching the right individuals within a target organization.</p>
                </div>                
            </div>
        </div>
    </section>
   
    </>
    )
    }
    export default Services;