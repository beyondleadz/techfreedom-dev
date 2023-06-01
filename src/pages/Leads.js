import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/about/Banner";
import Services from "../components/about/Services";
import Aim from "../components/about/Aim";
import Stats from "../components/about/Stats";
import { Tabs } from 'antd';
import ActivityTime from "../components/leads-details/ActivityTime";
import Info from "../components/leads-details/Info";
import Notes from "../components/leads-details/Notes";
import Tasks from "../components/leads-details/Tasks";
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
    label: `Info`,
    children: <Info/>,
  },
  {
    key: '3',
    label: `Notes`,
    children:<Notes/>,
  },
  {
    key: '4',
    label: `Tasks`,
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
        <h3 className="headername">Leads</h3>
        <div  className="row  col-md-12 ">
<div className="card shadow col-md-12">
          <div className="row">
            <div className="col-md-4 col-custom">
            <div className="profilePic"><i class="btn btn-primary btn-circle btn-lg"> JC</i>
    <h3>John collines</h3>
    <div className="name mt-1">October14th, 2018 at 2:30 P.M.</div>
    
    <div>
    <a href="#" class="btn btn-info btn-circle"><i class="la la-Phone"></i></a>
    <a href="#" class="btn btn-primary btn-circle ml-3"><i class="la la-envelope"></i></a>
    <a href="#" class="btn btn-primary btn-circle ml-3"><i class="fab fa-facebook-f"></i></a>
    <a href="#" class="btn btn-primary btn-circle ml-3"><i class="fab fa-facebook-f"></i></a></div></div>
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