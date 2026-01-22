import axios from "axios";
import API_BASE_URL from "./api";

const API = axios.create({
  baseURL: `${API_BASE_URL}/api/v1/`,
});

// API.interceptors.request.use(
//   (config) => {
//     try {
//       let token = localStorage.getItem("token");
//       if (token) {
//         token = token.slice(0, -1);
//         token = token.slice(1);
//         if (token) {
//           config.headers = config.headers ?? {};
//           config.headers.Authorization = `Bearer ${token}`;
//         }
//       }
//     } catch (err) {
//       console.log("Token parse error:", err);
//     }

//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   },
// );

// API.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const message =
//       error?.response?.data?.m || error?.message || "Something went wrong";

//     return Promise.reject(message);
//   },
// );
