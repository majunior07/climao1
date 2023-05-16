import styles from "./index.module.css";
import Header from "../../components/layout/Header";
import Dias from "../../components/layout/Dias";
import ensolarado_b from "../../img/ensolarado_b.png";
import tempestade_b from "../../img/tempestade_b.png";
import chuvoso_b from "../../img/chuvoso_b.png";
import nublado_b from "../../img/nublado_b.png";
import minima_b from "../../img/minima_b.png";
import maxima_b from "../../img/maxima_b.png";
import localizacao from "../../img/localizacao.png";
import minima from "../../img/minima.png";
import maxima from "../../img/maxima.png";
import media from "../../img/media.png";
import nublado from "../../img/nublado.png";
import umidade from "../../img/umidade.png";
import velocidade_vento from "../../img/velocidade_vento.png";
import direcao_vento from "../../img/direcao_vento.png";

function Home(){

    return( 
        <div className={styles.home}>
            <Header/>
            <div className={styles.central}>
                <div className={styles.esquerda}>
                    <div className={styles.esquerdaCima}>
                        <div className={styles.esquerdaCimaEsquerda}>
                            <img className={styles.localizador} src={localizacao}></img>
                            <p>Campinas</p>
                        </div>
                            <p>Quin, 10 de outubro de 2019</p>
                        
                        <div className={styles.esquerdaCimaDireita}>
                            <div className={styles.minima}>
                                <img src={minima}></img>
                                <span>Min.</span>
                                <span>15°</span>
                            </div>
                            <div className={styles.maxima}>
                                <img src={maxima}></img>
                                <span>Max.</span>
                                <span>26°</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.esquerdaMeio}>
                        <div className={styles.esquerdaMeioEsquerda}>
                            <img src={media}></img>
                            <p>23°</p>
                            <p>Sensação térmica 22°</p>
                        </div>
                        <div>
                            <img src={nublado}></img>
                            <p>Nublado</p>
                        </div>
                    </div>
                    <div className={styles.esquerdaBaixo}>
                        <div>
                            <img src={umidade}></img>
                            <p>Umidade</p>
                            <p>66%</p>
                        </div>
                        <div>
                            <img src={velocidade_vento}></img>
                            <p>Velocidade do vento</p>
                            <p>23km/h</p>
                        </div>
                        <div>
                            <img src={velocidade_vento}></img>
                            <p>Direção do vento</p>
                            <p>ND</p>
                        </div>
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