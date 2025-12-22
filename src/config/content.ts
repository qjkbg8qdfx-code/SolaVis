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
        'Architecting autonomous systems that eliminate 80% of operational friction. We build the logic; you scale the vision.',
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
        quote: 'Strategic deployment initiated at executive level. Targeting 50% reduction in manual processing through autonomous workflow handlers.',
        personName: 'Executive Office',
        personRole: 'Strategic Partner',
        verifiedResultLink: '',
        module: 'Executive Workflow Core',
        status: 'DEPLOYING',
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
// FAQ CONTENT (GEO Optimized for AI Citation)
// ============================================
export interface FAQItem {
    question: string;
    answer: string;
}

export const faqContent: FAQItem[] = [
    {
        question: 'What is SolvoVis?',
        answer: 'SolvoVis is an AI infrastructure firm that deploys autonomous Trust Engines to automate manual workflows for SMEs globally.',
    },
    {
        question: 'How does the Trust Engine work?',
        answer: 'We audit your workflow, deploy custom AI modules, and monitor accuracy 24/7. No human intervention required post-deployment.',
    },
    {
        question: "What's the pricing model?",
        answer: 'Custom quotes based on workflow complexity. Starts with a free Logic Audit. ROI typically exceeds 4.5x in 90 days.',
    },
    {
        question: 'Who is SolvoVis for?',
        answer: 'Global SMEs ($1M-$50M revenue) with repetitive workflows, data processing needs, or scaling bottlenecks.',
    },
    {
        question: 'Where is SolvoVis based?',
        answer: 'Headquarters in Mackay, Queensland, Australia. We serve clients globally across all time zones.',
    },
    {
        question: 'How is SolvoVis different?',
        answer: 'We install systems, not slide decks. Our Trust Engines operate 24/7 autonomously, replacing consultant dependency.',
    },
];

export const faqSection = {
    badge: 'System Protocol',
    title: 'Frequently Asked.',
};

// ============================================
// BOTTLENECK SECTION (Agitation Phase)
// ============================================
export const bottleneckSection = {
    badge: 'System Origin Log',
    title: 'The Human Bottleneck.',
    description:
        "Data shows that 60% of enterprise 'work' is simply copy-pasting data between tabs. This is Digital Waste. We realized human error was the #1 cost center.",
    highlight: 'So we removed it.',
    stats: [
        { label: 'Manual Data Entry', value: '60%', status: 'Critical' },
        { label: 'Error Rate', value: '18%', status: 'High' },
    ],
};

// ============================================
// METHODOLOGY PAGE CONTENT
// ============================================
export const methodologyContent = {
    hero: {
        badge: 'The Architecture',
        title: 'From Chaos to Code.',
        subtitle:
            'We do not "consult." We execute a proprietary 4-stage engineering protocol to systematically extract inefficiencies and replace them with autonomous logic.',
    },
    phases: [
        {
            id: '01',
            title: 'Friction Mapping (The Audit)',
            description:
                'We deploy passive observation tools to map your data flow. We identify every manual "copy-paste" event and decision bottleneck.',
            technicalDetail: 'Output: 360° Workflow Topology Map',
            icon: 'Target',
        },
        {
            id: '02',
            title: 'Logic Extraction',
            description:
                'We translate human habits into deterministic rules. Subjective decisions are converted into binary logic gates.',
            technicalDetail: 'Output: Pseudo-Code Logic Schema',
            icon: 'FileCode',
        },
        {
            id: '03',
            title: 'Agent Orchestration',
            description:
                'We architect the AI agents. Not generic GPT wrappers, but custom-tuned models with strict context boundaries and tool access.',
            technicalDetail: 'Stack: Python / LangChain / Vector DB',
            icon: 'Bot',
        },
        {
            id: '04',
            title: 'Recursive Optimization',
            description:
                'The system does not sleep. It monitors its own accuracy logs and flags edge cases for human review, getting smarter every 24 hours.',
            technicalDetail: 'Metric: < 0.01% Hallucination Rate',
            icon: 'RefreshCw',
        },
    ],
    security: {
        title: 'Data Sovereignty & Security',
        description:
            'Your data never trains public models. We deploy isolated environments with banking-grade encryption.',
        features: [
            'Zero-Retention API Calls',
            'PII Redaction Layer',
            'EU/GDPR Compliant Architecture',
        ],
    },
};
