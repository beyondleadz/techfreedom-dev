import React, { useState } from "react";
import OrgChartImg from "../../assets/images/org-chart-employee-icon.png";
const OrgChart = () => {
  return (
    <div className="card shadow card-body">
      <div className="row">
        <div class="orgchart">
          <nav class="org">
            <ul>
              <li>
                <a href="#">
                  <span>
                    <img src={OrgChartImg} />
                    <br />
                    General Manager
                  </span>
                </a>
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
          </nav>
        </div>
      </div>
    </div>
  );
};

export default OrgChart;
