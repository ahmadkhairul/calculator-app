import React, { useState, useEffect } from "react";
import Avatar from "react-avatar";
import { connect } from "react-redux";

import { getBeneficiaryByCategory } from "../../_actions/beneficiary";
import Radio from "../../components/RadioButton";
import Amount from "./Amount";

const style = {
  container: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    overflowY: "hidden",
    padding: "20px 0px",
    margin: "0px 0px 20px 0px"
  },
  horizontal_menu: {
    display: "flex",
    flexWrap: "nowrap",
    margin: "0px 20px 0px 0px"
  },
  beneficiary_item: {
    display: "flex",
    width: "100px",
    height: "150px",
    margin: "0px 10px"
  },
  beneficiary_empty: {
    height: "120px",
    color: "#8593A3",
    padding: "15px"
  },
  avatar: {
    textAlign: "center"
  },
  beneficiary_name: {
    textAlign: "center",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#2C3A47"
  },
  beneficiary_category: {
    textAlign: "center",
    textDecoration: "none",
    fontSize: "10px",
    lineHeight: "14px",
    color: "#8593A3"
  }
};

const Beneficiary = ({ catId, beneficiaries, getBeneficiaryByCategory }) => {
  const [beneficiary, setBeneficiary] = useState("");
  const { data, loading, error } = beneficiaries;

  useEffect(() => {
    getBeneficiaryByCategory(catId);
  }, [catId]);

  if (loading) return "Loading...";
  if (error) return "Error";

  let benefy = (
    <div style={style.beneficiary_empty}>
      Currently no beneficiary in this category
    </div>
  );

  if (data.length > 0) {
    benefy = data.map((item, index) => (
      <div style={style.beneficiary_item} key={index}>
        <Radio
          name="category"
          value={item.id}
          checked={beneficiary == item.id}
          onChange={event => {
            setBeneficiary(event.target.value);
          }}
        >
          <div style={style.avatar}>
            <Avatar
              name={`${item.firstName} ${item.lastName}`}
              size="50px"
              round="50%"
            />
          </div>
          <p
            style={style.beneficiary_name}
          >{`${item.firstName} ${item.lastName}`}</p>
          <p style={style.beneficiary_category}>{item.category.name}</p>
        </Radio>
      </div>
    ));
  }

  return (
    <>
      <div style={style.container}>
        <div style={style.horizontal_menu}>{benefy}</div>
      </div>
      <Amount beneficiary={beneficiary} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    beneficiaries: state.beneficiaries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBeneficiaryByCategory: catId => dispatch(getBeneficiaryByCategory(catId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Beneficiary);
