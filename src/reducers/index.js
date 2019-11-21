import { combineReducers } from 'redux'

import Auth from './AuthReducer.js';
import Chips from './ChipsReducer.js';
import Superheroes from './SuperheroesReducer.js';

const rootReducer = combineReducers({
	Auth,
	Chips,
	Superheroes
});

export default rootReducer;