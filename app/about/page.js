import { generatePageMetadata } from '@/lib/seo'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import SectionDivider from '../components/ui/SectionDivider'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { AwardIcon, UsersIcon, CheckCircleIcon, LightbulbIcon } from '../components/ui/Icons'
import styles from './about.module.css'

export const metadata = generatePageMetadata({
    title: 'About Regal Traders | Plastic Suppliers Bangalore',
    description: 'Regal Traders is a trusted manufacturer of industrial plastic crates, pallets, and bins in Bangalore. Serving warehouses and businesses across India since 2014.',
    keywords: ['about regal traders', 'plastic supplier India', 'industrial supplies Bangalore'],
    canonical: '/about',
})

export default function AboutPage() {
    const values = [
        { title: 'Quality First', description: 'Premium materials and rigorous quality control', icon: AwardIcon },
        { title: 'Customer Focus', description: 'Dedicated to exceeding client expectations', icon: UsersIcon },
        { title: 'Reliability', description: 'Consistent delivery and dependable service', icon: CheckCircleIcon },
        { title: 'Innovation', description: 'Continuously improving our products and processes', icon: LightbulbIcon },
    ]

    return (
        <>
            <Section
                background="transparent"
                size="lg"
                className={styles.hero}
                bgImage="/about-hero.jpg"
                overlay="rgba(0, 0, 0, 0.5)"
                style={{
                    padding: '400px 0 100px',
                    minHeight: '75vh',
                    display: 'flex',
                    alignItems: 'flex-end',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 15%'
                }}
            >
                <Container>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>About Regal Traders – Premier Plastic Solutions</h1>
                        <p className={styles.heroSubtitle}>
                            Trusted by leading industries and modern households across India.
                        </p>
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            <Section>
                <Container size="md">
                    <div className={styles.content}>
                        <h2>Who We Are</h2>
                        <p>
                            Based in the heart of Bengaluru, Regal Traders is a premier supplier of high-quality
                            plastic storage and utility solutions. Whether you're a homeowner looking to organize
                            your space or a logistics manager optimizing a warehouse, we provide the perfect tools
                            to get the job done.
                        </p>
                        <p>
                            We specialize in durable plastic crates, versatile storage bins, heavy-duty garbage bins,
                            and specialized poultry equipment. Our goal is to bridge the gap between industrial-grade
                            durability and everyday convenience, delivering top-tier products to every corner of India.
                        </p>
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            <Section background="light">
                <Container>
                    <div className={styles.sectionHeader}>
                        <h2>Our Core Values</h2>
                        <p>Reliability and excellence at every scale</p>
                    </div>
                    <div className="grid grid-cols-4">
                        {values.map((value) => (
                            <Card key={value.title} className={styles.valueCard}>
                                <div className={styles.valueIcon}>
                                    <value.icon size={48} />
                                </div>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDescription}>{value.description}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            <Section>
                <Container size="md">
                    <div className={styles.content}>
                        <h2>Why Choose Regal Traders?</h2>
                        <ul className={styles.benefits}>
                            <li>
                                <strong>Versatile Range:</strong> From heavy-duty industrial crates to sleek home
                                storage solutions, we have it all.
                            </li>
                            <li>
                                <strong>Fair Pricing:</strong> Competitive rates for individual buyers and massive
                                savings for bulk wholesale orders.
                            </li>
                            <li>
                                <strong>Nationwide Shipping:</strong> Efficient delivery network reaching homes and
                                businesses in every state across India.
                            </li>
                            <li>
                                <strong>Built to Last:</strong> Industrial-grade quality that ensures maximum durability
                                for long-term use in any environment.
                            </li>
                            <li>
                                <strong>Hassle-Free Transactions:</strong> Fully GST-compliant billing for businesses
                                and transparent pricing for retail shoppers.
                            </li>
                            <li>
                                <strong>Expert Advice:</strong> Our team is here to help you pick the right product,
                                whether it's for your garage or your global factory.
                            </li>
                        </ul>
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            <Section background="dark" className={styles.cta}>
                <Container>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Ready to Find Your Perfect Solution?</h2>
                        <p className={styles.ctaDescription}>
                            Join the thousands of happy homeowners and businesses across India who trust
                            Regal Traders for their storage and utility needs.
                        </p>
                        <div className={styles.ctaActions}>
                            <Button href="/contact" variant="primary" size="xl">
                                Contact Us
                            </Button>
                            <Button href="/order-inquiry" variant="outline" size="xl">
                                Request Quote
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    )
}
