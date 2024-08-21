import {FC} from 'react'
import styles from './styles.module.scss'

type Props = {
    image: string
    title: string
    imageHeight?: string
    imageWigth?: string
    size?: 'm' | 's'
    gradient?: 'allGradient' | 'bottomGradient' | 'topGradient' | 'leftGradient'
}

const Honeycomb: FC<Props> = ({
    image,
    title,
    imageHeight = '40px',
    imageWigth = '40px',
    size = 'm',
    gradient,
}) => {
    const containerStyle =
        size === 's' ? styles.containerSmall : styles.containerMedium
    const gradientStyle = gradient ? styles[gradient] : ''
    return (
        <a
            className={`${styles.container} ${containerStyle} ${gradientStyle}`}
            onClick={() => console.log(`Click on ${title}`)}
        >
            <img
                src={image}
                className={styles.image}
                style={{height: imageHeight, width: imageWigth}}
            />
            <p className={styles.title}>{title}</p>
        </a>
    )
}

export default Honeycomb
