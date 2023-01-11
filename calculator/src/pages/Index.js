import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const style = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  landing: {
    width: "400px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  landing_title: {
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "30px",
    textAlign: "center",
    color: "#2C3A47",
    marginTop: "20px",
    padding: "0px"
  },
  landing_subtitle: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "18px",
    textAlign: "center",
    color: "#2C3A47",
    marginTop: "20px"
  },
  landing_login: {
    width: "335px",
    height: "45px",
    color: "#ffffff",
    border: "1px solid #A4B0BE",

    background: "#CD4559",
    borderRadius: "4px",
    textAlign: "center",
    marginTop: "20px"
  },
  landing_register: {
    width: "335px",
    height: "45px",
    color: "#CD4559",
    border: "1px solid #A4B0BE",

    background: "#ffffff",
    borderRadius: "4px",
    textAlign: "center",
    marginTop: "20px"
  }
};

const Index = ({ user }) => {
  const { isLogin } = user;
  if (isLogin) return <Redirect to="/articles" />;
  return (
    <div style={style.container}>
      <div style={style.landing}>
        <img src="/assets/Logo.svg" alt="mejik fondation logo" width="200px" />
        <h1 style={style.landing_title}>Welcome to Mejik Foundation!</h1>
        <h2 style={style.landing_subtitle}>
          Mejik Foundation is a network that facilitates and empowers the voice
          of mejik communities
        </h2>
        <Link to="/login">
          <button style={style.landing_login}>Login</button>
        </Link>
        <Link to="/register">
          <button style={style.landing_register}>Register</button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Index);
