import axios, { AxiosRequestConfig } from 'axios';

const apiContent = axios.create({
    baseURL: 'https://ccontentapi.herokuapp.com',
});

apiContent.interceptors.request.use((config: AxiosRequestConfig) => {

    config.headers.keyproject = '5d6bbcbde34d8a44add1d278';
    return config;
});
export default apiContent;
