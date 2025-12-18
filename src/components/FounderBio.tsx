"use client"

import Image from 'next/image'
import { Linkedin, BadgeCheck } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function FounderBio() {
    const { founder } = siteConfig
    const isComplete = founder.name !== '[FOUNDER_NAME]' && founder.linkedIn !== '[LINKEDIN_URL]'

    return (
        <div className="max-w-md mx-auto">
            {/* Founder Card */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-ios-hover border border-gray-100">
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
                                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-300/50 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="8" r="5" />
                                        <path d="M20 21a8 8 0 1 0-16 0" />
                                    </svg>
                                </div>
                                <span className="text-xs font-mono uppercase tracking-wider">Photo Required</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Info Section */}
                <div className="p-6">
                    {/* Verified Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 rounded-full text-xs font-semibold text-green-700 mb-4">
                        <BadgeCheck className="w-3.5 h-3.5" />
                        <span>Verified Human Operator</span>
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {isComplete ? founder.name : 'Founder Name Required'}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">{founder.role}</p>

                    {/* LinkedIn Link - Mandatory */}
                    <a
                        href={isComplete ? founder.linkedIn : '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${isComplete
                                ? 'bg-[#0A66C2] text-white hover:bg-[#004182] active:scale-[0.98]'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                        aria-label={isComplete ? `View ${founder.name} on LinkedIn` : 'LinkedIn profile required'}
                    >
                        <Linkedin className="w-4 h-4" />
                        <span>{isComplete ? 'Connect on LinkedIn' : 'LinkedIn URL Required'}</span>
                    </a>
                </div>
            </div>

            {/* Caption */}
            <p className="text-center text-ios-subtext mt-6 text-lg font-medium">
                System designed by humans. <br />
                <span className="text-ios-text">Operated by AI.</span>
            </p>
        </div>
    )
}
