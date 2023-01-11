import {
  AUTH_USER,
  LOGIN_USER,
  LOGOUT_USER
} from "../config/constants";

const initialState = {
  data: [],
  isLogin: false,
  loading: true,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${AUTH_USER}_PENDING`:
    case `${LOGIN_USER}_PENDING`:
    case `${LOGOUT_USER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${AUTH_USER}_FULFILLED`:
    case `${LOGIN_USER}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        isLogin: true,
        loading: false
      };
    case `${LOGOUT_USER}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        isLogin: false,
        loading: false
      };
    case `${LOGIN_USER}_REJECTED`:
    case `${LOGOUT_USER}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    case `${AUTH_USER}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: false
      };

    default:
      return state;
  }
};

export default reducer;
