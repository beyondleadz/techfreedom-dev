let baseUrl;
export const DEVMODE=false;
export const getBaseUrl=()=>{
    if(DEVMODE){
        baseUrl="http://besthosting4u.co.in/beyondapi/";
    }else{
        baseUrl="http://besthosting4u.co.in/beyondapi/";
    }
    return baseUrl;
}