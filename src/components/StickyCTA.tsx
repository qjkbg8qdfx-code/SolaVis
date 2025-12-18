"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface StickyCTAProps {
    href?: string
    label?: string
    scrollThreshold?: number
}

export default function StickyCTA({
    href = '/contact',
    label = 'Start Protocol',
    scrollThreshold = 300,
}: StickyCTAProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > scrollThreshold)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [scrollThreshold])

    if (!isVisible) return null

    return (
        <div className="md:hidden fixed bottom-20 left-4 right-4 z-40 animate-fade-in">
            <Link
                href={href}
                className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-ios-blue text-white font-semibold rounded-2xl shadow-lg active:scale-[0.98] transition-transform"
            >
                {label}
                <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
    )
}
