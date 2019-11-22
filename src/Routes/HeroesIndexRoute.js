import React, { 
	useState, 
	useEffect, 
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from "react-router-dom";
import TextInput from '../Components/TextInput';
import SimpleCard from '../Components/SimpleCard';
import PillBtn from '../Components/PillBtn';

import { fetchSuperheroes } from '../actions/SuperheroesActions';

export default function HeroesIndexRoute() { 
	const [filterText, setFilterText] = useState('');
	const history = useHistory();
	const dispatch = useDispatch();
	const superheroes = useSelector(state => state.Superheroes.allIds.map(id => state.Superheroes.byId[id]))

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
			{
				superheroes.map(superhero => 
					<SimpleCard
						className='padded hero-card clickable'
						onClick={() => history.push(`/superhero/${superhero._id}`)}
						key={superhero.super_name}
					>
						<p className='no-margin big-text text-center'>{superhero.super_name}</p>
					</SimpleCard>
				)
			}
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