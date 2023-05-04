import React,{useState} from "react";
import ProspectSearchIconImage from "../../assets/images/executive-search-propect-icon.jpg"
import ProspectSearchImage from "../../assets/images/prospect-search.jpg"


const Prospects=()=>{
    return (
    <>
<section className="w3l-ab-section py-5">
        <div className="container py-md-5 py-4">
            <div className="row py-lg-4">
                <div className="col-lg-6 section-width align-self">
				<img src={ProspectSearchIconImage} alt="" title=""/>
                    <h3 className="title-style pr-xl-5">Identify the Right Prospects</h3>
                    <p className="mt-lg-4 mt-3 pb-3"><i className="fa fa-check" aria-hidden="true"></i> Find qualified prospects in your territory with advanced search.</p>
					<p className="mt-lg-4 mt-3 pb-3"><i className="fa fa-check" aria-hidden="true"></i> Get key signals so you know when accounts are likely to buy.</p>
					<p className="mt-lg-4 mt-3 pb-3"><i className="fa fa-check" aria-hidden="true"></i> See automatic recommendations that fit your ideal customer profile.</p>
                   
				 </div>
                <div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border">
                        <img src={ProspectSearchImage} className="img-fluid video-popup-image" alt="video-popup"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
    }
    export default Prospects;