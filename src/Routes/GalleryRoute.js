import React, { 
	useState, 
	useEffect, 
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFormValue from '../custom-hooks/useFormValue';
import { fetchSuits } from '../actions/SuitsActions';

import FilterDropdown from '../Components/FilterDropdown';

export default function GalleryRoute() { 
	const dispatch = useDispatch();
	const suits = useSelector(state => state.Suits.allIds.map(id => state.Suits.byId[id]));
	const [filteredSuits, setFilteredSuits] = useState([]);
	const wearerFilter = useFormValue('');
	const fabricFilter = useFormValue('');

	const wearerFilterOpts = [
		{ value: 0, label: 'Mujer' },
		{ value: 1, label: 'Hombre' },
		{ value: 2, label: 'Niña' },
		{ value: 3, label: 'Niño' },
		{ value: 4, label: 'Bebé' },
	];

	const fabricFilterOpts = [
		{ value: 0, label: 'Naturales' },
		{ value: 1, label: 'Artificiales' },
		{ value: 2, label: 'Sintéticas' },
	];

	useEffect(() => {
		dispatch(fetchSuits());
	}, []);

	useEffect(() => {
		const wearerValue = wearerFilter.value.value;
		const fabricValue = fabricFilter.value.value;
		let wearerFiltered = [];
		let fabricFiltered = [];
		if (typeof wearerValue === 'number' && typeof fabricValue === 'number') {
			wearerFiltered = suits.filter(item => item.bearer_type === wearerValue);
			wearerFiltered = wearerFiltered.filter(item => item.fabric === fabricValue);
			return setFilteredSuits([...wearerFiltered]);
		}
		else if (typeof wearerValue === 'number')
			wearerFiltered = suits.filter(item => item.bearer_type === wearerValue);
		else if (typeof fabricValue === 'number')
			fabricFiltered = suits.filter(item => item.fabric === fabricValue);
		setFilteredSuits([...wearerFiltered, ...fabricFiltered])
	}, [wearerFilter.value, fabricFilter.value]);

	const renderSuits = (renderItems) => 
		renderItems.map(suit => (
			<div key={suit._id} className='gallery-card grey-bg'>
				<img src={suit.thumbnail} width='100%'/>
			</div>
		));

	return (
		suits ? (
			<div className="container flex column align-items-center">
				<div className='flex column full-width align-items-center'>
					<p className='huge-text'>GALERÍA</p>
					<div className='flex align-self-flex-start margin-left'>
						<FilterDropdown
							{...wearerFilter}
							onClear={() => wearerFilter.onChange('')}
							placeholder='Portador'
							options={wearerFilterOpts}
						/>
						<FilterDropdown
							{...fabricFilter}
							onClear={() => fabricFilter.onChange('')}
							placeholder='Telas'
							options={fabricFilterOpts}
						/>
					</div>
					<div className='gallery-container'>
						{(typeof wearerFilter.value.value === 'number' || typeof fabricFilter.value.value === 'number') ?
							(filteredSuits.length ? 
								renderSuits(filteredSuits):
								<p className='big-padding-vertical no-margin big-text text-center full-width'>No se encontraron resultados :(</p>
							):
							renderSuits(suits)
						}
					</div>
				</div>
			</div>
		) : (
			<div>Loading...</div>
		)
	)	
}