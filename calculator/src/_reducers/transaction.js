import { GET_TRANSFER_BY_ID, SAVE_TRANSFER } from "../config/constants";

const initialState = {
  data: [],
  message: [],
  last: false,
  pages: 1,
  loading: true,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_TRANSFER_BY_ID}_PENDING`:
    case `${SAVE_TRANSFER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_TRANSFER_BY_ID}_FULFILLED`:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        last: action.payload.length < 1 ? true : false,
        pages: state.pages + 1,
        loading: false
      };
    case `${SAVE_TRANSFER}_FULFILLED`:
      return {
        ...state,
        message: action.payload,
        loading: false
      };
    case `${GET_TRANSFER_BY_ID}_REJECTED`:
    case `${SAVE_TRANSFER}_REJECTED`:
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
