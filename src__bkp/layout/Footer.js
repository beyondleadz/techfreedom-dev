import React,{useState} from "react";
import { useRoutes,NavLink } from "react-router-dom";
import FooterPrivacyImg from '../assets/images/privacy-spam-rating-small.png'
const Footer=()=>{
	window.onscroll = function () {
		scrollFunction()
	};

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("movetop").style.display = "block";
		} else {
			document.getElementById("movetop").style.display = "none";
		}
	}
	
	function topFunction() { 
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
    return( 
		<> <footer className="w3l-footer-29-main">
	<div className="footer-29 py-5">
		<div className="container py-lg-4">
			<div className="row footer-top-29">
				<div className="col-lg-9">
					<div className="row">
						<div className="col-md-3 col-6 footer-list-29">
							<ul>
								<h6 className="footer-title-29">Company</h6>
								<li><NavLink to={'/about-us'}>About us</NavLink></li>
								<li><NavLink to={'/clients'}>Our Clients</NavLink></li>
								<li><a href="#testimonials">Testimonials</a></li>
								<li><NavLink to={'/career'}>Check Our Careers</NavLink></li>
							</ul>
						</div>
						<div className="col-md-3 col-6 footer-list-29">
							<ul>
								<h6 className="footer-title-29">Quick Links</h6>
								<li><a href="#management">Company Search</a></li>
								<li><NavLink to="/executive-search">Prospecting Search</NavLink></li>
								<li><a href="#appointment">Leads Managment</a></li>
                                    <li><NavLink to="/about-us">Faq's</NavLink></li>
							</ul>
						</div>
						<div className="col-md-3 col-6 footer-list-29 mt-md-0 mt-4">
							<ul>
							<h6 class="footer-title-29">More Info</h6>
                                    <li><NavLink to={'/privacy-policy'}>Privacy Policy</NavLink></li>
                                    <li><NavLink to={'/security-policy'}> Security Policy</NavLink></li>
                                    <li><NavLink to={'/terms-and-conditions'}>Terms and Conditions</NavLink></li>
								<li><NavLink to={'/contact-us'}>Contact us</NavLink></li>
							</ul>
						</div>
						
						<div className="col-md-3 col-6 footer-list-29 mt-md-0 mt-4">
							<h6 className="footer-title-29">More Info</h6>
							<ul>
							<li><img src={FooterPrivacyImg} alt="" title=""/></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-lg-3 footer-contact-list mt-lg-0 mt-md-5 mt-4">
					<h6 className="footer-title-29">Connect With Us</h6>
					<ul>
					<li><i className="fa fa-phone"></i> <strong style={{"marginLeft":15}}><a href="#"> +91-9811706966</a></strong></li>
					<li><i className="fa fa-envelope"></i> <strong style={{"marginLeft":15}}><a href="mailto:info@beyondleadz.com">info@beyondleadz.com</a></strong></li>
					</ul><br/>
					    
					<div className="main-social-footer-29">
						<a href="#facebook" className="facebook"><i className="fab fa-facebook-f"></i></a>
						<a href="#twitter" className="twitter"><i className="fab fa-twitter"></i></a>
						<a href="#google" className="google-plus-g"><i className="fab fa-google-plus-g"></i></a>
						<a href="#instagram" className="instagram"><i className="fab fa-instagram"></i></a>                        </div>
				
				</div>
			</div>
		</div>
	</div>
	<p style={{"textAlign":"center"}} className="copy-footer-29 mt-4">© 2023 Beyond Leadz. All rights reserved. Design by <a href="http://techfreedomonline.com/" target="_blank">Tech Freedom Online</a></p>
</footer>
 <button onClick={topFunction} id="movetop" title="Go to top">
 <span className="fas fa-level-up-alt" aria-hidden="true"></span>
</button>
</>
)
}
export default Footer;