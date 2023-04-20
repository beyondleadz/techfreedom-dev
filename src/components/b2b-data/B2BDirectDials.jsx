import React,{useState} from "react";
// import B2BDirectDialsImage from "../../assets/images/executive-search-propect-icon.jpg"
import B2BDirectDialsImage from "../../assets/images/prospect-search.jpg"


const B2BDirectDials=()=>{
    return (
    <>
<section className="w3l-ab-section py-5">
        <div className="container py-md-5 py-4">
            <div className="row py-lg-4">
                <div className="col-lg-6 section-width align-self">
				{/* <img src={B2BDirectDialsImage} alt="" title=""/> */}
                    <h3 className="title-style pr-xl-5">Identify the Right Prospects</h3>
                    <p className="mt-lg-4 mt-3 pb-3"> BeyondLedz offers <strong>‘Direct Dials’</strong> that are associated with a specific person or job function within a company. Direct Dials are  used by companies to contact potential customers directly, by bypassing gatekeepers or other intermediaries within an organization. Direct dials is a valuable feature  for businesses looking to reach out to decision-makers or other key executive functions by having a direct line of communication.
</p>
<p className="mt-lg-4 mt-3 pb-3">Direct Dials is a  critical resource for businesses looking to identify and engage with potential customers that are most likely to convert into paying customers. Company search, executive search, corporate email ids, and direct dials are just a few of the key features of BeyondLeadz that  businesses can use to target their sales and marketing efforts more effectively.
</p>
                   
				 </div>
                <div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border">
                        <img src={B2BDirectDialsImage} className="img-fluid video-popup-image" alt="video-popup"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
    }
    export default B2BDirectDials;