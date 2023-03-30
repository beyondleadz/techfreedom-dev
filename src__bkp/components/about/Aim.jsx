import React,{useState} from "react";
import AboutSupportImage from '../../assets/images/about-support-icon.jpg'
import AboutTimeImage from '../../assets/images/about-time-money-saving-icon.jpg'
import AboutTargetImage from '../../assets/images/about-target-icon1.jpg'
import AboutHandshakeImage from '../../assets/images/about-handshake-icon.jpg'
import AboutPowerImage from '../../assets/images/about-power-icon.jpg'

const Aim=()=>{
    return <>
    (<section id="why">
		<div className="jarallax w3-agileits-choose-grid">
			<div className="container">
				<div className="detail">				
					<h4><strong>Our Aim to</strong></h4>
				</div>
				<div className="row agile-choose-grids">
					<div className="col-sm-4 agile-choose-grid" position-relative>
						<div className="choose-icon">
						<img src={AboutSupportImage} height="60" width="60" alt="" className="img-fluid radius-image"/>
						</div>
						<div className="choose-info">
							<p>Support our Clients' Business Processes</p>
						</div>
					</div>
					<div className="col-sm-4 agile-choose-grid">
						<div className="choose-icon">
						<img src={AboutTimeImage} height="60" width="60" alt="" className="img-fluid radius-image"/>
						</div>
						<div className="choose-info">
						<p>Saving their Time and Cost, adding value to their bottom-line</p>
						</div>
					</div>
					<div className="col-sm-4 agile-choose-grid">
						<div className="choose-icon">
						<img src={AboutTargetImage} height="60" width="60" alt="" className="img-fluid radius-image"/>
						</div>
						<div className="choose-info">
							<p>Helping them in Identifying, Targeting & Leveraging New Opportunities</p>
						</div>
					</div>
					
					<div className="col-sm-4 agile-choose-grid" position-relative>
						<div className="choose-icon">
						<img src={AboutHandshakeImage} height="60" width="60" alt="" className="img-fluid radius-image"/>
						</div>
						<div className="choose-info">
							<p>Back their Presales, Business Development & Post Sales CRM</p>
						</div>
					</div>
					<div className="col-sm-4 agile-choose-grid">
						<div className="choose-icon">
						<img src={AboutPowerImage} height="60" width="60" alt="" className="img-fluid radius-image"/>
						</div>
						<div className="choose-info">
							<p>Power their Research and Knowledge Management Engine</p>
						</div>
					</div>
				</div>	
			</div>
		</div>
		</section>
		
		)
    </>
}
export default Aim;