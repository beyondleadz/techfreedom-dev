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
                            <i className="fas fa-sitemap blue-clr-bg"></i>                        </div>
                        <h4 className="number">01</h4>
                        <h4><a href="#url">ORG. Chart</a></h4>
                        <p>A visual representation to sales teams to know the org. structure and hierarchy, helping them to identify roles, responsibilities, and key decision makers.</p>
                        <a href="#read" className="read">Read more</a>                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-chart-line primary-clr-bg"></i>                        </div>
                        <h4 className="number">02</h4>
                        <h4><a href="#url">Sales Triggers</a></h4>
                        <p>Identify key events, announcements or signals that can help sales team plan their outreach and influence customer to make a purchase.</p>
                        <a href="#read" className="read">Read more</a>                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-paper-plane green-clr-bg"></i>                        </div>
                        <h4 className="number">03</h4>
                        <h4><a href="#url">Direct Dials and Emails</a></h4>
                        <p>Access to Direct phone numbers and Business emails for effective communication and outreach.</p>
                        <a href="#read" className="read">Read more</a>                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-user-cog primary-clr-bg"></i>                        </div>
                        <h4 className="number">04</h4>
                        <h4><a href="#url">Lead Engagement</a></h4>
                        <p>Integrated lead management to generate leads, build and nurture relationships and increase the lead conversion.</p>
                        <a href="#read" className="read">Read more</a>                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-copy green-clr-bg"></i>                        </div>
                        <h4 className="number">05</h4>
                        <h4><a href="#url">Reports & Analysis</a></h4>
                        <p>Instant Reports and analysis to help you  make data-driven decisions with insights into key performance indicators and opportunities.</p>
                        <a href="#read" className="read">Read more</a>                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4">
                    <div className="box-wrap">
                        <div className="icon">
                            <i className="fas fa-link blue-clr-bg"></i>                        </div>
                        <h4 className="number">06</h4>
                        <h4><a href="#url">Integrations</a></h4>
                        <p>Integrate 3rd party apps to streamline lead management processes, improve communication and provide valuable insights to boost sales performance.</p>
                        <a href="#read" className="read">Read more</a>                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}

export default HomeServices;