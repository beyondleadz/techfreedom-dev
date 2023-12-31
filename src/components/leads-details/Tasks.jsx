import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment/moment";

import {
  Modal,
  Checkbox,
  Input,
  Divider,
  Button,
  Select,
  DatePicker,
} from "antd";
import { emptyErrorObj, resetSubmitLeadRemarkss, submitLeadRemarks } from "../../actionCreator/leadDetailsActionCreator";
import TrialModal from "../../common/TrialModal";
import { SAVE_CLIENT_REMARKS_ERROR } from "../../actionType/leadDetailsType";
import { Navigate, redirect, useNavigate } from "react-router";

const Tasks = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [isApiFailed, setIsApiFailed] = useState({
    isFailed: false,
    errObj: {},
  });
  const errObj = useSelector((state) => state.LeadDetailsReducer.errObj);

  const leadDetail = useSelector(
    (state) => state.LeadDetailsReducer.leadDetails
  );
  const leadRemarksSubmitted = useSelector(
    (state) => state.LeadDetailsReducer.saveleadRemarks
  );
  const leadRemarksDetails = useSelector(
    (state) => state.LeadDetailsReducer.leadRemarksDetails
  );
  const leadTasksStatusListing = useSelector(
    (state) => state.LeadDetailsReducer.leadTasksStatusList
  );

  useEffect(() => {
    // console.log(Object.keys(errObj).length,'Object.keys(errObj).lengths')
     if (Object.keys(errObj).length) {
       setIsApiFailed({ isFailed: true, errObj: errObj });
     }
     if (!Object.keys(errObj).length) {
       setIsApiFailed({ isFailed: false, errObj: errObj });
     }
   }, [Object.keys(errObj).length]);

  useEffect(() => {
    if (Object.keys(leadRemarksSubmitted).length) {
      setShowModal(true);
    }      
  }, [leadRemarksSubmitted]);

  const formIntialValue = {
    interactionDate: { disabled: true, value: "", status: null },
    isContactBackRequired: { disabled: true, value: "", status: null },
    isContacted: { disabled: true, value: "", status: null },
    isToDisplay: { disabled: true, value: "", status: null },
    title: { disabled: true, value: '', status: null },
    status: { disabled: true, value: '', status: null },
    remarks: { disabled: true, value: "", status: null },
  };

  const { RangePicker } = DatePicker;
  const [errorForm, setErrorForm] = useState(formIntialValue);
  const [form, setForm] = useState(formIntialValue);
  const [isContactBackRequired, setIsContactBackRequired] = useState(false);
  const [isContacted, setIsContacted] = useState(false);
  const [isToDisplay, setIsToDisplay] = useState(false);
  const { TextArea } = Input;
  const enableField = (ele) => {
    setErrorForm({
      ...errorForm,
      [ele.target.name]: ele.target.checked
        ? { ...errorForm[ele.target.name], disabled: !ele.target.checked }
        : { value: "", disabled: !ele.target.checked },
    });
  };

  useEffect(() => {
    if(!Object.keys(leadRemarksDetails).length) return
   // console.log(leadRemarksDetails,'leadRemarksDetails',moment(leadRemarksDetails?.interactionDate))
    setForm({
      interactionDate: { disabled: true, value: moment(leadRemarksDetails?.interactionDate), status: null },
      isContactBackRequired: { disabled: true, value: (leadRemarksDetails)?leadRemarksDetails.isContactBackRequired:false, status: null },
      isContacted: { disabled: true, value: (leadRemarksDetails)?leadRemarksDetails?.isContacted:false, status: null },
      isToDisplay: { disabled: true, value: (leadRemarksDetails)?leadRemarksDetails.isToDisplay:false, status: null },
      title: { disabled: true, value: leadRemarksDetails?.title, status: null },
      status: { disabled: true, value: leadRemarksDetails?.status, status: null },
      remarks: { disabled: true, value: leadRemarksDetails?.remarks, status: null },
    })
  },[leadRemarksDetails])

  const onInputChange = (ele) => {
    setForm({
      ...form,
      [ele.target.name]: { ...form[ele.target.name], value: ele.target.value },
    });
  };

  const onSelectChange = (value) => {
    setForm({
      ...form,
      title: { ...form["title"], value: value },
    });
  };
  const onStatusChange=(value)=>{
    setForm({...form, status:{...form["status"],value:value}});
  }

  const onDateChange = (value, dateString) => {
    //console.log("Selected Time: ", moment(value).format('YYYY-MM-DDTHH:mm:ss.sssZ'));
    //console.log("Formatted Selected Time: ", dateString);
    setForm({
      ...form,
      interactionDate: { ...form["interactionDate"], value: value },
    });
  };

  const onOk = (value) => {
    // console.log("onOk: ", value);
    
  };

  const saveRemarks = () => {
    let payload = {};
    const newDate = new Date(form.interactionDate.value);
    const formattedDate = moment(newDate).format('YYYY-MM-DDTHH:mm:ss')+'Z'
    payload.remarks = form.remarks.value;
    payload.interactionDate = formattedDate;
    payload.isContactBackRequired = false;//form?.isContactBackRequired?.value;
    payload.isContacted = false;//form.isContacted.value;
    payload.isToDisplay =form.status.value=="open"?true:false;// form.isToDisplay.value;
    payload.status=form.status.value;
    payload.title=form.title.value;
    payload.lead = leadDetail;
    payload.update = Object.keys(leadRemarksDetails).length ? true : false;
    payload.id = Object.keys(leadRemarksDetails).length ? leadRemarksDetails?.id : "";
    //console.log(payload, "submit remarks");
    dispatch(submitLeadRemarks(payload));
  };

  const onCheckChange = (e, type) => {
    if (type === "isToDisplay") {
      setIsToDisplay(e.target.checked);
      setForm({
        ...form,
        isToDisplay: { ...form["isToDisplay"], value: e.target.checked },
      });
    } else if (type === "isContactBackRequired") {
      setIsContactBackRequired(e.target.checked);
      setForm({
        ...form,
        isContactBackRequired: {
          ...form["isContactBackRequired"],
          value: e.target.checked,
        },
      });
    } else if (type === "isContacted") {
      setIsContacted(e.target.checked);
      setForm({
        ...form,
        isContacted: { ...form["isContacted"], value: e.target.checked },
      });
    } else {
    }
  };

  const closeModal = () => {
    setShowModal(false);
    dispatch(resetSubmitLeadRemarkss());
    dispatch(emptyErrorObj());    
    //navigate('/lead-details/'+leadDetail?.id)
  };

  return (
    <>
    <div className="mt-3">
    <p>Add/Edit Task</p>
      <div className="errorformcontainer">
      <div className="form">
      <div className="formcol1">Title</div>
          <div className="formcol2">
          <Select
            name="title"
            value={form.title}
            showSearch
            placeholder="Title"
            optionFilterProp="children"
            onChange={onSelectChange}
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
                label: "Follow up",
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
      <div className="form">
          <div className="formcol1">Status</div>
          <div className="formcol2">
            <Select
              showSearch
              value={form.status}
              placeholder="Task Status"
              optionFilterProp="children"
              // onChange={onChange}
              // onSearch={onSearch}
              onChange={onStatusChange}
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
          <div className="formcol1">Lead Remarks</div>
          <div className="formcol2">
            <TextArea
              name="remarks"
              value={form?.remarks?.value}
              rows={2}
              maxLength={100}
              onChange={onInputChange}
            />
            {/* <Select
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
            /> */}
          </div>
        </div>
        <div className="form">
          <div className="formcol1">Date and Time</div>
          <div className="formcol2">
            <DatePicker
              format="YYYY-MM-DD HH:mm"
              // disabledDate={disabledDate}
              // disabledTime={disabledDateTime}
              showTime={{
                format: "HH:mm",
              }}
              value={form?.interactionDate?.value}
              onChange={onDateChange}
              onOk={onOk}
            />
            {/* <RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      onChange={onDateChange}
      onOk={onOk}
    /> */}
          </div>
        </div>
        {/* <div className="form">
          <div className="formcol1"> </div>
          <div className="formcol2">
            <span>
              {" "}
              <Checkbox
                name="isContactRequired"
                onChange={(ele) => onCheckChange(ele, "isContactBackRequired")}
                checked={form?.isContactBackRequired?.value}
              >
                Is Contact Back Required
              </Checkbox>
            </span>
          </div>
        </div>
        <div className="form">
          <div className="formcol1"> </div>
          <div className="formcol2">
            <span>
              {" "}
              <Checkbox
                name="isContacted"
                onChange={(ele) => onCheckChange(ele, "isContacted")}
                checked={form?.isContacted?.value}
              >
                Is Contacted
              </Checkbox>
            </span>
          </div>
        </div>
        <div className="form">
          <div className="formcol1"> </div>
          <div className="formcol2">
            <span>
              {" "}
              <Checkbox
                name="isToDisplay"
                onChange={(ele) => onCheckChange(ele, "isToDisplay")}
                checked={form?.isToDisplay?.value}
              >
                Is To Display
              </Checkbox>
            </span>
          </div>
        </div> */}
        {/* <div className="form leadbox">
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
          <span className="mr-2"><button className="btn btn-light">15 min</button></span>
        <span className="mr-2"><button className="btn btn-light">30 min</button></span>
        <span className="mr-2"><button className="btn btn-light">1 Hr</button></span>
        <span className="mr-2"><button className="btn btn-light">2 Hr</button></span>
          </div>
        </div> 
         <div className="form">
          {console.log(errorForm, "skljfsljfklsd")}
        <div className="formcol1"> </div>
        <div className="formcol2">
        <span> <Checkbox name="telephone" onChange={enableField}>
                  Email
                </Checkbox></span>
                <span>
                <Checkbox name="telephone" onChange={enableField}>
                SMS
                </Checkbox>
              </span> 
               </div>
              </div>
               */}

        {/* <div className="formcol1">
                <Checkbox name="telephone" onChange={enableField}>
                  Is to display
                </Checkbox>
              </div> */}
        <div className="mt-3">
          <span className="mt-3 mr-3">
            {" "}
            <Button className="btn-info" type="primary">
              Cancel
            </Button>
          </span>
          <span className="mt-3 mr-3">
            <Button className="btn-info" type="primary" onClick={saveRemarks}>
              Save
            </Button>
          </span>
        </div>
      </div>
    </div>
    {isApiFailed.isFailed ? (
            <TrialModal
              openModal={isApiFailed.isFailed}
              closeModal={closeModal}
              buttonText="OK"
              title=""
              modalBody={
                <div id="small-dialog2" style={{'textAlign':'left'}}>
                  {isApiFailed.errObj[SAVE_CLIENT_REMARKS_ERROR] &&
                    isApiFailed.errObj[SAVE_CLIENT_REMARKS_ERROR].message}
                </div>
              }
              modalWidth="400px"
            />
          ) : (
            ""
          )}

    {showModal ? (
      <TrialModal
        openModal={showModal}
        closeModal={closeModal}
        redirect={true}
        redirectToSignup={closeModal}
        buttonText="OK"
        modalBody={
          <div id="small-dialog2">
            <p style={{ color: "#0000FF" }}>
              Remarks Submitted.
            </p>            
          </div>
        }
        modalWidth="400px"
      />
    ) : (
      ""
    )}
    </>
  );
};
export default Tasks;
