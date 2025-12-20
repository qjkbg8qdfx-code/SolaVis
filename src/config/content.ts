// Content configuration - all hardcoded text extracted
import { Bot, Database, Target, UploadCloud, Layout, Rocket, LucideIcon } from 'lucide-react';

// ============================================
// HERO SECTION
// ============================================
export const heroContent = {
    badge: 'System Architecture v2.0',
    title: {
        line1: "Don't Hire a Consultant.",
        line2: 'Install a Trust Engine.',
    },
    subtitle:
        'We architect scalable AI systems that function without founder dependency. Transform your manual workflows into automated assets.',
    primaryCta: {
        label: 'Explore the System',
        href: '/methodology',
    },
    secondaryCta: {
        label: 'View Systems',
        href: '/services',
    },
    metrics: [
        { value: 40, suffix: '%', decimals: 0, label: 'Efficiency Gain' },
        { value: 100, suffix: '+', decimals: 0, duration: 2000, label: 'Systems Live' },
        { value: 24, suffix: '/7', decimals: 0, duration: 1500, label: 'Automated Uptime' },
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
        id: 'ai-audit-core',
        number: '01',
        category: 'Deep Analysis',
        title: 'AI_Audit_Core',
        description:
            'Deep analysis of workflow bottlenecks. We map every friction point before writing a single line of code.',
        variant: 'large',
        icon: Target,
        ctaText: 'Start Audit',
        ctaHref: '/methodology',
    },
    {
        id: 'auto-agent',
        number: '02',
        category: 'Autonomous Dispatch',
        title: 'Auto-Agent',
        description:
            'Autonomous email & scheduling dispatch. Your 24/7 digital workforce that never sleeps.',
        variant: 'tall',
        icon: Bot,
    },
    {
        id: 'knowledge-base',
        number: '03',
        category: 'Internal Brain',
        title: 'Knowledge_Base',
        description:
            'RAG-powered internal brain. Your company knowledge, instantly searchable by AI.',
        variant: 'small',
        icon: Database,
    },
    {
        id: 'trust-monitor',
        number: '04',
        category: 'Verification',
        title: 'Trust_Monitor',
        description:
            'Real-time accuracy verification. Every output checked, every decision logged.',
        variant: 'large',
        icon: Layout,
        ctaText: 'See Demo',
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
        id: 'CS_01',
        logId: '4102',
        quote: "The system reduced our manual data entry by 90% in week one. It's not just a tool; it's a digital employee.",
        company: 'Apex Logistics (Demo)',
        personName: 'Marcus L.',
        personRole: 'Operations Director',
        clientWebsite: 'https://apex-logistics.demo',
        verifiedResultLink: undefined,
        module: 'Auto-Agent',
    },
];

export const caseStudiesSection = {
    badge: 'Verified Deployments',
    title: 'System Performance.',
    disclaimer: 'Results from live deployments. Names anonymized for privacy.',
};

// ============================================
// MANIFESTO TEASER
// ============================================
export const manifestoTeaser = {
    badge: 'The Philosophy',
    title: {
        line1: 'Code Breaks.',
        line2: 'Systems Survive.',
    },
    ctaLabel: 'Read the Manifesto',
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
