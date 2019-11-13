import React, { 
	// useState, 
	// useEffect, 
} from 'react';
import PropTypes from 'prop-types';

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

TextInput.propTypes = {
	className: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	rounded: PropTypes.bool
}

TextInput.defaultProps = {
	className: '',
	value: 'value',
	placeholder: 'placeholder',
	onChange: () => {},
	rounded: false
}