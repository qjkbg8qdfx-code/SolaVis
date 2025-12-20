// Site configuration - centralized SEO and metadata
export const siteConfig = {
    name: 'SolvoVis',
    tagline: 'Autonomous Operations System',
    description:
        'We deploy autonomous AI systems to help Global SMEs scale revenue without complexity.',
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
        label: 'Global HQ (Singapore)',
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

    // Founder (for Person schema)
    // ⚠️ CI/CD BLOCKER - Replace [FOUNDER_NAME] and [LINKEDIN_URL] before production build
    // These placeholders will cause trust issues if deployed as-is
    founder: {
        name: '[FOUNDER_NAME]', // TODO: Add real name
        role: 'Founder & System Architect',
        linkedIn: '[LINKEDIN_URL]', // TODO: Add LinkedIn URL
        image: '/founder.jpg', // TODO: Add real image
    },
} as const;

export type SiteConfig = typeof siteConfig;
