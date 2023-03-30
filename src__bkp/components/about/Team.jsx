import React,{useState} from "react";
import UserMaleImage from '../../assets/images/user-male-icon.jpg'
import UserFemaleImage from '../../assets/images/user-female-icon.jpg'
const Team = () => {
    return(
        <section className="w3l-team py-5" id="team">
        <div className="container py-md-5 py-4">
            <div className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4 pb-xl-4" style={{maxWidth:600}}>
                <h3 className="title-style mb-2">Get Advice From Expert</h3>
                <p>Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
                    repellat.</p>
            </div>
            <div className="row text-center">
                <div className="col-md-3 col-6">
                    <div className="team-grids text-center">
                        <img src={UserMaleImage} className="img-fluid" alt=""/>
                        <div className="team-info">
                            <div className="caption">
                                <div className="social-icons-section text-center">
                                    <a className="fac" href="#url">
                                        <i className="fab fa-facebook-f"></i></a>
                                    <a className="twitter" href="#url">
                                        <i className="fab fa-twitter"></i></a>                                </div>
                            </div>
                        </div>
                    </div>
                    <h4>John Doe</h4>
                    <h6>Founder and CEO</h6>
                </div>
                <div className="col-md-3 col-6">
                    <div className="team-grids text-center">
                        <img src={UserMaleImage} className="img-fluid" alt=""/>
                        <div className="team-info">
                            <div className="caption">
                                <div className="social-icons-section text-center">
                                    <a className="fac" href="#url">
                                        <i className="fab fa-facebook-f"></i>                                    </a>
                                    <a className="twitter" href="#url">
                                        <i className="fab fa-twitter"></i>                                    </a>                                </div>
                            </div>
                        </div>
                    </div>
                    <h4>Martin ker</h4>
                    <h6>Partner & co-founder</h6>
                </div>
                <div className="col-md-3 col-6 mt-md-0 mt-sm-5 mt-5">
                    <div className="team-grids text-center">
                        <img src={UserMaleImage} className="img-fluid" alt=""/>
                        <div className="team-info">
                            <div className="caption">
                                <div className="social-icons-section text-center">
                                    <a className="fac" href="#url">
                                        <i className="fab fa-facebook-f"></i>                                    </a>
                                    <a className="twitter" href="#url">
                                        <i className="fab fa-twitter"></i>                                    </a>                                </div>
                            </div>
                        </div>
                    </div>
                    <h4> Alexander</h4>
                    <h6>Chairmen</h6>
                </div>
                <div className="col-md-3 col-6 mt-md-0 mt-sm-5 mt-5">
                    <div className="team-grids text-center">
                        <img src={UserFemaleImage} className="img-fluid" alt=""/>
                        <div className="team-info">
                            <div className="caption">
                                <div className="social-icons-section text-center">
                                    <a className="fac" href="#url">
                                        <i className="fab fa-facebook-f"></i>                                    </a>
                                    <a className="twitter" href="#url">
                                        <i className="fab fa-twitter"></i>                                    </a>                                </div>
                            </div>
                        </div>
                    </div>
                    <h4>Elizabeth </h4>
                    <h6>Manager</h6>
                </div>
            </div>
        </div>
    </section>
    
    )
}
export default Team;