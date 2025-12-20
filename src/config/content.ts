import { LucideIcon, Target, Bot, Brain, ShieldCheck } from 'lucide-react';

// ============================================
// HERO SECTION
// ============================================
export const heroContent = {
    badge: 'Autonomous Systems v2.0',
    title: {
        line1: 'Automate the Ordinary.',
        line2: 'Unleash the Extraordinary.',
    },
    subtitle:
        'We architect autonomous systems to handle the trivial 80%, so you can dedicate 100% of your genius to what truly matters.',
    primaryCta: {
        label: 'Deploy System',
        href: '/services',
    },
    secondaryCta: {
        label: 'View Methodology',
        href: '/methodology',
    },
    metrics: [
        { value: 80, suffix: '%', decimals: 0, duration: 2500, label: 'Time Reclaimed' },
        { value: 24, suffix: '/7', decimals: 0, duration: 2000, label: 'System Uptime' },
        { value: 0, suffix: '', decimals: 0, duration: 2000, label: 'Human Error' },
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

export const modulesSection = {
    title: 'The Trust Engine Architecture',
    viewAllLabel: 'View all modules',
    viewAllHref: '/services',
};

export const bentoModules: BentoModule[] = [
    {
        id: 'module_01',
        number: '01',
        category: 'Deep Analysis',
        title: 'Deep Workflow Audit',
        description:
            'We map every friction point in your operation before writing a single line of code.',
        variant: 'large',
        icon: Target,
        ctaText: 'Start Audit',
        ctaHref: '/methodology',
    },
    {
        id: 'module_02',
        number: '02',
        category: 'Automation',
        title: 'Auto-Pilot Agents',
        description: 'Autonomous agents that handle scheduling, emails, and data entry 24/7.',
        variant: 'tall',
        icon: Bot,
    },
    {
        id: 'module_03',
        number: '03',
        category: 'Knowledge',
        title: 'Knowledge Brain',
        description: 'RAG-powered internal wiki that answers team questions instantly.',
        variant: 'small',
        icon: Brain,
    },
    {
        id: 'module_04',
        number: '04',
        category: 'Verification',
        title: 'Trust Monitor',
        description: 'Real-time accuracy verification.',
        variant: 'cta',
        icon: ShieldCheck,
        ctaText: 'Verify Systems',
        ctaHref: '/contact',
    },
];

// ============================================
// CASE STUDIES (VERIFIED DEPLOYMENTS)
// ============================================
export interface CaseStudy {
    id: string;
    logId: string;
    quote: string;
    company: string;
    personName: string;
    personRole: string;
    clientWebsite: string;
    verifiedResultLink?: string;
    module: string;
}

export const caseStudiesSection = {
    badge: 'Proven Results',
    title: 'Systems in Production',
    disclaimer: 'All metrics verified by internal system logs.',
};

export const caseStudies: CaseStudy[] = [
    {
        id: 'CS_01',
        logId: 'SYS_LOG_8842',
        company: 'Apex Logistics',
        clientWebsite: '#',
        quote: "The system didn't just save time; it eliminated the 'busy work' that was burning out our best managers. We reclaimed 40 hours a week.",
        personName: 'Marcus Lin',
        personRole: 'Operations Director',
        verifiedResultLink: '#',
        module: 'Auto-Dispatch Core',
    },
    {
        id: 'CS_02',
        logId: 'SYS_LOG_9921',
        company: 'Vanguard Creative',
        clientWebsite: '#',
        quote: 'We installed the content engine on Monday. By Friday, our output tripled without hiring a single new writer.',
        personName: 'Sarah Jenkins',
        personRole: 'Founder',
        verifiedResultLink: '#',
        module: 'Content Velocity V1',
    },
    {
        id: 'CS_03',
        logId: 'SYS_LOG_1102',
        company: 'Nexus Finance',
        clientWebsite: '#',
        quote: 'Accuracy is non-negotiable for us. The Trust Engine caught errors our human team missed for years.',
        personName: 'David Chen',
        personRole: 'CFO',
        verifiedResultLink: '#',
        module: 'Audit Sentinel',
    },
];

// ============================================
// MANIFESTO TEASER
// ============================================
export const manifestoTeaser = {
    badge: 'Our Philosophy',
    title: {
        line1: 'Human Genius.',
        line2: 'Machine Scale.',
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
