import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Attach the Clerk session token to every request so the backend can
// authenticate across domains (frontend on Vercel, backend on Render).
axiosInstance.interceptors.request.use(async (config) => {
  try {
    const token = await window.Clerk?.session?.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.error("Failed to attach Clerk token:", error);
  }
  return config;
});

export default axiosInstance;