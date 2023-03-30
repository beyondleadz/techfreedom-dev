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
            <div className="title-heading-w3 mx-auto text-center mt-4 pb-xl-4" style={{"maxWidth":600}}>
                <h3 className="title-style mb-2">What Our Clients Say!</h3>
                <p>Valuable & Commendable Feedback from Our Customers</p>
            </div>
            
            <OwlCarousel id="customer-testimonoals" style={{"maxWidth":1000}} className="owl-testimonial owl-carousel owl-theme mx-auto" {...options}>
                <div className="item">
                    <div className="slider-info">
                        <div className="img-circle">
                            <img src={Testi1Image} className="img-fluid rounded" alt="client image"/>                        </div>
                        <div className="message-info">
                            <span className="fa fa-quote-left mr-2"></span>
                            <div className="message">“BeyonLeadz's database is comprehensive and well-maintained, with accurate contact information and detailed segmentation that allows me to tailor my outreach to specific audiences. The data is also verified and updated regularly, which gives me confidence that I'm reaching the right people at the right time”.</div>
                            <div className="name">- Happy Customer</div>
                            <div className="desp">Comapany ,City</div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="slider-info">
                        <div className="img-circle">
                            <img src={Testi2Image} className="img-fluid rounded" alt="client image"/>                        </div>
                        <div className="message-info">
                            <span className="fa fa-quote-left mr-2"></span>
                            <div className="message">"I highly recommend BeyondLeadz to anyone looking for high-quality data that can help drive their marketing efforts. They are a reliable and trustworthy partner, and I look forward to continuing to work with them in the future."</div>
                            <div className="name">- Happy Customer</div>
                            <div className="desp">Comapany, City</div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="slider-info">
                        <div className="img-circle">
                            <img src={Testi3Image} className="img-fluid rounded" alt="client image"/>                        </div>
                        <div className="message-info">
                            <span className="fa fa-quote-left mr-2"></span>
                            <div className="message">"I have been using  BeyondLeadz for sometime now, and I have to say that their data is top-notch. As a marketer, I rely heavily on accurate and up-to-date data to reach my target audience, and BeyondLeadz has consistently delivered."</div>
                            <div className="name">- Happy Customer</div>
                            <div className="desp">Comapany, City</div>
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