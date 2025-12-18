"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Briefcase, GitBranch, Mail } from 'lucide-react'

const mobileBottomNavLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/services', label: 'Services', icon: Briefcase },
    { href: '/methodology', label: 'Method', icon: GitBranch },
    { href: '/contact', label: 'Contact', icon: Mail },
]

export default function MobileNav() {
    const pathname = usePathname()

    return (
        <nav
            aria-label="Mobile navigation"
            className="md:hidden fixed bottom-0 w-full glass-panel pb-6 pt-3 px-4 z-50"
        >
            <div className="flex justify-around items-center">
                {mobileBottomNavLinks.map((link) => {
                    const isActive = pathname === link.href
                    const Icon = link.icon
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex flex-col items-center justify-center gap-1 min-w-[44px] min-h-[44px] transition-colors ${isActive ? 'text-ios-blue' : 'text-gray-400'
                                }`}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            <Icon className="w-6 h-6" strokeWidth={isActive ? 2 : 1.5} />
                            <span className="text-[10px] font-medium">{link.label}</span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
