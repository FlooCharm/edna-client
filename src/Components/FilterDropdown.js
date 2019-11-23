import React, { 
	// useState, 
	// useEffect, 
} from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { ChevronUp, ChevronDown, X } from 'react-feather';

export default function FilterDropdown(props) {
	
	const Arrow = (isUp) => {
		if (isUp)
			return (
				<div>
					{typeof props.value.value === 'number' && 
						<X
							onClick={props.onClear}
							className='clickable above'
							size={20}
							color='#fff'
						/>
					}
					<ChevronUp
						className='clickable'
						size={20}
						color='#fff'
					/>
				</div>
			);
		else
			return (
				<div>
					{typeof props.value.value === 'number' && 
						<X
							onClick={props.onClear}
							className='clickable above'
							size={20}
							color='#fff'
						/>
					}
					<ChevronDown
						className='clickable'
						size={20}
						color='#fff'
					/>
				</div>
			);
	}

	return (
		<Dropdown
			className='margin-right'
			controlClassName='dropdown'
			arrowClassName='dropdown-arrow'
			menuClassName='dropdown-menu'
			options={props.options} 
			placeholder={props.placeholder}
			arrowClosed={Arrow()}
			arrowOpen={Arrow(true)}
			value={props.value}
			onChange={props.onChange}
		/>
	);
}

FilterDropdown.propTypes = {
	placeholder: PropTypes.string,
	options: PropTypes.array,
	onChange: PropTypes.func,
	onClear: PropTypes.func,
}

FilterDropdown.defaultProps = {
	placeholder: 'Select an option',
	options: [],
	onChange () {},
	onClear () {}
}