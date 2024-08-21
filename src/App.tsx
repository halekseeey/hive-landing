import styles from './App.module.scss'
import Actions from './components/Actions'
import Layout from './components/Layout'
import UserProfile from './components/UserProfile'
import avatar from '@/assets/avatar.svg'

function App() {
    return (
        <div className={styles.container}>
            <Layout>
                <div className={styles.userProfile}>
                    <UserProfile avatar={avatar} login="Ben_QF" />
                </div>
                <Actions />
            </Layout>
        </div>
    )
}

export default App
