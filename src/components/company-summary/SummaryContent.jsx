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
            
<div className="card-header1">
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
              <i className="fa fa-city pr-2" style={{"color":"#5D44FF"}}></i>About Company
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
              <i className="fa fa-user-friends pr-2" style={{"color":"#5D44FF"}}></i> Key Executives
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
              <i className="fa fa-sitemap pr-2" style={{"color":"#5D44FF"}}></i> Filter by Department 
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
              <i className="fa fa-suitcase pr-2" style={{"color":"#5D44FF"}}></i>Org.Chart</button>
          </li>
        </ul>
      </div></div>
<div className="card-body">
    <div className="row">

    <table className="table table-responsive ">
  <tbody>
    <tr><td colspan="2"><span className="font-weight-bold">Deutsche Bank</span>,a Frankfurt-based global investment bank, offers financial products and services to corporate and institutional clients.
</td></tr>
<tr> <td className="width3"><i className=" fa  fa-users mr-2"></i><strong>Employees Range</strong></td>
 <td className="employee-count" >809,221 <span>
    (<a rel="nofollow noreferrer" title="Search for Amazon Employees" href="/person?employer[]=&quot;amazon.com&quot;" target="_blank">687,052 on Deutsche Bank</a>)
  </span></td></tr>
  <tr>  <td><i className=" fa  fa-money-check mr-2"></i><strong>Revenue Range</strong></td>
  <td>$280.52 billion</td> </tr> <tr> <td><i className=" fa fa-university mr-2" aria-hidden="true"></i><strong>Company Type</strong></td>
  <td>$48.00 Million</td></tr>
  
                
  <tr> <td><i className=" fa  fa-map-pin mr-2"></i><strong>Industry</strong></td>
                            <td>Banking, Finance</td> </tr>
                                     
 <tr><td><i className=" mr-2 fa  fa-laptop"></i><span className="font-weight-bold" >Technographics</span></td>
