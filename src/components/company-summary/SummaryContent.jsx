import React, { useState } from "react";

const SummaryContent = () => {
    return (
        <>
<div id="content-wrapper" className="d-flex flex-column">
<div className="container-fluid">
 <div className="row">

<div className="col-lg-8">
 <div className="card shadow mt-4 mb-4">
<div className="card-header font-weight-bold">
About Company</div>
<div className="card-body">
    <div className="row">
    <div className="col-lg-3  d-lg-block font-weight-bold">logo here</div>
    <div className="col-lg-8 d-lg-block ">Deutsche Bank, a Frankfurt-based global investment bank, offers financial products and services to corporate and institutional clients.
Frankfurt, Hessen, Germany
<h5>No.of Employees</h5>10001+
<h5>Investor Type</h5>
Investment Bank
<h5>Invesment Stage</h5>
Debt, Early Stage Venture, Late Stage Venture, Post-Ipo, Private Equity
<h5>website</h5>
www.db.com
<h5>CB Rank (Investor)</h5>1</div>
</div>
</div>
 </div>
 </div>
 <div className="col-lg-4">
 <div className="card shadow mt-4 mb-4">
 <div className="card-header font-weight-bold">
 Similar Companies</div>
 <div className="card-body">
   Dropdown menus can be placed in the card header in order to extend the functionality
  of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis
  icon in the card header can be clicked on in order to toggle a dropdown menu.                                </div>
 </div>
</div>
                    </div>
                </div>
</div>    
        </>
    )
}

export default SummaryContent