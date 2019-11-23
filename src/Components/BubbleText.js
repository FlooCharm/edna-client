import React, { 
	// useState, 
	// useEffect, 
} from 'react';
import PropTypes from 'prop-types';

export default function BubbleText(props) { 
	return (
		<svg className='bubble-text' width={`${props.isPass ? '370': '333'}`} height="125" viewBox={`0 0 ${props.isPass ? '370': '333'} 125`} fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M31 123.902C76.0612 131.996 97.7755 93.3399 103 73H64.7959C75.7673 98.5461 46.8367 117.579 31 123.902Z" fill="#EF2626"/>
			<g>
				<rect id="text-container" width={`${props.isPass ? '370': '333'}`} height="73" rx="36.5" fill="#EF2626"/>
				<text x="50%" y="31%" dominantBaseline="middle" textAnchor="middle" fontSize='2rem' fill="white">{props.text}</text>
			</g>
		</svg>
	)	
}

BubbleText.propTypes = {
	text: PropTypes.string,
	isPass: PropTypes.bool,
}

BubbleText.defaultProps = {
	text: '',
	isPass: false
}



