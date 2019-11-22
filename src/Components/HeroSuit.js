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

export default function HeroSuit(props) { 
	switch (props.wearer) {
		case 'hombre':
			return (
				<ManSilhouette 
					colors={props.colors}
					onClick={props.onClick}
				/>
			);
		case 'mujer':
			return (
				<WomanSilhouette 
					colors={props.colors}
					onClick={props.onClick}
				/>
			);
		case 'niño':
			return (
				<BoySilhouette 
					colors={props.colors}
					onClick={props.onClick}
				/>
			);
		case 'niña':
			return (
				<GirlSilhouette 
					colors={props.colors}
					onClick={props.onClick}
				/>
			);
		case 'bebe':
			return (
				<BabySilhouette 
					colors={props.colors}
					onClick={props.onClick}
				/>
			);
		default:
			return null;
	}
}

HeroSuit.propTypes = {
	colors: PropTypes.object,
	onClick: PropTypes.func,
}

HeroSuit.defaultProps = {
	colors: {},
	onClick () {}
}