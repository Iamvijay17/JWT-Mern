import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = await cookieStore.get("token");
  console.log("token", token);
  if (token) {
    config.headers.Authorization = `Bearer ${token.value}`;
  }

  return config;
});

export default api;
