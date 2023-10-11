import React, {useState} from "react";
import { Tabs, TabsProps } from 'antd';

import Layout from "../layout/Layout";
import DashboardLead from "../components/dashboard/DashboardLead";

const onChange = (key: string) => {
    console.log(key);
  };
  
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Save Searches',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Top 5 Tags',
      children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Recommendation',
        children: 'Content of Tab Pane 3',
      },
      {
        key: '4',
        label: 'Reports',
        children: 'Content of Tab Pane 4',
      },
    {
      key: '5',
      label: 'Usage',
      children: 'Content of Tab Pane 5',
    },
  ];
  

const MyView = () => {

    return(
        <>
    <Layout>
    <section id="dashboard">
	<div className="container-fluid">
	
					<div className="navbar-light" id="tabscompany">
      <h3 className="card-body font-weight-bold mt-3 mb-3">Dashboard</h3>
      <ul className="nav nav-tabs" id="myTabjustified" role="tablist">
        <li className="nav-item mb-4" role="presentation">
          <button
            className="top-tabs active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            {" "}
            <i className="fa tab-img las la-users"></i>Leads
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="top-tabs"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            <i className="fa tab-img las la-bullhorn text-info"></i>Marketing
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="top-tabs"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            <i className="fa tab-img las la-clock"></i>Activities
          </button>
        </li>
		<li className="nav-item" role="presentation">
          <button
            className="top-tabs"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            <i className="fa tab-img las la-eye"></i>My View
          </button>
        </li>
      </ul>
    </div>
					<div className=" navbar-light row mt-4 pt-4">
 <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;


</div>



					</div>


					
		</section>
    </Layout>
    
    </>
    
    )

}

export default MyView;