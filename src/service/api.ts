import axios, { AxiosRequestConfig } from 'axios';
import { getToken } from '../helpers/auth';

const api = axios.create({
    baseURL: 'https://studytcc.herokuapp.com',
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();
    if (token && config.url && !config.url.includes('/recovery')) {
        config.headers.authorization = token;
    }

    return config;
});

export default api;
