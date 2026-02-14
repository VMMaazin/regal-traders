import Link from 'next/link'
import Button from './components/ui/Button'
import Card from './components/ui/Card'
import Container from './components/ui/Container'
import Section from './components/ui/Section'
import SectionDivider from './components/ui/SectionDivider'
import {
    BoxIcon,
    ContainerIcon,
    TrashIcon,
    FeatherIcon,
    AwardIcon,
    CheckCircleIcon,
    TruckIcon,
    UsersIcon,
    BuildingIcon,
    StackIcon,
} from './components/ui/Icons'
import styles from './page.module.css'

export const metadata = {
    title: 'Industrial Plastic Products Bangalore | Regal Traders',
    description:
        'Leading manufacturer of plastic crates, pallets, and storage bins in Bangalore. Wholesale industrial plastic solutions with pan-India delivery.',
}

export default function Home() {
    const products = [
        {
            title: 'Plastic Crates',
            description: 'Industrial-grade crates for warehousing and logistics',
            href: '/plastic-crates',
            IconComponent: BoxIcon,
            image: '/plastic-crates.jpg',
        },
        {
            title: 'Storage Bins',
            description: 'Professional storage solutions for all industrial applications',
            href: '/plastic-storage-bins',
            IconComponent: ContainerIcon,
            image: '/storage-bins.jpg',
        },
        {
            title: 'Garbage Bins',
            description: 'Heavy-duty waste management systems',
            href: '/plastic-garbage-bins',
            IconComponent: TrashIcon,
            image: '/garbage-bins.jpg',
        },
        {
            title: 'Poultry Equipment',
            description: 'Commercial feeders and drinkers for poultry operations',
            href: '/poultry-equipment',
            IconComponent: FeatherIcon,
            image: '/poultry-equipment.jpg',
        },
        {
            title: 'Plastic Pallets',
            description: 'Heavy-duty industrial pallets for warehousing and logistics',
            href: '/plastic-pallets',
            IconComponent: StackIcon,
            image: '/plastic-pallet.png',
        },
    ]

    const features = [
        {
            title: 'Decade of Excellence',
            description: 'Established supplier with proven industrial track record',
            IconComponent: AwardIcon,
        },
        {
            title: 'Industrial Grade Quality',
            description: 'Premium materials meeting industry standards',
            IconComponent: CheckCircleIcon,
        },
        {
            title: 'Nationwide Distribution',
            description: 'Efficient logistics network across India',
            IconComponent: TruckIcon,
        },
        {
            title: 'B2B Support',
            description: 'Dedicated account management for wholesale clients',
            IconComponent: UsersIcon,
        },
    ]

    return (
        <>
            {/* HERO - BLACK */}
            <Section background="transparent" size="lg" className={styles.hero} style={{ backgroundImage: 'url(/Hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <Container>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Industrial Plastic Products in Bangalore
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Professional supplier of industrial plastic crates, storage systems,
                            and waste management solutions across India.
                        </p>

                        <div className={styles.heroActions}>
                            <Button href="#products" variant="primary" size="xl">
                                View Product Catalogue
                            </Button>

                            <Button href="/order-inquiry" variant="primary" size="xl">
                                Request Quote
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            {/* FEATURES - WHITE */}
            <Section background="white">
                <Container>
                    <div className={styles.sectionHeader}>
                        <h2>Industrial Supply Capabilities</h2>
                        <p>Professional plastic solutions for commercial operations</p>
                    </div>

                    <div className="grid grid-cols-4">
                        {features.map((feature) => (
                            <Card key={feature.title}>
                                <feature.IconComponent size={32} />
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            {/* PRODUCT CATEGORIES - LIGHT */}
            <Section background="light" id="products">
                <Container>
                    <div className={styles.sectionHeader}>
                        <h2>Product Categories</h2>
                        <p>Comprehensive industrial plastic product range</p>
                    </div>

                    <div className="grid grid-cols-4">
                        {products.map((product) => (
                            <Link key={product.title} href={product.href} style={{ textDecoration: 'none' }}>
                                <Card
                                    image={product.image}
                                    imageAlt={`${product.title} - ${product.description}`}
                                >
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            {/* CTA - WHITE */}
            <Section background="white" size="none" className={styles.cta}>
                <Container>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Wholesale and Retail supply inquiries:</h2>
                        <p className={styles.ctaDescription}>
                            Please Fill out the form  with your requirements. Our team will review your inquiry and get back to you within 24 hours with a competitive quote.
                        </p>

                        <Button href="/order-inquiry" variant="primary" size="xl">
                            Request Quote
                        </Button>
                    </div>
                </Container>
            </Section>

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebSite',
                        name: 'Regal Traders',
                        url: 'https://regaltraders.com',
                    }),
                }}
            />
        </>
    )
}