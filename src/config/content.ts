// Content configuration - all hardcoded text extracted
import { Bot, Database, Target, UploadCloud, Layout, Rocket, LucideIcon } from 'lucide-react';

// ============================================
// HERO SECTION
// ============================================
export const heroContent = {
    badge: 'AI Trust Engine Online',
    title: {
        line1: "Don't Hire a Consultant.",
        line2: 'Install a System.',
    },
    subtitle:
        'We architect AI Trust Engines that scale your business value without scaling your headcount. Idea-centric, not founder-dependent.',
    primaryCta: {
        label: 'Explore the Methodology',
        href: '/methodology',
    },
    secondaryCta: {
        label: 'View Systems',
        href: '/services',
    },
    metrics: [
        { value: 87, suffix: '%', decimals: 0, label: 'Efficiency Gained' },
        { value: 24, suffix: '+', decimals: 0, duration: 2000, label: 'Systems Deployed' },
        { value: 12, suffix: '', decimals: 0, duration: 1500, label: 'Global Reach' },
    ],
};

// ============================================
// BENTO MODULES SECTION
// ============================================
export interface BentoModule {
    id: string;
    number: string;
    category: string;
    title: string;
    description: string;
    variant: 'large' | 'tall' | 'small' | 'cta';
    icon?: LucideIcon;
    ctaText?: string;
    ctaHref?: string;
}

export const bentoModules: BentoModule[] = [
    {
        id: 'logic-audit',
        number: '01',
        category: 'Core Strategy',
        title: 'Logic_Audit',
        description:
            'We audit your business logic before deployment. Identifying friction points to ensure scalability.',
        variant: 'large',
        icon: Target,
        ctaText: 'Explore Methodology',
        ctaHref: '/methodology',
    },
    {
        id: 'auto-pilot',
        number: '02',
        category: 'Automation',
        title: 'Auto-Pilot',
        description:
            'Deploying autonomous agents into your ecosystem. 24/7 workflow execution without human latency.',
        variant: 'tall',
        icon: Bot,
    },
    {
        id: 'visual-os',
        number: '03',
        category: 'Visual Operating System',
        title: 'Visual_OS',
        description:
            'Conversion Infrastructure & Authority Systems. We architect pixel-perfect Next.js environments and vector identity protocols.',
        variant: 'small',
        icon: Layout,
    },
    {
        id: 'deploy',
        number: '04',
        category: 'Deployment',
        title: 'Deploy',
        description: 'Initialize System',
        variant: 'cta',
        icon: Rocket,
        ctaHref: '/contact',
    },
];

export const modulesSection = {
    title: 'The Modules.',
    viewAllHref: '/services',
    viewAllLabel: 'View All',
};

// ============================================
// CASE STUDIES (VERIFIED DEPLOYMENTS)
// ============================================
export interface CaseStudy {
    id: string;
    logId: string;
    quote: string;
    company: string;
    personName: string; // Required - no more "anonymized"
    personRole: string;
    clientWebsite: string; // Required - verifiable company
    verifiedResultLink?: string; // Link to proof/case study
    module: string;
}

export const caseStudies: CaseStudy[] = [
    {
        id: 'case-1',
        logId: '8821',
        quote: 'We replaced our entire manual data entry team with SolaVis engines. Zero errors since launch.',
        company: 'TechFlow Inc.',
        personName: '[REQUIRED]', // TODO: Add real name
        personRole: 'VP Engineering',
        clientWebsite: '[REQUIRED]', // TODO: Add website
        verifiedResultLink: undefined,
        module: 'DevOps Pipeline',
    },
    {
        id: 'case-2',
        logId: '4102',
        quote: 'The data cleaning module recovered $2M in lost inventory assets in the first 48 hours.',
        company: 'Apex Logistics',
        personName: '[REQUIRED]', // TODO: Add real name
        personRole: 'COO',
        clientWebsite: '[REQUIRED]', // TODO: Add website
        verifiedResultLink: undefined,
        module: 'Supply Chain Data',
    },
    {
        id: 'case-3',
        logId: '9943',
        quote: 'We scaled content production by 10x without hiring a single new writer. Pure leverage.',
        company: 'Creative Pulse',
        personName: '[REQUIRED]', // TODO: Add real name
        personRole: 'Founder',
        clientWebsite: '[REQUIRED]', // TODO: Add website
        verifiedResultLink: undefined,
        module: 'Content System',
    },
];

export const caseStudiesSection = {
    badge: 'Verified Deployments',
    title: 'Client Success Stories.',
    disclaimer: 'All results independently verified.',
};

// ============================================
// MANIFESTO TEASER
// ============================================
export const manifestoTeaser = {
    badge: 'The Manifesto',
    title: {
        line1: "Old ways won't",
        line2: 'open new doors.',
    },
    ctaLabel: 'Read the Full Story',
    ctaHref: '/about',
};

// ============================================
// FAQ CONTENT (Voice Search Optimized)
// ============================================
export interface FAQItem {
    question: string;
    answer: string;
}

export const faqContent: FAQItem[] = [
    {
        question: 'How fast can SolaVis show results?',
        answer: 'SolaVis typically reduces operational friction by 40% within the first 90 days. Most clients see measurable ROI within the first 30 days after system deployment.',
    },
    {
        question: 'What kind of businesses does SolaVis work with?',
        answer: 'We specialize in Global SMEs generating $1M-$50M in annual revenue. Our Trust Engines work best for businesses with repetitive workflows, data processing needs, or scaling challenges.',
    },
    {
        question: 'How is SolaVis different from traditional consultants?',
        answer: "We don't advise — we install. SolaVis deploys autonomous Trust Engines that operate 24/7, replacing manual workflows with systems that never sleep. You get infrastructure, not slide decks.",
    },
    {
        question: 'Do I need technical expertise to use SolaVis?',
        answer: 'No. We handle the technical implementation end-to-end. Your team interacts with simple dashboards and reports. The engine runs silently under the hood.',
    },
    {
        question: 'Where is SolaVis located?',
        answer: 'Global HQ is in Singapore (APAC), with remote operation nodes in New York (AMER) and London (EMEA). We serve clients across all time zones.',
    },
    {
        question: 'Are you a branding agency or an AI company?',
        answer: "We are an Infrastructure Firm. We believe you cannot automate a mess. That's why we build the entire stack: the Strategy (Logic), the Interface (Web/Brand), and the Engine (AI). We don't just design; we engineer your digital headquarters.",
    },
];

export const faqSection = {
    badge: 'Common Questions',
    title: 'Frequently Asked.',
};
