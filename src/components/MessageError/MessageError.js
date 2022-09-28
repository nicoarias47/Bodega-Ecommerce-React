import React from "react";
import "./MessageError.css";

const MessageError = ({ message }) => {
  return (
    <>
      <div className="msg-error text-center mt-4">{message}</div>
    </>
  );
};

export default MessageError;
