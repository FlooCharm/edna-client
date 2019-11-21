import {
	GET_SUPERHEROES_BEGIN,
	GET_SUPERHEROES_SUCCESS,
	GET_SUPERHEROES_FAILURE
} from '../actions/SuperheroesActions.js';

const initialState = {
	allIds: [],
	byId: {},
	isLoading: false,
	error: ''
}

export default function ChipsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_SUPERHEROES_BEGIN: 
			return {
				...state,
				isLoading: true,
				error: ''
			}
		case GET_SUPERHEROES_SUCCESS:
			return {
				...state,
				allIds: action.payload.allIds,
				byId: action.payload.byId,
				isLoading: false,
				error: ''
			}
		case GET_SUPERHEROES_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload.error
			}
		default:
			return state;
	}
}