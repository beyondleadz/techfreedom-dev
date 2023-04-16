import React, { useEffect, useState } from "react";
import { formActionStep3 } from "../../actionCreator/signUpActionCreater";
import { useSelector, useDispatch } from "react-redux";
const Step3 = () => {
  const [form, setForm] = useState({});
  const [errorObj, setError] = useState();
  const dispatch = useDispatch();
  const signUpFormData = useSelector((state) => state.SignUpReducer);
  const OnInputChange = (ele) => {
    setForm({
      ...form,
      [ele.target.name]: ele.target.value,
    });
  };
  const sendData = () => {
    let errObj;
    let errCnt = false;
    if (!form?.totalEmployee) {
      errCnt = true;
      errObj = {
        ...errObj,
        totalEmployee: "Please enter total company strength.",
      };
    }
    if (!form?.workingField) {
      errCnt = true;
      errObj = {
        ...errObj,
        workingField: "Please enter field.",
      };
    }
    if (!form?.role) {
      errCnt = true;
      errObj = {
        ...errObj,
        role: "Please enter role.",
      };
    }
    setError(errObj);
    if (!errCnt) {
      // const combinedData={...signupData,...form}
      //console.log(combinedData,submitData)
	  submitData(form)
    //   dispatch(formActionStep3(form));
    }
  };

  const submitData = (form) => {
	const {signUpStep1Data,signUpStep2Data} = signUpFormData;
	// console.log(signUpStep1Data,'signUpFormDatasignUpFormData',signUpStep2Data,signUpStep3Data)
	const fullFormData = {...signUpStep1Data,...signUpStep2Data,...form}
    console.log(fullFormData);
	//api call
	/*postMethod(signUpUrl,form).then((res)=>{
		navigate("/");
		}).catch((error)=>{
			console.log(error);
		//	setError({error:"Invalid Credentials"});
		//	setForm({username:"",password:""});
		}) */
  };

//   useEffect(() => {
// 	console.log('rajesh',signUpFormData)
//     submitData();
//   }, [signUpFormData.signUpStep3Data]);

  return (
    <>
      <h2>Step 3</h2>
      <form>
        <div className="email">
          <input
            placeholder="How many people work at your company?*"
            name="totalEmployee"
            type="text"
            required=""
            value={form?.totalEmployee}
            onChange={OnInputChange}
          />
          <span className="icons i1">
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>
          <div className="error">{errorObj?.totalEmployee}</div>
        </div>
        <div className="email">
          <input
            placeholder="What field do you working?*"
            name="workingField"
            type="text"
            required=""
            value={form?.workingField}
            onChange={OnInputChange}
          />
          <span className="icons i1">
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>
          <div className="error">{errorObj?.workingField}</div>
        </div>
        <div className="email">
          <input
            placeholder="Describe your role*"
            name="role"
            type="text"
            required=""
            value={form?.role}
            onChange={OnInputChange}
          />
          <span className="icons i1">
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>
          <div className="error">{errorObj?.role}</div>
        </div>
        <input type="button" value="Done" name="register" onClick={sendData} />
      </form>
    </>
  );
};

export default Step3;
