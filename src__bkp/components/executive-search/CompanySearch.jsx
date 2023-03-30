import React,{useState} from "react";
import CompnySearchImage from '../../assets/images/company-search2.jpg'
import CompnySearchIconImage from '../../assets/images/executive-search-company-icon.jpg'

const CompanySearch=()=>{
    return <>
    (<section className="about-section py-5">
        <div className="container py-lg-5 py-4">
            <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4 pb-xl-4" style={{"maxWidth":600}}>
                <h3 className="title-style mb-2">Find Right Contacts/Company Data with Personalized Searches</h3>
                <p>Beyond Leadz makes it easy to find new prospects and connect with key decision-makers.</p>
				<p>Uncover new accounts, track fast-growing companies, and reach out at the right time so you never miss an opportunity.</p>
				<p>Conduct granular searches based on location, industry, funding and more. Try it out with these advanced searches created by prospectors like you and make them your own.</p>
            </div>
        </div>
    </section>
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
		)
    </>
}
export default CompanySearch;