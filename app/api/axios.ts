import { API_KEY, API_URL } from "@env";
import axios from "axios";

export const api = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
  },
});
