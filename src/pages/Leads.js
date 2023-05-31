import React, {useState} from "react";
import Layout from "../layout/Layout";
import Banner from "../components/about/Banner";
import Services from "../components/about/Services";
import Aim from "../components/about/Aim";
import Stats from "../components/about/Stats";

import Team from "../components/about/Team";
import Testimonials from "../components/about/Testimonials";

const Leads = () => {

    return(
        <>
    <Layout>
    <div id="leads" className="wrapper">
	
	 
  {/* <!-- Page Wrapper --> */}
  
  <div className="row col-md-12">

{/* <!-- Page Heading --> */}
<h3 className="headername">Leads</h3>

<div  className="row  col-md-12 ">
<div className="card shadow col-md-12">
<div className="row col-md-6">
    <div className="profilePic"><i class="btn btn-primary btn-circle btn-lg"> JC</i>
    <h3>John collines</h3>
    <div className="name mt-1">October14th, 2018 at 2:30 P.M.</div></div>
    
    <div className="name">
    <a href="#" class="btn btn-info btn-circle"><i class="la la-Phone"></i></a>
    <a href="#" class="btn btn-primary btn-circle ml-2"><i class="la la-envelope"></i></a>
    <a href="#" class="btn btn-primary btn-circle ml-2"><i class="fab fa-facebook-f"></i></a>
    <a href="#" class="btn btn-primary btn-circle ml-2"><i class="fab fa-facebook-f"></i></a></div>
    <div className="named mt-3"> <span className="namedt">Title Full Name: </span> <span className="namedc">John collines</span> </div>
    <div className="named mt-2"> <span className="namedt">Designation:</span>  <span className="namedc"> General Manager</span> </div>
    <div className="named mt-2">  <span className="namedt">Phone: </span>   <span className="namedc"> 9743899246</span>  </div>
        <div className="named mt-2"> <span className="namedt"> Email: </span><span className="namedc"> J.collines@company.info</span> </div>
        <div className="named mt-2"> <span className="namedt">Address:</span> <span className="namedc">abc smith street, India</span>  </div>
    
</div>
<div className="row col-md-6"></div>

</div>
</div>
</div>
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