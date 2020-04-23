import { defer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import initializeAxios from './axios.setup';
import { axiosRequestConfiguration } from './axios.config';

const axiosInstance = initializeAxios(axiosRequestConfiguration);

//get
const get = <T>(url: string, queryParams?: object)=> {
    return axiosInstance.get<T>(url, {params: queryParams});
};

//post / add
const post = <T>(url: string, body: object, queryParams?: object) => {
    return axiosInstance.post<T>(url, body, {params: queryParams});
};

//put/update
const put = <T>(url: string, body: object, queryParams?: object) => {
    axiosInstance.put<T>(url, body, {params: queryParams})
};

//patch
const patch = <T>(url: string, body: object, queryParams?: object) => {
    axiosInstance.patch<T>(url, body, {params: queryParams})
};

//Delete
const deleteR = <T>(url: string, id: number) => {
    return axiosInstance.delete(`${url}/${id}`);
};


//export all the cruds Operations
export default {get, post, put, patch, delete: deleteR};
