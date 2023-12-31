import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink} from "react-router-dom";

import {Link} from 'react-router-dom'

import Layout from "../layout/Layout";
import { Steps,Modal, Button } from "antd";
import Banner from "../components/about/Banner";
import graphImage from '../assets/images/graph.jpg'
import Services from "../components/about/Services";
import Aim from "../components/about/Aim";
import Stats from "../components/about/Stats";
import { Tooltip } from "antd";
import { Tabs } from "antd";
import { Breadcrumb } from "antd";
import ActivityTimecopy from "../components/leads-details/ActivityTimecopy";
import ActivityTime from "../components/leads-details/ActivityTime";
import Info from "../components/leads-details/Info";
import Notes from "../components/leads-details/Notes";
import Tasks from "../components/leads-details/Tasks";
import Stepsbar from "../components/leads-details/Stepsbar";
import moment from "moment/moment";

import {
  getLeadDetails,
  getAllLeadNotes,
  getAllLeadRemarks,
  getLeadNoteDetails,
  deleteLeadNote,
  getLeadRemarksDetails,
  deleteLeadRemarks,
  getLeadTasksStatusList
} from "../actionCreator/leadDetailsActionCreator";
import {
  getLeadStatusList,
  getLeadRatingList,
} from "../actionCreator/leadListingActionCreater";

