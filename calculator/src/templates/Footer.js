import React from "react";
import ArticleIcons from "../assets/Article";
import DonateIcons from "../assets/Donate";
import SettingIcon from "../assets/Setting";
import { Link } from "react-router-dom";

const style = {
  root: {
    zIndex: 1,
    boxSizing: "border-box",
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    bottom: "0",
    height: "65px",
    padding: "0 57px 40px",
    backgroundColor: "white",
    boxShadow: "0px 0px 4px rgba(5, 5, 5, 0.08)"
  },
  container: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  flexItem: {
    padding: "0 30px",
    display: "flex",
    flexDirection: "column",
    fontWeight: "500",
    fontSize: "10px",
    color: "#8593A3",
    textAlign: "center"
  }
};

const Footer = ({ donate, setting, article }) => {
  return (
    <footer style={style.root}>
      <div style={style.container}>
        <div style={style.flexItem}>
          <Link to="/articles">
            <ArticleIcons color={article ? "#CD4559" : "#8593A3"} />
          </Link>
          article
        </div>
        <div style={style.flexItem}>
          <Link to="/donate">
            <DonateIcons color={donate ? "#CD4559" : "#8593A3"} />
          </Link>
          donate
        </div>
        <div style={style.flexItem}>
          <Link to="/setting">
            <SettingIcon color={setting ? "#CD4559" : "#8593A3"} />
          </Link>
          setting
        </div>
      </div>
    </footer>
  );
};

export default Footer;
