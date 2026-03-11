import axios from "axios";
import "./interceptors";
import { responseErrorHandler } from "./interceptors";

const axiosInstance = axios.create({
  baseURL: "http://192.168.0.109:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Here we can add token adder

// also we can add error response interceptors
axiosInstance.interceptors.response.use(
  (response) => response, // on response code between 200 - 299 (Fullfilled response)
  responseErrorHandler // when any error
);

export default axiosInstance;
