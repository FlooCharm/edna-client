import React, { 
	useReducer,
	useState, 
	useEffect, 
} from 'react';
import { useHistory } from "react-router-dom";

import TextInput from '../Components/TextInput';
import PillBtn from '../Components/PillBtn';
import ChipsInput from '../Components/ChipsInput';

export default function CreateHeroStep2(props) { 
	const history = useHistory();
	const initialState = {
		lengthLeftArm: '',
		widthLeftArm: '',
		lengthRightArm: '',
		widthRightArm: '',
		lengthLeftLeg: '',
		widthLeftLeg: '',
		lengthRightLeg: '',
		widthRightLeg: '',
		neck: '',
		chest: '',
		waist: '',
		hips: '',
		torso: '',
		head: '',
	};

	const [measures, dispatchMeasures] = useReducer(reducer, initialState);
	const [hasMinimumData, setMinimumData] = useState(false);

	useEffect(() => {
		let hasMinimum = true;
		for (let key in measures) {
			hasMinimum = hasMinimum && measures[key];
		}
		setMinimumData(hasMinimum);
	}, [measures]);

	function reducer(state, action) {
		switch (action.type) {
			case 'SET_STATE':
				return {
					...state,
					[action.prop]: action.payload
				}
			default:
				break;
		}
	}

	const onChangeText = ({ value }, prop) => {
		dispatchMeasures({ type: 'SET_STATE', payload: value, prop});
	}

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
				<p className='huge-text white-text no-margin'>Traje (medidas)</p>
			</div>
			<div className='flex'>
				<div className='flex1 big-margin-left'>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right'>
						<p className='big-text white-text no-margin'>Largo (brazo izquierdo)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={measures.lengthLeftArm}
							onChange={({ target }) => onChangeText(target, 'lengthLeftArm')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right'>
						<p className='big-text white-text no-margin'>Ancho (brazo izquierdo)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={measures.widthLeftArm}
							onChange={({ target }) => onChangeText(target, 'widthLeftArm')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right'>
						<p className='big-text white-text no-margin'>Largo (brazo derecho)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={measures.lengthRightArm}
							onChange={({ target }) => onChangeText(target, 'lengthRightArm')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right'>
						<p className='big-text white-text no-margin'>Ancho (brazo derecho)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={measures.widthRightArm}
							onChange={({ target }) => onChangeText(target, 'widthRightArm')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right'>
						<p className='big-text white-text no-margin'>Circunferencia (cuello)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={measures.neck}
							onChange={({ target }) => onChangeText(target, 'neck')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right'>
						<p className='big-text white-text no-margin'>Circunferencia (cabeza)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={measures.head}
							onChange={({ target }) => onChangeText(target, 'head')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right'>
						<p className='big-text white-text no-margin'>Largo (torso)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={measures.torso}
							onChange={({ target }) => onChangeText(target, 'torso')}
						/>
					</div>
				</div>
				<div className='flex1 big-margin-left'>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right'>
						<p className='big-text white-text no-margin'>Largo (pierna izquierda)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={measures.lengthLeftLeg}
							onChange={({ target }) => onChangeText(target, 'lengthLeftLeg')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right'>
						<p className='big-text white-text no-margin'>Ancho (pierna izquierda)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={measures.widthLeftLeg}
							onChange={({ target }) => onChangeText(target, 'widthLeftLeg')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right'>
						<p className='big-text white-text no-margin'>Largo (pierna derecha)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={measures.lengthRightLeg}
							onChange={({ target }) => onChangeText(target, 'lengthRightLeg')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right'>
						<p className='big-text white-text no-margin'>Ancho (pierna derecha)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={measures.widthRightLeg}
							onChange={({ target }) => onChangeText(target, 'widthRightLeg')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right'>
						<p className='big-text white-text no-margin'>Total (pecho)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={measures.chest}
							onChange={({ target }) => onChangeText(target, 'chest')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right'>
						<p className='big-text white-text no-margin'>Total (cintura)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={measures.waist}
							onChange={({ target }) => onChangeText(target, 'waist')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right'>
						<p className='big-text white-text no-margin'>Total (cadera)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={measures.hips}
							onChange={({ target }) => onChangeText(target, 'hips')}
						/>
					</div>
				</div>
			</div>
			<PillBtn 
				className='align-self-flex-end small-margin-vertical'
				text='SIGUIENTE'
				disabled={!hasMinimumData}
				onClick={() => props.changeStep(2)}
			/>
		</div>
	)
}