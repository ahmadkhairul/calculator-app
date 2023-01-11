import axios from "axios";

// Set config defaults when creating the instance
export const API = axios.create({
  baseURL: "http://127.0.0.1:6969/api/v1"
});

export const sendToken = () => {
  const token = localStorage.getItem("token");
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const setToken = token => {
  localStorage.setItem("token", token);
};

export const deleteToken = () => {
  localStorage.setItem("token", "");
};
