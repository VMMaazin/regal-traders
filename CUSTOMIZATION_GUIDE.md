# Regal Traders Website - Customization Guide

This guide will help you customize and maintain your Regal Traders website. Follow these instructions to update content, add products, change colors, and configure features.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Updating Company Information](#updating-company-information)
3. [Customizing Colors & Branding](#customizing-colors--branding)
4. [Adding/Editing Products](#addingediting-products)
5. [WhatsApp Integration](#whatsapp-integration)
6. [Contact Information](#contact-information)
7. [Adding Your Logo](#adding-your-logo)
8. [Business Hours](#business-hours)
9. [SEO & Meta Tags](#seo--meta-tags)
10. [Deployment](#deployment)

---

## Getting Started

### Running the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your changes in real-time.

### Building for Production

```bash
npm run build
npm start
```

---

## Updating Company Information

### Company Name & Tagline

**File:** `app/components/layout/Header.js`

```javascript
// Line 50-55
<div className={styles.logoText}>
    <span className={styles.logoName}>Regal Traders</span>
    <span className={styles.logoTagline}>RT</span>
</div>
```

**File:** `app/components/layout/Footer.js`

```javascript
// Line 15-20
<div className={styles.brand}>
    <div className={styles.logoText}>
        <span className={styles.logoName}>Regal Traders</span>
        <span className={styles.logoTagline}>RT</span>
    </div>
    <p className={styles.description}>
        Leading wholesale supplier of plastic crates, storage bins, garbage bins, and poultry equipment in India.
        Based in Bengaluru with pan-India shipping.
    </p>
</div>
```

---

## Customizing Colors & Branding

### Primary Yellow Color

**File:** `app/globals.css`

```css
/* Line 11-15 */
--color-primary: #E9E600;          /* Main yellow color */
--color-primary-dark: #D1CF00;     /* Darker shade */
--color-primary-light: #F0ED33;    /* Lighter shade */
--color-primary-glow: rgba(233, 230, 0, 0.4);  /* Glow effect */
```

**To change the yellow color:**
1. Update `--color-primary` to your desired hex color
2. Adjust `--color-primary-dark` (slightly darker)
3. Adjust `--color-primary-light` (slightly lighter)
4. Update the rgba values in `--color-primary-glow` to match

### Background Colors

```css
/* Line 3-9 */
--color-bg-primary: #000000;       /* Main black background */
--color-bg-secondary: #0A0A0A;     /* Near black */
--color-bg-card: #0F0F0F;          /* Card backgrounds */
--color-bg-elevated: #141414;      /* Elevated surfaces */
--color-bg-hover: #1A1A1A;         /* Hover states */
```

---

## Adding/Editing Products

### Product Categories on Homepage

**File:** `app/page.js`

Find the "Product Categories" section (around line 120-160):

```javascript
<Section background="primary">
    <Container>
        <div className={styles.sectionHeader}>
            <h2>Product Categories</h2>
            <p>Comprehensive industrial plastic products range</p>
        </div>
        <Grid columns={4}>
            {/* Add your product cards here */}
            <Card>
                <div className={styles.productIcon}>
                    <BoxIcon size={48} />
                </div>
                <h3 className={styles.productTitle}>Plastic Crates</h3>
                <p className={styles.productDescription}>
                    Industrial-grade storage and transport solutions
                </p>
                <Link href="/plastic-crates" className={styles.productLink}>
                    View Products →
                </Link>
            </Card>
            {/* Repeat for other products */}
        </Grid>
    </Container>
</Section>
```

**To add a new product category:**

1. Copy an existing `<Card>` block
2. Change the icon (import from `Icons.js`)
3. Update the title and description
4. Update the link `href` to match your new product page
5. Create the product page (see below)

### Creating a New Product Page

1. **Create a new folder** in `app/` directory:
   ```
   app/your-product-name/
   ```

2. **Copy files** from an existing product folder (e.g., `plastic-crates/`):
   - `page.js` (main content)
   - `product.module.css` (styles)

3. **Edit `page.js`** to update:
   - Hero title and description
   - Product features
   - Industries served
   - FAQs
   - Related products

4. **Update navigation** in `app/components/layout/Header.js`:
   ```javascript
   { name: 'Your Product', href: '/your-product-name' }
   ```

### Product Images

Place product images in `public/images/` and reference them:

```javascript
<Image 
    src="/images/your-product.jpg" 
    alt="Product Name"
    width={800}
    height={600}
/>
```

---

## WhatsApp Integration

### WhatsApp Floating Button

**File:** `app/components/ui/WhatsAppButton.js`

```javascript
// Line 4
const phoneNumber = '919XXXXXXXXX'; // Replace with your WhatsApp number

// Line 5
const message = 'Hello! I would like to inquire about your products.'; // Default message
```

**Format:** Use international format without `+` or spaces
- Example: `919876543210` for +91 98765 43210

### WhatsApp in Footer

**File:** `app/components/layout/Footer.js`

```javascript
// Line 90-95
<Button 
    variant="primary" 
    size="sm" 
    href="https://wa.me/919XXXXXXXXX"
>
    Talk to Us (WhatsApp)
</Button>
```

---

## Contact Information

### Phone Number

**File:** `app/components/layout/Footer.js`

```javascript
// Line 25-30
<div className={styles.contact}>
    <PhoneIcon size={16} />
    <p>+91-XXXXXXXXXX</p>
</div>
```

### Email Address

```javascript
// Line 31-36
<div className={styles.contact}>
    <MailIcon size={16} />
    <p>info@regaltraders.com</p>
</div>
```

### Physical Address

```javascript
// Line 37-42
<div className={styles.contact}>
    <MapPinIcon size={16} />
    <p>Bengaluru, Karnataka, India</p>
</div>
```

---

## Adding Your Logo

### Option 1: Text Logo (Current)

**File:** `app/components/layout/Header.js`

```javascript
<div className={styles.logoText}>
    <span className={styles.logoName}>Regal Traders</span>
    <span className={styles.logoTagline}>RT</span>
</div>
```

### Option 2: Image Logo

1. **Add your logo** to `public/images/logo.png`

2. **Update Header.js:**

```javascript
import Image from 'next/image'

// Replace the logoText div with:
<Image 
    src="/images/logo.png" 
    alt="Regal Traders Logo"
    width={180}
    height={50}
    priority
/>
```

3. **Update Footer.js** similarly

---

## Business Hours

**File:** `app/components/layout/Footer.js`

```javascript
// Line 70-85
<div className={styles.column}>
    <h3 className={styles.heading}>Business Hours</h3>
    <ul className={styles.hours}>
        <li>Monday - Saturday</li>
        <li>9:00 AM - 6:00 PM</li>
        <li className={styles.closed}>Sunday: Closed</li>
    </ul>
    <div className={styles.badge}>
        Quality Industrial Supplies Since Inception
    </div>
</div>
```

---

## SEO & Meta Tags

### Homepage Meta Tags

**File:** `app/page.js`

```javascript
export const metadata = {
    title: 'Regal Traders - Wholesale Industrial Plastic Products',
    description: 'Leading wholesale supplier of plastic crates, storage bins, garbage bins, and poultry equipment in India. Bulk orders, pan-India shipping.',
    keywords: 'plastic crates, storage bins, garbage bins, poultry equipment, wholesale, Bengaluru',
}
```

### Product Page Meta Tags

**File:** `app/plastic-crates/page.js` (and other product pages)

```javascript
export const metadata = {
    title: 'Plastic Crates - Wholesale Industrial Storage | Regal Traders',
    description: 'Industrial-grade plastic crates for warehousing, logistics, and agriculture. Bulk wholesale pricing, pan-India delivery.',
}
```

---

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Manual Deployment

```bash
npm run build
```

Upload the `.next` folder and `package.json` to your hosting provider.

---

## Common Customizations

### Add a New Section to Homepage

**File:** `app/page.js`

```javascript
<Section background="primary">
    <Container>
        <div className={styles.sectionHeader}>
            <h2>Your Section Title</h2>
            <p>Your section description</p>
        </div>
        {/* Your content here */}
    </Container>
</Section>
```

### Change Section Background

Options: `primary` (black), `secondary` (near black), `gradient` (yellow)

```javascript
<Section background="gradient">
```

### Update Testimonials

**File:** `app/page.js` (around line 200-250)

```javascript
<Card>
    <div className={styles.testimonial}>
        <div className={styles.rating}>
            {[...Array(5)].map((_, i) => (
                <span key={i} className={styles.star}>★</span>
            ))}
        </div>
        <p className={styles.testimonialText}>
            "Your customer testimonial here"
        </p>
        <p className={styles.testimonialAuthor}>
            - Customer Name, Company Name
        </p>
    </div>
</Card>
```

---

## Need Help?

- **Next.js Documentation:** [nextjs.org/docs](https://nextjs.org/docs)
- **React Documentation:** [react.dev](https://react.dev)
- **CSS Variables:** Edit `app/globals.css` for global styling

---

## File Structure Reference

```
RT AG/
├── app/
│   ├── globals.css              # Global styles & colors
│   ├── page.js                  # Homepage
│   ├── page.module.css          # Homepage styles
│   ├── layout.js                # Root layout
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.js        # Navigation bar
│   │   │   ├── Header.module.css
│   │   │   ├── Footer.js        # Footer
│   │   │   └── Footer.module.css
│   │   └── ui/
│   │       ├── Button.js        # Button component
│   │       ├── Card.js          # Card component
│   │       ├── Section.js       # Section wrapper
│   │       ├── Icons.js         # SVG icons
│   │       └── WhatsAppButton.js # WhatsApp floating button
│   ├── plastic-crates/          # Product page
│   ├── plastic-storage-bins/    # Product page
│   ├── plastic-garbage-bins/    # Product page
│   └── poultry-equipment/       # Product page
├── public/
│   └── images/                  # Your images go here
└── package.json                 # Dependencies
```

---

**Last Updated:** February 2026
