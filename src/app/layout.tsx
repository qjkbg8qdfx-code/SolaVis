import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

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
            <body className={`${inter.variable} font-sans bg-ios-bg`}>
                {/* iOS Sticky Glass Nav */}
                <nav className="fixed top-0 w-full z-50 glass-panel">
                    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                        <Link href="/" className="font-semibold text-lg tracking-tight hover:opacity-70 transition-opacity flex items-center gap-0.5">
                            SolvoVis<span className="font-mono text-ios-blue text-xl">.</span>
                        </Link>

                        <div className="hidden md:flex gap-8 text-[15px] font-medium text-ios-subtext">
                            <Link href="/methodology" className="hover:text-ios-text transition-colors">Methodology</Link>
                            <Link href="/services" className="hover:text-ios-text transition-colors">Services</Link>
                            <Link href="/about" className="hover:text-ios-text transition-colors">Manifesto</Link>
                            <Link href="/contact" className="hover:text-ios-text transition-colors">Contact</Link>
                        </div>

                        <Link href="/contact" className="hidden md:block btn-primary py-2 px-4 shadow-none text-sm">
                            Initialize Audit
                        </Link>

                        {/* Mobile Menu Icon Placeholder */}
                        <div className="md:hidden text-lg font-bold text-ios-blue">Menu</div>
                    </div>
                </nav>

                {/* Main Content (Pushing down for sticky nav) */}
                <main className="pt-16 pb-32">
                    {children}
                </main>

                {/* System Status Footer */}
                <footer className="hidden md:block py-6 border-t border-gray-100 bg-white/50 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs font-mono text-gray-400">
                        <div>&copy; 2025 SolvoVis Systems Inc.</div>
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
