import { createPortal } from 'react-dom';
import React from "react";
import { galleryDefinition } from './GalleryConstant'
// import GalleryWallImage from '../../assets/images/designer-3d-wallpaper-for-wall.jpg';
// import GalleryWallImage1 from '../../assets/images/designer-3d-wallpaper.jpg';
// import GalleryWallImage2 from '../../assets/images/designer-wallpaper-for-lobby-gallery.jpg';
// import GalleryWallImage3 from '../../assets/images/designer-nature-wallpaper.jpg';
// import GalleryWallImage4 from '../../assets/images/designer-wallpaper-for-drawing-room-wall.jpg';
// import GalleryWallImage5 from '../../assets/images/designer-wallpaper-for-wall.jpg';
// import GalleryWallImage6 from '../../assets/images/designer-wallpaper-for-wall-surface.jpg';
// import GalleryWallImage7 from '../../assets/images/designer-wallpaper-living-room.jpg';
// import GalleryWallImage8 from '../../assets/images/designer-floral-wallpaper.jpg';
// import GalleryWallImage9 from '../../assets/images/designer-nature-wallpaper-for-wall.jpg';
// import GalleryWallImage10 from '../../assets/images/designer-wallpaper.jpg';
// import GalleryWallImage11 from '../../assets/images/wallpaper-for-lobby-3d-designer-wallpaper.jpg';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../assets/css/swipebox.css'
const GalleryPopup = ({ closePopup, galleryCounter }) => {
    const options = {
        loop: false,
        margin: 0,
        nav: true,
        startPosition: galleryCounter,
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

    return createPortal(
        (
            <>
                <div className="galleryPopup">
                    <div className='close' onClick={closePopup}>X</div>
                    <div id="swipebox-container">
                        <OwlCarousel className="swipebox-slider owl-testimonial owl-carousel owl-theme mx-auto" {...options}>
                            {

                                galleryDefinition.map((def) => {
                                    return (
                                        <div className="slide gallery-grid">
                                            <img src={def.path} className="img-responsive" alt="/" />
                                        </div>
                                    )
                                })
                            }
                            {/* <div className="slide gallery-grid">
                                <img src={GalleryWallImage} className="img-responsive" alt="/" />
                            </div>

                            <div className="slide gallery-grid ">
                                <img src={GalleryWallImage1} className="img-responsive" alt="/" />
                            </div>

                            <div className="slide gallery-grid ">
                                <img src={GalleryWallImage3} className="img-responsive" alt="/" />
                            </div>
                            <div className="slide gallery-grid ">
                                <img src={GalleryWallImage4} className="img-responsive" alt="/" />
                            </div>
                            <div className="slide gallery-grid ">
                                <img src={GalleryWallImage5} className="img-responsive" alt="/" />
                            </div>
                            <div className="slide gallery-grid ">
                                <img src={GalleryWallImage6} className="img-responsive" alt="/" />
                            </div>
                            <div className="slide gallery-grid ">
                                <img src={GalleryWallImage7} className="img-responsive" alt="/" />
                            </div>
                            <div className="slide  gallery-grid ">
                                <img src={GalleryWallImage8} className="img-responsive" alt="/" />
                            </div>
                            <div className="slide gallery-grid ">
                                <img src={GalleryWallImage9} className="img-responsive" alt="/" />
                            </div>
                            <div className="slide gallery-grid ">
                                <img src={GalleryWallImage10} className="img-responsive" alt="/" />
                            </div>
                            <div className="slide gallery-grid ">
                                <img src={GalleryWallImage11} className="img-responsive" alt="/" />
                            </div> */}
                        </OwlCarousel>
                    </div>
                </div>

            </>
        ),
        document.getElementById('portal')
    )
}
export default GalleryPopup;