import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getCategory } from "../../_actions/category";

import Radio from "../../components/RadioButton";
import Beneficiary from "./Beneficiaries";

const style = {
  container: {
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
    padding: "20px 0px",
    margin: "0px 0px 20px 0px"
  },
  tab: {
    display: "inline-block",
    margin: "0px 20px 0px 0px"
  }
};

const Category = ({ categories, getCategory }) => {
  const [categoryId, setCategoryId] = useState("all");

  const { data, loading, error } = categories;

  useEffect(() => {
    getCategory();
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error";

  return (
    <>
      <div style={style.container}>
        <div style={style.tab}>
          <Radio
            name="category"
            value="all"
            checked={categoryId === "all"}
            onChange={event => {
              setCategoryId(event.target.value);
            }}
          >
            All
          </Radio>
        </div>

        {data.map((item, index) => {
          return (
            <div style={style.tab} key={index}>
              <Radio
                name="category"
                value={item.id}
                checked={categoryId == item.id}
                onChange={event => {
                  setCategoryId(event.target.value);
                }}
              >
                {item.name}
              </Radio>
            </div>
          );
        })}
      </div>
      <Beneficiary catId={categoryId} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategory: () => dispatch(getCategory())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
