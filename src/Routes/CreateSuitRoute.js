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

	const measuresInitialState = {
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
	const history = useHistory();
	const [step, setStep] = useState(3);
	const wearer = useFormValue('mujer');
	const material = useFormValue('naturales');
	const [colors, setColors] = useState(['#EF2626']);
	const [measures, dispatchMeasures] = useReducer(reducer, measuresInitialState);
	
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
					measures={measures}
					changeStep={changeStep}
				/>	
			);
		case 3: 
			return (
				<CreateSuitStep3
					colors={colors}
					changeStep={changeStep}
				/>	
			);
		default:
			return null;
	}
}