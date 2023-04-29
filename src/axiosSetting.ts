import axios, { AxiosInstance } from "axios";
import {getCookie} from "./cookie";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://gdsc-hackathon.p-e.kr:8080",
});

axiosInstance.interceptors.request.use(config => {
  if (!config.headers) return config;

  if (getCookie("accessToken") !== undefined) {
    config.headers.Authorization = `Bearer ${getCookie("accessToken")}`;
  }

  return config;
})

export default axiosInstance;
