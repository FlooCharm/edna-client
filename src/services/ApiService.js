import { ednaApiAxios, ednaAuthAxios } from '../utils/Axios';


const ApiService = {
	login(credentials) {
		const method = 'POST';
		const url = '/users/login';
		let data = credentials;

		return this.makeRequest({ method, url, data })
	},

	// superheroes
	getSuperheroes() {
		const method = 'GET';
		const url = '/superheroes';

		return this.makeAuthorizedRequest({ method, url })
	},
	getSuperhero(id) {
		const method = 'GET';
		const url = `/superheroes/${id}`;

		return this.makeAuthorizedRequest({ method, url })
	},
	createSuperhero(data) {
		const method = 'POST';
		const url = '/superheroes';

		return this.makeAuthorizedRequest({ method, url, data })
	},
	updateSuperhero(id, data) {
		const method = 'PUT';
		const url = `/superheroes/${id}`;

		return this.makeAuthorizedRequest({ method, url, data })
	},
	deleteSuperhero(id) {
		const method = 'DELETE';
		const url = `/superheroes/${id}`;

		return this.makeAuthorizedRequest({ method, url })
	},

	// suits
	getSuits() {
		const method = 'GET';
		const url = '/suits';

		return this.makeAuthorizedRequest({ method, url })
	},
	getSuitsBySuperhero(id) {
		const method = 'GET';
		const url = `/suits/superhero/${id}`;

		return this.makeAuthorizedRequest({ method, url })
	},
	getSuit(id) {
		const method = 'GET';
		const url = `/suits/${id}`;

		return this.makeAuthorizedRequest({ method, url })
	},
	createSuit(data) {
		const method = 'POST';
		const url = '/suits';

		return this.makeAuthorizedRequest({ method, url, data })
	},
	updateSuit(id, data) {
		const method = 'PUT';
		const url = `/suits/${id}`;

		return this.makeAuthorizedRequest({ method, url, data })
	},
	deleteSuit(id) {
		const method = 'DELETE';
		const url = `/suits/${id}`;

		return this.makeAuthorizedRequest({ method, url })
	},

	async makeRequest(requestData = {}) {
		let res = await ednaAuthAxios(requestData);
		return res.data;
	},

	async makeAuthorizedRequest(requestData = {}) {
		let res = await ednaApiAxios(requestData);
		return res.data;
	}
}

export default ApiService;