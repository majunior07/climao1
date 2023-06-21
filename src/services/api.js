import axios from "axios";
//import {REACT_APP_CLIMAO_KEY} from '../key';

//Criar uma instância do Axios com a baseURL
const api = axios.create({

    baseURL: 'http://api.weatherapi.com/v1/',
    
});

/*
api.interceptors.request.use(function (config) {
    
    config.headers.Authorization =  `Bearer ${REACT_APP_CLIMAO_KEY}`

    console.log('oi',REACT_APP_CLIMAO_KEY);
        
    return config;

  }, function (error) {

    console.log(error);

    return Promise.reject(error);
  });
*/

export default api;



