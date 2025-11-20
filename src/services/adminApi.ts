import axios from 'axios';

// Normalize base URL: use relative path in dev (for Vite proxy), full URL in prod
function getApiBase(): string {
  const envBase = import.meta.env.VITE_API_BASE;
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

const adminApi = axios.create({
  baseURL: getApiBase(),
});

adminApi.interceptors.request.use((config) => {
  const access = localStorage.getItem('api_access_token');
  if (access) {
    config.headers = config.headers || {};
    (config.headers as any).Authorization = `Bearer ${access}`;
  }
  return config;
});

// Attempt refresh on 401 once
let refreshing: Promise<boolean> | null = null;
async function tryRefresh(): Promise<boolean> {
  const refreshToken = localStorage.getItem('api_refresh_token');
  if (!refreshToken) return false;
  if (!refreshing) {
    refreshing = (async ()=>{
      try{
        const base = getApiBase();
        const res = await axios.post(base + '/auth/refresh', { refreshToken });
        const access = (res as any)?.data?.accessToken;
        const nextRefresh = (res as any)?.data?.refreshToken;
        if (access) localStorage.setItem('api_access_token', access);
        if (nextRefresh) localStorage.setItem('api_refresh_token', nextRefresh);
        refreshing = null; return Boolean(access);
      }catch{ refreshing = null; return false; }
    })();
  }
  return refreshing;
}

adminApi.interceptors.response.use(
  (res)=> res,
  async (err)=>{
    const status = err?.response?.status;
    const original = err?.config;
    if (status === 401 && !original?._retried) {
      const ok = await tryRefresh();
      if (ok) {
        original._retried = true;
        const access = localStorage.getItem('api_access_token');
        original.headers = original.headers || {};
        if (access) original.headers.Authorization = `Bearer ${access}`;
        return adminApi.request(original);
      }
    }
    return Promise.reject(err);
  }
);

export async function adminLogin(email: string, password: string){
  const res = await adminApi.post('/auth/login', { email, password });
  const accessToken = (res as any)?.data?.accessToken;
  const refreshToken = (res as any)?.data?.refreshToken;
  if (accessToken) localStorage.setItem('api_access_token', accessToken);
  if (refreshToken) localStorage.setItem('api_refresh_token', refreshToken);
  return true;
}

export async function adminRegister(name: string, email: string, password: string){
  await adminApi.post('/auth/register', { displayName: name, email, password });
  return true;
}

export async function createAdminUser(name: string, email: string, password: string){
  await adminApi.post('/users', { displayName: name, email, roles: ['admin'], password });
  return true;
}

export function adminLogout(){
  (async ()=>{
    try {
      const refreshToken = localStorage.getItem('api_refresh_token');
      if (refreshToken) { await adminApi.post('/auth/logout', { refreshToken }); }
    } catch {}
    try { localStorage.removeItem('api_access_token'); localStorage.removeItem('api_refresh_token'); } catch {}
  })();
}

export async function adminMe(){
  try { const res = await adminApi.get('/auth/me'); return (res as any)?.data || null; } catch { return null; }
}

export default adminApi;
