import React, { 
	useState, 
	// useEffect, 
} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import useFormInput from '../custom-hooks/useFormInput';
import useFormValue from '../custom-hooks/useFormValue';
import CreateHeroStep1 from '../Components/CreateHeroStep1';
import CreateHeroStep2 from '../Components/CreateHeroStep2';

import { createSuperhero } from '../actions/SuperheroesActions';

export default function CreateHeroRoute() { 
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
		await dispatch(createSuperhero(newSuperhero))
		history.push('/heroes');
	}
	
	switch (step) {
		case 1:
			return (
				<CreateHeroStep1
					name={name}
					powers={powers}
					changeStep={changeStep}
				/>
			);
		case 2: 
			return (
				<CreateHeroStep2
					weather={weather}
					element={element}
					changeStep={changeStep}
					onSubmit={onSubmit}
				/>	
			);
		default:
			return null;
	}
}