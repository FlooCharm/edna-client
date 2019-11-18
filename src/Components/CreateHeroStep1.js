import React, { 
	// useState, 
	// useEffect, 
} from 'react';
import { useHistory } from "react-router-dom";

import TextInput from '../Components/TextInput';
import PillBtn from '../Components/PillBtn';
import ChipsInput from '../Components/ChipsInput';

export default function CreateHeroStep1(props) { 
	const history = useHistory();

	return (
		<div className="full-container black-bg column justify-content-space-between">
			<div className='flex row align-items-center big-padding-vertical'>
				<div className='margin-right'>
					<PillBtn 
						text='REGRESAR'
						onClick={() => history.push('/heroes')}
						left
					/>
				</div>
				<p className='huge-text white-text no-margin'>Datos Personales</p>
			</div>
			<div className='flex column big-padding-horizontal'>
				<TextInput 
					className='black-bg width60 big-margin-bottom'
					placeholder='Nombre'
					{...props.name}
				/>
				<ChipsInput
					placeholder='Poderes'
					{...props.powers}
				/>
			</div>
			<div className='flex justify-content-flex-end big-padding-vertical'>
				<PillBtn 
					disabled={!props.name.value || !props.powers.value.length}
					text='SIGUIENTE'
					onClick={() => props.changeStep(2)}
				/>
			</div>
		</div>
	)	
}