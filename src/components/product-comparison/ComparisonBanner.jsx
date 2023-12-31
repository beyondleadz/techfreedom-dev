import React,{useState} from "react";
import { NavLink } from "react-router-dom";
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
                        
                 {/* <div className="container">
              <div className="row">
            
            <div className="compareHead">Beyond Leads VS Linkedin</div>
            <div className="compareContent ">
            <div className="row row-cols-1">
            <div>- Unlimited Prospecting and list builidng</div>
            <div>- Prospecting is connections dependant</div>
            </div></div>
            <div className="compareContent ">
            <div className="row row-cols-1">
            <div>- Independent human verified data</div>
            <div>- User Generated data</div>
            </div></div>
            <div className="compareContent ">
            <div className="row row-cols-1">
            <div>- Multiple data soources with rigrouos quality contol</div>
            <div>- Single Source (Users)</div>
            </div></div>
            <div className="compareContent ">
            <div className="row row-cols-1 ">
            <div>- Tailored dataset with multiple download options</div>
            <div>- Limitations in customisng and downloding</div>
            </div></div>
            <div className="compareContent ">
            <div className="row row-cols-1">
            <div>- Budget Freindly and unlimited searches</div>
            <div>-Limited free searches and Expensive per user billing</div>
            </div></div>
            <div className="compareContent ">
            <div className="row row-cols-1">
            <div>- Business emails</div>
            <div>- Personal emails and costly reachout through Inmails</div>
            </div></div>
            <div className="compareContent ">
            <div className="row row-cols-1">
            <div>- Direct Dials & Mobile Numbers</div>
            <div>- X</div>
            </div></div>
            <div className="compareContent ">
            <div className="row row-cols-1">
            <div>- No commercial advertisements and sponsored ads like LinkedIn</div>
            <div>- Commercial and Sposorod ads take away attention</div>
            </div></div>
            
        
            
            </div>
            </div> */}
            
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
                <li><NavLink to={'/'}>Home</NavLink></li>
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
