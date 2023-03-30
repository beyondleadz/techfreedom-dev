import React,{useState} from "react";

const Step2=({changeStep})=>{
    return (
        <>
                        <h2>Step 2</h2>						
						<form>
							<div className="email">
							<input placeholder="Website URL*" name="WebsiteURL" type="text" required=""/>
							<span className="icons i1"><i className="fa fa-user" aria-hidden="true"></i></span>
							</div>
							<div className="email">
							<input placeholder="Company Name*" name="CompanyName" type="text" required=""/>
							<span className="icons i1"><i className="fa fa-user" aria-hidden="true"></i></span>
							</div>
							<input type="button" value="Save & Continue" name="register"  onClick={()=>changeStep(3)}/>
						</form>
												
						<br/><br/><br/><br/>
                        </>
    )
}

export default Step2;