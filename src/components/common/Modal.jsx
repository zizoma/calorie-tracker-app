import React from "react";
import styles from "./Modal.module.css";
import ReactDom from "react-dom";

function Overlay(props) {
  const { isOpen, onRequestClose, children } = props;
  return (
    isOpen && (
      <div className={styles.overlay} onClick={onRequestClose}>
        <div className={styles.content}>{children}</div>
      </div>
    )
  );
}

const Modal = (props) => {
  return ReactDom.createPortal(<Overlay {...props} />, document.body);
};

export default Modal;
