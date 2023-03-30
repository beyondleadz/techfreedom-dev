import React,{useState} from "react";
import { useRoutes,NavLink } from "react-router-dom";

import horizentalImage from '../../assets/login/horizental-line.jpg';

const Step1=({changeStep})=>{
    return (
        <>
			<p align="center"><img src={horizentalImage} align="absmiddle"/></p>
						<form>
							<div className="email">
							<input placeholder="First Name*" name="FirstName" type="text" required=""/>
							<span className="icons i1"><i className="fa fa-user" aria-hidden="true"></i></span>
							</div>
							<div className="email">
							<input placeholder="Last Name*" name="LastName" type="text" required=""/>
							<span className="icons i1"><i className="fa fa-user" aria-hidden="true"></i></span>
							</div>
							<div className="email">
							<input placeholder="E Mail Address*" name="Email" type="email" required=""/>
							<span className="icons i1"><i className="fa fa-envelope" aria-hidden="true"></i></span>
							</div>
							<div className="email">
							<input placeholder="Password*" name="Password" type="password" required=""/>
							<span className="icons i2"><i className="fa fa-lock" aria-hidden="true"></i></span>
							</div>
							<input type="button" value="Create Account" name="register" onClick={()=>changeStep(2)}/>
							<h7>Already have an account?  <NavLink to={"/signin"} style={{"color":"#5D44FF"}}>Login</NavLink></h7>
						</form>
						
			<br/><br/><br/><br/>
        </>
    )
}

export default Step1;