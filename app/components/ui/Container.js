export default function Container({ children, className = '', size = 'default' }) {
    const maxWidths = {
        sm: '640px',
        md: '768px',
        default: '1280px',
        lg: '1536px',
        full: '100%',
    }

    return (
        <div
            className={className}
            style={{
                width: '100%',
                maxWidth: maxWidths[size],
                margin: '0 auto',
                padding: '0 var(--spacing-4)',
            }}
        >
            {children}
        </div>
    )
}
