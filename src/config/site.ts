/** @type {import('next').NextConfig} */
export const basePath = '/SolaVis';

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
        linkedIn: '', // UI will hide the button if this is empty
        image: `${basePath}/founder.jpg`, // Ensure public/founder.jpg exists
    },
} as const;

export type SiteConfig = typeof siteConfig;
