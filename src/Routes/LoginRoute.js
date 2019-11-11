import React, { 
	//useState, 
	//useEffect, 
	useReducer 
} from 'react';

import { Link, useHistory } from "react-router-dom";

export default function LoginRoute() { 
	const initialState = {
		user: '',
		pass: ''
	};

	const history = useHistory();

	const [credentials, dispatchCredentials] = useReducer(reducer, initialState);

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

	const login = async () => {
		let { user, pass } = credentials;
		try {
			// await fetch('http://localhost:3007/users/login', {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json'
			// 	},
			// 	body: JSON.stringify({
			// 		username: user,
			// 		password: pass
			// 	})
			// });
			history.push('/heroes');
			alert('YAY! You logged in!');
		} catch (e) {
			alert('Welp u failed');
		}
	}

	const onChangeText = ({ value }, prop) => {
		dispatchCredentials({ type: 'SET_STATE', payload: value, prop});
	}

	return (
		<div className="padded">
			<h1>Login!</h1>
			<input
				type="text"
				placeholder='Username'
				onChange={({ target }) => onChangeText(target, 'user')}
				value={credentials.user}
			/>
			<br/>
			<br/>
			<input 
				type="pass"
				placeholder='Password'
				onChange={({ target }) => onChangeText(target, 'pass')}
				value={credentials.pass}
			/>
			<br/>
			<br/>
			<button onClick={login}>
				Iniciar Sesión
			</button>
			<Link
				to='/signup'
			>
				Regístrate
			</Link>
		</div>
	)	
}