// Content configuration - all hardcoded text extracted
import { Bot, Database, Target, UploadCloud, LucideIcon } from 'lucide-react'

// ============================================
// HERO SECTION
// ============================================
export const heroContent = {
    badge: 'SolvoVis Operational',
    title: {
        line1: 'Scale Revenue.',
        line2: 'Freeze Headcount.',
    },
    subtitle: "We don't just 'consult.' We inject autonomous AI infrastructure into your business. Reduce operational friction by 40% in 90 days.",
    primaryCta: {
        label: 'Start Logic Audit',
        href: '/contact',
    },
    secondaryCta: {
        label: 'View The Protocol',
        href: '/methodology',
    },
    metrics: [
        { value: 4.5, suffix: 'x', decimals: 1, label: 'Avg. ROI' },
        { value: 12, suffix: 'k+', decimals: 0, duration: 2000, label: 'Hours Saved' },
    ],
}

// ============================================
// BENTO MODULES SECTION
// ============================================
export interface BentoModule {
    id: string
    number: string
    category: string
    title: string
    description: string
    variant: 'large' | 'tall' | 'small' | 'cta'
    icon?: LucideIcon
    ctaText?: string
    ctaHref?: string
}

export const bentoModules: BentoModule[] = [
    {
        id: 'core-strategy',
        number: '01',
        category: 'Core Strategy',
        title: 'Profit & Loss Audit',
        description: 'We audit your P&L to find inefficiencies. Pinpoint the 40% of friction in your operations.',
        variant: 'large',
        icon: Target,
        ctaText: 'Explore Methodology',
        ctaHref: '/methodology',
    },
    {
        id: 'auto-process',
        number: '02',
        category: 'Auto-Process',
        title: '24/7 Worker Bots',
        description: 'Deploy autonomous agents that never sleep.',
        variant: 'tall',
        icon: Bot,
    },
    {
        id: 'data-kernel',
        number: '03',
        category: 'Data Kernel',
        title: 'Data Kernel',
        description: 'Clean assets for clean AI output.',
        variant: 'small',
        icon: Database,
    },
    {
        id: 'training',
        number: '04',
        category: 'Training',
        title: 'Training',
        description: 'Empower teams',
        variant: 'cta',
        icon: UploadCloud,
        ctaHref: '/services',
    },
]

export const modulesSection = {
    title: 'The Modules.',
    viewAllHref: '/services',
    viewAllLabel: 'View All',
}

// ============================================
// DEPLOYMENT LOGS (TESTIMONIALS)
// ============================================
export interface DeploymentLog {
    id: string
    logId: string
    quote: string
    company: string
    auth: string
    module: string
    caseStudyHref?: string
}

export const deploymentLogs: DeploymentLog[] = [
    {
        id: 'log-1',
        logId: '8821',
        quote: 'We replaced our entire manual data entry team with SolvoVis bots. Zero errors since launch.',
        company: 'TechFlow Inc.',
        auth: 'VP Engineering',
        module: 'DevOps Pipeline',
        caseStudyHref: '#case-study-1',
    },
    {
        id: 'log-2',
        logId: '4102',
        quote: 'The data cleaning module recovered $2M in lost inventory assets in the first 48 hours.',
        company: 'Apex Logistics',
        auth: 'COO',
        module: 'Supply Chain Data',
        caseStudyHref: '#case-study-2',
    },
    {
        id: 'log-3',
        logId: '9943',
        quote: 'We scaled content production by 10x without hiring a single new writer. Pure leverage.',
        company: 'Creative Pulse',
        auth: 'Founder',
        module: 'Content System',
        caseStudyHref: '#case-study-3',
    },
]

export const logsSection = {
    badge: 'System Logs',
    title: 'Verified System Deployments.',
    disclaimer: 'Client identity anonymized for privacy unless explicitly verified.',
}

// ============================================
// MANIFESTO TEASER
// ============================================
export const manifestoTeaser = {
    badge: 'The Manifesto',
    title: "Old ways won't open new doors.",
    ctaLabel: 'Read the Full Story',
    ctaHref: '/about',
}
