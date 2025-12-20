'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { X, Sun, Moon, Command } from 'lucide-react';
import { desktopNavLinks, mobileNavLinks, ctaButton } from '@/config/navigation';
import CommandMenu from '@/components/CommandMenu';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [commandOpen, setCommandOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();

    const toggleMenu = () => setIsOpen(!isOpen);

    // Hydration fix for theme
    useEffect(() => {
        setMounted(true);
    }, []);

    // Scroll Lock Logic
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const isActive = (path: string) =>
        pathname === path ? 'text-ios-text dark:text-white' : 'text-ios-subtext dark:text-gray-400';

    return (
        <>
            <nav
                className={`glass-panel fixed top-0 w-full dark:border-gray-800 dark:bg-gray-900/80 ${isOpen ? 'z-[70]' : 'z-50'}`}
            >
                <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between bg-transparent px-6">
                    <Link
                        href="/"
                        className="relative z-50 flex items-center gap-2 text-lg font-semibold tracking-tight transition-opacity hover:opacity-70"
                    >
                        <Image
                            src="/logo.svg"
                            alt="SolvoVis Logo"
                            width={24}
                            height={24}
                            className="h-6 w-6"
                        />
                        SolvoVis<span className="font-mono text-xl text-ios-blue">.</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden gap-8 text-[15px] font-medium md:flex">
                        {desktopNavLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`rounded-lg px-1 transition-colors hover:text-ios-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ios-blue focus-visible:ring-offset-2 dark:hover:text-white ${isActive(link.href)}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-3 md:flex">
                        {/* Cmd+K Trigger */}
                        <button
                            onClick={() => setCommandOpen(true)}
                            className="flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-gray-500 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                            aria-label="Open command menu"
                        >
                            <Command className="h-3.5 w-3.5" />
                            <kbd className="font-mono text-xs">K</kbd>
                        </button>

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="rounded-lg bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                            aria-label="Toggle theme"
                        >
                            {mounted &&
                                (theme === 'dark' ? (
                                    <Sun className="h-4 w-4" />
                                ) : (
                                    <Moon className="h-4 w-4" />
                                ))}
                        </button>

                        <Link
                            href={ctaButton.href}
                            className="btn-primary px-4 py-2 text-sm shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ios-blue focus-visible:ring-offset-2"
                        >
                            {ctaButton.label}
                        </Link>
                    </div>

                    {/* Mobile Menu Trigger */}
                    <button
                        onClick={toggleMenu}
                        className="relative z-50 -mr-2 rounded-lg p-2 text-lg font-bold text-ios-blue focus:outline-none focus:ring-2 focus:ring-ios-blue md:hidden"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                    >
                        Menu
                    </button>
                </div>

                {/* Mobile Full Screen Overlay */}
                {isOpen && (
                    <div className="fixed inset-0 z-[60] flex animate-fade-in flex-col items-center justify-center bg-white/95 backdrop-blur-xl dark:bg-gray-950/95 md:hidden">
                        {/* Close Button */}
                        <button
                            onClick={toggleMenu}
                            className="absolute right-6 top-5 rounded-lg p-2 text-ios-blue focus:outline-none focus:ring-2 focus:ring-ios-blue"
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6" />
                        </button>
                        <div className="flex flex-col gap-8 text-center">
                            {mobileNavLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className={`rounded-lg text-3xl font-semibold tracking-tight transition-colors hover:text-ios-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ios-blue ${pathname === link.href ? 'text-ios-blue' : 'text-gray-900 dark:text-white'}`}
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
    );
}
