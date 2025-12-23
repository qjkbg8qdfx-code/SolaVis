// Navigation configuration - centralized nav links
import { Home, Briefcase, FileText, Mail, type LucideIcon } from 'lucide-react';

export interface NavLink {
    href: string;
    label: string;
    mobileLabel?: string;
}

export interface TabBarLink extends NavLink {
    icon: LucideIcon;
}

// Desktop navigation links
export const desktopNavLinks: NavLink[] = [
    { href: '/methodology', label: 'Methodology' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'Manifesto' },
    { href: '/contact', label: 'Contact' },
];

// Bottom Tab Bar - High-velocity conversion actions (Mobile)
export const mobileTabBarLinks: TabBarLink[] = [
    { href: '/', label: 'System', icon: Home },
    { href: '/services', label: 'Modules', icon: Briefcase },
    { href: '/#case-studies', label: 'Cases', icon: FileText },
    { href: '/contact', label: 'Connect', icon: Mail },
];

// Top Drawer - Corporate Infrastructure (Mobile)
export const mobileNavLinks: NavLink[] = [
    { href: '/about', label: 'Manifesto' },
    { href: '/methodology', label: 'Methodology' },
    { href: '/insights', label: 'Insights' },
];

// Legal links for drawer footer
export const legalLinks: NavLink[] = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
];

export const ctaButton = {
    href: '/contact',
    label: 'Start Logic Audit',
};
