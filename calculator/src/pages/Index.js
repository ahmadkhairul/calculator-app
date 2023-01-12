import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import angkaTerbilang from '@develoka/angka-terbilang-js';
import { logoutUser } from "../_actions/user";
import { connect } from "react-redux";
import Wrapper from "../components/Wrapper";
import Screen from "../components/Screen";
import ButtonBox from "../components/ButtonBox";
import Button from "../components/Button";

const style = {
  container: {
    display: "flex",
    justifyContent: "center"
  },
  landing: {
    width: "800px",
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
    width: "150px",
    height: "45px",
    color: "#ffffff",
    border: "1px solid #A4B0BE",
    background: "#CD4559",
    borderRadius: "4px",
    textAlign: "center",
    marginTop: "20px",
    cursor: "pointer",
    marginBottom: "20px"
  },
  terbilang: {
    marginTop: "10px",
    fontSize: "30px"
  }
};



const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const Index = ({ user, logoutUser }) => {
  const { data: { id }, isLogin } = user;

  let [view, setView] = useState(false);
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  if (!isLogin) return <Redirect to="/" />;

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
              ? toLocaleString(Number(removeSpaces(calc.num + value)))
              : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
            ? a - b
            : sign === "X"
              ? a * b
              : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : toLocaleString(
              math(
                Number(removeSpaces(calc.res)),
                Number(removeSpaces(calc.num)),
                calc.sign
              )
            ),
        sign: "",
        num: 0,
      });
    }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
      sign: "",
    });
  };

  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
    [view ? "Terbilang on" : "Terbilang off"]
  ];

  return (
    <div style={style.container}>
      <div style={style.landing}>
        <h1 style={style.landing_title}>SELAMAT DATANG DI APLIKASI KALKULATOR V1</h1>
        <button
          onClick={() => logoutUser({ id })}
          style={style.logout}
        >
          Logout
        </button>
        <Wrapper>
          <Screen value={calc.num ? calc.num : calc.res} />
          <ButtonBox>
            {btnValues.flat().map((btn, i) => {
              return (
                <Button
                  key={i}
                  className={
                    btn === "="
                      ? "equals"
                      : btn === "Terbilang on"
                        ? "terbilang"
                        : btn === "Terbilang off"
                          ? "terbilangoff"
                          : ""}
                  value={btn}
                  onClick={
                    btn === "C"
                      ? resetClickHandler
                      : btn === "+-"
                        ? invertClickHandler
                        : btn === "%"
                          ? percentClickHandler
                          : btn === "="
                            ? equalsClickHandler
                            : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                              ? signClickHandler
                              : btn === "."
                                ? commaClickHandler
                                : btn === "Terbilang on"
                                  ? () => setView(false)
                                  : btn === "Terbilang off"
                                    ? () => setView(true)
                                    : numClickHandler
                  }
                />
              );
            })}
          </ButtonBox>
        </Wrapper>
        {view
          ? <div style={style.terbilang}>
            Terbilang : <br />{angkaTerbilang(calc.num ? calc.num : calc.res)}
          </div>
          : ""
        }
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
