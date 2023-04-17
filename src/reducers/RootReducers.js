import SignUpReducer from './signUpReducer'
import companyListingReducer from './companyListingReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    SignUpReducer,
    companyListingReducer

})

export default rootReducer;


