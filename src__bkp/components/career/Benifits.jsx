import React,{useState} from "react";
import BenifitsImage from '../../assets/images/career-youth-icon.jpg';
import BenifitsSalaryImage from '../../assets/images/career-salary-icon.jpg';
import CareerSupportiveImage from '../../assets/images/career-supportive-icon1.jpg';
import CareerFunImage from "../../assets/images/career-fun-icon1.jpg";
import CareerPantryImage from "../../assets/images/career-pantry-icon.jpg";
import CareerMedicalImage from "../../assets/images/career-medical-icon.jpg";
						
const Benifits = () => {
    return (
        <section id="why">
		<div className="jarallax w3-agileits-choose-grid">
			<div className="container">
				<div className="detail">
				
					<h4><strong>Benefits</strong></h4>
				</div>
				<div className="row agile-choose-grids">
					<div className="col-sm-4 agile-choose-grid" position-relative>
						<div className="choose-icon">
						<img src={BenifitsImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
							
						</div>
						<div className="choose-info-career">
							<h4>Young Environment</h4>
							<p>Support our Clients' Business Processes</p>
						</div>
					</div>
					<div className="col-sm-4 agile-choose-grid">
						<div className="choose-icon">
						<img src={BenifitsSalaryImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
						</div>
						<div className="choose-info-career">
							<h4>Competitive Salary</h4>
						<p>Saving their Time and Cost, adding value to their bottom-line</p>
						</div>
					</div>
					<div className="col-sm-4 agile-choose-grid">
						<div className="choose-icon">
						<img src={CareerSupportiveImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
						</div>
						<div className="choose-info-career">
							<h4>Supportive Tech</h4>
							<p>Helping them in Identifying, Targeting & Leveraging New Opportunities</p>
						</div>
					</div>
					
					<div className="col-sm-4 agile-choose-grid" position-relative>
						<div className="choose-icon">
                        <img src={CareerFunImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
						</div>
						<div className="choose-info-career">
							<h4>Fun Fridays</h4>
							<p>Back their Presales, Business Development & Post Sales CRM</p>
						</div>
					</div>
					<div className="col-sm-4 agile-choose-grid">
						<div className="choose-icon">
						<img src={CareerPantryImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
						</div>
						<div className="choose-info-career">
							<h4>Feel Good Pantry</h4>
							<p>Power their Research and Knowledge Management Engine</p>
						</div>
					</div>
					
					<div className="col-sm-4 agile-choose-grid">
						<div className="choose-icon">
						<img src={CareerMedicalImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
						</div>
						<div className="choose-info-career">
							<h4>Medical Insurance</h4>
							<p>Our state-of- the-art server control, dedicated firewall setup enables you to run your business smoothly.</p>
						</div>
					</div>
					
					
					
				</div>	
			</div>
		</div>
		</section>
		
    )
}

export default Benifits;