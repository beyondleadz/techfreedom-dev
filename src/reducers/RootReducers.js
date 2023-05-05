import SignUpReducer from './signUpReducer'
import companyListingReducer from './companyListingReducer'
import companyDetailsReducer from './companyDetailsReducer'
import CommonReducer from './commonReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    CommonReducer,
    SignUpReducer,
    companyListingReducer,
    companyDetailsReducer

})

export default rootReducer;


