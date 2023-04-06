import React, { useState } from "react";

const CompanyContent = () => {
    return (
        <>
            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">

                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top">

                        <button id="ssidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars"></i>                    </button>

                            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                        <input type = "text" className="form-control bg-light border-1" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>                                </button>
                            </div>
                                                   </div>
                    </form>                   
                      
                    <ul className="navbar-nav-sd ml-auto">
                     <li><a class="nav-link-sd" href="#" id="" role="button"
                                data-toggle="" aria-haspopup="true" aria-expanded="false">  <button className=" d-sm-inline-block btn btn-light btn-lg">
                                                 <i class="fas fa-file-pdf" aria-hidden="true"></i>
                                                    </button></a></li>   
                     <li><a class="nav-link-sd " href="#" id="" role="button"
                                data-toggle="" aria-haspopup="true" aria-expanded="false"><button className=" d-sm-inline-block btn-lg btn btn-light">
                                                        <i class="fas fa-print" aria-hidden="true"></i>
                                                    </button></a></li>
                     <li><a class="nav-link-sd " href="#" id="" role="button"
                                data-toggle="" aria-haspopup="true" aria-expanded="false"><button className=" d-sm-inline-block btn-lg btn btn-light">
                                                        <i class="fas fa-file-excel" aria-hidden="true"></i>
                                                    </button></a> </li>   
                     <li><a class="nav-link-sd " href="#" id="" role="button"
                                data-toggle="" aria-haspopup="true" aria-expanded="false"><button className=" d-sm-inline-block btn-lg btn btn-light">
                                                        <i class="fas fa-star" aria-hidden="true"></i>
                                                    </button></a></li>
                    </ul>
                    </nav>

                    <div className="container-fluid">
                        
                        <div className="row">

                            <div className="col-xl-12 col-lg-10">
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">Showing 1-20 of 100 results</h6>
                                        <div className="buttons-container">
                                        <span className="font-weight-bold text-info">Quick Selection</span>
                                                <button className=" d-sm-inline-block btn btn-light mr-1"> 1 </button>
                                                <span className="mr-1">to</span>
                                <button className=" d-sm-inline-block btn btn-light mr-1"> 3 </button>
                                <button className=" d-sm-inline-block btn btn-success mr-3"><i
                                className="fas fa-arrow-right"></i> </button>
                                                    <button className="d-none d-sm-inline-block btn btn-outline-primary"><i
                                className="fas fa-bolt pr-1"></i> CONNECT TO CRM </button>
                                                </div>
                                        <div className="dropdown no-arrow">
                                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>   </a>
                                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                aria-labelledby="dropdownMenuLink">
                                                <div className="dropdown-header">Dropdown Header:</div>
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Something else here</a>                                        </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-container">
                                             <div className="table-wrapper">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th><input type="checkbox" /></th>
                                                            <th>ID</th>
                                                            <th>Organization Name</th>
                                                            <th>Industries</th>
                                                            <th>Location</th>
                                                            <th>Email</th>
                                                            <th>Phone Number</th>
                                                            <th>Address</th>
                                                            <th><button className="d-none d-sm-inline-block btn btn-outline-secondary"><i
                                className="fas fa-plus pr-1"></i> ADD COLUMN </button></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><input type="checkbox" /></td>
                                                            <td>1</td>
                                                            <td>John Doe</td>
                                                            <td>25</td>
                                                            <td>Male</td>
                                                            <td>johndoe@email.com</td>
                                                            <td>123-456-7890</td>
                                                            <td>123 Main St</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" /></td>
                                                            <td>2</td>
                                                            <td>John Doe</td>
                                                            <td>25</td>
                                                            <td>Male</td>
                                                            <td>johndoe@email.com</td>
                                                            <td>123-456-7890</td>
                                                            <td>123 Main St</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" /></td>
                                                            <td>3</td>
                                                            <td>John Doe</td>
                                                            <td>25</td>
                                                            <td>Male</td>
                                                            <td>johndoe@email.com</td>
                                                            <td>123-456-7890</td>
                                                            <td>123 Main St</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" /></td>
                                                            <td>4</td>
                                                            <td>John Doe</td>
                                                            <td>25</td>
                                                            <td>Male</td>
                                                            <td>johndoe@email.com</td>
                                                            <td>123-456-7890</td>
                                                            <td>123 Main St</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" /></td>
                                                            <td>5</td>
                                                            <td>John Doe</td>
                                                            <td>25</td>
                                                            <td>Male</td>
                                                            <td>johndoe@email.com</td>
                                                            <td>123-456-7890</td>
                                                            <td>123 Main St</td>
                                                            <td></td>
                                                        </tr>


                                                        <tr>
                                                            <td><input type="checkbox" /></td>
                                                            <td>18</td>
                                                            <td>John Doe</td>
                                                            <td>25</td>
                                                            <td>Male</td>
                                                            <td>johndoe@email.com</td>
                                                            <td>123-456-7890</td>
                                                            <td>123 Main St</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="checkbox" /></td>
                                                            <td>19</td>
                                                            <td>John Doe</td>
                                                            <td>25</td>
                                                            <td>Male</td>
                                                            <td>johndoe@email.com</td>
                                                            <td>123-456-7890</td>
                                                            <td>123 Main St</td>
                                                            <td></td>
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

                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyContent