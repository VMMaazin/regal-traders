import { generatePageMetadata, getProductSchema, getFAQSchema } from '@/lib/seo'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Card from '../components/ui/Card'
import ProductCard from '../components/ui/ProductCard'
import Button from '../components/ui/Button'
import SectionDivider from '../components/ui/SectionDivider'
import { ShieldIcon, BoxIcon, TruckIcon, TargetIcon, StackIcon, CloudIcon } from '../components/ui/Icons'
import styles from '../plastic-crates/product.module.css'
import { client, urlFor } from '@/lib/sanity'


export const dynamic = 'force-dynamic'

export const metadata = generatePageMetadata({
    title: 'Plastic Pallets in Bangalore | Plastic Pallets | Regal Traders',
    description: 'Heavy-duty plastic pallets manufacturers in Bangalore. 4-way entry, industrial, and export pallets. Durable & hygienic storage solutions for India.',
    keywords: ['plastic pallets Bangalore', 'plastic pallet manufacturers India', 'industrial pallets', 'heavy duty plastic pallets', '4 runner pallets India', 'export pallets Bangalore'],
    canonical: '/plastic-pallets',
})

export default async function PlasticPalletsPage() {

    const sanityProducts = await client.fetch(`
      *[_type == "product" && category == "plastic-pallets"]{
        _id,
        name,
        description,
        dimensions,
        image
      }
    `, {}, { next: { revalidate: 0 } })

    const staticProducts = [
        {
            id: '121013-lw-cft',
            name: '121013 LW CFT',
            dimensions: '1200 x 1000 x 130 mm',
            description: '9 legged pallet which can bear up to 2500 kg of static load and up to 600 kg of dynamic load.',
            image: '/121013_LW_CFT.png'
        },
        {
            id: '121013-hw-cft',
            name: '121013 HW CFT',
            dimensions: '1200 x 1000 x 130 mm',
            description: '9 legged pallet which can bear up to 3000 kg of static load and up to 800 kg of dynamic load.',
            image: '/121013_HW_CFT.png'
        },
        {
            id: '121015-cft',
            name: '121015 CFT',
            dimensions: '1200 x 1000 x 150 mm',
            description: '3 Runner Pallet which can bear up to 4500 kg of static load and up to 1000 kg of dynamic load.',
            image: '/121015_CFT.png'
        },
        {
            id: '121015-lw',
            name: '121015 LW',
            dimensions: '1200 x 1000 x 150 mm',
            description: '3 Runner Pallet which can bear up to 2500 kg of static load and up to 800 kg of dynamic load.',
            image: '/121015_LW.png'
        },
    ]

    const features = [
        { title: 'High Load Capacity', description: 'Engineered to handle static loads up to 4500kg and dynamic loads up to 1000kg.', IconComponent: ShieldIcon },
        { title: 'Durable Construction', description: 'Manufactured from high-grade HDPE for long-lasting industrial performance.', IconComponent: BoxIcon },
        { title: 'Efficient Handling', description: 'Optimized designs for pallet jacks and forklifts, reducing logistics time.', IconComponent: TruckIcon },
        { title: 'Standard Dimensions', description: 'Available in 1200x1000mm sizes, compatible with global logistics standards.', IconComponent: TargetIcon },
        { title: 'Stackable Design', description: 'Space-saving stackability for empty pallet storage and return logistics.', IconComponent: StackIcon },
        { title: 'Weather Resistant', description: 'Resistant to moisture, chemicals, and extreme temperatures across India.', IconComponent: CloudIcon },
    ]

    const faqs = [
        {
            question: 'What is the difference between static and dynamic load?',
            answer: 'Static load is the weight a pallet can hold when it is stationary on a flat surface. Dynamic load is the weight it can support while being moved by a forklift or pallet jack.',
        },
        {
            question: 'Are your plastic pallets suitable for export?',
            answer: 'Yes, our plastic pallets are ideal for export as they do not require fumigation (ISPM 15 compliance), unlike wooden pallets, saving you time and cost.',
        },
        {
            question: 'Do you deliver plastic pallets in Bangalore?',
            answer: 'Yes, we provide fast delivery across Bangalore, including industrial areas like Peenya, Bommasandra, and Whitefield, as well as pan-India shipping.',
        },
        {
            question: 'What is the Minimum Order Quantity (MOQ)?',
            answer: 'MOQ varies based on the pallet type and your location. Please reach out to us for specific wholesale details.',
        },
    ]

    return (
        <>
            <Section bgImage="/plastic-pallets.png" overlay="rgba(0,0,0,0.6)" size="lg" className={styles.hero}>
                <Container>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Plastic Pallets in Bangalore – Heavy Duty & Export</h1>
                        <p className={styles.heroSubtitle}>
                            Regal Traders is a premier supplier of high-performance <strong>plastic pallets in Bangalore</strong>.
                            Our heavy-duty pallets are trusted by industries nationwide for optimizing warehousing and supply chain operations.
                            From 9-legged lightweight designs for exports to 3-runner heavyweight models for racking, we provide robust solutions across India.
                        </p>
                        <Button href="/order-inquiry" variant="primary" size="lg">
                            Request Bulk Quote
                        </Button>
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            {/* Why Choose Section */}
            <Section background="white">
                <Container>
                    <div className={styles.sectionHeader}>
                        <h2>Why Choose Regal Traders for Plastic Pallets?</h2>
                        <p>
                            As leading <strong>plastic pallet manufacturers in Bangalore</strong>, we ensure our products meet global industrial standards.
                            Our pallets offer a superior, hygienic alternative to wooden pallets for pharmaceutical and food industries across India.
                        </p>
                    </div>

                    <div className={styles.featuresGrid}>
                        {features.map((feature, index) => (
                            <Card key={index} className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <feature.IconComponent size={32} />
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            {/* Product Gallery */}
            <Section background="gray">
                <Container>
                    <div className={styles.sectionHeader}>
                        <h2>Our Plastic Pallet Range</h2>
                        <p>Premium quality industrial pallets designed for maximum load bearing and durability</p>
                    </div>

                    <div className="grid grid-cols-2">

                        {/* Static Products — hidden if Sanity has an entry with the same name */}
                        {staticProducts
                            .filter(staticProduct =>
                                !sanityProducts.some(sanityProduct =>
                                    sanityProduct.name === staticProduct.name
                                )
                            )
                            .map((product) => (
                                <ProductCard
                                    key={product.id}
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
                                image={product.image ? urlFor(product.image).width(500).url() : '/plastic-pallets.png'}
                                iconType="container"
                            />
                        ))}

                    </div>
                </Container>
            </Section>

            <SectionDivider />

            {/* Industries We Serve */}
            <Section background="white">
                <Container>
                    <div className={styles.sectionHeader}>
                        <h2>Industries We Serve in India</h2>
                        <p>
                            Our <strong>wholesale plastic pallets Bangalore</strong> solutions are trusted by diverse sectors for their reliability and strength.
                        </p>
                    </div>

                    <div className={styles.industriesGrid}>
                        <Card className={styles.industryCard}>
                            <h3>Warehousing & Logistics</h3>
                            <p>Optimizing vertical storage and transit efficiency in major logistics hubs across Bengaluru and beyond.</p>
                        </Card>
                        <Card className={styles.industryCard}>
                            <h3>Pharmaceuticals</h3>
                            <p>Hygienic, easy-to-clean pallets that meet the strict sanitary requirements of the pharma industry.</p>
                        </Card>
                        <Card className={styles.industryCard}>
                            <h3>Food & Beverage</h3>
                            <p>Moisture-resistant and non-toxic pallets ideal for cold storage and food processing units in India.</p>
                        </Card>
                        <Card className={styles.industryCard}>
                            <h3>Automotive & Engineering</h3>
                            <p>Heavy-duty pallets capable of supporting dense components and machinery in manufacturing plants.</p>
                        </Card>
                        <Card className={styles.industryCard}>
                            <h3>E-commerce</h3>
                            <p>Durable solutions for fast-moving inventory management in high-volume fulfillment centers.</p>
                        </Card>
                        <Card className={styles.industryCard}>
                            <h3>Export Industries</h3>
                            <p>Compliance-ready pallets for international shipping, eliminating the need for fumigation.</p>
                        </Card>
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            {/* FAQ */}
            <Section background="white">
                <Container>
                    <div className={styles.sectionHeader}>
                        <h2>Frequently Asked Questions</h2>
                        <p>Common questions about our plastic pallets in Bangalore and India</p>
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

            {/* Contact Section */}
            <Section background="dark" style={{ color: 'white' }}>
                <Container>
                    <div style={{ textAlign: 'center', color: 'white' }}>
                        <h2 style={{ color: 'white' }}>Get a Quote for Wholesale Plastic Pallets</h2>
                        <p style={{ color: 'white', fontSize: '1.2rem', marginBottom: '32px', maxWidth: '800px', margin: '0 auto 32px' }}>
                            Looking for reliable <strong style={{ color: 'white' }}>Plastic Pallets in Bangalore</strong> or anywhere in India?
                            Regal Traders offers the best rates for bulk orders with guaranteed quality and timely delivery.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                            <Button href="/order-inquiry" variant="primary" size="xl">
                                Request Bulk Quote
                            </Button>
                            <Button href="/contact" variant="outline" size="xl" style={{ border: '2px solid white', color: 'white' }}>
                                Contact Our Team
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(getProductSchema({
                        name: 'Heavy Duty Plastic Pallets',
                        description: 'High-quality plastic pallets for industrial storage and logistics in India',
                        category: 'Industrial Supplies',
                        image: 'https://regal-traders.vercel.app/plastic-pallets.png',
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