"use client"

import { useState, useEffect } from 'react'
import { Cookie, X } from 'lucide-react'

const CONSENT_KEY = 'solvovis-cookie-consent'

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem(CONSENT_KEY)
        if (!consent) {
            // Small delay for smoother UX
            const timer = setTimeout(() => setIsVisible(true), 1000)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem(CONSENT_KEY, 'accepted')
        setIsVisible(false)
        // Here you would initialize analytics, etc.
    }

    const handleReject = () => {
        localStorage.setItem(CONSENT_KEY, 'rejected')
        setIsVisible(false)
        // Ensure no non-essential scripts load
    }

    if (!isVisible) return null

    return (
        <div
            className="fixed bottom-20 md:bottom-6 right-4 left-4 md:left-auto md:w-[420px] z-[55] animate-fade-in"
            role="dialog"
            aria-labelledby="cookie-banner-title"
            aria-describedby="cookie-banner-description"
        >
            <div className="glass-panel bg-white/95 rounded-2xl p-5 shadow-ios-hover border border-gray-100">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-ios-blue/10 rounded-xl flex items-center justify-center">
                            <Cookie className="w-5 h-5 text-ios-blue" />
                        </div>
                        <h3 id="cookie-banner-title" className="font-semibold text-ios-text">
                            Cookie Preferences
                        </h3>
                    </div>
                    <button
                        onClick={handleReject}
                        className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-lg focus-visible:ring-2 focus-visible:ring-ios-blue focus-visible:ring-offset-2"
                        aria-label="Close and reject cookies"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Description */}
                <p id="cookie-banner-description" className="text-sm text-ios-subtext mb-5 leading-relaxed">
                    We use cookies to enhance your experience and analyze site traffic.
                    You can accept all cookies or reject non-essential ones.
                </p>

                {/* Buttons - No dark patterns, equal visual weight */}
                <div className="flex gap-3">
                    <button
                        onClick={handleReject}
                        className="flex-1 px-4 py-2.5 rounded-xl bg-gray-100 text-ios-text font-medium text-sm hover:bg-gray-200 active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-ios-blue focus-visible:ring-offset-2"
                    >
                        Reject All
                    </button>
                    <button
                        onClick={handleAccept}
                        className="flex-1 px-4 py-2.5 rounded-xl bg-ios-blue text-white font-medium text-sm hover:bg-blue-600 active:scale-[0.98] transition-all focus-visible:ring-2 focus-visible:ring-ios-blue focus-visible:ring-offset-2"
                    >
                        Accept All
                    </button>
                </div>

                {/* Privacy Link */}
                <p className="text-xs text-center text-gray-400 mt-4">
                    Read our{' '}
                    <a href="/privacy" className="text-ios-blue hover:underline focus-visible:ring-2 focus-visible:ring-ios-blue rounded">
                        Privacy Policy
                    </a>
                </p>
            </div>
        </div>
    )
}
