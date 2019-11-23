import React, { 
	useState, 
	useEffect, 
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from "react-router-dom";
import TextInput from '../Components/TextInput';
import SimpleCard from '../Components/SimpleCard';
import PillBtn from '../Components/PillBtn';
import HorizontalMenu from '../Components/HorizontalMenu';
import LoadingState from '../Components/LoadingState';

import { fetchSuperheroes } from '../actions/SuperheroesActions';
import debounce from '../utils/Debounce';

export default function HeroesIndexRoute() { 
	const [filterText, setFilterText] = useState('');
	const [filteredData, setFilteredData] = useState([]);
	const history = useHistory();
	const dispatch = useDispatch();
	const superheroes = useSelector(state => state.Superheroes.allIds.map(id => state.Superheroes.byId[id]));

	useEffect(() => {
		dispatch(fetchSuperheroes());
	}, []);

	useEffect(() => {
		const filtered = superheroes.filter(hero => hero.super_name.toLowerCase().indexOf(filterText) !== -1)
		setFilteredData(filtered);
	}, [filterText]);

	const renderHeroCards = (heroesToRender) => {
		return heroesToRender.map(superhero => 
			<SimpleCard
				className='clickable'
				key={superhero.super_name}
			>
				<div 
					className='padded hero-card'
					onClick={() => history.push(`/superhero/${superhero._id}`)}
				>
					<p className='no-margin big-text text-center'>{superhero.super_name}</p>
				</div>
			</SimpleCard>
		);
	}

	return (
		superheroes.length ? (
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
				<div className='horizontal-menu-container'>
					{superheroes.length ? 
						(filterText && !filteredData.length ?
							<p className='big-padding-vertical no-margin big-text text-center'>No se encontraron resultados :(</p>:
							<HorizontalMenu
								renderData={() => renderHeroCards(filterText ? filteredData: superheroes)}
								update={[filteredData.length, superheroes.length]}
							/>
						):
						<p className='big-padding-vertical no-margin big-text text-center'>No hay superheroes registrados, comienza creando uno</p>
					}
				</div>
				<div className='flex column align-items-flex-end full-width'>
					<PillBtn
						className=''
						text='REGISTRAR'
						onClick={() => history.push('/create-hero')}
					/>
				</div>
			</div>
		) : (
			<div className='container'>
				<LoadingState />
			</div>
		)
	)	
}