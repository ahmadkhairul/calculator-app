import {
  GET_BENEFICIARY_BY_CATEGORY,
  GET_BENEFICIARY_BY_ID
} from "../config/constants";
import { API } from "../config/api";

export const getBeneficiaryByCategory = catId => {
  return {
    type: GET_BENEFICIARY_BY_CATEGORY,
    payload: async () => {
      let res = "";
      if (catId === "all") {
        res = await API.get(`/beneficiary`);
      } else {
        res = await API.post(`/beneficiaryByCategory`, {
          category: catId
        });
      }
      const { data } = res.data;
      return data;
    }
  };
};

export const getBeneficiaryById = beneficiaryId => {
  return {
    type: GET_BENEFICIARY_BY_ID,
    payload: async () => {
      const res = await API.get(`/beneficiary/${beneficiaryId}`);
      const { data } = res.data;
      return data;
    }
  };
};
