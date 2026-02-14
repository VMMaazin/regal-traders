export default function Section({
    children,
    className = '',
    background = 'white',
    size = 'default',
    id,
    style = {},
    bgImage = null,
    overlay = null,
}) {
    const backgrounds = {
        white: '#FFFFFF',
        light: '#F8F9FA',
        dark: '#000000',
        transparent: 'transparent',
    }

    const paddings = {
        sm: '60px 0',
        default: '100px 0',
        lg: '140px 0',
        none: '0',
    }

    const combinedStyle = {
        position: 'relative',
        background: bgImage
            ? `${overlay ? `linear-gradient(${overlay}, ${overlay}), ` : ''}url(${bgImage}) center center / cover no-repeat`
            : (backgrounds[background] || backgrounds.white),
        padding: paddings[size],
        ...style,
    }

    return (
        <section
            id={id}
            className={className}
            style={combinedStyle}
        >
            {children}
        </section>
    )
}
