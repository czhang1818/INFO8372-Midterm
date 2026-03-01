import axios from "axios";

// Replace with your actual API Gateway URL
// Format: https://{api-id}.execute-api.{region}.amazonaws.com/{stage}
const API_BASE_URL =
  "https://a6tx28o4m8.execute-api.ca-central-1.amazonaws.com/midterm";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
  },
  withCredentials: false,
});

// Add response interceptor to handle CORS preflight requests
api.interceptors.request.use(
  (config) => {
    // Add CORS headers to all requests
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS";
    config.headers["Access-Control-Allow-Headers"] =
      "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const healthService = {
  getHealth: () => api.get("/health"),
};

export const eventService = {
  sendEvent: (eventData) => api.post("/event", eventData),
};

export default api;
