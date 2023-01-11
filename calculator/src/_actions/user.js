import {
  AUTH_USER,
  LOGOUT_USER,
  LOGIN_USER
} from "../config/constants";
import { API, sendToken, setToken, deleteToken } from "../config/api";

export const authUser = () => {
  return {
    type: AUTH_USER,
    payload: async () => {
      sendToken();
      const res = await API.get("/auth");
      const { data } = res.data;
      return data;
    }
  };
};

export const loginUser = value => {
  return {
    type: LOGIN_USER,
    payload: async () => {
      const res = await API.post("/login", value);
      const { data } = res.data;
      if (data.token !== null) setToken(data.token);
      return data;
    }
  };
};

export const logoutUser = (value) => {
  return {
    type: LOGOUT_USER,
    payload: async () => {
      console.log(value)
      const res = await API.post("/logout", value);
      const { data } = res.data;
      deleteToken();
      return data;
    }
  };
};
