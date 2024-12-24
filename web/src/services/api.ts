import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Adicione interceptors
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // console.log("Interceptor: Requisição configurada", config);
    return config;
  },
  (error) => {
    // console.error("Interceptor: Erro na requisição", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // console.log("Interceptor: Resposta recebida", response);
    return response;
  },
  (error) => {
    // console.error("Interceptor: Erro na resposta", error);
    return Promise.reject(error);
  }
);

export default api;