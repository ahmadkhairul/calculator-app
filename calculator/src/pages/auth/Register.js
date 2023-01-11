import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../_actions/user";
import { Redirect } from "react-router-dom";

const style = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  register: {
    width: "400px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  register_title: {
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "30px",
    textAlign: "center",
    color: "#2C3A47",
    marginTop: "20px",
    padding: "0px"
  },
  register_form: {
    width: "100%",
    height: "30px",
    paddingLeft: "1%",
    fontSize: "14px",
    color: "#A4B0BE",
    border: "1px solid #CED6E0",
    borderRadius: "4px"
  },
  register_label: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#1E272E",
    float: "left",
    margin: "15px 0 5px"
  },
  register_submit: {
    width: "100%",
    height: "45px",
    color: "#ffffff",
    background: "#CD4559",
    borderRadius: "4px",
    textAlign: "center",
    marginTop: "20px"
  },
  register_error: {
    color: "red"
  }
};

const Register = ({ user, registerUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { isLogin } = user;
  if (isLogin) return <Redirect to="/articles" />;

  const value = {
    firstName,
    lastName,
    email,
    password,
    phoneNumber
  };

  return (
    <div style={style.container}>
      <div style={style.register}>
        <img src="/assets/Logo.svg" alt="mejik fondation logo" width="200px" />
        <h1 style={style.title}>REGISTER</h1>
        {/* <span style={style.register_error}>
          {error ? "Email already used" : ""}
        </span> */}
        <form
          onSubmit={async event => {
            event.preventDefault();
            registerUser(value);
          }}
        >
          <label style={style.register_label}>First Name</label>
          <input
            style={style.register_form}
            type="text"
            placeholder="muhammad"
            onChange={event => {
              setFirstName(event.target.value);
            }}
            required
          />

          <label style={style.register_label}>Last Name</label>
          <input
            style={style.register_form}
            type="text"
            placeholder="najib"
            onChange={event => {
              setLastName(event.target.value);
            }}
            required
          />

          <label style={style.register_label}>Email</label>
          <input
            style={style.register_form}
            type="email"
            placeholder="e.g. najib@gmail.com"
            onChange={event => {
              setEmail(event.target.value);
            }}
            required
          />

          <label style={style.register_label}>Phone Number</label>
          <input
            style={style.register_form}
            type="tel"
            placeholder="083434234321"
            onChange={event => {
              setPhoneNumber(event.target.value);
            }}
            required
          />

          <label style={style.register_label}>Password</label>
          <input
            style={style.register_form}
            type="password"
            placeholder="input your password"
            onChange={event => {
              setPassword(event.target.value);
            }}
            required
          />

          <button style={style.register_submit} type="submit">
            Register
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
    registerUser: value => dispatch(registerUser(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
