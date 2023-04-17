import React,{useState} from "react";
import HotelChainImage from '../../assets/images/client-hotel-chain-icon.jpg'
import FinancialServicesCompanyImage from '../../assets/images/client-financial-services-company-icon.jpg'
import HrStartupCompanyImage from '../../assets/images/client-hr-startup-company-icon.jpg'
import InsuranceCompanyImage from '../../assets/images/client-insurance-company-icon.jpg'
import TechCompanyImage from '../../assets/images/client-tech-company-icon.jpg'
import SoftwareCompanyImage from '../../assets/images/client-software-company-icon.jpg'


const CaseStudy = () => {
    return (
<>
<div className="privacy-security-term">
<p align="center"><strong>At BeyondLeadz we take pride in the success of our clients. We work closely with each of our clients to understand their unique needs <br/>and offer the best possible solutions that help them achieve their Sales & Marketing goals.</strong></p>
</div>

{/* <h3 className="title-style-clients mb-2">Case Studies</h3> */}

		        <section className="home-services py-4" id="services">
        <div className="container py-md-5 py-4">
            <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4 pb-xl-4" style={{"maxWidth":800}}>

                <h3 className="title-style mb-2">Case Studies</h3>
                <p>Our commitment to delivering high-quality data and innovative lead management solutions has resulted in many happy clients over the years. Here are some examples of how we have helped businesses grow and succeed:</p>

            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="box-wrapclient">
                        <div className="icon">
                        <img src={HotelChainImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
                            {/* <i className="fas fa-hotel blue-clr-bg"></i>                         */}
                            </div>
                        
                        <h4><a href="#url">Leading Hotel Chain</a></h4>
                        <p>A<strong> leading hotel chain</strong>  was struggling to identify new leads for their properties. We provided them with a comprehensive database of potential customers, allowing them to increase their outreach and generate more leads.</p>
                        {/* <a href="#read" className="read">Read more</a>                     */}
                        </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div className="box-wrapclient">
                        <div className="icon">
                        <img src={FinancialServicesCompanyImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
                            {/* <i className="fas fa-university primary-clr-bg"></i>                         */}
                            </div>
                        
                        <h4><a href="#url">Financial Services</a></h4>
                        <p>A <strong>financial services company</strong> was struggling to manage their growing list of leads and prioritize their sales efforts. We provided them with a customized lead management solution, allowing them to track and prioritize their leads more effectively and close more deals.</p>
                        {/* <a href="#read" className="read">Read more</a> */}
                        </div>

                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div className="box-wrapclient">
                        <div className="icon">
                        <img src={HrStartupCompanyImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
                            {/* <i className="fas fa-user-tie green-clr-bg"></i>                         */}
                            </div>
                        
                        <h4><a href="#url">HR Startup</a></h4>
                        <p>A <strong>HR startup</strong> was looking to find more leads  and needed a easy to use solution to help them identify and  managing their outreach. We provided them with a targeted list of  companies  and helped them manage their leads. <br/></p>
                        {/* <a href="#read" className="read">Read more</a>                     */}
                        </div>

                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="box-wrapclient">
                        <div className="icon">
                        <img src={TechCompanyImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
                            {/* <i className="fas fa-city primary-clr-bg"></i>                         */}
                            </div>
                        
                        <h4><a href="#url">Tech Company</a></h4>
                        <p>A mid size <strong>tech company</strong>  was looking to expand into new markets but didn't have the necessary data to make informed decisions. We provided them with detailed information on their target segment with market and competitive landscape, enabling them to identify new opportunities and make strategic business decisions.</p>
                        {/* <a href="#read" className="read">Read more</a>                     */}
                        </div>

                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="box-wrapclient">
                        <div className="icon">
                        <img src={SoftwareCompanyImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
                            {/* <i className="fas fa-building green-clr-bg"></i>                         */}
                            </div>
                        
                        <h4><a href="#url">Software Company</a></h4>
                <p>A <strong>software company</strong> was looking to expand their customer base and increase their revenue. They had been struggling to identify new leads and connect with potential customers. We provided them with our B2B data, which allowed them to identify and target new prospects. With our help, they were able to close deals with several new clients, resulting in a significant increase in their revenue</p>
                        {/* <a href="#read" className="read">Read more</a>                     */}
                        </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="box-wrapclient">
                        <div className="icon">
                        <img src={InsuranceCompanyImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
                            {/* <i className="fas fa-university blue-clr-bg"></i>                         */}
                            </div>
                        
                        <h4><a href="#url">Insurance Company</a></h4>
                        <p>An <strong>insurance company</strong> was looking to target specific industries and businesses with their marketing campaigns. They needed accurate data to help them identify potential customers and create targeted marketing campaigns. We provided them with our B2B data, which enabled them to identify and connect with the right prospects. With our help, they were able to increase their sales and expand their customer base.</p>
                        {/* <a href="#read" className="read">Read more</a>                     */}
                        </div>
                </div>
                

            </div>
        </div>
    </section>
		<div className="privacy-security-term">
    <p>These are just a few examples of how we have helped our clients achieve their goals and grow their businesses. We are committed to delivering the best possible outcomes for our clients and are always happy to see them succeed.</p>
        </div><br/>    

    </>
    )
}

export default CaseStudy;