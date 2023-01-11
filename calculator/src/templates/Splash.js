import React from "react";

const style = {
  splashContainer: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "white"
  }
};

const Splash = () => {
  return (
    <div style={style.splashContainer}>
      <img src="/assets/Logo.svg" alt="mejik fondation logo" width="200px" />
    </div>
  );
};

export default Splash;
