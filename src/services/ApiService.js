import { ednaApiAxios, ednaAuthAxios } from '../utils/Axios';


const ApiService = {
	login({ username, password }) {
		const method = 'POST';
		const url = '/users/login';
		let data = { username, password }

		return this.makeRequest({ method, url, data })
	},

	async makeRequest(requestData = {}) {
		let res = await ednaAuthAxios(requestData);
		return res.data;
	},

	async makeAuthorizedRequest(requestData = {}) {
		let res = await ednaApiAxios({
			...requestData
			// add headers
		});
		return res.data;
	}
}

export default ApiService;