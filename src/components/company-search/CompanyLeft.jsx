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
    setopen({
      ...{
        country:false,
        state:false,
        city:false,
        industry:false, 
        companyType:false,
        employeeCount:false, 
        revenue:false,
        utility:false,
        pages:false
      },
      [menu]:!open[menu]
    })
  }


  return (
    <>
      <ul className="navbar-nav-sd bg-light ssidebar ssidebar-light accordion" id="accordionsidebar">


        <li className="nav-item-sd active">
          <a className="nav-link-sd" href="#">
            <i className="fas fa-filter"></i>
            <span className="mr-4" >Filter</span>
            <span className="btn btn-outline-primary font-weight-bold">Advanced</span></a>
        </li>


        <li className="nav-item-sd">
          <a className={`nav-link-sd nav-item-sd ${!open?.country && 'collapsed'}`}  onClick={() => openMenu('country')} href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="left-country-img"></i>
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
            <i className="left-state-img"></i>
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
            <i className="left-city-img"></i>
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
            <i className="left-industry-img"></i>
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
            <i className="left-industry-img"></i>
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
            <i className="left-employee-count-img"></i>
            <span className="menu-item">Employee Count</span>               </a>
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
            <i className="left-revenue-range-img"></i>
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
       

      </ul>
    </>
  )

}
export default CompanyLeft;