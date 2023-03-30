import React,{useState} from "react";

const Step3=()=>{
    return (
        <>
                        <h2>Step 3</h2>						
						<form>
							<div className="email">
							<input placeholder="How many people work at your company?*" name="HowManyPeople" type="text" required=""/>
							<span className="icons i1"><i className="fa fa-user" aria-hidden="true"></i></span>
							</div>
							<div className="email">
							<input placeholder="What field do you working?*" name="FieldWorking" type="text" required=""/>
							<span className="icons i1"><i className="fa fa-user" aria-hidden="true"></i></span>
							</div>
							<div className="email">
							<input placeholder="Describe your role*" name="DescribeRole" type="text" required=""/>
							<span className="icons i1"><i className="fa fa-user" aria-hidden="true"></i></span>
							</div>
							<input type="button" value="Done" name="register"/>
						</form>
                        </>
    )
}

export default Step3;