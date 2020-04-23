import { AxiosRequestConfig } from 'axios';

export const axiosRequestConfiguration: AxiosRequestConfig = {
    baseURL: 'http://www.mocky.io/v2/',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
};
