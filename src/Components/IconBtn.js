import React, { 
	// useState, 
	// useEffect, 
} from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';

export default function IconBtn(props) { 
	const IconTag = Icon[props.icon];

	return (
		<button 
			type={props.type}
			className={`icon-btn body-text ${props.className}`}
			style={{
				background: props.background
			}}
			disabled={props.disabled}
			onClick={props.onClick}
		>
			<IconTag />
		</button>
	)	
}

IconBtn.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
	type: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	icon: PropTypes.string,
	background: PropTypes.string,
}

IconBtn.defaultProps = {
	className: '',
	text: 'text',
	type: 'button',
	onClick: () => {},
	disabled: false,
	icon: 'Camera',
	background: '#EF2626',
}