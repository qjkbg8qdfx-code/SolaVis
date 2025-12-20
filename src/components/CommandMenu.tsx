'use client';

import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import {
    Search,
    Home,
    Briefcase,
    GitBranch,
    BookOpen,
    Mail,
    Moon,
    Sun,
    Copy,
    Check,
    X,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

interface CommandMenuProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function CommandMenu({ open, setOpen }: CommandMenuProps) {
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const [copied, setCopied] = useState(false);

    // Keyboard shortcut listener
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen(!open);
            }
            if (e.key === 'Escape') {
                setOpen(false);
            }
        };
        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, [open, setOpen]);

    const navigate = (path: string) => {
        router.push(path);
        setOpen(false);
    };

    const copyEmail = async () => {
        await navigator.clipboard.writeText(siteConfig.email);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
            setOpen(false);
        }, 1000);
    };

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        setOpen(false);
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setOpen(false)}
            />

            {/* Command Dialog */}
            <div className="fixed left-1/2 top-1/4 w-full max-w-lg -translate-x-1/2">
                <Command className="overflow-hidden rounded-2xl border border-gray-200 bg-white/90 shadow-2xl backdrop-blur-xl dark:border-gray-800 dark:bg-gray-900/90">
                    {/* Header */}
                    <div className="flex items-center border-b border-gray-100 px-4 dark:border-gray-800">
                        <Search className="mr-3 h-5 w-5 text-gray-400" />
                        <Command.Input
                            placeholder="Search commands..."
                            className="w-full bg-transparent py-4 text-base text-gray-900 placeholder-gray-400 outline-none dark:text-gray-100"
                        />
                        <button
                            onClick={() => setOpen(false)}
                            className="rounded-lg p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <X className="h-4 w-4 text-gray-400" />
                        </button>
                    </div>

                    <Command.List className="max-h-80 overflow-y-auto p-2">
                        <Command.Empty className="py-6 text-center text-sm text-gray-500">
                            No results found.
                        </Command.Empty>

                        {/* Navigation Commands */}
                        <Command.Group
                            heading="Navigate"
                            className="px-2 py-1.5 text-xs font-medium uppercase tracking-wider text-gray-500"
                        >
                            <Command.Item
                                onSelect={() => navigate('/')}
                                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-gray-700 transition-colors hover:bg-gray-100 data-[selected=true]:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 dark:data-[selected=true]:bg-gray-800"
                            >
                                <Home className="h-4 w-4" />
                                <span>Home</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => navigate('/services')}
                                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-gray-700 transition-colors hover:bg-gray-100 data-[selected=true]:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 dark:data-[selected=true]:bg-gray-800"
                            >
                                <Briefcase className="h-4 w-4" />
                                <span>Services</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => navigate('/methodology')}
                                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-gray-700 transition-colors hover:bg-gray-100 data-[selected=true]:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 dark:data-[selected=true]:bg-gray-800"
                            >
                                <GitBranch className="h-4 w-4" />
                                <span>Methodology</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => navigate('/about')}
                                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-gray-700 transition-colors hover:bg-gray-100 data-[selected=true]:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 dark:data-[selected=true]:bg-gray-800"
                            >
                                <BookOpen className="h-4 w-4" />
                                <span>Read Manifesto</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => navigate('/contact')}
                                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-gray-700 transition-colors hover:bg-gray-100 data-[selected=true]:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 dark:data-[selected=true]:bg-gray-800"
                            >
                                <Mail className="h-4 w-4" />
                                <span>Contact Support</span>
                            </Command.Item>
                        </Command.Group>

                        {/* System Commands */}
                        <Command.Group
                            heading="System"
                            className="mt-2 px-2 py-1.5 text-xs font-medium uppercase tracking-wider text-gray-500"
                        >
                            <Command.Item
                                onSelect={toggleTheme}
                                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-gray-700 transition-colors hover:bg-gray-100 data-[selected=true]:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 dark:data-[selected=true]:bg-gray-800"
                            >
                                {theme === 'dark' ? (
                                    <Sun className="h-4 w-4" />
                                ) : (
                                    <Moon className="h-4 w-4" />
                                )}
                                <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={copyEmail}
                                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-gray-700 transition-colors hover:bg-gray-100 data-[selected=true]:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 dark:data-[selected=true]:bg-gray-800"
                            >
                                {copied ? (
                                    <Check className="h-4 w-4 text-green-500" />
                                ) : (
                                    <Copy className="h-4 w-4" />
                                )}
                                <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                            </Command.Item>
                        </Command.Group>
                    </Command.List>

                    {/* Footer */}
                    <div className="flex gap-4 border-t border-gray-100 px-4 py-2 text-xs text-gray-400 dark:border-gray-800">
                        <span className="flex items-center gap-1">
                            <kbd className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[10px] dark:bg-gray-800">
                                ↑↓
                            </kbd>
                            Navigate
                        </span>
                        <span className="flex items-center gap-1">
                            <kbd className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[10px] dark:bg-gray-800">
                                ↵
                            </kbd>
                            Select
                        </span>
                        <span className="flex items-center gap-1">
                            <kbd className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[10px] dark:bg-gray-800">
                                esc
                            </kbd>
                            Close
                        </span>
                    </div>
                </Command>
            </div>
        </div>
    );
}
