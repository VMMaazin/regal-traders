import Link from 'next/link'
import styles from './Button.module.css'

export default function Button({
    children,
    href,
    variant = 'primary',
    size = 'md',
    onClick,
    type = 'button',
    className = '',
    ...props
}) {
    const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`

    if (href) {
        return (
            <Link href={href} className={classes} {...props}>
                {children}
            </Link>
        )
    }

    return (
        <button type={type} onClick={onClick} className={classes} {...props}>
            {children}
        </button>
    )
}
