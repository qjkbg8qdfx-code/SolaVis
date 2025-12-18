// Navigation configuration - centralized nav links
export interface NavLink {
    href: string
    label: string
    mobileLabel?: string // Different label for mobile nav if needed
}

export const desktopNavLinks: NavLink[] = [
    { href: '/methodology', label: 'Methodology' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'Manifesto' },
    { href: '/contact', label: 'Contact' },
]

export const mobileNavLinks: NavLink[] = [
    { href: '/', label: 'System' },
    { href: '/services', label: 'Modules' },
    { href: '/methodology', label: 'Methodology' },
    { href: '/about', label: 'Manifesto' },
    { href: '/contact', label: 'Connect' },
]

export const mobileTabBarLinks: NavLink[] = [
    { href: '/', label: 'System' },
    { href: '/services', label: 'Modules' },
    { href: '/contact', label: 'Connect' },
]

export const ctaButton = {
    href: '/contact',
    label: 'Start Logic Audit',
}
