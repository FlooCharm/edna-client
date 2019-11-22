import React, { 
	useState,
	useEffect 
} from 'react';
import PropTypes from 'prop-types';
import { SegmentedControl } from 'segmented-control'

export default function RadioTabs (props) {
	const [opts, setOpts] = useState(props.options);

	useEffect(() => {
		let newOpts = opts.map((item) => {
			if (item.value === props.selected)
				item.default = true;
			else
				item.default = false;
			return item;
		});
		props.onChange(props.selected);
		setOpts(newOpts);
	}, []);

	return (
		<SegmentedControl
			className={`radio-tabs ${props.className}`}
			name={props.name}
			options={opts}
			setValue={props.onChange}
		/>
	)
}

RadioTabs.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string,
	options: PropTypes.array,
	onChange: PropTypes.func,
	selected: PropTypes.node
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
	onChange () {},
	selected: ''
}