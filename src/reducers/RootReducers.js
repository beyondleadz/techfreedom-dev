import SignUpReducer from './signUpReducer'
import companyListingReducer from './companyListingReducer'
import companyDetailsReducer from './companyDetailsReducer'
import executiveListingReducer from './executiveListingReducer'
import executiveDetailsReducer from './executiveDetailsReducer'
import HeaderReducer from './headerReducer'
import leadListingReducer from './leadListingReducer'
import LeadDetailsReducer from './leadDetailsReducer'
import CommonReducer from './commonReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    CommonReducer,
    HeaderReducer,
    SignUpReducer,
    companyListingReducer,
    companyDetailsReducer,
    executiveListingReducer,
    executiveDetailsReducer,
    leadListingReducer,
    LeadDetailsReducer


})

export default rootReducer;


