// Site configuration - centralized SEO and metadata
export const siteConfig = {
    name: 'SolaVis',
    tagline: 'AI Trust Engine',
    description:
        'Building scalable AI systems for global efficiency. We transform manual workflows into automated trust engines.',
    url: 'https://solavis.ai',
    ogImage: '/og-preview.png',

    // SEO Keywords
    keywords: [
        'AI Consultancy',
        'Process Automation',
        'Trust Engine',
        'SME Efficiency',
        'Next.js',
        'Workflow Automation',
        'AI Systems',
    ],

    // Contact
    email: 'hello@solavis.ai',
    legalEmail: 'legal@solavis.ai',

    // Social
    twitter: 'https://twitter.com/solavis_ai',
    linkedin: 'https://linkedin.com/company/solavis',

    // Location
    address: {
        country: 'SG',
        locality: 'Singapore',
        label: 'Global HQ (Singapore)',
    },

    // Company
    companyName: 'SolaVis Systems Inc.',

    // Expertise
    knowsAbout: [
        'AI Trust Engines',
        'Process Automation',
        'Revenue Operations',
        'Workflow Automation',
        'Efficiency Systems',
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
