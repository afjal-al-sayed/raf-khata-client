import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Here we can add token adder

// also we can add error response interceptors

export default axiosInstance;
