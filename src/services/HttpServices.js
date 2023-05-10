import axios from "axios";
import { getBaseUrl } from "../config";


const restService = axios.create({
    baseURL: getBaseUrl(),
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});

const restAuthService = axios.create({
   baseURL: getBaseUrl(),
   headers: {
       'Authorization':`Bearer ${window.sessionStorage.getItem('token')}`,
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': '*'
   }
});

export const getAuthMethod=(apiUrl) =>{
   return restAuthService.get(apiUrl);
}

 export const postAuthMethod=(apiUrl, data)=> {
    return restAuthService.post(apiUrl, data);
 }

 export const  putAuthMethod=(apiUrl, id, data,params)=> {
    return restAuthService.put(`${apiUrl}/${id}`, data,params);
 }

 export const  deleteAuthMethod=(apiUrl)=> {
    return restAuthService.delete(`${apiUrl}`);
 }

 export const getMethod=(apiUrl) =>{
   return restService.get(apiUrl);
}

 export const postMethod=(apiUrl, data)=> {
    return restService.post(apiUrl, data);
 }

 export const  putMethod=(apiUrl, id, data,params)=> {
    return restService.put(`${apiUrl}/${id}`, data,params);
 }

 export const  deleteMethod=(apiUrl)=> {
    return restService.delete(`${apiUrl}`);
 }