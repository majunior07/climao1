import styles from "./Header.module.css";

function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.divUl}>
                <ul className={styles.divUl}>
                    <li>
                        <h1>Logo</h1>
                    </li>
                    <li>
                        <h1>CLIMÃO.COM</h1>
                    </li>
                </ul>
            </div>         
            <div>
                <input placeholder="Buscar cidade" className={styles.input}></input>
            </div>
        </div>
    );
}

export default Header;