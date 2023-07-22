import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import { Timeline, Button, Select, DatePicker, Space} from "antd";
// import { Timeline, Button, Select } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import ActivityTimecopy from "./ActivityTimecopy";
import moment from "moment";


const { RangePicker } = DatePicker;
const ActivityTime = ({setActiveTab}) => {

  const [itemData, setItemData] = useState([]);
  const [itemOverviewDueData, setItemOverviewDueData] = useState([]);
  const [activityData, setActivityData] = useState([]);

  const leadNotes = useSelector((state) => state.LeadDetailsReducer.leadNotes);
  const leadRemarks = useSelector((state) => state.LeadDetailsReducer.leadRemarks);

  const editTimeline=(id,isLead)=>{
      if(isLead){
        setActiveTab(3,id,'editnote');
      }else{
        setActiveTab(4,id,'editremarks');
      }
  }
  const deleteTimeline=(id,isLead)=>{
    if(isLead){
      setActiveTab(1,id,'deletenote');
    }else{
      setActiveTab(1,id,'deleteremarks');
    }
  }
  
  const switchToTaskTab=()=>{
    setActiveTab(4,'','Add Task');
  }

  const colorActivityObj={"call":["act","phone","green"],"Email":["email","envelope","green"],"meeting":["meet","handshake","red"],"followup":["email","envelope","gray"],"Chat":["app","mobile","gray"],"Whatsapp":["whatsapp","whatsapp","red"],"Display":["act","phone","green"],"Contact":["email","envelope","green"],"Contact Back":["email","envelope","green"],"Custom":["email","envelope","green"],}

  
  
  useEffect(() => {
//     const groupLeadNotesDataByStatus =  _.groupBy(leadNotes, function(b) { return b.lastUpdated});
//     const groupLeadRemarksDataByStatus =  _.groupBy(leadRemarks, function(b) { return b.interactionDate});
// console.log(groupLeadNotesDataByStatus,'groupLeadNotesDataByStatus');
// console.log(groupLeadRemarksDataByStatus,'groupLeadRemarksDataByStatus');
const activityItems=[];
    Object.entries(colorActivityObj).map((key,index)=>{
     return activityItems.push({value:key,label:key});
    });
    
setActivityData(activityItems);

    const finalData=([...leadNotes,...leadRemarks]);
    if (finalData.length) {
      let items = [];let overdueItems = [];
      let today = new Date();
      let formattedTodayData = moment(today).utc().format('YYYY-MM-DD')
      finalData.forEach((item,index) => {        
        let isLeadNote=item?.note?1:0;
        let title="";let description="";let activityTime="";
        if(isLeadNote){
          title=item.note;
          description=item.notefor;
          activityTime=item.lastUpdated;          
        }else{
          //isContacted isToDisplay
          if(item.isContacted){
            title="Contact";
          }else if(item.isToDisplay){
            title="Display";
          }else{
            title=item.isContactBackRequired?"Contact Back":"Custom";
          }
          description=item.remarks;
          activityTime=item.interactionDate;
        }
        //console.log(isLeadNote,item);
        let savedformattedDate="";
        if(activityTime){
        let savedDate = new Date(activityTime)
        savedformattedDate = moment(savedDate).utc().format('YYYY-MM-DD');
        }
        let obj = {};
       // console.log(colorActivityObj[title],'colorActivityObj?.title',title)
        //console.log(formattedTodayData,"===",savedformattedDate,activityTime)
        obj.color =colorActivityObj[title]?.[2];  
        obj.dot =
        <div><a href="#" className={`btn btn-${colorActivityObj[title]?.[0]} btn-sm btn-circle`} > <i className={`las la-${colorActivityObj[title]?.[1]} fs-14`}></i></a></div>;
      obj.children =
        <div className="mt-3"><div className="col-md-12"><div id="steps" className=" row mt-3"> <div className="col-md-8 text-align-left fs-14 font-weight-normal " style={{"textTransform": "capitalize"}}>{title}
        <h6>{description}</h6></div>    <div className="col-sm-4 text-align-right"><a href="#" className="btn fs-20 " onClick={()=>editTimeline(item.id,isLeadNote)}> <i className="las la-edit "></i></a> <a href="#" className="btn fs-20 " onClick={()=>deleteTimeline(item.id,isLeadNote)}> <i className="las la-trash"></i></a><div className="fs-12 mt-1">{savedformattedDate}</div></div></div></div></div>;        
        if(formattedTodayData===savedformattedDate){         
        items.push(obj);
        }else{
        overdueItems.push(obj);
        }
      });
      setItemOverviewDueData(overdueItems);
      setItemData(items);
    }
  }, [leadNotes,leadRemarks]);

    return(
<>
{console.log(getActivitiesList,'colorActivityObj')}
<div className="row mb-4 pb-4 pt-4">
    <div className="col-sm-2 mr-4 "><div className="form">
        {/* <div className="formcol1"></div> */}
        <div className="formcol2 ">
          <Select 
            showSearch
            placeholder="Activities"
            optionFilterProp="children"
            // onChange={onChange}
            // onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={activityData}
          />
        </div>
        </div></div>
        
    <div className="col-md-5"><RangePicker /></div>
    <div className="col-md-1 "><button className="btn btn-info btn-sm ">Submit</button></div>
    <div className="col-md-3  float-right "><button className="btn btn-info btn-sm " onClick={switchToTaskTab}><i className="las la-plus"></i>Add New Task</button></div>
</div>

<div>
  {/* <ActivityTimecopy /> */}
  <div className="mb-4 fs-14 font-weight-bold">Overdue Activity</div>

<Timeline
items={itemData}
/>
</div>
<div className="mb-4 pb-2 fs-14 font-weight-bold">Past Activity</div>   
<Timeline
items={itemOverviewDueData}
/>
  
  </>
)}

export default ActivityTime;