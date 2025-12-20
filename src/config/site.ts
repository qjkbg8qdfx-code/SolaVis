// src/config/site.ts

export const siteConfig = {
    name: 'SolvoVis',
    tagline: 'AI Trust Engine',
    description:
        'Building scalable AI systems for global efficiency. We transform manual workflows into automated trust engines.',
    url: 'https://solvovis.com',
    ogImage: 'https://solvovis.com/og-preview.png',

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
    email: 'varick.chen@icloud.com', // Updated to your real email
    legalEmail: 'varick.chen@icloud.com', // Consistent contact point

    // Social - Set to empty string if not available yet
    twitter: '',
    linkedin: '', // Intentionally empty as requested

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
        linkedIn: '', // Empty string triggers hidden mode in UI
        image: '/founder.jpg', // Ensure this file exists in public/ folder!
    },
} as const;

export type SiteConfig = typeof siteConfig;
