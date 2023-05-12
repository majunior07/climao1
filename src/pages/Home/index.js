import styles from "./index.module.css";
import Header from "../../components/layout/Header";
import Dias from "../../components/layout/Dias";

function Home(){
    return( 
        <div className={styles.home}>
            <Header/>
            <div className={styles.central}>
                <div className={styles.esquerda}>
                    esquerda
                </div>
                <div className={styles.direita}>
                    <Dias dia1="aa" dia2="aa" clima="aa" min="15°" max="aa"/>
                    <Dias dia1="bb" dia2="bb" clima="bb" min="bb" max="bb"/>
                    <Dias dia1="cc" dia2="cc" clima="cc" min="cc" max="cc"/>
                    <Dias dia1="dd" dia2="dd" clima="dd" min="dd" max="dd"/>
                    <Dias dia1="ee" dia2="ee" clima="ee" min="ee" max="ee"/>
                </div>
            </div>


        </div>
    );
} 

export default Home;