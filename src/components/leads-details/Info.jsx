import React, { useEffect, useState, useMemo } from "react";
import { Modal, Checkbox, Input, Divider, Button, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";

import _ from "lodash";
import {
  updateLeadDetails
} from "../../actionCreator/leadDetailsActionCreator";

const Info = () => {
  const leadDetail= useSelector(
    (state) => state.LeadDetailsReducer.leadDetails
  );
  const formIntialValue = {
    phone: { disabled: false, value: leadDetail?.phoneNo, status: null },
    address: { disabled: false, value: "", status: null },
    website: { disabled: false, value: "", status: null },
    company: { disabled: false, value: "", status: null },
    industry: { disabled: false, value: "", status: null },
    title: { disabled: false, value: leadDetail?.title, status: null },
    fullname: { disabled: false, value: (leadDetail?.fullname)?leadDetail.fullname:leadDetail.firstname+" "+leadDetail.lastname},
    email: { disabled: false, value: leadDetail?.emailId, status: null },
    source: { disabled: false, value: "", status: null },
    mobile:{ disabled: false, value: "", status: null },
    description:{ disabled: false, value: "", status: null },
  };

  const dispatch = useDispatch();
  const { TextArea } = Input;
  const [openErrorForm, setOpenErrorForm] = useState(false);
  const [isApiFailed, setIsApiFailed] = useState(false);
  const [openTagModal, setOpenTagModal] = useState(false);
  const [errorForm, setErrorForm] = useState(formIntialValue);
  const [form, setForm] = useState(formIntialValue);

  const updateLead=()=>{
    console.log(form,'formform');
    let payload=leadDetail;
    payload.fullname=form.fullname.value;
    payload.title=form.title.value;
    payload.emailId=form.email.value;
    payload.phoneNo=form.phone.value;
    payload.address=form.address.value;
    payload.website=form.website.value;
    payload.company=form.company.value;
    payload.industry=form.industry.value;
    payload.source=form.source.value;
    payload.mobile=form.mobile.value;
    payload.description=form.description.value;
    //console.log(payload,'form on save');
    dispatch(updateLeadDetails(payload));
  }

  const onInputChange = (ele) => {
    setForm({
      ...form,
      [ele.target.name]:{...form[ele.target.name], value:ele.target.value},
    });
  };
  return (
    <div className="errorformcontainer mt-3">
      <div className="form">
        <div className="formcol1">Full Name</div>
        <div className="formcol2">
          <Input
            name="fullname"
            value={form?.fullname?.value}
            placeholder="Full Name"
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="form">
        {console.log(errorForm, "skljfsljfklsd")}
        <div className="formcol1">Designation</div>
        <div className="formcol2">
          <Input
            name="title"
            value={form?.title?.value}
            placeholder="Designation"
            onChange={onInputChange}
          />
        </div>
      </div>

      <div className="form">
        <div className="formcol1">Phone</div>
        <div className="formcol2">
          <Input
            name="phone"
            value={form?.phone?.value}
            placeholder="Phone"
            status=""
            onChange={onInputChange}
          />
        </div>
      </div>

      <div className="form">
        <div className="formcol1">Mobile</div>
        <div className="formcol2">
          <Input
            name="mobile"
            value={form?.mobile?.value}
            placeholder="Mobile"
            onChange={onInputChange}
          />
        </div>
      </div>

      <div className="form">
        <div className="formcol1">Email</div>
        <div className="formcol2">
          <Input
            name="email"
            value={form?.email?.value}
            placeholder="Email"
            onChange={onInputChange}
          />
        </div>
      </div>

      <div className="form">
        <div className="formcol1">Company Name</div>
        <div className="formcol2">
          <Input
            name="company"
            value={form?.company?.value}
            placeholder="Company Name"
            onChange={onInputChange}
          />
        </div>
      </div>

      <div className="form">
        <div className="formcol1">Address</div>
        <div className="formcol2">
          <TextArea
            name="address"
            value={form?.address?.value}
            rows={2}
            maxLength={100}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="form">
        <div className="formcol1">Website</div>
        <div className="formcol2">
          <Input
            name="website"
            value={form?.website?.value}
            placeholder="Website"
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="form">
        <div className="formcol1">Industry</div>
        <div className="formcol2">
          <Input
            name="industry"
            value={form?.industry?.value}
            placeholder="Industry"
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="form">
        <div className="formcol1">Lead Status</div>
        <div className="formcol2">
          <Select
            showSearch
            placeholder="Select"
            optionFilterProp="children"
            // onChange={onChange}
            // onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "active",
                label: "Active",
              },
              {
                value: "inactive",
                label: "Inactive",
              },
              
            ]}
          />
        </div>
      </div>
      <div className="form">
        <div className="formcol1">Lead Rating</div>
        <div className="formcol2">
          <Select
            showSearch
            placeholder="Select"
            optionFilterProp="children"
            // onChange={onChange}
            // onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "Cold",
                label: "Cold",
              },
              {
                value: "Hot",
                label: "Hot",
              },
              {
                value: "Warm",
                label: "Warm",
              },
            ]}
          />
        </div>
      </div>
     
      <div className="form">
        <div className="formcol1">Lead Source</div>
        <div className="formcol2">
          <TextArea
            name="source"
            value={form?.source?.value}
            rows={2}
            maxLength={100}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="form">
        <div className="formcol1">Lead Description</div>
        <div className="formcol2">
          <TextArea
            name="description"
            value={form?.description?.value}
            rows={2}
            maxLength={100}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="mt-3">
              <span className="mt-3 mr-3"> <Button className="btn-info" type="primary">Cancel</Button></span>
              <span className="mt-3 mr-3"><Button className="btn-info" type="primary" onClick={updateLead}>Save</Button></span>
              </div>
    </div>
  );
};
export default Info;
