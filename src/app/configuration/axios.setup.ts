import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const initializeAxios = (config: AxiosRequestConfig): AxiosInstance => {
    const axiosInstance = axios.create(config);

    /*
        Add default headers, interceptors etc..
    */

    return axiosInstance;
};

export default initializeAxios;
