import React, { 
	// useState, 
} from 'react';
import Chips from 'react-chips';
import PropTypes from 'prop-types';

export default function ChipsInput (props) {
	const theme = {
		chipsContainer: `chips-container width60 ${props.value.length && 'no-padding-vertical'}`,
		container: 'flex1',
		input: 'input-field black-bg transparent-bg full-width no-padding',
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
		<div>
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
}

ChipsInput.defaultProps = {
	value: [],
	placeholder: 'placeholder',
	onChange () {}
}