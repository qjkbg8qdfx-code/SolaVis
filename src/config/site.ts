/** Site configuration for SEO and branding */

// Base path removed for Cloudflare deployment (root URL)
export const basePath = '';

export const siteConfig = {
    name: 'SolvoVis',
    tagline: 'AI Strategic Consultancy & Digital Architecture',
    description:
        'Global AI Consultancy and Strategic Vision Architect. SolvoVis provides data-driven AI consultancy and strategic digital architecture for global enterprises.',
    url: 'https://solvovis.com',
    ogImage: 'https://solvovis.com/og-preview.png',

    // SEO Keywords
    keywords: [
        'AI Consultancy',
        'SolvoVis',
        'Digital Architecture',
        'Strategic Coach',
        'Enterprise AI',
        'Process Automation',
        'Trust Engine',
        'Workflow Automation',
        'AI Systems',
    ],

    // Contact
    email: 'Varick@solvovis.com',
    legalEmail: 'Varick@solvovis.com',

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
        locality: 'Mackay',
        region: 'Queensland',
        postalCode: '4740',
        streetAddress: 'Adrian St',
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
        linkedIn: 'https://www.linkedin.com/in/varick-chen-93ab16299',
        image: '/founder.jpg', // No basePath prefix needed
        // TODO: [TRUST] Uncomment when founder profiles are ready
        // twitter: '',
        // github: '',
    },
} as const;

export type SiteConfig = typeof siteConfig;
