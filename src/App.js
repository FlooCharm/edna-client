import React, { 
	//useState, 
	//useEffect 
} from 'react';
import { Provider } from 'react-redux'
import Router from './Router';

import './App.css';
import store from './Store.js';
import ApiInitializerContainer from './containers/ApiInitializerContainer';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function App() {
	return (
		<Provider store={store}>
			<ApiInitializerContainer>
				<Router />
			</ApiInitializerContainer>
		</Provider>
	);
}

export default App;
