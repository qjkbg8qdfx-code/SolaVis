'use client';

import Link from 'next/link';
import {
    ArrowRight,
    Compass,
    Briefcase,
    TrendingUp,
    Users,
    Target,
    Bot,
    Brain,
    ShieldCheck,
    LucideIcon,
} from 'lucide-react';
import { BentoItem, BentoModule } from '@/config/content';

// Icon map for serialization - maps string names to components
const iconMap: Record<string, LucideIcon> = {
    Compass,
    Briefcase,
    TrendingUp,
    Users,
    Target,
    Bot,
    Brain,
    ShieldCheck,
};

// ============================================
// NEW BENTO CARD - For homePage.bentoItems
// ============================================
interface HomeBentoCardProps {
    item: BentoItem;
    index: number;
}

export function HomeBentoCard({ item, index }: HomeBentoCardProps) {
    const { title, description, href, colSpan, type, iconName, stat, statLabel } = item;

    // Get icon from map
    const Icon = iconName ? iconMap[iconName] : null;

    // Stagger animation delay based on index
    const animationDelay = `${index * 100}ms`;

    // Column span classes
    const colSpanClass = colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1';

    // Primary Card (Large, featured)
    if (type === 'primary') {
        return (
            <Link
                href={href}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black p-8 text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl md:p-10 ${colSpanClass}`}
                style={{ animationDelay }}
            >
                {/* Glow Effect */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 blur-3xl transition-opacity group-hover:opacity-100" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative z-10">
                    {Icon && (
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                            <Icon className="h-6 w-6 text-white" />
                        </div>
                    )}
                    <h3 className="mb-3 text-2xl font-bold tracking-tight md:text-3xl">{title}</h3>
                    <p className="max-w-sm text-base leading-relaxed text-gray-300 md:text-lg">{description}</p>
                </div>

                <div className="relative z-10 mt-6 flex items-center gap-2 text-sm font-medium text-white/80 transition-colors group-hover:text-white">
                    Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
            </Link>
        );
    }

    // Stat Card (Metric highlight)
    if (type === 'stat') {
        return (
            <Link
                href={href}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-violet-50 to-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-violet-200 hover:shadow-lg dark:border-slate-800 dark:from-violet-950/30 dark:to-slate-900 md:p-8 ${colSpanClass}`}
                style={{ animationDelay }}
            >
                <div>
                    {Icon && (
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
                            <Icon className="h-5 w-5" />
                        </div>
                    )}
                    <div className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">{stat || title}</div>
                    <div className="mt-1 text-sm font-medium uppercase tracking-wide text-violet-600 dark:text-violet-400">
                        {description}
                    </div>
                </div>
                {statLabel && (
                    <p className="mt-4 text-xs text-gray-500 dark:text-slate-500">{statLabel}</p>
                )}
            </Link>
        );
    }

    // CTA Card (Action-oriented)
    if (type === 'cta') {
        return (
            <Link
                href={href}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-blue-500 hover:to-blue-600 hover:shadow-xl md:p-8 ${colSpanClass}`}
                style={{ animationDelay }}
            >
                <div>
                    {Icon && (
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                            <Icon className="h-5 w-5 text-white" />
                        </div>
                    )}
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-2 text-sm text-blue-100">{description}</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium">
                    Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
            </Link>
        );
    }

    // Secondary Card (Default)
    return (
        <Link
            href={href}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-gray-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 md:p-8 ${colSpanClass}`}
            style={{ animationDelay }}
        >
            <div>
                {Icon && (
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 text-gray-600 transition-colors group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        <Icon className="h-5 w-5" />
                    </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">{description}</p>
            </div>
            <div className="mt-4 flex items-center gap-1 text-sm font-medium text-gray-400 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
        </Link>
    );
}

// ============================================
// LEGACY BENTO CARD - For bentoModules (Services page)
// ============================================
interface BentoCardProps {
    module: BentoModule;
}

export default function BentoCard({ module }: BentoCardProps) {
    const { number, category, title, description, variant, iconName, ctaText, ctaHref } = module;

    // Get icon from map
    const Icon = iconName ? iconMap[iconName] : null;

    // Large card (2x2) - dark theme
    if (variant === 'large') {
        return (
            <div className="card-ios group relative flex flex-col justify-between overflow-hidden bg-black p-10 text-white transition-transform duration-300 hover:scale-[1.01] md:col-span-2 md:row-span-2">
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
            <div className="card-ios group relative flex flex-col overflow-hidden bg-gray-50 transition-transform duration-300 hover:scale-[1.01] dark:bg-slate-900 md:col-span-1 md:row-span-2">
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
            <div className="card-ios flex flex-col justify-between border border-gray-100 bg-white p-6 transition-transform duration-300 hover:scale-[1.01] dark:border-slate-700 dark:bg-slate-900 md:col-span-1 md:row-span-1">
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
                className="card-ios group flex cursor-pointer flex-col justify-between bg-ios-blue p-6 text-white transition-all duration-300 hover:scale-[1.01] hover:bg-blue-700 md:col-span-1 md:row-span-1"
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
