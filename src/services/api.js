// src/services/api.js
import axios from "axios";

const api = axios.create({
  // baseURL: "https://quickcv-backend-with-node-js-express-js.onrender.com",
  baseURL: "http://192.168.8.167:5000",
  headers: { "Content-Type": "application/json" },
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export default api;
