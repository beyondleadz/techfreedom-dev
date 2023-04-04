import React, { useState } from "react";

const CompanyLeft = () => {



  const [open,setopen] = useState({
    country:false,
    state:false,
    city:false,
    industry:false, 
    companyType:false,
    employeeCount:false, 
    revenue:false,
    utility:false,
    pages:false
  })

  const openMenu = (menu) => {
    console.log(menu,open,'sdfjslkd')
    setopen({
      ...open,
      [menu]:!open[menu]
    })
  }


  return (
    <>
      <ul className="navbar-nav-sd bg-light ssidebar ssidebar-light accordion" id="accordionsidebar">


        <li className="nav-item-sd active">
          <a className="nav-link-sd" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Filter</span></a>
        </li>


        <li className="nav-item-sd">
          <a className={`nav-link-sd nav-item-sd ${!open?.country && 'collapsed'}`}  onClick={() => openMenu('country')} href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span className="menu-item">Country</span>                </a>
          <div id="collapseTwo" className={`collapse ${open?.country && 'show'}`} aria-labelledby="headingTwo" data-parent="#accordionsidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header searchbox" >
              <input type="text" placeholder="Search" className="searchboxinput"/>
              </h6>
              <a className="collapse-item" href="buttons.html"><input type="checkbox"/>Buttons</a>
              <a className="collapse-item" href="cards.html"><input type="checkbox"/>Cards</a>                    </div>
          </div>
        </li>
        <li className="nav-item-sd">
          <a className={`nav-link-sd ${!open?.state && 'collapsed'}`}  onClick={() => openMenu('state')} href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span className="menu-item">State</span>                </a>
          <div id="collapseTwo" className={`collapse ${open?.state && 'show'}`} aria-labelledby="headingTwo" data-parent="#accordionsidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header searchbox" >
              <input type="text" placeholder="Search" className="searchboxinput"/>
              </h6>
              <a className="collapse-item" href="buttons.html"><input type="checkbox"/>Buttons</a>
              <a className="collapse-item" href="cards.html"><input type="checkbox"/>Cards</a>                    </div>
          </div>
        </li>
        <li className="nav-item-sd">
          <a className={`nav-link-sd ${!open?.city && 'collapsed'}`}  onClick={() => openMenu('city')} href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span className="menu-item">City</span>                </a>
          <div id="collapseTwo" className={`collapse ${open?.city && 'show'}`} aria-labelledby="headingTwo" data-parent="#accordionsidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header searchbox" >
              <input type="text" placeholder="Search" className="searchboxinput"/>
              </h6>
              <a className="collapse-item" href="buttons.html"><input type="checkbox"/>Buttons</a>
              <a className="collapse-item" href="cards.html"><input type="checkbox"/>Cards</a>                    </div>
          </div>
        </li>
        <li className="nav-item-sd">
          <a className={`nav-link-sd ${!open?.industry && 'collapsed'}`}  onClick={() => openMenu('industry')} href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span className="menu-item">Industry</span>                </a>
          <div id="collapseTwo" className={`collapse ${open?.industry && 'show'}`} aria-labelledby="headingTwo" data-parent="#accordionsidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header searchbox" >
              <input type="text" placeholder="Search" className="searchboxinput"/>
              </h6>
              <a className="collapse-item" href="buttons.html"><input type="checkbox"/>Buttons</a>
              <a className="collapse-item" href="cards.html"><input type="checkbox"/>Cards</a>                    </div>
          </div>
        </li>
        <li className="nav-item-sd">
          <a className={`nav-link-sd ${!open?.companyType && 'collapsed'}`}  onClick={() => openMenu('companyType')} href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span className="menu-item">Company Type</span>                </a>
          <div id="collapseTwo" className={`collapse ${open?.companyType && 'show'}`} aria-labelledby="headingTwo" data-parent="#accordionsidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header searchbox" >
              <input type="text" placeholder="Search" className="searchboxinput"/>
              </h6>
              <a className="collapse-item" href="buttons.html"><input type="checkbox"/>Buttons</a>
              <a className="collapse-item" href="cards.html"><input type="checkbox"/>Cards</a>                    </div>
          </div>
        </li>
        <li className="nav-item-sd">
          <a className={`nav-link-sd ${!open?.employeeCount && 'collapsed'}`}  onClick={() => openMenu('employeeCount')} href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span className="menu-item">Employee Count</span>                </a>
          <div id="collapseTwo" className={`collapse ${open?.employeeCount && 'show'}`} aria-labelledby="headingTwo" data-parent="#accordionsidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header searchbox" >
              <input type="text" placeholder="Search" className="searchboxinput"/>
              </h6>
              <a className="collapse-item" href="buttons.html"><input type="checkbox"/>Buttons</a>
              <a className="collapse-item" href="cards.html"><input type="checkbox"/>Cards</a>                    </div>
          </div>
        </li>
        <li className="nav-item-sd">
          <a className={`nav-link-sd ${!open?.revenue && 'collapsed'}`}  onClick={() => openMenu('revenue')} href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span className="menu-item">Revenue Range</span>                </a>
          <div id="collapseTwo" className={`collapse ${open?.revenue && 'show'}`} aria-labelledby="headingTwo" data-parent="#accordionsidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header searchbox" >
              <input type="text" placeholder="Search" className="searchboxinput"/>
              </h6>
              <a className="collapse-item" href="buttons.html"><input type="checkbox"/>Buttons</a>
              <a className="collapse-item" href="cards.html"><input type="checkbox"/>Cards</a>                    </div>
          </div>
        </li>
        <li className="nav-item-sd">
          <a className={`nav-link-sd ${!open?.utility && 'collapsed'}`} onClick={() => openMenu('utility')} href="#" data-toggle="collapse" data-target="#collapseUtilities"
            aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-wrench"></i>
            <span className="menu-item">Utilities</span>                </a>
          <div id="collapseUtilities" className={`collapse ${open?.utility && 'show'}`} aria-labelledby="headingUtilities"
            data-parent="#accordionsidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="utilities-color.html">Colors</a>
              <a className="collapse-item" href="utilities-border.html">Borders</a>
              <a className="collapse-item" href="utilities-animation.html">Animations</a>
              <a className="collapse-item" href="utilities-other.html">Other</a>                    </div>
          </div>
        </li>

        <li className="nav-item-sd">
          <a className={`nav-link-sd ${!open?.pages && 'collapsed'}`} onClick={() => openMenu('pages')} href="#" data-toggle="collapse" data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder"></i>
            <span className="menu-item">Pages</span>                </a>
          <div id="collapsePages" className={`collapse ${open?.pages && 'show'}`} aria-labelledby="headingPages" data-parent="#accordionsidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="login.html">Login</a>
              <a className="collapse-item" href="register.html">Register</a>
              <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
              <a className="collapse-item" href="404.html">404 Page</a>
              <a className="collapse-item" href="blank.html">Blank Page</a>                    </div>
          </div>
        </li>

        <li className="nav-item-sd">
          <a className="nav-link-sd" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span className="menu-item">Charts</span></a>            </li>

        <li className="nav-item-sd">
          <a className="nav-link-sd" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span className="menu-item">Tables</span></a>            </li>


      </ul>
    </>
  )

}
export default CompanyLeft;