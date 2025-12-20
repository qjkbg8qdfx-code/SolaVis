'use client';

import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const CONSENT_KEY = 'solvovis-cookie-consent';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem(CONSENT_KEY);
        if (!consent) {
            // Small delay for smoother UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(CONSENT_KEY, 'accepted');
        setIsVisible(false);
        // Here you would initialize analytics, etc.
    };

    const handleReject = () => {
        localStorage.setItem(CONSENT_KEY, 'rejected');
        setIsVisible(false);
        // Ensure no non-essential scripts load
    };

    const handleEssential = () => {
        localStorage.setItem(CONSENT_KEY, 'essential');
        setIsVisible(false);
        // Only essential cookies allowed
    };

    if (!isVisible) return null;

    return (
        <div
            className="fixed bottom-20 left-4 right-4 z-[55] animate-fade-in md:bottom-6 md:left-auto md:w-[420px]"
            role="dialog"
            aria-labelledby="cookie-banner-title"
            aria-describedby="cookie-banner-description"
        >
            <div className="glass-panel rounded-2xl border border-gray-100 bg-white/95 p-5 shadow-ios-hover">
                {/* Header */}
                <div className="mb-3 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ios-blue/10">
                            <Cookie className="h-5 w-5 text-ios-blue" />
                        </div>
                        <h3 id="cookie-banner-title" className="font-semibold text-ios-text">
                            Cookie Preferences
                        </h3>
                    </div>
                    <button
                        onClick={handleReject}
                        className="rounded-lg p-1.5 text-gray-400 transition-colors hover:text-gray-600 focus-visible:ring-2 focus-visible:ring-ios-blue focus-visible:ring-offset-2"
                        aria-label="Close and reject cookies"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                {/* Description */}
                <p
                    id="cookie-banner-description"
                    className="mb-5 text-sm leading-relaxed text-ios-subtext"
                >
                    We use cookies to enhance your experience and analyze site traffic. You can
                    accept all cookies or reject non-essential ones.
                </p>

                {/* Buttons - No dark patterns, equal visual weight */}
                <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                        <button
                            onClick={handleReject}
                            className="flex-1 rounded-xl bg-gray-100 px-4 py-2.5 text-sm font-medium text-ios-text transition-all hover:bg-gray-200 focus-visible:ring-2 focus-visible:ring-ios-blue focus-visible:ring-offset-2 active:scale-[0.98]"
                        >
                            Reject All
                        </button>
                        <button
                            onClick={handleAccept}
                            className="flex-1 rounded-xl bg-ios-blue px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-ios-blue focus-visible:ring-offset-2 active:scale-[0.98]"
                        >
                            Accept All
                        </button>
                    </div>
                    <button
                        onClick={handleEssential}
                        className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-ios-subtext transition-all hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-ios-blue focus-visible:ring-offset-2 active:scale-[0.98]"
                    >
                        Essential Cookies Only
                    </button>
                </div>

                {/* Privacy Link */}
                <p className="mt-4 text-center text-xs text-gray-400">
                    Read our{' '}
                    <a
                        href="/privacy"
                        className="rounded text-ios-blue hover:underline focus-visible:ring-2 focus-visible:ring-ios-blue"
                    >
                        Privacy Policy
                    </a>
                </p>
            </div>
        </div>
    );
}
