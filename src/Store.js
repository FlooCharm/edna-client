import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import thunk from 'redux-thunk'
import reducer from './reducers'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage: storage,
	stateReconciler: autoMergeLevel1,
	whitelist: ['Auth', 'Chips']
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const pReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  pReducer,
  composeEnhancers(
    applyMiddleware(thunk),
  )
)

export default store;
export const persistor = persistStore(store);