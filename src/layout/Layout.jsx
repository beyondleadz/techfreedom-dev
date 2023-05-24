import React, {useState} from "react";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Layout = ({children}) => {
    return(
        <>
        <Header/>
        <div id="home" className="child-container">
        {children}
        </div>
        <Footer/>
        </>
    )

}
export default Layout;