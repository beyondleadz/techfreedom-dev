import React,{useState} from "react";
import BannerImage2 from '../../assets/images/product-comparison-header.jpg'
const BannerSection=()=>{
    return(
    <>
    <section id="home" className="w3l-banner">
    <div className="banner-image">        </div>
    <div className="banner-content">
        <div className="container pb-md-4">
            <div className="row align-items-center py-4">
                <div className="col-md-6 pr-lg-5 ">
                    <h3 className="mb-lg-4 mb-3 title">
                    <span>Product </span>Comparison!</h3>
                 <p className="mr-5">Welcome to BeyondLeadz, a B2B data and lead management solutions provider. Our company specializes in providing businesses with accurate, up-to-date and actionable data that helps them identify potential leads and grow their customer base.</p>
                        
            
            
                    <div className="mt-md-5 mt-4 mb-lg-0 mb-4">
                        <a className="btn btn-style" href="about.html">Start Free Trial</a>  <a className="btn btn-style" href="about.html">See Plans</a>                        </div>
                </div>
                <div className="col-md-6 mt-md-0 mt-5 mb-lg-0 mb-5 right-banner-2 position-relative">
                    <div className="sub-banner-inner-image">
                        <img src={BannerImage2}
                            className="img-fluid radius-image-full position-relative" alt=" "/>                        
                    </div>
                </div>
                <ul className="breadcrumbs-custom-path">
                <li><a href="index.html">Home</a></li>
                <li className="active"><i className="fas fa-angle-right mx-2"></i>Product Comparison</li>
            </ul>
            </div>
        </div>
    </div>
</section>

 
        </>
)
}
export default BannerSection;
