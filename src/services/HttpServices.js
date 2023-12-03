import axios from "axios";
import { getBaseUrl } from "../config";

const restService = axios.create({
    baseURL: getBaseUrl(),
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});

const restAuthService = (token = sessionStorage.getItem('token')) => {
   const instance= axios.create({
      baseURL: getBaseUrl(),
      headers: {
          'Authorization':`Bearer ${token}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
      }
   });
   instance.interceptors.response.use(response => {
      //console.log('valid login case', response);      
      return response;
    }, error => {
      if(error?.response?.data==="User login not found" && error?.response?.status===403){
      console.log('invalid login case', error,error.response.data);
      //window.location.href="http://localhost:3000/beyondleads/signin";
    window.location.href="http://besthosting4u.co.in/beyondleads/signin";
      }else{
         if (error.response && error.response.status >= 400 && error.response.status <= 500) {
            // this will trigger the `handleError` function in the promise chain
            return Promise.reject(new Error("error"));
         }
      }
    });
    return instance;
} 

export const getAuthMethod=(apiUrl,token) =>{
   return restAuthService(token).get(apiUrl);
}

 export const postAuthMethod=(apiUrl, data)=> {
   return restAuthService().post(apiUrl, data);
 }

 export const  putAuthMethod=(apiUrl, id, data,params)=> {
   return restAuthService().put(`${apiUrl}/${id}`, data,params);
 }

 export const  deleteAuthMethod=(apiUrl)=> {
   return restAuthService().delete(`${apiUrl}`);
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