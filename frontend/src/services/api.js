import axios from "axios";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = getCookie("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Browser automatically sends refresh token cookie
        const response = await api.post("/auth/refresh-token");

        const newAccessToken = response.data.accessToken;

        // Save new access token
        setCookie("accessToken", newAccessToken);

        // Update failed request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // Retry original request
        return api(originalRequest);
      } catch (err) {
        deleteCookie("accessToken");

        window.location.href = "/";

        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
