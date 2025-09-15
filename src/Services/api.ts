import axios  from 'axios';

const api = axios.create({
    baseURL: 'https://round5-safarnia.huma-volve.com/api/'
});
export default api ;