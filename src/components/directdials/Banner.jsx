import React,{useState} from "react";
import { useRoutes,NavLink } from "react-router-dom";
import TermsHeaderImage from '../../assets/images/direct-dials-header.jpg'
const BannerSection=()=>{
    return(  <section id="home" className="w3l-banner py-5">
    <div className="banner-image">        </div>
    <div className="banner-content">
        <div className="container pb-md-4">
            <div className="row align-items-center py-4">
                <div className="col-md-6 pr-lg-5 ">
                    <h3 className="mb-lg-4 mb-3 title">
                    <span>Direct </span>Dials</h3>
                 <p className="mr-5">"BeyondLeadz offers its users access to Direct dials and mobile numbers"
</p>
                        
            
            
                    
                 </div>
                <div className="col-md-6 mt-md-0 mt-5 mb-lg-0 mb-5 right-banner-2 position-relative">
                    <div className="sub-banner-inner-image">
                        <img src={TermsHeaderImage} className="img-fluid radius-image-full position-relative" alt=" "/>                        
                    </div>
                </div>
                <ul className="breadcrumbs-custom-path">
                <li><a href="index.html">Home</a></li>
                <li className="active"><i className="fas fa-angle-right mx-2"></i>Direct Dials</li>
            </ul>
            </div>
        </div>
    </div>
</section>

)
}
export default BannerSection;