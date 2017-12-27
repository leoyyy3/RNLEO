import * as actionTypes from '../constants'

export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}