import React, { 
	useState,
	//useEffect, 
	useReducer 
} from 'react';
import { useDispatch } from 'react-redux';

import { useHistory } from "react-router-dom";
import TextInput from '../Components/TextInput';
import PillBtn from '../Components/PillBtn';
import BubbleText from '../Components/BubbleText';

import { login } from '../actions/AuthActions';


export default function LoginRoute() { 
	const dispatch = useDispatch();
	const initialState = {
		username: '',
		password: ''
	};
	
	const history = useHistory();
	const [credentials, dispatchCredentials] = useReducer(reducer, initialState);
	const [isLoading, setLoading] = useState(false);

	function reducer(state, action) {
		switch (action.type) {
			case 'SET_STATE':
				return {
					...state,
					[action.prop]: action.payload
				}
			default:
				break;
		}
	}

	const sendCredentials = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			await dispatch(login(credentials))
			setLoading(false);
			history.push('/heroes');
			alert('YAY! You logged in!');
		} catch (e) {
			alert('Welp u failed');
			setLoading(false);
		}
	}

	const onChangeText = ({ value }, prop) => {
		dispatchCredentials({ type: 'SET_STATE', payload: value, prop});
	}

	return (
		<div className="full-container black-bg centered">
			<div className='flex flex05 justify-content-center big-padding-left'>
				<img 
					width='80%'
					src="assets/edna.svg" 
				/>
			</div>
			<form className='flex flex1 column'>
				<h1>Login!</h1>
				<div className='bubble-text'>
					<BubbleText 
						text='Introduce el usuario'
					/>
				</div>
				<div className='flex justify-content-center'>
					<TextInput
						className='margin-bottom reversed-margin-top black-bg width60'
						placeholder='Usuario'
						onChange={({ target }) => onChangeText(target, 'username')}
						value={credentials.username}
					/>
				</div>
				<div className='bubble-text'>
					<BubbleText 
						text='Introduce la contraseña'
						isPass
					/>
				</div>
				<div className='flex justify-content-center'>
					<TextInput
						className='big-margin-bottom reversed-margin-top black-bg width60'
						type='password'
						placeholder='Contraseña'
						onChange={({ target }) => onChangeText(target, 'password')}
						value={credentials.password}
					/>
				</div>
				<div className='flex justify-content-flex-end'>
					<PillBtn 
						disabled={!credentials.username || !credentials.password || isLoading}
						type='submit'
						className='big-text'
						onClick={sendCredentials}
						text={isLoading ? 'INGRESANDO...' :'INGRESAR'}
					/>
				</div>
				{/*<Link
					to='/signup'
				>
					Regístrate
				</Link>*/}
			</form>
		</div>
	)	
}