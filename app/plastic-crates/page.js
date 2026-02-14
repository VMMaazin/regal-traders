import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Card from '../components/ui/Card'
import ProductCard from '../components/ui/ProductCard'
import Button from '../components/ui/Button'
import SectionDivider from '../components/ui/SectionDivider'
import styles from './product.module.css'

export const metadata = {
    title: 'Plastic Crates in Bangalore | Plastic Crates | Regal Traders',
    description: 'Buy heavy-duty plastic crates from leading manufacturers in Bangalore. Ventilated & closed crates for agriculture and industry. Wholesale delivery across India.',
    keywords: ['plastic crates Bangalore', 'plastic crate manufacturers in Bangalore', 'industrial crates India', 'vegetable crates wholesale', 'heavy duty plastic crates', 'milk crates India', 'fruit crates Bangalore'],
}

export default function PlasticCratesPage() {
    return (
        <>
            <Section bgImage="/plastic-crates-hero.jpg" overlay="rgba(0,0,0,0.6)" size="lg" className={styles.hero}>
                <Container>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Plastic Crates in Bangalore – Heavy Duty Solutions</h1>
                        <p className={styles.heroSubtitle}>
                            Looking for high-quality <strong>Plastic Crates in Bangalore</strong>? Regal Traders is your premier destination.
                            As leading <strong>plastic crate manufacturers in Bangalore</strong>, we supply robust storage solutions across India.
                            From <strong>Peenya Industrial Area</strong> to logistics hubs in <strong>Mumbai, Delhi, and Chennai</strong>, our heavy-duty crates optimize supply chains nationwide.
                        </p>
                        <Button href="/bulk-order" variant="primary" size="lg">
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
                        <h2>Why Choose Regal Traders for Plastic Crates?</h2>
                        <p>
                            Regal Traders is a trusted name among <strong>plastic crate suppliers in India</strong>. We specialize in heavy-duty crates for widespread industrial use.
                            Choosing us for <strong>wholesale plastic crates in Bangalore</strong> ensures:
                        </p>
                    </div>

                    <div className={styles.featuresGrid}>
                        <Card className={styles.featureCard}>
                            <h3>Superior Build Quality</h3>
                            <p>Manufactured using high-density polyethylene (HDPE), our crates remain sturdy under heavy loads and extreme temperatures, meeting international industrial standards.</p>
                        </Card>
                        <Card className={styles.featureCard}>
                            <h3>Food-Grade Material</h3>
                            <p>We provide crates made from 100% virgin plastic, making them safe for storing vegetables, fruits, and dairy. They are non-toxic and easy to sanitize.</p>
                        </Card>
                        <Card className={styles.featureCard}>
                            <h3>Space-Saving Stackability</h3>
                            <p>Our <strong>stackable plastic crates</strong> feature interlocking designs that drastically reduce storage space requirements in warehouses and transport vehicles across India.</p>
                        </Card>
                        <Card className={styles.featureCard}>
                            <h3>Ergonomic Design</h3>
                            <p>With smooth handles and reinforced bases, our crates are easy to lift and move, reducing the risk of workplace injuries and improving efficiency.</p>
                        </Card>
                        <Card className={styles.featureCard}>
                            <h3>Bulk Wholesale Pricing</h3>
                            <p>We offer competitive pricing for large orders, making us the preferred choice for wholesale storage solutions in Bangalore and throughout Karnataka.</p>
                        </Card>
                        <Card className={styles.featureCard}>
                            <h3>Pan-India Shipping</h3>
                            <p>While we offer fast local delivery in Bangalore, we also provide reliable pan-India shipping for businesses across the country.</p>
                        </Card>
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            {/* Product Gallery */}
            <Section background="gray">
                <Container>
                    <div className={styles.sectionHeader}>
                        <h2>Types of Plastic Crates We Offer</h2>
                        <p>Premium quality industrial crates in various sizes designed for durability and efficiency</p>
                    </div>

                    <div className={styles.infoGrid} style={{ marginBottom: '40px' }}>
                        <Card className={styles.infoCard}>
                            <h3>Vegetable & Fruit Crates</h3>
                            <p>
                                Our <strong>vegetable plastic crates</strong> are designed with perforated walls for optimal airflow.
                                Essential for keeping produce fresh from farms in Karnataka to markets across India.
                                Lightweight yet durable for heavy loads like tomatoes and onions.
                            </p>
                        </Card>

                        <Card className={styles.infoCard}>
                            <h3>Industrial & Heavy Duty Crates</h3>
                            <p>
                                We offer high-quality <strong>industrial plastic crates</strong> that Bangalore businesses trust.
                                Reinforced for heavy machinery parts and automotive spares, available in closed (CC) and perforated models
                                for diverse industrial applications.
                            </p>
                        </Card>

                        <Card className={styles.infoCard}>
                            <h3>Milk, Bread & Egg Crates</h3>
                            <p>
                                We cater to the food distribution industry with milk crates designed for high impact resistance, essential for daily distribution cycles across the country.
                                Our bread and egg crates minimize breakage during transit in busy urban environments.
                            </p>
                        </Card>
                    </div>

                    <div className="grid grid-cols-3">
                        {[
                            { id: '32150-cc-crate', name: '32150 CC Crate', dimensions: '300 x 200 x 150 mm', image: '/300_x_200_x_150.png', description: 'Complete Closed Crate with Built-in Handle', alt: 'Plastic Crates in Bangalore - Stackable Storage Solutions by Regal Traders' },
                            { id: '43220-cc-crate', name: '43220 CC Crate', dimensions: '400 x 300 x 220 mm', image: '/400_x_300_x_220.png', description: 'Complete Closed Crate with Built-in Handle', alt: 'Industrial Plastic Crates Bangalore - Heavy Duty Crates for Manufacturing Hubs' },
                            { id: '64120-tp-crate', name: '64120 TP Crate', dimensions: '600 x 400 x 120 mm', image: '/600_x_400_x_120.png', description: 'Totally Perforated Crate', alt: 'Vegetable Plastic Crates Bangalore - Perforated Crates for Fresh Produce in India' },
                            { id: '64180-tp-crate', name: '64180 TP Crate', dimensions: '600 x 400 x 180 mm', image: '/600_x_400_x_180.png', description: 'Totally Perforated Crate', alt: 'Wholesale Plastic Crates Bangalore - Bulk Storage Bins' },
                            { id: '64225-tp-crate', name: '64225 TP Crate', dimensions: '600 x 400 x 225 mm', image: '/600_x_400_x_180.png', description: 'Totally Perforated Crate', alt: 'Stackable plastic crates Bangalore' },
                            { id: '64325-ch-crate', name: '64325 CH Crate', dimensions: '600 x 400 x 325 mm', image: '/600_x_400_x_325.png', description: 'Complete Closed Crate with Handle', alt: 'Industrial plastic crates Bangalore' },
                            { id: '64380-ch-crate', name: '64380 CH Crate', dimensions: '600 x 400 x 380 mm', image: '/600_x_400_x_380.png', description: 'Complete Closed Crate with Handle', alt: 'Vegetable plastic crates Bangalore' },
                            { id: '857425-ch-crate', name: '857425 CH Crate', dimensions: '805 x 570 x 425 mm', image: '/805_x_570 x_425.png', description: 'Complete Closed Crate with Handle', alt: 'Wholesale plastic crates India' },
                            { id: '543629-tp-crate', name: '543629 TP Crate', dimensions: '540 x 360 x 290 mm', image: '/540_x_360_x_290.png', description: 'Perforated Crate', alt: 'Plastic crate manufacturers in Bangalore' },
                        ].map((product) => (
                            <ProductCard
                                key={product.id}
                                name={product.name}
                                dimensions={product.dimensions}
                                description={product.description}
                                image={product.image}
                                alt={product.alt}
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
                            As a leading <strong>plastic crate supplier in Bangalore</strong>, we support various sectors across Karnataka and all of India.
                            Our solutions are tailored for the unique demands of modern industrial and commercial operations nationwide.
                        </p>
                    </div>

                    <div className={styles.industriesGrid}>
                        <Card className={styles.industryCard}>
                            <h3>E-commerce & Logistics</h3>
                            <p>Efficient inventory management and last-mile delivery solutions for fast-paced logistics centers in major metros.</p>
                        </Card>

                        <Card className={styles.industryCard}>
                            <h3>Agriculture & Horticulture</h3>
                            <p>Reliable transport and harvesting crates for fresh produce traders and agricultural hubs across India.</p>
                        </Card>

                        <Card className={styles.industryCard}>
                            <h3>Manufacturing & Engineering</h3>
                            <p>Supplying the <strong>Industrial plastic crates Bangalore</strong> needs for heavy machinery units and parts storage.</p>
                        </Card>

                        <Card className={styles.industryCard}>
                            <h3>Retail & Supermarkets</h3>
                            <p>Organized storage and display solutions for grocery chains and supermarkets nationwide.</p>
                        </Card>

                        <Card className={styles.industryCard}>
                            <h3>Pharma & Healthcare</h3>
                            <p>Hygienic and organized storage for medical supplies in pharmaceutical and healthcare logistics across the country.</p>
                        </Card>

                        <Card className={styles.industryCard}>
                            <h3>Dairy & Food Processing</h3>
                            <p>Food-grade containers for daily milk distribution and food production units from Bangalore to the whole of India.</p>
                        </Card>
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            {/* Sizes & Customization */}
            <Section background="light">
                <Container>
                    <div className={styles.sectionHeader}>
                        <h2>Plastic Crate Sizes & Customization Options</h2>
                        <p>We understand that one size doesn't fit all. We offer a variety of dimensions and configurations to suit your specific industrial needs across India.</p>
                    </div>

                    <div className={styles.infoGrid}>
                        <Card className={styles.infoCard}>
                            <h3>Small Parts Crates</h3>
                            <p>Dimensions: 300 x 200 mm. Ideal for sorting small components in the electronics and automotive industries nationwide.</p>
                        </Card>
                        <Card className={styles.infoCard}>
                            <h3>Standard Logistics Crates</h3>
                            <p>Dimensions: 600 x 400 mm. The most versatile size for retail and general logistics operations in all Indian cities.</p>
                        </Card>
                        <Card className={styles.infoCard}>
                            <h3>Large/Jumbo Crates</h3>
                            <p>Up to 800 x 570 mm. Designed for heavy-duty industrial storage and bulk material handling in large manufacturing units.</p>
                        </Card>
                    </div>

                    <div style={{ marginTop: '40px', textAlign: 'center' }}>
                        <p>
                            <strong>Customization:</strong> For bulk orders, Regal Traders offers options for color-coding (Red, Blue, Yellow, Green)
                            to help with inventory organization. We can also provide screen printing or embossing of your company logo on the crates,
                            ensuring brand visibility across the supply chain in India.
                        </p>
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            {/* FAQ */}
            <Section background="white">
                <Container>
                    <div className={styles.sectionHeader}>
                        <h2>Frequently Asked Questions</h2>
                        <p>Common questions about our plastic crates in Bangalore and India</p>
                    </div>

                    <div className={styles.faqContainer}>
                        <Card className={styles.faqItem}>
                            <h3>Are your plastic crates food-safe?</h3>
                            <p>
                                Yes, our food-grade crates are made from 100% virgin HDPE plastic, meeting international safety requirements
                                for direct contact with food products and dairy.
                            </p>
                        </Card>

                        <Card className={styles.faqItem}>
                            <h3>Do you ship plastic crates outside of Bangalore?</h3>
                            <p>
                                Absolutely. While we have a strong presence in Bangalore, we provide reliable pan-India shipping to all major cities and industrial zones.
                            </p>
                        </Card>

                        <Card className={styles.faqItem}>
                            <h3>Do you offer discounts for wholesale orders?</h3>
                            <p>
                                Yes, as <strong>wholesale plastic crates Bangalore</strong> specialists, we provide significant volume-based
                                discounts for warehouses and industrial units across the country.
                            </p>
                        </Card>

                        <Card className={styles.faqItem}>
                            <h3>What is the Minimum Order Quantity (MOQ)?</h3>
                            <p>
                                The MOQ varies depending on the specific product and size. Please contact our sales team for precise details regarding your requirements.
                            </p>
                        </Card>

                        <Card className={styles.faqItem}>
                            <h3>Can I get my company logo printed on the crates?</h3>
                            <p>
                                Yes, we offer branding services for bulk orders. We can emboss or screen-print your logo on the sides
                                of the crates for better brand identification throughout your logistics network.
                            </p>
                        </Card>
                    </div>
                </Container>
            </Section>

            <SectionDivider />

            {/* Contact Section */}
            <Section background="dark" style={{ color: 'white' }}>
                <Container>
                    <div style={{ textAlign: 'center', color: 'white' }}>
                        <h2 style={{ color: 'white' }}>Contact Regal Traders for Wholesale Plastic Crates</h2>
                        <p style={{ color: 'white', fontSize: '1.2rem', marginBottom: '32px', maxWidth: '800px', margin: '0 auto 32px' }}>
                            Regal Traders provides the most reliable <strong style={{ color: 'white' }}>Plastic Crates in Bangalore</strong> and across India.
                            From stackable retail crates to heavy-duty industrial bins, we have the right solutions at the best prices.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                            <Button href="/bulk-order" variant="primary" size="xl">
                                Request Bulk Quote
                            </Button>
                            <Button href="/contact" variant="outline" size="xl" style={{ border: '2px solid white', color: 'white' }}>
                                Fast Delivery in Bangalore
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    )
}
