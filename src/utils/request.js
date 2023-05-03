import axios from "axios";
import env from "../config/env";
const request = axios.create({
  baseURL: env.apiUrlBase
});

export { request };
