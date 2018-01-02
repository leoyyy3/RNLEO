let baseUrl = 'http://localhost:8090';

if(!__DEV__){
	baseUrl = 'http://localhost:8000'
}

export const POST_LOGIN = '/api/login'

export const GET_USER_LIST = '/api/getUserList'

export const POST_ADD_USER = '/api/addUser'

export const POST_UPDATE_USER = '/api/updateUser'

export const POST_DELETE_USER = '/api/deleteUser'
