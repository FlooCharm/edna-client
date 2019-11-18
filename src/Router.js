import React from 'react';
import { 
	BrowserRouter as Router, 
	Switch, 
	Route, 
	//Link 
} from "react-router-dom";

import LoginRoute from './Routes/LoginRoute';
import SignUpRoute from './Routes/SignUpRoute';
import HeroesIndexRoute from './Routes/HeroesIndexRoute';
import HeroesDetailRoute from './Routes/HeroesDetailRoute';
import GalleryRoute from './Routes/GalleryRoute';
import CreateHeroRoute from './Routes/CreateHeroRoute';
import CreateSuitRoute from './Routes/CreateSuitRoute';

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
					<Route path="/detail">
						<HeroesDetailRoute />
					</Route>
					<Route path="/create-hero">
						<CreateHeroRoute />
					</Route>
					<Route path="/create-suit">
						<CreateSuitRoute />
					</Route>
				</Switch>
				<Route 
					render={({ location, history }) => (
						<React.Fragment>
							<SideNav
								location={location}
								history={history}
							/>
				            <main>
				               	<Route path="/heroes">
									<HeroesIndexRoute />
								</Route>
								<Route path="/gallery">
									<GalleryRoute />
								</Route>
				            </main>
				        </React.Fragment>
			  	  	)}
			    />
		</Router>
	);
}