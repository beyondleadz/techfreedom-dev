import React,{useState} from "react";
import CareerHeaderImage from '../../assets/images/career-header1.jpg'

const AboutSection=()=>{
    return(
    <>
    <section className="w3l-servicesblock py-5">
        <div className="container py-lg-5 py-4">
            <div className="row pt-xl-5 pt-lg-0 pt-5 pb-xl-4 align-items-center">
                <div className="col-lg-6 position-relative home-block-3-left">
                    <div className="position-relative">
                        <img src={CareerHeaderImage} alt="" className="img-fluid radius-image"/>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6 offset-xl-1 mt-lg-0 mt-5">
                    <h3 className="title-style">Come be a part of the team that's making it happen</h3>
                    <p className="mt-lg-4 mt-3 mb-sm-5 mb-4">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. </p>
                    
                </div>
            </div>
        </div>
    </section>
    
    </>
    )
    }
   export default AboutSection;