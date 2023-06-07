import React from "react";

export const AdminLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <h2>Se esta usando el AdminLayout</h2>

      {children}
    </div>
  );
};
