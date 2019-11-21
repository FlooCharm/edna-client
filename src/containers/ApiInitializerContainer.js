import { useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { useHistory } from "react-router-dom";
import { ednaApiAxios } from '../utils/Axios.js';

import { clearSession } from '../actions/AuthActions';

export default function ApiInitializerContainer (props) {
	const accessToken = useSelector(state => state.Auth.access_token);
	const store = useStore();
	const dispatch = useDispatch();

	useEffect(() => {
		ednaApiAxios.interceptors.request.use(request => {
			request.headers['Authorization'] = `Bearer ${store.getState().Auth.access_token}`;
			return request;
		});
		ednaApiAxios.interceptors.response.use(response => response, async error => {
			const status = error.response ? error.response.status : null;
			if (status === 401) {
				await dispatch(clearSession());
			} else {}
			return Promise.reject(error);
		});
	}, [accessToken]);

	return (props.children);
}