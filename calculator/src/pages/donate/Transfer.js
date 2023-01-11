import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Avatar from "react-avatar";
import { connect } from "react-redux";

import { getBeneficiaryById } from "../../_actions/beneficiary";
import { doTransaction } from "../../_actions/transaction";

import Header from "../../templates/Header";
import Footer from "../../templates/Footer";
import Splash from "../../templates/Splash";
import NoAuth from "../../templates/NoAuth";
import InputFile from "../../components/InputFile";

const style = {
  root__container: {
    display: "flex",
    justifyContent: "center"
  },
  container: {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    padding: "0px 50px"
  },
  transfer: {
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  account__logo: {
    margin: "50px 0px 25px 0px"
  },
  account__items: {
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#2C3A47",
    padding: "0px",
    margin: "0px",
    textAlign: "center"
  },
  account__label: {
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#8593A3",
    padding: "0px",
    margin: "10px 0px",
    textAlign: "center"
  },
  submit: {
    width: "100%",
    height: "45px",
    color: "#ffffff",
    background: "#CD4559",
    borderRadius: "4px",
    textAlign: "center",
    margin: "20px 0px 100px 0px"
  },
  beneficiary: {
    marginBottom: "20px",
    width: "100%"
  },
  beneficiary__title: {
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#2C3A47",
    padding: "0px",
    marginBottom: "20px"
  },
  beneficiary__avatar: {
    width: "15%"
  },
  beneficiary__name: {
    width: "25%",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#2C3A47"
  },
  beneficiary__timeline: {
    width: "30%",
    textAlign: "right",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#8593A3"
  },
  beneficiary__amount: {
    width: "30%",
    textAlign: "right",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#CD4559"
  },
  beneficiary__category: {
    fontSize: "12px",
    lineHeight: "14px",
    color: "#8593A3"
  },
  total: {
    marginBottom: "20px",
    width: "100%"
  },
  total__name: {
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "16px",
    color: "#2C3A47"
  },
  total__amount: {
    width: "50%",
    textAlign: "right",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#CD4559"
  },
  proof: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
    height: "300px"
  },
  proof__icon: {
    padding: "20px 0px"
  },
  proof__button: {
    padding: "8px",
    background: "#CD4559",
    borderRadius: "4px",
    color: "#ffffff"
  }
};

const Transfer = ({
  user,
  beneficiaries,
  location,
  getBeneficiaryById,
  doTransaction
}) => {
  const [variable, setVariable] = useState([]);
  const [proof, setProof] = useState(null);
  const [proofPreview, setProofPreview] = useState(null);

  const { beneficiary, amount, timeline } = variable;
  const { detail } = beneficiaries;
  const { isLogin, loading } = user;

  useEffect(() => {
    if (location.state) {
      const { data } = location.state;
      setVariable(data);
      getBeneficiaryById(data.beneficiary);
    }
  }, [location]);

  const values = {
    proof,
    beneficiary,
    amount,
    timeline
  };

  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();
    await doTransaction(values);
    history.push("/history");
  };

  if (variable == []) return <Redirect to="/donate" />;
  if (loading) return <Splash />;

  return (
    <>
      <NoAuth open={isLogin ? false : true}>
        Login or Register to start donate
      </NoAuth>
      <Header headerOf="Proof Of Transfer" />
      <div style={style.root__container}>
        <div style={style.container}>
          <img
            style={style.account__logo}
            src="../assets/LogoBCA.svg"
            alt="BCA logo in mejik"
          />
          <h3 style={style.account__label}>Virtual Account</h3>
          <h2 style={style.account__items}>0001-2846-1819-2910</h2>
          <h3 style={style.account__label}>Name Holder</h3>
          <h2 style={style.account__items}>Diaspora Peduli</h2>

          <h1 style={style.beneficiary__title}>Bill Summary</h1>
          <table style={style.beneficiary}>
            <tbody>
              <tr>
                <td rowSpan="2" style={style.beneficiary__avatar}>
                  <Avatar
                    name={`${detail.firstName} ${detail.lastName}`}
                    size="50px"
                    round="50%"
                  />
                </td>
                <td
                  style={style.beneficiary__name}
                >{`${detail.firstName} ${detail.lastName}`}</td>
                <td style={style.beneficiary__timeline}>{timeline}x</td>
                <td style={style.beneficiary__amount}>Rp. {amount}</td>
              </tr>
              <tr>
                <td style={style.beneficiary__category}>
                  {detail.category?.name}
                </td>
              </tr>
            </tbody>
          </table>
          <table style={style.total}>
            <tbody>
              <tr>
                <td style={style.total__name}>Total</td>
                <td style={style.total__amount}>Rp. {timeline * amount}</td>
              </tr>
            </tbody>
          </table>
          <form onSubmit={handleSubmit}>
            <InputFile
              name="proof"
              onChange={e => {
                setProof(e.target.files[0]);
                setProofPreview(URL.createObjectURL(e.target.files[0]));
              }}
            >
              <div style={style.proof}>
                {proofPreview !== null ? (
                  <img src={proofPreview} height="300px" alt="" />
                ) : (
                  <>
                    <img
                      style={style.proof__icon}
                      src="../assets/Upload.svg"
                      alt="upload transfer icon mejik academy"
                    />
                    <div style={style.proof__button}>Upload Photo</div>
                    <p style={style.proof__text}>or a drop file here</p>
                  </>
                )}
              </div>
            </InputFile>
            <button style={style.submit} type="submit">
              CONFIRMATION
            </button>
          </form>
        </div>
      </div>
      <Footer donate />
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    beneficiaries: state.beneficiaries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBeneficiaryById: id => dispatch(getBeneficiaryById(id)),
    doTransaction: values => dispatch(doTransaction(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transfer);
