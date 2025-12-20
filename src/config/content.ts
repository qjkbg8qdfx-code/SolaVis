// src/config/content.ts
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
        { value: 20, suffix: 'x', decimals: 0, duration: 2500, label: 'Efficiency Boost' }, // Updated based on Curio case
        { value: 24, suffix: '/7', decimals: 0, duration: 2000, label: 'System Uptime' },
        { value: 50, suffix: '%', decimals: 0, duration: 2000, label: 'Workload Cut Target' }, // Updated based on Yuanta goal
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
    status: 'VERIFIED' | 'DEPLOYING'; // Added status field
}

export const caseStudiesSection = {
    badge: 'Proven Results',
    title: 'Systems in Production',
    disclaimer: 'Metrics verified by internal system logs and client confirmation.',
};

export const caseStudies: CaseStudy[] = [
    {
        id: 'CS_01',
        logId: 'SYS_LOG_CURIO',
        company: 'Curio (YouTube)',
        clientWebsite: 'https://www.youtube.com/@Curio-1',
        quote: "Efficiency boosted by 20x. We built a database and automation system that transformed how we manage the channel.",
        personName: 'Internal Audit',
        personRole: 'System Admin',
        verifiedResultLink: 'https://www.youtube.com/@Curio-1',
        module: 'Channel Auto-Pilot',
        status: 'VERIFIED'
    },
    {
        id: 'CS_02',
        logId: 'SYS_LOG_YUANTA',
        company: 'Yuanta Securities Inv. Consulting',
        clientWebsite: '#', // Confidential or direct internal tool
        quote: "Targeting a 50% reduction in daily manual processing time. Currently deploying automated workflow handlers.",
        personName: 'Varick Chen',
        personRole: 'Lead Architect',
        verifiedResultLink: '',
        module: 'Executive Workflow Core',
        status: 'DEPLOYING'
    },
    // Added a placeholder for layout balance if needed, or you can remove this
    {
        id: 'CS_03',
        logId: 'SYS_LOG_CONFIDENTIAL',
        company: 'Confidential Client',
        clientWebsite: '#',
        quote: "System deployment initiated. Focusing on high-volume data validation and entry automation.",
        personName: 'Pending',
        personRole: 'Operations Lead',
        verifiedResultLink: '',
        module: 'Stealth Infrastructure',
        status: 'DEPLOYING'
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
        answer: 'SolaVis typically reduces operational friction significantly within the first 90 days. For example, our Curio deployment saw a 20x efficiency boost post-implementation.',
    },
    {
        question: 'What kind of businesses does SolaVis work with?',
        answer: 'We specialize in businesses and individuals ready to scale. From content creators like Curio to financial institutions like Yuanta Securities Investment Consulting.',
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
        answer: 'Our operation node is based in Mackay, Australia (AUS), serving clients globally across all time zones.',
    },
    {
        question: 'Are you a branding agency or an AI company?',
        answer: "We are an Infrastructure Firm. We believe you cannot automate a mess. That's why we build the entire stack: the Strategy (Logic), the Interface (Web/Brand), and the Engine (AI).",
    },
];

export const faqSection = {
    badge: 'Common Questions',
    title: 'Frequently Asked.',
};
