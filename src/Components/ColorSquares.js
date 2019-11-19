import React, { 
	useState, 
	// useEffect, 
} from 'react';
import PropTypes from 'prop-types';
import { Plus, X } from 'react-feather';

export default function ColorSquares (props) {
	
	let squares = props.colors.map((color, index) => 
		<div
			key={index} 
			className={`color-square clickable centered ${props.selected === index && 'selected'}`} 
			style={{ background: color }}
			onClick={() => props.onSelect(index)}
		>	
			{props.selected === index && (
				<X 
					color='#ccc' 
					size={30}
					onClick={(e) => props.onDelete(e, index)}
				/>
			)}
		</div>	
	);

	return (
		<div className='flex'>
			{squares}
			<div
				className='color-square add-color-square clickable centered'
				onClick={props.onAdd}
			>	
				<Plus size={30}/>
			</div>
		</div>
	)
}

ColorSquares.propTypes = {
	colors: PropTypes.array,
	onSelect: PropTypes.func,
	onAdd: PropTypes.func,
	onDelete: PropTypes.func,
	selected: PropTypes.number
}

ColorSquares.defaultProps = {
	colors: [],
	onSelect: () => {},
	onAdd: () => {},
	onDelete: () => {},
	selected: 0
}