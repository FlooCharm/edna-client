import React, { 
	useState, 
	// useEffect, 
} from 'react';
import { useHistory } from "react-router-dom";

import useFormInput from '../custom-hooks/useFormInput';
import useFormValue from '../custom-hooks/useFormValue';
import CreateHeroStep1 from '../Components/CreateHeroStep1';
import CreateHeroStep2 from '../Components/CreateHeroStep2';

export default function CreateHeroRoute() { 
	const history = useHistory();
	const name = useFormInput('');
	const powers = useFormValue([]);
	const weather = useFormValue([]);
	const element = useFormValue('');
	const [step, setStep] = useState(1);

	const changeStep = (value) => setStep(value);
	const onSubmit = () => {
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
	}
}