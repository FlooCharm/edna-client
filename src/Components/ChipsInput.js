import React, { 
	useState, 
} from 'react';
import Chips, { Chip, theme } from 'react-chips';
import PropTypes from 'prop-types';

export default function ChipsInput (props) {
	const theme = {
		chipsContainer: `chips-container width60 ${props.chips.length && 'no-padding-vertical'}`,
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
				value={props.chips}
				theme={theme}
				chipTheme={chipTheme}
				placeholder={props.placeholder}
				onChange={props.onChipsChange}
				suggestions={['some', 'chips', 'stored', 'in', 'redux T_T']}
				alwaysRenderSuggestions
				uniqueChips
				createChipKeys={['Enter']}
			/>
		</div>
	)
}

ChipsInput.propTypes = {
	chips: PropTypes.array,
	placeholder: PropTypes.string,
	onChipsChange: PropTypes.func,
}

ChipsInput.defaultProps = {
	chips: [],
	placeholder: 'placeholder',
	onChipsChange () {}
}