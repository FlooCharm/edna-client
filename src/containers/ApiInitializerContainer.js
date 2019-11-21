import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { ednaApiAxios } from '../utils/Axios.js';

import { clearSession, setHeaders } from '../actions/AuthActions';

export default function ApiInitializerContainer (props) {
	const accessToken = useSelector(state => state.Auth.access_token)
	const dispatch = useDispatch()

	useEffect(() => {
		ednaApiAxios.interceptors.request.use(request => {
			request.headers['Authorization'] = `Bearer ${accessToken}`;
			return request;
		});
		ednaApiAxios.interceptors.response.use(response => response, async error => {
			const status = error.response ? error.response.status : null;
			if (status === 401) {
				await dispatch(clearSession());
			} else {}
			return Promise.reject(error);
		});
		dispatch(setHeaders())
	}, [accessToken])

	return (props.children);
}