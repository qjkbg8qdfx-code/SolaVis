/** Site configuration for SEO and branding */

// Base path removed for Cloudflare deployment (root URL)
export const basePath = '';

export const siteConfig = {
    name: 'SolvoVis',
    tagline: 'AI Strategic Consultancy & Digital Architecture',
    description:
        'Global AI Consultancy and Strategic Vision Architect. SolvoVis provides data-driven AI consultancy and strategic digital architecture for global enterprises.',
    url: 'https://solvovis.com',
    ogImage: 'https://solvovis.com/og-preview.png?v=2',

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
    phone: '+61 466 833 608',

    // Social - Empty strings will be hidden by UI logic
    twitter: '',
    linkedin: '',

    // Social profiles (uncomment when ready)
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
        streetAddress: '', // PRIVACY: Street address removed for public site
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
        // Additional profiles (uncomment when ready)
        // twitter: '',
        // github: '',
    },

    // Brand Assets (Vector-First Policy)
    assets: {
        logo: '/images/solvovis-logo-main.svg', // FORCE SVG for resolution independence
        icon: '/icon.svg', // FORCE SVG
        favicon: '/favicon.ico', // Keep .ico for legacy browser support
    },
} as const;

export type SiteConfig = typeof siteConfig;
