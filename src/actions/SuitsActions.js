import ApiService from '../services/ApiService';

import normalizeById from '../utils/NormalizeById.js';

export const GET_SUITS_BEGIN = 'GET_SUITS_BEGIN';
export const GET_SUITS_SUCCESS = 'GET_SUITS_SUCCESS';
export const GET_SUITS_FAILURE = 'GET_SUITS_FAILURE';

export function fetchSuits () {
	return async (dispatch) => {
		await dispatch(getSuitsBegin())
		try {
			let result = await ApiService.getSuits();
			let normalized = normalizeById(result.suits)
			dispatch(getSuitsSuccess(normalized))
		}
		catch(e) {
			dispatch(getSuitsFailure(e))
		}
	}
}

export function fetchSuitsbySuperhero (id) {
	return async (dispatch) => {
		await dispatch(getSuitsBegin())
		try {
			let result = await ApiService.getSuitsBySuperhero(id);
			let normalized = normalizeById([result.suit])
			dispatch(getSuitsSuccess(normalized))
		}
		catch(e) {
			dispatch(getSuitsFailure(e))
		}
	}
}

export function createSuit (data) {
	return async (dispatch, getState) => {
		try {
			let stateAllIds = getState().Superheroes.allIds;
			let stateById = getState().Superheroes.byId;
			let result = await ApiService.createSuit(data);
			let normalized = normalizeById([result.suit])
			let byId = { ...stateById, ...normalized.byId }
			let allIds = [ ...stateAllIds, ...normalized.allIds ]
			dispatch(getSuitsSuccess({ byId, allIds }))
			return result.suit;
		} catch (e) {
			dispatch(getSuitsFailure(e))
		}
	}
}

export const getSuitsBegin = () => ({
	type: GET_SUITS_BEGIN
})

export const getSuitsSuccess = ({ byId, allIds }) => ({
	type: GET_SUITS_SUCCESS,
	payload : { byId, allIds }
})

export const getSuitsFailure = (error) => ({
	type: GET_SUITS_FAILURE,
	payload: { error }
})