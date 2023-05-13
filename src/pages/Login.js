import React, { useEffect, useState } from "react";
import { useRoutes, NavLink, redirect, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { doLogin } from "../actionCreator/signUpActionCreater";
import Img from "../assets/login/horizental-line.jpg";
import LoginLeft from "../assets/login/login-left.jpg";
import Gmail from "../assets/login/gmail.png";
import LinkedIn from "../assets/login/linkedin.png";
import Outlook from "../assets/login/outlook.png";
import LogoLogin from "../assets/login/logo-round.svg";
import { signInUrl } from "../constant/Constant";
import { postMethod } from "../services/HttpServices";
import "../assets/css/style.css";
import {
  getAccountInfo,
  emptyCommonErrorObj,
} from "../actionCreator/commonActionCreator";

const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ username: "", password: "" });
  const [errorObj, setError] = useState();
  const navigate = useNavigate();

  const OnInputChange = (ele) => {
    setForm({
      ...form,
      [ele.target.name]: ele.target.value,
    });
  };
  const validateForm = () => {
    let errObj;
    let errCnt = false;
    if (!form?.username) {
      errCnt = true;
      errObj = {
        ...errObj,
        username: "Please enter username.",
      };
    }
    if (!form?.password) {
      errCnt = true;
      errObj = {
        ...errObj,
        password: "Please enter password.",
      };
    }
    setError(errObj);
    if (!errCnt) {
      //calling api
      //dispatch(doLogin(form));

      postMethod(signInUrl,form).then((res)=>{
      sessionStorage.setItem("token",res.data.id_token);
      //dispatch Account api & store data in session
      dispatch(getAccountInfo(res.data.id_token));  
      navigate("/search-company");
      }).catch((error)=>{
      	setError({error:"Invalid Credentials"});
          setForm({username:"",password:""});
      })
    }
  };

  return (
    <>
      <div style={{ margin: 20 }}>
        <NavLink to={"/"}>
          <img src={LogoLogin} />
        </NavLink>
      </div>
      <div className="logincontainer">
        <div className="layer">
          <div className="main-agile1">
            <div className="main-agile">
              <div className="alert-close"> </div>
              <div>
                <NavLink to={"/"}>
                  <img src={LoginLeft} alt="Go back to Home Page" />
                </NavLink>
              </div>
              <div className="content-wthree">
                <h2>Welcome! User</h2>
                <h8>
                  Beyond Leadz is a futuristic tools for the marketing which
                  makes life easy for the executives. Beyond Leadz will comes
                  over here so that user understand the features about the
                  product.
                </h8>
                <h4>
                  Not yet registered? Please{" "}
                  <NavLink to={"/signup"}>Register</NavLink> now.
                </h4>
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
              <h2>Sign in with</h2>

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

              <p align="center">
                <img src={Img} align="absmiddle" />
              </p>
              <form>
                <div className="email">
                  <input
                    placeholder="Username*"
                    name="username"
                    type="text"
                    value={form?.username}
                    required=""
                    onChange={OnInputChange}
                  />
                  <span className="icons i1">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </span>
                  <div className="error">{errorObj?.username}</div>
                </div>
                <div className="email">
                  <input
                    placeholder="Password*"
                    name="password"
                    type="password"
                    value={form?.password}
                    required=""
                    onChange={OnInputChange}
                  />
                  <span className="icons i2">
                    <i className="fa fa-unlock" aria-hidden="true"></i>
                  </span>
                  <div className="error">{errorObj?.password}</div>
                </div>
                <input
                  type="button"
                  value="Login"
                  name="login"
                  onClick={validateForm}
                />

                <div className="form-row bottom">
                  <div className="form-check" align="left">
                    <input
                      type="checkbox"
                      id="remenber"
                      name="remenber"
                      value="remenber"
                    />
                    <label htmlFor="remember"> Remember Me?</label>{" "}
                    <NavLink to={"/forgetpassword"} className="forgot">
                      Forgot Password?
                    </NavLink>
                  </div>
                </div>
              </form>
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

export default Login;
