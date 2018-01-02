import * as actionTypes from '../constants'
import {post} from '../fetch/post'
import {POST_ADD_USER} from '../fetch/config'

export function addUserStart(data) {
    return {
        type: actionTypes.ADD_USER_START,
        data
    }
}

export function addUserSuccess(data) {
    return {
        type: actionTypes.ADD_USER_SUCCESS,
        data
    }
}

export function addUserError(data) {
    return {
        type: actionTypes.ADD_USER_ERROR,
        data
    }
}

export function addUserAction(data,successCal) {
    return dispatch => {
    	dispatch(addUserStart())
    	post(POST_ADD_USER,data).then(res=>{
    		return res.json()
    	}).then(res => {
    		if(res.status === 1){
                dispatch(addUserSuccess(res.result))
                successCal()
    		}else{
    			dispatch(addUserError(res.msg))
    		}
    	})
    }
}