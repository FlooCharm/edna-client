import React, { 
	useState, 
	// useEffect, 
} from 'react';
import { useHistory } from "react-router-dom";

import TextInput from '../Components/TextInput';
import PillBtn from '../Components/PillBtn';
import ChipsInput from '../Components/ChipsInput';
import useFormInput from '../custom-hooks/useFormInput';
import useFormValue from '../custom-hooks/useFormValue';
import CreateHeroStep1 from '../Components/CreateHeroStep1';

export default function CreateHeroRoute() { 
	const history = useHistory();
	const name = useFormInput('');
	const powers = useFormValue([]);

	return (
		<CreateHeroStep1 
			name={name}
			powers={powers}
		/>
	)	
}