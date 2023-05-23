import axios from "axios";

const api = "http://api.openweathermap.org/data/2.5/weather?q=campinas,uk&APPID=24aed0ce608584b26ff622cfcd55c765";

function getClima() {
    axios.get(api) 
        .then(response => {
            console.log(response)
        })  
        .catch(error => console.log(error))
    }

getClima();

 