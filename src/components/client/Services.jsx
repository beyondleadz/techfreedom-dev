import React,{useState} from "react";
import { useRoutes,NavLink } from "react-router-dom";

import MNC11Image from '../../assets/images/mnc11.png';
import MNC22Image from  '../../assets/images/mnc22.png';
import MNC33Image from '../../assets/images/mnc33.png';
import MNC44Image from  '../../assets/images/mnc44.png';
import MNC55Image from '../../assets/images/mnc55.png';
import MNC66Image from  '../../assets/images/mnc661.png';
import MNC88Image from  '../../assets/images/mnc88.png';				
import MNC77Image from  '../../assets/images/mnc77.png';				

const Services=()=>{
    return (
    <>
       		<section id="why">
		<div className="jarallax w3-agileits-choose-grid">
			<div className="container">
				<h3 className="title-style-clients mb-2">Some of our satisfied clients</h3>
				<div className="row agile-choose-grids">
					<div className="col-sm-3 agile-choose-grid" position-relative>
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={MNC11Image} className="img-responsive" alt="partner" /></a>
						</div>
						
					</div>
					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={MNC22Image} className="img-responsive" alt="partner" /></a>
						</div>
						
					</div>
					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={MNC33Image} className="img-responsive" alt="partner" /></a>
						</div>
						
					</div>
					
					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={MNC44Image} className="img-responsive" alt="partner" /></a>
						</div>
						
					</div>
					
					
					<div className="col-sm-3 agile-choose-grid" position-relative>
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={MNC55Image} className="img-responsive" alt="partner" /></a>
						</div>
						
					</div>
					
					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={MNC66Image} className="img-responsive" alt="partner" /></a>
						</div>
						
					</div>
					
					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={MNC88Image} className="img-responsive" alt="partner" /></a>
						</div>
						
					</div>
					
					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={MNC77Image} className="img-responsive" alt="partner" /></a>
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