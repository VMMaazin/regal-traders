import styles from './Card.module.css'
import Image from 'next/image'

export default function Card({ children, className = '', hover = true, image = null, imageAlt = '', ...props }) {
    const classes = `${styles.card} ${hover ? styles.hover : ''} ${image ? styles.cardWithImage : ''} ${className}`

    return (
        <div className={classes} {...props}>
            {image && (
                <div className={styles.cardImage}>
                    <Image
                        src={image}
                        alt={imageAlt}
                        width={300}
                        height={200}
                        className={styles.image}
                    />
                </div>
            )}
            <div className={styles.cardContent}>
                {children}
            </div>
        </div>
    )
}