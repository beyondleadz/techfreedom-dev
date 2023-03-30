import axios from "axios";
import { getBaseUrl } from "../config";

const restService = axios.create({
    baseURL: getBaseUrl(),
    // timeout: 1000,
     headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});

 export const getMethod=(apiUrl) =>{
    return restService.get(apiUrl);
 }

 export const postMethod=(apiUrl, data)=> {
    return restService.post(apiUrl, data);
 }

 export const  putMethod=(apiUrl, id, data)=> {
    return restService.put(`${apiUrl}/${id}`, data);
 }

 export const  deleteMethod=(apiUrl)=> {
    return restService.delete(`${apiUrl}`);
 }