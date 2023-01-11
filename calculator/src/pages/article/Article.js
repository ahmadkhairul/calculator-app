import React, { useEffect, useRef, useCallback } from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getArticle } from "../../_actions/article";

import Skeleton from "../article/Skeleton";
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
    flexDirection: "column",
    margin: "0px 0px 100px 0px"
  },
  article: {
    display: "flex",
    alignItems: "center",
    margin: "20px 0px",
    width: "100%"
  },
  article__title: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#2C3A47"
  },
  article__description: {
    fontSize: "12px",
    lineHeight: "16px",
    color: "#8593A3"
  },
  article__readmore: {
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#CD4559"
  },
  article__detail: {
    margin: "10px"
  }
};

const Article = ({ articles, getArticle }) => {
  const { data, pages, loading, error, lastArticle } = articles;

  const observer = useRef();
  const lastElementNewsRef = useCallback(
    node => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          getArticle(pages);
        }
      });
      if (node) observer.current.observe(node);
    },
    [pages]
  );

  useEffect(() => {
    if (data.length < 1) {
      getArticle(pages);
    }
  }, []);

  const AvaName = title => {
    const arr = title.split(" ");
    return `${arr[0].charAt(0)} ${arr[1].charAt(0)}`;
  };

  return (
    <>
      <Header headerOf="Article" />
      <div style={style.root_container}>
        <div style={style.container}>
          {data.map((item, index) => {
            if (data.length === index + 1) {
              if (!lastArticle)
                return (
                  <section
                    ref={lastElementNewsRef}
                    key={item.id}
                    style={style.article}
                  >
                    <Link to={`article/${item.id}`}>
                      <div>
                        {item.imageUrl === null ? (
                          <Avatar size="70px" name={AvaName(item.title)} />
                        ) : (
                          <img
                            width="70px"
                            src={`http://localhost:6969/${item.imageUrl}`}
                            alt={`${item.title}`}
                          />
                        )}
                      </div>
                    </Link>
                    <Link to={`article/${item.id}`}>
                      <div style={style.article__detail}>
                        <div style={style.article__title}>{item.title}</div>
                        <div style={style.article__description}>
                          {item.description.substring(0, 40)}...
                        </div>
                        <div style={style.article__readmore}>Read More ...</div>
                      </div>
                    </Link>
                  </section>
                );
            } else {
              return (
                <section key={item.id} style={style.article}>
                  <Link to={`article/${item.id}`}>
                    <div>
                      {item.imageUrl === null ? (
                        <Avatar size="70px" name={AvaName(item.title)} />
                      ) : (
                        <img
                          width="70px"
                          src={`http://localhost:6969/${item.imageUrl}`}
                          alt={`${item.title}`}
                        />
                      )}
                    </div>
                  </Link>
                  <Link to={`article/${item.id}`}>
                    <div style={style.article__detail}>
                      <div style={style.article__title}>{item.title}</div>
                      <div style={style.article__description}>
                        {item.description.substring(0, 40)}...
                      </div>
                      <div style={style.article__readmore}>Read More ...</div>
                    </div>
                  </Link>
                </section>
              );
            }
          })}
          {loading && <Skeleton />}
          {error && "Error..."}
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
    getArticle: pages => dispatch(getArticle(pages))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
