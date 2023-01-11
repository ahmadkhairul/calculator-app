import React from "react";

const style = {
  flexContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#cccccc"
  },
  flexItem: {
    width: "514px",
    minHeight: "760px",
    backgroundColor: "white"
  }
};

const MobileContainer = ({ children }) => {
  return (
    <div style={style.flexContainer}>
      <div style={style.flexItem}>{children}</div>
    </div>
  );
};

export default MobileContainer;
