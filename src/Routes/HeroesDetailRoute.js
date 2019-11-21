import React, { 
	// useState, 
	// useEffect, 
} from 'react';
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import PillBtn from '../Components/PillBtn';
import IconBtn from '../Components/IconBtn';

export default function HeroesDetailRoute() { 
	const history = useHistory();

	return (
		<div className="full-container flex column justify-content-space-between">
			<div className='flex row align-items-center big-padding-vertical justify-content-space-between'>
				<div className='flex row align-items-center'>
					<div className='margin-right'>
						<PillBtn 
							text='REGRESAR'
							onClick={() => history.push('/heroes')}
							left
						/>
					</div>
					<p className='huge-text no-margin'>Some Cool Hero Name</p>
				</div>
				<div className='flex row align-items-center huge-margin-right'>
					<IconBtn 
						className='small-margin-right'
						icon='Edit2'
					/>
					<IconBtn 
						background='#000'
						icon='Trash2'
					/>
				</div>
			</div>
			<PillBtn
				className='align-self-flex-end big-margin-bottom'
				text='NUEVO TRAJE'
				onClick={() => history.push('/create-suit')}
			/>
		</div>
	)	
}