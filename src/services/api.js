import axios from "axios";

// API Gateway URL
const API_BASE_URL =
  "https://a6tx28o4m8.execute-api.ca-central-1.amazonaws.com/midterm";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

export const healthService = {
  getHealth: () => api.get("/health"),
};

export const eventService = {
  sendEvent: (eventData) => api.post("/event", eventData),
};

export default api;
