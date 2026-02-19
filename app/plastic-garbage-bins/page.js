import { generatePageMetadata, getProductSchema, getFAQSchema } from '@/lib/seo'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ProductCard from '../components/ui/ProductCard'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import SectionDivider from '../components/ui/SectionDivider'
import { ShieldIcon, BoxIcon, TruckIcon, TargetIcon, CloudIcon, SparklesIcon } from '../components/ui/Icons'
import styles from '../plastic-crates/product.module.css'
import { client, urlFor } from '@/lib/sanity'


export const dynamic = 'force-dynamic'

export const metadata = generatePageMetadata({
    title: 'Plastic Garbage Bins in Bangalore | Garbage Bins | Regal Traders',
    description: 'Heavy-duty plastic garbage bins manufacturers in Bangalore. Wheelie bins, dustbins, and waste management solutions for municipalities and industries in India.',
    keywords: ['plastic garbage bins manufacturers Bangalore', 'waste management bins India', 'industrial dustbins Bangalore', 'commercial garbage bins wholesale', 'swachh bharat bins'],
    canonical: '/plastic-garbage-bins',
})

export default async function PlasticGarbageBinsPage() {

    const sanityProducts = await client.fetch(`
      *[_type == "product" && category == "plastic-garbage-bins"]{
        _id,
        name,
        description,
        dimensions,
        image
      }
    `, {}, { next: { revalidate: 0 } })

    const features = [
        { title: 'Heavy-Duty', description: 'Built to withstand heavy loads and daily use', IconComponent: ShieldIcon },
        { title: 'Large Capacity', description: 'Available in various sizes up to 240L', IconComponent: BoxIcon },
        { title: 'Wheeled Options', description: 'Mobile bins with sturdy wheels for easy movement', IconComponent: TruckIcon },
        { title: 'Odor Control', description: 'Tight-fitting lids prevent odor escape', IconComponent: TargetIcon },
        { title: 'UV Resistant', description: 'Suitable for outdoor placement', IconComponent: CloudIcon },
        { title: 'Easy Maintenance', description: 'Smooth surfaces for quick cleaning', IconComponent: SparklesIcon },
    ]

    const industries = [
        {
            title: 'Municipal Corporations',
            description: 'Reliable waste management solutions for public spaces and urban collection networks.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            )
        },
        {
            title: 'Commercial Buildings',
            description: 'Modern, hygienic bins for office complexes, malls, and commercial centers.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                    <path d="M7 2v20" />
                    <path d="M17 2v20" />
                    <path d="M2 12h20" />
                    <path d="M2 7h20" />
                    <path d="M2 17h20" />
                </svg>
            )
        },
        {
            title: 'Hospitals & Healthcare',
            description: 'Specialized medical waste disposal with color-coded safety bins for clinics and hospitals.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
            )
        },
        {
            title: 'Hotels & Restaurants',
            description: 'Clean, high-capacity waste solutions specifically for the hospitality sector.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                </svg>
            )
        },
        {
            title: 'Educational Institutions',
            description: 'Durable and easy-to-use waste systems for schools, colleges, and university campuses.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
            )
        },
        {
            title: 'Industrial Facilities',
            description: 'Robust collection bins designed for factories, warehouses, and processing plants.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 20h20" />
                    <path d="M14 2v6h6" />
                    <path d="M14 8l6-6" />
                    <path d="M2 20V8l6-6v6l6-6v18" />
                </svg>
            )
        }
    ]

    const faqs = [
        {
            question: 'What sizes of garbage bins are available?',
            answer: 'We offer garbage bins ranging from 30L to 240L capacity, including wheeled bins, pedal bins, swing bins, and specialized bio-hazard bins.',
        },
        {
            question: 'Do the bins come with wheels?',
            answer: 'Yes, we offer wheeled garbage bins in 120L and 240L capacities for easy mobility and waste handling.',
        },
        {
            question: 'Are these bins suitable for outdoor use?',
            answer: 'Absolutely. Our garbage bins are UV-resistant and weather-proof, designed specifically for outdoor waste management.',
        },
        {
            question: 'What is the minimum order quantity (MOQ)?',
            answer: 'It varies depending on the bin type and size. Please contact us for specific wholesale requirements.',
        },
    ]

    const staticProducts = [
        { name: '2 Wheeled Bin - 120L', dimensions: '120 Litres', image: '/2_wheeled_bin_120_lts.png', description: 'Durable wheeled bin for efficient waste handling. Perfect for residential and commercial use.' },
        { name: '2 Wheeled Bin with Pedal - 120L', dimensions: '120 Litres', image: '/2_wheeled_bin_with_pedal.png', description: 'Hands-free pedal operation with wheels. Hygienic waste disposal for commercial spaces.' },
        { name: '2 Wheeled Bin - 240L', dimensions: '240 Litres', image: '/2_wheeled_bin_240_litres.png', description: 'Large capacity wheeled bin for heavy-duty waste collection in industrial and commercial areas.' },
        { name: '2 in 1 Bin with Pedal - 30L', dimensions: '30 Litres', image: '/2_in_1_pedal_bin_30_litres.png', description: 'Dual-compartment pedal bin for wet and dry waste segregation. Ideal for homes and offices.' },
        { name: 'Bio-Hazard Bin with Pedal', dimensions: 'Medical Grade', image: '/bio-hazard_bin_with_pedal_1.png', description: 'Safe disposal bin for medical and hazardous waste. Color-coded for easy identification.' },
        { name: 'Swing Bin - 60L', dimensions: '60 Litres', image: '/swing_bin_60_lts_f.png', description: 'Heavy-duty swing lid bin for indoor and outdoor waste disposal.' },
        { name: 'Swing Bin - 80L', dimensions: '80 Litres', image: '/swing_bin_80_lts_f.png', description: 'Large capacity swing bin for commercial and public spaces.' },
        { name: 'Doom Lid Bin - 110L', dimensions: '110 Litres', image: '/doom_lid_110_lts_f.png', description: 'Durable doom lid bin for hygienic waste disposal in commercial environments.' },
    ]

    return (
        <>
            <Section bgImage="/garbage-bins-hero.jpg" overlay="rgba(0,0,0,0.6)" size="lg" className={styles.hero}>
                <Container>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Plastic Garbage Bins in Bangalore – Waste Solutions</h1>
                        <p className={styles.heroSubtitle}>
                            Industrial <strong>Garbage Bins in Bangalore</strong> for effective waste management.
                            Our heavy-duty, UV-resistant dustbins are trusted by Municipal Corporations and commercial complexes across India.
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
                        <h2>Our Garbage Bins Range</h2>
                        <p>Professional waste management solutions for all applications</p>
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
                                    iconType="trash"
                                />
                            ))}

                        {/* Sanity Products */}
                        {sanityProducts.map((product) => (
                            <ProductCard
                                key={product._id}
                                name={product.name}
                                dimensions={product.dimensions}
                                description={product.description}
                                image={product.image ? urlFor(product.image).width(500).url() : '/garbage-bins-hero.jpg'}
                                iconType="trash"
                            />
                        ))}

                    </div>
                </Container>
            </Section>

            <SectionDivider />

            <Section>
                <Container size="md">
                    <div className={styles.sectionHeader}>
                        <h2>About Our Garbage Bins</h2>
                        <p>Heavy-duty waste management solutions for commercial and industrial use</p>
                    </div>
                    <div className={styles.intro}>
                        <p>
                            Regal Traders is a premier <strong>plastic garbage bins manufacturer in Bangalore</strong>, offering
                            robust waste management solutions for Municipal Corporations (BBMP), tech parks, and industrial
                            facilities throughout Karnataka and India.
                        </p>
                        <p>
                            From color-coded bins for <strong>wet and dry waste segregation</strong> to large mobile units,
                            we support successful waste management strategies nationwide.
                        </p>
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            <Section background="gray">
                <Container size="none">
                    <div className={styles.sectionHeader}>
                        <h2>Key Features of Our Garbage Bins</h2>
                        <p>Built for effective waste management</p>
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
                        <p>Waste management solutions for all sectors</p>
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

            <Section>
                <Container size="md">
                    <div className={styles.sectionHeader}>
                        <h2>Frequently Asked Questions</h2>
                        <p>Common questions about our garbage bins</p>
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
                        <h2 className={styles.ctaTitle}>Need Garbage Bins in Bulk?</h2>
                        <p className={styles.ctaDescription}>
                            Get competitive wholesale pricing for municipal and commercial projects.
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
                        name: 'Industrial Plastic Garbage Bins',
                        description: 'Heavy-duty plastic garbage bins for waste management',
                        category: 'Industrial Supplies',
                        image: 'https://regal-traders.vercel.app/products/garbage-bins.jpg',
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