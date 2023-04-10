import React,{useState} from "react";

const CompanySearch=()=>{
    return <div className="shadow navbar-light">
    <h3 className="card-body font-weight-bold">Search Companies</h3>
   <ul className="nav nav-tabs" id="myTabjustified" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="top-tabs active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><i className="fa tab-img pr-2"></i>Companies</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="top-tabs" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><i className="fa tab-img1 pr-2"></i>Executive</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="top-tabs" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"><i className="fa tab-img2 pr-2"></i>Leads</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="top-tabs active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><i className="fa tab-img pr-2"></i>Companies</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="top-tabs" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><i className="fa tab-img1 pr-2"></i>Executive</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="top-tabs" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"><i className="fa tab-img2 pr-2"></i>Leads</button>
                  </li>
                </ul>
              </div>  
    
}
export default CompanySearch;