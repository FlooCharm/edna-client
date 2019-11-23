import React, { 
	useState,
	useReducer,
	useEffect, 
} from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useStore } from 'react-redux';

import svgToDataURL from 'svg-to-dataurl';
import camelcaseKeys from 'camelcase-keys';

import useFormInput from '../custom-hooks/useFormInput';
import useFormValue from '../custom-hooks/useFormValue';
import CreateSuitStep1 from '../Components/CreateSuitStep1';
import CreateSuitStep2 from '../Components/CreateSuitStep2';
import CreateSuitStep3 from '../Components/CreateSuitStep3';

import { updateSuit } from '../actions/SuitsActions';
import { fetchSuperhero } from '../actions/SuperheroesActions';

import toUnderscore from '../utils/ToUnderscore.js';
import stringToNumber from '../utils/StringToNumber.js';

export default function EditSuitRoute(props) { 
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
				color: '#00000022',
				is_active: false
			},
			rightArm: {
				color: '#00000022',
				is_active: false
			},
			leftLeg: {
				color: '#00000022',
				is_active: false
			},
			rightLeg: {
				color: '#00000022',
				is_active: false
			},
			rightFoot: {
				color: '#00000022',
				is_active: false
			},
			leftFoot: {
				color: '#00000022',
				is_active: false
			},
			neck: {
				color: '#00000022',
				is_active: false
			},
			belt: {
				color: '#00000022',
				is_active: false
			},
			torso: {
				color: '#00000022',
				is_active: false
			},
			underwear: {
				color: '#00000022',
				is_active: false
			},
			mask: {
				color: '#00000022',
				is_active: false
			},
		}
	};
	const dispatch = useDispatch();
	const store = useStore();
	const history = useHistory();
	const superhero = useLocation().state.id;
	const suitIndex = useLocation().state.suitId;
	const [step, setStep] = useState(1);
	const [suitId, setSuitId] = useState(0);
	const wearer = useFormValue(0);
	const material = useFormValue(0);
	const [colors, setColors] = useState(['#EF2626']);
	const [suit, dispatchSuit] = useReducer(reducer, initialState);

	useEffect(() => {
		if (!superhero || !store.getState().Superheroes.byId[superhero])
			return history.goBack();
		const suitData = store.getState().Superheroes.byId[superhero].suits[suitIndex];
		setSuitId(suitData._id);
		wearer.onChange(suitData.bearer_type);
		material.onChange(suitData.fabric);
		setColors(suitData.main_colors);
		dispatchSuit({ type: 'SET_ALL_MEASURES', payload: camelcaseKeys(suitData.measures) });
		dispatchSuit({ type: 'SET_ALL_COLORS', payload: camelcaseKeys(suitData.pieces) });
	}, [superhero, suitIndex]);
	
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
							is_active: true,
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
							is_active: false,
							color: '#00000022'
						}
					}
				}
			case 'SET_ALL_MEASURES':
				return {
					...state,
					measures: {
						...state.measures,
						...action.payload
					}
				}
			case 'SET_ALL_COLORS':
				case 'SET_ALL_MEASURES':
				return {
					...state,
					colors: {
						...state.colors,
						...action.payload
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

	const onSubmit = async (suitRef) => {
		let editedSuit = {
			bearer: superhero,
			bearer_type: wearer.value,
			fabric: material.value,
			main_colors: colors,
			measures: toUnderscore(stringToNumber(suit.measures)),
			pieces: toUnderscore(suit.colors),
			thumbnail: svgToDataURL(suitRef.current.innerHTML)

		}
		await dispatch(updateSuit(suitId, editedSuit));
		await dispatch(fetchSuperhero(superhero))
		history.push(`/superhero/${superhero}`);
	}
	
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
					onSubmit={onSubmit}
					isEdit
				/>	
			);
		default:
			return null;
	}
}