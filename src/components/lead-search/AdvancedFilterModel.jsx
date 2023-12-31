import React from "react";
import _ from "lodash";
import AdvancedFilter from "./AdvancedFilter";
import { Modal } from "antd";
import {
  saveAdvancedSelectedFilters,
  getCompanyList,
  getExecutiveEmployeeList,
} from "../../actionCreator/executiveListingActionCreater";
import { useSelector, useDispatch } from "react-redux";

const AdvancedFilterModel = ({ setOpenAdvancedModel, openAdvancedModel,showNumberofRecords }) => {
  const dispatch = useDispatch();

  const handleOk = () => {
    setOpenAdvancedModel({ open: false, key: 0 });
  };
  //const companyPaginationValue = useSelector((state) => state.executiveListingReducer.paginationValue);

  const handleCancel = () => {
    dispatch(
      saveAdvancedSelectedFilters({
        selectedCountry: [],
        selectedState: [],
        selectedCity: [],
        selectedIndustry: [],
        selectedCompanytype: [],
        selectedEmployeecount: [],
        selectedRevenuerange: [],
        selectedSavedSearch:[],
        selectedCompanyTag:[],
        selectedExecutiveFunction:[],
        selectedExecutiveLevel:[],
      })
    );
    setOpenAdvancedModel({ open: false, key: 0 });
    dispatch(getExecutiveEmployeeList());
  };
  return (
    <>
      <Modal
        width={"55%"}
        // bodyStyle={{ overflowY: 'auto', maxHeight: 'calc(100vh - 230px)' }}
        wrapClassName="advancedfilter"
        title="Advanced Filter"
        open={openAdvancedModel?.open}
        onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        maskStyle={{ background: "rgba(0,0,0,0.8)" }}
      >
        <AdvancedFilter openAdvancedModel={openAdvancedModel} showNumberofRecords={showNumberofRecords} />
      </Modal>
    </>
  );
};
export default AdvancedFilterModel;
