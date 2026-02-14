import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'

export const metadata = {
    title: 'Thank You | Regal Traders',
    description: 'Thank you for your inquiry. Our team will contact you shortly.',
}

export default function ThankYouPage() {
    return (
        <Section background="light" size="lg">
            <Container>
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                    <div style={{ fontSize: '64px', marginBottom: '24px' }}>✓</div>
                    <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>
                        Thank You!
                    </h1>
                    <p style={{ fontSize: '18px', color: '#666', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                        We have received your inquiry regarding the bulk order. Our team will review
                        your requirements and get back to you within 24 hours.
                    </p>
                    <Button href="/" variant="primary" size="lg">
                        Back to Home
                    </Button>
                </div>
            </Container>
        </Section>
    )
}
