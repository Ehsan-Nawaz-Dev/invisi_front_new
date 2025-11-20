import axios from 'axios';

// Normalize base URL: use relative path in dev (for Vite proxy), full URL in prod
function getApiBase(): string {
  const envBase = import.meta.env.VITE_API_BASE_URL;
  if (!envBase) return '/api/v1';
  
  // If it's already a relative path, use it
  if (envBase.startsWith('/')) return envBase;
  
  // In development, convert full URLs to relative paths to use Vite proxy (avoids CORS)
  const isDev = import.meta.env.DEV || (typeof window !== 'undefined' && window.location.hostname === 'localhost');
  if (isDev) {
    // Extract the path from full URL (e.g., "http://192.168.18.37:8080/api/v1" -> "/api/v1")
    try {
      const url = new URL(envBase);
      return url.pathname || '/api/v1';
    } catch {
      return '/api/v1';
    }
  }
  
  // In production, use the full URL as provided
  return envBase;
}

export const api = axios.create({ baseURL: getApiBase() });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export default api;
