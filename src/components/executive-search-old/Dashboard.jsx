import React,{useEffect,useState} from "react";
import DashboardSearchImage from '../../assets/images/executive-search-dashboard-icon.jpg'
import ExecutiveLeadsImage from "../../assets/images/leads.jpg"
import ExecutiveSearchImage from '../../assets/images/executive-search-company-name-icon.jpg'
import ExecutiveSearchImage1 from '../../assets/images/executive-search-company-location-icon.jpg'
import ExecutiveSearchImage2 from '../../assets/images/executive-search-industry-icon.jpg'
import ExecutiveSearchImage3 from '../../assets/images/executive-search-no-emp-icon.jpg'
import ExecutiveSearchImage4 from '../../assets/images/executive-search-revenue-icon.jpg'
import ExecutiveSearchImage5 from '../../assets/images/executive-search-contact-name-icon.jpg'

import ExecutiveSearchImage6 from '../../assets/images/executive-search-job-title-icon.jpg'
import ExecutiveSearchImage7 from '../../assets/images/executive-search-seniority-icon.jpg'

import ExecutiveSearchImage8 from '../../assets/images/executive-search-contact-phone-icon.jpg'
import ExecutiveSearchImage9 from '../../assets/images/executive-search-dept-icon.jpg'

					


const Dashboard = () => {  
   
    return(
        <>
        <section className="w3l-ab-section-left py-5">
        <div className="container py-md-5 py-4">
            <div className="row py-lg-4">
			<div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                    <div className="position-relative img-border">
                        <img src={ExecutiveLeadsImage} className="img-fluid video-popup-image" alt="video-popup"/>
                                            </div>
              </div>
                <div className="col-lg-6 section-width align-self">
				<img src={DashboardSearchImage} style={{"paddingLeft":"3rem"}} alt="" title=""/>
                    <h3 className="title-style-video-left pr-xl-5">Dashboard Analytics</h3>
					 <p className="mt-lg-4 mt-3 pbl-3"><i className="fa fa-check" aria-hidden="true"></i> Get immediate visibility into your team’s prospecting activity.</p>
					 <p className="mt-lg-4 mt-3 pbl-3"><i className="fa fa-check" aria-hidden="true"></i> Understand better how credits are being used.</p>
					 <p className="mt-lg-4 mt-3 pbl-3"><i className="fa fa-check" aria-hidden="true"></i> Save a ton of time on every new search.</p>
				</div>
                
            </div>
        </div>
    </section>
    <br/><br/><br/><br/>
    <section id="why">
		<div className="jarallax w3-agileits-choose-grid">
			<div className="container">
				<div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4 pb-xl-4" style={{"maxWidth":600}}>
                <h3 className="title-style mb-2">Enrich Your Data</h3>
				</div>
				<div className="row agile-choose-grids">
					<div className="col-sm-2 agile-choose-grid" position-relative>
						<div className="choose-icon">
						<img src={ExecutiveSearchImage} height="60" width="60" alt=""/>
						</div>
						<div className="choose-info">
							<p>Company name</p>
						</div>
					</div>
					<div className="col-sm-2 agile-choose-grid">
						<div className="choose-icon">
						<img src={ExecutiveSearchImage1} height="60" width="60" alt=""/>
						</div>
						<div className="choose-info">
						<p>Company location</p>
						</div>
					</div>
					<div className="col-sm-2 agile-choose-grid">
						<div className="choose-icon">
						<img src={ExecutiveSearchImage2} height="60" width="60" alt="" className="img-fluid radius-image"/>
						</div>
						<div className="choose-info">
							<p>Industry</p>
						</div>
					</div>
					
					<div className="col-sm-2 agile-choose-grid">
						<div className="choose-icon">
						<img src={ExecutiveSearchImage3} height="60" width="60" alt=""/>
						</div>
						<div className="choose-info">
							<p>No. of employees</p>
						</div>
					</div>
                    <div className="col-sm-2 agile-choose-grid">
						<div className="choose-icon">
						<img src={ExecutiveSearchImage4} height="60" width="60" alt=""/>
						</div>
						<div className="choose-info">
							<p>Revenue</p>
						</div>
					</div>
					<div className="clearfix"></div>
					
					<div className="col-sm-2 agile-choose-grid" position-relative>
						<div className="choose-icon">
						<img src={ExecutiveSearchImage5} height="60" width="60" alt=""/>
						</div>
						<div className="choose-info">
							<p>Contact name</p>
						</div>
					</div>
					<div className="col-sm-2 agile-choose-grid">
						<div className="choose-icon">
						<img src={ExecutiveSearchImage6} height="60" width="60" alt=""/>
						</div>
						<div className="choose-info">
							<p>Job title</p>
						</div>
					</div>
                    <div className="col-sm-2 agile-choose-grid">
						<div className="choose-icon">
						<img src={ExecutiveSearchImage7} height="60" width="60" alt=""/>
						</div>
						<div className="choose-info">
							<p>Seniority</p>
						</div>
					</div>
					<div className="col-sm-2 agile-choose-grid">
						<div className="choose-icon">
						<img src={ExecutiveSearchImage8} height="60" width="60" alt=""/>
						</div>
						<div className="choose-info">
							<p>Contact phone</p>
						</div>
					</div>
                    <div className="col-sm-2 agile-choose-grid">
						<div className="choose-icon">
						<img src={ExecutiveSearchImage9} height="60" width="60" alt=""/>
						</div>
						<div className="choose-info">
							<p>Department</p>
						</div>
					</div>
					
					
				</div>	
			</div>
		</div>
		</section>
		
   </>
    )
}

export default Dashboard;