import React, { 
	useState, 
	useEffect, 
} from 'react';
import { useDispatch } from 'react-redux';

import { useHistory } from "react-router-dom";
import TextInput from '../Components/TextInput';
import SimpleCard from '../Components/SimpleCard';
import PillBtn from '../Components/PillBtn';

import { fetchSuperheroes } from '../actions/SuperheroesActions';

export default function HeroesIndexRoute() { 
	const [filterText, setFilterText] = useState('');
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSuperheroes())
	}, [])

	return (
		<div className="container flex column align-items-center justify-content-space-around">
			<div className='flex column full-width align-items-center'>
				<p className='huge-text'>SUPERHÉROES</p>
				<TextInput 
					className='width60'
					rounded
					placeholder='Buscar...'
					value={filterText}
					onChange={(e) => setFilterText(e.target.value)}
				/>	
			</div>
			<SimpleCard
				className='padded hero-card clickable'
				onClick={() => history.push('/detail')}
			>
				<p className='no-margin big-text text-center'>SOME HERO NAME</p>
			</SimpleCard>
			<div className='flex column align-items-flex-end full-width'>
				<PillBtn
					className=''
					text='REGISTRAR'
					onClick={() => history.push('/create-hero')}
				/>
			</div>
		</div>
	)	
}