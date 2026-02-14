import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const productLinks = [
        { name: 'Plastic Crates', href: '/plastic-crates' },
        { name: 'Storage Bins', href: '/plastic-storage-bins' },
        { name: 'Garbage Bins', href: '/plastic-garbage-bins' },
        { name: 'Plastic Pallets', href: '/plastic-pallets' },
        { name: 'Poultry Equipment', href: '/poultry-equipment' },
    ]

    const companyLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Request Quote', href: '/order-inquiry' },
    ]

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Company Info */}
                    <div className={styles.column}>
                        <div className={styles.logo}>
                            <Image
                                src="/logo.png"
                                alt="Regal Traders Logo"
                                width={50}
                                height={50}
                                className={styles.logoImage}
                            />
                            <span className={styles.logoText}>Regal Traders</span>
                        </div>
                        <p className={styles.description}>
                            Leading wholesale supplier of plastic crates, storage bins, garbage bins,
                            and poultry equipment in India. Based in Bengaluru with pan-India shipping.
                        </p>
                        <div className={styles.contact}>
                            <div className={styles.contactItem}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.contactIcon}>
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <div>
                                    <a href="tel:+919480971860" className={styles.contactLink}>+91 9480971860</a>
                                    <a href="tel:08041125933" className={styles.contactLink}>080-41125933</a>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.contactIcon}>
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <a href="mailto:tradersregal@gmail.com" className={styles.contactLink}>tradersregal@gmail.com</a>
                            </div>
                            <div className={styles.contactItem}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.contactIcon}>
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <a
                                    href="https://maps.app.goo.gl/YADPGesPj4wba1qG7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.contactLink}
                                >
                                    <address className={styles.address}>
                                        Shop Number:10, Jayson's Complex, Ground Floor, Godown Street, Bengaluru 560002.
                                    </address>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                    <div className={styles.column}>
                        <h3 className={styles.heading}>Products</h3>
                        <ul className={styles.links}>
                            {productLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className={styles.column}>
                        <h3 className={styles.heading}>Company</h3>
                        <ul className={styles.links}>
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div className={styles.column}>
                        <h3 className={styles.heading}>Business Hours</h3>
                        <ul className={styles.hours}>
                            <li>Monday - Friday</li>
                            <li>10:00 AM - 8:00 PM</li>
                            <li className={styles.closed}>Sunday: Closed</li>
                        </ul>
                        <div className={styles.badges}>
                            <div className={styles.badge}>GST Registered</div>
                            <div className={styles.badge}>Pan India Delivery</div>
                        </div>
                    </div>

                    {/* Location Map */}
                    <div className={styles.column}>
                        <h3 className={styles.heading}>Our Location</h3>
                        <div className={styles.mapContainer}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.097664577121!2d77.577921!3d12.965602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e21267bf13%3A0xda952b7054858af7!2sRegal%20Traders!5e0!3m2!1sen!2sin!4v1770906399522!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className={styles.map}
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} Regal Traders. All rights reserved.
                    </p>
                    <p className={styles.tagline}>
                        Quality Industrial Supplies Since Inception
                    </p>
                </div>
            </div>

            {/* Organization Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'Regal Traders',
                        url: 'https://regaltraders.com',
                        logo: 'https://regaltraders.com/logo.png',
                        contactPoint: {
                            '@type': 'ContactPoint',
                            telephone: '+91-9480971860',
                            contactType: 'Customer Service',
                            areaServed: 'IN',
                        },
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: "Shop Number:10, Jayson's Complex, Ground Floor, Godown Street",
                            addressLocality: 'Bengaluru',
                            addressRegion: 'Karnataka',
                            postalCode: '560002',
                            addressCountry: 'IN',
                        },
                    }),
                }}
            />
        </footer>
    )
}
