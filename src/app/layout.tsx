import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
    title: 'AI & Tech Consultancy | Trust Engine',
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
                        <Link href="/" className="font-semibold text-lg tracking-tight hover:opacity-70 transition-opacity">
                            Trust_Engine
                        </Link>

                        <div className="hidden md:flex gap-8 text-[15px] font-medium text-ios-subtext">
                            <Link href="/methodology" className="hover:text-ios-text transition-colors">Methodology</Link>
                            <Link href="/services" className="hover:text-ios-text transition-colors">Services</Link>
                            <Link href="/about" className="hover:text-ios-text transition-colors">Manifesto</Link>
                            <Link href="/contact" className="hover:text-ios-text transition-colors">Contact</Link>
                        </div>

                        <Link href="/contact" className="hidden md:block btn-primary py-2 px-4 shadow-none text-sm">
                            Audit System
                        </Link>

                        {/* Mobile Menu Icon Placeholder */}
                        <div className="md:hidden text-lg font-bold text-ios-blue">Menu</div>
                    </div>
                </nav>

                {/* Main Content (Pushing down for sticky nav) */}
                <main className="pt-16 pb-32">
                    {children}
                </main>

                {/* Mobile Bottom Tab Bar (iOS Style) */}
                <div className="md:hidden fixed bottom-0 w-full glass-panel pb-6 pt-3 px-6 z-50 flex justify-between items-center text-xs font-medium text-ios-subtext">
                    <Link href="/" className="flex flex-col items-center gap-1 text-ios-blue">
                        <span>Home</span>
                    </Link>
                    <Link href="/services" className="flex flex-col items-center gap-1">
                        <span>Services</span>
                    </Link>
                    <Link href="/contact" className="flex flex-col items-center gap-1">
                        <span>Contact</span>
                    </Link>
                </div>
            </body>
        </html>
    )
}
