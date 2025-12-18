"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'
import { desktopNavLinks, mobileNavLinks, ctaButton } from '@/config/navigation'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const toggleMenu = () => setIsOpen(!isOpen)

    // Scroll Lock Logic
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [isOpen])

    const isActive = (path: string) => pathname === path ? "text-ios-text" : "text-ios-subtext"

    return (
        <nav className={`fixed top-0 w-full glass-panel ${isOpen ? 'z-[70]' : 'z-50'}`}>
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative bg-transparent">
                <Link href="/" className="font-semibold text-lg tracking-tight hover:opacity-70 transition-opacity flex items-center gap-2 relative z-50">
                    <Image src="/logo.svg" alt="SolvoVis Logo" width={28} height={28} className="w-7 h-7" />
                    SolvoVis<span className="font-mono text-ios-blue text-xl">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-[15px] font-medium">
                    {desktopNavLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`hover:text-ios-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ios-blue focus-visible:ring-offset-2 rounded-lg px-1 ${isActive(link.href)}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <Link
                    href={ctaButton.href}
                    className="hidden md:block btn-primary py-2 px-4 shadow-none text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ios-blue focus-visible:ring-offset-2"
                >
                    {ctaButton.label}
                </Link>

                {/* Mobile Menu Trigger */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-lg font-bold text-ios-blue relative z-50 p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-ios-blue rounded-lg"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    Menu
                </button>
            </div>

            {/* Mobile Full Screen Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[60] flex flex-col justify-center items-center md:hidden animate-fade-in">
                    {/* Close Button */}
                    <button
                        onClick={toggleMenu}
                        className="absolute top-5 right-6 p-2 text-ios-blue focus:outline-none focus:ring-2 focus:ring-ios-blue rounded-lg"
                        aria-label="Close menu"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div className="flex flex-col gap-8 text-center">
                        {mobileNavLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={toggleMenu}
                                className={`text-3xl font-semibold tracking-tight hover:text-ios-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ios-blue rounded-lg ${pathname === link.href ? 'text-ios-blue' : 'text-gray-900'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
