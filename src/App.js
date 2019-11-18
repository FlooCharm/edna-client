import React, { 
	//useState, 
	//useEffect 
} from 'react';
import { Provider } from 'react-redux'
import Router from './Router';

import './App.css';
import store from './Store.js';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function App() {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	);
}

export default App;
