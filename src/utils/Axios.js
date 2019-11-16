import axios from 'axios';

const ednaApiAxios = axios.create();
const ednaAuthAxios = axios.create();

ednaApiAxios.defaults.headers.common['Content-Type'] = 'application/json';
ednaAuthAxios.defaults.headers.common['Content-Type'] = 'application/json';
//Allow the use of array parameter with key value

ednaApiAxios.defaults.baseURL = 'https://edna-api.herokuapp.com';
ednaAuthAxios.defaults.baseURL = 'https://edna-api.herokuapp.com';

export { ednaApiAxios, ednaAuthAxios };
