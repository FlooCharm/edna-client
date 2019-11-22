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
		case 'mujer':
			return (
				<ManSilhouette 
					colors={props.colors}
					onClick={props.onClick}
				/>
			);
		case 'hombre':
			return <WomanSilhouette />
		case 'niño':
			return <BoySilhouette />
		case 'niña':
			return <GirlSilhouette />
		case 'bebe':
			return <BabySilhouette />
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