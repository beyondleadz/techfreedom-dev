import {
  INDUSTRY_LIST,
} from "../actionType/companyListingType";
import {getAuthMethod} from '../services/HttpServices';
import { industryApiUrl } from "../constant/Constant";

export const getIndustryList = (payload) =>(dispatch)=> {
  return getAuthMethod(industryApiUrl).then(res=>{
    console.log(res.data)
    dispatch(
      {
        type: INDUSTRY_LIST,
        payload: res.data,
      }
    )
    
  })
  
};