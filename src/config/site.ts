// Site configuration - centralized SEO and metadata
export const siteConfig = {
    name: 'SolvoVis',
    tagline: 'Autonomous Operations System',
    description: 'We deploy autonomous AI systems to help Global SMEs scale revenue without complexity.',
    url: 'https://solvovis.com',
    ogImage: '/og-preview.png',

    // Contact
    email: 'hello@solvovis.com',
    legalEmail: 'legal@solvovis.com',

    // Social
    twitter: 'https://twitter.com/solvovis',
    linkedin: 'https://linkedin.com/company/solvovis',

    // Location
    address: {
        country: 'SG',
        locality: 'Singapore',
    },

    // Company
    companyName: 'SolvoVis Systems Inc.',

    // Expertise
    knowsAbout: [
        'AI Automation',
        'Business Process Optimization',
        'Revenue Operations',
        'Workflow Automation',
        'Data Processing',
    ],
} as const

export type SiteConfig = typeof siteConfig
