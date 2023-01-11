import React from "react";

const styles = {
  header: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#2C3A47",
    textAlign: "center"
  }
};

const Header = ({ headerOf }) => {
  return (
    <div>
      <h1 style={styles.header}>{headerOf}</h1>
      <hr />
    </div>
  );
};

export default Header;
