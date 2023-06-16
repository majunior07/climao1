import axios from "axios";

//Criar uma instância do Axios com a baseURL
const api = axios.create({
<<<<<<< HEAD
    baseURL: 'http://api.weatherapi.com/v1/forecast.json?key=6dc397328dea4991b1e175154232205&days=6&aqi=no&alerts=no&lang=pt&q=Campinas',
});
/*
//Adicionar um interceptor para todas as requisições
api.interceptors.request.use((config) => {
    // Adicionar a chave de API á URL
    config.url += `?key=6dc397328dea4991b1e175154232205&days=3&aqi=no&alerts=no&lang=pt`;

    return config;
});
*/
=======
    baseURL: 'http://api.weatherapi.com/v1/forecast.json?key=6dc397328dea4991b1e175154232205&days=3&aqi=no&alerts=no&lang=pt',
});

//Adicionar um interceptor para todas as requisições
api.interceptors.request.use((config) => {
    // Adicionar a chave de API á URL
    //config.url += `?key=6dc397328dea4991b1e175154232205&days=3&aqi=no&alerts=no&lang=pt`;
    return config;
});

>>>>>>> 8acc734716a88712a3f86fec2f7177852555e025

export default api;



 