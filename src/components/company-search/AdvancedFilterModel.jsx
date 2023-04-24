import React, { useEffect, useState, useMemo } from "react";
import _ from "lodash";
import AdvancedFilter from "./AdvancedFilter";
import { Modal, Checkbox, Input } from "antd";
import { saveAdvancedSelectedFilters } from "../../actionCreator/companyListingActionCreater";
import { SearchOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

const AdvancedFilterModel = ({ setOpenAdvancedModel, openAdvancedModel }) => {
  const dispatch = useDispatch();
  const companyFilterList = useSelector((state) => state.companyListingReducer);

  const handleOk = () => {
    setOpenAdvancedModel({ open: false, key: 0 });
  };

  const handleCancel = () => {
    setOpenAdvancedModel({ open: false, key: 0 });
  };
  return (
    <>
      <Modal
        width={"90%"}
        wrapClassName="advancedfilter"
        title="Advanced Filter"
        open={openAdvancedModel?.open}
        onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        maskStyle={{background:'rgba(0,0,0,0.8)'}}
      >
        <AdvancedFilter openAdvancedModel={openAdvancedModel} />
      </Modal>
    </>
  );
};
export default AdvancedFilterModel;