const LeadDetails = () => {
  const { confirm } = Modal;
  const { id, type } = useParams();
  const dispatch = useDispatch();
  const leadDetail = useSelector(
    (state) => state.LeadDetailsReducer.leadDetails
  );
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab1] = useState("1");

  const items = [
    {
      key: "1",
      label: <span>Timeline</span>,
      children: (
        <ActivityTime
          setActiveTab={(tab, id, type) => getActiveTab(tab, id, type)}
        />
      ),
    },
    {
      key: "2",
      label: `Lead Details`,
      children: <Info />,
    },
    {
      key: "3",
      label: `Add Notes`,
      children: <Notes />,
    },
    {
      key: "4",
      label: `Add Tasks`,
      children: <Tasks />,
    },
  ];

  const getActiveTab = (tab, id, type) => {
    //console.log("typetype", type);deleteremarks
    if (type == "deletenote") { 
      showConfirm(id,leadDetail?.id,'note');      
    }else if (type == "deleteremarks") { 
      showConfirm(id,leadDetail?.id,'task');      
    }else{
      setActiveTab1(`${tab}`);
      if (type == "editnote") { 
      dispatch(getLeadNoteDetails(id));
      }else if (type == "editremarks") { 
        dispatch(getLeadRemarksDetails(id));
        }
    }
  };

  const onChange = (key) => {
    //console.log(key);
    setActiveTab1(`${key}`);
  };

  useMemo(() => {
    if(id){
    dispatch(getLeadDetails(id));
    //dispatch(getAllLeadNotes(id));
    //dispatch(getAllLeadRemarks(id));
    dispatch(getLeadStatusList());
    dispatch(getLeadRatingList());
    dispatch(getLeadTasksStatusList());
    }
  }, []);
  useMemo(() => {
    if(id){
      dispatch(getAllLeadNotes(id));
      dispatch(getAllLeadRemarks(id));
    }  
    //console.log(leadDetail, "leadDetail");
  }, [getAllLeadNotes,getAllLeadRemarks]);
  const switchToTimeline = () => {
    setActiveTab1(`1`);
  };


  function showConfirm(id, leadId,type) {
    
    confirm({
      title: 'Do you want to delete this '+type+'?',
      content: '',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          if(type==='note'){
            dispatch(deleteLeadNote(id, leadId));
          }else{
            dispatch(deleteLeadRemarks(id, leadId));
          }          
        }).catch(() => 
         console.log('Oops errors!')
      )
      },
      onCancel() {},
    });
  }
  return (
    <>
      <Layout>
        <div id="leads" className="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div className="row mob-block col-md-12">
              <div className=" col-md-12 mt-3 ">
             
                <Breadcrumb
                  separator=""
                  items={[
                    {
                      title: <Link to="/">Home</Link>,
                    },
                    {
                      type: "separator",
                    },
                    {
                      title: <Link to="/search-lead">Search Lead</Link>,
                    },
                    {
                      type: "separator",
                    },
                    {
                      title: "Lead details",
                    },
                  ]}
                />
                <div className="row mob-block col-md-12">
                  <div className="row headername">
                    <h3>Leads</h3>
                  </div>
                  <div className="row scrol col-md-12 mt-3">
                    <div className="col-md-10">
                      <Stepsbar />
                    </div>
                    <div className="col">
                      {/* <button className="btn btn-primary fs-12 btn-sm ">
                        Mark Step as Done
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mob-block col-md-12 ">
                <div className="card shadow pagebg col-md-12">
                  <div className="row">
                    <div className="col-md-4 col-custom mb-4">
                      <div className="profilePic">
                        <i
                          className="btn btn-dark btn-circle btn-lg"
                          style={{ textTransform: "uppercase" }}
                        >
                          {" "}
                          {leadDetail?.firstname?.[0]}
                          {leadDetail?.lastname?.[0]}
                        </i>
                        <h3>{leadDetail?.fullname}</h3>
                        <div className="name mt-1">
                        Last Activity : 
                        {leadDetail?.lastModifiedDate?moment(leadDetail?.lastModifiedDate).format(' D MMMM YYYY, h:mm a'):""}
                        </div>

                        <div>
                          <Tooltip overlayClassName="fs-12 " title="Phone">
                            {" "}
                            <NavLink to="tel:`${leadDetail?.phoneNo}`" className="btn btn-phone btn-circle">
                              {" "}
                              <i className="las la-phone"></i>
                            </NavLink>
                          </Tooltip>
                          <Tooltip overlayClassName="fs-12 " title="Email">
                            {" "}
                            <NavLink to="mailto:`${leadDetail?.emailId}`"
                              className="btn btn-email1 btn-circle ml-3"
                            >
                              <i className="las la-envelope "></i>
                            </NavLink>
                          </Tooltip>
                          <Tooltip overlayClassName="fs-12" title="Activity">
                            <a
                              href="#"
                              className="btn btn-act btn-circle ml-3"
                              onClick={switchToTimeline}
                            >
                              <i className="las la-directions"></i>
                            </a>
                          </Tooltip>
                          <Tooltip overlayClassName="fs-12 " title="Document">
                            <a
                              href="#"
                              className="btn btn-document btn-circle ml-3"
                            >
                              <i className="las la-share-square "></i>
                            </a>
                          </Tooltip>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="profilePic1 card">
                      <div className="row  pl-4 mb-1 fs-14 font-weight-bold">Activity Stats of the Month</div>
                      <div align="center"><img src={graphImage} />
              </div>
                      <div className=" pl-3  mt-3 mb-3 fs-14 font-weight-bold">Lead Info</div>
                        <div className="pl-3">
                         
                          <span className=" fs-14 ">
                            Designation
                          </span>
                          <span className="col namedc">
                            
                            {leadDetail?.title}
                          </span>
                        </div>
                        <div  className=" pl-3 mt-2">
                         
                          <span className="fs-14">Phone </span>{" "}
                          <span className="col namedc">
                            {" "}
                            {leadDetail?.phoneNo}
                          </span>{" "}
                        </div>
                        <div className=" pl-3 mt-2">
                          {" "}
                          <span className=" fs-14"> Email </span>
                          <span className="col namedc">
                            {" "}
                            {leadDetail?.emailId}
                          </span>{" "}
                        </div>
                        <div className=" pl-3 mt-2">
                          {" "}
                          <span className=" fs-14">Address</span>
                          <span className="col namedc">
                            {leadDetail?.address}
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12"></div>
                      </div>
                    </div>
                    <div className="col-md-8 leadbg col-custom-2">
                      <div className=" mt-3">
                        <Tabs
                          className="ml-4 "
                          activeKey={activeTab}
                          // defaultActiveKey="1"
                          items={items}e
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>{" "}
          </a>
        </div>
      </Layout>
      
    </>
  );
};

export default LeadDetails;
