import React, { 
	// useState, 
	useEffect, 
} from 'react';
import { useDispatch } from 'react-redux';

import { fetchSuits } from '../actions/SuitsActions';

export default function GalleryRoute() { 
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSuits())
	}, [])

	return (
		<div className="container flex column align-items-center">
			<div className='flex column full-width align-items-center'>
				<p className='huge-text'>GALERÍA</p>	
			</div>
		</div>
	)	
}