/** Site configuration for SEO and branding */

// Base path removed for Cloudflare deployment (root URL)
export const basePath = '';

export const siteConfig = {
    name: 'SolvoVis',
    tagline: 'AI Trust Engine',
    description:
        'Building scalable AI systems for global efficiency. We transform manual workflows into automated trust engines.',
    url: 'https://solvovis.com',
    ogImage: 'https://solvovis.com/og-preview.png',

    // SEO Keywords
    keywords: [
        'Autonomous Infrastructure',
        'Business Logic Automation',
        'Enterprise AI Agents',
        'Process Automation',
        'Trust Engine',
        'SME Efficiency',
        'Next.js',
        'Workflow Automation',
        'AI Systems',
    ],

    // Contact
    email: 'varick.chen@icloud.com',
    legalEmail: 'varick.chen@icloud.com',

    // Social - Empty strings will be hidden by UI logic
    twitter: '',
    linkedin: '',

    // TODO: [TRUST] Uncomment and add URLs when ready to go public with social presence
    // social: {
    //     twitter: 'https://x.com/solvovis',
    //     github: 'https://github.com/solvovis',
    //     linkedin: 'https://linkedin.com/company/solvovis',
    //     youtube: 'https://youtube.com/@solvovis',
    // },

    // Location
    address: {
        country: 'AU',
        locality: 'Mackay, Queensland',
        label: 'Global Operation Node (AUS)',
    },

    // Company
    companyName: 'SolvoVis Systems',

    // Expertise
    knowsAbout: [
        'AI Trust Engines',
        'Process Automation',
        'Revenue Operations',
        'Workflow Automation',
        'Efficiency Systems',
    ],

    // Founder (for Person schema)
    founder: {
        name: 'Varick Chen',
        role: 'Founder',
        linkedIn: '',
        image: '/founder.jpg', // No basePath prefix needed
        // TODO: [TRUST] Uncomment when founder profiles are ready
        // twitter: '',
        // github: '',
    },
} as const;

export type SiteConfig = typeof siteConfig;
