import React, { 
	useState, 
	useRef
	// useEffect, 
} from 'react';
import { useHistory } from "react-router-dom";

import PillBtn from '../Components/PillBtn';
import ColorSquares from '../Components/ColorSquares';
import HeroSuit from '../Components/HeroSuit';

export default function CreateHeroStep2(props) { 
	const history = useHistory();
	const [selectedColor, setSelectedColor] = useState(0);
	const suitRef = useRef()
	
	const onSelectColor = (value) => setSelectedColor(value);

	const onSuitColorChange = (prop) => {
		props.onChangeSuitColor(props.colors[selectedColor], prop);
	}

	return (
		<div className="full-container black-bg column justify-content-space-between">
			<div className='flex row align-items-center big-margin-top'>
				<div className='margin-right'>
					<PillBtn
						text='REGRESAR'
						onClick={() => props.changeStep(2)}
						left
					/>
				</div>
				<p className='huge-text white-text no-margin'>Traje (selección de colores)</p>
			</div>
			<div className='flex flex1 justify-content-center big-margin-top padding-horizontal'>
				<div className='flex justify-content-center flex1 margin-horizontal grey-bg silhouette-container'>
					<HeroSuit
						ref={suitRef}
						wearer={props.wearer.value}
						colors={props.suitColors}
						onClick={onSuitColorChange}
					/>
				</div>
				<div className='flex1 big-margin-left'>
					<p className='big-text white-text no-margin-top'>Selecciona Color</p>
					<ColorSquares 
						colors={props.colors}
						onSelect={onSelectColor}
						selected={selectedColor}
						disableEdit
					/>
				</div>
			</div>
			<PillBtn 
				className='align-self-flex-end margin-bottom'
				text='CREAR TRAJE'
				// disabled={!hasMinimumData}
				onClick={() => props.onSubmit(suitRef)}
			/>
		</div>
	);
}