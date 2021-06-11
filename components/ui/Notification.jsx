import React from "react";
import ReactDom from "react-dom";
import styles from "./Notification.module.css";

const Notification = ({ title, message, status }) => {
  let statusClasses = "";

  if (status === "success") statusClasses = styles.success;

  if (status === "error") statusClasses = styles.error;

  return ReactDom.createPortal(
    <div className={`${styles.notification}  ${statusClasses}`}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notification")
  );
};

export default Notification;
