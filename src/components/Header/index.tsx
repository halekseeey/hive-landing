import styles from './styles.module.scss'
import hiveLogo from '@/assets/logo.svg'

const Header = () => {
    return (
        <div className={styles.container}>
            <img src={hiveLogo} alt="Logo" className={styles.logo} />
        </div>
    )
}

export default Header
