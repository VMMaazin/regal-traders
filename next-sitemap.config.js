/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://regal-traders.vercel.app',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
    exclude: ['/api/*'],
    changefreq: 'weekly',
    priority: 0.7,
    additionalPaths: async (config) => [
        { loc: '/', changefreq: 'daily', priority: 1.0 },
        { loc: '/plastic-crates', changefreq: 'weekly', priority: 0.9 },
        { loc: '/plastic-storage-bins', changefreq: 'weekly', priority: 0.9 },
        { loc: '/plastic-garbage-bins', changefreq: 'weekly', priority: 0.9 },
        { loc: '/poultry-equipment', changefreq: 'weekly', priority: 0.9 },
        { loc: '/about', changefreq: 'monthly', priority: 0.7 },
        { loc: '/contact', changefreq: 'monthly', priority: 0.8 },
        { loc: '/order-inquiry', changefreq: 'monthly', priority: 0.8 },
    ],
}
