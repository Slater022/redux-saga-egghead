import { defer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import initializeAxios from './axios.setup';
import { axiosRequestConfiguration } from './axios.config';

const axiosInstance = initializeAxios(axiosRequestConfiguration);

//get
const get = <T>(url: string, queryParams?: object): Observable<T> => {
    return defer(() => axiosInstance.get<T>(url, {params: queryParams}))
        .pipe(map((result: any) => result.data));
};

//post / add
const post = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
    return defer(() => axiosInstance.post<T>(url, body, {params: queryParams}))
        .pipe(map((result: any) => result.data));
};

//put/update
const put = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
    return defer(() => axiosInstance.put<T>(url, body, {params: queryParams}))
        .pipe(map((result: any) => result.data));
};

//patch
const patch = <T>(url: string, body: object, queryParams?: object): Observable<T | void> => {
    return defer(() => axiosInstance.patch<T>(url, body, {params: queryParams}))
        .pipe(map((result: any) => result.data));
};

//Delete
const deleteR = <T>(url: string, id: number): Observable<T | void> => {
    return defer(() => (axiosInstance.delete(`${url}/${id}`)))
        .pipe(map((result: any) => result.data)
        );
};


//export all the cruds Operations
export default {get, post, put, patch, delete: deleteR};
