import React, { 
	// useState, 
} from 'react';
import Chips from 'react-chips';
import PropTypes from 'prop-types';

export default function ChipsInput (props) {
	const theme = {
		chipsContainer: `chips-container ${props.value.length && 'no-padding-vertical'} ${props.blackBg &&'black-bg'} ${props.containerClassName}`,
		container: 'flex1',
		input: `input-field ${props.blackBg &&'black-bg'} transparent-bg full-width no-padding`,
		suggestionsList: 'suggestions-list',
		suggestion: 'suggestion',
		suggestionHighlighted: 'suggestion-highlighted'
	}
	const chipTheme = {
		chip: 'chip',
		chipSelected: 'chip-selected',
		chipRemove: 'chip-remove'
	}

	return (
		<div className={`${props.className}`}>
			<Chips
				value={props.value}
				theme={theme}
				chipTheme={chipTheme}
				placeholder={props.placeholder}
				onChange={props.onChange}
				suggestions={['some', 'chips', 'stored', 'in', 'redux T_T']}
				alwaysRenderSuggestions
				uniqueChips
				createChipKeys={['Enter']}
			/>
		</div>
	)
}

ChipsInput.propTypes = {
	value: PropTypes.array,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	blackBg: PropTypes.bool,
	className: PropTypes.string,
	containerClassName: PropTypes.string
}

ChipsInput.defaultProps = {
	value: [],
	placeholder: 'placeholder',
	onChange () {},
	blackBg: true,
	className: '',
	containerClassName: '',
}