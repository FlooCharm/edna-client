import React, { 
	// useState, 
	// useEffect, 
} from 'react';
import PropTypes from 'prop-types';

export default function SimpleCard(props) { 

	return (
		<div 
			className={`simple-card ${props.className}`}
			onClick={props.onClick}
		>
			{props.children}
		</div>
	)	
}

SimpleCard.propTypes = {
	className: PropTypes.string,
	children: PropTypes.element,
	onClick: PropTypes.func,
}

SimpleCard.defaultProps = {
	className: '',
	onClick () {},
	children: <></>,
}