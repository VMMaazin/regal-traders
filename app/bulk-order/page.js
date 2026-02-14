'use client'

import { useState } from 'react'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import SectionDivider from '../components/ui/SectionDivider'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { PhoneIcon, WhatsAppIcon } from '../components/ui/Icons'
import styles from './bulk-order.module.css'

export default function BulkOrderPage() {
    const [status, setStatus] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')

        const formData = new FormData(e.target)

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            })

            if (response.ok) {
                window.location.href = '/thank-you'
            } else {
                setStatus('error')
            }
        } catch (error) {
            console.error('Form error:', error)
            setStatus('error')
        }
    }

    const benefits = [
        { title: 'Wholesale Pricing', description: 'Competitive rates for bulk quantities', icon: '₹' },
        { title: 'Custom Solutions', description: 'Tailored products for your specific needs', icon: '⚙' },
        { title: 'Fast Delivery', description: 'Efficient logistics across India', icon: '⚡' },
        { title: 'GST Billing', description: 'Proper invoicing for business transactions', icon: '✓' },
    ]

    return (
        <>
            <Section background="gradient" size="default" className={styles.hero}>
                <Container>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Order Inquiry | Request Quote</h1>
                        <p className={styles.heroSubtitle}>
                            Get competitive wholesale pricing for large quantity orders.
                            Fill out the form below and our team will contact you with a custom quote.
                        </p>
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            <Section>
                <Container size="md">
                    <div className={styles.formContainer}>
                        <h2>REQUEST QUOTE</h2>
                        <p className={styles.formDescription}>
                            Fill out the form below with your requirements. Our team will review your inquiry
                            and get back to you within 24 hours with a competitive quote.
                        </p>

                        <form
                            name="bulk-order"
                            method="POST"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={handleSubmit}
                            className={styles.form}
                        >
                            <input type="hidden" name="form-name" value="bulk-order" />
                            <p hidden>
                                <label>
                                    Don't fill this out: <input name="bot-field" />
                                </label>
                            </p>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={styles.input}
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="company">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className={styles.input}
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="product">Product Interested In</label>
                                    <select
                                        id="product"
                                        name="product"
                                        className={styles.input}
                                    >
                                        <option value="">Select a product</option>
                                        <option value="plastic-crates">Plastic Crates</option>
                                        <option value="storage-bins">Plastic Storage Bins</option>
                                        <option value="garbage-bins">Plastic Garbage Bins</option>
                                        <option value="poultry-equipment">Poultry Equipment</option>
                                        <option value="multiple">Multiple Products</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="quantity">Estimated Quantity</label>
                                    <input
                                        type="text"
                                        id="quantity"
                                        name="quantity"
                                        placeholder="e.g., 500 units"
                                        className={styles.input}
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Additional Details</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Please provide any specific requirements, sizes, colors, or delivery timeline..."
                                    className={styles.textarea}
                                />
                            </div>

                            <Button type="submit" variant="primary" size="xl" className={styles.submitButton} disabled={status === 'sending'}>
                                {status === 'sending' ? 'Submitting...' : 'Submit Inquiry'}
                            </Button>

                            {status === 'error' && (
                                <div className={styles.errorMessage}>
                                    ✗ Sorry, there was an error. Please try again or contact us directly.
                                </div>
                            )}
                        </form>
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            <Section background="gray">
                <Container>
                    <div className={styles.sectionHeader}>
                        <h2>Why Order from Regal Traders?</h2>
                        <p>Benefits of partnering with us for your bulk requirements</p>
                    </div>
                    <div className="grid grid-cols-4">
                        {benefits.map((benefit) => (
                            <Card key={benefit.title}>
                                <div className={styles.benefitIcon}>{benefit.icon}</div>
                                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                <p className={styles.benefitDescription}>{benefit.description}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            <Section background="white" className={styles.cta}>
                <Container>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Need Immediate Assistance?</h2>
                        <p className={styles.ctaDescription}>
                            Call us directly or message us on WhatsApp for urgent bulk order inquiries.
                        </p>
                        <div className={styles.ctaActions}>
                            <Button href="tel:+919480971860" variant="primary" size="xl">
                                <PhoneIcon size={20} style={{ marginRight: '8px' }} /> Call Now
                            </Button>
                            <Button href="https://wa.me/919480971860" variant="secondary" size="xl">
                                <WhatsAppIcon size={20} style={{ marginRight: '8px' }} /> WhatsApp
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    )
}