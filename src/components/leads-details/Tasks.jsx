import React, { useEffect, useState, useMemo } from "react";
import {
  Modal,
  Checkbox,
  Input,
  Divider,
  Button,
  Select,
  DatePicker,
} from "antd";

const Tasks = () => {
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

 
  const { RangePicker } = DatePicker;
  const [errorForm, setErrorForm] = useState(formIntialValue);
  const { TextArea } = Input;

 
  const onInputChange = () => {};
  const onDateChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  const onOk = (value) => {
    console.log("onOk: ", value);
  };
  return (
    <div className="mt-3">
      <p>Create or Edit a Task</p>
      <div className="errorformcontainer">
        <div className="form">
          <div className="formcol1">Lead Status</div>
          <div className="formcol2">
            <Select
              showSearch
              placeholder="Task Status   "
              optionFilterProp="children"
              // onChange={onChange}
              // onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "open",
                  label: "Open",
                },
                {
                  value: "re-scheduled ",
                  label: "Re-scheduled ",
                },

                {
                  value: "cancelled ",
                  label: "Cancelled ",
                },

                {
                  value: "completed ",
                  label: "Completed ",
                },
              ]}
            />
          </div>
        </div>
        <div className="form">
          {console.log(errorForm, "skljfsljfklsd")}
          <div className="formcol1">Date and time to add tasks</div>
          <div className="formcol2">
          <RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      onChange={onDateChange}
      onOk={onOk}
    />
          </div>
        </div>
        <div className="form leadbox">
          {console.log(errorForm, "skljfsljfklsd")}
          <div className="formcol1">Related with </div>
          
          <div className="formcol2">
            <div>
          <Select
              showSearch
              placeholder="lead"
              optionFilterProp="children"
              // onChange={onChange}
              // onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "lead",
                  label: "lead",
                },
                {
                  value: "re-scheduled ",
                  label: "Re-scheduled ",
                },

                {
                  value: "cancelled ",
                  label: "Cancelled ",
                },

                {
                  value: "completed ",
                  label: "Completed ",
                },
              ]}
            />
            </div>
            <div>
            <Input
              name="telephone"
              value={errorForm?.telephone?.value}
              placeholder="lead name"
              onChange={onInputChange}
            />
            </div>
          </div>
        </div>
        <div className="form">
          {console.log(errorForm, "skljfsljfklsd")}
          <div className="formcol1">Reminder </div>
          <div className="formcol2">
            <Input
              name="telephone"
              value={errorForm?.telephone?.value}
              placeholder="Reminder"
              onChange={onInputChange}
            />
          </div>
        </div>
        {/* <div className="formcol1">
                <Checkbox name="telephone" onChange={enableField}>
                  Is contact back required
                </Checkbox>
              </div> */}
        {/* <div className="formcol1">
                <Checkbox name="telephone" onChange={enableField}>
                Is contacted
                </Checkbox>
              </div> */}

        {/* <div className="formcol1">
                <Checkbox name="telephone" onChange={enableField}>
                  Is to display
                </Checkbox>
              </div> */}
        <div className="mt-3">
          <span className="mt-3 mr-3">
            {" "}
            <Button type="primary">Cancel</Button>
          </span>
          <span className="mt-3 mr-3">
            <Button type="primary">Save</Button>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Tasks;
