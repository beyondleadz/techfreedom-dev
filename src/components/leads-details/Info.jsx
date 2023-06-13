import React, { useEffect, useState, useMemo } from "react";
import { Modal, Checkbox, Input, Divider, Button, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";

import _ from "lodash";


const Info = () => {
  const leadDetail= useSelector(
    (state) => state.LeadDetailsReducer.leadDetails
  );
  const formIntialValue = {
    phone: { disabled: true, value: leadDetail?.phoneNo, status: null },
    address: { disabled: true, value: "", status: null },
    city: { disabled: true, value: "", status: null },
    zip: { disabled: true, value: "", status: null },
    employee: { disabled: true, value: "", status: null },
    title: { disabled: true, value: leadDetail?.title, status: null },
    fullname: { disabled: true, value: leadDetail?.fullname, status: null },
    email: { disabled: true, value: leadDetail?.emailId, status: null },
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
  const onInputChange = () => {};
  return (
    <div className="errorformcontainer mt-3">
      <div className="form">
        {console.log(errorForm, "skljfsljfklsd")}
        <div className="formcol1">Full Name</div>
        <div className="formcol2">
          <Input
            name="fullname"
            value={errorForm?.fullname?.value}
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
            name="designation"
            value={errorForm?.title?.value}
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
            value={errorForm?.phone?.value}
            placeholder="Phone"
            onChange={onInputChange}
          />
        </div>
      </div>

      <div className="form">
        <div className="formcol1">Mobile</div>
        <div className="formcol2">
          <Input
            name="zip"
            value={errorForm?.zip?.value}
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
            value={errorForm?.email?.value}
            placeholder="Email"
            onChange={onInputChange}
          />
        </div>
      </div>

      <div className="form">
        <div className="formcol1">Company Name</div>
        <div className="formcol2">
          <Input
            name="website"
            value={errorForm?.website?.value}
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
            value={errorForm?.address?.value}
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
            value={errorForm?.website?.value}
            placeholder="Website"
            onChange={onInputChange}
          />
        </div>
      </div>
      <div className="form">
        <div className="formcol1">Industry</div>
        <div className="formcol2">
          <Input
            name="website"
            value={errorForm?.website?.value}
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
                value: "one",
                label: "One",
              },
              {
                value: "two",
                label: "Two",
              },
              {
                value: "three",
                label: "Three",
              },
            ]}
          />
        </div>
      </div>
     
      <div className="form">
        <div className="formcol1">Lead Source</div>
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
        <div className="formcol1">Lead Description</div>
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
      <div className="mt-3">
              <span className="mt-3 mr-3"> <Button className="btn-info" type="primary">Cancel</Button></span>
              <span className="mt-3 mr-3"><Button className="btn-info" type="primary">Save</Button></span>
              </div>
    </div>
  );
};
export default Info;
