import React, { useState, useEffect } from "react";
import { Table, Modal, Button, Tooltip } from "antd";
import { PAGE_LENGTH } from "../../config";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  submitLead,
  resetLead,
} from "../../actionCreator/companyDetailsActionCreator";
import popupImg from "../../assets/images/free-user-login-prompt.jpg.jpeg";
import Loader from "../loader";
import TrialModal from "../../common/TrialModal";
const KeyExecutives = () => {
  const dispatch = useDispatch();
  const employeeList = useSelector(
    (state) => state.companyDetailsReducer.employeeList
  );
  const submitLeadRes = useSelector(
    (state) => state.companyDetailsReducer?.executiveLeads
  );

  const [employeeData, setEmployeeData] = useState([]);
  const [openModal, setOpenModal] = useState({
    info: null,
    open: false,
  });
  const [addToLeads, setAddToLeads] = useState(0);
  const navigate = useNavigate();

  const columns = [
    // {
    //   title: "ID",
    //   dataIndex: "id",
    //   fixed: "left",
    // },
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
            className="  fs-23 btn  la  la-envelope text-black"
            onClick={() => openInfoModel()}
          ></h4>
        );
      },
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNo",
    },
    {
      title: "Direct Dial/Mobile    ",
      dataIndex: "directDial",
      render: (record) => {
        const token = sessionStorage.getItem("token");
        return token ? (
          <Tooltip title={record?.phoneNo}>
            <Button
              style={{ height: "auto" }}
              className="keyexebtn d-none d-sm-inline-block small btn btn-primary text-black"
            >
              <i class="las la-mobile fs-12  pr-1"></i>
              VIEW
            </Button>
          </Tooltip>
        ) : (
          <Button
            style={{ height: "auto" }}
            className="keyexebtn d-none d-sm-inline-block small btn btn-primary text-black"
            onClick={() => openInfoModel()}
          >
            <i class="las la-mobile fs-12  pr-1"></i>
            VIEW
          </Button>
        );

        // return (
        //   <Button
        //     style={{ height: "auto" }}
        //     className="keyexebtn d-none d-sm-inline-block small btn btn-primary text-black"
        //     onClick={() => openInfoModel(text)}
        //   >
        //     <i class="las la-mobile fs-12 pt-1 pr-1"></i>
        //     VIEW
        //   </Button>
        // );
      },
    },
    {
      title: "",
      dataIndex: "leads",
      render: (record) => {
        const token = sessionStorage.getItem("token");
        return token ? (
          <Button
            style={{ height: "auto" }}
            className="keyexebtn d-none d-sm-inline-block small btn btn-primary text-black"
            loading={
              !Object.keys(submitLeadRes).length && addToLeads === record.id
                ? true
                : false
            }
            onClick={() => postLeads(record)}
          >
            <i class="las la-user-plus fs-12 pr-1"></i> ADD TO LEADS
          </Button>
        ) : (
          <Button
            style={{ height: "auto" }}
            className="keyexebtn d-none d-sm-inline-block small btn btn-primary text-black"
            loading={
              !Object.keys(submitLeadRes).length && addToLeads === record.id
                ? true
                : false
            }
            onClick={() => openInfoModel()}
          >
            <i class="las la-user-plus  fs-12  pr-1"></i>ADD TO LEADS
          </Button>
        );
      },
    },
  ];

  const postLeads = (record) => {
    let leadPayload = {
      firstname: record.firstname,
      lastname: record.lastname,
      fullname: record.fullname,
      title: record.title,
      client: record.client,
      emailId: record.emailId,
      phoneNo: record.phoneNo,
      bio: record.bio,
      description: record.description,
    };
    dispatch(submitLead(leadPayload));
    setAddToLeads(record.id);
  };

  const resetLeadsData = () => {
    dispatch(resetLead({}));
    setAddToLeads(0);
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
          phoneNo: record?.company?.phoneNo,
          directDial: record,
          leads: record,
        },
      ];
    });
    setEmployeeData(data);
  }, [employeeList]);

  const openInfoModel = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setOpenModal({ info: null, open: false });
    } else {
      setOpenModal({ info: null, open: true });
    }
  };

  const redirectToSignup = () => {
    setOpenModal(false);
    navigate("/signup");
  };

  const closeInfoBeforeLogin = () => {
    setOpenModal(false);
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
      {openModal?.open && (
        <TrialModal
          openModal={openModal}
          closeModal={closeInfoBeforeLogin}
          redirectToSignup={redirectToSignup}
          redirect = {true}
          buttonText="Start Free Trial"
          modalBody={
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
            </div>
          }
          modalWidth="400px"
        />
      )}
      {Object.keys(submitLeadRes).length ? (
        <Modal
          width="400px"
          closable={false}
          open={Object.keys(submitLeadRes).length ? true : false}
          footer={[
            <Button key="submit" type="primary" onClick={resetLeadsData}>
              OK
            </Button>,
          ]}
        >
          <div class="pop-up">
            <div id="small-dialog2">
              <p style={{ color: "#0000FF" }}>
                New Client Leads is creted with new identifier :{" "}
                {submitLeadRes.id}
              </p>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default KeyExecutives;
