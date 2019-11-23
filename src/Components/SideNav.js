import React from 'react';
import { useDispatch } from 'react-redux';
import { matchPath } from "react-router";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { List, Grid, LogOut } from 'react-feather';

import { clearSession } from '../actions/AuthActions';

export default function SideBar ({ location, history }) {
	const dispatch = useDispatch();

    const logout = () => {
        dispatch(clearSession());
    }

    const match = matchPath(location.pathname, {
        path: "/superhero/:id",
        exact: true,
        strict: false
    });

    return (
		(location.pathname !== '/login') &&
        (!match) &&
		(location.pathname !== '/create-hero') &&
		(location.pathname !== '/create-suit') &&
        (location.pathname !== '/edit-suit') &&
        (
            <div className='sidenav-sticky'>
                <SideNav
                    onSelect={(selected) => {
                    	if (selected === '/logout') {
                            logout();
    						history.push('login');
                    	} else {
    	                    const to = selected || '';
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
                    <SideNav.Nav defaultSelected={location.pathname}>
                        <NavItem  eventKey="/">
                            <NavIcon>
                               <List color='#ffffff'/>
                            </NavIcon>
                            <NavText>
                                Superhéroes
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="/gallery">
                            <NavIcon>
                               <Grid color='#ffffff'/>
                            </NavIcon>
                            <NavText>
                                Galería
                            </NavText>
                        </NavItem>
                    	<NavItem 
                    		navitemClassName='sidenav-last-item'
                    		eventKey="/logout">
                            <NavIcon>
                               <LogOut color='#ffffff'/>
                            </NavIcon>
                            <NavText>
                                Cerrar Sesión
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </div>
        )
	);
}