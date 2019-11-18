import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ednaApiAxios } from '../utils/Axios.js';

export default function ApiInitializerContainer (props) {
	const accessToken = useSelector(state => state.Auth.access_token)

	useEffect(() => {
		if(accessToken){
			ednaApiAxios.interceptors.request.use(request => {
				request.headers['Authorization'] = `Bearer ${accessToken}`;
				return request;
			})
		}
	}, [accessToken])

	return (props.children);
}