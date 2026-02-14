// SEO utility functions for generating metadata and structured data

export function generatePageMetadata({
    title,
    description,
    keywords = [],
    canonical,
    ogImage = '/og-image.jpg',
}) {
    return {
        title,
        description,
        keywords: keywords.join(', '),
        alternates: {
            canonical: canonical || `https://regaltraders.com${canonical}`,
        },
        openGraph: {
            title,
            description,
            url: canonical || 'https://regaltraders.com',
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    }
}

// Organization Schema for Regal Traders
export function getOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Regal Traders',
        description: 'Wholesale supplier of plastic crates, storage bins, garbage bins, and poultry equipment',
        url: 'https://regaltraders.com',
        logo: 'https://regaltraders.com/logo.png',
        image: 'https://regaltraders.com/og-image.jpg',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Industrial Area',
            addressLocality: 'Bengaluru',
            addressRegion: 'Karnataka',
            addressCountry: 'IN',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-XXXXXXXXXX',
            contactType: 'Customer Service',
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi', 'Kannada'],
        },
        sameAs: [
            // Add social media URLs here
        ],
    }
}

// Local Business Schema
export function getLocalBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Regal Traders',
        image: 'https://regaltraders.com/og-image.jpg',
        '@id': 'https://regaltraders.com',
        url: 'https://regaltraders.com',
        telephone: '+91-XXXXXXXXXX',
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Industrial Area',
            addressLocality: 'Bengaluru',
            addressRegion: 'Karnataka',
            postalCode: '560XXX',
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 12.9716,
            longitude: 77.5946,
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00',
        },
    }
}

// Product Schema Generator
export function getProductSchema({ name, description, category, image }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name,
        description,
        image,
        category,
        brand: {
            '@type': 'Brand',
            name: 'Regal Traders',
        },
        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            seller: {
                '@type': 'Organization',
                name: 'Regal Traders',
            },
        },
    }
}

// FAQ Schema Generator
export function getFAQSchema(faqs) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    }
}

// Breadcrumb Schema Generator
export function getBreadcrumbSchema(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    }
}
