import React,{useState} from "react";
import BannerImage2 from '../../assets/images/about-us-header.jpg'
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
                    <span>About </span>Us!</h3>
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
                <li className="active"><i className="fas fa-angle-right mx-2"></i>About</li>
            </ul>
            </div>
        </div>
    </div>
</section>
<div className="container">
    <p style={{marginBottom:5}}>Leads are the lifeblood of any business. But what do you do when you've exhausted your options and not generating enough Sales?</p>
    <p style={{marginBottom:5}}>Well, You go Beyond Leads!</p>
    <p style={{marginBottom:5}}>BeyondLeadz is a revolutionary new tool developed by a team of seasoned Sales & Marketing professionals who have successfully build and executed  sales strategies globally! BeyondLeadz is built with a promise to provide you accurate and actionable business information  that helps you find leads that are perfect for your business. It uses cutting-edge technology to provide you accurate and actionable B2B database that helps you find potential customers who are a perfect match for your products or services. With Beyond Leads, you'll never run out of leads again and always get to higher sales closing!</p>
</div>
<section className="w3l-services py-5" id="services">
        <div className="container py-md-5 py-4">
            <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4 pb-xl-4" style={{maxWidth:700}}>
                <h3 className="title-style mb-2" style={{marginBottom:-50}}>Access the most comprehensive B2B database to fuel your business growth and stay ahead of the competition!</h3>
				
            </div>
	     </div>
</section>	 
        </>
)
}
export default BannerSection;
