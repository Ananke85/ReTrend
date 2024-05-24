import axios from "axios";

const URL_API =
  window.location.hostname === "retrend-lcs.netlify.app"
    ? "https://retrend-lcs.up.railway.app/"
    : "http://localhost:3001";

export const api = axios.create({
  baseURL: URL_API,
  headers: { "Content-Type": "application/json" },
});
