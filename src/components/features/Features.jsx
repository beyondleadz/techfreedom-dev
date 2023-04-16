import React,{useState} from "react";
import CompanyDetailshImage from '../../assets/images/executive-search-industry-icon.jpg'
import UnlimitedSearchImage from '../../assets/images/executive-search-propect-icon.jpg';
import AdvanceSearchImage from '../../assets/images/features-advance-search-icon.jpg';
import OrgChartImage from "../../assets/images/features-org-icon.jpg";
import LeadsImage from "../../assets/images/executive-search-no-emp-icon.jpg";
import NewsArticlesImage from "../../assets/images/features-news-icon.jpg";
import ExecutiveImage from "../../assets/images/features-executive-icon.jpg";
import SalesSignalsImage from "../../assets/images/features-sales-signals-icon.jpg";
import SalesTriggersImage from "../../assets/images/features-sales-triggers-icon.jpg";
import SellingRadiusImage from "../../assets/images/features-selling-radius-icon.jpg";

						
const Feature = () => {
    return (
        <section id="why">
		<div className="jarallax w3-agileits-choose-grid">
			<div className="container">
				<div className="detail">
				
					<h4><strong>Feature list</strong></h4>
				</div>
				<div className="row agile-choose-grids">
					<div className="col-sm-4 agile-choose-grid" position-relative>
						
						<div className="choose-info-career">
						<img src={CompanyDetailshImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>

							<h4>Company Details</h4>
							<p>"Our company details feature is so comprehensive, even Sherlock Holmes would be impressed!"</p>
						</div>
					</div>

					<div className="col-sm-4 agile-choose-grid">
						<div className="choose-icon">
						<img src={ExecutiveImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
						</div>
						<div className="choose-info-career">
							<h4>Executive Details</h4>
						<p>"Our Executive details feature is like having a backstage pass to the VIP section of the business world!"</p>
						</div>
					</div>
					<div className="col-sm-4 agile-choose-grid">
						<div className="choose-icon">
						<img src={AdvanceSearchImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
						</div>
						<div className="choose-info-career">
							<h4>Advanced Filters</h4>
							<p>"With our Advanced Filters feature, you'll be able to slice and dice data faster than a sushi chef at a busy restaurant!"</p>
						</div>
					</div>
					
					<div className="col-sm-4 agile-choose-grid" position-relative>
						<div className="choose-icon">
                        <img src={OrgChartImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
						</div>
						<div className="choose-info-career">
							<h4>Org. Chart</h4>
							<p>"Our org chart is so efficient, it can make a maze look like a straight line!"</p>
						</div>
					</div>
					<div className="col-sm-4 agile-choose-grid">
						<div className="choose-icon">
						<img src={LeadsImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
						</div>
						<div className="choose-info-career">
							<h4>Leadz</h4>
							<p>"Our leads are so hot, they could melt a polar ice cap!"</p>
						</div>
					</div>
					
					
					<div className="col-sm-4 agile-choose-grid">
						<div className="choose-icon">
						<img src={NewsArticlesImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
						</div>
						<div className="choose-info-career">
							<h4>News Articles</h4>
							<p>"Our news and articles are so informative, your competitors will think you hired a team of spies!"</p>
						</div>
					</div>

					<div className="col-sm-4 agile-choose-grid">
						<div className="choose-icon">
						<img src={SalesSignalsImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
						</div>
						<div className="choose-info-career">
							<h4>Signals -Important Markers</h4>
							<p>"Our sales signals are so accurate, it's like having a crystal ball that predicts your customer's every move!"</p>
						</div>
					</div>

					<div className="col-sm-4 agile-choose-grid">
						<div className="choose-icon">
						<img src={SalesTriggersImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
						</div>
						<div className="choose-info-career">
							<h4>Sales Triggers</h4>
							<p>"Our sale triggers are so effective, they'll make your customers whip out their wallets faster than a cowboy in a gunfight!"</p>
						</div>
					</div>

					<div className="col-sm-4 agile-choose-grid">
						<div className="choose-icon">
						<img src={SellingRadiusImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
						</div>
						<div className="choose-info-career">
							<h4>Selling Radius</h4>
							<p>"Expand your reach and discover leads in your backyard with our selling radius tool!"</p>
						</div>
					</div>

					<div className="col-sm-4 agile-choose-grid">
						<div className="choose-icon">
						<img src={UnlimitedSearchImage} height="60" width="60" alt="" className="img-fluid radius-career-icon-image"/>
						</div>
						<div className="choose-info-career">
							<h4>Unlimited Searches</h4>
							<p>"Unlimited search? It's like having your own personal data genie that never runs out of wishes!"</p>
						</div>
					</div>
					
					
					
				</div>	
			</div>
		</div>
		</section>
		
    )
}

export default Feature;