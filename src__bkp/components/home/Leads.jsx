import React,{useState} from "react";
import LeadsImage from '../../assets/images/leads.jpg'
const Leads = () => {
    return (
        <section className="w3l-ab-section-left py-5">
        <div className="container py-md-5 py-4">
            <div className="row py-lg-4">
			<div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border">
                        <img src={LeadsImage} className="img-fluid video-popup-image" alt="video-popup"/>                    </div>
              </div>
                <div className="col-lg-6 section-width align-self">
                    <h3 className="title-style-video-left pr-xl-5">Leads - We help businesses launch, grow and succeed</h3>
                    <p className="mt-lg-4 mt-3 pbl-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, corrupti odit? At iure facere, porro repellat officia quas, dolores magnam assumenda soluta odit harum voluptate inventore ipsa maiores fugiat accusamus eos nulla. Iure voluptatibus explicabo officia.</p>
                    <a href="services.html" className="btn btn-style mt-4" style={{"marginLeft":"3rem"}}>Our Services</a>                </div>
                
            </div>
        </div>
    </section>
    )
}
export default Leads;