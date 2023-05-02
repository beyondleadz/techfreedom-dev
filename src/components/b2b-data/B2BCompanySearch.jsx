import React,{useState} from "react";
import B2BCompanySearchImage from '../../assets/images/crm-integration.jpg'
// import CompnySearchIconImage from '../../assets/images/executive-search-company-icon.jpg'

const B2BCompanySearch=()=>{
    return <> 
    
         
        <div className="container">
		<div className="privacy-security-term">
		<h3 align="center"><strong>Beyond Leadz B2B Data</strong></h3><br/>
{/* <h5>B2B Business Profiles</h5> */}
<p><strong>BeyondLeadz</strong> B2B data provides  information about businesses and their decision-makers, including their contact details, company size, industry, and revenue. This data  helps companies looking to identify and engage with potential customers that are most likely to convert into paying customers. Some of the key features include company search, executive search, corporate email ids, and direct dials.
</p>
</div>
    
	<section className="w3l-ab-section-left py-5">
        <div className="container py-md-5 py-4">
            <div className="row py-lg-4">
			<div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border">
                        <img src={B2BCompanySearchImage} className="img-fluid video-popup-image" alt="video-popup"/>                    </div>
              </div>
                <div className="col-lg-6 section-width align-self">
				{/* <img src={CompnySearchIconImage} style={{"paddingLeft":"3rem"}}/> */}
                    <h3 className="title-style-video-left pr-xl-5">Company Search:</h3>
					 <p className="mt-lg-4 mt-3 pbl-3"> Company Search provides information about companies, including their size, industry, revenue, location, business description and other key metrics. The data is used by companies to identify potential customers that fit their target market and to tailor their sales and marketing efforts accordingly. Company search data can also help businesses to identify potential partners, suppliers, or other organizations that may be relevant to their business.</p>
                
				</div>
                
            </div>
        </div>
    </section>
	</div>	
   
    
    </>
}
export default B2BCompanySearch;