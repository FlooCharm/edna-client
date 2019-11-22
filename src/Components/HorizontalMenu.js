import React, { 
	useState,
	useEffect,
} from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { ChevronLeft, ChevronRight } from 'react-feather';

import PropTypes from 'prop-types';

export default function HorizontalMenu(props) {
	const [data, setData] = useState([]);

	useEffect(() => {
		const newData = props.renderData();
		setData(newData);
	}, [props.update.length]);

	const Arrow = (isLeft) => {
		if (isLeft)
			return (
				<ChevronLeft
					className='clickable'
					size={38}
					color='#EF2626'
				/>
			);
		else
			return (
				<ChevronRight
					className='clickable'
					size={38}
					color='#EF2626'
				/>
			);
	}

	return (
		<ScrollMenu
			data={data}
			arrowLeft={Arrow(true)}
			arrowRight={Arrow()}
			alignCenter={false}
		/>
	);
}

HorizontalMenu.propTypes = {
	renderData: PropTypes.func
}

HorizontalMenu.defaultProps = {
	renderData () {}
}