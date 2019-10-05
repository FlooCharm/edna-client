import React from 'react';
import { BrowserRouter as Router, 
	Switch, 
	Route, 
	//Link 
} from "react-router-dom";

import Login from './Routes/Login';
import SignUp from './Routes/SignUp';

// function login() {
//   return <h2>Login</h2>;
// }

// function signUp() {
//   return <h2>Sign Up</h2>;
// }

export default function Routes () {
	return (
		<Router>
			<div>
				{/* A <Switch> looks through its children <Route>s and
						renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/signup">
						<SignUp />
					</Route>
					<Route path="/">
						<Login />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}