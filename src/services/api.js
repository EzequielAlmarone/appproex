import axios from 'axios';

const api = axios.create({
    //baseURL: 'https://reciclanavirai.herokuapp.com/api'  // conexão ao server do heroku
    //baseURL: 'http://192.168.137.162:8080/api'  // ip conexão rede usina conexão ao server local
   // baseURL: 'http://192.168.0.109:8080/api' // ip de casa
   baseURL: 'http://192.168.2.163:8080/api' 
});

export default api;

