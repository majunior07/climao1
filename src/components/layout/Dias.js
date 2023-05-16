import styles from "./Dias.module.css";

import minima_b from "../../img/minima_b.png";
import maxima_b from "../../img/maxima_b.png";


function Dias(props){
    return(
      <div className= {`${styles.externa} ${styles[props.background]}`} >
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
            {props.imgClima}
            <span className={styles.ensolarado}>{props.clima}</span>
        </div>
        <div className={styles.temperatura}>
            <div className={styles.temperaturaCima}>
                {props.imgMin}
                <span className={styles.min}>Min.</span>
                <span className={styles.minNumero}>{props.min}</span>
            </div>
            <div className={styles.temperaturaBaixo}>
                {props.imgMax}
                <span className={styles.max}>Max.</span>
                <span className={styles.maxNumero}>{props.max}</span>
            </div>
        </div>
      </div>
    );
}

export default Dias;