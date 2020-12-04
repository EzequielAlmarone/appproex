import axios from 'axios';

const api = axios.create({
    baseURL: 'https://reciclanavirai-api.herokuapp.com/api'
    //baseURL: 'http://192.168.137.162:8080/api'
    //baseURL: 'http://192.168.0.109:8080/api'
});
export default api;




