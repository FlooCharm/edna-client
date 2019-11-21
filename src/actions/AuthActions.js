import ApiService from '../services/ApiService';
import { ednaApiAxios } from '../utils/Axios.js';

export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const CLEAR_SESSION = 'CLEAR_SESSION';
export const SET_HEADERS = 'SET_HEADERS';

export function login (credentials) {
	return async (dispatch) => {
		await dispatch(loginBegin());
		try {
			let result = await ApiService.login(credentials);
			dispatch(loginSuccess(result.accessToken))
		} catch(e) {
			dispatch(loginFailure(e))
		}

	}
}

export const clearSession = () => ({
	type: CLEAR_SESSION
})

export const setHeaders = () => ({
	type: SET_HEADERS
})

export const loginBegin = () => ({
	type: LOGIN_BEGIN
})

export const loginSuccess = (access_token) => ({
	type: LOGIN_SUCCESS,
	payload: { access_token }
})

export const loginFailure = (error) => ({
	type: LOGIN_FAILURE,
	payload: { error }
})