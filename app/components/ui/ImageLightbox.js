'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './ImageLightbox.module.css'

export default function ImageLightbox({ image, title, isOpen, onClose }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose()
        }

        if (isOpen) {
            document.body.style.overflow = 'hidden'
            window.addEventListener('keydown', handleEsc)
        }

        return () => {
            document.body.style.overflow = 'unset'
            window.removeEventListener('keydown', handleEsc)
        }
    }, [isOpen, onClose])

    if (!isOpen || !mounted) return null

    const lightboxContent = (
        <div className={styles.overlay} onClick={onClose} aria-modal="true" role="dialog">
            <button className={styles.closeButton} onClick={onClose} aria-label="Close lightbox">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </button>

            <div className={styles.container} onClick={(e) => e.stopPropagation()}>
                <div className={styles.imageWrapper}>
                    <img src={image} alt={title} className={styles.image} />
                </div>
                {title && (
                    <div className={styles.caption}>
                        <h3>{title}</h3>
                    </div>
                )}
            </div>
        </div>
    )

    // Using client-side check to ensure document.body is available for the portal
    return typeof document !== 'undefined'
        ? createPortal(lightboxContent, document.body)
        : null
}
