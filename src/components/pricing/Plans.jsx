import React,{useState} from "react";
import FeatureSearchImage from "../../assets/images/features-search-icon.png";
import ProspectSearchImage from "../../assets/images/prospect-search.jpg";
import leadsImage from "../../assets/images/leads.jpg";

import FeatureOrgImage from "../../assets/images/features-org-icon.png";

import FeaturesImageIntelligence from '../../assets/images/features-social-intelligenc-icon.png';
import FeaturesRadiusImage from  '../../assets/images/features-radius-icon.png';

const Plans=()=>{

	const [active,setActive] = useState('INR')
	const [price,setPrice]=useState({basic:2000,growth:5000,pro:12500})
	const [currencySymbol,setCurrencySymbol]=useState('Rs.');
	const changeCurrency = (curr) => {
		if(curr === 'INR'){
			setActive('INR')
			setCurrencySymbol('Rs.')
			setPrice({basic:2000,growth:5000,pro:12500})
		}
		if(curr === 'USD'){
			setActive('USD')
			setCurrencySymbol('$')
			setPrice({basic:25,growth:62,pro:156})
		}
	}


    return (
    <>
       <div className="pricing-plans">
		<div className="container">
			<div className="price-head">
				<ul id="cr-unit-div">
				<li className={`cr-unit ${active === 'INR' ? 'activeblue': ''}`} onClick={() => changeCurrency('INR')}> INR </li>
				<li className={`cr-unit ${active === 'USD' ? 'activered': ''}`} onClick={() => changeCurrency('USD')}> USD </li>
				</ul>
			
				<h3>OUR PRICING PLANS</h3>
			</div>
				<div className="pricing-grids">
						<div className="pricing-grid1">
							<div className="price-value one">
									<h4><a href="#">Basic</a></h4>
									{/* <div><a href="#"><strong style={{fontSize:20}}>{currencySymbol}{price.basic} </strong><span className="small"><strong>(Billed Annually)</strong></span></a></div> */}
									<div><a href="#"><strong style={{fontSize:20}}>{currencySymbol}{price.basic} </strong></a></div>
									<div><a href="#"><span className="small"><strong>(Billed Annually)</strong></span></a></div>
									<div className="small">You have small enterprises and light usage.</div>
							</div>
							
							<div className="price-bg">
							<ul>
								{/* <li className="whyt"><a href="#"><strong style={{fontSize:20}}>{currencySymbol}{price.basic} </strong><span className="small"><strong>(Billed Annually)</strong></span></a></li> */}
								<li><a href="#">500 Monthly Data Credits</a></li>
								<li className="whyt"><a href="#"><i className="fa fa-times" aria-hidden="true"></i></a></li>
								<li><a href="#"><strong>500 Email Credits</strong></a></li>	
								<li className="whyt"><a href="#"><strong>20 Direct Dials</strong></a></li>							
								<li><a href="#">User License 1</a></li>
								<li className="whyt"><a href="#"><strong>Company Info. (Basic)</strong></a></li>
								<li><a href="#"><strong>Executive Info (Basic)</strong></a></li>
								<li className="whyt"><a href="#"><strong>Executive Biography</strong></a></li>
								<li><a href="#">Social Intelligence</a></li>
								<li className="whyt"><a href="#">Save Search</a></li>
								<li><a href="#"><i className="fa fa-times" aria-hidden="true"></i></a></li>
								<li className="whyt"><a href="#"><i className="fa fa-times" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-times" aria-hidden="true"></i></a></li>
								<li className="whyt"><a href="#"><i className="fa fa-times" aria-hidden="true"></i></a></li>
								<li><a href="#"><i className="fa fa-times" aria-hidden="true"></i></a></li>
								
							</ul>
							<div className="cart1">
								<a className="popup-with-zoom-anim pl-3" href="#small-dialog">GET QUOTE</a>							</div>
							</div>
						</div>
						<div className="pricing-grid2 pricing-grid2-highlited ">
						<div className="pricingTable">Most Popular</div>

							<div className="price-value two">
							
								<h4><a href="#">Growth</a></h4>
								{/* <div><a href="#"><strong style={{fontSize:20}}>{currencySymbol}{price.growth} </strong><span className="small"><strong>(Billed Annually)</strong></span></a></div> */}
								<div><a href="#"><strong style={{fontSize:20}}>{currencySymbol}{price.growth} </strong></a></div>
								<div><a href="#"><span className="small"><strong>(Billed Annually)</strong></span></a></div>
								<div className="small">You have medium & large enterprises and medium usage.</div>
															</div>
							<div className="price-bg">
							<ul>
							{/* <li className="whyt"><a href="#"><strong>{currencySymbol}{price.growth} </strong><span className="small">(Billed Annually)</span></a></li> */}
								<li><a href="#">2000 Monthly Data Credits</a></li>
								<li className="whyt"><a href="#">Lead Management</a></li>
								<li><a href="#"><strong>2000 Email Credits</strong></a></li>	
								<li className="whyt"><a href="#"><strong>200 Direct Dials</strong></a></li>							
								<li><a href="#">User License 2</a></li>
								<li className="whyt"><a href="#"><strong>Company Info</strong></a></li>
								<li><a href="#"><strong>Executive Info</strong></a></li>
								<li className="whyt"><a href="#"><strong>Executive Biography</strong></a></li>
								<li><a href="#">Social Intelligence</a></li>
								<li className="whyt"><a href="#">Save Search</a></li>
								<li><a href="#">News & Articles</a></li>
								<li className="whyt"><a href="#"><strong>Integrations</strong></a></li>
								<li><a href="#"><strong>Data Recommendation</strong></a></li>
								<li className="whyt"><a href="#"><strong>Alerts & Notification</strong></a></li>
								<li><a href="#"><strong>Reports</strong></a></li>
							</ul>
							<div className="cart2">
								<a className="popup-with-zoom-anim active" href="#small-dialog">GET QUOTE</a>							</div>
							</div>
						</div>
						
						<div className="pricing-grid3">
							<div className="price-value three">
								<h4><a href="#">Pro</a></h4>
								{/* <div><a href="#"><strong style={{fontSize:20}}>{currencySymbol}{price.pro} </strong><span className="small"><strong>(Billed Annually)</strong></span></a></div> */}
								<div><a href="#"><strong style={{fontSize:20}}>{currencySymbol}{price.pro} </strong></a></div>
								<div><a href="#"><span className="small"><strong>(Billed Annually)</strong></span></a></div>
								<div className="small">You have large enterprises & research organisation and heavy usage.</div>
								
							</div>
							<div className="price-bg">
							<ul>
							{/* <li className="whyt"><a href="#"><strong>{currencySymbol}{price.pro} </strong><span className="small">(Billed Annually)</span></a></li> */}
								<li><a href="#">10000 Monthly Data Credits</a></li>
								<li className="whyt"><a href="#">Lead Management</a></li>
								<li><a href="#"><strong>10000 Email Credits</strong></a></li>	
								<li className="whyt"><a href="#"><strong>500 Direct Dials</strong></a></li>							
								<li><a href="#">User License 5</a></li>
								<li className="whyt"><a href="#"><strong>Company Info</strong></a></li>
								<li><a href="#"><strong>Executive Info</strong></a></li>
								<li className="whyt"><a href="#"><strong>Executive Biography</strong></a></li>
								<li><a href="#">Social Intelligence</a></li>
								<li className="whyt"><a href="#">Save Search</a></li>
								<li><a href="#">News & Articles</a></li>
								<li className="whyt"><a href="#"><strong>Integrations</strong></a></li>
								<li><a href="#"><strong>Data Recommendation</strong></a></li>
								<li className="whyt"><a href="#"><strong>Alerts & Notification</strong></a></li>
								<li><a href="#"><strong>Reports</strong></a></li>
							</ul>
							<div className="cart3">
								<a className="popup-with-zoom-anim" href="#small-dialog">GET QUOTE</a>							</div>
							</div>
						</div>
							<div className="clearfix"> </div>
								 <div id="small-dialog" className="mfp-hide">
									<div className="pop_up">
									 	<div className="payment-online-form-left">
											<form>
												<h4><span className="shipping"> </span>Shipping</h4>
												<ul>
													<li><input className="text-box-dark" type="text" value="Frist Name" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Frist Name';}"/></li>
													<li><input className="text-box-dark" type="text" value="Last Name" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Last Name';}"/></li>
												</ul>
												<ul>
													<li><input className="text-box-dark" type="text" value="Email" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Email';}"/></li>
													<li><input className="text-box-dark" type="text" value="Company Name" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Company Name';}"/></li>
												</ul>
												<ul>
													<li><input className="text-box-dark" type="text" value="Phone" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Phone';}"/></li>
													<li><input className="text-box-dark" type="text" value="Address" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Address';}"/></li>
													<div className="clearfix"> </div>
												</ul>
												<div className="clearfix"> </div>
											<ul className="payment-type">
												<h4><span className="payment"> </span> Payments</h4>
												<li><span className="col_checkbox">
													<input id="3" className="css-checkbox1" type="checkbox"/>
													<label for="3" name="demo_lbl_1" className="css-label1"> </label>
													<a className="visa" href="#"> </a>
													</span>
													
												</li>
												<li>
													<span className="col_checkbox">
														<input id="4" className="css-checkbox2" type="checkbox"/>
														<label for="4" name="demo_lbl_2" className="css-label2"> </label>
														<a className="paypal" href="#"> </a>
													</span>
												</li>
												<div className="clearfix"> </div>
											</ul>
												<ul>
													<li><input className="text-box-dark" type="text" value="Card Number" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Card Number';}"/></li>
													<li><input className="text-box-dark" type="text" value="Name on card" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Name on card';}"/></li>
													<div className="clearfix"> </div>
												</ul>
												<ul>
													<li><input className="text-box-light hasDatepicker" type="text" id="datepicker" value="Expiration Date" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Expiration Date';}"/><em className="pay-date"> </em></li>
													<li><input className="text-box-dark" type="text" value="Security Code" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Security Code';}"/></li>
													<div className="clearfix"> </div>
												</ul>
												<ul className="payment-sendbtns">
													<li><input type="reset" value="Cancel"/></li>
													<li><input type="submit" value="Process order"/></li>
												</ul>
												<div className="clearfix"> </div>
											</form>
										</div>
						  			</div>
								</div>
							</div>
						<div className="clearfix"> </div>
					</div>
				</div>
    </>
    )
    }
    export default Plans;