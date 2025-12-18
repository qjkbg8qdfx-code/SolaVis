import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import CookieBanner from '@/components/layout/CookieBanner'
import MobileNav from '@/components/layout/MobileNav'
import StickyCTA from '@/components/StickyCTA'
import { siteConfig } from '@/config/site'
import { bentoModules } from '@/config/content'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: `${siteConfig.name} | ${siteConfig.tagline}`,
        template: `%s | ${siteConfig.name}`
    },
    description: siteConfig.description,
    icons: {
        icon: '/icon.svg',
        apple: '/apple-icon.png',
    },
    openGraph: {
        title: `${siteConfig.name} | ${siteConfig.tagline}`,
        description: 'Scale Revenue. Freeze Headcount. The Autonomous AI Infrastructure for Global SMEs.',
        url: siteConfig.url,
        siteName: siteConfig.name,
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
        title: siteConfig.name,
        description: 'Scale Revenue. Freeze Headcount.',
    },
}

// Schema.org Organization Data
const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    description: 'Autonomous AI Infrastructure for Global SMEs.',
    knowsAbout: siteConfig.knowsAbout,
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: siteConfig.email,
        availableLanguage: ['English']
    },
    address: {
        '@type': 'PostalAddress',
        addressCountry: siteConfig.address.country,
        addressLocality: siteConfig.address.locality,
    },
    sameAs: [siteConfig.twitter, siteConfig.linkedin],
}

// Schema.org Person (Founder) Data
const founderSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.role,
    image: `${siteConfig.url}${siteConfig.founder.image}`,
    url: `${siteConfig.url}/about`,
    sameAs: [siteConfig.founder.linkedIn],
    worksFor: { '@id': `${siteConfig.url}/#organization` },
}

// Schema.org Service Data (from Bento Modules)
const serviceSchemas = bentoModules.map((module) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: module.title,
    description: module.description,
    provider: { '@id': `${siteConfig.url}/#organization` },
    serviceType: module.category,
}))

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="antialiased scroll-smooth">
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-ios-bg`}>
                <Navigation />

                {/* Main Content (Pushing down for sticky nav) */}
                <main className="pt-16 pb-32">
                    {children}
                </main>

                {/* System Status Footer */}
                <footer className="hidden md:block py-6 border-t border-gray-100 bg-white/50 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs font-mono text-gray-400">
                        <div suppressHydrationWarning>&copy; {new Date().getFullYear()} {siteConfig.companyName}</div>

                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span>All Systems Operational</span>
                        </div>
                    </div>
                </footer>

                {/* Schema.org Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
                />

                {/* Cookie Consent Banner */}
                <CookieBanner />

                {/* Mobile Sticky CTA */}
                <StickyCTA />

                {/* Mobile Bottom Tab Bar (iOS Style) */}
                <MobileNav />
            </body>
        </html>
    )
}
