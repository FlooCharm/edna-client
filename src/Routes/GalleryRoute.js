import React, { 
	// useState, 
	useEffect, 
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSuits } from '../actions/SuitsActions';

import LoadingState from '../Components/LoadingState';

export default function GalleryRoute() { 
	const dispatch = useDispatch();
	const suits = useSelector(state => state.Suits.allIds.map(id => state.Suits.byId[id]));

	useEffect(() => {
		dispatch(fetchSuits());
	}, [])

	return (
		suits.length ? (
			<div className="container flex column align-items-center">
				<div className='flex column full-width align-items-center'>
					<p className='huge-text'>GALERÍA</p>
					<div className='gallery-container'>
						{
							suits.map(suit => (
								<div key={suit._id} className='gallery-card grey-bg'>
									<img src={suit.thumbnail} width='100%'/>
								</div>
							))
						}
					</div>
				</div>
			</div>
		) : (
			<div className='container'>
				<LoadingState />
			</div>
		)
	)	
}