'use client'

import { generatePageMetadata } from '@/lib/seo'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import styles from './contact.module.css'

export const metadata = generatePageMetadata({
    title: 'Contact Regal Traders | Bangalore',
})

export default function ContactPage() {
    return (
        <>
            <Section background="dark" size="default" className={styles.hero}>
                <Container>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Contact Regal Traders | Bangalore</h1>
                        <p className={styles.heroSubtitle}>
                            Get in touch with our team for inquiries, quotes, or support
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className={styles.contactCenter}>
                        {/* Contact Information */}
                        <div className={styles.contactInfo}>
                            <h2>Get in Touch</h2>
                            <p className={styles.description}>
                                We're here to help with all your industrial plastic supply needs.
                                Reach out to us through any of the following channels.
                            </p>

                            <div className={styles.infoItems}>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>📍</div>
                                    <div>
                                        <h3>Address</h3>
                                        <p>
                                            <a
                                                href="https://maps.app.goo.gl/3TqS7TNknBhour3e6"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.contactLink}
                                            >
                                                Shop Number: 10, Jayson's Complex,<br />
                                                Ground Floor, Godown Street,<br />
                                                Bengaluru 560002
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>📞</div>
                                    <div>
                                        <h3>Phone</h3>
                                        <p>
                                            <a href="tel:+919480971860" className={styles.contactLink}>+91 9480971860</a>
                                            <br />
                                            <a href="tel:08041125933" className={styles.contactLink}>080-41125933</a>
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>✉️</div>
                                    <div>
                                        <h3>Email</h3>
                                        <p>
                                            <a href="mailto:tradersregal@gmail.com" className={styles.contactLink}>
                                                tradersregal@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>🕒</div>
                                    <div>
                                        <h3>Business Hours</h3>
                                        <p>Monday - Friday: 10:00 AM - 8:00 PM<br />Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section background="gray">
                <Container>
                    <div className={styles.mapSection}>
                        <h2 className={styles.mapTitle}>Our Location</h2>
                        <div className={styles.mapWrapper}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.097664577121!2d77.577921!3d12.965602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e21267bf13%3A0xda952b7054858af7!2sRegal%20Traders!5e0!3m2!1sen!2sin!4v1770918326580!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0, borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-lg)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className={styles.locationDetails}>
                            <p>Bengaluru, Karnataka, India</p>
                            <p className={styles.mapNote}>Serving businesses across India</p>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    )
}
