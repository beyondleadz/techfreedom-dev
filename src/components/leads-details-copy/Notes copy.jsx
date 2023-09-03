import React, { useEffect, useState, useMemo } from "react";
import { Modal, Checkbox, Input, Divider, Button, Select } from "antd";

const Notes = ()=>{
    
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
    
      const [errorForm, setErrorForm] = useState(formIntialValue);
      const { TextArea } = Input;
      const onInputChange = () => {};
    return(
        <div><p>Create or Edit a Client Note</p>
         <div className="errorformcontainer">
      <div className="form">
        {/* {console.log(errorForm, "skljfsljfklsd")} */}
        <div className="formcol1">Title Full Name</div>
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
        {/* {console.log(errorForm, "skljfsljfklsd")} */}
        <div className="formcol1">Designation</div>
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
        <div className="formcol1">Phone</div>
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
        <div className="formcol1">Mobile</div>
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
        <div className="formcol1">Email</div>
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
        <div className="formcol1">Company Name</div>
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
            placeholder="Website"
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
        </div>
        </div>
    )
}
export default Notes