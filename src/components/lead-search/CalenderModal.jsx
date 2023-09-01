import React, { useEffect, useState, useMemo } from "react";
import { filter } from "lodash";
import { Table, Input, Button, Modal,DatePicker } from "antd";
import { useNavigate } from "react-router";

import moment from "moment";
import dayjs from "dayjs";
import { useSelector, useDispatch } from "react-redux";
import {
  //getLeadExecutiveNotes,
  getLeadExecutiveRemarks,
} from "../../actionCreator/leadListingActionCreater";
import { getLeadRemarksDetails,submitLeadRemarks } from "../../actionCreator/leadDetailsActionCreator";
import { Badge, Calendar } from "antd";

const CalenderModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showCal, setShowCal] = useState(false);
  const notesFilterList = useSelector(
    (state) => state.leadListingReducer.leadExecutiveNotes
  );
  const remarksFilterList = useSelector(
    (state) => state.leadListingReducer.leadExecutiveRemarks
  );
  const leadRemarksDetails = useSelector(
    (state) => state.LeadDetailsReducer.leadRemarksDetails
  );

  useMemo(() => {
    //dispatch(getLeadExecutiveNotes());
    dispatch(getLeadExecutiveRemarks());
  }, []);

  const showTaskDetails = (id) => {
    setShowCal(!showCal);
    dispatch(getLeadRemarksDetails(id));
  };
  const viewLeadsData = (id) => {
    navigate("/lead-details/" + id);
  };

  const closeTaskModal = () => {
    setShowCal(false);
  };

  //console.log(notesFilterList,'notesFilterListnotesFilterList')
  const monthCellRender = (value) => {
    //const num = getMonthData(value);
    //const filteredData = filter(notesFilterList, (p) => p.lastUpdated ? moment(p.lastUpdated).utc().format('YYYY-MM')=== dayjs(value).format('YYYY-MM'):"");
    const filteredData = filter(remarksFilterList, (p) =>
      p.interactionDate
        ? moment(p.interactionDate).utc().format("YYYY-MM") ===
          dayjs(value).format("YYYY-MM")
        : ""
    );
    // return num ? (
    //   <div className="notes-month">
    //     <section>{num}</section>
    //     <span>Backlog number</span>
    //   </div>
    // ) : null;

    return (
      <ul className="events">
        {filteredData.map((item) => (
          <li key={item.id} onClick={() => showTaskDetails(item.id)}>
            <Badge status="success" text={item.remarks} />
          </li>
        ))}
        {/* {filteredData.map((item) => (
          <li key={item.id}>
            <Badge status="success" text={item.notefor}/>
          </li>
        ))} */}
      </ul>
    );
  };
  const dateCellRender = (value) => {
    //const filteredData = filter(notesFilterList, (p) => p.lastUpdated ? moment(p.lastUpdated).utc().format('YYYY-MM')=== dayjs(value).format('YYYY-MM'):"");
    const filteredData = filter(remarksFilterList, (p) =>
      p.interactionDate
        ? moment(p.interactionDate).utc().format("YYYY-MM-DD") ===
          dayjs(value).format("YYYY-MM-DD")
        : ""
    );
    //const listData = getListData(value);notefor

    return (
      <ul className="events">
        {filteredData.map((item) => (
          <li key={item.id} onClick={() => showTaskDetails(item.id)}>
            <Badge status="success" text={item.remarks} />
          </li>
        ))}
        {/* {filteredData.map((item) => (
          <li key={item.id}>
            <Badge status="success" text={item.notefor}/>
          </li>
        ))} */}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  const onPanelChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const onOk =async (value) => {
    console.log("onOk: ", value);
    let payload = leadRemarksDetails;
    const newDate = new Date(value);
    const formattedDate = moment(newDate).format('YYYY-MM-DDTHH:mm:ss')+'Z'
    payload.interactionDate = formattedDate;
    payload.update = true;
    //console.log(payload, "update remarks");
    await dispatch(submitLeadRemarks(payload));  
    await dispatch(getLeadExecutiveRemarks());  
  };
  return (
    <>
      <div id="taskcalender"><Calendar onPanelChange={onPanelChange} cellRender={cellRender} /></div>
      {showCal && (
        <Modal
          title="Task Details"
          width={"500px"}
          closable={true}
          open={showCal}
          onCancel={closeTaskModal}
          // onOk={onConfrimCalenderModal}
          footer={[
            <Button
              key="submit"
              type="primary"
              onClick={() => viewLeadsData(leadRemarksDetails?.lead?.id)}
            >
              View Lead
            </Button>,
          ]}
        >
          <div class="col-md-12">
            <div class=" row mt-3">
              <span class="col-md-4 fs-14 ">Remarks</span>
              <span class="col namedc"> {leadRemarksDetails?.remarks}</span>
            </div>
            <div class=" row mt-2">
              <span class="col-md-4 fs-14">Task Status </span>
              <span class="col namedc"> Open</span>
            </div>
            <div class=" row mt-3">
              <span class="col-md-4 fs-14 ">Reschedule Date</span>
              <span class="col namedc"><DatePicker
              format="YYYY-MM-DD HH:mm"
              // disabledDate={disabledDate}
              // disabledTime={disabledDateTime}
              showTime={{
                format: "HH:mm",
              }}
              //value=""
              // onChange={onDateChange}
              onOk={onOk}
            /></span>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
export default CalenderModal;
