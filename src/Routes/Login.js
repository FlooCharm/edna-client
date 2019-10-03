import React, { useState, useEffect } from 'react';

export default function Login() { 
	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');

	return (
		<div>
			<input 
				type="text"
				value={user}
			/>
			<input 
				type="text"
				value={pass}
			/>
			<button>
				CUAC
			</button>
		</div>
	)	
}