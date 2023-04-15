import React,{} from "react";
import { useRoutes,NavLink } from "react-router-dom";

import ForgetPassLeft from '../assets/login/bg-left-forgot-password.jpg'
import LogoLogin from '../assets/login/logo-round.png'

const ForgetPassword=()=>{
    return (
		<>
		<div style={{margin:20}}><NavLink to={"/"}><img src={LogoLogin} /></NavLink></div>
		<div className="logincontainer">
	<div className="layer">
	<div className="main-agile1">
	<div className="main-agile">
			<div className="alert-close"> </div>
			<div><NavLink to={"/"}><img src={ForgetPassLeft} alt="Go back to Home Page"/></NavLink></div>
			<div className="content-wthree">
				<h2>Welcome! User</h2>
				<h4>Not yet registered? Please <NavLink to={"/signup"}>Register</NavLink> now.</h4>
				<div className="bottom-w3l"><p>Need any assistance? </p><p><strong>Call +91-901-573-1800</strong></p>
				</div>
				
			</div>
	  </div>
	
		<div className="w3layouts-main">
		<i className="fa fa-lock" aria-hidden="true"></i>
		<h2>Forgot Password</h2><br/><br/>						
						<form action="#" method="post">
							<div className="email">
							<input placeholder="E Mail Address*" name="Email" type="email" required=""/>
							<span className="icons i1"><i className="fa fa-envelope" aria-hidden="true"></i></span>
							</div>
							
							<input type="button" value="Submit" name="submit"/>
							
							 <br/><br/><br/><br/><br/><br/>
							 
							 <h7>Already have an account?  <NavLink to={"/signin"}>Login</NavLink></h7>
                                    
                             
						</form>
		</div>
		
							  
		
		
		<div className="clear"></div>
	</div>
	<div className="footer-w3l">
		<p className="agileinfo"> © 2023 Beyond Leadz. All rights reserved. Design by <a href="http://techfreedomonline.com/" target="_blank">Tech Freedom Online</a></p>
	</div>
</div>
</div>
</>
)
}
export default ForgetPassword;