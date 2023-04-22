import React,{useState} from "react";
import { useRoutes,NavLink } from "react-router-dom";
import PricingHeaderImage from '../../assets/images/pricing-header.jpg'
const BannerSection=()=>{
    return( <section id="home" className="w3l-banner">
    <div className="banner-image">        </div>
    <div className="banner-content">
        <div className="container pb-md-4">
            <div className="row align-items-center py-4">
                <div className="col-md-6 pr-lg-5 ">
                    <h3 className="mb-lg-4 mb-3 title">
                    <span>Product </span>Pricing</h3>
                    <p className="mr-5">Get the best plan for your business
You can upgrade, downgrade or cancel the plan anytime.</p>
                        
            
            
                    <div className="mt-md-5 mt-4 mb-lg-0 mb-4">
                        <NavLink className="btn btn-style" to="/about-us">Start Free Trial</NavLink>  <NavLink className="btn btn-style" to="/about-us">See Plans</NavLink>                        </div>
                </div>
                <div className="col-md-6 mt-md-0 mt-5 mb-lg-0 mb-5 right-banner-2 position-relative">
                    <div className="sub-banner-inner-image">
                        <img src={PricingHeaderImage}
                            className="img-fluid radius-image-full position-relative" alt=" "/>                        </div>
                  
                </div>
                <ul className="breadcrumbs-custom-path">
                <li><NavLink to="/">Home</NavLink></li>
                <li className="active"><i className="fas fa-angle-right mx-2"></i>Pricing</li>
            </ul>
            </div>
        </div>
    </div>
</section>

)
}
export default BannerSection;
