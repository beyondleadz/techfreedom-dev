import React, { useState } from "react";

const CompanyLeft = () => {



  const [open,setopen] = useState({
    component:false,
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
          <a className={`nav-link-sd ${!open?.component && 'collapsed'}`}  onClick={() => openMenu('component')} href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span className="menu-item">Components</span>                </a>
          <div id="collapseTwo" className={`collapse ${open?.component && 'show'}`} aria-labelledby="headingTwo" data-parent="#accordionsidebar">
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