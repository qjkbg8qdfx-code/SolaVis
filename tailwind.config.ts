/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Trust Engine - Neutral, High-End Palette
                slate: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617',
                },
                zinc: {
                    50: '#fafafa',
                    100: '#f4f4f5',
                    200: '#e4e4e7',
                    300: '#d4d4d8',
                    400: '#a1a1aa',
                    500: '#71717a',
                    600: '#52525b',
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#18181b',
                    950: '#09090b',
                },
                // iOS / Apple Style Palette (preserved for compatibility)
                ios: {
                    bg: '#F5F5F7', // Apple Light Gray background
                    card: '#FFFFFF', // Pure white cards
                    text: '#1D1D1F', // Apple "Black"
                    subtext: '#86868B', // Apple "Gray"
                    blue: '#0071E3', // Apple Blue (Actions)
                    divider: 'rgba(0,0,0,0.1)',
                },
                surface: {
                    light: '#F5F5F7',
                    glass: 'rgba(255, 255, 255, 0.72)', // Navbar glass
                },
                // Trust Engine Accent
                engine: {
                    primary: '#0071E3', // Keep blue for CTAs
                    accent: '#10b981', // Emerald for success/active states
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
                mono: ['var(--font-mono)', 'monospace'],
            },
            borderRadius: {
                '3xl': '24px',
                '4xl': '32px',
                btn: '980px', // Pill shape
            },
            boxShadow: {
                ios: '0 4px 24px rgba(0,0,0,0.06)', // Soft ambient shadow
                'ios-hover': '0 8px 32px rgba(0,0,0,0.12)',
                glass: '0 4px 30px rgba(0, 0, 0, 0.1)',
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.3s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};
