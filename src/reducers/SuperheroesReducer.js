import {
	SUPERHEROES_BEGIN,
	GET_SUPERHEROES_SUCCESS,
	SUPERHEROES_FAILURE,
	UPDATE_SUPERHEROES_BEGIN,
	UPDATE_SUPERHEROES_SUCCESS,
	UPDATE_SUPERHEROES_FAILURE
} from '../actions/SuperheroesActions.js';

const initialState = {
	allIds: [],
	byId: {},
	isLoading: false,
	isUpdating: false,
	error: ''
}

export default function SuperheroesReducer(state = initialState, action) {
	switch (action.type) {
		case SUPERHEROES_BEGIN: 
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
		case SUPERHEROES_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload.error
			}
		case UPDATE_SUPERHEROES_BEGIN: 
			return {
				...state,
				isUpdating: true,
				error: ''
			}
		case UPDATE_SUPERHEROES_SUCCESS:
			return {
				...state,
				byId: action.payload.byId,
				isUpdating: false,
				error: ''
			}
		case UPDATE_SUPERHEROES_FAILURE:
			return {
				...state,
				isUpdating: false,
				error: action.payload.error
			}
		default:
			return state;
	}
}