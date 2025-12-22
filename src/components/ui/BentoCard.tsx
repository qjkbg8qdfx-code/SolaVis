import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { BentoModule } from '@/config/content';

interface BentoCardProps {
    module: BentoModule;
}

export default function BentoCard({ module }: BentoCardProps) {
    const { number, category, title, description, variant, icon: Icon, ctaText, ctaHref } = module;

    // Large card (2x2) - dark theme
    if (variant === 'large') {
        return (
            <div className="card-ios group relative flex flex-col justify-between overflow-hidden bg-black p-10 text-white md:col-span-2 md:row-span-2">
                <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

                <div className="relative z-10">
                    <span className="mb-2 block font-mono text-sm text-gray-400 dark:text-slate-300">
                        {number}. {category}
                    </span>
                    <h3 className="mb-4 text-3xl font-semibold text-white">{title}</h3>
                    <p className="max-w-xs text-lg leading-relaxed text-gray-400 dark:text-slate-400">{description}</p>
                </div>

                {ctaText && ctaHref && (
                    <Link
                        href={ctaHref}
                        className="relative z-10 mt-8 inline-flex w-fit items-center gap-2 border-b border-white/20 pb-1 text-sm font-medium text-white/90"
                    >
                        {ctaText} <ArrowRight className="h-4 w-4" />
                    </Link>
                )}
            </div>
        );
    }

    // Tall card (1x2) - light theme with visual
    if (variant === 'tall') {
        return (
            <div className="card-ios group relative flex flex-col overflow-hidden bg-gray-50 dark:bg-slate-900 md:col-span-1 md:row-span-2">
                <div className="relative z-10 flex-1 p-8">
                    {Icon && (
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-100 bg-white text-ios-blue shadow-sm dark:border-slate-700 dark:bg-slate-800">
                            <Icon className="h-6 w-6" />
                        </div>
                    )}
                    <span className="mb-1 block font-mono text-sm text-gray-400">
                        {number}. {category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-slate-400">{description}</p>
                </div>

                {/* Abstract Visual Bottom */}
                <div className="relative h-1/3 w-full bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-950/30">
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-800" />
                    <div className="absolute bottom-4 left-6 right-6 space-y-2">
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-slate-700">
                            <div className="h-full w-3/4 bg-blue-400" />
                        </div>
                        <div className="h-1.5 w-2/3 overflow-hidden rounded-full bg-gray-200 dark:bg-slate-700">
                            <div className="h-full w-1/2 bg-blue-300" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Small card (1x1) - white with icon
    if (variant === 'small') {
        return (
            <div className="card-ios flex flex-col justify-between border border-gray-100 bg-white p-6 dark:border-slate-700 dark:bg-slate-900 md:col-span-1 md:row-span-1">
                <div>
                    <div className="mb-2 flex items-start justify-between">
                        <span className="font-mono text-sm text-gray-400">
                            {number}. {category}
                        </span>
                        {Icon ? (
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-500 dark:bg-orange-900/30 dark:text-orange-400">
                                <Icon className="h-4 w-4" />
                            </div>
                        ) : (
                            <div className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                        )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                </div>
                <p className="text-xs font-medium text-gray-500 dark:text-slate-400">{description}</p>
            </div>
        );
    }

    // CTA card (1x1) - blue with icon
    if (variant === 'cta') {
        const Wrapper = ctaHref ? Link : 'div';
        return (
            <Wrapper
                href={ctaHref || '#'}
                className="card-ios group flex cursor-pointer flex-col justify-between bg-ios-blue p-6 text-white transition-colors hover:bg-blue-700 md:col-span-1 md:row-span-1"
            >
                <div className="flex items-start justify-between">
                    <div>
                        <span className="mb-1 block font-mono text-sm text-blue-100/70">
                            {number}. {category}
                        </span>
                        <h3 className="text-lg font-semibold">{title}</h3>
                    </div>
                    {Icon && (
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white">
                            <Icon className="h-5 w-5" />
                        </div>
                    )}
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-blue-100">{description}</span>
                    <ArrowRight className="h-5 w-5 transform text-white transition-transform group-hover:translate-x-1" />
                </div>
            </Wrapper>
        );
    }

    return null;
}
