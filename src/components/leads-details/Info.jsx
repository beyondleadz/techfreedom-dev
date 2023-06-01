import React, { useEffect, useState, useMemo } from "react";
import { Modal, Checkbox, Input, Divider, Button } from "antd";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteAuthMethod } from "../../services/HttpServices";

import {
  submitErrorForm,
  createCompanyTag,
  emptyErrorObj,
  downloadCompany,
  getCompanyTag,
  resetCompanyTag,
  downloadExecutiveExl,
} from "../../actionCreator/companyDetailsActionCreator";
import { emailRegex } from "../../config";
import { getToken, getUserInfo } from "../../utils/utils";
import TrialModal from "../../common/TrialModal";
import popupImg from "../../assets/images/free-user-login-prompt.jpg.jpeg";
import { useNavigate } from "react-router";

const Info = ()=>{
    const formIntialValue = {
        telephone: { disabled: true, value: "", status: null },
        address: { disabled: true, value: "", status: null },
        city: { disabled: true, value: "", status: null },
        zip: { disabled: true, value: "", status: null },
        employee: { disabled: true, value: "", status: null },
        website: { disabled: true, value: "", status: null },
        name: { disabled: true, value: "", status: null },
        email: { disabled: true, value: "", status: null },
        comment: { disabled: true, value: "", status: null },
      };
    
      const dispatch = useDispatch();
      const { TextArea } = Input;
      const [openErrorForm, setOpenErrorForm] = useState(false);
      const [isApiFailed, setIsApiFailed] = useState(false);
      const [openTagModal, setOpenTagModal] = useState(false);
      const [tagValues, setTagValues] = useState({
        tagname: "",
        description: "",
        tagError: "",
      });
      const [errorForm, setErrorForm] = useState(formIntialValue);
      const onInputChange=()=>{}
    return(
        <div className="errorformcontainer">
       
        <div className="form">
          {console.log(errorForm, "skljfsljfklsd")}
          <div className="formcol1">
                         Telephone
          </div>
          <div className="formcol2">
            <Input
              name="telephone"
              value={errorForm?.telephone?.value}
              placeholder="Telephone"
             
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="form">
          {console.log(errorForm, "skljfsljfklsd")}
          <div className="formcol1">
                         Telephone
          </div>
          <div className="formcol2">
            <Input
              name="telephone"
              value={errorForm?.telephone?.value}
              placeholder="Telephone"
             
              onChange={onInputChange}
            />
          </div>
        </div>
       

        <div className="form">
          <div className="formcol1">
           
              City
       
          </div>
          <div className="formcol2">
            <Input
              name="city"
              value={errorForm?.city?.value}
              placeholder="City"
              onChange={onInputChange}
            />
          </div>
        </div>

        <div className="form">
          <div className="formcol1">
           
              Zip/Pin code
           
          </div>
          <div className="formcol2">
            <Input
              name="zip"
              value={errorForm?.zip?.value}
              placeholder="Zip/Pin code"
             
              onChange={onInputChange}
            />
          </div>
        </div>

        <div className="form">
          <div className="formcol1">
          
              No. of Employees
         
          </div>
          <div className="formcol2">
            <Input
              name="employee"
              value={errorForm?.employee?.value}
              placeholder="No. of Employees"
             
              onChange={onInputChange}
            />
          </div>
        </div>

        <div className="form">
          <div className="formcol1">
          
              Website
         
          </div>
          <div className="formcol2">
            <Input
              name="website"
              value={errorForm?.website?.value}
              placeholder="Website"
             
              onChange={onInputChange}
            />
          </div>
        </div>

        <div className="form">
        <div className="formcol1">
                         Address
          </div>
          <div className="formcol2">
            <TextArea
              name="address"
              value={errorForm?.address?.value}
              rows={2}
              maxLength={100}
                        onChange={onInputChange}
            />
          </div>
        </div>
        <div className="form">
          <div className="formcol1">
          
              Website
         
          </div>
          <div className="formcol2">
            <Input
              name="website"
              value={errorForm?.website?.value}
              placeholder="Website"
             
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="form">
          <div className="formcol1">
          
              Website
         
          </div>
          <div className="formcol2">
            <Input
              name="website"
              value={errorForm?.website?.value}
              placeholder="Website"
             
              onChange={onInputChange}
            />
          </div>
        </div>
       
      
       
      </div>
    )
}
export default Info