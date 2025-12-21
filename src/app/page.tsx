import Link from 'next/link';
import { ArrowRight, PlayCircle, ExternalLink } from 'lucide-react';
import Counter from '@/components/Counter';
import BentoCard from '@/components/ui/BentoCard';
import {
    heroContent,
    bentoModules,
    modulesSection,
    caseStudies,
    caseStudiesSection,
    manifestoTeaser,
    faqContent,
    faqSection,
} from '@/config/content';

export default function Home() {
    return (
        <div className="mx-auto max-w-7xl px-6">
            {/* Hero Section */}
            <section className="grid items-center gap-12 py-24 md:grid-cols-2 md:py-32">
                <div className="animate-fade-in-up space-y-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-green-200/50 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700 shadow-sm backdrop-blur-sm dark:border-green-800/50 dark:bg-green-950/50 dark:text-green-400">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 motion-reduce:animate-none"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                        </span>
                        {heroContent.badge}
                    </div>

                    <h1 className="text-hero leading-tight">
                        {heroContent.title.line1} <br />
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text font-bold text-transparent">
                            {heroContent.title.line2}
                        </span>
                    </h1>

                    <p className="text-sub max-w-lg">{heroContent.subtitle}</p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link
                            href={heroContent.primaryCta.href}
                            className="btn-primary flex items-center justify-center gap-2"
                        >
                            {heroContent.primaryCta.label} <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href={heroContent.secondaryCta.href}
                            className="btn-secondary flex items-center justify-center gap-2"
                        >
                            <PlayCircle className="h-4 w-4" /> {heroContent.secondaryCta.label}
                        </Link>
                    </div>

                    {/* Social Proof / System Metrics */}
                    <div className="flex gap-8 border-t border-gray-100 pt-8 dark:border-slate-800 md:gap-12">
                        {heroContent.metrics.map((metric) => (
                            <div key={metric.label}>
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                    <Counter
                                        value={metric.value}
                                        suffix={metric.suffix}
                                        decimals={metric.decimals}
                                        duration={metric.duration}
                                    />
                                </div>
                                <div className="text-xs font-medium uppercase tracking-wider text-gray-500">
                                    {metric.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hero Visual (Logic Gate / System Architecture) */}
                <div className="relative flex aspect-square items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-100/50 to-indigo-50/50 opacity-60 blur-3xl"></div>

                    {/* Glass Panel Transaction Log */}
                    <div
                        className="glass-panel relative w-full max-w-sm transform overflow-hidden rounded-2xl border border-white/40 p-6 shadow-2xl transition-transform duration-500 hover:scale-[1.02] motion-reduce:transition-none dark:border-slate-800 dark:shadow-none"
                        role="img"
                        aria-label="Transaction log showing automated invoice scanning, compliance check, and payout processing"
                    >
                        {/* Header */}
                        <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
                            <div className="flex gap-2">
                                <div className="h-3 w-3 rounded-full bg-red-400/80"></div>
                                <div className="h-3 w-3 rounded-full bg-yellow-400/80"></div>
                                <div className="h-3 w-3 rounded-full bg-green-400/80"></div>
                            </div>
                            <div className="font-mono text-[10px] text-gray-400">
                                transaction_log.sys
                            </div>
                        </div>

                        {/* Transaction Log Content */}
                        <div className="space-y-4 font-mono text-xs md:text-sm">
                            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 dark:bg-slate-800">
                                <span className="text-gray-700 dark:text-slate-300">Invoice_Scanning</span>
                                <span className="font-semibold text-green-600 dark:text-green-400">[DONE 0.2s]</span>
                            </div>
                            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 dark:bg-slate-800">
                                <span className="text-gray-700 dark:text-slate-300">Compliance_Check</span>
                                <span className="font-semibold text-green-600 dark:text-green-400">[PASSED]</span>
                            </div>
                            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3 dark:bg-slate-800">
                                <span className="text-gray-700 dark:text-slate-300">Payout_Triggered</span>
                                <span className="font-semibold text-ios-blue">[AUTO]</span>
                            </div>
                        </div>

                        {/* Status Footer */}
                        <div className="mt-6 flex items-center justify-between border-t border-gray-100/50 pt-4 dark:border-slate-800">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500 motion-reduce:animate-none"></div>
                                <span className="text-[10px] uppercase tracking-wider text-gray-500">
                                    System Active
                                </span>
                            </div>
                            <span className="text-[10px] text-gray-400">3/3 Complete</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid (Bento) */}
            <section id="services" className="py-20">
                <div className="mb-12 flex items-end justify-between">
                    <h2 className="text-4xl font-semibold tracking-tight">
                        {modulesSection.title}
                    </h2>
                    <Link
                        href={modulesSection.viewAllHref}
                        className="font-medium text-ios-blue hover:underline"
                    >
                        {modulesSection.viewAllLabel}
                    </Link>
                </div>

                <div className="grid h-auto grid-cols-1 gap-4 md:h-[600px] md:grid-cols-4 md:grid-rows-2">
                    {bentoModules.map((module) => (
                        <BentoCard key={module.id} module={module} />
                    ))}
                </div>
            </section>

            {/* Verified Case Studies (Social Proof) */}
            <section id="case-studies" className="border-t border-gray-100 py-20 dark:border-slate-800">
                <div className="mb-12">
                    <span className="mb-2 block font-mono text-sm uppercase tracking-wider text-ios-blue">
                        {caseStudiesSection.badge}
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight">
                        {caseStudiesSection.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {caseStudies.map((study) => (
                        <div
                            key={study.id}
                            className="rounded-r-2xl border-l-4 border-l-ios-blue bg-gray-50 p-8 dark:bg-slate-900"
                        >
                            <div className="mb-4 flex items-center justify-between font-mono text-xs text-ios-blue">
                                <span>
                                    CASE: {study.logId} |{' '}
                                    <span
                                        className={
                                            study.status === 'VERIFIED'
                                                ? 'text-green-600'
                                                : 'text-amber-500'
                                        }
                                    >
                                        {study.status}
                                    </span>
                                </span>
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
                    {caseStudiesSection.disclaimer}
                </p>
            </section>

            {/* FAQ Section (GEO Optimized) */}
            <section className="border-t border-gray-100 py-20 dark:border-slate-800">
                <div className="mb-12">
                    <span className="mb-2 block font-mono text-sm uppercase tracking-wider text-ios-blue">
                        {faqSection.badge}
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight">{faqSection.title}</h2>
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
            <section className="mx-auto max-w-3xl py-32 text-center">
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
