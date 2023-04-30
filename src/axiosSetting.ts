import axios, { AxiosInstance } from "axios";
import {getCookie} from "./cookie";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://gdsc-hackathon.p-e.kr",
});

// async function fetchTimes(type: string) {
//   try {
//     const { data, status } = await axiosInstance.get(`/${type}`);
//     setData(data);
//   } catch (e) {
//     if (axios.isAxiosError(e)) {
//       console.log("error message: ", e.message);
//       return e.message;
//     } else {
//       console.log("unexpected error: ", e);
//       return "An unexpected error occurred.";
//     }
//   }
// }
axiosInstance.interceptors.request.use(config => {
  if (!config.headers) return config;

  if (getCookie("accessToken") !== undefined) {
    config.headers.Authorization = `Bearer ${getCookie("accessToken")}`;
  }

  return config;
})

export default axiosInstance;
