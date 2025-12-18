"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { mobileTabBarLinks } from '@/config/navigation'

export default function MobileNav() {
    const pathname = usePathname()

    return (
        <nav aria-label="Mobile navigation" className="md:hidden fixed bottom-0 w-full glass-panel pb-6 pt-3 px-6 z-50 flex justify-between items-center text-xs font-medium text-ios-subtext">
            {mobileTabBarLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-ios-blue' : 'text-gray-400'}`}
                    >
                        <span>{link.label}</span>
                    </Link>
                )
            })}
        </nav>
    )
}
