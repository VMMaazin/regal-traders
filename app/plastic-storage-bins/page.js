import { generatePageMetadata, getProductSchema, getFAQSchema } from '@/lib/seo'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ProductCard from '../components/ui/ProductCard'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import SectionDivider from '../components/ui/SectionDivider'
import { ShieldIcon, StackIcon, SparklesIcon, ScaleIcon, CloudIcon, PaletteIcon } from '../components/ui/Icons'
import styles from '../plastic-crates/product.module.css'
import { client, urlFor } from '@/lib/sanity'


export const dynamic = 'force-dynamic'

export const metadata = generatePageMetadata({
    title: 'Plastic Storage Bins in Bangalore | Storage Bins | Regal Traders',
    description: 'Top manufacturer of plastic storage bins in Bangalore. Stackable FPO bins and racking bins for electronics and automotive industries. Wholesale prices India.',
    keywords: ['plastic storage bins manufacturers Bangalore', 'industrial storage bins India', 'FPO bins Bangalore', 'racking bins suppliers', 'plastic component bins', 'storage boxes wholesale India'],
    canonical: '/plastic-storage-bins',
})

export default async function PlasticStorageBinsPage() {

    const sanityProducts = await client.fetch(`
      *[_type == "product" && category == "plastic-storage-bins"]{
        _id,
        name,
        description,
        dimensions,
        image
      }
    `, {}, { next: { revalidate: 0 } })

    const staticProducts = [
        { name: 'Crate 5', dimensions: '16.5cm x 11.4cm x 7.8cm', image: '/crate_5_f.png', description: 'Front partially open storage and racking bin. Ideal for small parts and components.' },
        { name: 'Crate 15', dimensions: '17cm x 12cm x 8.5cm', image: '/crate_15_f.png', description: 'Front partially open storage and racking bin. Perfect for hardware and tools.' },
        { name: 'Crate 25', dimensions: '22.5cm x 15cm x 12.5cm', image: '/crate_25_f.png', description: 'Front partially open storage and racking bin. Great for automotive parts.' },
        { name: 'Crate 35', dimensions: '29.5cm x 21cm x 16cm', image: '/crate_35_f.png', description: 'Front partially open storage and racking bin. Suitable for electronics and inventory.' },
        { name: 'Crate 60', dimensions: '25cm x 18cm x 13cm', image: '/crate_60f.png', description: 'Front partially open storage and racking bin. Perfect for warehouse organization.' },
        { name: 'Crate 80', dimensions: '35.5cm x 22.5cm x 17cm', image: '/crate_80_f.png', description: 'Front partially open storage and racking bin. Ideal for larger parts and materials.' },
        { name: 'Crate 100', dimensions: '35.5cm x 32cm x 17cm', image: '/crate_100_f.png', description: 'Front partially open storage and racking bin. Maximum capacity for bulk storage.' },
    ]

    const features = [
        { title: 'Front Open Design', description: 'Easy access for quick picking and storage', IconComponent: ShieldIcon },
        { title: 'Stackable Design', description: 'Maximize vertical storage space efficiently', IconComponent: StackIcon },
        { title: 'Easy to Clean', description: 'Smooth surfaces for quick maintenance', IconComponent: SparklesIcon },
        { title: 'Load Capacity', description: 'Robust construction for substantial weight', IconComponent: ScaleIcon },
        { title: 'Weather Resistant', description: 'Suitable for indoor and outdoor environments', IconComponent: CloudIcon },
        { title: 'Multiple Sizes', description: 'Range from small to large capacity bins', IconComponent: PaletteIcon },
    ]

    const industries = [
        {
            title: 'Warehousing & Logistics',
            description: 'Efficient organization for small parts and high-turnover inventory management.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
            )
        },
        {
            title: 'Manufacturing Plants',
            description: 'Durable bins for production line components, hardware, and tool storage.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 20h20" />
                    <path d="M14 2v6h6" />
                    <path d="M14 8l6-6" />
                    <path d="M2 20V8l6-6v6l6-6v18" />
                </svg>
            )
        },
        {
            title: 'Retail & Distribution',
            description: 'Clean, accessible storage for back-of-house inventory and display organization.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
            )
        },
        {
            title: 'Automotive Workshops',
            description: 'Robust bins for heavy spare parts, mechanical fasteners, and vehicle components.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
            )
        },
        {
            title: 'Electronics Assembly',
            description: 'Specialized storage for sensitive electronic components and micro-parts.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <path d="M9 1v3" />
                    <path d="M15 1v3" />
                    <path d="M9 20v3" />
                    <path d="M15 20v3" />
                    <path d="M20 9h3" />
                    <path d="M20 15h3" />
                    <path d="M1 9h3" />
                    <path d="M1 15h3" />
                </svg>
            )
        },
        {
            title: 'Office & Stationery',
            description: 'Compact storage solutions for document organization and office supply management.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                </svg>
            )
        }
    ]

    const faqs = [
        {
            question: 'What sizes of storage bins are available?',
            answer: 'We offer storage bins ranging from Crate 5 (16.5cm x 11.4cm x 7.8cm) to Crate 100 (35.5cm x 32cm x 17cm), suitable for various storage needs from small parts to larger inventory.',
        },
        {
            question: 'Are these bins stackable?',
            answer: 'Yes, all our storage bins are designed to be stackable, allowing for efficient vertical space utilization in warehouses and storage facilities.',
        },
        {
            question: 'Can these bins be used for racking systems?',
            answer: 'Absolutely. Our front partially open design makes them ideal for racking systems, providing easy visibility and access to stored items.',
        },
        {
            question: 'What is the minimum order quantity (MOQ)?',
            answer: 'It varies for different products and sizes, so please contact us for specific details regarding your requirements.',
        },
    ]

    return (
        <>
            <Section bgImage="/storage-bins-hero.jpg" overlay="rgba(0,0,0,0.6)" size="lg" className={styles.hero}>
                <Container>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Plastic Storage Bins in Bangalore – Stackable & FPO</h1>
                        <p className={styles.heroSubtitle}>
                            Premier customized <strong>Plastic Storage Bins in Bangalore</strong> for efficient inventory management.
                            Durable, front-open, and stackable bins designed for warehouses, electronics, and automotive industries across India.
                        </p>
                        <Button href="/order-inquiry" variant="primary" size="lg">
                            Request Quote
                        </Button>
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            <Section background="gray">
                <Container>
                    <div className={styles.sectionHeader}>
                        <h2>Our Storage Bins Range</h2>
                        <p>Front partially open storage and racking bins for all applications</p>
                    </div>
                    <div className="grid grid-cols-3">

                        {/* Static Products — hidden if Sanity has an entry with the same name */}
                        {staticProducts
                            .filter(staticProduct =>
                                !sanityProducts.some(sanityProduct =>
                                    sanityProduct.name === staticProduct.name
                                )
                            )
                            .map((product) => (
                                <ProductCard
                                    key={product.name}
                                    name={product.name}
                                    dimensions={product.dimensions}
                                    description={product.description}
                                    image={product.image}
                                    iconType="container"
                                />
                            ))}

                        {/* Sanity Products */}
                        {sanityProducts.map((product) => (
                            <ProductCard
                                key={product._id}
                                name={product.name}
                                dimensions={product.dimensions}
                                description={product.description}
                                image={product.image ? urlFor(product.image).width(500).url() : '/storage-bins-hero.jpg'}
                                iconType="container"
                            />
                        ))}

                    </div>
                </Container>
            </Section>

            <SectionDivider />

            <Section>
                <Container size="md">
                    <div className={styles.sectionHeader}>
                        <h2>About Our Storage Bins</h2>
                        <p>Front open storage and racking solutions for industrial applications</p>
                    </div>
                    <div className={styles.intro}>
                        <p>
                            As leading <strong>plastic storage bins manufacturers in Bangalore</strong>, Regal Traders provides
                            specialized front-open (FPO) and racking bins. Our solutions are used extensively in electronics manufacturing hubs
                            in <strong>Electronic City</strong> and automotive plants in <strong>Chennai and Pune</strong>.
                        </p>
                        <p>
                            From small component bins to large industrial containers, we offer <strong>wholesale storage bins</strong>
                            with reliable pan-India delivery. Maximize your vertical storage space with our sturdy, interlocking designs.
                        </p>
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            <Section background="gray">
                <Container size="none">
                    <div className={styles.sectionHeader}>
                        <h2>Key Features of Our Storage Bins</h2>
                        <p>Built for industrial performance and longevity</p>
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
                        <p>Trusted storage solutions across sectors</p>
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
                        <p>Common questions about our storage bins</p>
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
                        <h2 className={styles.ctaTitle}>Need Storage Bins in Bulk?</h2>
                        <p className={styles.ctaDescription}>
                            Get competitive wholesale pricing for warehouse and industrial projects.
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
                        name: 'Plastic Storage Bins',
                        description: 'Front open plastic storage bins for racking and warehouse organization',
                        category: 'Industrial Supplies',
                        image: 'https://regal-traders.vercel.app/products/storage-bins.jpg',
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