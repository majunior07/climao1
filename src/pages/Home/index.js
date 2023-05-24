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

import api from "../../services/api";
import axios from "axios";

function Home(){

    function getClima(){
        axios.get(api)
        .then(response => {
            console.log(response)
        })
        .catch(error=> console.log(error))
    }
    
    getClima();

    return( 
        <div className={styles.home}>
            <Header/>
            <div className={styles.central}>
                <div className={styles.esquerda}>

                    <div className={styles.esquerdaCima}>       
                        <div className={styles.esquerdaCimaEsquerda}>
                            <img className={styles.localizador} src={localizacao}></img>
                            <div className={styles.cidadeData}>
                                <p className={styles.cidade}>Campinas</p>                            
                                <p className={styles.data}>Quin, 10 de outubro de 2019</p>
                            </div> 
                        </div>      
                        <div className={styles.esquerdaCimaDireita}>
                            <div className={styles.minima}>
                                <img src={minima}></img>
                                <span className={styles.min}>Min.</span>
                                <span className={styles.min2}>15°</span>
                            </div>
                            <div className={styles.maxima}>
                                <img src={maxima}></img>
                                <span className={styles.max}>Max.</span>
                                <span className={styles.max2}>26°</span>
                            </div>
                        </div> 
                    </div>      

                    <div className={styles.esquerdaMeio}>
                        <div className={styles.esquerdaMeioEsquerda}>
                            <img className={styles.media} src={media}></img>
                            <div className={styles.sensacaoTerm}>
                                <p className={styles.sensacaoTerm2}>23°</p>
                                <p className={styles.sensacaoTerm3}>Sensação térmica 22°</p>
                            </div>                            
                        </div>
                        <div className={styles.nublado}>
                            <img className={styles.desNublado} src={nublado}></img>
                            <p className={styles.nublado2}>Nublado</p>
                        </div>
                    </div>
                    <div className={styles.esquerdaBaixo}>
                        <div className={styles.umidade}>
                            <img className={styles.desUmidade} src={umidade}></img>
                            <p className={styles.umidade2}>Umidade</p>
                            <p className={styles.umidade3}>66%</p>
                        </div>
                        <div className={styles.velocidade}>
                            <img className={styles.desVelocidade} src={velocidade_vento}></img>
                            <p className={styles.velocidade2}>Velocidade do vento</p>
                            <p className={styles.velocidade3}>23km/h</p>
                        </div>
                        <div className={styles.direcao}>
                            <img className={styles.desDirecao} src={direcao_vento}></img>
                            <p className={styles.direcao2}>Direção do vento</p>
                            <p className={styles.direcao3}>ND</p>
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