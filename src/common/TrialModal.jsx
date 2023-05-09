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
}) => {
  return (
    <Modal
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
        </Button>,
      ]}
    >
      <div class="pop-up">{modalBody}</div>
    </Modal>
  );
};

export default TrialModal;
