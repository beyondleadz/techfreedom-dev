import SignUpReducer from './signUpReducer'
import companyListingReducer from './companyListingReducer'
import companyDetailsReducer from './companyDetailsReducer'
import executiveListingReducer from './executiveListingReducer'
import CommonReducer from './commonReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    CommonReducer,
    SignUpReducer,
    companyListingReducer,
    companyDetailsReducer,
    executiveListingReducer

})

export default rootReducer;


