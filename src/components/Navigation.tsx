"use client"

import { useState } from 'react'
import Link from 'next/link'
import { X, Menu } from 'lucide-react'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className="fixed top-0 w-full z-50 glass-panel">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-50 bg-transparent">
                <Link href="/" className="font-semibold text-lg tracking-tight hover:opacity-70 transition-opacity flex items-center gap-0.5 relative z-50">
                    SolvoVis<span className="font-mono text-ios-blue text-xl">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-[15px] font-medium text-ios-subtext">
                    <Link href="/methodology" className="hover:text-ios-text transition-colors">Methodology</Link>
                    <Link href="/services" className="hover:text-ios-text transition-colors">Services</Link>
                    <Link href="/about" className="hover:text-ios-text transition-colors">Manifesto</Link>
                    <Link href="/contact" className="hover:text-ios-text transition-colors">Contact</Link>
                </div>

                <Link href="/contact" className="hidden md:block btn-primary py-2 px-4 shadow-none text-sm">
                    Initialize Audit
                </Link>

                {/* Mobile Menu Trigger */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-lg font-bold text-ios-blue relative z-50 p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-ios-blue rounded-lg"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : "Menu"}
                </button>
            </div>

            {/* Mobile Full Screen Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center md:hidden animate-fade-in">
                    <div className="flex flex-col gap-8 text-center">
                        <Link href="/" onClick={toggleMenu} className="text-3xl font-semibold tracking-tight hover:text-ios-blue transition-colors">
                            System
                        </Link>
                        <Link href="/services" onClick={toggleMenu} className="text-3xl font-semibold tracking-tight hover:text-ios-blue transition-colors">
                            Modules
                        </Link>
                        <Link href="/methodology" onClick={toggleMenu} className="text-3xl font-semibold tracking-tight hover:text-ios-blue transition-colors">
                            Methodology
                        </Link>
                        <Link href="/about" onClick={toggleMenu} className="text-3xl font-semibold tracking-tight hover:text-ios-blue transition-colors">
                            Manifesto
                        </Link>
                        <Link href="/contact" onClick={toggleMenu} className="text-3xl font-semibold tracking-tight text-ios-blue transition-colors">
                            Connect
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
