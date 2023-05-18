import styles from "./Header.module.css";
import logo from "../../img/LOGO.png";
import Busca from "../../img/Busca.png";

function Header(){
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
                <input placeholder="Buscar cidade" className={styles.input}>
                </input>
                <img className={styles.desBusca} src={Busca}></img>
            </div>
        </div>
    );
}

export default Header;