import React from "react";
import _ from "lodash";
import AdvancedFilter from "./AdvancedFilter";
import { Modal } from "antd";
import {
  saveAdvancedSelectedFilters,
  getCompanyList,
} from "../../actionCreator/companyListingActionCreater";
import { useSelector, useDispatch } from "react-redux";

const AdvancedFilterModel = ({ setOpenAdvancedModel, openAdvancedModel }) => {
  const dispatch = useDispatch();
  const companyFilterList = useSelector((state) => state.companyListingReducer);

  const handleOk = () => {
    setOpenAdvancedModel({ open: false, key: 0 });
  };
  //const companyPaginationValue = useSelector((state) => state.companyListingReducer.paginationValue);

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
      })
    );
    setOpenAdvancedModel({ open: false, key: 0 });
    dispatch(getCompanyList());
  };
  return (
    <>
      <Modal
        width={"80%"}
        bodyStyle={{ overflowY: 'auto', maxHeight: 'calc(100vh - 230px)' }}
        wrapClassName="advancedfilter"
        title="Advanced Filter"
        open={openAdvancedModel?.open}
        onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        maskStyle={{ background: "rgba(0,0,0,0.8)" }}
      >
        <AdvancedFilter openAdvancedModel={openAdvancedModel} />
      </Modal>
    </>
  );
};
export default AdvancedFilterModel;
