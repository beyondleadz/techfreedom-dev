import React, { useEffect, useState, useMemo } from "react";
import { Modal, Checkbox, Input, Divider, Button, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { submitLeadNotes,resetSubmitLeadNotes } from "../../actionCreator/leadDetailsActionCreator";
import TrialModal from "../../common/TrialModal";

const Notes = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const leadDetail = useSelector(
    (state) => state.LeadDetailsReducer.leadDetails
  );

  const leadNotesSubmitted = useSelector(
    (state) => state.LeadDetailsReducer.saveleadNotes
  );

  const leadNoteDetails = useSelector(
    (state) => state.LeadDetailsReducer.leadNoteDetails
  );

  
  useEffect(() => {
    if (Object.keys(leadNotesSubmitted).length) {
      setShowModal(true);
    }      
  }, [leadNotesSubmitted]);

  const closeModal = () => {
    setShowModal(false);
    dispatch(resetSubmitLeadNotes());
  };

  const formIntialValue = {
    note: { disabled: true, value: '', status: null },
    noteFor: { disabled: true, value: '', status: null },
    isActive: { disabled: true, value: '', status: null },
    isTask: { disabled: true, value: '', status: null },
  };
  const [form, setForm] = useState(formIntialValue);
  const [errorForm, setErrorForm] = useState(formIntialValue);
  const [isActive, setIsActive] = useState(false);
  const [isTask, setIsTask] = useState(false);
  const { TextArea } = Input;

  useEffect(() => {
    if(!Object.keys(leadNoteDetails).length) return
    console.log(leadNoteDetails,'leadNoteDetails')
    setForm({
      note: { disabled: true, value: leadNoteDetails?.note, status: null },
      noteFor: { disabled: true, value: leadNoteDetails?.notefor, status: null },
      isActive: { disabled: true, value: (leadNoteDetails)?leadNoteDetails?.isActive:false, status: null },
      isTask: { disabled: true, value: (leadNoteDetails)?leadNoteDetails?.isTask:false, status: null },
    })
  },[leadNoteDetails])


  const onInputChange = (ele) => {
    setForm({
      ...form,
      [ele.target.name]: { ...form[ele.target.name], value: ele.target.value },
    });
  };

  const saveNotes = () => {
    let payload = {};
    payload.note = form.note.value;
    payload.notefor = form.noteFor.value;
    payload.isActive = form.isActive.value;
    payload.isTask = form.isTask.value;
    payload.lead = { id: leadDetail?.id };
    payload.update=(leadNoteDetails)?true:false;
    payload.id=leadNoteDetails?.id;
    //console.log(payload, "form on save");
    dispatch(submitLeadNotes(payload));
    
  };

  const onSelectChange = (value) => {
    setForm({
      ...form,
      note: { ...form["note"], value: value },
    });
  };

  const onCheckChange = (e,type) => {
    if(type==='isActive'){
    setIsActive(e.target.checked);
    setForm({
      ...form,
      isActive: { ...form['isActive'], value: e.target.checked },
    });
    }else{
      setIsTask(e.target.checked);
      setForm({
        ...form,
        isTask: { ...form["isTask"], value: e.target.checked },
      });
    }
   
  };
  
  return (
    <>
    <div className="mt-3">
      <p>Add/Edit Note</p>

      <div className="form">
        <div className="formcol1"></div>
        <div className="formcol2 mt-2">
          <Select
            name="note"
            value={form.note}
            showSearch
            placeholder="disposition"
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
            name="noteFor"
            value={form?.noteFor?.value}
            rows={2}
            maxLength={100}
            onChange={onInputChange}
          />
        </div>
      </div>
      <Divider dashed={true} />
      <div className="form">
        <div className="formcol2">
          <Checkbox onChange={(ele)=>onCheckChange(ele,'isActive')} checked={isActive}>
            Is Active
          </Checkbox>
        </div>
      </div>
      <Divider dashed={true} />
      <div className="form">
        <div className="formcol2">
          <Checkbox onChange={(ele)=>onCheckChange(ele,'isTask')} checked={isTask}>
            Is Task
          </Checkbox>
        </div>
      </div>

      <div className="mt-3">
        <span className="mt-3 mr-3">
          {" "}
          <Button className="btn-info" type="primary">
            Cancel
          </Button>
        </span>
        <span className="mt-3 mr-3">
          <Button className="btn-info" type="primary" onClick={saveNotes}>
            Save
          </Button>
        </span>
      </div>
    </div>
    {showModal ? (
      <TrialModal
        openModal={showModal}
        closeModal={closeModal}
        redirect={false}
        buttonText="OK"
        modalBody={
          <div id="small-dialog2">
            <p style={{ color: "#0000FF" }}>
              Notes Submitted.
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
export default Notes;
