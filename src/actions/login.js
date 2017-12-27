import * as actionTypes from '../constants'
import {post} from '../fetch/post'
import {POST_LOGIN} from '../fetch/config'

export function loginSuccess(data) {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        data
    }
}

export function loginError(data) {
    return {
        type: actionTypes.LOGIN_ERROR,
        data
    }
}

export function loginAction(data) {
    return dispatch => {
    	// dispatch(fetchLoginStart())
    	post(POST_LOGIN,data).then(res=>{
    		return res.json()
    	}).then(res => {
    		if(res.status === 1){
    			window.location = "/"
    		}else{
    			console.log('------',res)
    			dispatch(loginError(res.msg))
    		}
    	})
    }
}