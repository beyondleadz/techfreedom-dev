import React, {useState} from "react";
import Layout from "../layout/Layout";
import { Steps } from 'antd';
import Banner from "../components/about/Banner";
import Services from "../components/about/Services";
import Aim from "../components/about/Aim";
import Stats from "../components/about/Stats";
import { Tooltip } from 'antd';
import { Tabs } from 'antd';
import { Breadcrumb } from 'antd';
import ActivityTime from "../components/leads-details/ActivityTime";
import Info from "../components/leads-details/Info";
import Notes from "../components/leads-details/Notes";
import Tasks from "../components/leads-details/Tasks";
import Stepsbar from "../components/leads-details/Stepsbar";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: <span>Activity Time</span>,
    children: <ActivityTime/>,
  },
  {
    key: '2',
    label: `Lead Details`,
    children: <Info/>,
  },
  {
    key: '3',
    label: `Add Notes`,
    children:<Notes/>,
  },
  {
    key: '4',
    label: `Add Tasks`,
    children: <Tasks/>,
  },
];

const Leads = () => {

    return(
        <>
    <Layout>
    <div id="leads" className="wrapper">
	<div id="content-wrapper" className="d-flex flex-column">
        <div className="container-fluid">
         <div className="mt-3 ml-3"> <Breadcrumb
    separator=""
    items={[
      
    
      {
        href: '',
        title: 'Home',
      },
      {
        type: 'separator',
      },
      {
        href: '',
        title: 'Leads',
      },
      {
        type: 'separator',
      },
      {
        title: 'Lead details',
      },
    ]}
  />

</div>  
<h3 className="headername">Leads</h3>
<div className="mt-3"><Stepsbar/></div> 
        
        <div  className="row  col-md-12 ">
<div className="card shadow col-md-12">
          <div className="row">
            <div className="col-md-4 col-custom">
            <div className="profilePic"><i class="btn btn-primary btn-circle btn-lg"> JC</i>
    <h3>John collines</h3>
    <div className="name mt-1">October14th, 2018 at 2:30 P.M.</div>
    
    <div>
    
    <Tooltip overlayClassName="fs-12 "  title="Phone">  <a href="#" class="btn btn-phone btn-circle"> <i class="las la-phone"></i></a></Tooltip>
    <Tooltip overlayClassName="fs-12 "   title="Email"> <a href="#" class="btn btn-email btn-circle ml-3"><i class="las la-envelope text-white"></i></a></Tooltip>
    <Tooltip overlayClassName="fs-12"   title="Activity"> <a href="#" class="btn btn-act btn-circle ml-3"><i class="las la-directions"></i></a></Tooltip>
    <Tooltip overlayClassName="fs-12 "   title="Document"> <a href="#" class="btn btn-doc btn-circle ml-3"><i class="las la-share-square text-white"></i></a></Tooltip></div></div>
    <div className=" mt-3"> <span className="namedt">Designation</span>  <span className="namedc"> General Manager</span> </div>
    <div className=" mt-2">  <span className="namedt">Phone </span>   <span className="namedc"> 9743899246</span>  </div>
        <div className=" mt-2"> <span className="namedt"> Email </span><span className="namedc"> J.collines@company.info</span> </div>
        <div className=" mt-2"> <span className="namedt">Address</span> <span className="namedc">abc smith street, India</span>  </div>
        
              <div className="row">
                <div className="col-md-12"></div>
                </div></div>
                <div className="col-md-8 col-custom-2">
                <div className="row">
                <Tabs className="ml-4 w-80" defaultActiveKey="1" items={items} onChange={onChange} />
                </div>
                </div></div></div></div></div></div>
	 
  {/* <!-- Page Wrapper --> */}
  

    {/* <!-- End of Page Wrapper --> */}

    {/* <!-- Scroll to Top Button--> */}
    <a classNameName="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>    </a>

    {/* <!-- Logout Modal--> */}
    
  
</div>
        {/* <Testimonials/> */}
    </Layout>
    
    </>
    
    )

}

export default Leads;