import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/WhatsAppButton'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata = {
    metadataBase: new URL('https://regaltraders.com'),
    title: {
        default: 'Regal Traders - Wholesale Plastic Crates & Industrial Supplies | Bengaluru, India',
        template: '%s | Regal Traders'
    },
    description: 'Leading wholesale supplier of plastic crates, storage bins, garbage bins, and poultry equipment in India. Based in Bengaluru with pan-India shipping. Bulk orders welcome.',
    keywords: ['plastic crates', 'plastic crates supplier India', 'plastic crates Bangalore', 'plastic storage bins wholesale', 'poultry equipment supplier India', 'industrial plastic bins', 'wholesale plastic crates'],
    authors: [{ name: 'Regal Traders' }],
    creator: 'Regal Traders',
    publisher: 'Regal Traders',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://regaltraders.com',
        siteName: 'Regal Traders',
        title: 'Regal Traders - Wholesale Plastic Crates & Industrial Supplies',
        description: 'Leading wholesale supplier of plastic crates, storage bins, garbage bins, and poultry equipment in India.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Regal Traders - Industrial Plastic Solutions',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Regal Traders - Wholesale Plastic Crates & Industrial Supplies',
        description: 'Leading wholesale supplier of plastic crates, storage bins, garbage bins, and poultry equipment in India.',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/logo.png',
        shortcut: '/logo.png',
        apple: '/logo.png',
    },
    verification: {
        // Add Google Search Console verification here
        // google: 'your-verification-code',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="canonical" href="https://regaltraders.com" />
            </head>
            <body className={inter.className}>
                <Header />
                <main>{children}</main>
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    )
}
