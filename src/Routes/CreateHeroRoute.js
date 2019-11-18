import React, { 
	useState, 
	// useEffect, 
} from 'react';

import { useHistory } from "react-router-dom";

import TextInput from '../Components/TextInput';
import PillBtn from '../Components/PillBtn';
import ChipsInput from '../Components/ChipsInput';

export default function CreateHeroRoute() { 
	const history = useHistory();
	const [name, setName] = useState('');
	const [powers, setPowers] = useState([]);

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
					value={name}
					onChangeText={(e) => setName(e.target.value)}
				/>
				<ChipsInput
					chips={powers}
					placeholder='Poderes'
					onChipsChange={(chips) => setPowers(chips)}
				/>
				{/*<TextInput 
					className='black-bg width60'
					placeholder='Poderes'
					value={powers}
				/>*/}
			</div>
			<div className='flex justify-content-flex-end big-padding-vertical'>
				<PillBtn 
					text='SIGUIENTE'
				/>
			</div>
		</div>
	)	
}