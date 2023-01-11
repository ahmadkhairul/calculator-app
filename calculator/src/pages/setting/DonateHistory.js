import React, { useEffect, useRef, useCallback } from "react";
import Avatar from "react-avatar";
import { connect } from "react-redux";
import { getTransactions } from "../../_actions/transaction";

import NoAuth from "../../templates/NoAuth";
import Splash from "../../templates/Splash";
import Header from "../../templates/Header";
import Footer from "../../templates/Footer";

const style = {
  root__container: {
    display: "flex",
    justifyContent: "center"
  },
  container: {
    width: "400px",
    display: "flex",
    flexDirection: "column"
  },
  beneficiary: {
    marginBottom: "100px",
    width: "100%"
  },
  beneficiary__avatar: {
    width: "70px"
  },
  beneficiary__name: {
    width: "45%",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#2C3A47"
  },
  beneficiary__amount: {
    width: "40%",
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
  }
};

const History = ({ user, transactions, getTransactions }) => {
  const { data, pages, loading, error, last } = transactions;
  const { isLogin } = user;

  const observer = useRef();
  const lastElementNewsRef = useCallback(
    node => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          getTransactions(pages);
        }
      });
      if (node) observer.current.observe(node);
    },
    [pages]
  );

  useEffect(() => {
    if (data.length < 1) {
      getTransactions(pages);
    }
  }, []);

  return (
    <>
      <NoAuth open={isLogin ? false : true}>
        Login or Register to see history, <br />
        setting your account and many more
      </NoAuth>
      <Header headerOf="History" />
      <div style={style.root__container}>
        <div style={style.container}>
          <table style={style.beneficiary}>
            {data.map((item, index) => {
              if (data.length === index + 1) {
                if (!last)
                  return (
                    <tbody key={index} ref={lastElementNewsRef}>
                      <tr>
                        <td rowSpan="2" style={style.beneficiary__avatar}>
                          <Avatar
                            name={`${item.beneficiary.firstName} ${item.beneficiary.lastName}`}
                            size="50px"
                            round="50%"
                          />
                        </td>
                        <td style={style.beneficiary__name}>
                          {`${item.beneficiary.firstName} ${item.beneficiary.lastName}`}
                        </td>
                        <td style={style.beneficiary__amount}>
                          Rp. {item.total}
                        </td>
                      </tr>
                      <tr>
                        <td style={style.beneficiary__category}>
                          {item.beneficiary.category.name}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3}>
                          <hr />
                        </td>
                      </tr>
                    </tbody>
                  );
              } else {
                return (
                  <tbody key={index}>
                    <tr>
                      <td rowSpan="2" style={style.beneficiary__avatar}>
                        <Avatar
                          name={`${item.beneficiary.firstName} ${item.beneficiary.lastName}`}
                          size="50px"
                          round="50%"
                        />
                      </td>
                      <td style={style.beneficiary__name}>
                        {`${item.beneficiary.firstName} ${item.beneficiary.lastName}`}
                      </td>
                      <td style={style.beneficiary__amount}>
                        Rp. {item.total}
                      </td>
                    </tr>
                    <tr>
                      <td style={style.beneficiary__category}>
                        {item.beneficiary.category.name}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3}>
                        <hr />
                      </td>
                    </tr>
                  </tbody>
                );
              }
            })}
            <tbody>
              <tr>
                <td>
                  {loading && "Loading..."}
                  {error && "Error..."}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer setting />
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    transactions: state.transactions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTransactions: pages => dispatch(getTransactions(pages))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
