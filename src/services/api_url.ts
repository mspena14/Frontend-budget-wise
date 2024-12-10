import axios from 'axios';

const api = axios.create({
  baseURL: 'https://chilly-yoko-mspena14-2193922e.koyeb.app/api',
});

export default api;
