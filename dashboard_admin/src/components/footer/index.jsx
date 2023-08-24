import { Contacts, Developments, WebBroser } from '../icons';
import styles from './footer.module.css';
export const Footer = () => {
    return (

        <footer>
            <div className={styles.footer_content}>
                <div className={styles.footer_content_info}>
                    <p><Developments className={styles.Icons_Developments}/>: guittzoom-desenvolvimento-de-software</p>
                    <p><WebBroser className={styles.Icons_Web}/>: www.guittzoom.com.br</p>
                    <p><Contacts className={styles.Icons_Contacts}/> :(11)97783-8504</p>
                </div>

            </div>
        </footer>


    )
}