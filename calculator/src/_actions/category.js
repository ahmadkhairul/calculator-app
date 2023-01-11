import { GET_CATEGORY } from "../config/constants";
import { API } from "../config/api";

export const getCategory = () => {
  return {
    type: GET_CATEGORY,
    payload: async () => {
      const res = await API.get("/categories");
      const { data } = res.data;
      return data;
    }
  };
};
