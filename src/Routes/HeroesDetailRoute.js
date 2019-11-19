import React, { 
	// useState, 
	// useEffect, 
} from 'react';
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import PillBtn from '../Components/PillBtn';

export default function HeroesDetailRoute() { 
	const history = useHistory();

	return (
		<div className="container">
			<h1>HeroesDetailRoute</h1>
			<PillBtn 
				text='NUEVO TRAJE'
				onClick={() => history.push('/create-suit')}
			/>
		</div>
	)	
}