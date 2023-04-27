import React, { useState } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
const AboutCompany = () => {
  const [showMoreProducts, setshowMoreProducts] = useState(false);
  const [showMoreIntroduction, setshowMoreIntroduction] = useState(false);
  const companyDetails = useSelector(
    (state) => state.companyDetailsReducer.companyDetails
  );

  const onClickshowMoreProducts = () => {
    setshowMoreProducts(!showMoreProducts);
  };

  const onClickShowMoreIntroduction =() => {
    setshowMoreIntroduction(!showMoreIntroduction);
  }

  //   const renderIndustry = (list,start,end) => {
  //     let industryList = _.cloneDeep(list);
  //     console.log(industryList,'sjfslkdfjl')
  //     // industryList = industryList?.splice(start,end)
  //     // return industryList.map((item) => {
  //     //     return <span>{item.name}, </span>
  //     // })
  //   }

  console.log(companyDetails, "sdkjfkls");

  return (
    <div className="card shadow card-body">
      <div class="container">
        <div className="row mt-3 mb-2 w-100- fs-14">
          <div className="row mt-3 w-100- ">
            <div className="col w-col-3">
              <div>
                <i className="text-black la  la-users mr-2"></i>
                <strong>Employees Range</strong>
              </div>
              <div className="gap-l">
                {companyDetails?.totalEmployees}{" "}
                <span> on {companyDetails?.name} </span>
              </div>
            </div>
            <div className="col w-col-3">
              <div>
                <i className="  text-black las  la-money-check mr-2"></i>
                <strong>Revenue Range</strong>
              </div>
              <div className="gap-l">{companyDetails?.companyRevenue}</div>
            </div>
            <div className="col w-col-3">
              <div>
                <i
                  className=" text-black la la-city mr-2"
                  aria-hidden="true"
                ></i>
                <strong>Company Type</strong>
              </div>
              <div className="gap-l">$48.00 Million</div>
            </div>
          </div>

          <div className="row mt-3 w-100-">
            <div className="col w-col-3">
              <div>
                <i className=" text-black las la-industry mr-2"></i>
                <strong>Industry</strong>
              </div>
              <div className="gap-l">{companyDetails?.industry?.name}</div>
            </div>
            <div className="col w-col-3">
              <div>
                <i className=" mr-2 text-black las la-cog"></i>
                <span className="font-weight-bold">Technographics</span>
              </div>
              <div className="gap-l">JavaScript, HTML, PHP</div>
            </div>
            <div className="col w-col-3">
              <div>
                <i className=" mr-2 text-black las la-cog"></i>
                <span className="font-weight-bold">Updated on</span>
              </div>
              <div className="gap-l">Wednesday, April 262023</div>
            </div>
          </div>

          <div className="row mt-3 w-100-">
            <div className="col w-col-3" style={{ maxWidth: "33.3%" }}>
              <div>
                <i className=" mr-2 text-black las la-cog"></i>
                <span className="font-weight-bold">
                  Description of business
                </span>
              </div>
              <div className="gap-l">
                <div className={`contentcontainer ${showMoreIntroduction ? "" : "softexpand"}`}>
                  {companyDetails?.introduction}
                </div>
                <button class="btn btn-light mr-2 " onClick={onClickShowMoreIntroduction}>
                  {showMoreIntroduction ? "Hide.." : "More.."}
                </button>
              </div>
            </div>

            <div className="col w-col-3" style={{ maxWidth: "33.3%" }}>
              <div>
                <i className=" text-black fs-16 las la-suitcase mr-2"></i>
                <strong>Product and Services</strong>
              </div>
              <div className="gap-l">
                <div
                  className={`contentcontainer ${showMoreProducts ? "" : "softexpand"}`}
                >
                  <span>Retail, </span>
                  <span>Internet, </span>
                  <span>e-Commerce, </span>
                  <span>Software, </span>
                  <span>Business Development, </span>
                  <span>Crowdsourcing, </span>
                  <span>Retail Software, </span>
                  <span>Delivery, </span>
                  <span>Operations, </span>{" "}
                  <span>Administrative Services, </span>
                  <span>Records, Videos &amp; Books, </span>
                  <span>Delivery Service, </span>
                  <span>Television Stations, </span>
                  <span>Transportation, </span>
                  <span>Broadcasting, </span>
                  <span>E-Commerce, </span>
                  <span>Cable &amp; Satellite, </span>
                  <span>Commerce and Shopping, </span>
                  <span>Media &amp; Internet, </span>
                  <span>Telecommunications, </span>
                  <span>Internet Services, </span>
                  <span>SaaS, </span>
                  <span>Shipping, </span>
                  <span>Software Development, </span>
                  <span>Consumer Electronics &amp; Computers</span>
                </div>
                <button class="btn btn-light mr-2 " onClick={onClickshowMoreProducts}>
                  {showMoreProducts ? "Hide.." : "More.."}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
