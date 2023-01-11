import {
  GET_BENEFICIARY_BY_CATEGORY,
  GET_BENEFICIARY_BY_ID
} from "../config/constants";

const initialState = {
  data: [],
  detail: [],
  loading: true,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_BENEFICIARY_BY_CATEGORY}_PENDING`:
    case `${GET_BENEFICIARY_BY_ID}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_BENEFICIARY_BY_ID}_FULFILLED`:
      return {
        ...state,
        detail: action.payload,
        loading: false
      };
    case `${GET_BENEFICIARY_BY_CATEGORY}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_BENEFICIARY_BY_CATEGORY}_REJECTED`:
    case `${GET_BENEFICIARY_BY_ID}_REJECTED`:
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
