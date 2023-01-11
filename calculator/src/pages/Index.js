import React from "react";
import { Redirect } from "react-router-dom";
import { logoutUser } from "../_actions/user";
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
  logout: {
    width: "100%",
    height: "45px",
    color: "#ffffff",
    border: "1px solid #A4B0BE",
    background: "#CD4559",
    borderRadius: "4px",
    textAlign: "center",
    marginTop: "20px",
    cursor: "pointer"
  },
};

const Index = ({ user, logoutUser }) => {
  const { data: { id }, isLogin } = user;
  if (!isLogin) return <Redirect to="/" />;

  return (
    <div style={style.container}>
      <div style={style.landing}>
        <h1 style={style.landing_title}>Welcome to Calculator</h1>
        <button
          onClick={() => logoutUser({ id })}
          style={style.logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: value => dispatch(logoutUser(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
