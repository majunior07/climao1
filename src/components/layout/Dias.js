import styles from "./Dias.module.css";

import minima_b from "../../img/minima_b.png";
import maxima_b from "../../img/maxima_b.png";


function Dias({dia1, dia2, imgClima, clima, imgMin, min, imgMax, max}){
    return(
      <div className={styles.externa}>
        <div className={styles.data}>
            <ul>
                <li>
                    <p className={styles.dia}>
                        {dia1}
                    </p>
                </li>
                <li>
                    <p className={styles.dia2}>
                        {dia2}
                    </p>
                </li>
            </ul>
        </div>
        <div className={styles.tempo}>
            {imgClima}
            <span className={styles.ensolarado}>{clima}</span>
        </div>
        <div className={styles.temperatura}>
            <div className={styles.temperaturaCima}>
                {imgMin}
                <span className={styles.min}>Min.</span>
                <span className={styles.minNumero}>{min}</span>
            </div>
            <div className={styles.temperaturaBaixo}>
                {imgMax}
                <span className={styles.max}>Max.</span>
                <span className={styles.maxNumero}>{max}</span>
            </div>
        </div>
      </div>
    );
}

export default Dias;