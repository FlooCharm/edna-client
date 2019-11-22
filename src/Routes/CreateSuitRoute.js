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
			leftArm: {
				color: '#000',
				isActive: false
			},
			rightArm: {
				color: '#000',
				isActive: false
			},
			leftLeg: {
				color: '#000',
				isActive: false
			},
			rightLeg: {
				color: '#000',
				isActive: false
			},
			rightFoot: {
				color: '#000',
				isActive: false
			},
			leftFoot: {
				color: '#000',
				isActive: false
			},
			neck: {
				color: '#000',
				isActive: false
			},
			belt: {
				color: '#000',
				isActive: false
			},
			torso: {
				color: '#000',
				isActive: false
			},
			underwear: {
				color: '#000',
				isActive: false
			},
			mask: {
				color: '#000',
				isActive: false
			},
		}
	};
	const history = useHistory();
	const [step, setStep] = useState(3);
	const wearer = useFormValue(0);
	const material = useFormValue(0);
	const [colors, setColors] = useState(['#EF2626']);
	const [suit, dispatchSuit] = useReducer(reducer, initialState);
	
	function reducer(state, action) {
		switch (action.type) {
			case 'SET_MEASURES':
				return {
					...state,
					measures: {
						...state.measures,
						[action.prop]: action.payload
					}
				}
			case 'SET_COLOR':
				return {
					...state,
					colors: {
						...state.colors,
						[action.prop]: {
							isActive: true,
							color: action.payload
						}
					}
				}
			case 'UNSET_COLOR':
				return {
					...state,
					colors: {
						...state.colors,
						[action.prop]: {
							isActive: false,
							color: '#00000022'
						}
					}
				}
			default:
				break;
		}
	}

	const onChangeText = ({ value }, prop) => {
		dispatchSuit({ type: 'SET_MEASURES', payload: value, prop});
	}

	const onChangeSuitColor = (value, prop) => {
		if (value === suit.colors[prop].color)
			dispatchSuit({ type: 'UNSET_COLOR', prop });
		else
			dispatchSuit({ type: 'SET_COLOR', payload: value, prop});
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
					wearer={wearer}
					suitColors={suit.colors}
					onChangeSuitColor={onChangeSuitColor}
					colors={colors}
					changeStep={changeStep}
				/>	
			);
		default:
			return null;
	}
}