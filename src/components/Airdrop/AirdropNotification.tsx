import React from "react";

const AirdropNotification: React.FC<{ message: string }> = ({ message }) => (
  <div className="notification">{message}</div>
);

export default AirdropNotification;
