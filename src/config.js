let baseUrl;
export const DEVMODE=false;
export const getBaseUrl=()=>{
    if(DEVMODE){
        baseUrl="http://3.215.187.36:9002/";//"http://besthosting4u.co.in/beyondapi/";
    }else{
        baseUrl="http://3.215.187.36:9002/";//"http://besthosting4u.co.in/beyondapi/";
    }
    return baseUrl;
}

export const LEFT_FILETERS_SIZE=[0,1,2,3,4,5,6,7];
