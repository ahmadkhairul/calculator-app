import React, { useState } from "react";
import Radio from "../../components/RadioButton";
import SubmitAmount from "./SubmitAmount";

const style = {
  container: {
    display: "flex",
    flexWrap: "nowrap",
    margin: "0px 0px 15px 0px"
  },
  amount_items: {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#2C3A47"
  },
  amount_disabled: {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#cccccc"
  },
  title: {
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#2C3A47",
    padding: "0px",
    marginBottom: "20px"
  },
  amount_form: {
    width: "100%",
    height: "35px",
    paddingLeft: "1%",
    fontSize: "14px",
    color: "#A4B0BE",
    border: "1px solid #CED6E0",
    borderRadius: "4px",
    marginBottom: "20px"
  }
};

const amountList = [100000, 300000, 500000, 700000];
const timelineList = [1, 2, 3, 4, 5];

const Amount = ({ beneficiary }) => {
  const [amount, setAmount] = useState("");
  const [timeline, setTimeline] = useState("");

  return (
    <>
      <h1 style={style.title}>Donation Amount</h1>
      <input
        style={style.amount_form}
        type="number"
        value={amount}
        placeholder="e.g. Rp 10.000"
        onChange={event => {
          setAmount(event.target.value);
        }}
        disabled={beneficiary ? null : "disabled"}
      />
      <div style={style.container}>
        <div style={beneficiary ? style.amount_items : style.amount_disabled}>
          {amountList.map((item, index) => (
            <Radio
              key={index}
              value={item}
              checked={amount == item}
              onChange={event => {
                setAmount(event.target.value);
              }}
              disabled={beneficiary ? null : "disabled"}
            >
              Rp. {item}
            </Radio>
          ))}
        </div>
      </div>
      <h1 style={style.title}>Timeline</h1>
      <div style={style.container}>
        <div style={amount ? style.amount_items : style.amount_disabled}>
          {timelineList.map((item, index) => (
            <Radio
              key={index}
              value={item}
              checked={timeline == item}
              onChange={event => {
                setTimeline(event.target.value);
              }}
              disabled={amount ? null : "disabled"}
            >
              {item}x
            </Radio>
          ))}
        </div>
      </div>
      <SubmitAmount
        beneficiary={beneficiary}
        amount={amount}
        timeline={timeline}
      />
    </>
  );
};

export default Amount;
