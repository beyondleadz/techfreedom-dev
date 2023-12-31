import React, { useState, useMemo } from "react";
import { div, Tabs } from "antd";
import BeyondLogo from "../../assets/images/logo-round.svg";
import LinkedinLogo from "../../assets/images/linkedin-logo.svg";
import DnBLogo from "../../assets/images/dun-logo.svg";
import ZoomLogo from "../../assets/images/zoom-logo.svg";
import ApoloLogo from "../../assets/images/apollo-logo.svg";
import LushaLogo from "../../assets/images/lusha-full-logo-blk.svg";
import ZohoLogo from "../../assets/images/zoho-logo.svg";

import UpleadLogo from "../../assets/images/uplead-logo.svg";
import RocketLogo from "../../assets/images/rocket-logo.svg";

const ComparisonContent = () => {
  const [activeTab, setActiveTab] = useState(1);
  const items = [
    {
      key: "1",
      label: <span className="compare-navigation_item ">LinkedIn</span>,
      children: (
        <div>
          <div
            className="compare-table__table active"
            aria-labelledby="tab_item-1"
          >
            <div className="compare-table__head">
              <div className="compare-table__col"></div>
              <div className="compare-table__col">Beyond Leads</div>
              <div className="compare-table__col">LinkedIn</div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col">
                <img src={LinkedinLogo} />
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Unlimited Prospecting and list builidng
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Prospecting is connections dependant
                </p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col"></div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Independent human verified data
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">- User Generated data</p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col"></div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Accurate and doubly verified data
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Accuracy and Completeness doubtful
                </p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col"></div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Multiple data soources with rigrouos quality contol
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Single Source (Users)
                </p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col"></div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Tailored dataset with multiple download options
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Limitations in customisng and downloding
                </p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col"></div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Budget Freindly and unlimited searches
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  -Limited free searches and Expensive per user billing
                </p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col"></div>
              <div className="compare-table__col">
                <p className="compare-table__property">- Business emails</p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Personal emails and costly reachout through Inmails
                </p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col"></div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Direct Dials & Mobile Numbers
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">- X</p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col"></div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - No commercial advertisements and sponsored ads like LinkedIn
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Commercial and Sposorod ads take away attention
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <span className="compare-navigation_item">
          Traditional Data Companies
        </span>
      ),
      children: (
        <div>
          <div className="compare-table__table" aria-labelledby="tab_item-1">
            <div className="compare-table__head">
              <div className="compare-table__col"></div>
              <div className="compare-table__col">Beyond Leads</div>
              <div className="compare-table__col">
                D&B, List Vendors, Zoominfo
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col">
                <img src={DnBLogo} />
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Unlimited Prospecting and list builidng
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Limited data set & limited prospecting
                </p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col">
                <img src={ZoomLogo} />
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Quality email data having corporate emails
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Mixed email data including private & generic corporate
                  emails
                </p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col"></div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Built-in Lead management for automated reach-out
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - User has to buy such tools separately
                </p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col"></div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Up-to-data, no manual validation needed
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Validation, if any, done manually since data is mostly
                  out-dated
                </p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col"></div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Advance filters for getting the right dataset
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Very few filters for data search
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <span className="compare-navigation_item">
          Popular Prospecting Tools
        </span>
      ),
      children: (
        <div>
          <div className="compare-table__table" aria-labelledby="tab_item-1">
            <div className="compare-table__head">
              <div className="compare-table__col"></div>
              <div className="compare-table__col">Beyond Leads</div>
              <div className="compare-table__col">
                Appollo, Lusha, Zoominfo, Zoho
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col">
                <img src={ApoloLogo} />
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Provides ready data and data automation tools for unlimited
                  prospecting
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Own data needed for doing campaigns and user has to buy data
                  separately
                </p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col">
                <img src={LushaLogo} />
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Complete solution which allows data discovery, reach-out and
                  leads in your account.
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Limited contacts and not up-to-date always
                </p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col">
                <img src={ZoomLogo} />
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Sales Automation package also available at BeyondLedz for
                  Lead conversion.
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Generally not supported with automated marketing and sales
                  tools
                </p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col">
                <img src={ZohoLogo} />
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Create unlimited Leads, put all your leads at one place &
                  keep them updated
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property text-danger">X</p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col"></div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - User & automation based content flagging
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property text-danger">X</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <span className="compare-navigation_item">New Age Marketing Tools</span>
      ),
      children: (
        <div>
          <div className="compare-table__table" aria-labelledby="tab_item-1">
            <div className="compare-table__head">
              <div className="compare-table__col"></div>
              <div className="compare-table__col">Beyond Leads</div>
              <div className="compare-table__col">
                RocketReach, Uplead, Lusha
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col">
                <img src={RocketLogo} />
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Creates and provide only corporate emails
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Only fetch private contact details from Linkedin including
                  Gmail, Yahoo etc
                </p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col">
                <img src={UpleadLogo} />
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Direct Dials and Mobile numbers for faster reach
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Only internet scrappe data
                </p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col">
                <img src={LushaLogo} />
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Experts in data with top companies as customers
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Partially solving a few business problems
                </p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col"></div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - A complete marketing & sales automation platform
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">- Only Data Platform</p>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__col"></div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Better data at better cost when compared to our competition
                </p>
              </div>
              <div className="compare-table__col">
                <p className="compare-table__property">
                  - Higher cost with varied data
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const onChange = (key) => {
    setActiveTab(key);
  };



  const OperationsSlot=  {
    left: <div className="compare-navigation_item1">
    <img src={BeyondLogo} />
    <div className="vs"> vs </div>
  </div>,
    // right: <Button>Right Extra Action</Button>,
  };
  

 
  // const options = ['left', 'right'];


  // const slot = useMemo(() => {
  //   if (position.length === 0) return null;

  //   return position.reduce(
  //     (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
  //     {},
  //   );
  // }, [position]);

  return (
    <>
      <div id="wrapper">
        <div className="container  ">
          <div className="product-comparison compare d-flex">
            <div className="compare-navigation_list d-flex">
              <Tabs
                tabBarExtraContent={OperationsSlot  }
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
              />
              ;
            </div>

            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ComparisonContent;
