import React, { 
	// useState, 
	// useEffect, 
} from 'react';
import PropTypes from 'prop-types';

export default function PillBtn(props) { 

	return (
		<button 
			type={props.type}
			className={`pill-btn body-text ${props.className} ${props.left && 'left'}`}
			style={{ background: props.background }}
			disabled={props.disabled}
			onClick={props.onClick}
		>
			{props.text}
		</button>
	)	
}

PillBtn.propTypes = {
	className: PropTypes.string,
	text: PropTypes.node,
	type: PropTypes.string,
	background: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	left: PropTypes.bool,
}

PillBtn.defaultProps = {
	className: '',
	text: 'text',
	type: 'button',
	onClick: () => {},
	disabled: false,
	left: false,
	background: '#EF2626'
}