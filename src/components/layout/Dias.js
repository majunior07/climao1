import styles from "./Dias.module.css";

import minima_b from "../../img/minima_b.png";
import maxima_b from "../../img/maxima_b.png";
import tempestade_b from "../../img/tempestade_b.png";


function Dias(props){
    return(
      <div className={styles.externa}>
        <div className={styles.data}>
            <ul>
                <li>
                    <p className={styles.dia}>
                        {props.dia1}
                    </p>
                </li>
                <li>
                    <p className={styles.dia2}>
                        {props.dia2}
                    </p>
                </li>
            </ul>
        </div>
        <div className={styles.tempo}>
            <div>{props.desClima}</div>
            <span className={styles.ensolarado}>{props.clima}</span>
        </div>
        <div className={styles.temperatura}>
            <div className={styles.temperaturaCima}>
                <img className={styles.desMinimo} src={minima_b} ></img>
                <span className={styles.min}>Min.</span>
                <span className={styles.minNumero}>{props.min}</span>
            </div>
            <div className={styles.temperaturaBaixo}>
                <img className={styles.desMaximo} src={maxima_b} ></img>
                <span>Max.</span>
                <span>{props.max}</span>
            </div>
        </div>
      </div>
    );
}

export default Dias;