import React,{useState} from "react";


const ContactForm=()=>{
    return (
    <>
       <div className="w3l-contact-info py-5" id="contact">
        <div className="container py-md-5 py-4">
            <div className="align-self">
                <div className="contact-infos">
                    <div className="single-contact-infos">
                        <div className="icon-box"><i className="fas fa-map-marker-alt primary-clr-bg"></i></div>
                        <div className="text-box">
                            <h3 className="mb-3">Address info</h3>
                            <p>Coffee bean, 343 cafe coffee lane, #2214 cravel street, NY.</p>
                        </div>
                    </div>
                    <div className="single-contact-infos">
                        <div className="icon-box"><i className="fas fa-clock green-clr-bg"></i></div>
                        <div className="text-box">
                            <h3 className="mb-3">Opening hours</h3>
                            <p className=""> Monday – Friday : 9am - 6pm</p>
                            <p className=""> Saturday : 10am - 4pm</p>
                        </div>
                    </div>
                    <div className="single-contact-infos">
                        <div className="icon-box"><i className="fas fa-envelope-open-text blue-clr-bg"></i></div>
                        <div className="text-box">
                            <h3 className="mb-3">Contact info</h3>
                            <p className=""><a href="tel:+1(21) 234 4567">+1(21) 234 4567</a></p>
                            <p className=""> <a href="mailto:info@support.com">info@support.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5 pt-md-5">
                <div className="col-lg-6 map order-lg-1 order-2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001161.424489281!2d-78.01909140705047!3d42.72866436845163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1570786994395!5m2!1sen!2sin"
                        frameborder="0" allowfullscreen=""></iframe>
                </div>
                <div className="col-lg-6 form-inner-cont order-lg-2 order-1 mb-lg-0 mb-5">
                    <form className="signin-form">
                        <div className="form-input">
                            <input type="text" name="w3lName" id="w3lName" placeholder="Your name"/>
                        </div>
						 <div className="form-input">
                            <input type="text" name="w3lPhone" id="w3lPhone" placeholder="Your phone number"
                                required=""/>
                        </div>
                        <div className="form-input">
                            <input type="email" name="w3lSender" id="w3lSender" placeholder="Your email address"
                                required=""/>
                        </div>
                        <div className="form-input">
                            <textarea name="w3lMessage" id="w3lMessage" placeholder="Your message"
                                required=""></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="btn btn-style btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
   
  
    </>
    )
    }
    export default ContactForm;