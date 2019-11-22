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
		<div className="container">
			<h1 className='no-margin'>GalleryRoute</h1>
			
		</div>
	)	
}