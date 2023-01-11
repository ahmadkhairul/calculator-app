import { GET_ARTICLE, GET_ARTICLE_DETAIL } from "../config/constants";

const initialState = {
  data: [],
  detail: [],
  lastArticle: false,
  pages: 1,
  loading: true,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ARTICLE}_PENDING`:
    case `${GET_ARTICLE_DETAIL}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_ARTICLE}_FULFILLED`:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        lastArticle: action.payload.length < 1 ? true : false,
        pages: state.pages + 1,
        loading: false
      };
    case `${GET_ARTICLE_DETAIL}_FULFILLED`:
      return {
        ...state,
        detail: action.payload,
        loading: false
      };
    case `${GET_ARTICLE}_REJECTED`:
    case `${GET_ARTICLE_DETAIL}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
