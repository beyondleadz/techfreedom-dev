import React from "react";
import { NavLink } from "react-router-dom";

import Img from "../assets/login/bg-left-sign-up.jpg";
import Gmail from "../assets/login/gmail.png";
import LinkedIn from "../assets/login/linkedin.png";
import Outlook from "../assets/login/outlook.png";
import LogoLogin from "../assets/login/logo-round.svg";
import "../assets/css/style.css";
import Signup1 from "../components/signup/Signup1";
// import Signup2 from "../components/signup/Signup2";
// import Signup3 from "../components/signup/Signup3";
// import { signUpUrl } from "../constant/Constant";
// import {postMethod} from "../services/HttpServices"
//import { useSelector,useDispatch } from "react-redux";
const Signup = () => {
  // const [step, setStep] = useState({ step1: true, step2: false, step3: false });
  // const [signupData, setSignupData] = useState();
  // const signUpFormData = useSelector(state => state.SignUpReducer)
  //const navigate = useNavigate();
  // const changeStep = (stepCnt) => {
  //   setSignupData({
  //     ...signupData,
  //   });
  //   if (stepCnt === 2) {
  //     setStep({ step1: false, step2: true, step3: false });
  //   } else if (stepCnt === 3) {
  //     setStep({ step1: false, step2: false, step3: true });
  //   }
  // };
//   const submitData = () => {
// 	const {signUpStep1Data,signUpStep2Data,signUpStep3Data} = signUpFormData;
// 	// console.log(signUpStep1Data,'signUpFormDatasignUpFormData',signUpStep2Data,signUpStep3Data)
// 	const fullFormData = {...signUpStep1Data,...signUpStep2Data,...signUpStep3Data}
//     console.log(fullFormData);
// 	//api call
// 	/*postMethod(signUpUrl,form).then((res)=>{
// 		navigate("/");
// 		}).catch((error)=>{
// 			console.log(error);
// 		//	setError({error:"Invalid Credentials"});
// 		//	setForm({username:"",password:""});
// 		}) */
//   };

  return (
    <>
      <div style={{ margin: 20 }}>
        <NavLink to="/">
          <img src={LogoLogin} alt=" " />
        </NavLink>
      </div>
      <div className="logincontainer">
        <div className="layer">
          <div className="main-agile1">
            <div className="main-agile">
              <div className="alert-close"> </div>
              <div>
                <NavLink to={"/"}>
                  <img src={Img} alt="Go back to Home Page" />
                </NavLink>
              </div>
              <div className="content-wthree">
                <h2>Welcome! to Byond Leadz</h2>
                {/* <p>
                  <strong>You can create your account in 3 simple steps</strong>
                </p>
                <br />
                <h6>
                  <i className="fa fa-check-circle" aria-hidden="true"></i> Step 1{" "}
                  <i className="fa fa-arrow-down" aria-hidden="true"></i>
                </h6>
                <p align="left">Set your name, email or continue.</p>
                <h6>
                  <i className="fa fa-dot-circle-o" aria-hidden="true"></i> Step 2{" "}
                  <i className="fa fa-arrow-down" aria-hidden="true"></i>
                </h6>
                <p>Tell us about your company details</p>
                <h6>
                  <i className="fa fa-dot-circle-o" aria-hidden="true"></i> Step 3{" "}
                  <i className="fa fa-arrow-down" aria-hidden="true"></i>
                </h6>
                <p>Great! Tell us something more about your profile</p> */}
                <br />
                <br />
                <div className="bottom-w3l">
                  <p>Need any assistance? </p>
                  <p>
                    <strong>Call +91-901-573-1800</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="w3layouts-main">
              <i
                className="fa fa-arrow-circle-right"
                aria-hidden="true"
                style={{ fontSize: "45px", color: "#5D44FF" }}
              ></i>
              {/* <i className="fa fa-sign-in" aria-hidden="true"></i> */}
              <h2>New User Sign up</h2>
              <div className="social_icons agileinfo">
                <ul className="top-links">
                  <li>
                    <a href="#">
                      <img src={Gmail} height="33" width="33" />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={LinkedIn} height="33" width="33" />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={Outlook} height="33" width="33" />{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <Signup1 />
              {/* {step.step2 && (
                <Signup2 changeStep={changeStep}/>
              )}
              {step.step3 && (
                <Signup3 />
              )} */}
            </div>
            <div className="clear"></div>
          </div>
          <div className="footer-w3l">
            <p className="agileinfo">
              {" "}
              © 2023 Beyond Leadz. All rights reserved. Design by{" "}
              <a href="http://techfreedomonline.com/" target="_blank">
                Tech Freedom Online
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
