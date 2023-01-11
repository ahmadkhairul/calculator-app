import { GET_ARTICLE, GET_ARTICLE_DETAIL } from "../config/constants";
import { API } from "../config/api";

export const getArticle = pages => {
  return {
    type: GET_ARTICLE,
    payload: async () => {
      const res = await API.get(`/articles/${pages}`);
      const { data } = res.data;
      return data;
    }
  };
};

export const getArticleDetail = id => {
  return {
    type: GET_ARTICLE_DETAIL,
    payload: async () => {
      const res = await API.get(`/article/${id}`);
      const { data } = res.data;
      return data;
    }
  };
};
