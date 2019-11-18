import React, { 
	// useState, 
} from 'react';
import PropTypes from 'prop-types';
import { SegmentedControl } from 'segmented-control'

export default function RadioTabs (props) {

	return (
		<SegmentedControl
			className={`radio-tabs ${props.className}`}
			name={props.name}
			options={props.options}
			setValue={props.onChange}
		/>
	)
}

RadioTabs.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string,
	options: PropTypes.array,
	onChange: PropTypes.func
}

RadioTabs.defaultProps = {
	className: '',
	name: '',
	options: [
		{ label: "One", value: "one", default: true },
		{ label: "Two", value: "two" },
		{ label: "Three", value: "three" },
		{ label: "Four", value: "four" }
	],
	onChange () {}
}