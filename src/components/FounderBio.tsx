'use client';

import Image from 'next/image';
import { Linkedin, BadgeCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function FounderBio() {
    const { founder } = siteConfig;
    const isComplete = founder.name !== '[FOUNDER_NAME]' && founder.linkedIn !== '[LINKEDIN_URL]';

    return (
        <div className="mx-auto max-w-md">
            {/* Founder Card */}
            <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-ios-hover">
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
                    {isComplete ? (
                        <Image
                            src={founder.image}
                            alt={`${founder.name} - ${founder.role}`}
                            fill
                            className="object-cover"
                            priority
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-gray-400">
                                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-300/50">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="8" r="5" />
                                        <path d="M20 21a8 8 0 1 0-16 0" />
                                    </svg>
                                </div>
                                <span className="font-mono text-xs uppercase tracking-wider">
                                    Photo Required
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Info Section */}
                <div className="p-6">
                    {/* Verified Badge */}
                    <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        <span>Verified Human Operator</span>
                    </div>

                    {/* Name & Role */}
                    <h3 className="mb-1 text-xl font-bold text-gray-900">
                        {isComplete ? founder.name : 'Founder Name Required'}
                    </h3>
                    <p className="mb-4 text-sm text-gray-500">{founder.role}</p>

                    {/* LinkedIn Link - Mandatory */}
                    <a
                        href={isComplete ? founder.linkedIn : '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                            isComplete
                                ? 'bg-[#0A66C2] text-white hover:bg-[#004182] active:scale-[0.98]'
                                : 'cursor-not-allowed bg-gray-100 text-gray-400'
                        }`}
                        aria-label={
                            isComplete
                                ? `View ${founder.name} on LinkedIn`
                                : 'LinkedIn profile required'
                        }
                    >
                        <Linkedin className="h-4 w-4" />
                        <span>{isComplete ? 'Connect on LinkedIn' : 'LinkedIn URL Required'}</span>
                    </a>
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
