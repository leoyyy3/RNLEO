import * as actionTypes from '../constants'

const initialState = {
	isFetching:false,
	data:[]
}

export function userlist(state = initialState, action) {
    switch (action.type) {
    	case actionTypes.GET_USER_LIST_START:
            return Object.assign({}, state, {
                isFetching: true
            });
        case actionTypes.GET_USER_LIST_SUCCESS:
            return Object.assign({}, state, {
            	data:action.data,
                isFetching: false
            });
        case actionTypes.GET_USER_LIST_ERROR:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state
    }
}

export function updateuserlist(state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_USER_START:
            return Object.assign({}, state, {
                isFetching: true
            });
        case actionTypes.UPDATE_USER_SUCCESS:
            return Object.assign({}, state, {
                data:action.data,
                isFetching: false
            });
        case actionTypes.UPDATE_USER_ERROR:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state
    }
}