import React from 'react';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { List, Grid, LogOut } from 'react-feather';

export default function SideBar ({ location, history }) {
	return (
		(location.pathname !== '/login') &&
        (location.pathname !== '/detail') &&
		(location.pathname !== '/create-hero') &&
		(location.pathname !== '/create-suit') &&
        (
            <div className='sidenav-sticky'>
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
            </div>
        )
	);
}