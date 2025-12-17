import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
    title: 'SolvoVis | Autonomous Operations System',
    description: 'Helping Global SMEs achieve operational excellence.',
}

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
                        {/* Update: Dynamic Year */}
                        <div>&copy; {new Date().getFullYear()} SolvoVis Systems Inc.</div>

                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span>All Systems Operational</span>
                        </div>
                    </div>
                </footer>

                {/* Schema.org Organization Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            name: 'SolvoVis',
                            url: 'https://solvovis.com',
                            logo: 'https://solvovis.com/logo.png', // Placeholder
                            description: 'Autonomous AI Infrastructure for Global SMEs.',
                            sameAs: [
                                'https://twitter.com/solvovis',
                                'https://linkedin.com/company/solvovis'
                            ]
                        })
                    }}
                />

                {/* Mobile Bottom Tab Bar (iOS Style) */}
                <div className="md:hidden fixed bottom-0 w-full glass-panel pb-6 pt-3 px-6 z-50 flex justify-between items-center text-xs font-medium text-ios-subtext">
                    <Link href="/" className="flex flex-col items-center gap-1 text-ios-blue">
                        <span>System</span>
                    </Link>
                    <Link href="/services" className="flex flex-col items-center gap-1">
                        <span>Modules</span>
                    </Link>
                    <Link href="/contact" className="flex flex-col items-center gap-1">
                        <span>Connect</span>
                    </Link>
                </div>
            </body>
        </html>
    )
}
