import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import moment from "moment";

import PDFLOGO from "../../assets/images/pdf/logo_beyondleads.svg";
import PDFIMG1 from "../../assets/images/pdf/facebook.png";
import PDFIMG2 from "../../assets/images/pdf/twitter.png";
import PDFIMG3 from "../../assets/images/pdf/linkedin.png";
import defaultLogo from "../../assets/images/default_company_logo.jpg";

import { getEmployeeList } from "../../actionCreator/companyDetailsActionCreator";
const CompanyPdfFormat = () => {
  const employeeList = useSelector(
    (state) => state.companyDetailsReducer.employeeList
  );
  const companyDetails = useSelector(
    (state) => state.companyDetailsReducer.companyDetails
  );
  let sdate=new Date();
  const renderSocialLinks = (socialLinks) => {
    return socialLinks?.map((link) => {
      if (link?.name === "facebook") {
        return (          
          <Link to={link?.proifileUrl} key={link?.proifileUrl} target="_blank">
            <img
                style={{ marginRight: "10px", paddingTop: "5px" }}
                src={PDFIMG1}
                width="25px"
                height="auto"
              />
          </Link>
        );
      } else if (link?.name === "Linkedin") {
        return (
          <Link to={link?.proifileUrl} key={link?.proifileUrl} target="_blank">
            <img
                style={{ marginRight: "10px", paddingTop: "5px" }}
                src={PDFIMG3}
                width="25px"
                height="auto"
              />
          </Link>
        );
      } else if (link?.name === "twitter") {
        return (
          <Link to={link?.proifileUrl} key={link?.proifileUrl} target="_blank">
           <img
                style={{ marginRight: "10px", paddingTop: "5px" }}
                src={PDFIMG2}
                width="25px"
                height="auto"
              />
          </Link>
        );
      }
    });
  };

  return (
    <>
      <div
        className="pdfWrapperStyle"
        style={{ width:"100%",fontFamily: "sans-serif", padding: "10px", fontSize: "14px" }}
      >
        {/* backgroundImage: url(images/bg.jpg);   background-repeat: repeat-y;    background-position: unset;    background-size: 100%; */}

        <div
          style={{
            float: "left",
            width: "50%",
            backgroundColor: "#ffffff",
            display: "tableCell",
            height: "692px",
          }}
        >
          <div style={{ display: "flex", margin: "25px -49px 5px" }}>
            <div style={{ display: "tableCell", width: "100%" }}>
              <div
                style={{
                  backgroundColor: "#5d44ff",
                  width: "100px",
                  height: "67px",
                  padding: "10px",
                  color: "#fff",
                  fontSize: "21px",
                  fontWeight: "bold",
                  lineHeight: "22px",
                  marginLeft: "50px",
                  marginTop: "5px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
               
                <img src={PDFLOGO} />
              </div>
            </div>
          </div>

          <div style={{ padding: "10px", marginTop: "10px" }}>
            <div style={{ display: "flex", alignItems: "self-start" }}>
              <div
                style={{
                  minWidth: "130px",
                  minHeight: "120px",
                  width: "160px",
                  padding: "10px 35px 10px 0px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
            src={companyDetails?.companyLogoUrl || defaultLogo}
            onError={(e) => {
              e.currentTarget.src = defaultLogo;
            }} width="76px" height="auto" 
          />
                
              </div>
              <div
                style={{
                  position: "relative",
                  paddingBottom: "15px",
                  marginLeft: "20",
                }}
              >
                <h1
                  style={{
                    fontSize: "60px",
                    textAlign: "left",
                    fontWeight: "bolder",
                    fontFamily: "arial",
                    marginBlockStart: "17px",
                    marginBlockEnd: "5px",
                    letterSpacing: "-3px",
                  }}
                >
                  {companyDetails?.name}
                </h1>
                <h2
                  style={{
                    fontSize: 18,
                    marginBlockStart: "10px",
                    marginBlockEnd: 0,
                    textAlign: "left",
                  }}
                >
                  {" "}
                  {companyDetails?.address}
                </h2>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "10px 0",
                    left: "-4px",
                    position: "relative",
                    color: "#000",
                  }}
                >
                  <div
                    style={{
                      marginRight: 72,
                      marginLeft: "5px",
                      backgroundColor: "#f7f6f1",
                      padding: "5px 16px",
                      borderRadius: 50,
                      color: "#000",
                      fontSize: 12,
                    }}
                  >
                    <strong style={{ marginRight: "0.5em", fontSize: 14 }}>
                      Phone
                    </strong>
                    <span> {companyDetails?.phoneNo} </span>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#f7f6f1",
                      padding: "5px 16px",
                      borderRadius: 50,
                      color: "#000",
                      fontSize: 12,
                    }}
                  >
                    <strong style={{ marginRight: "0.5em" }}>Website</strong>
                    {/* <a title="" href="http://www.dabur.com" target="_blank">
                      www.dabur.com
                    </a> */}
                    <Link style={{color: "#000",fontWeight: "normal"}}
                title=""
                to={`http://${companyDetails?.wedsite}`}
                target="_blank"
              >
                {companyDetails?.wedsite}
              </Link>
                  </div>
                </div>

                <div
                  style={{
                    fontWeight: 400,
                    boxSizing: "borderBox",
                    width: "95%",
                    marginTop: "35px",
                    fontSize: 12,
                    textAlign: "justify",
                    paddingRight: 0,
                    position: "relative",
                  }}
                >
                  <div className="step">Description of Business</div>
                  <div
                    style={{
                      fontWeight: 400,
                      boxSizing: "borderBox",
                      width: "95%",
                      marginTop: "35px",
                      fontSize: 12,
                      textAlign: "justify",
                      paddingRight: 0,
                      position: "relative",
                    }}
                  >
                    <div style={{ display: "inline-table", marginTop: 20 }}>
                     {companyDetails?.introduction}
                    </div>
                  </div>
                  <div style={{ marginTop: "25px" }}></div>
                  <div className="step">Product and Services</div>
                  <div style={{ marginTop: "20px" }}></div>
                  <div style={{ display: "inline-table", marginTop: 20 }}>
                    <strong>
                      {" "}
                      {companyDetails?.shortIntro}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            float: "left",
            width: "20%",
            backgroundColor: "#fdc401",
            paddingLeft: "20px",
            color: "#575656",
            display: "tableCell",
            height: "692px",
            borderRadius: "0 15px 15px 0",
            backgroundImage: "linearGradient(#fdc401, #fff)",
            display: "tableCell",
          }}
        >
          <div
            style={{
              padding: "10px",
              marginTop: "10px",
              textAlign: "right",
              fontSize: 12,
              margin: "0 20px 45px 20px",
              color: "#000",
            }}
          >
            Time Stamp:{ moment(sdate).utc().format('YYYY-MM-DD HH:MM:SS A')}
          </div>
          <div style={{ padding: "10px", marginTop: "10px" }}>
            <div style={{ margin: "20px 10px" }}>
              <div className="title">Employees Range</div>
              <div style={{ fontSize: "13px", fontWeight: "bold" }}>
              {companyDetails?.totalEmployees}
              </div>
            </div>

            <div style={{ margin: "20px 10px" }}>
              <div className="title">Revenue Range</div>
              <div style={{ fontSize: "13px", fontWeight: "bold" }}>
              {companyDetails?.companyRevenue}
              </div>
            </div>

            <div style={{ margin: "20px 10px" }}>
              <div className="title">Company Type</div>
              <div style={{ fontSize: "13px", fontWeight: "bold" }}>
              {companyDetails?.category?.name}
              </div>
            </div>

            <div style={{ margin: "20px 10px" }}>
              <div className="title">Industry </div>
              <div style={{ fontSize: "13px", fontWeight: "bold" }}>
              {companyDetails?.industry?.name}
              </div>
            </div>

            <div style={{ margin: "20px 10px" }}>
              <div className="title">Technographics</div>
              <div style={{ fontSize: "13px", fontWeight: "bold" }}>
              {companyDetails?.technographics}
              </div>
            </div>

            <div style={{ margin: "20px 10px" }}>
              <div className="title">Updated on</div>
              <div style={{ fontSize: 12, fontWeight: "bold" }}>
              {companyDetails?.lastUpdated}
              </div>
            </div>

            <div
              style={{
                padding: "5px 12",
                margin: "35px 10px",
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                width: "68%",
                height: "35px",
                textAlign: "center",
              }}
            >
              {companyDetails?.socialLinks && companyDetails?.socialLinks?.length?renderSocialLinks(companyDetails?.socialLinks):<><img
                style={{ marginRight: "10px", paddingTop: "5px" }}
                src={PDFIMG1}
                width="25px"
                height="auto"
              />
              <img
                style={{ marginRight: "10px" }}
                src={PDFIMG2}
                width="25px"
                height="auto"
              />
              <img
                style={{ marginRight: "10px" }}
                src={PDFIMG3}
                width="25px"
                height="auto"
              />
              </>}
            </div>
          </div>
        </div>
        
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          background: "#fff",
          marginTop: "26px",
        }}
      >
        {/*<div style={{ display: "flex", margin: "25px 5px 0 5px" }}>
           <div style={{ display: "tableCell", width: "100%" }}>
            <div
              style={{
                marginLeft: "25px",
                backgroundColor: "#5d44ff",
                width: "100px",
                height: "67px",
                padding: "10px",
                color: "#fff",
                fontSize: 21,
                fontWeight: "bold",
                lineHeight: 22,
                marginBottom: 20,
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2) 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <img src={PDFLOGO} width="76px" height="auto" />
            </div>
          </div> */}
          {/* <div style={{ display: "tableCell", width: 100 }}>
            <div
              style={{
                padding: "10px",
                marginTop: "10px",
                textAlign: "right",
                fontSize: 12,
                margin: "0 20px 45px 20px",
                color: "#000",
              }}
            >
              Time Stamp: 07-07-2023 / 06 : 30 : 45 pm
            </div>
          </div> 
        </div>
        <div
          style={{
            padding: "10px",
            marginTop: "10px",
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              marginBlockStart: 0,
              marginBlockEnd: 0,
              textAlign: "left",
            }}
          >
            Executives Detail
          </h2>
        </div>*/}
        <div
          style={{
            padding: "10px",
            marginTop: "10px",
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          {/* <h2
            style={{
              fontSize: "18px",
              marginBlockStart: 0,
              marginBlockEnd: 0,
              textAlign: "left",
            }}
          >
            Executives Detail
          </h2> */}
          <table
            style={{
              border: "1px solid #d7d3d3",
              fontSize: 11,
              fontWeight: 550,
            }}
            width="60%"
            border="0"
            cellspacing="0"
            cellpadding="0"
          >
            <tr>
              <td
                style={{
                  backgroundColor: "#5d44ff",
                  border: "1px solid #d7d3d3",
                  width: "20px",
                  fontSize: "8px",
                  color: "#fff",
                  padding: "5px",
                  textAlign: "left",
                }}
              >
                S.No.
              </td>
              <td
                style={{
                  backgroundColor: "#5d44ff",
                  border: "1px solid #d7d3d3",
                  color: "#fff",
                  padding: "5px",
                  fontSize: 12,
                  textAlign: "left",
                }}
              >
                {" "}
                Executive Name
              </td>
              <td
                style={{
                  backgroundColor: "#5d44ff",
                  border: "1px solid #d7d3d3",
                  color: "#fff",
                  padding: "5px",
                  fontSize: 12,
                  textAlign: "left",
                }}
              >
                Designation{" "}
              </td>
              <td
                style={{
                  backgroundColor: "#5d44ff",
                  border: "1px solid #d7d3d3",
                  color: "#fff",
                  padding: "5px",
                  fontSize: 12,
                  textAlign: "left",
                }}
              >
                Email
              </td>
              <td
                style={{
                  backgroundColor: "#5d44ff",
                  border: "1px solid #d7d3d3",
                  color: "#fff",
                  padding: "5px",
                  fontSize: 12,
                  textAlign: "left",
                }}
              >
                Phone
              </td>
              <td
                style={{
                  backgroundColor: "#5d44ff",
                  border: "1px solid #d7d3d3",
                  color: "#fff",
                  padding: "5px",
                  fontSize: 12,
                  textAlign: "left",
                }}
              >
                Mobile
              </td>
            </tr>

            {employeeList.map((item, index) => {
              return (
                <>
                  <tr>
                    <td
                      style={{
                        border: "1px solid #d7d3d3",
                        padding: "5px",
                        textAlign: "left",
                      }}
                    >
                      {index + 1}
                    </td>
                    <td
                      style={{
                        border: "1px solid #d7d3d3",
                        padding: "5px",
                        textAlign: "left",
                      }}
                    >
                      {item?.fullname
                        ? item.fullname
                        : item.firstname + " " + item.lastname}
                    </td>
                    <td
                      style={{
                        border: "1px solid #d7d3d3",
                        padding: "5px",
                        textAlign: "left",
                      }}
                    >
                      {item?.title}
                    </td>
                    <td
                      style={{
                        border: "1px solid #d7d3d3",
                        padding: "5px",
                        textAlign: "left",
                      }}
                    >
                      {item?.emailId}
                    </td>
                    <td
                      style={{
                        border: "1px solid #d7d3d3",
                        padding: "5px",
                        textAlign: "left",
                      }}
                    >
                      {item?.company?.phoneNo}
                    </td>
                    <td
                      style={{
                        border: "1px solid #d7d3d3",
                        padding: "5px",
                        textAlign: "left",
                      }}
                    >
                      {item?.phoneNo}
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
      </div>


      {/* <div className="row colcontainer">
  <div className="leftcolumn col">
  <div className="headcontainer">
<div className="col">
 <div className="fakeimg1"><img src={PDFLOGO} width="76px" height="auto"/></div>
</div>

</div>
  
    <div className="card">
    <div className="headercontainer ">
	<div className="logobox">
	<img src="https://logo.clearbit.com/www.dabur.com"/></div>
	<div className="descbox">
		<h1>Dabur India Ltd</h1>
	<h2> Kaushambi, Ghaziabad, Uttar Pradesh, India, 201010</h2>
	
	
	<div className="headerblk2">
	<div className="mr bordrblock">
	<strong className="mr-2 fs-14  ">Phone</strong>
	<span> 112312323 </span></div>
	<div className="bordrblock">
	<strong className="mr-2">Website</strong><a  title="" href="http://www.dabur.com" target="_blank">www.dabur.com</a></div></div>
	
	<div className="companyintro ">
	<div className="step">Description of Business</div>
	<div className="companyintro ">
	<div className="para"><strong>Dabur India Limited</strong> was incorporated in the year 1884 and is based in Ghaziabad, India. It is one of the
Indias largest Ayurvedic medicine and natural consumer products manufacturer. Dabur as the master
brand for natural healthcare products, Vatika for premium hair care, Hajmola for digestives, Real for
fruit-based beverages and Fem for instant fairness & skin care. Dabur today operates in key consumer
product categories like Hair Care, Oral Care, Health Care, Skin Care, Home Care and Foods.</div></div>
	<div className="mt-1"></div>
<div className="step">Product and Services</div>
	<div className="mt"></div>
	<div className="para"><strong> Ayurvedic/Natural Health & Personal care , Packaged Juices , Hair Care ,
Oral Care , Healthcare , Home Care , Skin Care , Health Supplements ,
Ayurveda</strong></div>
</div></div></div>
    </div>
    
  </div>
  <div className="rightcolumn col">
  <div className="card timestamp">Time Stamp: 07-07-2023 / 06 : 30 : 45 pm</div>
    <div className="card">
	<div className="txtcontainer">
	<div className="title">Employees Range</div>
	<div className="content">5000 & Above</div>
	</div>
	
	<div className="txtcontainer">
	<div className="title">Revenue Range</div>
	<div className="content">5001 & Above</div>
	</div>
	
	<div className="txtcontainer">
	<div className="title">Company Type</div>
	<div className="content">Public Limited</div>
	</div>
	
	<div className="txtcontainer">
	<div className="title">Industry </div>
	<div className="content">Consumer Goods</div>
	</div>
	
	<div className="txtcontainer">
	<div className="title">Technographics</div>
	<div className="content">Consumer Goods</div>
	</div>
	
	<div className="txtcontainer">
	<div className="title">Updated on</div>
	<div className="content">2023-07-12T03:08:45</div>
	</div>
	
	
	<div className="card1 "><img src={PDFIMG1} width="25px" height="auto"/><img src={PDFIMG2}  width="25px" height="auto"/><img src={PDFIMG3} width="25px" height="auto"/>

</div>
    
    </div>
   
    
  </div>
</div>

<div className="footer">
<div className="headcontainer">
<div className="col">
 <div className="fakeimg"><img src={PDFLOGO} width="76px" height="auto"/></div>
</div>
<div className="col">
<div className="card timestamp">Time Stamp: 07-07-2023 / 06 : 30 : 45 pm</div>
</div>
</div>
<div className="card ml-1"><h2>Executives Detail</h2></div>
<div className="card ml-1">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td className="thead1">S.No.</td>
	 <td className="thead">	Executive Name</td>
	   <td className="thead">Designation	</td>
	    <td className="thead">Email</td>
		 <td className="thead">Phone</td>
		  <td className="thead">Mobile</td>
		  
   
  </tr>

  <tr>
    <td>1.</td>
    <td>Subodh Sinha</td>
    <td>Head Corporate Projects</td>
    <td>subodh.sinha@dabur.com </td>
    <td>91 120 3962100</td>
    <td>91 120 4182100</td>
  
  </tr>
  <tr>
    <td>2.</td>
    <td>Balraj Karnati</td>
       <td>Area Sales Manager</td>
    <td>Balraj.sinha@dabur.com </td>
     <td>91 120 3962100</td>
    <td>91 120 4182100</td>
    
  </tr>
  <tr>
    <td>3.</td>
    <td>Lavanya John</td>
    <td>Human Resources Executive</td>
    <td>lavanya@dabur.com</td>
    <td>91 120 3962100</td>
    <td>91 120 4182100</td>
   
  </tr>
  <tr>
    <td>4.</td>
    <td>K Satish</td>
    <td>Brand Activation Manager</td>
    <td>k@dabur.com</td>
     <td>91 120 3962100</td>
    <td>91 120 4182100</td>
   
  </tr>
  <tr>
    <td>5.</td>
     <td>Subodh Sinha</td>
     <td>Head Corporate Projects</td>
    <td>subodh.sinha@dabur.com </td>
    <td>91 120 3962100</td>
    <td>91 120 4182100</td>
   
  </tr>
  <tr>
    <td>6.</td>
     <td>K Satish</td>
      <td>Brand Activation Manager</td>
    <td>k@dabur.com</td>
     <td>91 120 3962100</td>
    <td>91 120 4182100</td>
   
  </tr>
  <tr>
    <td>7.</td>
    <td>Lavanya John</td>
   
    <td>Human Resources Executive</td>
    <td>lavanya@dabur.com</td>
    <td>91 120 3962100</td>
    <td>91 120 4182100</td>
   
  </tr>
  <tr>
    <td>8.</td>
    <td>Balraj Karnati</td>
    
    <td>Area Sales Manager</td>
    <td>Balraj.sinha@dabur.com </td>
     <td>91 120 3962100</td>
    <td>91 120 4182100</td>
   
  </tr>
  <tr>
    <td>9.</td>
    <td>Balraj Karnati</td>
   
    <td>Area Sales Manager</td>
    <td>Balraj.sinha@dabur.com </td>
     <td>91 120 3962100</td>
    <td>91 120 4182100</td>
   
  </tr>
</table>
</div>
</div> */}
    </>
  );
};
export default CompanyPdfFormat;
