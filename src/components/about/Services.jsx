import React,{useState} from "react";
import AboutHeaderImage from "../../assets/images/about-us-header1.jpg"
import AboutMissionImage from "../../assets/images/about-mission-icon.jpg"
import AboutVisionImage from "../../assets/images/about-vision-icon.jpg"
import AboutValueImage from "../../assets/images/about-value-icon.jpg"


const Services=()=>{
    return (
    <>
        <section className="w3l-servicesblock py-5">
        <div className="container py-lg-5 py-4">
            <div className="row pt-xl-5 pt-lg-0 pt-5 pb-xl-4 align-items-center">
                <div className="col-lg-6 position-relative home-block-3-left">
                    <div className="position-relative">
                        <img src={AboutHeaderImage} alt="" className="img-fluid radius-image"/>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6 offset-xl-1 mt-lg-0 mt-5">
                    {/*<h3 className="title-style">Access the most comprehensive B2B database to fuel your business growth and stay ahead of the competition!</h3>
                     <p className="mt-lg-4 mt-3 mb-sm-5 mb-4">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                        ultrices in ligula. Semper at tempufddfel. </p> */}
                    <div className="two-grids mt-md-0 mt-md-5 mt-4">
                        <div className="grids_info">
						<img src={AboutVisionImage} height="60" width="60" alt="" className="img-fluid radius-image"/>
                            <div className="detail">
                                <h4>Vision</h4>
                                <p>"To be the most trusted and reliable provider of B2B data and lead management solutions, empowering businesses to make informed decisions and achieve their goals"</p>
                            </div>
                        </div>
                        <div className="grids_info mt-sm-5 mt-4">
						<img src={AboutMissionImage} height="60" width="60" alt="" className="img-fluid radius-image"/>
                            <div className="detail">
                                <h4>Mission</h4>
                                <p>To help businesses grow and succeed by providing them with accurate, up-to-date data and innovative lead management solutions that enable them to identify and capture new opportunities.</p>
                            </div>
                        </div>
                        <div className="grids_info mt-sm-5 mt-4">
						<img src={AboutValueImage} height="60" width="60" alt="" className="img-fluid radius-image"/>
                            <div className="detail">
                                <h4>Values</h4>
                                <p style={{marginBottom:5}}><strong>Integrity:</strong> We believe in conducting our business with the utmost honesty and transparency, building trust and long-term relationships with our clients.</p>
							    <p style={{marginBottom:5}}><strong>Quality:</strong> We are committed to delivering the highest quality data and services, using the latest technology and best practices to ensure accuracy and reliability.</p>
							    <p style={{marginBottom:5}}><strong>Innovation:</strong> We strive to be at the forefront of technological innovation, constantly exploring new ideas and solutions that will benefit our clients.</p>
                                <p style={{marginBottom:5}}><strong>Continuous Improvement:</strong> We are constantly seeking ways to improve our services and processes, staying ahead of industry trends and adopting best practices to deliver the best possible outcomes for our clients.</p>
							    <p><strong>Customer Focus:</strong> We are dedicated to understanding our clients' needs and providing them with personalized solutions that meet their unique requirements.</p>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
    }
    export default Services;