import React,{useState} from "react";

const Step2=({changeStep,signupData})=>{
	const [form,setForm]=useState({});
	const [errorObj,setError] = useState()
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
		const combinedData={...signupData,...form}
		//console.log(signupData,form)
		changeStep(3,combinedData)
		}
	}
    return (
        <>
                        <h2>Step 2</h2>						
						<form>
							<div className="email">
							<input placeholder="Website URL*" name="websiteUrl" type="text" required=""  value={form?.websiteUrl} onChange={OnInputChange}/>
							<span className="icons i1"><i className="fa fa-user" aria-hidden="true"></i></span>
							<div class="error">{errorObj?.websiteUrl}</div>
							</div>
							<div className="email">
							<input placeholder="Company Name*" name="companyName" type="text" required="" value={form?.companyName} onChange={OnInputChange}/>
							<span className="icons i1"><i className="fa fa-user" aria-hidden="true"></i></span>
							<div class="error">{errorObj?.companyName}</div>
							</div>
							<input type="button" value="Save & Continue" name="register"  onClick={sendData}/>
						</form>
												
						<br/><br/><br/><br/>
                        </>
    )
}

export default Step2;