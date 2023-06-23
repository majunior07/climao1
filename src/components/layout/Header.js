import { useState, useEffect } from "react";

import axios from "axios";

import styles from "./Header.module.css";
import logo from "../../img/LOGO.png";
import Busca from "../../img/Busca.png";
import api from "../../services/api";

import Loading from "../../components/layout/loading";

//import {REACT_APP_CLIMAO_KEY} from '../../key';

function Header({setClima, setLoading}){


    const [city, setCity] = useState('');
/*
    const api = {
        baseURL: 'http://api.weatherapi.com/v1/',
        key: '6dc397328dea4991b1e175154232205',
    };
*/

    //const url = `http://api.weatherapi.com/v1/forecast.json?key=6dc397328dea4991b1e175154232205&&days=3&aqi=no&alerts=no&lang=pt&q=${city}`;


    const handleChange = (e) => {
        setCity(e.target.value)
    }

    

    async function handleSearch() {      

        await api.get(`${api.baseURL}forecast.json?days=3&&aqi=no&alerts=no&lang=pt&q=${city}&key=${process.env.REACT_APP_CLIMAO_KEY}`)
        .then((response) => {            
            console.log(response.data);
            setClima(response.data);  
            
        })
        .catch(error => console.log(error));       
        
        setCity('')
    };



    return(
        
        <div className={styles.header}>
            <div className={styles.divUl}>
                <ul className={styles.divUl}>
                    <li>
                        <img src={logo}></img>
                    </li>
                </ul>
            </div>         
            <div className={styles.divInput}>
                <input 
                    onChange={handleChange}
                    placeholder="Buscar cidade" 
                    className={styles.input} 
                    value={city}>
                </input>
                <img className={styles.desBusca} src={Busca} onClick={handleSearch}></img>
            </div>
                                
        </div>
    );
}

export default Header;