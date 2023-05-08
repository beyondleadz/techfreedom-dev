import React from "react";
import { Modal, Button } from "antd";

const TrialModal = ({
  openInfoBeforeLogin,
  closeInfoBeforeLogin,
  buttonText = "Start Free Trial",
  modalBody,
  modalWidth = "400px",
  redirectToSignup,
}) => {
  return (
    <Modal
      width={modalWidth}
      closable={true}
      open={openInfoBeforeLogin}
      onCancel={closeInfoBeforeLogin}
      footer={[
        <Button key="submit" type="primary" onClick={redirectToSignup}>
          {buttonText}
        </Button>,
      ]}
    >
      <div class="pop-up">{modalBody}</div>
    </Modal>
  );
};

export default TrialModal;
