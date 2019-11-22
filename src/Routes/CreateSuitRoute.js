import React, { 
	useState,
	useReducer
	// useEffect, 
} from 'react';
import { useHistory } from "react-router-dom";

import useFormInput from '../custom-hooks/useFormInput';
import useFormValue from '../custom-hooks/useFormValue';
import CreateSuitStep1 from '../Components/CreateSuitStep1';
import CreateSuitStep2 from '../Components/CreateSuitStep2';
import CreateSuitStep3 from '../Components/CreateSuitStep3';

export default function CreateSuitRoute() { 

	const initialState = {
		measures: {
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
		},
		colors: {
			leftArm: '#000',
			rightArm: '#000',
			leftLeg: '#000',
			rightLeg: '#000',
			neck: '#000',
			belt: '#000',
			torso: '#000',
			underwear: '#000',
			mask: '#000',
		}
	};
	const history = useHistory();
	const [step, setStep] = useState(3);
	const wearer = useFormValue('mujer');
	const material = useFormValue('naturales');
	const [colors, setColors] = useState(['#EF2626']);
	const [suit, dispatchSuit] = useReducer(reducer, initialState);
	
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
		dispatchSuit({ type: 'SET_STATE', payload: value, prop});
	}

	const changeColors = (value, index) => {
		let newColors = colors.slice();
		newColors[index] = value.hex;
		setColors(newColors);
	}
	
	const addColor = () => {
		let newColors = colors.slice();
		newColors.push('#000');
		setColors(newColors);	
	}

	const deleteColor = (index) => {
		let newColors = colors.slice();
		newColors.splice(index, 1);
		setColors(newColors);	
	}

	const changeStep = (value) => setStep(value);
	// const onSubmit = () => {
	// 	history.push('/');
	// }
	
	switch (step) {
		case 1:
			return (
				<CreateSuitStep1
					wearer={wearer}
					material={material}
					colors={colors}
					changeColors={changeColors}
					addColor={addColor}
					deleteColor={deleteColor}
					changeStep={changeStep}
				/>
			);
		case 2: 
			return (
				<CreateSuitStep2
					onChangeText={onChangeText}
					measures={suit.measures}
					changeStep={changeStep}
				/>	
			);
		case 3: 
			return (
				<CreateSuitStep3
					suitColors={suit.colors}
					colors={colors}
					changeStep={changeStep}
				/>	
			);
		default:
			return null;
	}
}