import React from "react";

const Radio = ({ children, name, value, checked, onChange, disabled }) => {
  const style = {
    selected: {
      border: "1px solid #CD4559",
      borderRadius: "18px",
      padding: "8px 12px",
      cursor: "pointer",
      boxShadow: "0px 0px 12px rgba(17, 38, 69, 0.05)",
      width: "100%",
      height: "100%"
    },
    default: {
      padding: "8px 12px",
      borderRadius: "18px",
      cursor: "pointer",
      boxShadow: "0px 0px 12px rgba(17, 38, 69, 0.05)",
      width: "100%",
      height: "100%"
    },
    input: {
      position: "absolute",
      opacity: "0",
      cursor: "pointer",
      height: "0",
      width: "0"
    }
  };

  return (
    <label style={checked ? style.selected : style.default}>
      {children}
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        style={style.input}
        disabled={disabled}
      />
    </label>
  );
};

export default Radio;
