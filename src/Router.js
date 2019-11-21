import React from 'react';
import { 
	BrowserRouter as Router, 
	Switch, 
	Route, 
	Redirect
	//Link 
} from "react-router-dom";
import { useStore, useSelector } from 'react-redux';

import LoginRoute from './Routes/LoginRoute';
import SignUpRoute from './Routes/SignUpRoute';
import HeroesIndexRoute from './Routes/HeroesIndexRoute';
import HeroesDetailRoute from './Routes/HeroesDetailRoute';
import GalleryRoute from './Routes/GalleryRoute';
import CreateHeroRoute from './Routes/CreateHeroRoute';
import CreateSuitRoute from './Routes/CreateSuitRoute';
import { ednaApiAxios } from './utils/Axios.js';

import SideNav from './Components/SideNav';

export default function Routes () {

	return (
		<Router>

				{/* A <Switch> looks through its children <Route>s and
						renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/signup">
						<SignUpRoute />
					</Route>
					<Route path="/login">
						<LoginRoute />
					</Route>
					<PrivateRoute path="/detail">
						<HeroesDetailRoute />
					</PrivateRoute>
					<PrivateRoute path="/create-hero">
						<CreateHeroRoute />
					</PrivateRoute>
					<PrivateRoute path="/create-suit">
						<CreateSuitRoute />
					</PrivateRoute>
				</Switch>
				<Route 
					render={({ location, history }) => (
						<React.Fragment>
							<SideNav
								location={location}
								history={history}
							/>
				            <main>
				               	<PrivateRoute exact path="/">
									<HeroesIndexRoute />
								</PrivateRoute>
								<PrivateRoute path="/gallery">
									<GalleryRoute />
								</PrivateRoute>
				            </main>
				        </React.Fragment>
			  	  	)}
			    />

		</Router>
	);
}

function PrivateRoute({ children, ...rest }) {
	const accessToken = useSelector(state => state.Auth.access_token);
	const rehydrated = useSelector(state => state._persist.rehydrated);
	

	if (rehydrated) {
		return (
			<Route
				{...rest}
				render={({ location }) =>
					accessToken ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location }
						}}
					/>
				)}
			/>
		);
	} else return null;
}