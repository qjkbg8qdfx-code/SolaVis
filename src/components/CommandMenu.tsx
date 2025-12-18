'use client'

import { useEffect, useState } from 'react'
import { Command } from 'cmdk'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
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
    X
} from 'lucide-react'
import { siteConfig } from '@/config/site'

interface CommandMenuProps {
    open: boolean
    setOpen: (open: boolean) => void
}

export default function CommandMenu({ open, setOpen }: CommandMenuProps) {
    const router = useRouter()
    const { theme, setTheme } = useTheme()
    const [copied, setCopied] = useState(false)

    // Keyboard shortcut listener
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen(!open)
            }
            if (e.key === 'Escape') {
                setOpen(false)
            }
        }
        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [open, setOpen])

    const navigate = (path: string) => {
        router.push(path)
        setOpen(false)
    }

    const copyEmail = async () => {
        await navigator.clipboard.writeText(siteConfig.email)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
            setOpen(false)
        }, 1000)
    }

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        setOpen(false)
    }

    if (!open) return null

    return (
        <div className="fixed inset-0 z-[100]">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setOpen(false)}
            />

            {/* Command Dialog */}
            <div className="fixed left-1/2 top-1/4 -translate-x-1/2 w-full max-w-lg">
                <Command className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center border-b border-gray-100 dark:border-gray-800 px-4">
                        <Search className="w-5 h-5 text-gray-400 mr-3" />
                        <Command.Input
                            placeholder="Search commands..."
                            className="w-full py-4 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 outline-none text-base"
                        />
                        <button
                            onClick={() => setOpen(false)}
                            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        >
                            <X className="w-4 h-4 text-gray-400" />
                        </button>
                    </div>

                    <Command.List className="max-h-80 overflow-y-auto p-2">
                        <Command.Empty className="py-6 text-center text-gray-500 text-sm">
                            No results found.
                        </Command.Empty>

                        {/* Navigation Commands */}
                        <Command.Group heading="Navigate" className="px-2 py-1.5 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <Command.Item
                                onSelect={() => navigate('/')}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-800 transition-colors"
                            >
                                <Home className="w-4 h-4" />
                                <span>Home</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => navigate('/services')}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-800 transition-colors"
                            >
                                <Briefcase className="w-4 h-4" />
                                <span>Services</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => navigate('/methodology')}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-800 transition-colors"
                            >
                                <GitBranch className="w-4 h-4" />
                                <span>Methodology</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => navigate('/about')}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-800 transition-colors"
                            >
                                <BookOpen className="w-4 h-4" />
                                <span>Read Manifesto</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => navigate('/contact')}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-800 transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                <span>Contact Support</span>
                            </Command.Item>
                        </Command.Group>

                        {/* System Commands */}
                        <Command.Group heading="System" className="px-2 py-1.5 text-xs font-medium text-gray-500 uppercase tracking-wider mt-2">
                            <Command.Item
                                onSelect={toggleTheme}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-800 transition-colors"
                            >
                                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                                <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={copyEmail}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 data-[selected=true]:bg-gray-100 dark:data-[selected=true]:bg-gray-800 transition-colors"
                            >
                                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                            </Command.Item>
                        </Command.Group>
                    </Command.List>

                    {/* Footer */}
                    <div className="border-t border-gray-100 dark:border-gray-800 px-4 py-2 flex gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                            <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-mono">↑↓</kbd>
                            Navigate
                        </span>
                        <span className="flex items-center gap-1">
                            <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-mono">↵</kbd>
                            Select
                        </span>
                        <span className="flex items-center gap-1">
                            <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-mono">esc</kbd>
                            Close
                        </span>
                    </div>
                </Command>
            </div>
        </div>
    )
}
