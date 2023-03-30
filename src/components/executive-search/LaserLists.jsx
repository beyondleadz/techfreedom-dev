import React,{useState} from "react";
import ExecutiveSearchIconImage from "../../assets/images/executive-search-leads-icon.jpg"
import ExecutiveLeadsImage from "../../assets/images/leads.jpg"

const LaserLists = () => {
    return (
<section className="w3l-ab-section-left py-5">
        <div className="container py-md-5 py-4">
            <div className="row py-lg-4">
			<div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border">
                        <img src={ExecutiveLeadsImage} className="img-fluid video-popup-image" alt="video-popup"/>                    </div>
              </div>
                <div className="col-lg-6 section-width align-self">
				<img src={ExecutiveSearchIconImage} style={{"paddingLeft":"3rem"}} alt="" title=""/>
                    <h3 className="title-style-video-left pr-xl-5">Laser-focused Lists</h3>
					 <p className="mt-lg-4 mt-3 pbl-3"><i className="fa fa-check" aria-hidden="true"></i> Convert all your searches into accurate and clean contact lists.</p>
					 <p className="mt-lg-4 mt-3 pbl-3"><i className="fa fa-check" aria-hidden="true"></i> Up your productivity and access lists directly on the dashboard.</p>
					 <p className="mt-lg-4 mt-3 pbl-3"><i className="fa fa-check" aria-hidden="true"></i> Export lists to your CRM or CSV in a click.</p>
                    
				</div>
                
            </div>
        </div>
    </section>
  
    )
}

export default LaserLists;