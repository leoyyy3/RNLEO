import * as actionTypes from '../constants'

const initialState = ""

export default function loginInfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_ERROR:
            return action.data
        default:
            return state
    }
}