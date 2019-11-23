import {
	SET_POWERS,
	SET_WEATHERS
} from '../actions/ChipsActions.js';

const initialState = {
	powers: [
		'fuerza', 'volar', 'velocidad', 'telequinesis', 'invisibilidad'
	],
	weathers: [
		'lluvioso', 'soleado', 'frío', 'nublado'
	]
}

export default function ChipsReducer(state = initialState, action) {
	switch (action.type) {
		case SET_POWERS:
			return {
				...state,
				powers: action.payload.powers
			}
		case SET_WEATHERS:
			return {
				...state,
				weathers: action.payload.weathers
			}
		default:
			return state;
	}
}