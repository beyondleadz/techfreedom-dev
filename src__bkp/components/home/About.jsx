import React,{useState} from "react";
import Prospect from '../../assets/images/prospect.jpg'

const AboutSection=()=>{
    return(
    <>
    <section className="about-section ">
        <div className="container py-lg-5 ">
            <div className="title-heading-w3 mx-auto text-center mb-sm-5  pb-xl-4" style={{"maxWidth":600}}>
                <h3 className="title-style mb-2">We Transform The Data Into Actionable Intelligence!</h3>
                <p>See how we can help you.</p>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-lg-4 col-md-6">
                    <div className="about-single p-3">
                        <div className="about-icon mb-4">
                            <i className="fas fa-business-time primary-clr-bg"></i>                        </div>
                        <div className="about-content">
                            <h5 className="mb-2"><a href="about.html">Sales Professionals</a></h5>
                            <p>Get access to accurate and up-to-date contact information and lead intelligence to keep your sales pipeline filled with quality leads and shorten the sales cycle.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
                    <div className="about-single p-3">
                        <div className="about-icon mb-4">
							<i className="fas fa-bullhorn green-clr-bg"></i>                        </div>
                        <div className="about-content">
                            <h5 className="mb-2"><a href="about.html">Marketing</a></h5>
                            <p>Drive increased traction and improve your ABM efforts with easy to create and schedule campaigns that best suit your message.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-2">
                    <div className="about-single p-3">
                        <div className="about-icon mb-4">
							<i className="fas fa-search blue-clr-bg"></i>                        </div>
                        <div className="about-content">
                            <h5 className="mb-2"><a href="about.html">Research</a></h5>
                            <p>Be more effective and drive profitable growth with the latest industry trends and action-driven insights.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="about-section py-5" style={{"backgroundColor":"#D3E4FE"}}>
    <div className="container py-lg-5 py-4">
        <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4 pb-xl-4" style={{"maxWidth":600}}>
            <h3 className="title-style mb-2">Reach the right decision makers Hassle-Free</h3>
            <p>Grow your sales with all-in-one prospecting solutions powered by the leader in private-company data.</p>
        </div>
        <div className="row justify-content-center text-center">
            
                <div className="about-single p-3">
                    <div className="about-content">
                    </div>
                    <div><img title="Best Data Provider Company in Noida, Delhi NCR, India" src={Prospect} className="img-responsive" alt="Data Provider in India"/></div>
                </div>
          
           
        </div>
    </div>
</section>
    </>
    )
    }
   export default AboutSection;