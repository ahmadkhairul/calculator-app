import React from "react";

const Avatar = ({ name, width, height }) => {
  const style = {
    container: {
      width: width ? width : "100%",
      height: height ? height : "100%",
      backgroundColor: "#CD4559",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  };

  let initialName = "";
  const nameArr = name.split(" ");
  nameArr.forEach(element => {
    initialName += element.charAt(0);
  });
  return <div style={style.container}>{initialName}</div>;
};

export default Avatar;
