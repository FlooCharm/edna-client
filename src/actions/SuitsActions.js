import ApiService from '../services/ApiService';

import normalizeById from '../utils/NormalizeById.js';

export const SUITS_BEGIN = 'SUITS_BEGIN';
export const GET_SUITS_SUCCESS = 'GET_SUITS_SUCCESS';
export const SUITS_FAILURE = 'SUITS_FAILURE';

export function fetchSuits () {
	return async (dispatch) => {
		await dispatch(suitsBegin())
		try {
			let result = await ApiService.getSuits();
			let normalized = normalizeById(result.suits)
			dispatch(getSuitsSuccess(normalized))
		}
		catch(e) {
			dispatch(suitsFailure(e))
		}
	}
}

export function fetchSuitsbySuperhero (id) {
	return async (dispatch) => {
		await dispatch(suitsBegin())
		try {
			let result = await ApiService.getSuitsBySuperhero(id);
			let normalized = normalizeById([result.suit])
			dispatch(getSuitsSuccess(normalized))
		}
		catch(e) {
			dispatch(suitsFailure(e))
		}
	}
}

export function createSuit (data) {
	return async (dispatch, getState) => {
		try {
			let stateAllIds = getState().Suits.allIds;
			let stateById = getState().Suits.byId;
			let result = await ApiService.createSuit(data);
			let normalized = normalizeById([result.suit])
			let byId = { ...stateById, ...normalized.byId }
			let allIds = [ ...stateAllIds, ...normalized.allIds ]
			dispatch(getSuitsSuccess({ byId, allIds }))
			return result.suit;
		} catch (e) {
			dispatch(suitsFailure(e))
		}
	}
}

export function updateSuit (id, data) {
	return async (dispatch, getState) => {
		try {
			let stateAllIds = getState().Suits.allIds;
			let stateById = getState().Suits.byId;
			let result = await ApiService.updateSuit(id, data);
			let normalized = normalizeById([result.suit])
			let byId = { ...stateById, ...normalized.byId }
			let allIds = [ ...stateAllIds, ...normalized.allIds ]
			dispatch(getSuitsSuccess({ byId, allIds }))
			return result.suit;
		} catch (e) {
			dispatch(suitsFailure(e))
		}
	}
}

export function deleteSuit (id) {
	return async (dispatch) => {
		await dispatch(suitsBegin())
		try {
			await ApiService.deleteSuit(id)
		} catch (e) {
			dispatch(suitsFailure(e))
		}
	}
}

export const suitsBegin = () => ({
	type: SUITS_BEGIN
})

export const getSuitsSuccess = ({ byId, allIds }) => ({
	type: GET_SUITS_SUCCESS,
	payload : { byId, allIds }
})

export const suitsFailure = (error) => ({
	type: SUITS_FAILURE,
	payload: { error }
})