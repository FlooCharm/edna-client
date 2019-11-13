import React from 'react';
import { BrowserRouter as Router, 
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

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { List, Grid, LogOut } from 'react-feather';

// function login() {
//   return <h2>Login</h2>;
// }

// function signUp() {
//   return <h2>Sign Up</h2>;
// }

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
					{/*<Route path="/">
						<HeroesIndexRoute />
					</Route>*/}
					<Route path="/detail">
						<HeroesDetailRoute />
					</Route>
					{/*<Route path="/gallery">
						<GalleryRoute />
					</Route>*/}
					<Route path="/create-hero">
						<CreateHeroRoute />
					</Route>
					<Route path="/create-suit">
						<CreateSuitRoute />
					</Route>
				</Switch>
				<Route render={({ location, history }) => (
					location.pathname !== '/login' &&
			        (<React.Fragment>
			            <SideNav
			                onSelect={(selected) => {
			                	if (selected === 'logout') {
									history.push('login');
			                	} else {
				                    const to = '/' + selected || '';
				                    if (location.pathname !== to) {
				                        history.push(to);
				                    }
			                	}
			                }}
			            	defaultExpanded
			            >
			                {/* <SideNav.Toggle /> */}
							<div className='centered big-margin-bottom'>
								<img 
									width='104'
									src="assets/edna.svg" 
								/>	
							</div>
			                <SideNav.Nav defaultSelected="heroes">
			                    <NavItem  eventKey="heroes">
			                        <NavIcon>
			                           <List color='#ffffff'/>
			                        </NavIcon>
			                        <NavText>
			                            Superhéroes
			                        </NavText>
			                    </NavItem>
			                    <NavItem eventKey="gallery">
			                        <NavIcon>
			                           <Grid color='#ffffff'/>
			                        </NavIcon>
			                        <NavText>
			                            Galería
			                        </NavText>
			                    </NavItem>
			                	<NavItem 
			                		navitemClassName='sidenav-last-item'
			                		eventKey="logout">
			                        <NavIcon>
			                           <LogOut color='#ffffff'/>
			                        </NavIcon>
			                        <NavText>
			                            Cerrar Sesión
			                        </NavText>
			                    </NavItem>
			                </SideNav.Nav>
			            </SideNav>
			            <main>
			               	<Route path="/heroes">
								<HeroesIndexRoute />
							</Route>
							<Route path="/gallery">
								<GalleryRoute />
							</Route>
			            </main>
			        </React.Fragment>)
			  	  )}
			    />
		</Router>
	);
}