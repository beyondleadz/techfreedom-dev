import React, { useState } from "react";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { getToken } from "../utils/utils";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div id="home" className="child-container">
        {children}
      </div>
      {getToken() ? "" : <Footer />}
    </>
  );
};
export default Layout;
