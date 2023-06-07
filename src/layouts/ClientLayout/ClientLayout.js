import React from "react";

export const ClientLayout = (props) => {
  const { children } = props;

  return (
    <div>
      <h2>Esta cargando en ClientLayout</h2>

      {children}
    </div>
  );
};
