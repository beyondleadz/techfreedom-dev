import React, { useEffect, useState, useMemo } from "react";
import { filter } from "lodash";
import moment from "moment";
import dayjs from 'dayjs';
import { useSelector, useDispatch } from "react-redux";
import {
  getLeadExecutiveNotes,
  getLeadExecutiveRemarks
} from "../../actionCreator/leadListingActionCreater";
import { Badge, Calendar } from 'antd';
const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.',
        },
        {
          type: 'success',
          content: 'This is usual event.',
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event.',
        },
        {
          type: 'success',
          content: 'This is usual event.',
        },
        {
          type: 'error',
          content: 'This is error event.',
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event',
        },
        {
          type: 'success',
          content: 'This is very long usual event。。....',
        },
        {
          type: 'error',
          content: 'This is error event 1.',
        },
        {
          type: 'error',
          content: 'This is error event 2.',
        },
        {
          type: 'error',
          content: 'This is error event 3.',
        },
        {
          type: 'error',
          content: 'This is error event 4.',
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const CalenderModal = () => {
  const dispatch = useDispatch();
  const notesFilterList = useSelector((state) => state.leadListingReducer.leadExecutiveNotes);
  const remarksFilterList = useSelector((state) => state.leadListingReducer.leadExecutiveRemarks);
  

  useMemo(() => {
    dispatch(getLeadExecutiveNotes());  
    dispatch(getLeadExecutiveRemarks());
  }, []);

  //console.log(notesFilterList,'notesFilterListnotesFilterList')
  const monthCellRender = (value) => {
    //const num = getMonthData(value); 
    const filteredData = filter(notesFilterList, (p) => moment(p.lastUpdated).utc().format('YYYY-MM')=== dayjs(value).format('YYYY-MM'));
    const remarksFilteredData = filter(remarksFilterList, (p) => moment(p.interactionDate).utc().format('YYYY-MM')=== dayjs(value).format('YYYY-MM'));
    // return num ? (
    //   <div className="notes-month">
    //     <section>{num}</section>
    //     <span>Backlog number</span>
    //   </div>
    // ) : null;

    return (
      <ul className="events">
        {remarksFilteredData.map((item) => (
          <li key={item.id}>
            <Badge status="success" text={item.remarks}/>
          </li>
        ))}
        {filteredData.map((item) => (
          <li key={item.id}>
            <Badge status="success" text={item.notefor}/>
          </li>
        ))}
      </ul>
    );
  };
  const dateCellRender = (value) => {
    const filteredData = filter(notesFilterList, (p) => moment(p.lastUpdated).utc().format('YYYY-MM-DD')=== dayjs(value).format('YYYY-MM-DD'));
    const remarksFilteredData = filter(remarksFilterList, (p) => moment(p.interactionDate).utc().format('YYYY-MM')=== dayjs(value).format('YYYY-MM'));
    //const listData = getListData(value);notefor

    return (
      <ul className="events">
        {remarksFilteredData.map((item) => (
          <li key={item.id}>
            <Badge status="success" text={item.remarks}/>
          </li>
        ))}
        {filteredData.map((item) => (
          <li key={item.id}>
            <Badge status="success" text={item.notefor}/>
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  
  const onPanelChange=(date,dateString)=>{
    console.log(date,dateString);
  }
  return <Calendar onPanelChange={onPanelChange}  cellRender={cellRender} />;
};
export default CalenderModal;