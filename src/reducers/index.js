import { combineReducers } from 'redux'

import Auth from './AuthReducer.js';
import Chips from './ChipsReducer.js';
import Superheroes from './SuperheroesReducer.js';
import Suits from './SuitsReducer.js';

const rootReducer = combineReducers({
	Auth,
	Chips,
	Superheroes,
	Suits
});

export default rootReducer;