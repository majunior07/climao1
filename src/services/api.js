import axios from "axios";

const REACT_APP_CLIMAO_KEY = `6dc397328dea4991b1e175154232205`

//Criar uma instância do Axios com a baseURL
const api = axios.create({


    baseURL: 'http://api.weatherapi.com/v1/',

    headers: {
    Authorization: `Bearer ${REACT_APP_CLIMAO_KEY}`
    
    },
    
});


export default api;



 