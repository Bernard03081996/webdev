import React from "react";

const MessageError = (props) => {
  return (
    <div className={`alert alert-${props.variant || "info"}`}>
      {props.children}
    </div>
  );
};

export default MessageError;
