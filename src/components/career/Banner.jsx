import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import BannerImage2 from '../../assets/images/career-header.jpg'
const BannerSection=()=>{
    return( <section id="home" className="w3l-banner">
    <div className="banner-image">        </div>
    <div className="banner-content">
        <div className="container pb-md-4">
            <div className="row align-items-center py-4">
                <div className="col-md-6 pr-lg-5 ">
                    <h3 className="mb-lg-4 mb-3 title">
                    <span>Come </span>Join Us!</h3>
                 <p className="mr-5">Attracting top talent is crucial for any company, and Beyond Leadz is no exception!</p>
                        
                 <div className="mt-md-5 mt-4 mb-lg-0 mb-4">
                 <NavLink to={"/signup"} className="btn btn-style"> Start Free Trial</NavLink>
                 <NavLink to={"/contact-us"} className="btn btn-style">Contact us</NavLink>                     
                 </div>                
                 </div>
                <div className="col-md-6 mt-md-0 mt-5 mb-lg-0 mb-5 right-banner-2 position-relative">
                    <div className="sub-banner-inner-image">
                        <img src={BannerImage2}
                            className="img-fluid radius-image-full position-relative" alt=" "/>                        
                    </div>
                </div>
                <ul className="breadcrumbs-custom-path">
                <li><NavLink to="/">Home</NavLink></li>
                <li className="active"><i className="fas fa-angle-right mx-2"></i>Career</li>
            </ul>
            </div>
        </div>
    </div>
</section>
)
}
export default BannerSection;
