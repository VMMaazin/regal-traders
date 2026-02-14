# Project Structure - Regal Traders

This document provides an overview of the directory structure and organization of the Regal Traders project.

## Root Directory

- `app/`: Contains the Next.js App Router source code (pages, components, styles).
- `lib/`: Shared utility functions and configuration (e.g., SEO helpers).
- `public/`: Static assets such as images, icons, and professional media.
- `netlify.toml`: Configuration for Netlify deployment and redirects.
- `next.config.js`: Next.js configuration settings.
- `package.json`: Project dependencies and scripts.
- `jsconfig.json`: JavaScript configuration for path aliasing.
- `CUSTOMIZATION_GUIDE.md`: Guide for common styling and content updates.

---

## Technical Overview - `app/` Directory

The project follows the [Next.js App Router](https://nextjs.org/docs/app) architecture.

### Routing & Pages
Each subdirectory in `app/` (except `components`) represents a route:
- `app/page.js`: Homepage.
- `app/about/`: About Us page.
- `app/bulk-order/`: Bulk/Wholesale inquiry form.
- `app/contact/`: Contact information page.
- `app/plastic-crates/`: Product category page for crates.
- `app/plastic-garbage-bins/`: Product category page for garbage bins.
- `app/plastic-storage-bins/`: Product category page for storage bins.
- `app/poultry-equipment/`: Product category page for poultry items.

### Components
The `app/components/` directory is split into two main sections:

#### 1. Layout (`app/components/layout/`)
Global UI elements used across all pages:
- `Header.js`: Navigation bar, logo, and mobile menu.
- `Footer.js`: Site footer with contact info and secondary links.

#### 2. UI Components (`app/components/ui/`)
ReusableAtomic and molecular UI components:
- `Button.js`: Standardized button component with multiple variants (primary, secondary).
- `Card.js`: Versatile container for product categories and features.
- `Container.js`: Layout wrapper to maintain consistent page widths.
- `Section.js`: Background-aware section wrapper (white, light, black backgrounds).
- `Icons.js`: Centralized SVG icon library for the site.
- `ProductCard.js`: Specific card component for individual product listings.

### Styling
- `app/globals.css`: Global CSS variables (branding colors) and reset styles.
- `*.module.css`: Scoped CSS modules for individual components and pages.

---

## Key Patterns
- **Branding**: The primary brand colors (Black and Refined Yellow) are defined as CSS variables in `globals.css`.
- **SEO**: Metadata and structured data (JSON-LD) are managed in `app/layout.js` and individual `page.js` files, using helpers from `lib/seo.js`.
- **Responsive Design**: Mobile-first approach using CSS media queries within module files.
