import { generatePageMetadata, getProductSchema, getFAQSchema } from '@/lib/seo'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ProductCard from '../components/ui/ProductCard'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import SectionDivider from '../components/ui/SectionDivider'
import { SparklesIcon, ShieldIcon, TargetIcon, ScaleIcon, CloudIcon, DollarIcon } from '../components/ui/Icons'
import styles from '../plastic-crates/product.module.css'

export const metadata = generatePageMetadata({
    title: 'Poultry Feeders & Drinkers Bangalore | Poultry Equipment | Regal Traders',
    description: 'Leading poultry feeders and drinkers manufacturers in Bangalore. Automatic and manual poultry equipment for farms in Karnataka and India. Wholesale rates.',
    keywords: ['poultry equipment manufacturers Bangalore', 'poultry feeders India', 'poultry drinkers wholesale', 'automatic poultry drinkers', 'chicken feeders Bangalore', 'poultry farm equipment India'],
    canonical: '/poultry-equipment',
})

export default function PoultryEquipmentPage() {
    const features = [
        { title: 'Hygienic Design', description: 'Easy to clean and maintain for bird health', IconComponent: SparklesIcon },
        { title: 'Durable Material', description: 'Long-lasting plastic construction', IconComponent: ShieldIcon },
        { title: 'Spill-Proof', description: 'Designed to minimize feed and water wastage', IconComponent: TargetIcon },
        { title: 'Various Sizes', description: 'Suitable for different flock sizes', IconComponent: ScaleIcon },
        { title: 'UV Resistant', description: 'Suitable for outdoor poultry setups', IconComponent: CloudIcon },
        { title: 'Cost-Effective', description: 'Affordable wholesale pricing', IconComponent: DollarIcon },
    ]

    const industries = [
        {
            title: 'Commercial Poultry Farms',
            description: 'Complete feeding and watering infrastructure for high-capacity meat and egg production.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                </svg>
            )
        },
        {
            title: 'Backyard Poultry Keepers',
            description: 'Durable and user-friendly equipment optimized for domestic bird care and small-scale farms.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
            )
        },
        {
            title: 'Hatcheries',
            description: 'Specialized feeders and drinkers designed specifically for young bird growth and survival.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            )
        },
        {
            title: 'Poultry Equipment Dealers',
            description: 'Industrial-grade wholesale supply for regional retail and agricultural distribution networks.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
            )
        },
        {
            title: 'Agricultural Cooperatives',
            description: 'Reliable equipment solutions for cooperative farming networks and community-led projects.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        },
        {
            title: 'Livestock Farms',
            description: 'Integrated feeding and watering systems for diversified farms requiring heavy-duty durability.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                </svg>
            )
        }
    ]

    const faqs = [
        {
            question: 'What types of poultry feeders do you offer?',
            answer: 'We offer various types including 8KG feeders, chick feeders (2KG), and turbo feeders in different capacities suitable for chicks to adult birds.',
        },
        {
            question: 'Are the drinkers suitable for all poultry types?',
            answer: 'Yes, our manual drinkers (2L, 4L, 8L) and automatic Nova drinkers are suitable for chickens, ducks, turkeys, and other poultry.',
        },
        {
            question: 'Do you offer automatic drinkers?',
            answer: 'Yes, we supply Nova automatic drinkers that provide continuous water supply with minimal maintenance and wastage.',
        },
        {
            question: 'What is the Minimum Order Quantity (MOQ)?',
            answer: 'The MOQ depends on the specific item (feeders or drinkers) and order volume. Please contact our team for details.',
        },
    ]

    const relatedProducts = [
        { name: 'Plastic Crates', href: '/plastic-crates' },
        { name: 'Plastic Storage Bins', href: '/plastic-storage-bins' },
    ]

    return (
        <>
            <Section bgImage="/poultry-equipment-hero.jpg" overlay="rgba(0,0,0,0.6)" size="lg" className={styles.hero}>
                <Container>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Poultry Feeders and Drinkers in Bangalore</h1>
                        <p className={styles.heroSubtitle}>
                            High-quality <strong>Poultry Equipment in Bangalore</strong> for modern farms.
                            We manufacture durable <strong>Poultry Feeders and Drinkers</strong> (Automatic & Manual) for broilers and layers across India.
                        </p>
                        <Button href="/order-inquiry" variant="primary" size="lg">
                            Request Quote
                        </Button>
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            <Section background="gray">
                <Container size="none">
                    <div className={styles.sectionHeader}>
                        <h2>Poultry Feeders and Drinkers Range</h2>
                        <p>Complete feeding and watering solutions for poultry farms in India</p>
                    </div>
                    <div className="grid grid-cols-3">
                        {[
                            { name: '8KG Feeder', dimensions: '35cm x 35cm x 45cm', image: '/8kg_feeder.png', description: 'Heavy-duty feeder with 8KG capacity. Perfect for adult birds and large flocks.' },
                            { name: 'Chick Feeder - 2KG', dimensions: '2KG Capacity', image: '/chick_feeder_2kg_f.png', description: 'Feeder designed specifically for chicks with 2KG capacity. Ideal for young birds.' },
                            { name: 'Manual Drinker - 2L', dimensions: '2 Litres', image: '/manual_drinker_2ltr_f.png', description: 'Manual water drinker for poultry. Easy to fill and clean.' },
                            { name: 'Manual Drinker - 4L', dimensions: '4 Litres', image: '/manual_drinker_4ltr_f.png', description: 'Mid-size manual water drinker. Perfect for medium flocks.' },
                            { name: 'Manual Drinker - 8L', dimensions: '8 Litres', image: '/manual_drinker_8ltr_f.png', description: 'Large capacity manual water drinker for commercial farms.' },
                            { name: 'Nova Drinker Automatic', dimensions: 'Automatic System', image: '/nova_drinker_automatic_f.png', description: 'Automatic water drinker for poultry. Provides continuous water supply with minimal wastage.' },
                            { name: 'Turbo Feeder', dimensions: 'High-Efficiency', image: '/turbo_feeder_f.png', description: 'High-efficiency poultry feeder. Reduces feed wastage and improves feeding efficiency.' },
                            { name: 'Lifting Cage', dimensions: 'Transport Cage', image: '/lifting_cage.png', description: 'Cage for lifting and transporting birds safely. Durable construction for farm use.' },
                        ].map((product) => (
                            <ProductCard
                                key={product.name}
                                name={product.name}
                                dimensions={product.dimensions}
                                description={product.description}
                                image={product.image}
                                iconType="feather"
                            />
                        ))}
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            <Section>
                <Container size="md">
                    <div className={styles.sectionHeader}>
                        <h2>About Our Poultry Equipment</h2>
                        <p>High-quality feeding and watering solutions for poultry farms</p>
                    </div>
                    <div className={styles.intro}>
                        <p>
                            As trusted <strong>poultry equipment manufacturers in Bangalore</strong>, Regal Traders specializes in essential
                            farm infrastructure. We provide a comprehensive range of <strong>Poultry Feeders</strong> (Chick, Turbo, Jumbo)
                            and <strong>Poultry Drinkers</strong> (Manual, Automatic Nova) designed to improve bird health and farm yield.
                        </p>
                        <p>
                            Our products support poultry farms in <strong>Karnataka, Tamil Nadu, Andhra Pradesh</strong>, and nationwide.
                            Whether you need automatic systems for large commercial sheds or manual equipment for backyard coops, we offer
                            <strong>wholesale poultry equipment</strong> with reliable delivery.
                        </p>
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            <Section background="gray">
                <Container size="none">
                    <div className={styles.sectionHeader}>
                        <h2>Key Features of Our Poultry Equipment</h2>
                        <p>Designed for poultry health and farm efficiency</p>
                    </div>
                    <div className="grid grid-cols-3">
                        {features.map((feature) => (
                            <Card key={feature.title}>
                                <div className={styles.featureIcon}>
                                    <feature.IconComponent size={32} />
                                </div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureDescription}>{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            <Section background="white">
                <Container>
                    <div className={styles.sectionHeader}>
                        <h2>Industries We Serve</h2>
                        <p>Poultry solutions for all farm types</p>
                    </div>
                    <div className={styles.industriesGrid}>
                        {industries.map((industry) => (
                            <Card key={industry.title} className={styles.industryCard}>
                                <div className={styles.industryIcon}>
                                    {industry.icon}
                                </div>
                                <h3>{industry.title}</h3>
                                <p>{industry.description}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            <Section background="gray">
                <Container size="md">
                    <div className={styles.sectionHeader}>
                        <h2>Frequently Asked Questions</h2>
                        <p>Common questions about our poultry equipment</p>
                    </div>
                    <div className={styles.faqContainer}>
                        {faqs.map((faq, index) => (
                            <Card key={index} className={styles.faqItem}>
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            <Section background="primary" className={styles.cta}>
                <Container>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Need Poultry Equipment in Bulk?</h2>
                        <p className={styles.ctaDescription}>
                            Get competitive wholesale pricing for your poultry farm. Contact us today.
                        </p>
                        <div className={styles.ctaActions}>
                            <Button href="/order-inquiry" variant="white" size="xl">
                                Request Quote
                            </Button>
                            <Button href="/contact" variant="secondary" size="xl">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(getProductSchema({
                        name: 'Poultry Feeders and Drinkers',
                        description: 'High-quality plastic feeders and drinkers for poultry farms',
                        category: 'Agricultural Supplies',
                        image: 'https://regal-traders.vercel.app/products/poultry-equipment.jpg',
                    })),
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(getFAQSchema(faqs)),
                }}
            />
        </>
    )
}