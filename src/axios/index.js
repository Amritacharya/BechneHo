import axios from "axios";

import config from "../config";
import { authHeader } from "../helpers";

const axiosInstance = axios.create({
  baseURL: config.apiEndpoint,
});

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
export default axiosInstance;
