import { combineReducers } from 'redux'
import userinfo from './userinfo'
import loginInfo from './login'
import {userlist,updateuserlist} from './home'
import {adduserInfo} from './adduser'

let rootReducer = combineReducers({
    userinfo,
    loginInfo,
    userlist,
    adduserInfo,
    updateuserlist
})

export default rootReducer