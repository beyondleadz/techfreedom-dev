import React,{useState} from "react";

const HomeServices = () => {
    return (
        <section className="home-services py-5" id="services">
        <div className="container py-md-5 py-4">
            <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4 pb-xl-4" style={{"maxWidth":600}}>
                <h3 className="title-style mb-2">What's Features We Are Offering to Our Customers</h3>
                <p>Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
                    repellat.</p>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-laptop-code blue-clr-bg"></i>                        </div>
                        <h4 className="number">01</h4>
                        <h4><a href="#url">Cloud Computing</a></h4>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                            doloret quas saepe autem, dolor set.</p>
                        <a href="#read" className="read">Read more</a>                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-chart-bar primary-clr-bg"></i>                        </div>
                        <h4 className="number">02</h4>
                        <h4><a href="#url">Business Strategy</a></h4>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                            doloret quas saepe autem, dolor set.</p>
                        <a href="#read" className="read">Read more</a>                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-copy green-clr-bg"></i>                        </div>
                        <h4 className="number">03</h4>
                        <h4><a href="#url">Reports Analysis</a></h4>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                            doloret quas saepe autem, dolor set.</p>
                        <a href="#read" className="read">Read more</a>                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-marker primary-clr-bg"></i>                        </div>
                        <h4 className="number">04</h4>
                        <h4><a href="#url">Decision Maker</a></h4>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                            doloret quas saepe autem, dolor set.</p>
                        <a href="#read" className="read">Read more</a>                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-user-cog green-clr-bg"></i>                        </div>
                        <h4 className="number">05</h4>
                        <h4><a href="#url">Customer Oriented</a></h4>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                            doloret quas saepe autem, dolor set.</p>
                        <a href="#read" className="read">Read more</a>                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-coins blue-clr-bg"></i>                        </div>
                        <h4 className="number">06</h4>
                        <h4><a href="#url">Solution Focused</a></h4>
                        <p>Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                            doloret quas saepe autem, dolor set.</p>
                        <a href="#read" className="read">Read more</a>                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}

export default HomeServices;