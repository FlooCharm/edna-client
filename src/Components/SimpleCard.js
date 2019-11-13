import React, { 
	// useState, 
	// useEffect, 
} from 'react';

export default function SimpleCard(props) { 

	return (
		<div className={`simple-card ${props.className}`}>
			{props.children}
		</div>
	)	
}