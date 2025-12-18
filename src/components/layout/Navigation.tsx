"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { X, Sun, Moon, Command } from 'lucide-react'
import { desktopNavLinks, mobileNavLinks, ctaButton } from '@/config/navigation'
import CommandMenu from '@/components/CommandMenu'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [commandOpen, setCommandOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()
    const { theme, setTheme } = useTheme()

    const toggleMenu = () => setIsOpen(!isOpen)

    // Hydration fix for theme
    useEffect(() => {
        setMounted(true)
    }, [])

    // Scroll Lock Logic
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [isOpen])

    const isActive = (path: string) => pathname === path ? "text-ios-text dark:text-white" : "text-ios-subtext dark:text-gray-400"

    return (
        <>
            <nav className={`fixed top-0 w-full glass-panel dark:bg-gray-900/80 dark:border-gray-800 ${isOpen ? 'z-[70]' : 'z-50'}`}>
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
                                className={`hover:text-ios-text dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ios-blue focus-visible:ring-offset-2 rounded-lg px-1 ${isActive(link.href)}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        {/* Cmd+K Trigger */}
                        <button
                            onClick={() => setCommandOpen(true)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Open command menu"
                        >
                            <Command className="w-3.5 h-3.5" />
                            <kbd className="font-mono text-xs">K</kbd>
                        </button>

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {mounted && (theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
                        </button>

                        <Link
                            href={ctaButton.href}
                            className="btn-primary py-2 px-4 shadow-none text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ios-blue focus-visible:ring-offset-2"
                        >
                            {ctaButton.label}
                        </Link>
                    </div>

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
                    <div className="fixed inset-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl z-[60] flex flex-col justify-center items-center md:hidden animate-fade-in">
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
                                    className={`text-3xl font-semibold tracking-tight hover:text-ios-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ios-blue rounded-lg ${pathname === link.href ? 'text-ios-blue' : 'text-gray-900 dark:text-white'}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Command Menu */}
            <CommandMenu open={commandOpen} setOpen={setCommandOpen} />
        </>
    )
}
