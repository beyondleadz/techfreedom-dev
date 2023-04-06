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
                <div className="col-lg-3 col-md-6">
                    <div className="about-single p-3">
                        <div className="about-icon mb-4">
                            <i className="fas fa-business-time primary-clr-bg"></i>                        </div>
                        <div className="about-content">
                            <h5 className="mb-2"><a href="about.html">Sales Professionals</a></h5>
                            <p>Get Access to accurate B2B data on potential customers, including their contact information with direct dials and close deals more effectively.</p>                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-md-0 mt-3">
                    <div className="about-single p-3">
                        <div className="about-icon mb-4">
							<i className="fas fa-bullhorn green-clr-bg"></i>                        </div>
                        <div className="about-content">
                            <h5 className="mb-2"><a href="about.html">Marketing</a></h5>
                            <p>Discover Prospective Customers, Enhance customer Engagement, Efficiently Execute Campaigns and Interact with Your Intended Audience - all through B2B Marketing data.</p>                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-lg-0 mt-2">
                    <div className="about-single p-3">
                        <div className="about-icon mb-4">
							<i className="fas fa-user yellow-clr-bg"></i>                        
                        </div>
                         <div className="about-content">
                            <h5 className="mb-2"><a href="about.html">Recruitment</a></h5>
                            <p>Profile information on businesses, their size, location, Industry and executive functions that empowers recruitment teams to target companies and candidates.</p>                        
                         </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-md-0 mt-3">
                    <div className="about-single p-3">
                        <div className="about-icon mb-4">
							<i className="fas fa-search blue-clr-bg"></i>                        </div>
                        <div className="about-content">
                            <h5 className="mb-2"><a href="about.html">Research</a></h5>
                            <p>Access to Comprehensive business information that can be used to make informed business decisions. Gain insights into industry trends, company information and market segmentation.</p>                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="about-section py-5" style={{"backgroundColor":"#D3E4FE"}}>
    <div className="container py-lg-5 py-4">
        <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4 pb-xl-4" style={{"maxWidth":600}}>
            <h3 className="title-style mb-2">Reach the Right Decision Makers Hassle Free</h3>
            <p>Three Simple steps for quick conversion</p>
        </div>
        <div className="row justify-content-center text-center">
            
                <div className="about-single p-3">
                    <div className="about-content">
                    </div>
                    <div><img title="Best Data Provider Company in Noida, Delhi NCR, India" src={Prospect} className="img-responsive" alt="Data Provider in India"/></div>
                </div>

     
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-2">
                         <div className="about-content">
                            <h5 className="mb-2"><a href="#">Prospects</a></h5>
                            <p>Identify targeted potentials and simply reach out in no time.</p>                        
                         </div>
                    </div>
<div className="col-lg-4 col-md-6 mt-lg-0 mt-2">
                         <div className="about-content">
                            <h5 className="mb-2"><a href="#">Convert</a></h5>
                            <p>Automatically convert high value prospects to your potential leads.</p>                        
                         </div>
                    </div>
<div className="col-lg-4 col-md-6 mt-lg-0 mt-2">
                         <div className="about-content">
                            <h5 className="mb-2"><a href="#">Close</a></h5>
                            <p>Create revenue opportunities and close higher sales revenue.</p>                        
                         </div>
                    </div>

          
           
        </div>
    </div>
</section>
    </>
    )
    }
   export default AboutSection;