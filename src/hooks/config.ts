import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '260644b39772a760e055ae0f6b682044',
  },
});

export default API;
