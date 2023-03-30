import React,{useState} from "react";
import FeatureSearchImage from "../../assets/images/features-search-icon.png";
import ProspectSearchImage from "../../assets/images/prospect-search.jpg";
import leadsImage from "../../assets/images/leads.jpg";

import FeatureOrgImage from "../../assets/images/features-org-icon.png";

import FeaturesImageIntelligence from '../../assets/images/features-social-intelligenc-icon.png';
import FeaturesRadiusImage from  '../../assets/images/features-radius-icon.png';
				

const Faq=()=>{
    return (
    <>
       <div className="w3l-faq-block py-5" id="faq">
        <div className="container py-lg-5">
            <div className="row">
                <div className="col-lg-7">
                    <section className="w3l-faq" id="faq">
                        <h3 className="title-style">Learn more from our FAQ</h3>
                        <p className="mt-3">Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
                            doloribus asperiores repellat.</p>
                        <div className="faq-page mt-4">
                            <ul>
                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>How to process the funtion for consulting?</h2>
                                    <p>Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere
                                        quae quasi fuga, ad corrupti libero omnis sapiente non assumenda,
                                        incidunt officiis eaque iste minima autem.</p>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>How much should I capitalize with at the beginning?</h2>
                                    <p>Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere
                                        quae quasi fuga, ad corrupti libero omnis sapiente non assumenda,
                                        incidunt officiis eaque iste minima autem.</p>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>Where should I incorporate my business?</h2>
                                    <p>Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere
                                        quae quasi fuga, ad corrupti libero omnis sapiente non assumenda,
                                        incidunt officiis eaque iste minima autem.</p>
                                </li>
                                <li>
                                    <input type="checkbox" />
                                    <i></i>
                                    <h2>We denounce with righteous?</h2>
                                    <p>Voluptates amet earum velit nobis aliquam laboriosam nihil debitis facere
                                        quae quasi fuga, ad corrupti libero omnis sapiente non assumenda,
                                        incidunt officiis eaque iste minima autem.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div className="col-lg-5 mt-lg-0 mt-sm-5 mt-4">
                    <div className="banner-form-w3">
                        <form>
                            <h3 className="title-style">Request a <span>Quote</span></h3>
                            <p className="mt-3 text-dark" style={{"color":"#343a40"}}>Fill all information details to consult with us to get sevices
                                from us</p>
                            <div className="form-style-w3ls mt-4">
                                <input placeholder="Your Name" name="name" type="text" required=""/>
                                <input placeholder="Your Email" name="email" type="email" required=""/>
                                <input placeholder="Phone Number" name="phone" type="text" required=""/>
                                <button className="btn btn-style w-100"> Get a Quote</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    </>
    )
    }
    export default Faq;