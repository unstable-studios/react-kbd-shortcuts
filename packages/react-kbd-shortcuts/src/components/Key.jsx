import React from "react";

const Key = ({ children, render, ...props }) => {
  if (typeof render === "function") {
    return render(children);
  }
  // Default rendering (can be styled by user)
  return <kbd {...props}>{children}</kbd>;
};

export default Key;
