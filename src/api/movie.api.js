import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://www.omdbapi.com/?apikey=e3fad09a&s=',
  timeout: 5000,
  headers: {
    'Access-Control-Allow-Origin':'*',
    'content-type': 'application/x-www-form-urlencoded',
  }
})
