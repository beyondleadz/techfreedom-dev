import SignUpReducer from './signUpReducer'
import companyListingReducer from './companyListingReducer'
import companyDetailsReducer from './companyDetailsReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    SignUpReducer,
    companyListingReducer,
    companyDetailsReducer

})

export default rootReducer;


