import styles from "./Header.module.css";

function Header(){
    return(
        <div className={styles.header}>
            <ul className={styles.header}>
                <li>
                    <h1>Logo</h1>
                </li>
                <li>
                    <h1>CLIMÃO.COM</h1>
                </li>
            </ul>
        </div>
    );
}

export default Header;