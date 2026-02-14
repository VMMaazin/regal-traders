'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
import Button from '../ui/Button'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Plastic Crates', href: '/plastic-crates' },
        { name: 'Storage Bins', href: '/plastic-storage-bins' },
        { name: 'Garbage Bins', href: '/plastic-garbage-bins' },
        { name: 'Plastic Pallets', href: '/plastic-pallets' },
        { name: 'Poultry Equipment', href: '/poultry-equipment' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="Regal Traders Logo"
                        width={50}
                        height={50}
                        className={styles.logoImage}
                        priority
                    />
                    <span className={styles.logoText}>Regal Traders</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className={styles.navLink}>
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <Button
                        href="/Regal-Traders-Catalogue.pdf"
                        variant="outline"
                        size="sm"
                        className={styles.downloadButton}
                        download
                    >
                        Download Catalogue
                    </Button>

                    <Button href="/bulk-order" variant="primary" size="sm">
                        Request Quote
                    </Button>

                    <button
                        className={styles.mobileMenuButton}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={styles.hamburger}></span>
                        <span className={styles.hamburger}></span>
                        <span className={styles.hamburger}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <nav className={styles.mobileNav}>
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={styles.mobileNavLink}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a
                        href="/Regal-Traders-Catalogue.pdf"
                        className={styles.mobileNavLink}
                        onClick={() => setMobileMenuOpen(false)}
                        download
                    >
                        Download Catalogue
                    </a>
                </nav>
            )}
        </header>
    )
}
