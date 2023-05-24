import { useState } from "react";

import axios from "axios";

import styles from "./Header.module.css";
import logo from "../../img/LOGO.png";
import Busca from "../../img/Busca.png";

function Header(){

    const [city, setCity] = useState('Belo Horizonte');

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    function handleSearch() {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=6dc397328dea4991b1e175154232205&q=${city}&lang=br`)
        .then((response) => {
            console.log(response.json)
        });       
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