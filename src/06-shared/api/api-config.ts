import axios from "axios";

export const AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: "/api/v1/",
});
