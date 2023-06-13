import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Layout from "../layout/Layout";
import { Steps } from "antd";
import Banner from "../components/about/Banner";
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

import {
  getLeadDetails,
} from "../actionCreator/leadDetailsActionCreator";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: <span>Activity Time</span>,
    children: <ActivityTime />,
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

const LeadDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const leadDetail= useSelector(
    (state) => state.LeadDetailsReducer.leadDetails
  );
  const [loading, setLoading] = useState(true);

  useMemo(() => {
     dispatch(getLeadDetails(id));    
   }, []);
   useMemo(() => {
    console.log(leadDetail, "leadDetail");
   },[leadDetail]);
  return (
    <>
      <Layout>
        <div id="leads" className="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div className="row col-md-12">
              <div className="row col-md-12 mt-3 ">
                {" "}
                <Breadcrumb
                  separator=""
                  items={[
                    {
                      href: "",
                      title: "Home",
                    },
                    {
                      type: "separator",
                    },
                    {
                      href: "",
                      title: "Leads",
                    },
                    {
                      type: "separator",
                    },
                    {
                      title: "Lead details",
                    },
                  ]}
                />
                <div className="row col-md-12">
                  <div className="row headername">
                    <h3>Leads</h3>
                  </div>
                  <div className="row col-md-12 mt-3">
                    <div className="col-md-10">
                      <Stepsbar />
                    </div>
                    <div className="col">
                      <button class="btn btn-primary fs-12 btn-sm ">
                        Mark Step as Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row  col-md-12 ">
                <div className="card shadow col-md-12">
                  <div className="row">
                    <div className="col-md-4 col-custom">
                      <div className="profilePic">
                        <i class="btn btn-dark btn-circle btn-lg" style={{ "text-transform": "uppercase" }}> {leadDetail?.firstname?.[0]}
                {leadDetail?.lastname?.[0]}</i>
                        <h3>{leadDetail?.fullname}</h3>
                        <div className="name mt-1">
                          October14th, 2018 at 2:30 P.M.
                        </div>

                        <div>
                          <Tooltip overlayClassName="fs-12 " title="Phone">
                            {" "}
                            <a href="#" class="btn btn-phone btn-circle">
                              {" "}
                              <i class="las la-phone"></i>
                            </a>
                          </Tooltip>
                          <Tooltip overlayClassName="fs-12 " title="Email">
                            {" "}
                            <a href="#" class="btn btn-email btn-circle ml-3">
                              <i class="las la-envelope "></i>
                            </a>
                          </Tooltip>
                          <Tooltip overlayClassName="fs-12" title="Activity">
                            {" "}
                            <a href="#" class="btn btn-act btn-circle ml-3">
                              <i class="las la-directions"></i>
                            </a>
                          </Tooltip>
                          <Tooltip overlayClassName="fs-12 " title="Document">
                            {" "}
                            <a
                              href="#"
                              class="btn btn-document btn-circle ml-3"
                            >
                              <i class="las la-share-square "></i>
                            </a>
                          </Tooltip>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className=" row mt-3">
                          {" "}
                          <span className="col-md-2 fs-14 ">
                            Designation
                          </span>{" "}
                          <span className="col namedc"> {leadDetail?.title}</span>{" "}
                        </div>
                        <div className=" row mt-2">
                          {" "}
                          <span className="col-md-2 fs-14">Phone </span>{" "}
                          <span className="col namedc"> {leadDetail?.phoneNo}</span>{" "}
                        </div>
                        <div className="row  mt-2">
                          {" "}
                          <span className="col-md-2 fs-14"> Email </span>
                          <span className="col namedc">
                            {" "}
                            {leadDetail?.emailId}
                          </span>{" "}
                        </div>
                        <div className="row mt-2">
                          {" "}
                          <span className="col-md-2 fs-14">Address</span>{" "}
                          <span className="col namedc">
                            
                          </span>{" "}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12"></div>
                      </div>
                    </div>
                    <div className="col-md-8 col-custom-2">
                      <div className="row">
                        <Tabs
                          className="ml-4 "
                          defaultActiveKey="1"
                          items={items}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a classNameName="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>{" "}
          </a>
        </div>
      </Layout>
    </>
  );
};

export default LeadDetails;
