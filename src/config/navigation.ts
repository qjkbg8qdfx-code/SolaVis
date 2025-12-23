// Navigation configuration - centralized nav links
import { Home, Briefcase, FileText, Mail, type LucideIcon } from 'lucide-react';

export interface NavLink {
    href: string;
    label: string;
    isLegal?: boolean; // Flag for smaller legal links
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

// Top Drawer - Brand Infrastructure, Utilities, Legal (Mobile)
export const mobileDrawerLinks: NavLink[] = [
    { href: '/methodology', label: 'Methodology' },
    { href: '/about', label: 'Manifesto' },
    { href: '/privacy', label: 'Privacy Policy', isLegal: true },
    { href: '/terms', label: 'Terms of Service', isLegal: true },
];

export const ctaButton = {
    href: '/contact',
    label: 'Start Logic Audit',
};
