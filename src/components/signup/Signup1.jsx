import React, { useState, useEffect, useMemo } from "react";
import { useRoutes, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Table, Input, Button, Modal } from "antd";

import {
  formActionStep1,
  userRegister,
} from "../../actionCreator/signUpActionCreater";
import horizentalImage from "../../assets/login/horizental-line.jpg";
import popupImg from "../../assets/images/congratulations-header.jpg";
import { REGISTER_USER } from "../../actionType/signUpType";
const Step1 = () => {
  const [form, setForm] = useState({});
  const [errorObj, setError] = useState();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //registrationDetails?.statusCode
  const registrationDetails = useSelector(
    (state) => state.SignUpReducer.registrationDetails
  );

  useMemo(() => {
    if (registrationDetails?.statusCode) {
      setShowModal(true);
    }
  }, [registrationDetails]);

  const closeModal = () => {
    setShowModal(false);
    dispatch({
      type: REGISTER_USER,
      payload: {},
    });
    navigate("/");
  };

  const OnInputChange = (ele) => {
    setForm({
      ...form,
      [ele.target.name]: ele.target.value,
    });
  };
  const sendData = () => {
    let errObj;
    let errCnt = false;
    if (!form?.firstName) {
      errCnt = true;
      errObj = {
        ...errObj,
        firstName: "Please enter first name.",
      };
    }
    if (!form?.lastName) {
      errCnt = true;
      errObj = {
        ...errObj,
        lastName: "Please enter last name.",
      };
    }
    if (!form?.login) {
      errCnt = true;
      errObj = {
        ...errObj,
        login: "Please enter username.",
      };
    }
    if (!form?.email) {
      errCnt = true;
      errObj = {
        ...errObj,
        email: "Please enter email.",
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
      dispatch(userRegister(form));
    }
  };

  return (
    <>
      <p align="center">
        <img src={horizentalImage} align="absmiddle" />
      </p>
      <form>
        <div className="email">
          <input
            placeholder="First Name*"
            name="firstName"
            type="text"
            required=""
            value={form?.firstName}
            onChange={OnInputChange}
          />
          <span className="icons i1">
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>
          <div className="error">{errorObj?.firstName}</div>
        </div>
        <div className="email">
          <input
            placeholder="Last Name*"
            name="lastName"
            type="text"
            required=""
            value={form?.lastName}
            onChange={OnInputChange}
          />
          <span className="icons i1">
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>
          <div className="error">{errorObj?.lastName}</div>
        </div>
        <div className="email">
          <input
            placeholder="Username*"
            name="login"
            type="text"
            required=""
            value={form?.login}
            onChange={OnInputChange}
          />
          <span className="icons i1">
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>
          <div className="error">{errorObj?.login}</div>
        </div>

        <div className="email">
          <input
            placeholder="E Mail Address*"
            name="email"
            type="email"
            required=""
            value={form?.email}
            onChange={OnInputChange}
          />
          <span className="icons i1">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </span>
          <div className="error">{errorObj?.email}</div>
        </div>
        <div className="email">
          <input
            placeholder="Password*"
            name="password"
            type="password"
            required=""
            value={form?.password}
            onChange={OnInputChange}
          />
          <span className="icons i2">
            <i className="fa fa-lock" aria-hidden="true"></i>
          </span>
          <div className="error">{errorObj?.password}</div>
        </div>
        <input
          type="button"
          value="Create Account"
          name="register"
          onClick={sendData}
        />
        <h7>
          Already have an account?{" "}
          <NavLink to={"/signin"} style={{ color: "#5D44FF" }}>
            Login
          </NavLink>
        </h7>
      </form>

      <br />
      <br />
      <br />
      <br />
      {showModal && (
        <Modal
          title=""
          width={"800px"}
          closable={true}
          open={showModal}
          footer=""
          onCancel={closeModal}
          // onOk={onConfrim}
        >
          <div className="privacy-security-term">
            <div align="center" style={{ "text-align": "center" }}>
              <img src={popupImg} />
            </div>
            <h2>Congratulations! Your account is ready to use</h2>
            <p style={{ "text-align": "center" }}>
              Prepairing your account, we are taking you in...
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Step1;
