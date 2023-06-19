import axios from "axios";

//Criar uma instância do Axios com a baseURL
const api = axios.create({

    baseURL: 'https://api.weatherapi.com/v1/forecast.json?days=3&aqi=no&alerts=no&lang=pt&key=6dc397328dea4991b1e175154232205&q=Campinas',
    
});

/*
//Adicionar um interceptor para todas as requisições
api.interceptors.request.use(async config => {
    
    // Adicionar a chave de API á URL
    const apiKey = ``;

    if(apiKey){
        api.defaults.headers.authorization = `Bearer ${apiKey}`
    }

    return config;
});
*/

export default api;



 