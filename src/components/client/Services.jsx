import React,{useState} from "react";
import { useRoutes,NavLink } from "react-router-dom";

import PanasonicImage from '../../assets/images/client-logo-panasonic.png';
import MakeMyTripImage from  '../../assets/images/client-logo-make-my-trip.png';
import SodexoImage from '../../assets/images/client-logo-sodexo.png';
import TataImage from  '../../assets/images/client-logo-tata.png';
import EyImage from '../../assets/images/client-logo-ey.png';
import PeaceChannelImage from  '../../assets/images/client-logo-peace-channel.png';
import CanonImage from  '../../assets/images/client-logo-canon.png';				
import BMWImage from  '../../assets/images/client-logo-bmw.png';				
import MahindraRiseImage from  '../../assets/images/client-logo-mahindra-rise.png';	
import AirtelImage from  '../../assets/images/client-logo-airtel.png';				
import ITCImage from  '../../assets/images/client-logo-itc.png';				
import IIMAhamadabadImage from  '../../assets/images/client-logo-iim-ahamadabad.png';				
import LemonTreeHotelImage from  '../../assets/images/client-logo-lemon-tree-hotel.png';				
import WurthImage from  '../../assets/images/client-logo-wurth.png';				
import DellImage from  '../../assets/images/client-logo-dell.png';				
import SimenseImage from  '../../assets/images/client-logo-simense.png';				
import CarrefourImage from  '../../assets/images/client-logo-carrefour.png';				
import BimtechImage from  '../../assets/images/client-logo-bimtech.png';				
import RamcoImage from  '../../assets/images/client-logo-ramco.png';				
// import Image from  '../../assets/images/client-logo-.png';				


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
						<a href="#" className="client-logo"><img src={PeaceChannelImage} className="img-responsive" alt="client" /></a>
						</div>						
					</div>

					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={CanonImage} className="img-responsive" alt="client" /></a>
						</div>
					</div>

					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={EyImage} className="img-responsive" alt="client" /></a>
						</div>
					</div>

					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={MakeMyTripImage} className="img-responsive" alt="client" /></a>
						</div>
					</div>


					<div className="col-sm-3 agile-choose-grid" position-relative>
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={BMWImage} className="img-responsive" alt="client" /></a>
						</div>
					</div>

					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={PanasonicImage} className="img-responsive" alt="client" /></a>
						</div>						
					</div>
					
					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={MahindraRiseImage} className="img-responsive" alt="client" /></a>
						</div>
					</div>					
					
					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={AirtelImage} className="img-responsive" alt="client" /></a>
						</div>						
					</div>

					<div className="col-sm-3 agile-choose-grid" position-relative>
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={ITCImage} className="img-responsive" alt="client" /></a>
						</div>
					</div>

					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={IIMAhamadabadImage} className="img-responsive" alt="client" /></a>
						</div>
					</div>
					
					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={LemonTreeHotelImage} className="img-responsive" alt="client" /></a>
						</div>
					</div>					
					
					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={WurthImage} className="img-responsive" alt="client" /></a>
						</div>						
					</div>

					<div className="col-sm-3 agile-choose-grid" position-relative>
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={DellImage} className="img-responsive" alt="client" /></a>
						</div>
					</div>

					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={SimenseImage} className="img-responsive" alt="client" /></a>
						</div>
					</div>
					
					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={TataImage} className="img-responsive" alt="client" /></a>
						</div>
					</div>	

					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={SodexoImage} className="img-responsive" alt="client" /></a>
						</div>
					</div>


					<div className="col-sm-3 agile-choose-grid" position-relative>
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={CarrefourImage} className="img-responsive" alt="client" /></a>
						</div>						
					</div>
					
					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={BimtechImage} className="img-responsive" alt="client" /></a>
						</div>
					</div>					
					
					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={RamcoImage} className="img-responsive" alt="client" /></a>
						</div>
					</div>
					
					<div className="col-sm-3 agile-choose-grid">
						<div className="choose-icon">
						<a href="#" className="client-logo"><img src={RamcoImage} className="img-responsive" alt="client" /></a>
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