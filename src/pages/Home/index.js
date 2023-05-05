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
                    <Dias/>
                </div>
            </div>


        </div>
    );
} 

export default Home;