import styles from "./index.module.css";
import Header from "../../components/layout/Header";

function Home(){
    return( 
        <div className={styles.home}>
            <Header/>
            <div className={styles.central}>

            </div>


        </div>
    );
} 

export default Home;