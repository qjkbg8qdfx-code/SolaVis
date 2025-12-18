import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { BentoModule } from '@/config/content'

interface BentoCardProps {
    module: BentoModule
}

export default function BentoCard({ module }: BentoCardProps) {
    const { number, title, description, variant, icon: Icon, ctaText, ctaHref } = module

    // Large card (2x2) - dark theme
    if (variant === 'large') {
        return (
            <div className="card-ios md:col-span-2 md:row-span-2 bg-black text-white p-10 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                    <span className="text-sm font-mono text-gray-400 mb-2 block">{number}. Core Strategy</span>
                    <h3 className="text-3xl font-semibold mb-4 text-white">{title}</h3>
                    <p className="text-gray-400 text-lg max-w-xs leading-relaxed">{description}</p>
                </div>

                {ctaText && ctaHref && (
                    <Link href={ctaHref} className="mt-8 relative z-10 inline-flex items-center gap-2 text-sm font-medium text-white/90 border-b border-white/20 pb-1 w-fit">
                        {ctaText} <ArrowRight className="w-4 h-4" />
                    </Link>
                )}
            </div>
        )
    }

    // Tall card (1x2) - light theme with visual
    if (variant === 'tall') {
        return (
            <div className="card-ios md:col-span-1 md:row-span-2 bg-gray-50 flex flex-col relative overflow-hidden group">
                <div className="flex-1 p-8 relative z-10">
                    {Icon && (
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-ios-blue">
                            <Icon className="w-6 h-6" />
                        </div>
                    )}
                    <span className="text-sm font-mono text-gray-400 mb-1 block">{number}. Auto-Process</span>
                    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                    <p className="text-gray-500 text-sm mt-3 leading-relaxed">{description}</p>
                </div>

                {/* Abstract Visual Bottom */}
                <div className="h-1/3 bg-gradient-to-b from-transparent to-blue-50/50 w-full relative">
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6 space-y-2">
                        <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-400 w-3/4" />
                        </div>
                        <div className="h-1.5 w-2/3 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-300 w-1/2" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // Small card (1x1) - white
    if (variant === 'small') {
        return (
            <div className="card-ios md:col-span-1 md:row-span-1 bg-white p-6 flex flex-col justify-between border border-gray-100">
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-mono text-gray-400">{number}.</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                </div>
                <p className="text-xs text-gray-500 font-medium">{description}</p>
            </div>
        )
    }

    // CTA card (1x1) - blue
    if (variant === 'cta') {
        const Wrapper = ctaHref ? Link : 'div'
        return (
            <Wrapper
                href={ctaHref || '#'}
                className="card-ios md:col-span-1 md:row-span-1 bg-ios-blue text-white p-6 flex flex-col justify-between group cursor-pointer hover:bg-blue-700 transition-colors"
            >
                <div>
                    <span className="text-sm font-mono text-blue-100/70 mb-1 block">{number}.</span>
                    <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-blue-100">{description}</span>
                    <ArrowRight className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" />
                </div>
            </Wrapper>
        )
    }

    return null
}
