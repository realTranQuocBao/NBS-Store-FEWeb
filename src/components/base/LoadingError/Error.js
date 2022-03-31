import React from "react";

const Message = ({ variant, children }) => {
  return (
    <div className="d-flex justify-content-center col-12">
      <div className={`alert ${variant}`}>{children}</div>
    </div>
  );
};
// admin have: <div className="d-flex justify-content-center col-12"></div>
Message.defaultProps = {
  variant: "alert-info",
};

export default Message;
