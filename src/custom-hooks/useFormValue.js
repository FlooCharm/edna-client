import { 
	useState,  
} from 'react';

export default function useFormValue (initialValue) {
	const [value, setValue] = useState(initialValue);

	function handleChange(value) {
		setValue(value);
	}

	return {
		value,
		onChange: handleChange
	}
}