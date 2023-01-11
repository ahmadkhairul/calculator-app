import React from "react";

const InputFile = ({ children, noStyle, name, height, width, onChange }) => {
  const style = {
    label: {
      border: "2px dashed #CD4559",
      padding: "8px 12px",
      boxSizing: "border-box",
      borderRadius: "8px",
      height: height ? height : "100%",
      width: width ? width : "100%"
    },
    noStyle: {},
    input: {
      position: "absolute",
      opacity: "0",
      height: "0",
      width: "0"
    }
  };

  return (
    <div style={noStyle ? style.noStyle : style.label}>
      <label htmlFor={name}>
        {children}
        <input
          style={style.input}
          onChange={onChange}
          type="file"
          name={name}
          id={name}
        />
      </label>
    </div>
  );
};

export default InputFile;
