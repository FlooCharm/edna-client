import React, { 
	useState, 
	// useEffect, 
} from 'react';
import { useSelector } from 'react-redux';

import TextInput from '../Components/TextInput';
import PillBtn from '../Components/PillBtn';
import ChipsInput from '../Components/ChipsInput';
import RadioTabs from '../Components/RadioTabs';

export default function CreateHeroStep2(props) { 
	const options = [
		{ label: 'Fuego', value: 'fuego', default: true },
		{ label: 'Agua', value: 'agua' },
		{ label: 'Tierra', value: 'tierra' },
		{ label: 'Aire', value: 'aire' },
	]

	const isLoading = useSelector(state => state.Superheroes.isLoading)

	return (
		<div className="full-container black-bg column justify-content-space-between">
			<div className='flex row align-items-center big-padding-vertical'>
				<div className='margin-right'>
					<PillBtn 
						text='REGRESAR'
						onClick={() => props.changeStep(1)}
						left
					/>
				</div>
				<p className='huge-text white-text no-margin'>Ecosistema</p>
			</div>
			<div className='flex column big-padding-horizontal'>
				<div className='big-margin-bottom'>
					<ChipsInput
						containerClassName='width60'
						placeholder='Clima'
						suggestions={props.suggestions}
						{...props.weather}
					/>
				</div>
				<div className='width60-padded'>
					<RadioTabs 
						name='elements'
						options={options}
						selected={props.element.value}
						onChange={props.element.onChange}
					/>
				</div>
			</div>
			<div className='flex justify-content-flex-end big-padding-vertical'>
				<PillBtn 
					disabled={!props.weather.value.length || !props.element.value}
					text={isLoading ? 'REGISTRANDO...' : 'REGISTRAR'}
					onClick={props.onSubmit}
				/>
			</div>
		</div>
	)	
}