import React, { 
	// useState, 
	// useEffect, 
} from 'react';

import ManSilhouette from '../Components/ManSilhouette';
import WomanSilhouette from '../Components/WomanSilhouette';
import BoySilhouette from '../Components/BoySilhouette';
import GirlSilhouette from '../Components/GirlSilhouette';
import BabySilhouette from '../Components/BabySilhouette';

export default function HeroSuit(props) { 
	switch (props.wearer) {
		case 'mujer':
			return <ManSilhouette />
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