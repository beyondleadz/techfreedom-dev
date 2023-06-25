import React, { useState } from "react";
import OrgChartImg from "../../assets/images/org-chart-employee-icon.png";
import { Tree, TreeNode } from "react-organizational-chart";

export const emp_data = [
  {
    name: "GENERAL MANAGER",
    parent: "",
    dept: "Management",
  },
  {
    name: "MANAGER 1",
    parent: "GENERAL MANAGER",
    dept: "Dev",
  },
  {
    name: "MANAGER 2",
    parent: "GENERAL MANAGER",
    dept: "Dev",
  },
  {
    name: "MANAGER 3",
    parent: "GENERAL MANAGER",
    dept: "Dev",
  },
  {
    name: "CODE",
    parent: "MANAGER 1",
    dept: "Dev",
  },
  {
    name: "GRAPH",
    parent: "MANAGER 1",
    dept: "Dev",
  },
  {
    name: "HTML",
    parent: "CODE",
    dept: "Dev",
  },
  {
    name: "CSS",
    parent: "HTML",
    dept: "Dev",
  },
  {
    name: "JQUERY",
    parent: "CSS",
    dept: "Dev",
  },
  {
    name: "IMAGE",
    parent: "GRAPH",
    dept: "Dev",
  },
  {
    name: "DESIGN",
    parent: "IMAGE",
    dept: "Dev",
  },
  {
    name: "CATEGORY",
    parent: "MANAGER 2",
    dept: "Dev",
  },
  {
    name: "DEVOPS",
    parent: "CATEGORY",
    dept: "Dev",
  },
  {
    name: "CLOUD",
    parent: "CATEGORY",
    dept: "Dev",
  },
  {
    name: "VCARD",
    parent: "MANAGER 3",
    dept: "Dev",
  },
  {
    name: "MAP",
    parent: "MANAGER 3",
    dept: "Dev",
  },
  {
    name: "Karthik",
    parent: "Bhaskar",
    dept: "PM",
  },
  {
    name: "SRK",
    parent: "Bhaskar",
    dept: "QA",
  },
];

const root = emp_data.find((x) => x.parent === "");
const genTreeNode = (parentName) => {
  return emp_data
    .filter((emp) => emp.parent === parentName)
    .map((x) => (
      <TreeNode label={<div className="orgnode">{x.name}</div>}>
        {genTreeNode(x.name)}
      </TreeNode>
    ));
};

const StyledTreeExample = () => (
  <Tree
    lineWidth={"2px"}
    lineColor={"grey"}
    lineBorderRadius={"10px"}
    label={<div className="orgnode">{root.name}</div>}
  >
    {genTreeNode(root.name)}
  </Tree>
);

const OrgChart = () => {
  return (
    <div className="card shadow card-body">
      <div className="row">
        <div className="orgchart">
       
          <StyledTreeExample />


{/* 
             <nav className="org">
            <ul>
              <li>
                <a href="#">
                  <span>
                    <img src={OrgChartImg} />
                    <br />
                    GENERAL MANAGER
                  </span>
                </a>
                <ul>
                  <li>
                    <a href="#">MANAGER1</a>
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
                    <a href="#">MANAGER2</a>
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
                    <a href="#">MANAGER3</a>
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
          </nav> */}
        </div>
      </div>
    </div>
  );
};

export default OrgChart;
