import styles from "./Dias.module.css";

function Dias(){
    return(
      <div className={styles.externa}>
        <div className={styles.data}>
            <ul>
                <li>
                    <p>
                        Sexta
                    </p>
                </li>
                <li>
                    <p>
                        11/10/2019
                    </p>
                </li>
            </ul>
        </div>
      </div>
    );
}

export default Dias;