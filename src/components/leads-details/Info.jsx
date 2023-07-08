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
    status: { disabled: true, value: leadDetail?.status==1?'Active':'Inactive', status: null },
    rate: { disabled: true, value: leadDetail?.rate, status: null },
    phone: { disabled: false, value: leadDetail?.phoneNo, status: null },
    address: { disabled: false, value: leadDetail?.address, status: null },
    website: { disabled: false, value: leadDetail?.website, status: null },
    company: { disabled: false, value: leadDetail?.companyName, status: null },
    industry: { disabled: false, value: leadDetail?.industryText, status: null },
    title: { disabled: false, value: leadDetail?.title, status: null },
    fullname: { disabled: false, value: (leadDetail?.fullname)?leadDetail.fullname:leadDetail.firstname+" "+leadDetail.lastname},
    email: { disabled: false, value: leadDetail?.emailId, status: null },
    source: { disabled: false, value: leadDetail?.leadSource, status: null },
    mobile:{ disabled: false, value: leadDetail?.mobile, status: null },
    description:{ disabled: false, value: leadDetail?.description, status: null },
  };

  const dispatch = useDispatch();
  const { TextArea } = Input;
  const [openErrorForm, setOpenErrorForm] = useState(false);
  const [isApiFailed, setIsApiFailed] = useState(false);
  const [openTagModal, setOpenTagModal] = useState(false);
  const [errorForm, setErrorForm] = useState(formIntialValue);
  const [form, setForm] = useState(formIntialValue);

  const updateLead=()=>{
   // console.log(form,'formform');
    let payload=leadDetail;
    payload.fullname=form.fullname.value;
    payload.title=form.title.value;
    payload.emailId=form.email.value;
    payload.phoneNo=form.phone.value;
    payload.address=form.address.value;
    payload.website=form.website.value;
    payload.companyName=form.company.value;
    payload.industry=form.industry.value;
    payload.leadSource=form.source.value;
    payload.mobile=form.mobile.value;
    payload.description=form.description.value;
    payload.rate=form.rate.value;
    payload.status=form.status.value;
    //console.log(payload,'form on save');
    dispatch(updateLeadDetails(payload));
  }

  const onInputChange = (ele) => {
    setForm({
      ...form,
      [ele.target.name]:{...form[ele.target.name], value:ele.target.value},
    });
  };

  const onSelectChange = (value) => {
    setForm({
      ...form,
      rate: { ...form["rate"], value: value },
    });
  };
  const onSelectChange1 = (value) => {
    setForm({
      ...form,
      status: { ...form["status"], value: value },
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
            value={form.status}
            placeholder="Select"
            optionFilterProp="children"
            onChange={onSelectChange1}
            // onChange={onChange}
            // onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "Active",
              },
              {
                value: "0",
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
            value={form.rate}
            placeholder="Select"
            optionFilterProp="children"
            onChange={onSelectChange}
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
