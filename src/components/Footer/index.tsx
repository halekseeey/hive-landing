import styles from './styles.module.scss'
import MenuHome from '@/assets/menu_home.svg'
import MenuColonies from '@/assets/menu_colonies.svg'
import MenuFriends from '@/assets/menu_friends.svg'
import MenuSettings from '@/assets/menu_settings.svg'

const Footer = () => {
    const renderItem = (
        icon: string,
        label: string,
        isActive: boolean = false
    ) => {
        return (
            <li
                className={`${styles.item} ${
                    isActive ? styles.activeItem : ''
                }`}
            >
                <a onClick={() => console.log(`Navbar, ${label}`)}>
                    <img src={icon} className={styles.icon} />
                    <p className={styles.label}>{label}</p>
                </a>
            </li>
        )
    }
    return (
        <nav className={styles.container}>
            <ul className={styles.items}>
                {renderItem(MenuHome, 'Home')}
                {renderItem(MenuColonies, 'Colonies')}
                {renderItem(MenuFriends, 'Friends')}
                {renderItem(MenuSettings, 'Settings')}
            </ul>
        </nav>
    )
}

export default Footer
