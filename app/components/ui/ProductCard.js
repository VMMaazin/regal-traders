'use client'

import { useState } from 'react'
import Button from './Button'
import { BoxIcon, ContainerIcon, TrashIcon, FeatherIcon } from './Icons'
import ImageLightbox from './ImageLightbox'
import styles from './ProductCard.module.css'

const iconMap = {
    'box': BoxIcon,
    'container': ContainerIcon,
    'trash': TrashIcon,
    'feather': FeatherIcon,
}

export default function ProductCard({
    image,
    name,
    dimensions,
    capacity,
    description,
    iconType = 'box',
}) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)
    const IconComponent = iconMap[iconType] || BoxIcon

    return (
        <div className={styles.productCard}>
            <div
                className={styles.imageContainer}
                onClick={() => image && setIsLightboxOpen(true)}
                style={{ cursor: image ? 'zoom-in' : 'default' }}
                role={image ? "button" : "presentation"}
                aria-label={image ? `View larger ${name} image` : undefined}
            >
                {image ? (
                    <img src={image} alt={name} className={styles.image} />
                ) : (
                    <div className={styles.imagePlaceholder}>
                        <IconComponent className={styles.placeholderIcon} size={64} />
                    </div>
                )}
            </div>

            <div className={styles.content}>
                <h3 className={styles.productName}>{name}</h3>

                <div className={styles.productSpecs}>
                    {dimensions && (
                        <div className={styles.spec}>
                            <span className={styles.specLabel}>Dimensions:</span>
                            <span className={styles.specValue}>{dimensions}</span>
                        </div>
                    )}

                    {capacity && (
                        <div className={styles.spec}>
                            <span className={styles.specLabel}>Capacity:</span>
                            <span className={styles.specValue}>{capacity}</span>
                        </div>
                    )}
                </div>

                {description && (
                    <p className={styles.productDescription}>{description}</p>
                )}

                <div className={styles.productCta}>
                    <Button href="/order-inquiry" variant="primary" size="md" className={styles.ctaButton}>
                        Request Quote
                    </Button>
                </div>
            </div>

            {image && (
                <ImageLightbox
                    image={image}
                    title={name}
                    isOpen={isLightboxOpen}
                    onClose={() => setIsLightboxOpen(false)}
                />
            )}
        </div>
    )
}

