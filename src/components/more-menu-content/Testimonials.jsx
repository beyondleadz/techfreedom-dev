import React,{useEffect,useState} from "react";

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
        	<div className="test" id="test">
	
    <div className="w3-heading-all">
           <h3 className="title-style-clients mb-2">What are "happy customers" says about us !!</h3>
</div>
   <div className=" w3_agileits_about_right">
       <section className="w3l-testimonials slider">
           <div className="flexslider">
            
               {/* <ul className="slides"> */}
               <OwlCarousel id="customer-testimonoals" style={{"maxWidth":1000}} className="owl-testimonial owl-carousel owl-theme mx-auto" {...options}>
                   <div className="item">
                       <div className="col-md-4 agileits_w3layouts_about_right">
                       <p>Vivamus euismod, nisi sit amet auctor consequat, tellus metus accumsan tellus, 
                               sed convallis leo felis feugiat sem.Pellentesque sit amet semper nisl, 
                               at congue elit ac eros sed nibh ornare iaculis.</p>
                           <h4>Christina Mark</h4>
                           <h5>Manager</h5>
                           
                       </div>
                       <div className="col-md-4 agileits_w3layouts_about_right">
                       <p>Vivamus euismod, nisi sit amet auctor consequat, tellus metus accumsan tellus, 
                               sed convallis leo felis feugiat sem.Pellentesque sit amet semper nisl, 
                               at congue elit ac eros sed nibh ornare iaculis.</p>
                           <h4>Christina Mark</h4>
                           <h5>Employee</h5>
                           
                       </div>
                       <div className="col-md-4 agileits_w3layouts_about_right">
                           <p>Vivamus euismod, nisi sit amet auctor consequat, tellus metus accumsan tellus, 
                               sed convallis leo felis feugiat sem.Pellentesque sit amet semper nisl, 
                               at congue elit ac eros sed nibh ornare iaculis.</p>
                           <h4>Christina Mark</h4>
                           <h5>Employee</h5>
                           
                       </div>
                       <div className="clearfix"></div>
                   </div>
                   <div className="item">
                       <div className="col-md-4 agileits_w3layouts_about_right">
                           <p>Vivamus euismod, nisi sit amet auctor consequat, tellus metus accumsan tellus, 
                               sed convallis leo felis feugiat sem.Pellentesque sit amet semper nisl, 
                               at congue elit ac eros sed nibh ornare iaculis.</p>
                           <h4>Thomas Winston</h4>
                           <h5>Manager</h5>
                           
                       </div>
                       <div className="col-md-4 agileits_w3layouts_about_right">
                           <p>Vivamus euismod, nisi sit amet auctor consequat, tellus metus accumsan tellus, 
                               sed convallis leo felis feugiat sem.Pellentesque sit amet semper nisl, 
                               at congue elit ac eros sed nibh ornare iaculis.</p>
                           <h4>Thomas Winston</h4>
                           <h5>Employee</h5>
                           
                       </div>
                       <div className="col-md-4 agileits_w3layouts_about_right">
                           <p>Vivamus euismod, nisi sit amet auctor consequat, tellus metus accumsan tellus, 
                               sed convallis leo felis feugiat sem.Pellentesque sit amet semper nisl, 
                               at congue elit ac eros sed nibh ornare iaculis.</p>
                           <h4>Thomas Winston</h4>
                           <h5>Incharge</h5>
                           
                       </div>
                       <div className="clearfix"></div>
                   </div>
                   <div className="item">
                       <div className="col-md-4 agileits_w3layouts_about_right">
                       
                           <p>Vivamus euismod, nisi sit amet auctor consequat, tellus metus accumsan tellus, 
                               sed convallis leo felis feugiat sem.Pellentesque sit amet semper nisl, 
                               at congue elit ac eros sed nibh ornare iaculis.</p>
                           <h4>Arabella</h4>
                           <h5>Volunteer</h5>
                           
                       </div>
                       <div className="col-md-4 agileits_w3layouts_about_right">
                           
                           
                           <p>Vivamus euismod, nisi sit amet auctor consequat, tellus metus accumsan tellus, 
                               sed convallis leo felis feugiat sem.Pellentesque sit amet semper nisl, 
                               at congue elit ac eros sed nibh ornare iaculis.</p>
                               <h4>Arabella</h4>
                           <h5>Employee</h5>
                       </div>
                       <div className="col-md-4 agileits_w3layouts_about_right">
                           <p>Vivamus euismod, nisi sit amet auctor consequat, tellus metus accumsan tellus, 
                               sed convallis leo felis feugiat sem.Pellentesque sit amet semper nisl, 
                               at congue elit ac eros sed nibh ornare iaculis.</p>
                           <h4>Arabella</h4>
                           <h5>Incharge</h5>
                           
                       </div>
                       <div className="clearfix"></div>
                   </div>
                   </OwlCarousel>
               {/* </ul> */}
           </div>
       </section>
   </div>
   <div className="clearfix"> </div>
</div>
   </>
    )
}

export default Testimonials;