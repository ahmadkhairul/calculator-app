import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../_actions/user";
import { Redirect } from "react-router-dom";

const style = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  login: {
    width: "400px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  login_title: {
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "30px",
    textAlign: "center",
    color: "#2C3A47",
    marginTop: "20px",
    padding: "0px"
  },
  login_form: {
    width: "100%",
    height: "30px",
    paddingLeft: "1%",
    fontSize: "14px",
    color: "#A4B0BE",
    border: "1px solid #CED6E0",
    borderRadius: "4px"
  },
  login_label: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#1E272E",
    float: "left",
    margin: "15px 0 5px"
  },
  login_submit: {
    width: "100%",
    height: "45px",
    color: "#ffffff",
    border: "1px solid #A4B0BE",

    background: "#CD4559",
    borderRadius: "4px",
    textAlign: "center",
    marginTop: "20px"
  },
  login_error: {
    color: "red"
  }
};

const Login = ({ user, loginUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLogin } = user;
  if (isLogin) return <Redirect to="/articles" />;

  const value = {
    email,
    password
  };

  return (
    <div style={style.container}>
      <div style={style.login}>
        <img src="assets/Logo.svg" alt="mejik fondation logo" width="200px" />
        <h1 style={style.login_title}>LOGIN</h1>
        {/* <span style={style.login_error}>
          {error ? "Email or Password wrong" : ""}
        </span> */}
        <form
          onSubmit={async event => {
            event.preventDefault();
            loginUser(value);
          }}
        >
          <label style={style.login_label}>Email</label>
          <input
            style={style.login_form}
            type="email"
            placeholder="e.g. najib@mail.com"
            onChange={event => {
              setEmail(event.target.value);
            }}
            required
          />
          <label style={style.login_label}>Password</label>
          <input
            style={style.login_form}
            type="password"
            placeholder="input yout password"
            onChange={event => {
              setPassword(event.target.value);
            }}
            required
          />
          <button style={style.login_submit} type="submit">
            Login
          </button>
        </form>
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
    loginUser: value => dispatch(loginUser(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
