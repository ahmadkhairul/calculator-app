import { GET_CATEGORY } from "../config/constants";

const initialState = {
  data: [],
  loading: true,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CATEGORY}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_CATEGORY}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_CATEGORY}_REJECTED`:
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
