import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CancelButton, SuccessButton } from "../styles/Inputs.Styled";

const AlertModal = (props) => {
  return (
    <div>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: 17 }}>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <div>
            <CancelButton onClick={props.onclickCancel}>Cancel</CancelButton>
            <SuccessButton onClick={props.onclickOk}>{props.okBtnText}</SuccessButton>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AlertModal;
