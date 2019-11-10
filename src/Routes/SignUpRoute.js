import React, { 
	// useState, 
	// useEffect, 
	useReducer 
} from 'react';

import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function SignUpRoute() { 
	const initialState = {
		newUser: '',
		newPass: '',
		email: ''
	};

	const [credentials, dispatchCredentials] = useReducer(reducer, initialState);
	const history = useHistory();

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


	const onChangeText = ({ value }, prop) => {
		dispatchCredentials({ type: 'SET_STATE', payload: value, prop});
	}

	const signUp = async () => {
		let { newUser, email, newPass } = credentials;
		try {
			await fetch('http://localhost:3007/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username: newUser,
					password: newPass,
					email
				})
			});
			alert('YAY! User created! Now login!');
			history.push('/');
		} catch (e) {
			alert('Welp, something bad happened T_T');
		}
	}

	return (
		<div className="container">
			<h1>Sign Up!</h1>
			<input
				type="text"
				placeholder='Username'
				onChange={({ target }) => onChangeText(target, 'newUser')}
				value={credentials.user}
			/>
			<br/>
			<br/>
			<input 
				type="email"
				placeholder='Email'
				onChange={({ target }) => onChangeText(target, 'email')}
				value={credentials.email}
			/>
			<br/>
			<br/>
			<input 
				type="password"
				placeholder='Password'
				onChange={({ target }) => onChangeText(target, 'newPass')}
				value={credentials.pass}
			/>
			<br/>
			<br/>
			<button
				onClick={signUp}
			>
				Regístrate
			</button>
			<Link
				to='/'
			>
				Inicia Sesión
			</Link>
		</div>
	)	
}