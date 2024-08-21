import styles from './styles.module.scss'
import Token from '@/assets/token.svg'
import ArrowRight from '@/assets/arrow_right.svg'

const Actions = () => {
    const renderAction = (amount: string | number, label: string) => {
        return (
            <li className={styles.action}>
                <a
                    className={styles.link}
                    onClick={() => console.log(`Action ${label}`)}
                >
                    <span className={styles.preview}>
                        <img src={Token} className={styles.token} />
                        <p className={styles.amount}>{amount}</p>
                    </span>
                    <p className={styles.label}>{label}</p>
                    <img src={ArrowRight} className={styles.arrow} />
                </a>
            </li>
        )
    }
    return (
        <div className={styles.container}>
            <p className={styles.title}>Earn HIVE</p>
            <ul className={styles.actions}>
                {renderAction(40, 'Join Telegram')}
                {renderAction(65, 'Share Hive')}
                {renderAction(180, 'Start a Colony')}
            </ul>
        </div>
    )
}

export default Actions
