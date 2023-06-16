import axios from "axios";

//Criar uma instância do Axios com a baseURL
const api = axios.create({
    baseURL: 'http://api.weatherapi.com/v1/forecast.json?key=6dc397328dea4991b1e175154232205&days=3&aqi=no&alerts=no&lang=pt',
});

//Adicionar um interceptor para todas as requisições
api.interceptors.request.use((config) => {
    // Adicionar a chave de API á URL
    //config.url += `?key=6dc397328dea4991b1e175154232205&days=3&aqi=no&alerts=no&lang=pt`;
    console.log(config)
    config.headers.apiKey =`?key=6dc397328dea4991b1e175154232205`
    return config;
});


export default api;



 