import React,{useState} from "react";
import DataEnrichmentImage from '../../assets/images/capabilities-data-enrichment-icon.jpg'
import ExtensionImage from '../../assets/images/capabilities-extension-icon.jpg'
import IntigrationsImage from '../../assets/images/capabilities-intigrations-icon.jpg'
import LeadsImage from '../../assets/images/capabilities-leads-icon.jpg'
import ListBuildingImage from '../../assets/images/capabilities-list-building-icon.jpg'
import HrStartupCompanyImage from '../../assets/images/functions-hr-icon.jpg'
import MarketingImage from '../../assets/images/functions-marketing-icon.jpg'
import SalesImage from '../../assets/images/functions-sales-icon.jpg'

import HotelChainImage from '../../assets/images/Industries-hotel-icon.jpg'
import FinancialServicesCompanyImage from '../../assets/images/Industries-financial-icon.jpg'

import InsuranceCompanyImage from '../../assets/images/client-insurance-company-icon.jpg'
import TechCompanyImage from '../../assets/images/Industries-technology-icon.jpg'
import SoftwareCompanyImage from '../../assets/images/client-software-company-icon.jpg'


const CaseStudy = () => {
    return (
<>
{/* <div className="privacy-security-term">
<p align="center"><strong>At BeyondLeadz we take pride in the success of our clients. We work closely with each of our clients to understand their unique needs <br/>and offer the best possible solutions that help them achieve their Sales & Marketing goals.</strong></p>
</div> */}

{/* <h3 className="title-style-clients mb-2">Case Studies</h3> */}

		        <section className="home-services py-4" id="services">
        <div className="container py-md-5 py-4">
            {/* <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4 pb-xl-4" style={{"maxWidth":800}}>

                <h3 className="title-style mb-2">Capabilities</h3>
                <p>Our commitment to delivering high-quality data and innovative lead management solutions has resulted in many happy clients over the years. Here are some examples of how we have helped businesses grow and succeed:</p> 
            </div>*/}

            <div className="row">
                {/* <div className="col-lg-4 col-md-6">
                    <div className="box-wrapclient">
                        <div className="icon">
                        <img src={LeadsImage} height="65" width="65" alt="" className="img-fluid radius-career-icon-image"/>
                            </div>
                            <h4><a href="#url">Leads</a></h4>
                        <p>A<strong> leading hotel chain</strong>  was struggling to identify new leads for their properties. We provided them with a comprehensive database of potential customers, allowing them to increase their outreach and generate more leads.</p>
                        </div>
                </div> */}

                <div className="col-lg-4 col-md-6">
                    <div className="box-wrapclient">
                        <div className="icon">
                        <img src={ListBuildingImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
                            {/* <i className="fas fa-user-tie green-clr-bg"></i>                         */}
                            </div>
                        
                        <h4><a href="#url">List Building</a></h4>
                        <p>BeyondLeadz List building features can help you effectively target and engage your desired audience. The feature helps you create a targeted list by applying  filters and gathering relevant contact information which can easily be segmented based on Company type, Executive Functions and Levels
                        </p>
                        </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div className="box-wrapclient">
                        <div className="icon">
                        <img src={DataEnrichmentImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
                            {/* <i className="fas fa-university primary-clr-bg"></i>                         */}
                            </div>
                        
                        <h4><a href="#url">Data Enrichment</a></h4>
                        <p>You can enrich your Data with BeyondLeadz dynamic enrichment feature through data match and append. It's a powerful way to enhance the quality and value of  your existing datasets. 
                            </p>

                            <p></p>
                        </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div className="box-wrapclient">
                        <div className="icon">
                        <img src={ExtensionImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
                            {/* <i className="fas fa-user-tie green-clr-bg"></i>                         */}
                            </div>
                        
                        <h4><a href="#url">Linkedin Extension</a></h4>
                        <p>BeyondLeadz provides a powerful solution for data  generation and provides a convenient way to build targeted prospect lists and fuel your  lead generation efforts.
                        </p>
                        </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="box-wrapclient">
                        <div className="icon">
                        <img src={IntigrationsImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
                            {/* <i className="fas fa-city primary-clr-bg"></i>                         */}
                            </div>
                        
                        <h4><a href="#url">Integrations</a></h4>
                        <p>BeyongLeadz offers seamless integrations with various applications and platforms to streamline your lead management process. These integrations include popular CRM/ ERP systems enabling smooth data syncing and eliminating manual data entry. Additionally, integrations with Instagram, Facebook, Google allows automated lead nurturing and personalized communication. 
                            </p>
                        </div>
                </div>
                

                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="box-wrapclient">
                        <div className="icon">
                        <img src={SalesImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
                            {/* <i className="fas fa-building green-clr-bg"></i>                         */}
                            </div>
                        <h4><a href="#url">Sales Professionals</a></h4>
                <p>Sales professionals can leverage BeyondLeadz data services to generate more leads by accessing targeted contact information of potential customers in their desired industry or market segment. With BeyondLeadz data sales professionals can identify prospects,buying behaviors, enabling them to personalize their outreach and increase the chances of conversion. 
                    </p>
                        </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="box-wrapclient">
                        <div className="icon">
                        <img src={MarketingImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
                            {/* <i className="fas fa-university blue-clr-bg"></i>                         */}
                            </div>
                        <h4><a href="#url">Marketing Professionals</a></h4>
                        <p>Marketing professionals can harness BeyondLeadz data to generate more leads by leveraging detailed customer data and behavior insights.BeyondLedz data  enable marketers to plan their marketing strategies  by identifying the most effective channels, messages, and offers, leading to increased lead generation and conversion and improved ROI.
                        </p>
                        </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="box-wrapclient">
                        <div className="icon">
                        <img src={HrStartupCompanyImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
                            {/* <i className="fas fa-university blue-clr-bg"></i>                         */}
                            </div>
                        <h4><a href="#url">HR & Recruitment Teams</a></h4>
                        <p>HR and Recruitment teams can utilize BeyondLeadz Data  to streamline the hiring process by accessing relevant candidate profiles. By leveraging our data , HR professionals can search and filter through a vast database of candidates based on specific criteria such as skills, experience, and qualifications, saving time and effort in sourcing. 
                        </p>
                        </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="box-wrapclient">
                        <div className="icon">
                        <img src={HotelChainImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
                            {/* <i className="fas fa-university blue-clr-bg"></i>                         */}
                            </div>
                        
                        <h4><a href="#url">Hospitality and Travel</a></h4>
                        <p>BeyondLeadz’s  integrated data and Lead management offers significant benefits to the hospitality and travel industry. Our lead management systems allows efficient tracking and nurturing of potential customers, leading to increased bookings and conversions. This enables quicker data-driven decision-making, allowing businesses to optimize their strategies, improve ROI, and stay ahead of the competition in a dynamic industry.
                        </p>
                        </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="box-wrapclient">
                        <div className="icon">
                        <img src={TechCompanyImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
                            {/* <i className="fas fa-university blue-clr-bg"></i>                         */}
                            </div>
                        
                        <h4><a href="#url">Technology</a></h4>
                        <p>BeyondLeadz Data and Lead management brings notable benefits to the technology industry. Firstly, our  well-implemented lead management system helps technology companies effectively capture, track, and engage with potential customers, leading to higher conversion rates and sales. Secondly, our data  helps in mapping  target audiences, building brand awareness, driving customer acquisition and business growth.
                        </p>
                        </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="box-wrapclient">
                        <div className="icon">
                        <img src={FinancialServicesCompanyImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
                            {/* <i className="fas fa-university blue-clr-bg"></i>                         */}
                            </div>
                        
                        <h4><a href="#url">Financial Services</a></h4>
                        <p>BeyondLeadz integrated Data, lead management bring substantial benefits to the finance industry. Firstly, data services provides access to comprehensive companies and executive details alongwith financial insights, empowering financial institutions to generate leads and make informed decisions. Secondly, effective lead management systems enable financial companies to streamline their sales processes, nurture leads, and convert prospects into loyal customers, driving revenue growth.
                        </p>
                        </div>
                </div>

                
                

            </div>
        </div>
    </section>
		{/* <div className="privacy-security-term">
    <p>These are just a few examples of how we have helped our clients achieve their goals and grow their businesses. We are committed to delivering the best possible outcomes for our clients and are always happy to see them succeed.</p>
        </div> */}<br/>    

    </>
    )
}

export default CaseStudy;