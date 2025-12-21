'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, FileText, Mail } from 'lucide-react';

const mobileBottomNavLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/services', label: 'Services', icon: Briefcase },
    { href: '/#case-studies', label: 'Cases', icon: FileText },
    { href: '/contact', label: 'Contact', icon: Mail },
];

export default function MobileNav() {
    const pathname = usePathname();

    return (
        <nav
            aria-label="Mobile navigation"
            className="glass-panel fixed bottom-0 z-50 w-full px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3 md:hidden"
        >
            <div className="flex items-center justify-around">
                {mobileBottomNavLinks.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1 transition-colors ${isActive ? 'text-ios-blue' : 'text-gray-400'
                                }`}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            <Icon className="h-6 w-6" strokeWidth={isActive ? 2 : 1.5} />
                            <span className="text-[10px] font-medium">{link.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