<td><div >
 <span> JavaScript, HTML, PHP
  <strong> +1282 more</strong> <strong> (view full list) </strong>
                        
                        </span>
                    </div>
                </td> </tr>
  
                <tr>
                
                    </tr><tr> <td><i className=" fa fa-th-large mr-2"></i><strong>Product and Services</strong></td>
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
                    <div className="table-container text-nowrap">
                      <div className="table-wrapper">
                        <table className="data-table">
                          <thead>
                            <tr>
                              <th>
                                <input type="checkbox" />
                              </th>
                              <th>ID</th>
                              <th>Executive Name</th>
                              <th>Designation</th>
                              <th>Email</th>
                              <th>Phone Number</th>
                              <th>Direct Dial/Mobile</th>
                              <th>
                              <button className="d-none d-sm-inline-block small btn btn-primary text-black">
                                   MOVE TO LEADS{" "} </button>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>1</td>
                             
                              <td>John Mathew </td>
                              <td>Delivery Head</td>
                              <td><h4 className=" la  la-envelope text-info "></h4></td>
                              <td><h4 className=" la  la-phone text-info "></h4></td>
                              <td><h4 className=" la  la-mobile text-info"></h4></td>
                              <td><button className="d-none d-sm-inline-block small btn btn-primary text-black">
                                   MOVE TO LEADS{" "} </button></td>
                            </tr>
                            <tr>
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>2</td>
                              
                              <td>John Mathew </td>
                              <td>Delivery Head</td>
                              <td><h4 className=" la  la-envelope text-info "></h4></td>
                              <td><h4 className=" la  la-phone text-info "></h4></td>
                              <td><h4 className=" la  la-mobile text-info"></h4></td>
                              <td><button className="d-none d-sm-inline-block small btn btn-primary text-black">
                                   MOVE TO LEADS{" "} </button></td>
                            </tr>
                            <tr>
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>3</td>
                              
                              <td>John Mathew </td>
                              <td>Delivery Head</td>
                              <td><h4 className=" la  la-envelope text-info "></h4></td>
                              <td><h4 className=" la  la-phone text-info "></h4></td>
                              <td><h4 className=" la  la-mobile text-info"></h4></td>
                              <td><button className="d-none d-sm-inline-block small btn btn-primary text-black">
                                   MOVE TO LEADS{" "} </button></td>
                            </tr>
                            <tr>
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>4</td>
                              
                              <td>John Mathew </td>
                              <td>Delivery Head</td>
                              <td><h4 className=" la  la-envelope text-info "></h4></td>
                              <td><h4 className=" la  la-phone text-info "></h4></td>
                              <td><h4 className=" la  la-mobile text-info"></h4></td>
                              <td><button className="d-none d-sm-inline-block small btn btn-primary text-black">
                                   MOVE TO LEADS{" "} </button></td>
                            </tr>
                            <tr>
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>5</td>
                              
                              <td>John Mathew </td>
                              <td>Delivery Head</td>
                              <td><h4 className=" la  la-envelope text-info "></h4></td>
                              <td><h4 className=" la  la-phone text-info "></h4></td>
                              <td><h4 className=" la  la-mobile text-info"></h4></td>
                              <td><button className="d-none d-sm-inline-block small btn btn-primary text-black">
                                   MOVE TO LEADS{" "} </button></td>
                            </tr>

                            <tr>
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>6</td>
                              
                              <td>John Mathew </td>
                              <td>Delivery Head</td>
                              <td><h4 className=" la  la-envelope text-info "></h4></td>
                              <td><h4 className=" la  la-phone text-info "></h4></td>
                              <td><h4 className=" la  la-mobile text-info"></h4></td>
                              <td><button className="d-none d-sm-inline-block small btn btn-primary text-black">
                                   MOVE TO LEADS{" "} </button></td>
                            </tr>
                            <tr>
                              <td>
                                <input type="checkbox" />
                              </td>
                              <td>7</td>
                             
                              <td>John Mathew </td>
                              <td>Delivery Head</td>
                              <td><h4 className=" la  la-envelope text-info "></h4></td>
                              <td><h4 className=" la  la-phone text-info "></h4></td>
                              <td><h4 className=" la  la-mobile text-info"></h4></td>
                              <td><button className="d-none d-sm-inline-block small btn btn-primary text-black">
                                   MOVE TO LEADS{" "} </button></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="pagination">
                        <a href="#">Previous</a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">Next</a>
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
    <div class="orgchart">
<nav class="org">
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
     <div className="mb-2"><p className="font-weight-bold">ICICI Corporate Banking</p></div>
      
      <div className="fs-12">India, London, England, United Kingdom</div>
      <div className="fs-12">179 Contacts . 10001+ employees .</div>
      <button className="btn btn-dark mr-2 small">Banking</button>
      <button className="btn btn-dark mr-2 small">Finance</button>
      <button className="btn btn-dark mr-2 small">Services</button>
      <button className="btn btn-dark mr-2 small">FinTech</button>
      <button className="btn btn-light mr-2 small">More..</button>
      <div className="fs-12">ICICI is a global financial services company that provides various financial products and services worldwide.</div>
      
    </div>
  </div>
  <div className="row">
    <div className="col-3 mt-3 s-company img-responsive">
    <img src={logo} />
    </div>
    <div className="col mt-3">
     <div className="mb-2"><p className="font-weight-bold">ICICI Corporate Banking</p></div>
      
      <div className="fs-12">India, London, England, United Kingdom</div>
      <div className="fs-12">179 Contacts . 10001+ employees .</div>
      <button className="btn btn-dark mr-2 small">Banking</button>
      <button className="btn btn-dark mr-2 small">Finance</button>
      <button className="btn btn-dark mr-2 small">Services</button>
      <button className="btn btn-dark mr-2 small">FinTech</button>
      <button className="btn btn-light mr-2 small">More..</button>
      <div className="fs-12">ICICI is a global financial services company that provides various financial products and services worldwide.</div>
      
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