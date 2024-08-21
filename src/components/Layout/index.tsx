import {FC, ReactNode} from 'react'
import styles from './styles.module.scss' // Стили для Layout
import Header from '../Header'
import Footer from '../Footer'

type LayoutProps = {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.mainContent}>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
