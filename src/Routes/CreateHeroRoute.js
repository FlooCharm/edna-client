import React, { 
	// useState, 
	// useEffect, 
} from 'react';

import { useHistory } from "react-router-dom";

import TextInput from '../Components/TextInput';
import PillBtn from '../Components/PillBtn';

export default function CreateHeroRoute() { 
	const history = useHistory();
	

	return (
		<div className="full-container black-bg column">
			<PillBtn 
				text='REGRESAR'
				onClick={() => history.push('/heroes')}
				left
			/>
			<TextInput 
				className='black-bg'
			/>
			<TextInput 
				className='black-bg'
			/>
			<PillBtn 
				text='SIGUIENTE'
			/>
			
		</div>
	)	
}