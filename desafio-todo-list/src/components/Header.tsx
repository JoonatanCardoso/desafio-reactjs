import Logo from '../assets/Logo.svg'
import styles from './Header.module.css'
export function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.image} src={Logo} alt="Logo" />
        </header>
    )
}