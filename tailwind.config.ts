/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // iOS / Apple Style Palette
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
            },
            fontFamily: {
                sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
                mono: ['var(--font-mono)', 'monospace'],
            },
            borderRadius: {
                '3xl': '24px',
                '4xl': '32px',
                'btn': '980px', // Pill shape
            },
            boxShadow: {
                'ios': '0 4px 24px rgba(0,0,0,0.06)', // Soft ambient shadow
                'ios-hover': '0 8px 32px rgba(0,0,0,0.12)',
                'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
            },
            backdropBlur: {
                'xs': '2px',
            }
        },
    },
    plugins: [],
}
