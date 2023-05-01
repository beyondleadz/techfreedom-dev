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
export const MORE_FILETERS_SIZE=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
export const PAGE_LENGTH = 10
