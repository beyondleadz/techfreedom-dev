import React, { useEffect, useState, useMemo } from "react";
import { Modal, Checkbox, Input, Divider, Button, Select } from "antd";

const Tasks = ()=>{
    
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
      const enableField = (ele) => {
        setErrorForm({
          ...errorForm,
          [ele.target.name]: ele.target.checked
            ? { ...errorForm[ele.target.name], disabled: !ele.target.checked }
            : { value: "", disabled: !ele.target.checked },
        });
      };
    
      const [errorForm, setErrorForm] = useState(formIntialValue);
      const { TextArea } = Input;
      const onInputChange = () => {};
    return(
        <div><p>Create or Edit a Client Remarks</p>
         <div className="errorformcontainer">
      <div className="form">
        {console.log(errorForm, "skljfsljfklsd")}
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
        {console.log(errorForm, "skljfsljfklsd")}
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

      <div className="formcol1">
                <Checkbox name="telephone" onChange={enableField}>
                  Is contact back required
                </Checkbox>
              </div>
              <div className="formcol1">
                <Checkbox name="telephone" onChange={enableField}>
                Is contacted
                </Checkbox>
              </div>

              <div className="formcol1">
                <Checkbox name="telephone" onChange={enableField}>
                  Is to display
                </Checkbox>
              </div>
              <span className="mt-3 mr-3"> <Button type="primary">Cancel</Button></span>
              <span className="mt-3 mr-3"><Button type="primary">Save</Button></span>
        </div>
        </div>
    )
}
export default Tasks