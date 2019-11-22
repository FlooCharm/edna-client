import React, { 
	useState, 
	// useEffect, 
} from 'react';
import { useHistory } from "react-router-dom";

import PillBtn from '../Components/PillBtn';
import RadioTabs from '../Components/RadioTabs';
import ColorSquares from '../Components/ColorSquares';
import { SketchPicker } from 'react-color';

export default function CreateHeroStep1(props) { 
	const history = useHistory();
	const [selectedColor, setSelectedColor] = useState(0);
	const wearerOpts = [
		{ label: 'Mujer', value: 0, default: true },
		{ label: 'Hombre', value: 1 },
		{ label: 'Niña', value: 2 },
		{ label: 'Niño', value: 3 },
		{ label: 'Bebé', value: 4 },
	];
	const materialOpts = [
		{ label: 'Fibras naturales', value: 0, default: true },
		{ label: 'Fibras artificiales', value: 1 },
		{ label: 'Fibras sintéticas', value: 2 },
	];

	const addColor = () => {
		props.addColor();
		setSelectedColor(props.colors.length);
	}
	const deleteColor = (e, index) => {
		e.stopPropagation()
		props.deleteColor(index);
		if (index === 0)
			setSelectedColor(0);
		else if (index === props.colors.length - 1)
			setSelectedColor(index - 1);
	}
	const onSelectColor = (value) => setSelectedColor(value);

	return (
		<div className="full-container black-bg">
			<div className='flex1 column justify-content-space-between'>
				<div className='flex row align-items-center big-padding-vertical'>
					<div className='margin-right'>
						<PillBtn 
							text='REGRESAR'
							onClick={() => history.push('/detail')}
							left
						/>
					</div>
					<p className='huge-text white-text no-margin'>Datos del traje</p>
				</div>
				<div className='flex column big-padding-horizontal'>
					<div className='margin-bottom'>
						<p className='big-text white-text no-margin'>Quién lo va a usar...</p>
						<RadioTabs 
							name='wearer'
							options={wearerOpts}
							selected={props.wearer.value}
							onChange={props.wearer.onChange}
						/>
					</div>
					<div className=''>
						<p className='big-text white-text no-margin'>Material del tejido</p>
						<RadioTabs 
							name='material'
							options={materialOpts}
							selected={props.material.value}
							onChange={props.material.onChange}
						/>
					</div>
					<div className=''>
						<p className='big-text white-text no-margin'>Paleta de color</p>
						<div className='small-margin-vertical'>
							<ColorSquares 
								colors={props.colors}
								onAdd={addColor}
								onDelete={deleteColor}
								onSelect={onSelectColor}
								selected={selectedColor}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='flex column justify-content-space-around'>
				<div className='big-margin-right'>
					<SketchPicker
						color={props.colors[selectedColor]}
						disableAlpha
						width={400}
						onChange={(value) => props.changeColors(value, selectedColor)}
					/>
				</div>
				<PillBtn 
					className='align-self-flex-end huge-padding-bottom'
					disabled={!props.colors.length}
					text='SIGUIENTE'
					onClick={() => props.changeStep(2)}
				/>
			</div>
		</div>
	)
}