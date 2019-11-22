import React, { 
	useState, 
	// useEffect, 
} from 'react';
import PropTypes from 'prop-types';
import { Plus, X, Check } from 'react-feather';

export default function ColorSquares (props) {
	
	let squares = props.colors.map((color, index) => 
		<div
			key={index} 
			className={`color-square clickable centered ${props.selected === index && 'selected'}`} 
			style={{ background: color }}
			onClick={() => props.onSelect(index)}
		>	
			{props.selected === index && !props.disableEdit && (
				<X 
					color='#ccc' 
					size={30}
					onClick={(e) => props.onDelete(e, index)}
				/>
			)}
			{props.disableEdit && (
				<Check 
					color='#ccc' 
					size={30}
				/>	
			)}
		</div>	
	);

	return (
		<div className='flex'>
			{squares}
			{(!props.disableEdit) && props.colors.length < 4 && (
				<div
					className='color-square add-color-square clickable centered'
					onClick={props.onAdd}
				>	
					<Plus size={30}/>
				</div>
			)}
		</div>
	)
}

ColorSquares.propTypes = {
	colors: PropTypes.array,
	onSelect: PropTypes.func,
	onAdd: PropTypes.func,
	onDelete: PropTypes.func,
	selected: PropTypes.number,
	disableEdit: PropTypes.bool
}

ColorSquares.defaultProps = {
	colors: [],
	onSelect: () => {},
	onAdd: () => {},
	onDelete: () => {},
	selected: 0,
	disableEdit: false
}