import axios from "axios";

//Criar uma instância do Axios com a baseURL
const api = axios.create({

    baseURL: 'http://api.weatherapi.com/v1/',
    //key: '6dc397328dea4991b1e175154232205',
    
});

export default api;



 