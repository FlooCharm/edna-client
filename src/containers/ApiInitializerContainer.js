import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ednaApiAxios } from '../utils/Axios.js';

import { clearSession } from '../actions/AuthActions';

export default function ApiInitializerContainer (props) {
	const accessToken = useSelector(state => state.Auth.access_token)
	const dispatch = useDispatch()

	useEffect(() => {
		if(accessToken){
			ednaApiAxios.interceptors.request.use(request => {
				request.headers['Authorization'] = `Bearer ${accessToken}`;
				return request;
			})
		}
		ednaApiAxios.interceptors.response.use(response => response, async error => {
			const status = error.response ? error.response.status : null;
			if (status === 401) {
				await dispatch(clearSession());
				return ednaApiAxios(error.config);
			}
			return Promise.reject(error);
		});
	}, [accessToken])

	return (props.children);
}