import React, { 
	useState, 
	// useEffect, 
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import useFormInput from '../custom-hooks/useFormInput';
import useFormValue from '../custom-hooks/useFormValue';
import CreateHeroStep1 from '../Components/CreateHeroStep1';
import CreateHeroStep2 from '../Components/CreateHeroStep2';

import { createSuperhero } from '../actions/SuperheroesActions';
import { setChips } from '../actions/ChipsActions';

export default function CreateHeroRoute() {
	const defaultPowers = useSelector(state => state.Chips.powers)
	const defaultWeathers = useSelector(state => state.Chips.weathers)
	const dispatch = useDispatch();

	const history = useHistory();
	const name = useFormInput('');
	const powers = useFormValue([]);
	const weather = useFormValue([]);
	const element = useFormValue('');
	const [step, setStep] = useState(1);

	const changeStep = (value) => setStep(value);
	const onSubmit = async () => {
		let newSuperhero = {
			super_name: name.value,
			weather: weather.value,
			superpowers: powers.value,
			element: element.value
		}
		let result = await dispatch(createSuperhero(newSuperhero))
		saveChips()
		history.push(`/${result._id}`);
	}

	const saveChips = async () => {
		let newPowers = powers.value.filter(power => !defaultPowers.includes(power))
		let newWeathers = weather.value.filter(weather => !defaultWeathers.includes(weather))
		if(newPowers.length) await dispatch(setChips('powers', newPowers))
		if(newWeathers.length) await dispatch(setChips('weathers', newWeathers))
	}
	
	switch (step) {
		case 1:
			return (
				<CreateHeroStep1
					name={name}
					powers={powers}
					changeStep={changeStep}
					suggestions={defaultPowers}
				/>
			);
		case 2: 
			return (
				<CreateHeroStep2
					weather={weather}
					element={element}
					changeStep={changeStep}
					onSubmit={onSubmit}
					suggestions={defaultWeathers}
				/>	
			);
		default:
			return null;
	}
}