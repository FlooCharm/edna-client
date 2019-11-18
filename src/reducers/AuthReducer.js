import {
	LOGIN_BEGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILURE
} from '../actions/AuthActions.js';

const initialState = {
	access_token: '',
	isLoading: false,
	error: ''
}

export default function AuthReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN_BEGIN:
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoading: false,
				access_token: action.payload.access_token,
				error: ''
			}
		case LOGIN_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload.error
			}
		default:
			return state;
	}
}