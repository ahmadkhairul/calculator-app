import { GET_TRANSFER_BY_ID, SAVE_TRANSFER } from "../config/constants";
import { API, sendToken } from "../config/api";

export const doTransaction = values => {
  const { proof, beneficiary, amount, timeline } = values;
  let formData = new FormData();
  formData.append("createdFor", beneficiary);
  formData.append("amount", amount);
  formData.append("timeline", timeline);
  formData.append("paymentProof", proof);
  return {
    type: SAVE_TRANSFER,
    payload: async () => {
      sendToken();
      console.log(formData);
      const res = await API.post("/transaction", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      const data = res.data.message;
      return data;
    }
  };
};

export const getTransactions = pages => {
  return {
    type: GET_TRANSFER_BY_ID,
    payload: async () => {
      sendToken();
      const res = await API.get(`/transactions/${pages}`);
      const { data } = res.data;
      return data;
    }
  };
};
