import React, { useState, useEffect } from "react";
import { Table, Modal, Button, Tooltip } from "antd";
import { PAGE_LENGTH } from "../../config";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { submitLead } from "../../actionCreator/companyDetailsActionCreator";
import popupImg from "../../assets/images/free-user-login-prompt.jpg.jpeg";
const KeyExecutives = () => {
  const dispatch = useDispatch();
  const employeeList = useSelector(
    (state) => state.companyDetailsReducer.employeeList
  );

  const [employeeData, setEmployeeData] = useState([]);
  const [openInfoBeforeLogin, setOpenInfoBeforeLogin] = useState({
    info: null,
    open: false,
  });

  const navigate = useNavigate();

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      fixed: "left",
    },
    {
      title: "Executive name",
      dataIndex: "fullname",
      fixed: "left",
    },
    {
      title: "Designation",
      dataIndex: "title",
    },
    {
      title: "Email",
      dataIndex: "emailId",
      render: (text) => {
        const token = sessionStorage.getItem("token");
        return token ? (
          <Tooltip title={text}>
            <h4 className="  fs-23 btn  la  la-envelope-open-text text-black"></h4>
          </Tooltip>
        ) : (
          <h4
            className="  fs-23 btn  la  la-envelope-open-text text-black"
            onClick={() => openInfoModel(text)}
          ></h4>
        );
      },
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNo",
      render: (text) => {
        const token = sessionStorage.getItem("token");
        return token ? (
          <Tooltip title={text}>
            <h4 className="  fs-23 btn  la  la-mobile text-black"></h4>
          </Tooltip>
        ) : (
          <h4
            className="  fs-23 btn  la  la-mobile text-black"
            onClick={() => openInfoModel(text)}
          ></h4>
        );
      },
    },
    {
      title: "Direct Dial/Mobile    ",
      dataIndex: "directDial",
    },
    {
      title: "",
      dataIndex: "leads",
    },
  ];

  const postLeads = (record) => {
    dispatch(submitLead(record));
  };

  useEffect(() => {
    let data = [];
    employeeList?.forEach((record) => {
      data = [
        ...data,
        {
          key: record.id,
          id: record.id,
          fullname: record.fullname,
          title: record?.title,
          emailId: record?.emailId,
          phoneNo: record.phoneNo,
          directDial: (
            <h4 class="btn btn-primary pr-1 small text-black align-items-center">
              <i class="las la-mobile fs-12 pt-1 pr-1"></i>
              VIEW
            </h4>
          ),
          leads: (
            <button
              className="d-none d-sm-inline-block small btn btn-primary text-black"
              onClick={() => postLeads(record)}
            >
              ADD TO LEADS
            </button>
          ),
        },
      ];
    });
    setEmployeeData(data);
  }, [employeeList]);

  const openInfoModel = (info) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setOpenInfoBeforeLogin({ info: null, open: false });
    } else {
      setOpenInfoBeforeLogin({ info: null, open: true });
    }
  };

  const redirectToSignup = () => {
    setOpenInfoBeforeLogin(false);
    navigate("/signup");
  };

  const closeInfoBeforeLogin = () => {
    setOpenInfoBeforeLogin(false);
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  const onPageChange = (page, pageSize) => {
    // const pageValues = {
    //   start: page,
    //   end: pageSize,
    // };
    // dispatch(savePaginationValues(pageValues));
    // dispatch(getCompanyList(pageValues, companySelectedFilterList));
  };

  return (
    <div className="card shadow card-body">
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={employeeData}
        pagination={{
          responsive: true,
          total: employeeList?.length,
          // pageSizeOptions: ["5", "10", "15", "15"],
          pageSize: PAGE_LENGTH,
          // showSizeChanger: true,
          // defaultPageSize: 10,
          position: ["bottomCenter"],
          onChange: onPageChange,
        }}
      />
      {openInfoBeforeLogin?.open && (
        <Modal
          // title="Basic Modal"
          width="600px"
          closable={true}
          open={openInfoBeforeLogin}
          onCancel={closeInfoBeforeLogin}
          footer={[
            <Button key="submit" type="primary" onClick={redirectToSignup}>
              Start Free Trial
            </Button>,
          ]}
        >
          <div class="pop-up">
            <div id="small-dialog2">
              <div align="center">
                <img src={popupImg} />
              </div>
              <p style={{ color: "#0000FF" }}>
                Get 10 free verified contacts with a BeyondLeadz Pro trial
              </p>
              <p>
                BeyondLeadz Pro customers close deals faster thanks to relevant
              </p>
              {/* <div class="mt-md-5 mt-4 mb-lg-0 mb-4" align="right">
                <a href="login.html" class="btn btn-style mt-4">
                  Start Free Trial
                </a>
              </div> */}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default KeyExecutives;
