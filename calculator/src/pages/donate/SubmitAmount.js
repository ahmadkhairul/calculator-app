import React from "react";
import { Link } from "react-router-dom";

const style = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#2C3A47",
    padding: "0px",
    margin: "0px 0px 5px 0px"
  },
  submit: {
    width: "100%",
    height: "40px",
    color: "#ffffff",
    background: "#CD4559",
    borderRadius: "4px",
    textAlign: "center",
    margin: "0px 0px 100px 0px"
  },
  disable_submit: {
    width: "100%",
    height: "40px",
    color: "#ffffff",
    background: "#cccccc",
    borderRadius: "4px",
    textAlign: "center",
    margin: "0px 0px 100px 0px"
  }
};

const Amount = ({ beneficiary, amount, timeline }) => {
  const value = { beneficiary, amount, timeline };

  return (
    <>
      <div style={style.container}>
        <span>Donation Amount</span>
        <span style={{ color: "#CD4559" }}>Rp. {amount * timeline}</span>
      </div>
      <Link
        to={{
          pathname: "/transfer",
          state: {
            data: value
          }
        }}
      >
        <button
          style={timeline ? style.submit : style.disable_submit}
          type="submit"
          disabled={timeline ? null : "disabled"}
        >
          Donate Now
        </button>
      </Link>
    </>
  );
};

export default Amount;
