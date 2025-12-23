'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Layers, FileText, Mail, LucideIcon } from 'lucide-react';
import { mobileTabBarLinks } from '@/config/navigation';

// Icon map for rendering icons from string names
const iconMap: Record<string, LucideIcon> = {
    Home,
    Layers,
    FileText,
    Mail,
};

export default function MobileNav() {
    const pathname = usePathname();

    return (
        <nav
            aria-label="Mobile navigation"
            className="fixed bottom-0 z-50 w-full border-t border-gray-200/50 bg-white/90 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl dark:border-slate-800/50 dark:bg-slate-950/90 md:hidden"
        >
            <div className="flex items-center justify-around">
                {mobileTabBarLinks.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = iconMap[link.iconName];
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1 transition-colors ${isActive ? 'text-ios-blue' : 'text-gray-400'
                                }`}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {Icon && <Icon className="h-6 w-6" strokeWidth={isActive ? 2 : 1.5} />}
                            <span className="text-[10px] font-medium">{link.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
