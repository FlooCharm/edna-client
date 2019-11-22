export const SET_POWERS = 'SET_POWERS';
export const SET_WEATHERS = 'SET_WEATHERS';

export function setChips (type, newValues) {
	return async (dispatch, getState) => {
		if(type === 'powers'){
			let powers = getState().Chips.powers.slice();
			powers.push(...newValues);
			dispatch(setPowers(powers))
		} else {
			let weathers = getState().Chips.weathers.slice();
			weathers.push(...newValues);
			dispatch(setWeathers(weathers))
		}
	}
}

export const setPowers = (powers) => ({
	type: SET_POWERS,
	payload: { powers }
})

export const setWeathers = (weathers) => ({
	type: SET_WEATHERS,
	payload: { weathers }
})