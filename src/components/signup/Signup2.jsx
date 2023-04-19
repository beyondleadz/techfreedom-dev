import React,{useState} from "react";
import {formActionStep2} from '../../actionCreator/signUpActionCreater';
import { useSelector,useDispatch } from "react-redux";
const Step2=({changeStep})=>{
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
		if(!form?.websiteUrl){
			errCnt=true;
			errObj={
				...errObj,
				websiteUrl:"Please enter website."
			}
		}
		if(!form?.companyName){
			errCnt=true;
			errObj={
				...errObj,
				companyName:"Please enter company name."
			}
		}
		setError(errObj);
		if(!errCnt){
		// const combinedData={...signupData,...form}
		//console.log(signupData,form)
		changeStep(3)
		dispatch(formActionStep2(form))
		}
	}
    return (
        <>
                        <h2>Step 2</h2>						
						<form>
							<div className="email">
							<input placeholder="Website URL*" name="websiteUrl" type="text" required=""  value={form?.websiteUrl} onChange={OnInputChange}/>
							<span className="icons i1"><i className="fa fa-user" aria-hidden="true"></i></span>
							<div className="error">{errorObj?.websiteUrl}</div>
							</div>
							<div className="email">
							<input placeholder="Company Name*" name="companyName" type="text" required="" value={form?.companyName} onChange={OnInputChange}/>
							<span className="icons i1"><i className="fa fa-user" aria-hidden="true"></i></span>
							<div className="error">{errorObj?.companyName}</div>
							</div>
							<input type="button" value="Save & Continue" name="register"  onClick={sendData}/>
						</form>
												
						<br/><br/><br/><br/>
                        </>
    )
}

export default Step2;