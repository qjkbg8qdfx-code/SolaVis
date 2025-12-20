// src/components/FounderBio.tsx
'use client';

import Image from 'next/image';
import { Linkedin, BadgeCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function FounderBio() {
    const { founder } = siteConfig;

    return (
        <div className="mx-auto max-w-md">
            {/* Founder Card */}
            <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-ios-hover">
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                        src={founder.image}
                        alt={`${founder.name} - ${founder.role}`}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Info Section */}
                <div className="p-6">
                    {/* Verified Badge */}
                    <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        <span>Verified Human Operator</span>
                    </div>

                    {/* Name & Role */}
                    <h3 className="mb-1 text-xl font-bold text-gray-900">{founder.name}</h3>
                    <p className="mb-4 text-sm text-gray-500">{founder.role}</p>

                    {/* LinkedIn Link - CONDITIONAL RENDERING */}
                    {founder.linkedIn ? (
                        <a
                            href={founder.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#0A66C2] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#004182] active:scale-[0.98]"
                            aria-label={`View ${founder.name} on LinkedIn`}
                        >
                            <Linkedin className="h-4 w-4" />
                            <span>Connect on LinkedIn</span>
                        </a>
                    ) : (
                        // Fallback or Empty if no LinkedIn provided (Maintains layout but hides button)
                        <div className="h-2"></div>
                    )}
                </div>
            </div>

            {/* Caption */}
            <p className="mt-6 text-center text-lg font-medium text-ios-subtext">
                System designed by humans. <br />
                <span className="text-ios-text">Operated by AI.</span>
            </p>
        </div>
    );
}
