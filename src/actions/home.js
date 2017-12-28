import * as actionTypes from '../constants'
import {post} from '../fetch/post'
import {GET_USER_LIST,POST_UPDATE_USER,POST_DELETE_USER} from '../fetch/config'

export function getUserListStart(data) {
    return {
        type: actionTypes.GET_USER_LIST_START,
        data
    }
}

export function getUserListSuccess(data) {
    return {
        type: actionTypes.GET_USER_LIST_SUCCESS,
        data
    }
}

export function getUserListError(data) {
    return {
        type: actionTypes.GET_USER_LIST_ERROR,
        data
    }
}

export function updateUserStart(data) {
    return {
        type: actionTypes.UPDATE_USER_START,
        data
    }
}

export function updateUserSuccess(data) {
    return {
        type: actionTypes.UPDATE_USER_SUCCESS,
        data
    }
}

export function updateUserError(data) {
    return {
        type: actionTypes.UPDATE_USER_ERROR,
        data
    }
}

export function deleteStart(data) {
    return {
        type: actionTypes.DELETE_USER_START,
        data
    }
}

export function deleteSuccess(data) {
    return {
        type: actionTypes.DELETE_USER_SUCCESS,
        data
    }
}

export function deleteError(data) {
    return {
        type: actionTypes.DELETE_USER_ERROR,
        data
    }
}

export function getUserListAction(data) {
    return dispatch => {
    	dispatch(getUserListStart())
    	post(GET_USER_LIST,data).then(res=>{
    		return res.json()
    	}).then(res => {
    		if(res.status === 1){
                dispatch(getUserListSuccess(res.result))
    		}else{
    			dispatch(getUserListError(res.msg))
    		}
    	})
    }
}

export function updateUserAction(data,successCall) {
    return dispatch => {
        dispatch(updateUserStart())
        post(POST_UPDATE_USER,data).then(res=>{
            return res.json()
        }).then(res => {
            if(res.status === 1){
                dispatch(updateUserSuccess(res.result));
                successCall()
            }else{
                dispatch(updateUserError(res.msg))
            }
        })
    }
}

export function deleteAction(data,successCall) {
    return dispatch => {
        dispatch(deleteStart())
        post(POST_DELETE_USER,data).then(res=>{
            return res.json()
        }).then(res => {
            if(res.status === 1){
                dispatch(deleteSuccess(res.result));
                successCall()
            }else{
                dispatch(deleteError(res.msg))
            }
        })
    }
}




