import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/about/Banner";
import Services from "../components/about/Services";
import Aim from "../components/about/Aim";
import Stats from "../components/about/Stats";

import Team from "../components/about/Team";
import Testimonials from "../components/about/Testimonials";

const Demo = () => {

    return(
        <>
    <Layout>
    <div className="wrapper">
	
	<div className="shadow navbar-light">
  <h3 className="card-body">Search Companies</h3>
 <ul className="nav nav-tabs" id="myTabjustified" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="top-tabs active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><i className="fa fa-industry pr-2"></i>Company Summary
</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="top-tabs" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><i className="fa fa-suitcase pr-2"></i>Employees</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="top-tabs" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"><i className="fa fa-poll pr-2"></i>Org Chart</button>
                </li>
				<li className="navbar navbar-expand bg-light text-black-50 nav-item" role="presentation">
                  <button className="top-tabs nav-item dropdown" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"><i className="fa fa-filter pr-2"></i> <a className="blackt dropdown-toggle" href="#" id="navbarDropdown"
                                                    role="button" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false"></a>
                                                <div className="dropdown-menu animated--fade-in"
                                                    aria-labelledby="navbarDropdown">
                                                    <a className="dropdown-item" href="#">Filter By Department</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                </div></button>
                </li>
				
              </ul>
			</div>  
  {/* <!-- Page Wrapper --> */}
  
  <div className="container-fluid">

                    {/* <!-- Page Heading --> */}
                     

                    <div className="row">

                        <div className="col-lg-8">

                            {/* <!-- Default Card Example --> */}
                            <div className="card shadow mb-4">
                                <div className="card-header">
                                    Default Card Example                                </div>
									
									
                                <div className="card-body">
                                    This card uses Bootstrap's default styling with no utility classNamees added. Global
                                    styles are the only things modifying the look and feel of this default card example.                                </div>
                            </div>

                            {/* <!-- Basic Card Example --> */}
                            
                        </div>

                        <div className="col-lg-4">

                            {/* <!-- Dropdown Card Example --> */}
                            <div className="card shadow mb-4">
                                {/* <!-- Card Header - Dropdown --> */}
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Dropdown Card Example</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Card Body --> */}
                                <div className="card-body">
                                    Dropdown menus can be placed in the card header in order to extend the functionality
                                    of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis
                                    icon in the card header can be clicked on in order to toggle a dropdown menu.                                </div>
                            </div>

                            {/* <!-- Collapsable Card Example --> */}
                            
                        </div>
                    </div>
                </div>
    {/* <!-- End of Page Wrapper --> */}

    {/* <!-- Scroll to Top Button--> */}
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>    </a>

    {/* <!-- Logout Modal--> */}
    
  
</div>
        {/* <Testimonials/> */}
    </Layout>
    
    </>
    
    )

}

export default Demo;