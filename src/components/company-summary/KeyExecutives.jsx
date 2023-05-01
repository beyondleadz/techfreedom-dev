import React, { useState, useEffect } from "react";
import { Table, Modal, Button } from "antd";
import { PAGE_LENGTH } from "../../config";
import { useSelector,useDispatch } from "react-redux";
import {submitLead} from '../../actionCreator/companyDetailsActionCreator'
const KeyExecutives = () => {
  const dispatch = useDispatch()
  const employeeList = useSelector(
    (state) => state.companyDetailsReducer.employeeList
  );

  const [employeeData, setEmployeeData] = useState([]);
  const [openInfoAfterLogin, setOpenInfoAfterLogin] = useState({
    info: null,
    open: false,
  });
  const [openInfoBeforeLogin, setOpenInfoBeforeLogin] = useState({
    info: null,
    open: false,
  });

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
      // render: (text) => {
      //   const token = sessionStorage.getItem('token');
      //   if(token){
      //     return text
      //   }else{
      //     return <h4 className="  fs-23 btn  la  la-envelope-open-text text-black   "></h4>
      //   }
      // }
      render: (text) => (
        <h4
          className="  fs-23 btn  la  la-envelope-open-text text-black"
          onClick={() => openInfoModel(text)}
        ></h4>
      ),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNo",
      render: (text) => (
        <h4
          className="  fs-23 btn  la  la-mobile text-black"
          onClick={() => openInfoModel(text)}
        ></h4>
      ),
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
    dispatch(submitLead(record))
  }

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
            <button className="d-none d-sm-inline-block small btn btn-primary text-black" onClick={() =>postLeads(record)}>
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
      setOpenInfoAfterLogin({ info: info, open: true });
      setOpenInfoBeforeLogin({ info: null, open: false });
    } else {
      setOpenInfoAfterLogin({ info: null, open: false });
      setOpenInfoBeforeLogin({ info: null, open: true });
    }
  };

  const closeInfoBeforeLogin = () => {
    setOpenInfoBeforeLogin(false);
  };

  const closeInfoAfterLogin = () => {
    setOpenInfoAfterLogin(false);
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
          title="Basic Modal"
          closable={false}
          open={openInfoBeforeLogin}
          footer={[
            <Button key="submit" type="primary" onClick={closeInfoBeforeLogin}>
              OK
            </Button>,
          ]}
        >
          Before login
        </Modal>
      )}

      {openInfoAfterLogin?.open && (
        <Modal
          title="Basic Modal"
          closable={false}
          open={openInfoAfterLogin}
          footer={[
            <Button key="submit" type="primary" onClick={closeInfoAfterLogin}>
              OK
            </Button>,
          ]}
        >
          {openInfoAfterLogin?.info}
          After login
        </Modal>
      )}
    </div>
  );
};

export default KeyExecutives;
