import axios from "axios";

const baseURL = "https://localhost:8080";
export const getAPI = async() => {
  const res = await axios.get(baseURL);
  return res.data
}