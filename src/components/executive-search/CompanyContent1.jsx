import React, { useState } from "react";

const CompanyContent = () => {
    return (
        <>
            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">

                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top">

                        <button id="ssidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars"></i>                    </button>

                        <ul className="navbar-nav-sd ml-auto">

                            <li className="nav-item-sd dropdown no-arrow d-sm-none">
                                <a className="nav-link-sd dropdown-toggle" href="#" id="searchDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-search fa-fw"></i>                            </a>
                                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                    aria-labelledby="searchDropdown">
                                    <form className="form-inline mr-auto w-100 navbar-search">
                                        <div className="input-group">
                                            <input type="text" className="form-control bg-light border-0 small"
                                                placeholder="Search for..." aria-label="Search"
                                                aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="button">
                                                    <i className="fas fa-search fa-sm"></i>                                            </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>

                            <li className="nav-item-sd dropdown no-arrow mx-1">
                                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="alertsDropdown">
                                    <h6 className="dropdown-header">
                                        Alerts Center                                </h6>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-primary">
                                                <i className="fas fa-file-alt text-white"></i>                                        </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 12, 2019</div>
                                            <span className="font-weight-bold">A new monthly report is ready to download!</span>                                    </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-success">
                                                <i className="fas fa-donate text-white"></i>                                        </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 7, 2019</div>
                                            $290.29 has been deposited into your account!                                    </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-warning">
                                                <i className="fas fa-exclamation-triangle text-white"></i>                                        </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 2, 2019</div>
                                            Spending Alert: We've noticed unusually high spending for your account.                                    </div>
                                    </a>
                                    <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>                            </div>
                            </li>

                            <li className="nav-item-sd dropdown no-arrow mx-1">
                                <a className="nav-link-sd dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="messagesDropdown">
                                    <h6 className="dropdown-header">
                                        Message Center                                </h6>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">

                                            <div className="status-indicator bg-success"></div>
                                        </div>
                                        <div className="font-weight-bold">
                                            <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                                problem I've been having.</div>
                                            <div className="small text-gray-500">Emily Fowler · 58m</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                                alt="..." />
                                            <div className="status-indicator"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">I have the photos that you ordered last month, how
                                                would you like them sent to you?</div>
                                            <div className="small text-gray-500">Jae Chun · 1d</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                                alt="..." />
                                            <div className="status-indicator bg-warning"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">Last month's report looks great, I am very happy with
                                                the progress so far, keep up the good work!</div>
                                            <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                alt="..." />
                                            <div className="status-indicator bg-success"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                                told me that people say this to all dogs, even if they aren't good...</div>
                                            <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>                            </div>
                            </li>
                        <button className="d-none d-sm-inline-block btn btn-light btn-lg m-2">
                                                        <i className="fas fa-file-pdf" aria-hidden="true"></i>
                                                    </button> 
                        <button className="d-none d-sm-inline-block btn-lg btn btn-light mr-2">
                                                        <i className="fas fa-print" aria-hidden="true"></i>
                                                    </button>                         
                        <button className="d-none d-sm-inline-block btn-lg btn btn-light mr-2">
                                                        <i className="fas fa-file-excel" aria-hidden="true"></i>
                                                    </button> 
                        <button className="d-none d-sm-inline-block btn-lg btn btn-light mr-2">
                                                        <i className="fas fa-star" aria-hidden="true"></i>
                                                    </button>
                                                   
                            <div className="topbar-divider d-none d-sm-block"></div>
                            

                        </ul>
                    </nav>

                    <div className="container-fluid">
                        
                        <div className="row">

                            <div className="col-xl-12 col-lg-10">
                                <div className="card shadow mb-4">
                                    <div
                                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">Showing 1-20 of 100 results</h6>
                                        <div className="buttons-container">
                                                <button className="d-none d-sm-inline-block btn btn-light mr-3"><i
                                className="fas fa-cogs  pr-1"></i> EDIT VIEW </button>
                                                    <button className="d-none d-sm-inline-block btn btn-light mr-3"><i
                                className="fas fa-bolt  pr-1"></i> EXPORT TO CSV </button>
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