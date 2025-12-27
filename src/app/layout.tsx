import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import CookieBanner from '@/components/layout/CookieBanner';
import CookieSettingsTrigger from '@/components/layout/CookieSettingsTrigger';
import MobileNav from '@/components/layout/MobileNav';
import StickyCTA from '@/components/StickyCTA';
import AnalyticsProvider from '@/components/AnalyticsProvider';
import { ThemeProvider } from '@/components/ThemeProvider';
import { siteConfig } from '@/config/site';
import { bentoModules, faqContent } from '@/config/content';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: 'SolvoVis | Enterprise Autonomous AI & Trust Architecture',
        template: '%s | SolvoVis',
    },
    description:
        'Eliminate operational friction forever. We architect autonomous AI workforces that function as your invisible, 24/7 strategic partner. Scalable. Secure. Human-Centric.',
    applicationName: 'SolvoVis',
    authors: [{ name: 'SolvoVis Team', url: 'https://solvovis.com' }],
    icons: {
        icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
        shortcut: [{ url: '/icon.svg', type: 'image/svg+xml' }],
        apple: [{ url: '/apple-touch-icon.svg', type: 'image/svg+xml' }],
    },
    manifest: '/site.webmanifest',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'SolvoVis | Enterprise Autonomous AI & Trust Architecture',
        description:
            'Eliminate operational friction forever. We architect autonomous AI workforces that function as your invisible, 24/7 strategic partner. Scalable. Secure. Human-Centric.',
        url: siteConfig.url,
        siteName: 'SolvoVis',
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: 'SolvoVis System Interface',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SolvoVis | Enterprise Autonomous AI & Trust Architecture',
        description:
            'Eliminate operational friction forever. We architect autonomous AI workforces that function as your invisible, 24/7 strategic partner. Scalable. Secure. Human-Centric.',
    },
    alternates: {
        canonical: siteConfig.url,
        languages: {
            'en-US': siteConfig.url,
            'en-GB': siteConfig.url,
            'en-SG': siteConfig.url,
        },
    },
    keywords: [
        ...siteConfig.keywords,
        'How to automate SME workflow',
        'AI automation for small business',
        'What is a Trust Engine',
        'Best AI system for operations',
    ],
};

// Schema.org WebSite Data
const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SolvoVis',
    alternateName: 'SolvoVis AI Consultancy',
    url: 'https://solvovis.com',
};

// Schema.org Organization Data
const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: 'SolvoVis',
    url: 'https://solvovis.com',
    logo: 'https://solvovis.com/logo.svg',
    description:
        'Eliminate operational friction forever. We architect autonomous AI workforces that function as your invisible, 24/7 strategic partner. Scalable. Secure. Human-Centric.',
    address: {
        '@type': 'PostalAddress',
        addressCountry: siteConfig.address.country,
        addressLocality: siteConfig.address.locality,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        streetAddress: siteConfig.address.streetAddress,
    },
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: siteConfig.email,
        telephone: siteConfig.phone,
        availableLanguage: ['English'],
    },
    sameAs: [siteConfig.twitter, siteConfig.linkedin].filter(Boolean),
};

// Schema.org ConsultingService Data
const consultingServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ConsultingService',
    '@id': `${siteConfig.url}/#service`,
    name: 'SolvoVis',
    url: 'https://solvovis.com',
    logo: 'https://solvovis.com/logo.svg',
    description:
        'Eliminate operational friction forever. We architect autonomous AI workforces that function as your invisible, 24/7 strategic partner. Scalable. Secure. Human-Centric.',
    knowsAbout: siteConfig.knowsAbout,
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: siteConfig.email,
        availableLanguage: ['English'],
    },
    address: {
        '@type': 'PostalAddress',
        addressCountry: siteConfig.address.country,
        addressLocality: siteConfig.address.locality,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        streetAddress: siteConfig.address.streetAddress,
    },
    // Filter out empty social links for valid sameAs array
    sameAs: [siteConfig.twitter, siteConfig.linkedin].filter(Boolean),
};

