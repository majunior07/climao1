import styles from "./climao.module.css";

function Climao(){
    return(
        <div className={styles.climao}>
            <input className={styles.input} placeholder="Buscar cidade">
                
            </input>
        </div>
    );
}

export default Climao;