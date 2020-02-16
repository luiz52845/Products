import axios from 'axios'

const api = axios.create({ baseURL: 'https://luizfernandes-api-nodejs.herokuapp.com/api' });

export default api;