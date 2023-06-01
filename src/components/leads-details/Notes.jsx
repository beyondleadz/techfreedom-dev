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
      
      
      <div className="form">
        <div className="formcol1">Select</div>
        <div className="formcol2">
          <Select 
            showSearch
            placeholder="-- Dropdown --"
            optionFilterProp="children"
            // onChange={onChange}
            // onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: "call",
                label: "Call",
              },
              {
                value: "email",
                label: "Email",
              },
              {
                value: "meeting",
                label: "Meeting",
              },
              {
                value: "followup",
                label: "Follow up ",
              },
              {
                value: "chat",
                label: "Chat",
              },
              {
                value: "whatsapp",
                label: "Whatsapp",
              },
            ]}
          />
        </div>

      </div>
      <Divider dashed={true} />
      <div className="form">
        <div className="formcol1">Type Note</div>
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
              <span className="mt-3 mr-3"> <Button type="primary">Cancel</Button></span>
              <span className="mt-3 mr-3"><Button type="primary">Save</Button></span>
              </div>
        </div>
      
    )
}
export default Notes