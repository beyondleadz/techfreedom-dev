import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Timeline, Button, Select, DatePicker, Space} from "antd";
// import { Timeline, Button, Select } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import ActivityTimecopy from "./ActivityTimecopy";


const { RangePicker } = DatePicker;
const ActivityTime = ({setActiveTab}) => {

  const [itemData, setItemData] = useState([]);
  const leadNotes = useSelector((state) => state.LeadDetailsReducer.leadNotes);

  const editLeadNote=(id)=>{
    setActiveTab(3,id,'edit');
  }
  const switchToTaskTab=()=>{
    setActiveTab(4,'','Add Task');
  }
  const deleteLeadNote=(id,leadId)=>{
    setActiveTab(1,id,'delete');
  }
  useEffect(() => {
    if (leadNotes.length) {
      let items = [];
      leadNotes.map((item, index) => {
        let obj = {};
        obj.color = "green";
        obj.dot =
          <div><a href="#" className="btn btn-phone btn-sm btn-circle"> <i className="las la-phone fs-14"></i></a></div>;
        obj.children =
          <div className="mt-3"><div className="col-md-12"><div id="steps" className=" row mt-3"> <div className="col-md-8 text-align-left fs-14 font-weight-normal ">{item.note}
          <h6>{item.notefor}</h6></div>    <div className="col-sm-4 text-align-right"><a href="#" className="btn fs-20 " onClick={()=>editLeadNote(item.id)}> <i className="las la-edit "></i></a> <a href="#" className="btn fs-20 " onClick={()=>deleteLeadNote(item.id)}> <i className="las la-trash"></i></a><div className="fs-12 mt-1">{item.lastUpdated}</div></div></div></div></div>;
        items.push(obj);
      });
      setItemData(items);
    }
  }, [leadNotes]);

    return(
<>

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
            options={[
                {
                    value: "all activities",
                    label: "All Activities",
                  },
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
             
            ]}
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
    items={[
    //   {
    //     color: 'green',
    //     dot: <div><a href="#" className="btn btn-phone btn-sm btn-circle"> <i className="las la-phone fs-14"></i></a></div>,
    //     children: <div className="mt-3"><div> Phone Call</div>
    //     <p>Called Main Office (open call)</p>
    //     <p>called Jeff Mobile (open call)</p>
    //     </div>
    //     ,
    //   },
    //   {
    //     color: 'green',
    //     dot: <div><a href="#" className="btn btn-email btn-sm btn-circle"> <i className="las la-envelope fs-14"></i></a></div>,
    //     children: <div><div>Email</div>
    //     <p>called Main Office</p>
    //             </div>,
    //   },
    //   {
    //     color: 'red',
    //     dot: <div><a href="#" className="btn btn-whatsapp btn-sm btn-circle"> <i className="las la-mobile fs-14"></i></a></div>,
    //     children: (
         
    //         <div><div>Whatsapp</div>
    //     <p> Mike Office</p>
    //             </div>
         
    //     ),
    //   },
     


    //   {
    //     dot: <div><a href="#" className="btn btn-meet btn-sm btn-circle"> <i className="las la-handshake fs-14"></i></a></div>,
    //     children: (
    //       <>
    //        <div><div>Meeting</div>
    //     <p>Small engine repair near me</p>
    //             </div>
    //       </>
    //     ),
    //   },
      {
        color: 'gray',
        dot: <div><a href="#" className="btn btn-act btn-sm btn-circle"> <i className="las la-phone fs-14"></i></a></div>,
        children: (
          <>
            <div> <div className="col-md-12">
         <div id="steps" className=" row mt-3"> <div className="col-md-8 text-align-left fs-14 font-weight-normal ">Follow up<h6 className="">Called Jeff Mobile (open call) </h6></div>
           <div className="col-sm-4 text-align-right"><a href="#" className="btn fs-20 "> <i className="las la-edit "></i></a> <a href="#" className="btn fs-20 "> <i className="las la-trash"></i></a>
           <div className="fs-12 mt-1">2023-06-26 18:43</div>
            </div> 
           
           </div>        
    </div>
                </div>
          </>
        ),
      },
      {
        color: 'gray',
        dot: <div><a href="#" className="btn btn-app btn-sm btn-circle"> <i className="las la-mobile fs-14"></i></a></div>,
        children: (
          <>
            <div><div className="col-md-12">
         <div id="steps" className=" row mt-3"> <div className="col-md-8 text-align-left fs-14 font-weight-normal ">Chat<h6>Request Feedback </h6></div>
           <div className="col-sm-4 text-align-right"><a href="#" className="btn fs-20 "> <i className="las la-edit "></i></a> <a href="#" className="btn fs-20 "> <i className="las la-trash"></i></a>
           <div className="fs-12 mt-1">2023-06-26 18:43</div>
            </div>            
           </div>        
    </div>
                </div>
          </>
        ),
      },
      {
        color: '#00CCFF',
        dot: <div><a href="#" className="btn btn-document btn-sm btn-circle"> <i className="las la-phone fs-14"></i></a></div>,
        children: <div><div className="col-md-12">
        <div id="steps" className=" row mt-3"> <div className="col-md-8 text-align-left fs-14 font-weight-normal ">Review received<h6>Feedback received (Open Review)</h6></div>
          <div className="col-sm-4 text-align-right"><a href="#" className="btn fs-20 "> <i className="las la-edit "></i></a> <a href="#" className="btn fs-20 "> <i className="las la-trash"></i></a>
          <div className="fs-12 mt-1">2023-06-26 18:43</div>
           </div>            
          </div>        
   </div>
                </div>,
      },
    ]}
  />
  </>
)}

export default ActivityTime;