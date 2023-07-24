import React from "react";
import { Modal, Button } from "antd";

const TrialModal = ({
  openModal,
  closeModal,
  buttonText = "Start Free Trial",
  modalBody,
  modalWidth = "400px",
  redirectToSignup,
  redirect = false,
  title=""
}) => {
  //console.log(redirect,'redirectredirect')
  return (
    <Modal
      title={title}
      width={modalWidth}
      closable={true}
      open={openModal}
      onCancel={closeModal}
      footer={[
        <Button
          key="submit"
          type="primary"
          onClick={redirect ? redirectToSignup : closeModal}
        >
          {buttonText}
        </Button>
      ]}
    >
      <div className="pop-up">{modalBody}</div>
    </Modal>
  );
};

export default TrialModal;
