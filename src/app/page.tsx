import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import BentoCard from '@/components/ui/BentoCard';
import HeroBento from '@/components/home/HeroBento';
import {
    bentoModules,
    caseStudies,
    manifestoTeaser,
    faqContent,
    faqSection,
    bottleneckSection,
} from '@/config/content';

export default function Home() {
    return (
        <div className="mx-auto max-w-7xl px-6">
            {/* ============================================ */}
            {/* 1. HERO - The Hook */}
            {/* ============================================ */}
            <HeroBento />

            {/* ============================================ */}
            {/* 2. HUMAN BOTTLENECK - Agitation Phase */}
            {/* ============================================ */}
            <section className="relative overflow-hidden border-t border-gray-100 bg-slate-50 py-24 dark:border-slate-800 dark:bg-slate-950">
                {/* Background Gradient Glow Removed */}

                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    {/* Left Column: Narrative */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-red-200/50 bg-red-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600 shadow-sm backdrop-blur-sm dark:border-red-800/50 dark:bg-red-950/50 dark:text-red-400">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75 motion-reduce:animate-none" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                            </span>
                            {bottleneckSection.badge}
                        </div>
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
                            {bottleneckSection.title}
                        </h2>
                        <p className="max-w-md text-lg leading-relaxed text-gray-600 dark:text-slate-400">
                            {bottleneckSection.description}
                        </p>
                        <p className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-2xl font-bold text-transparent">
                            {bottleneckSection.highlight}
                        </p>
                    </div>

                    {/* Right Column: Visual Evidence */}
                    <div className="relative z-10">
                        <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                            <div className="grid grid-cols-2 gap-4">
                                {bottleneckSection.stats.map((stat, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all hover:bg-white hover:shadow-md dark:border-slate-800 dark:bg-slate-950/50"
                                    >
                                        <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-red-500/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                                        <div className="mb-1 text-4xl font-bold text-gray-900 dark:text-white">
                                            {stat.value}
                                        </div>
                                        <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-gray-500 dark:text-slate-500">
                                            {stat.label}
                                        </div>
                                        <span
                                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase ${stat.status === 'Critical'
                                                ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                                : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                                                }`}
                                        >
                                            <span
                                                className={`h-1.5 w-1.5 rounded-full ${stat.status === 'Critical' ? 'bg-red-500' : 'bg-amber-500'
                                                    }`}
                                            />
                                            {stat.status}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Alert Banner */}
                            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-red-200/50 bg-gradient-to-r from-red-50 to-orange-50 p-4 dark:border-red-800/30 dark:from-red-950/30 dark:to-orange-950/30">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-100 dark:bg-red-900/30">
                                    <svg
                                        className="h-5 w-5 text-red-600 dark:text-red-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-red-700 dark:text-red-400">
                                        System Alert: High Friction Detected
                                    </div>
                                    <div className="text-xs text-red-600/70 dark:text-red-400/70">
                                        Immediate optimization recommended
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* 3. THE TRUST ENGINE ARCHITECTURE - Solution */}
            {/* ============================================ */}
            <section id="services" className="py-20">
                <div className="mb-12 flex flex-col gap-2">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        The Trust Engine Architecture
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-slate-400">
                        Modular AI infrastructures deployed for scale.
                    </p>
                </div>

                <div className="grid h-auto grid-cols-1 gap-4 md:h-[600px] md:grid-cols-4 md:grid-rows-2">
                    {bentoModules.map((module) => (
                        <BentoCard key={module.id} module={module} />
                    ))}
                </div>
            </section>

            {/* ============================================ */}
            {/* 4. SYSTEMS IN PRODUCTION - Proof */}
            {/* ============================================ */}
            <section id="case-studies" className="border-t border-gray-100 py-20 dark:border-slate-800">
                <div className="mb-12">
                    <span className="mb-2 block font-mono text-sm uppercase tracking-wider text-ios-blue">
                        Verified Outcomes
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Systems in Production
                    </h2>
                    <p className="mt-2 text-lg text-gray-600 dark:text-slate-400">
                        Verified outcomes from deployed Trust Engines.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {caseStudies.map((study) => (
                        <div
                            key={study.id}
                            className="rounded-r-2xl border-l-4 border-l-ios-blue bg-gray-50 p-8 dark:bg-slate-900"
                        >
                            <div className="mb-4 flex items-center justify-between">
                                <span className="font-mono text-xs text-ios-blue">
                                    CASE: {study.logId}
                                </span>
                                {study.status === 'VERIFIED' ? (
                                    <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-green-600">
                                        <span className="relative flex h-2 w-2">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                                        </span>
                                        VERIFIED OUTCOME
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-amber-500">
                                        <span className="relative flex h-2 w-2">
                                            <span className="relative inline-flex h-2 w-2 animate-pulse rounded-full bg-amber-500" />
                                        </span>
                                        LIVE :: DATA AGGREGATING
                                    </span>
                                )}
                                {study.verifiedResultLink && (
                                    <a
                                        href={study.verifiedResultLink}
                                        className="text-gray-400 transition-colors hover:text-ios-blue"
                                        aria-label="View verified results"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                )}
                            </div>
                            <p className="mb-6 text-lg font-medium text-gray-900 dark:text-white">
                                &quot;{study.quote}&quot;
                            </p>
                            <div className="mt-auto border-t border-gray-200 pt-4 dark:border-slate-700">
                                {study.status === 'VERIFIED' ? (
                                    <a
                                        href={study.clientWebsite}
                                        className="text-sm font-bold text-gray-900 transition-colors hover:text-ios-blue dark:text-white"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {study.company}
                                    </a>
                                ) : (
                                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                                        {study.company}
                                    </span>
                                )}
                                <div className="mt-1 font-mono text-xs text-gray-500">
                                    <span className="text-gray-400">VERIFIED BY:</span>{' '}
                                    {study.personName !== '[REQUIRED]'
                                        ? study.personName
                                        : 'Pending'}
                                    , {study.personRole} <br />
                                    <span className="text-gray-400">MODULE:</span> {study.module}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Verification Statement */}
                <p className="mt-8 text-center font-mono text-xs text-gray-400">
                    All case studies are collected with explicit client consent.
                </p>
            </section>

            {/* FAQ Section (GEO Optimized) */}
            <section className="border-t border-gray-100 py-20 dark:border-slate-800">
                <div className="mb-12">
                    <span className="mb-2 block font-mono text-sm uppercase tracking-wider text-ios-blue">
                        {faqSection.badge}
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{faqSection.title}</h2>
                </div>

                <div className="max-w-3xl space-y-4">
                    {faqContent.map((faq, index) => (
                        <details
                            key={index}
                            className="group overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 transition-all hover:border-ios-blue/30 dark:border-slate-800 dark:bg-slate-900"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-gray-900 dark:text-white">
                                <span>{faq.question}</span>
                                <span className="ml-4 text-gray-400 transition-transform group-open:rotate-180">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M5 7.5L10 12.5L15 7.5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 leading-relaxed text-gray-600 dark:text-slate-400">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </section>

            {/* Manifesto Teaser */}
            <section className="mx-auto mb-20 max-w-3xl py-32 text-center">
                <span className="text-sm font-semibold uppercase tracking-wider text-ios-blue">
                    {manifestoTeaser.badge}
                </span>
                <h2 className="mb-8 mt-4 text-4xl font-bold leading-tight md:text-5xl">
                    {manifestoTeaser.title.line1} <br />
                    {manifestoTeaser.title.line2}
                </h2>
                <Link href={manifestoTeaser.ctaHref} className="btn-secondary inline-flex">
                    {manifestoTeaser.ctaLabel}
                </Link>
            </section>
        </div>
    );
}
