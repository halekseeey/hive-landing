import {FC} from 'react'
import styles from './styles.module.scss'
import Honeycomb from '../Honeycomb'
import Token from '@/assets/token.svg'
import FarmingLoading from '@/assets/farmingLoading.gif'
import PlayGame from '@/assets/playgame.svg'
import StartFarm from '@/assets/start_farm.svg'
import Colony from '@/assets/colony_icn.svg'

type Props = {
    avatar: string
    login: string
}

const UserProfile: FC<Props> = ({avatar, login}) => {
    return (
        <div className={styles.container}>
            <img src={avatar} alt="Avatar" className={styles.avatar} />
            <p className={styles.login}>{login}</p>
            <div className={styles.mainHoneycombs}>
                <Honeycomb
                    title="15.599"
                    image={Token}
                    imageWigth="38px"
                    imageHeight="29px"
                    gradient="allGradient"
                />
                <Honeycomb
                    title="Farming"
                    image={FarmingLoading}
                    imageWigth="53px"
                    imageHeight="55px"
                    gradient="allGradient"
                />
            </div>
            <div className={styles.additionalHoneycombs}>
                <Honeycomb
                    title="Play Game"
                    image={PlayGame}
                    size="s"
                    gradient="bottomGradient"
                />
                <Honeycomb
                    title="Start Farm"
                    image={StartFarm}
                    size="s"
                    gradient="topGradient"
                />
                <Honeycomb
                    title="Colonies"
                    image={Colony}
                    size="s"
                    gradient="leftGradient"
                />
            </div>
        </div>
    )
}

export default UserProfile
