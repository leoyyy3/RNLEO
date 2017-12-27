import { combineReducers } from 'redux'
import userinfo from './userinfo'
import loginInfo from './login'


let rootReducer = combineReducers({
    userinfo,
    loginInfo
})

export default rootReducer