import React, { 
	useState, 
	// useEffect, 
} from 'react';

import TextInput from '../Components/TextInput';
import SimpleCard from '../Components/SimpleCard';

export default function HeroesIndexRoute() { 
	const [filterText, setFilterText] = useState('');

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
				AHHHHHHHHHH
			</SimpleCard>
		</div>
	)	
}