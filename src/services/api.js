import axios from "axios";
//import {REACT_APP_CLIMAO_KEY} from '../key';

//Criar uma instância do Axios com a baseURL
const api = axios.create({

    baseURL: `http://api.weatherapi.com/v1/`,
    
    
});


export default api;



