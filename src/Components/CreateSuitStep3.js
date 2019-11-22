import React, { 
	// useState, 
	// useEffect, 
} from 'react';
import { useHistory } from "react-router-dom";

import PillBtn from '../Components/PillBtn';
import ColorSquares from '../Components/ColorSquares';
import HeroSuit from '../Components/HeroSuit';

export default function CreateHeroStep2(props) { 
	const history = useHistory();

	return (
		<div className="full-container black-bg column justify-content-space-between">
			<div className='flex row align-items-center big-padding-vertical'>
				<div className='margin-right'>
					<PillBtn 
						text='REGRESAR'
						onClick={() => props.changeStep(2)}
						left
					/>
				</div>
				<p className='huge-text white-text no-margin'>Traje (selección de colores)</p>
			</div>
			<div className='flex flex1 justify-content-space-around'>
				<div className='flex justify-content-center flex05 grey-bg'>
					<HeroSuit 
						wearer='hombre'
						colors={props.suitColors}
					/>
				</div>
				<div className='flex1'>
					<ColorSquares 
						colors={props.colors}
					/>
				</div>
			</div>
			<PillBtn 
				className='align-self-flex-end margin-bottom'
				text='CREAR TRAJE'
				// disabled={!hasMinimumData}
				onClick={() => {
					props.changeStep(3)
				}}
			/>
		</div>
	);
}