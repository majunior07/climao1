import axios from "axios";

<<<<<<< HEAD
const api = "http://api.openweathermap.org/data/2.5/weather?q=campinas,uk&APPID=24aed0ce608584b26ff622cfcd55c765";
=======
const api = "http://www.weatherapi.com";

function getClima(){
    axios.get(api)
    .then(response => {
        console.log(response)
    })
    .catch(error=> console.log(error))
}

getClima();
>>>>>>> 73829ba9c635483251762d6bced290714092d140

function getClima() {
    axios.get(api) 
        .then(response => {
            console.log(response)
        })  
        .catch(error => console.log(error))
    }

getClima();

 