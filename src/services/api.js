import axios from "axios";

const api = "http://www.weatherapi.com";

function getClima(){
    axios.get(api)
    .then(response => {
        console.log(response)
    })
    .catch(error=> console.log(error))
}

getClima();

export default api;