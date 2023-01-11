import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { getArticleDetail } from "../../_actions/article";
import { FormattedDate } from "../../components/Date";

import Splash from "../../templates/Splash";
import Footer from "../../templates/Footer";

const style = {
  root_container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center"
  },
  container: {
    width: "400px",
    display: "flex",
    flexDirection: "column"
  },
  cover: {
    width: "100%",
    height: "170px",

    backgroundColor: "#CD4559",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "80px",
    color: "white"
  },
  article: {
    padding: "10px",
    display: "flex",

    flexDirection: "column"
  },
  article_author: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#CD4559",
    margin: "5px 0px 0px 0px"
  },
  article_date: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#8593A3",
    margin: "0px 0px 10px 0px"
  },
  article_title: {
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "20px",
    color: "#2C3A47",
    margin: "10px 0px 10px 0px"
  },
  article_description: {
    fontSize: "14px",
    lineHeight: "16px",
    color: "#1E272E",
    margin: "0px 0px 100px 0px"
  }
};

const ArticleDetail = ({ articles, getArticleDetail }) => {
  const { id } = useParams();
  const { detail, loading, error } = articles;

  useEffect(() => {
    getArticleDetail(id);
  }, []);

  if (loading) return <Splash />;
  if (error) return <Splash />;

  const CoverName = title => {
    const uppercaseTitle = title.toUpperCase();
    const arr = uppercaseTitle.split(" ");
    return `${arr[0].charAt(0)} ${arr[1].charAt(0)}`;
  };

  return (
    <>
      <div style={style.root_container}>
        <div style={style.container}>
          {detail.imageUrl === null ? (
            <div style={style.cover}>{CoverName(detail.title)}</div>
          ) : (
            <img
              width="100%"
              height="170px"
              src={detail.imageUrl}
              // src={"../assets/corona.jpg"}
              alt={`mejik foundation ${detail.title}`}
            />
          )}
          <section style={style.article}>
            <div style={style.article_title}>{detail.title}</div>
            <div style={style.article_author}>{detail.author}</div>
            <div style={style.article_date}>
              <FormattedDate date={detail.createdAt} />
            </div>
            <article style={style.article_description}>
              {detail.description}
            </article>
          </section>
        </div>
      </div>
      <Footer article />
    </>
  );
};

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getArticleDetail: id => dispatch(getArticleDetail(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
