import React, { useState } from "react";
import logo from "../../assets/images/icici.jpg";
import OrgChartImg from "../../assets/images/org-chart-employee-icon.png";


const SummaryContent = () => {
    return (
        <>
<div id="content-wrapper" className="d-flex flex-column">
<div className="container-fluid">
<div className="row">
			<div className="col-md-8 col-custom">
					<div className="row">
					<div className="col-md-12">
          <div className="card shadow mt-4 mb-4">
            
<div className="card-header font-weight-bold">
<div className="navigation ">
        <ul className="nav" id="myTabjustified" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="top-tabs1 active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <i className="fa fa-city pr-2" style={{"color":"#5D44FF"}}></i>Summary
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="top-tabs1"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              <i className="fa fa-user-friends pr-2" style={{"color":"#5D44FF"}}></i>Employees
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="top-tabs1"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <i className="fa fa-sitemap pr-2" style={{"color":"#5D44FF"}}></i>Org Chart
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="top-tabs1"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <i className="fa fa-suitcase pr-2" style={{"color":"#5D44FF"}}></i>filter By Dept.</button>
          </li>
        </ul>
      </div></div>
<div className="card-body">
    <div className="row">

    <table className="table table-responsive ">
  <tbody>
    <tr><td colspan="2"><span className="font-weight-bold">Deutsche Bank</span>,a Frankfurt-based global investment bank, offers financial products and services to corporate and institutional clients.
</td></tr>
<tr>
  <td className="row-cols-5 td-w-2"><i className=" fa  fa-globe mr-2" aria-hidden="true"></i><strong>Website</strong></td>
  <td><a data-ceid="company_website" title="Amazon website" target="_blank" rel="nofollow noreferrer" href="https://www.amazon.com">
                                        https://www.Deutsche.com</a></td></tr>
  <tr>  <td><i className=" fa  fa-money-check mr-2"></i><strong>Revenue</strong></td>
  <td>$280.52 billion</td> </tr> <tr> <td><i className=" fa fa-university mr-2" aria-hidden="true"></i><strong>Funding</strong></td>
  <td>$48.00 Million</td></tr>
  <tr> <td><i className=" fa  fa-users mr-2"></i><strong>Employees</strong></td>
 <td className="employee-count" >809,221 <span>
    (<a rel="nofollow noreferrer" title="Search for Amazon Employees" href="/person?employer[]=&quot;amazon.com&quot;" target="_blank">687,052 on Deutsche Bank</a>)
  </span></td></tr>
                
  <tr> <td><i className=" fa  fa-map-pin mr-2"></i><strong>Founded</strong></td>
                            <td>1994</td> </tr><tr>
                        
  
                            <td><i className=" fa  fa-map-marker mr-2"></i><strong>Address</strong></td>
                            <td> <a data-ceid="company_address" target="_blank" title="Amazon location" rel="nofollow noreferrer" href="https://www.google.com/maps?q=410%20Terry%20Ave%20N%2C%20Seattle%2C%20Washington%2098109%2C%20US">
                                        410 Terry Ave N, Seattle, Washington 98109, US
                                    </a> </td> </tr>
                                     <tr><td><i className=" fa  fa-mobile mr-2"></i><strong>Phone</strong></td>
                            <td>
                                <a rel="nofollow noreferrer" title="Amazon's phone" href="tel:(206) 266-1000">(206) 266-1000</a>
                            </td> </tr><tr><td><i className=" fa  fa-fax mr-2"></i><strong>Fax</strong></td>
                        <td>
                            (206) 266-1821
                        </td>
                                            </tr>
 <tr><td><i className=" mr-2 fa  fa-laptop"></i><span className="font-weight-bold" >Technologies</span></td>
<td><div >
 <span> JavaScript, HTML, PHP
  <strong> +1282 more</strong> <strong> (view full list) </strong>
                        
                        </span>
                    </div>
                </td> </tr>
  
                <tr>
                
                    </tr><tr> <td><i className=" fa fa-th-large mr-2"></i><strong>Category</strong></td>
                            <td><span>Retail,</span><span>Internet,</span>
                                
                                <span>Software Development,</span>
                                
                                <span>Consumer Electronics &amp; Computers,</span>
                                
                                <span>Business Development,</span>
                                
                                <span>e-Commerce,</span>
                                
                                <span>Software,</span>
                                
                                <span>Crowdsourcing,</span>
                                
                                <span>Retail Software,</span>
                                
                                <span>Delivery,</span>
                                
                                <span>Operations,</span>
                                
                                <span>Administrative Services,</span>
                                
                                <span>Records, Videos &amp; Books,</span>
                                
                                <span>Delivery Service,</span>
                                
                                <span>Television Stations,</span>
                                
                                <span>Transportation,</span>
                                
                                <span>Broadcasting,</span>
                                
                                <span>E-Commerce,</span>
                                
                                <span>Cable &amp; Satellite,</span>
                                
                                <span>Commerce and Shopping,</span>
                                
                                <span>Media &amp; Internet,</span>
                                
                                <span>Telecommunications,</span>
                                
                                <span>Internet Services,</span>
                                
                                <span>SaaS,</span>
                                
                                <span>Shipping</span>
                                
                            </td>
                    </tr> 
      
          </tbody></table>

</div>
</div>
 </div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
          <div className="card shadow mt-4 mb-4">
<div className="card-header font-weight-bold">
Contacts</div>
<div className="card-body">
     <div className="row">
    <div className="container">
  <div className="row fs-14">
    <div className="col-8 col-sm-6 pt-2"><p className="font-weight-bold">Abid Nasir</p>
    <p>Global COO Lending and Deposits, Wealth Management</p>
<p>Executive</p>
<p>Management</p></div>
    <div className="col-6 col-sm-3 pt-2">1 email found</div>
    <div className="col-6 col-sm-3 text-right ">
    <div className="btn btn-primary text-black mb-3 align-items-center"> <i className="fas fa-bolt pr-2"></i>VIEW                
                </div><div className="buttons-container1">
                 <ul className="d-flex  m-mt">
                <li>
                  <a
                    className=" mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="right-icons la la-envelope" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className=" mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="right-icons las la-share-square" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="  mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="right-icons la la-print" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="  mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="right-icons la la-star" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div></div>
    <div className="w-100"></div>
    <div className="col-8 col-sm-6 pt-2"><p className="font-weight-bold">Abid Nasir</p>
    <p>Global COO Lending and Deposits, Wealth Management</p>
<p>Executive</p>
<p>Management</p></div>
    <div className="col-6 col-sm-3 pt-2">1 email found</div>
    <div className="col-6 col-sm-3 text-right">
    <div className="btn btn-primary text-black mb-3 align-items-center"> <i className="fas fa-bolt pr-2"></i>VIEW                
                </div>
                <div className="buttons-container1">
                 <ul className="d-flex  m-mt">
                 <li>
                  <a
                    className="  mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="right-icons la la-envelope" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="  mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="right-icons las la-share-square" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="  mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="right-icons la la-print" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="  mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="right-icons la la-star" aria-hidden="true"></i>
                  </a>
                </li>
                
              </ul>
            </div>
                </div>
                <div className="w-100"></div>
    <div className="col-8 col-sm-6 pt-2"><p className="font-weight-bold">Abid Nasir</p>
    <p>Global COO Lending and Deposits, Wealth Management</p>
<p>Executive</p>
<p>Management</p></div>
    <div className="col-6 col-sm-3 pt-2">1 email found</div>
    <div className="col-6 col-sm-3 text-right">
    <div className="btn btn-primary text-black mb-3 align-items-center"> <i className="fas fa-bolt pr-2"></i>VIEW                
                </div>
                <div className="buttons-container1">
                 <ul className="d-flex  m-mt">
                 <li>
                  <a
                    className="  mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="right-icons la la-envelope" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="  mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="right-icons las la-share-square" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="  mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="right-icons la la-print" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="  mr-2"
                    href="#"
                    id=""
                    role="button"
                    data-toggle=""
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="right-icons la la-star" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
                </div>
  </div>
</div>

</div>
</div>
 </div>

					</div>
				</div>

        	<div className="row">
					<div className="col-md-12">
          <div className="card shadow mt-4 mb-4">
<div className="card-header font-weight-bold">Org Chart
</div>
<div className="card-body">
    <div className="row">
    <div className="orgchart">
<nav className="org">
			<ul>
				<li>
					<a href="#"><span><img src={OrgChartImg} /><br />General Manager</span></a>
					<ul>
						<li>
							<a href="#">Manager1</a>
							<ul>
								<li>
									<a href="#">Code</a>
									<ul>
										<li>
											<a href="#">Html</a>
											<ul>
												<li>
													<a href="#">Css</a>
													<ul>
														<li>
															<a href="#">Jquery</a>
														</li>
													</ul>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li>
									<a href="#">Graph</a>
									<ul>
										<li>
											<a href="#">Image</a>
											<ul>
												<li>
													<a href="#">Design</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<a href="#">Manager2</a>
							<ul>
								<li>
									<a href="#">Category</a>
									<ul>
										<li>
											<a href="#">Code</a>
										</li>
										<li>
											<a href="#">Graph</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<a href="#">Manager3</a>
							<ul>
								<li>
									<a href="#">Vcard</a>
									
								</li>
								<li>
									<a href="#">Map</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</nav></div>

</div>
</div>
 </div>
					</div>
				</div>
        
			</div>
			<div className="col-md-4 col-custom-2">
      <div className="card shadow mt-4 mb-4">
 <div className="card-header font-weight-bold">
 Similar Companies</div>
 <div className="card-body">
 <div className="row">
    <div className="col-3 s-company img-responsive">
    <img src={logo} />
    </div>
    <div className="col">
     <div className="mb-2"><h5>ICICI Corporate Banking</h5></div>
      
      <p className="font-weight-bold">India, London, England, United Kingdom</p>
      <p>179 Contacts . 10001+ employees .</p>
      <button className="btn btn-dark mr-2 p-1">Banking</button>
      <button className="btn btn-dark mr-2 p-1">Finance</button>
      <button className="btn btn-dark mr-2 p-1">Services</button>
      <button className="btn btn-dark mr-2 p-1">FinTech</button>
      <button className="btn btn-light mr-2 p-1">More..</button>
      <span className="fs-12">ICICI is a global financial services company that provides various financial products and services worldwide.</span>
      
    </div>
  </div>
  <div className="row">
    <div className="col-3 mt-3 s-company img-responsive">
    <img src={logo} />
    </div>
    <div className="col mt-3">
     <div className="mb-2"><h5>ICICI Corporate Banking</h5></div>
      
      <p className="font-weight-bold">India, London, England, United Kingdom</p>
      <p>179 Contacts . 10001+ employees .</p>
      <button className="btn btn-dark mr-2 p-1">Banking</button>
      <button className="btn btn-dark mr-2 p-1">Finance</button>
      <button className="btn btn-dark mr-2 p-1">Services</button>
      <button className="btn btn-dark mr-2 p-1">FinTech</button>
      <button className="btn btn-light mr-2 p-1">More..</button>
      <span className="fs-12">ICICI is a global financial services company that provides various financial products and services worldwide.</span>
      
    </div>
  </div>
                               </div>
 </div>
			</div>
		</div>


                    
                </div>
</div>    
        </>
    )
}

export default SummaryContent