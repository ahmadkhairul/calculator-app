import React from "react";
import { Link } from "react-router-dom";

const NoAuth = ({ open, children }) => {
  const style = {
    modal_show: {
      display: open ? "flex" : "none",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      zIndex: 1,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.4)"
    },
    modal_content: {
      textAlign: "center",
      backgroundColor: "#fefefe",
      margin: "15% auto",
      padding: "40px 16px",
      border: "1px solid #888",
      width: "400px",
      height: "400px",
      animation: "slideIn 0.4s"
    },
    content_title: {
      fontWeight: "bold",
      fontSize: "14px",
      lineHeight: "18px",
      color: "#2C3A47",
      margin: "20px"
    },
    content_btn_login: {
      width: "335px",
      height: "45px",
      color: "#ffffff",

      background: "#CD4559",
      borderRadius: "4px",
      margin: "10px"
    },
    content_btn_register: {
      width: "335px",
      height: "45px",
      color: "#CD4559",

      background: "#ffffff",
      borderRadius: "4px",
      margin: "10px"
    }
  };

  return (
    <div style={style.modal_show}>
      <div style={style.modal_content}>
        <img src="/assets/Logo.svg" alt="mejik fondation logo" width="200px" />
        <h2 style={style.content_title}>{children}</h2>
        <Link to="/login">
          <button style={style.content_btn_login}>Login</button>
        </Link>
        <Link to="/register">
          <button style={style.content_btn_register}>Register</button>
        </Link>

        <style>
          {`@keyframes fadeIn {
                from {opacity: 0} 
                to {opacity: 1}
            }`}
        </style>
      </div>
    </div>
  );
};

export default NoAuth;
