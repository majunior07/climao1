import styles from "./Dias.module.css";
import ensoradado_b from "../../img/ensolarado_b.png";
import minima_b from "../../img/minima_b.png";
import maxima_b from "../../img/maxima_b.png";


function Dias(){
    return(
      <div className={styles.externa}>
        <div className={styles.data}>
            <ul>
                <li>
                    <p className={styles.dia}>
                        Sexta
                    </p>
                </li>
                <li>
                    <p className={styles.dia2}>
                        11/10/2019
                    </p>
                </li>
            </ul>
        </div>
        <div className={styles.tempo}>
            <img  className={styles.imgEnsolarado} src={ensoradado_b}></img>
            <span className={styles.ensolarado}>Ensolarado</span>
        </div>
        <div className={styles.temperatura}>
            <div className={styles.temperaturaCima}>
                <img src={minima_b} ></img>
                <span>Min.</span>
                <span>15°</span>
            </div>
            <div className={styles.temperaturaBaixo}>
                <img src={maxima_b} ></img>
                <span>Max.</span>
                <span>25°</span>
            </div>
        </div>
      </div>
    );
}

export default Dias;