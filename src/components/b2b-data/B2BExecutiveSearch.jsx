import React,{useState} from "react";
import ExecutiveSearchConnect from '../../assets/images/executive-search-connect-icon.jpg'
import B2BExecutiveSearchImage from "../../assets/images/b2b-executive-search.jpg"

const B2BExecutiveSearch = () => {
    return(
<section className="w3l-ab-section py-5">
        <div className="container py-md-5 py-4">
            <div className="row py-lg-4">
                <div className="col-lg-6 section-width align-self">
				{/* <img src={ExecutiveSearchConnect} alt="" title=""/> */}
                    <h3 className="title-style pr-xl-5">Executive Search:</h3>
                    <p className="mt-lg-4 mt-3 pb-3"> Executive Search provides information about key decision-makers within a company along-with their Job title, Bio, Responsibilities, and contact information. The data is used by companies to target their sales and marketing efforts at the right people within an organization, by identifying decision-makers that are most likely to be interested in their products or services. Executive search data can also help businesses to tailor their messaging and communication strategies to specific individuals, by understanding their job responsibilities and key responsibility areas.</p>
				 </div>
                <div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border">
                        <img src={B2BExecutiveSearchImage} className="img-fluid video-popup-image" alt="video-popup"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}
export default B2BExecutiveSearch;