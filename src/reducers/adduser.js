import * as actionTypes from '../constants'

const initialState = {
	isFetching:false,
	data:[]
}

export function adduserInfo(state = initialState, action) {
    switch (action.type) {
    	case actionTypes.ADD_USER_START:
            return Object.assign({}, state, {
                isFetching: true
            });
        case actionTypes.ADD_USER_SUCCESS:
            return Object.assign({}, state, {
            	data:action.data,
                isFetching: false
            });
        case actionTypes.ADD_USER_ERROR:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state
    }
}