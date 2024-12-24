import axios from "axios";

export const axiosWithConfig = axios.create({
  baseURL: "/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosWithConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Tangani kesalahan global di sini
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized, redirecting to login...");
      // Logika pengalihan ke halaman login
    }
    return Promise.reject(error);
  }
);
