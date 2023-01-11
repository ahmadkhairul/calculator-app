import React from "react";
import Category from "./Category";
import Header from "../../templates/Header";
import Footer from "../../templates/Footer";

const style = {
  root_container: {
    display: "flex",
    justifyContent: "center"
  },
  container: {
    width: "400px",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    width: "335px",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#2C3A47",
    padding: "0px",
    marginBottom: "20px"
  }
};

const Donate = () => {
  return (
    <>
      <Header headerOf="Donate" />
      <div style={style.root_container}>
        <div style={style.container}>
          <h1 style={style.title}>Donation Target</h1>
          <Category />
        </div>
      </div>
      <Footer donate />
    </>
  );
};

export default Donate;
