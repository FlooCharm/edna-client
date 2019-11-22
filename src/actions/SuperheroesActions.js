import ApiService from '../services/ApiService';

import normalizeById from '../utils/NormalizeById.js';

export const GET_SUPERHEROES_BEGIN = 'GET_SUPERHEROES_BEGIN';
export const GET_SUPERHEROES_SUCCESS = 'GET_SUPERHEROES_SUCCESS';
export const GET_SUPERHEROES_FAILURE = 'GET_SUPERHEROES_FAILURE';

export function fetchSuperheroes () {
	return async (dispatch) => {
		await dispatch(getSuperheroesBegin())
		try {
			let result = await ApiService.getSuperheroes();
			let normalized = normalizeById(result.superheroes)
			dispatch(getSuperheroesSuccess(normalized))
		}
		catch(e) {
			dispatch(getSuperheroesFailure(e))
		}
	}
}

export function createSuperhero (data) {
	return async (dispatch, getState) => {
		try {
			let stateAllIds = getState().Superheroes.allIds;
			let stateById = getState().Superheroes.byId;
			let result = await ApiService.createSuperhero(data);
			let normalized = normalizeById([result.superhero])
			let byId = { ...stateById, ...normalized.byId }
			let allIds = [ ...stateAllIds, ...normalized.allIds ]
			dispatch(getSuperheroesSuccess({ byId, allIds }))
			return result.superhero;
		} catch (e) {
			dispatch(getSuperheroesFailure(e))
		}
	}
}

export const getSuperheroesBegin = () => ({
	type: GET_SUPERHEROES_BEGIN
})

export const getSuperheroesSuccess = ({ byId, allIds }) => ({
	type: GET_SUPERHEROES_SUCCESS,
	payload : { byId, allIds }
})

export const getSuperheroesFailure = (error) => ({
	type: GET_SUPERHEROES_FAILURE,
	payload: { error }
})