import ReactDOM from "react-dom";

import classes from "./Modal.module.css";
import Card from "../Card/Card";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHandleClose}></div>;
};

const ModalOverlay = (props) => {
  return <Card className={classes.modal}>{props.children}</Card>;
};

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHandleClose={props.onHandleClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default Modal;
