'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface StickyCTAProps {
    href?: string;
    label?: string;
    scrollThreshold?: number;
}

export default function StickyCTA({
    href = '/contact',
    label = 'Start Protocol',
    scrollThreshold = 300,
}: StickyCTAProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollThreshold]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 z-40 hidden -translate-x-1/2 animate-fade-in md:block">
            <Link
                href={href}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-ios-blue px-6 py-4 font-semibold text-white shadow-lg transition-transform active:scale-[0.98]"
            >
                {label}
                <ArrowRight className="h-4 w-4" />
            </Link>
        </div>
    );
}
