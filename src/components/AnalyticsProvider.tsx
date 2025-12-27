'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const CONSENT_KEY = 'solvovis-cookie-consent';

/**
 * AnalyticsProvider - GDPR-compliant analytics injection
 *
 * This component listens to cookie consent and only loads Google Analytics
 * when the user has explicitly accepted cookies.
 *
 * It listens to:
 * 1. Initial localStorage state on mount
 * 2. Custom 'cookie-consent-update' events for immediate loading without refresh
 */
export default function AnalyticsProvider() {
    const [shouldLoadAnalytics, setShouldLoadAnalytics] = useState(false);

    useEffect(() => {
        // Safety check: warn if GA ID is missing
        if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
            console.warn('[Analytics] GA ID missing or not configured. Set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local');
            return;
        }

        // Check initial consent state
        const consent = localStorage.getItem(CONSENT_KEY);
        if (consent === 'accepted') {
            setShouldLoadAnalytics(true);
            console.log('[Analytics] Consent detected, loading GA...');
        }

        // Listen for consent updates (from CookieBanner)
        const handleConsentUpdate = (event: CustomEvent<string>) => {
            if (event.detail === 'accepted') {
                setShouldLoadAnalytics(true);
                console.log('[Analytics] Consent granted, loading GA...');
            }
        };

        window.addEventListener(
            'cookie-consent-update',
            handleConsentUpdate as EventListener
        );

        return () => {
            window.removeEventListener(
                'cookie-consent-update',
                handleConsentUpdate as EventListener
            );
        };
    }, []);

    // Don't render anything if consent not given or GA ID missing
    if (!shouldLoadAnalytics || !GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
        return null;
    }

    return (
        <>
            {/* Google Analytics - gtag.js */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}', {
                        page_path: window.location.pathname,
                    });
                    console.log('[Analytics] GA initialized with ID: ${GA_MEASUREMENT_ID}');
                `}
            </Script>
        </>
    );
}
