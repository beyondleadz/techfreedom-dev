import React,{useState} from "react";
import BannerImage2 from '../../assets/images/banner-img2.jpg'
const BannerSection=()=>{
    return(<section id="home" className="w3l-banner py-5">
<div className="banner-image">        </div>
<div className="banner-content">
    <div className="container pb-md-4">
        <div className="row align-items-center py-4">
            <div className="col-md-6 pr-lg-5">
                <h3 className="mb-lg-4 mb-3 title">
                Double your <span>Qualified Leads</span></h3>
                <p className="mr-5">Unleash the power of data to drive your sales growth - discover our B2B database and lead management solutions today!</p>
                <p className="mr-5">- Get 100% Verified  B2B data that converts to higher sales revenue</p>
                <p className="mr-5">- Best prospecting solution and  actionable insights for faster conversions</p>
                <div className="mt-md-5 mt-4 mb-lg-0 mb-4">
                    <a className="btn btn-style" href="about.html">Start Free Trial</a>  <a className="btn btn-style" href="about.html">See Plans</a>                        </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-5 mb-lg-0 mb-5 right-banner-2 position-relative">
                <div className="sub-banner-image">
                    <img src={BannerImage2} className="img-fluid radius-image-full position-relative" alt=" "/>                        </div>
                <div className="banner-style-1 d-flex align-items-center">
                    <i className="fas fa-chart-line green-clr-bg"></i>
                    <h4>Lead conversion by 10X</h4>
                </div>
                <div className="banner-style-1 banner-style-2 d-flex align-items-center">
                    <i className="fas fa-shield-alt red-clr-bg"></i>
                    <h4>Search the Right Leads</h4>
                </div>
                <div className="banner-style-1 banner-style-3 d-flex align-items-center">
                    <i className="fas fa-search blue-clr-bg"></i>
                    <h4>Get Accurate Data</h4>
                </div>
            </div>
        </div>
    </div>
</div>
</section>)
}
export default BannerSection;
