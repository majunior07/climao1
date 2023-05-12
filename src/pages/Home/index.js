import styles from "./index.module.css";
import Header from "../../components/layout/Header";
import Dias from "../../components/layout/Dias";
import ensolarado_b from "../../img/ensolarado_b.png";

function Home(){

    return( 
        <div className={styles.home}>
            <Header/>
            <div className={styles.central}>
                <div className={styles.esquerda}>
                    esquerda
                </div>
                <div className={styles.direita}>
                    <Dias dia1="Sexta" dia2="11/10/2019" desClima={<img src="ensolarado_b"></img>} clima="Ensolarado" min="15°" max="25°"/>
                    <Dias dia1="Sábado" dia2="12/10/2019" desClima="aa" clima="Ensolarado" min="18°" max="31°"/>
                    <Dias dia1="Domingo" dia2="13/10/2019" desClima="aa" clima="Tempestade" min="13°" max="23°"/>
                    <Dias dia1="Segunda" dia2="14/10/2019" desClima="aa" clima="Chuvoso" min="15°" max="24°"/>
                    <Dias dia1="Terça" dia2="15/10/2019" desClima="aa" clima="Nublado" min="15°" max="24°"/>
                </div>
            </div>


        </div>
    );
} 

export default Home;