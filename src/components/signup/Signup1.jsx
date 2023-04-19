import React,{useState,useEffect} from "react";
import { useRoutes,NavLink } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {formActionStep1} from '../../actionCreator/signUpActionCreater';
import horizentalImage from '../../assets/login/horizental-line.jpg';

const Step1=({changeStep})=>{
	const [form,setForm]=useState({});
	const [errorObj,setError] = useState()
	const dispatch = useDispatch()
	const OnInputChange=(ele)=>{
		setForm({
			...form,
			[ele.target.name]:ele.target.value
		})        
	}
	const sendData=()=>{
		let errObj; let errCnt=false;
		if(!form?.firstName){
			errCnt=true;
			errObj={
				...errObj,
				firstName:"Please enter first name."
			}
		}
		if(!form?.lastName){
			errCnt=true;
			errObj={
				...errObj,
				lastName:"Please enter last name."
			}
		}
		if(!form?.login){
			errCnt=true;
			errObj={
				...errObj,
				login:"Please enter username."
			}
		}
		if(!form?.email){
			errCnt=true;
			errObj={
				...errObj,
				email:"Please enter email."
			}
		}
		if(!form?.password){
			errCnt=true;
			errObj={
				...errObj,
				password:"Please enter password."
			}
		}
		setError(errObj);
		if(!errCnt){
		changeStep(2);
		dispatch(formActionStep1(form))
		}
		
	}

    return (
        <>
			<p align="center"><img src={horizentalImage} align="absmiddle"/></p>
						<form>
							<div className="email">
							<input placeholder="First Name*" name="firstName" type="text" required="" value={form?.firstName} onChange={OnInputChange}/>
							<span className="icons i1"><i className="fa fa-user" aria-hidden="true"></i></span>
							<div className="error">{errorObj?.firstName}</div>
							</div>
							<div className="email">
							<input placeholder="Last Name*" name="lastName" type="text" required="" value={form?.lastName} onChange={OnInputChange}/>
							<span className="icons i1"><i className="fa fa-user" aria-hidden="true"></i></span>
							<div className="error">{errorObj?.lastName}</div>
							</div>
							<div className="email">
							<input placeholder="Username*" name="login" type="text" required="" value={form?.login} onChange={OnInputChange}/>
							<span className="icons i1"><i className="fa fa-user" aria-hidden="true"></i></span>
							<div className="error">{errorObj?.login}</div>
							</div>
							
							<div className="email">
							<input placeholder="E Mail Address*" name="email" type="email" required="" value={form?.email} onChange={OnInputChange}/>
							<span className="icons i1"><i className="fa fa-envelope" aria-hidden="true"></i></span>
							<div className="error">{errorObj?.email}</div>
							</div>
							<div className="email">
							<input placeholder="Password*" name="password" type="password" required="" value={form?.password} onChange={OnInputChange}/>
							<span className="icons i2"><i className="fa fa-lock" aria-hidden="true"></i></span>
							<div className="error">{errorObj?.password}</div>
							</div>
							<input type="button" value="Create Account" name="register" onClick={sendData}/>
							<h7>Already have an account?  <NavLink to={"/signin"} style={{"color":"#5D44FF"}}>Login</NavLink></h7>
						</form>
						
			<br/><br/><br/><br/>
        </>
    )
}

export default Step1;