// Schema.org Person (Founder) Data
const founderSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.role,
    image: `${siteConfig.url}${siteConfig.founder.image}`,
    url: `${siteConfig.url}/about`,
    sameAs: [siteConfig.founder.linkedIn as string].filter((link) => link !== ''),
    worksFor: { '@id': `${siteConfig.url}/#organization` },
};

// Schema.org Service Data (from Bento Modules)
const serviceSchemas = bentoModules.map((module) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: module.title,
    description: module.description,
    provider: { '@id': `${siteConfig.url}/#organization` },
    serviceType: module.category,
}));

// Schema.org FAQPage Data (GEO Optimized)
const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqContent.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth antialiased" suppressHydrationWarning>
            <head>
                {/* Enterprise SEO: Canonical Tag */}
                <link rel="canonical" href="https://solvovis.com/" />
                {/* hreflang tags for global indexing */}
                <link rel="alternate" hrefLang="en-US" href={siteConfig.url} />
                <link rel="alternate" hrefLang="en-GB" href={siteConfig.url} />
                <link rel="alternate" hrefLang="en-SG" href={siteConfig.url} />
                <link rel="alternate" hrefLang="x-default" href={siteConfig.url} />
            </head>
            <body
                className={`${inter.variable} ${jetbrainsMono.variable} bg-ios-bg font-sans text-ios-text transition-colors dark:bg-gray-950 dark:text-gray-100`}
            >
                <ThemeProvider>
                    <Navigation />

                    {/* Main Content (Pushing down for sticky nav) */}
                    <main className="pb-32 pt-16">{children}</main>

                    {/* Professional Footer (Enterprise SEO) */}
                    <footer className="border-t border-gray-800 bg-gray-950 py-8">
                        <div className="mx-auto max-w-7xl px-6">
                            {/* Top Row: Location & Contact */}
                            <div className="mb-6 flex flex-col items-center justify-between gap-4 border-b border-gray-800 pb-6 md:flex-row">
                                <div className="flex flex-col items-center gap-1 text-sm text-gray-400 md:items-start">
                                    <span className="font-medium text-white">{siteConfig.companyName}</span>
                                    <span>{siteConfig.address.locality}, {siteConfig.address.region}, Australia</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 text-sm text-gray-400 md:items-end">
                                    <a href={`mailto:${siteConfig.email}`} className="text-white transition-colors hover:text-ios-blue">
                                        {siteConfig.email}
                                    </a>
                                    <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-ios-blue">
                                        {siteConfig.phone}
                                    </a>
                                </div>
                            </div>

                            {/* Bottom Row: Legal & Status */}
                            <div className="flex flex-col items-center justify-between gap-4 font-mono text-xs text-gray-300 md:flex-row">
                                <div className="flex flex-wrap items-center justify-center gap-4">
                                    <span suppressHydrationWarning>
                                        © 2025 {siteConfig.companyName}. All Rights Reserved.
                                    </span>
                                    <span className="hidden text-gray-600 md:inline">|</span>
                                    <Link href="/privacy" className="text-white transition-colors hover:text-ios-blue">
                                        Privacy Policy
                                    </Link>
                                    <Link href="/terms" className="text-white transition-colors hover:text-ios-blue">
                                        Terms of Service
                                    </Link>
                                    <CookieSettingsTrigger />
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 motion-reduce:animate-none"></span>
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                                    </span>
                                    <span className="text-gray-300">All Systems Operational</span>
                                </div>
                            </div>
                        </div>
                    </footer>

                    {/* Schema.org Structured Data */}
                    <script
                        id="schema-website"
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                    />
                    <script
                        id="schema-org"
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                    />
                    <script
                        id="schema-consulting"
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(consultingServiceSchema) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
                    />
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                    />

                    {/* GDPR-Compliant Analytics (loads only after consent) */}
                    <AnalyticsProvider />

                    {/* Cookie Consent Banner */}
                    <CookieBanner />

                    {/* Mobile Sticky CTA */}
                    <StickyCTA />

                    {/* Mobile Bottom Tab Bar (iOS Style) */}
                    <MobileNav />
                </ThemeProvider>
            </body>
        </html>
    );
}
