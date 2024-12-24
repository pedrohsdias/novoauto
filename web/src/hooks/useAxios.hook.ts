// api/axiosInstance.ts
import { AxiosInstance } from 'axios';
import api from "@/services/api";


export const useAxios = (): AxiosInstance => {
   return api;
};
