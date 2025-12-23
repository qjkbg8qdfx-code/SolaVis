// Navigation configuration - centralized nav links
import { Home, Layers, FileText, Mail, type LucideIcon } from 'lucide-react';

export interface NavLink {
    href: string;
    label: string;
    isLegal?: boolean;
}

export interface TabBarLink extends NavLink {
    iconName: string; // String name for serialization
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
    { href: '/', label: 'Home', iconName: 'Home' },
    { href: '/services', label: 'Services', iconName: 'Layers' },
    { href: '/#case-studies', label: 'Cases', iconName: 'FileText' },
    { href: '/contact', label: 'Contact', iconName: 'Mail' },
];

// Top Drawer - Complete directory for navigation security
export const mobileDrawerLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/methodology', label: 'Methodology' },
    { href: '/about', label: 'Manifesto' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy', isLegal: true },
    { href: '/terms', label: 'Terms of Service', isLegal: true },
];

export const ctaButton = {
    href: '/contact',
    label: 'Start Logic Audit',
};
