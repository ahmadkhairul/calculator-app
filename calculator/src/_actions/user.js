import {
  AUTH_USER,
  LOGOUT_USER,
  LOGIN_USER,
  REGISTER_USER
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

export const registerUser = value => {
  return {
    type: REGISTER_USER,
    payload: async () => {
      const res = await API.post("/register", value);
      const { data } = res.data;
      if (data.token !== null) setToken(data.token);
      return data;
    }
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
    payload: async () => {
      deleteToken();
      const data = [];
      return data;
    }
  };
};
