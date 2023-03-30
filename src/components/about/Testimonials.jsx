import React,{useEffect,useState} from "react";
import Testi1Image from "../../assets/images/testi1.jpg"
import Testi2Image from "../../assets/images/testi2.jpg"
import Testi3Image from "../../assets/images/testi3.jpg"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonials = () => {  
    const options={
        loop: true,
                margin: 0,
                nav: true,
                responsiveClass: true,
                autoplay: true,
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

    return(
        <>
        <section className="w3l-testimonials pb-5" id="testimonials">
        <div className="container py-md-5 py-4">
            <div className="title-heading-w3 mx-auto text-center mb-5 pb-xl-4" style="max-width:600px">
                <h3 className="title-style mb-2">What Our Clients Say!</h3>
                <p>Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
                    repellat.</p>
            </div>
            
            <OwlCarousel id="customer-testimonoals" style={{"maxWidth":1000}} className="owl-testimonial owl-carousel owl-theme mx-auto" {...options}>
            <div className="item">
                    <div className="slider-info">
                        <div className="img-circle">
                            <img src={Testi1Image} className="img-fluid rounded" alt="client image"/>
                        </div>
                        <div className="message-info">
                            <span className="fa fa-quote-left mr-2"></span>
                            <div className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id
                                accusantium officia quod quasi necessitatibus perspiciatis Harum error provident
                                quibusdam tenetur dolor sit amet.Nulla mollis dapibus nunc, ut rhoncus turpis sodales
                                quis. Integer sit amet mattis quam.consectetur adipisicing elit.Lorem ipsum, dolor sit
                                amet consectetur adipisicing elit</div>
                            <div className="name">- Johnson</div>
                            <div className="desp">Comapany ,City</div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="slider-info">
                        <div className="img-circle">
                            <img src={Testi2Image} className="img-fluid rounded" alt="client image"/>
                        </div>
                        <div className="message-info">
                            <span className="fa fa-quote-left mr-2"></span>
                            <div className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id
                                accusantium
                                officia quod quasi necessitatibus perspiciatis Harum error provident
                                quibusdam tenetur.Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit
                                amet mattis quam.consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit</div>
                            <div className="name">- Sami Wade</div>
                            <div className="desp">Comapany ,City</div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="slider-info">
                        <div className="img-circle">
                            <img src={Testi3Image} className="img-fluid rounded" alt="client image"/>
                        </div>
                        <div className="message-info">
                            <span className="fa fa-quote-left mr-2"></span>
                            <div className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id
                                accusantium
                                officia quod quasi necessitatibus perspiciatis Harum error provident
                                quibusdam tenetur.Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit
                                amet mattis quam.consectetur adipisicing elitLorem ipsum, dolor sit amet consectetur
                                adipisicing elit.</div>
                            <div className="name">- Smith roy</div>
                            <div className="desp">Comapany ,City</div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    </section> 
   </>
    )
}

export default Testimonials;