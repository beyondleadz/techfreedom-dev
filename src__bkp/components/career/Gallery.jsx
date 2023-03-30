import React,{useState} from "react";
import { useRoutes,NavLink } from "react-router-dom";

import Image1 from '../../assets/images/1.jpg';
import Image6 from '../../assets/images/6.jpg';
import Image8 from '../../assets/images/8.jpg';
const Gallery = () => {
    return (
        <>
        <div className="wrap">
			<div className="content-gallery">
				<div className="boxgrid caption">
				<img src={Image1} title="" alt=""/>
				<div className="cover boxcaption">
					<h3>Birthday Celebration</h3>
				</div>
			</div>
			</div>
			<div className="content-gallery">
				<div className="boxgrid caption">
				<img src={Image6} title="" alt=""/>
				<div className="cover boxcaption">
					<h3>Festival Party</h3>
				</div>
			</div>
			</div>

				<div className="content-gallery">
				<div className="boxgrid caption">
				<img src={Image8} title="" alt=""/>
				<div className="cover boxcaption">
					<h3>Indoor Game</h3>
				</div>
			</div>
			</div>
			
			</div>
			<div className="clear"> </div>

            <div className="mt-md-5 mt-4 mb-lg-0 mb-4" align="center"><NavLink className="btn btn-style" to={"/gallery"}>View Gallery</NavLink></div>
</>
    )
}
export default Gallery;