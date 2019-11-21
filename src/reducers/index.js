import { combineReducers } from 'redux'

import Auth from './AuthReducer.js';
import Chips from './ChipsReducer.js';

const rootReducer = combineReducers({
	Auth,
	Chips
});

export default rootReducer;