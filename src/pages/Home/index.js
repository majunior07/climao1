import styles from "./index.module.css";
import Header from "../../components/layout/Header";
import Dias from "../../components/layout/Dias";
import ensolarado_b from "../../img/ensolarado_b.png";
import tempestade_b from "../../img/tempestade_b.png";
import chuvoso_b from "../../img/chuvoso_b.png";
import nublado_b from "../../img/nublado_b.png";
import minima_b from "../../img/minima_b.png";
import maxima_b from "../../img/maxima_b.png";

function Home(){

    return( 
        <div className={styles.home}>
            <Header/>
            <div className={styles.central}>
                <div className={styles.esquerda}>
                    <div className={styles.esquerdaCima}>
                        esquerda cima
                    </div>
                    <div className={styles.esquerdaMeio}>
                        esquera meio
                    </div>
                    <div className={styles.esquerdaBaixo}>
                        esquera baixo
                    </div>
                </div>
                <div className={styles.direita}>
                    <Dias 
                        dia1="Sexta" 
                        dia2="11/10/2019" 
                        imgClima={<img className={styles.imgEnsolarado} src={ensolarado_b} ></img>} 
                        clima="Ensolarado"
                        imgMin={<img src={minima_b}></img>}                         
                        min="15°" 
                        imgMax={<img src={maxima_b}></img>}
                        max="25°"
                    />
                    <Dias 
                        dia1="Sábado" 
                        dia2="12/10/2019" 
                        imgClima={<img className={styles.imgEnsolarado} src={ensolarado_b}></img>} 
                        clima="Ensolarado"  
                        imgMin={<img src={minima_b}></img>}                      
                        min="18°" 
                        imgMax={<img src={maxima_b}></img>}
                        max="31°"
                    />
                    <Dias 
                        dia1="Domingo" 
                        dia2="13/10/2019" 
                        imgClima={<img className={styles.imgTempestade} src={tempestade_b}></img>} 
                        clima="Tempestade"    
                        imgMin={<img src={minima_b}></img>}                     
                        min="13°" 
                        imgMax={<img src={maxima_b}></img>}
                        max="23°"
                    />
                    <Dias 
                        dia1="Segunda" 
                        dia2="14/10/2019" 
                        imgClima={<img className={styles.imgChuvoso} src={chuvoso_b}></img>} 
                        clima="Chuvoso"
                        imgMin={<img src={minima_b}></img>}
                        min="15°" 
                        imgMax={<img src={maxima_b}></img>}
                        max="24°"
                    />
                    <Dias 
                        dia1="Terça" 
                        dia2="15/10/2019" 
                        imgClima={<img className={styles.imgNublado} src={nublado_b}></img>} 
                        clima="Nublado" 
                        imgMin={<img src={minima_b}></img>}                        
                        min="15°" 
                        imgMax={<img src={maxima_b}></img>}
                        max="24°"
                    />
                </div>
            </div>


        </div>
    );
} 

export default Home;