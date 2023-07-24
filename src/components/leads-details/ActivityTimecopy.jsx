import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Timeline, Button, Select, DatePicker, Space } from "antd";
// import { Timeline, Button } from 'antd';
import { SmileOutlined } from "@ant-design/icons";

const ActivityTimecopy = () => {
  const [itemData, setItemData] = useState([]);
  const leadNotes = useSelector((state) => state.LeadDetailsReducer.leadNotes);

  const editLeadNote=(id)=>{
console.log("lead data",id);
  }

  const deleteLeadNote=(id)=>{
    console.log("delete lead data",id);

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
          <h6>{item.notefor}</h6></div>    <div className="col-sm-4 text-align-right"><a href="#" className="btn fs-20 " onClick={()=>editLeadNote(item.id)}> <i className="las la-edit "></i></a> <a href="#" className="btn fs-20 "  onClick={()=>deleteLeadNote(item.id)}> <i className="las la-trash"></i></a><div className="fs-12 mt-1">2023-06-26 18:43</div></div></div></div></div>;
        items.push(obj);
      });
      setItemData(items);
    }
  }, [leadNotes]);
  return (
    <>
      <div className="mb-4 fs-14 font-weight-bold">Overdue Activity</div>

      <Timeline
      items={itemData}
        // items={[
        //   {
        //     color: "green",
        //     dot: (
        //       <div>
        //         <a href="#" className="btn btn-phone btn-sm btn-circle">
        //           {" "}
        //           <i className="las la-phone fs-14"></i>
        //         </a>
        //       </div>
        //     ),
        //     children: (
        //       <div className="mt-3">
        //         <div className="col-md-12">
        //           <div id="steps" className=" row mt-3">
        //             {" "}
        //             <div className="col-md-8 text-align-left fs-14 font-weight-normal ">
        //               Phone Call<h6>Called Main Office (open call)</h6>
        //             </div>
        //             <div className="col-sm-4 text-align-right">
        //               <a href="#" className="btn fs-20 ">
        //                 {" "}
        //                 <i className="las la-edit "></i>
        //               </a>{" "}
        //               <a href="#" className="btn fs-20 ">
        //                 {" "}
        //                 <i className="las la-trash"></i>
        //               </a>
        //               <div className="fs-12 mt-1">2023-06-26 18:43</div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     ),
        //   },
        //   {
        //     color: "green",
        //     dot: (
        //       <div>
        //         <a href="#" className="btn btn-email btn-sm btn-circle">
        //           {" "}
        //           <i className="las la-envelope fs-14"></i>
        //         </a>
        //       </div>
        //     ),
        //     children: (
        //       <div>
        //         <div className="col-md-12">
        //           <div id="steps" className=" row mt-3">
        //             {" "}
        //             <div className="col-md-8 text-align-left fs-14 font-weight-normal ">
        //               Email<h6>called Main Office</h6>
        //             </div>
        //             <div className="col-sm-4 text-align-right">
        //               <a href="#" className="btn fs-20 ">
        //                 {" "}
        //                 <i className="las la-edit "></i>
        //               </a>{" "}
        //               <a href="#" className="btn fs-20 ">
        //                 {" "}
        //                 <i className="las la-trash"></i>
        //               </a>
        //               <div className="fs-12 mt-1">2023-06-26 18:43</div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     ),
        //   },
        //   {
        //     color: "red",
        //     dot: (
        //       <div>
        //         <a href="#" className="btn btn-whatsapp btn-sm btn-circle">
        //           {" "}
        //           <i className="lab la-whatsapp fs-14"></i>
        //         </a>
        //       </div>
        //     ),
        //     children: (
        //       <div>
        //         <div className="col-md-12">
        //           <div id="steps" className=" row mt-3">
        //             {" "}
        //             <div className="col-md-8 text-align-left fs-14 font-weight-normal ">
        //               Whatsapp<h6>Mike Office</h6>
        //             </div>
        //             <div className="col-sm-4 text-align-right">
        //               <a href="#" className="btn fs-20 ">
        //                 {" "}
        //                 <i className="las la-edit "></i>
        //               </a>{" "}
        //               <a href="#" className="btn fs-20 ">
        //                 {" "}
        //                 <i className="las la-trash"></i>
        //               </a>
        //               <div className="fs-12 mt-1">2023-06-26 18:43</div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     ),
        //   },

        //   {
        //     dot: (
        //       <div>
        //         <a href="#" className="btn btn-meet btn-sm btn-circle">
        //           {" "}
        //           <i className="las la-handshake fs-14"></i>
        //         </a>
        //       </div>
        //     ),
        //     children: (
        //       <>
        //         <div>
        //           <div className="col-md-12">
        //             <div id="steps" className=" row mt-3">
        //               {" "}
        //               <div className="col-md-8 text-align-left fs-14 font-weight-normal ">
        //                 Meeting<h6>Small engine repair near me</h6>
        //               </div>
        //               <div className="col-sm-4 text-align-right">
        //                 <a href="#" className="btn fs-20 ">
        //                   {" "}
        //                   <i className="las la-edit "></i>
        //                 </a>{" "}
        //                 <a href="#" className="btn fs-20 ">
        //                   {" "}
        //                   <i className="las la-trash"></i>
        //                 </a>
        //                 <div className="fs-12 mt-1">2023-06-26 18:43</div>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </>
        //     ),
        //   },
        //   // {
        //   //   color: 'gray',
        //   //   dot: <div><a href="#" className="btn btn-act btn-sm btn-circle"> <i className="las la-phone fs-14"></i></a></div>,
        //   //   children: (
        //   //     <>
        //   //       <div><div>Follow up</div>
        //   //   <p>called Jeff Mobile (open call)</p>
        //   //           </div>
        //   //     </>
        //   //   ),
        //   // },
        //   // {
        //   //   color: 'gray',
        //   //   dot: <div><a href="#" className="btn btn-app btn-sm btn-circle"> <i className="las la-mobile fs-14"></i></a></div>,
        //   //   children: (
        //   //     <>
        //   //       <div><div>Chat</div>
        //   //   <p>Request Feedback</p>
        //   //           </div>
        //   //     </>
        //   //   ),
        //   // },
        //   // {
        //   //   color: '#00CCFF',
        //   //   dot: <div><a href="#" className="btn btn-document btn-sm btn-circle"> <i className="las la-phone fs-14"></i></a></div>,
        //   //   children: <div><div>Review received</div>
        //   //   <p>Feedback received (Open Review)</p>
        //   //           </div>,
        //   // },
        // ]}
      />
    </>
  );
};

export default ActivityTimecopy;
