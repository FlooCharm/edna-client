import {
	GET_SUITS_BEGIN,
	GET_SUITS_SUCCESS,
	GET_SUITS_FAILURE
} from '../actions/SuitsActions.js';

const initialState = {
	allIds: [],
	byId: {},
	isLoading: false,
	error: ''
}

export default function SuitsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_SUITS_BEGIN: 
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case GET_SUITS_SUCCESS:
			return {
				...state,
				allIds: action.payload.allIds,
				byId: action.payload.byId,
				isLoading: false,
				error: ''
			}
		case GET_SUITS_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload.error
			}
		default:
			return state;
	}
}