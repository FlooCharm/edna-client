import React, { 
	useState, 
	// useEffect, 
} from 'react';

import { useHistory } from "react-router-dom";
import TextInput from '../Components/TextInput';
import SimpleCard from '../Components/SimpleCard';
import PillBtn from '../Components/PillBtn';

export default function HeroesIndexRoute() { 
	const [filterText, setFilterText] = useState('');
	const history = useHistory();

	return (
		<div className="container">
			<h1>HeroesIndexRoute</h1>
			<TextInput 
				rounded
				placeholder='Buscar...'
				value={filterText}
				onChange={(e) => setFilterText(e.target.value)}
			/>	
			<SimpleCard>
				<div>
					AHHHHHHHHHH
				</div>
			</SimpleCard>
			<PillBtn
				text='REGISTRAR'
				onClick={() => history.push('/create-hero')}
			/>
		</div>
	)	
}