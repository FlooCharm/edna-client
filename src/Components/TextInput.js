import React, { 
	// useState, 
	// useEffect, 
} from 'react';

export default function TextInput(props) { 

	return (
		<input
			className={`input-field ${props.rounded && 'rounded'} ${props.className}`}
			value={props.value}
			placeholder={props.placeholder}
			onChange={props.onChange}
		/>
	)	
}