import React, { 
	// useState, 
	// useEffect, 
} from 'react';

import PropTypes from 'prop-types';

import ManSilhouette from '../Components/ManSilhouette';
import WomanSilhouette from '../Components/WomanSilhouette';
import BoySilhouette from '../Components/BoySilhouette';
import GirlSilhouette from '../Components/GirlSilhouette';
import BabySilhouette from '../Components/BabySilhouette';

const HeroSuit = React.forwardRef((props, ref) => {
	switch (props.wearer) {
		case 0:
			return (
				<WomanSilhouette
					ref={ref}
					colors={props.colors}
					onClick={props.onClick}
				/>
			);
		case 1:
			return (
				<ManSilhouette
					ref={ref}
					colors={props.colors}
					onClick={props.onClick}
				/>
			);
		case 2:
			return (
				<GirlSilhouette
					ref={ref}
					colors={props.colors}
					onClick={props.onClick}
				/>
			);
		case 3:
			return (
				<BoySilhouette
					ref={ref}
					colors={props.colors}
					onClick={props.onClick}
				/>
			);
		case 4:
			return (
				<BabySilhouette
					ref={ref}
					colors={props.colors}
					onClick={props.onClick}
				/>
			);
		default:
			return null;
	}
})

export default HeroSuit;

HeroSuit.propTypes = {
	colors: PropTypes.object,
	onClick: PropTypes.func,
}

HeroSuit.defaultProps = {
	colors: {},
	onClick () {}
}