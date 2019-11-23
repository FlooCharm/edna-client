import React, { 
	// useReducer,
	useState,
	useEffect, 
} from 'react';

import TextInput from '../Components/TextInput';
import PillBtn from '../Components/PillBtn';

export default function CreateHeroStep2(props) { 
	
	const [hasMinimumData, setMinimumData] = useState(false);

	useEffect(() => {
		let hasMinimum = true;
		for (let key in props.measures) {
			hasMinimum = hasMinimum && props.measures[key];
		}
		setMinimumData(hasMinimum);
	}, [props.measures]);

	return (
		<form className="full-container black-bg column justify-content-space-between">
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
			<div className='flex measures-container'>
				<div className='flex1 big-margin-left'>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right measure-content'>
						<p className='big-text white-text no-margin'>Largo (brazo izquierdo)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={props.measures.lengthLeftArm}
							onChange={({ target }) => props.onChangeText(target, 'lengthLeftArm')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right measure-content'>
						<p className='big-text white-text no-margin'>Ancho (brazo izquierdo)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={props.measures.widthLeftArm}
							onChange={({ target }) => props.onChangeText(target, 'widthLeftArm')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right measure-content'>
						<p className='big-text white-text no-margin'>Largo (brazo derecho)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={props.measures.lengthRightArm}
							onChange={({ target }) => props.onChangeText(target, 'lengthRightArm')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right measure-content'>
						<p className='big-text white-text no-margin'>Ancho (brazo derecho)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={props.measures.widthRightArm}
							onChange={({ target }) => props.onChangeText(target, 'widthRightArm')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right measure-content'>
						<p className='big-text white-text no-margin'>Circunferencia (cuello)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={props.measures.neck}
							onChange={({ target }) => props.onChangeText(target, 'neck')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right measure-content'>
						<p className='big-text white-text no-margin'>Circunferencia (cabeza)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={props.measures.head}
							onChange={({ target }) => props.onChangeText(target, 'head')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right measure-content'>
						<p className='big-text white-text no-margin'>Largo (torso)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={props.measures.torso}
							onChange={({ target }) => props.onChangeText(target, 'torso')}
						/>
					</div>
				</div>
				<div className='flex1 big-margin-left'>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right measure-content'>
						<p className='big-text white-text no-margin'>Largo (pierna izquierda)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={props.measures.lengthLeftLeg}
							onChange={({ target }) => props.onChangeText(target, 'lengthLeftLeg')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right measure-content'>
						<p className='big-text white-text no-margin'>Ancho (pierna izquierda)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={props.measures.widthLeftLeg}
							onChange={({ target }) => props.onChangeText(target, 'widthLeftLeg')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right measure-content'>
						<p className='big-text white-text no-margin'>Largo (pierna derecha)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={props.measures.lengthRightLeg}
							onChange={({ target }) => props.onChangeText(target, 'lengthRightLeg')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right measure-content'>
						<p className='big-text white-text no-margin'>Ancho (pierna derecha)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={props.measures.widthRightLeg}
							onChange={({ target }) => props.onChangeText(target, 'widthRightLeg')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right measure-content'>
						<p className='big-text white-text no-margin'>Total (pecho)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={props.measures.chest}
							onChange={({ target }) => props.onChangeText(target, 'chest')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right measure-content'>
						<p className='big-text white-text no-margin'>Total (cintura)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={props.measures.waist}
							onChange={({ target }) => props.onChangeText(target, 'waist')}
						/>
					</div>
					<div className='flex justify-content-space-between small-margin-bottom big-margin-right measure-content'>
						<p className='big-text white-text no-margin'>Total (cadera)</p>
						<TextInput 
							className='black-bg'
							placeholder='Medida'
							type='number'
							value={props.measures.hips}
							onChange={({ target }) => props.onChangeText(target, 'hips')}
						/>
					</div>
				</div>
			</div>
			<PillBtn 
				className='align-self-flex-end small-margin-vertical'
				type='submit'
				text='SIGUIENTE'
				disabled={!hasMinimumData}
				onClick={(e) => {
					e.preventDefault();
					props.changeStep(3)
				}}
			/>
		</form>
	)
}