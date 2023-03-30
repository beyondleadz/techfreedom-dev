import React, { useState } from "react";
import { useRoutes, NavLink } from "react-router-dom";

import GalleryWallImage0 from '../../assets/images/designer-3d-wallpaper-for-wall.jpg';
import GalleryWallImage1 from '../../assets/images/designer-3d-wallpaper.jpg';
import GalleryWallImage2 from '../../assets/images/designer-wallpaper-for-lobby-gallery.jpg';
import GalleryWallImage3 from '../../assets/images/designer-nature-wallpaper.jpg';
import GalleryWallImage4 from '../../assets/images/designer-wallpaper-for-drawing-room-wall.jpg';
import GalleryWallImage5 from '../../assets/images/designer-wallpaper-for-wall.jpg';
import GalleryWallImage6 from '../../assets/images/designer-wallpaper-for-wall-surface.jpg';
import GalleryWallImage7 from '../../assets/images/designer-wallpaper-living-room.jpg';
import GalleryWallImage8 from '../../assets/images/designer-floral-wallpaper.jpg';
import GalleryWallImage9 from '../../assets/images/designer-nature-wallpaper-for-wall.jpg';
import GalleryWallImage10 from '../../assets/images/designer-wallpaper.jpg';
import GalleryWallImage11 from '../../assets/images/wallpaper-for-lobby-3d-designer-wallpaper.jpg';
import { galleryDefinition } from './GalleryConstant'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../assets/css/swipebox.css'
import GalleryPopup from './GalleryPopup';
const GalleryImage = () => {
	const [gallery, setGallery] = useState([])
	const [isOpen, setIsOpen] = useState(false)
	const [galleryCounter, setGaleryCounter] = useState(0)
	const options = {
		loop: false,
		margin: 0,
		nav: true,
		responsiveClass: true,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplaySpeed: 1000,
		autoplayHoverPause: false,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			480: {
				items: 1,
				nav: false
			},
			667: {
				items: 1,
				nav: true
			},
			1000: {
				items: 1,
				nav: true
			}
		}
	}

	const openCarusel = (index) => {
		setGaleryCounter(index)
		setIsOpen(true)
	}

	const closePopup = () => {
		setIsOpen(false)
	}

	return (
		<>
			<div className="gallery">
				<div className="container">
					<div className="w3-heading-all">
						<h3 className="title-style-clients mb-2">Enjoy Our Gallery!</h3>
					</div>
					<p> <strong>Beyond Leadz</strong> are so in trend these days which provides a different dimension to the room. Explore the range of modern wallpapers design from us and get the premium quality designer wallpapers both usable for residential and commercial purposes. The modern motif style, bold and graphic, the quirky style, some simple and subtle patterns, marble print, and so much more in sophisticated modern colours which are to die for.</p><br />

					<div className="inner_w3l_agile_grids-1">

						{
							galleryDefinition.map((def, index) => {
								return (
									<div className="col-md-3 gallery-grid gallery1" onClick={() => openCarusel(index)}>
										<NavLink to="#" className="swipebox"><img src={def.path} className="img-responsive" alt="/" />
											<div className="textbox">
												<h4>{def.title}</h4>
											</div>
										</NavLink>
									</div>
								)
							})
						}

						{/* <div className="col-md-3 gallery-grid gallery1" onClick={openCarusel}>
							<NavLink to="#" className="swipebox"><img src={GalleryWallImage0} className="img-responsive" alt="/" />
								<div className="textbox">
									<h4>designer 3d wallpaper</h4>
								</div>
							</NavLink>
						</div>

						<div className="col-md-3 gallery-grid gallery1"  onClick={openCarusel}>
							<NavLink to="#" className="swipebox"><img src={GalleryWallImage1} className="img-responsive" alt="/" />
								<div className="textbox">
									<h4>designer 3d wallpaper for wall</h4>
								</div>
							</NavLink>
						</div>

						<div className="col-md-3 gallery-grid gallery1"  onClick={openCarusel}>
							<NavLink to="#" className="swipebox"><img src={GalleryWallImage2} className="img-responsive" alt="/" />
								<div className="textbox">
									<h4>designer wallpaper for living room</h4>
								</div>
							</NavLink>
						</div>

						<div className="col-md-3 gallery-grid gallery1"  onClick={openCarusel}>
							<NavLink to="#" className="swipebox"><img src={GalleryWallImage3} className="img-responsive" alt="/" />
								<div className="textbox">
									<h4>designer nature wallpaper</h4>
								</div>
							</NavLink>
						</div>

						<div className="col-md-3 gallery-grid gallery1"  onClick={openCarusel}>
							<NavLink to="#" className="swipebox"><img src={GalleryWallImage4} className="img-responsive" alt="/" />
								<div className="textbox">
									<h4>designer wallpaper for drawing area</h4>
								</div>
							</NavLink>
						</div>

						<div className="col-md-3 gallery-grid gallery1"  onClick={openCarusel}>
							<NavLink to="#" className="swipebox"><img src={GalleryWallImage5} className="img-responsive" alt="/" />
								<div className="textbox">
									<h4>designer wallpaper for wall</h4>
								</div>
							</NavLink>
						</div>
						<div className="col-md-3 gallery-grid gallery1"  onClick={openCarusel}>
							<NavLink to="#" className="swipebox"><img src={GalleryWallImage6} className="img-responsive" alt="/" />
								<div className="textbox">
									<h4>designer wallpaper</h4>
								</div>
							</NavLink>
						</div>
						<div className="col-md-3 gallery-grid gallery1"  onClick={openCarusel}>
							<NavLink to="#" className="swipebox"><img src={GalleryWallImage7} className="img-responsive" alt="/" />
								<div className="textbox">
									<h4>designer brick wallpaper</h4>
								</div>
							</NavLink>
						</div>

						<div className="col-md-3 gallery-grid  gallery1" onClick={openCarusel}>
							<NavLink to="#" className="swipebox"><img src={GalleryWallImage8} className="img-responsive" alt="/" />
								<div className="textbox">
									<h4>designer floral wallpaper</h4>
								</div>
							</NavLink>
						</div>

						<div className="col-md-3 gallery-grid  gallery1" onClick={openCarusel}>
							<NavLink to="#" className="swipebox"><img src={GalleryWallImage9} className="img-responsive" alt="/" />
								<div className="textbox">
									<h4>3d designer wallpaper</h4>
								</div>
							</NavLink>
						</div>

						<div className="col-md-3 gallery-grid  gallery1" onClick={openCarusel}>
							<NavLink to="#" className="swipebox"><img src={GalleryWallImage10} className="img-responsive" alt="/" />
								<div className="textbox">
									<h4>designer wallpaper</h4>
								</div>
							</NavLink>
						</div>

						<div className="col-md-3 gallery-grid  gallery1" onClick={openCarusel}>
							<NavLink to="#" className="swipebox"><img src={GalleryWallImage11} className="img-responsive" alt="/" />
								<div className="textbox">
									<h4>3d designer spiritual wallpaper</h4>
								</div>
							</NavLink>
						</div> */}
						<div className="clearfix"> </div>
					</div>

				</div>
			</div>
			{
				isOpen && <GalleryPopup closePopup={closePopup} galleryCounter={galleryCounter} />
			}

		</>
	)
}
export default GalleryImage;