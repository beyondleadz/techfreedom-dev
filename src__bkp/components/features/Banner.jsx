import React,{useState} from "react";
import { useRoutes,NavLink } from "react-router-dom";
import FeaturesHeaderImage from '../../assets/images/features-header.jpg'
const BannerSection=()=>{
    return(<section id="home" className="w3l-banner py-5">
    <div className="banner-image">        </div>
    <div className="banner-content">
        <div className="container pb-md-4">
            <div className="row align-items-center py-4">
                <div className="col-md-6 pr-lg-5 ">
                    <h3 className="mb-lg-4 mb-3 title">
                    <span>Product </span>Features</h3>
                    <p className="mr-5">Beyond Leadz helps you gain unparalleled access to structured B2B information with</p>
                        
            
            
                    <div className="mt-md-5 mt-4 mb-lg-0 mb-4">
                        <a className="btn btn-style" href="about.html">Start Free Trial</a>  <a className="btn btn-style" href="about.html">See Plans</a>                        </div>
                </div>
                <div className="col-md-6 mt-md-0 mt-5 mb-lg-0 mb-5 right-banner-2 position-relative">
                    <div className="sub-banner-inner-image">
                        <img src={FeaturesHeaderImage}  className="img-fluid radius-image-full position-relative" alt=" "/>                        </div>
                 
                </div>
                <ul className="breadcrumbs-custom-path">
                <li><NavLink to="/">Home</NavLink></li>
                <li className="active"><i className="fas fa-angle-right mx-2"></i>Features</li>
            </ul>
            </div>
        </div>
    </div>
</section>
)
}
export default BannerSection;
