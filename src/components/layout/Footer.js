import {FaRegCopyright} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <p><span>Trabalho 1 </span><FaRegCopyright/> 2023</p>
        </footer>
    )
}

export default Footer