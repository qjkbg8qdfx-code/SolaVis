import Link from 'next/link';
import { ArrowRight, PlayCircle, ExternalLink } from 'lucide-react';
import Counter from '@/components/Counter';
import BentoCard from '@/components/ui/BentoCard';
import { Building2, AlertTriangle, Copy, Zap } from 'lucide-react';
import {
    heroContent,
    bentoModules,
    modulesSection,
    caseStudies,
    caseStudiesSection,
    manifestoTeaser,
    faqContent,
    faqSection,
    bottleneckSection,
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

                    {/* Trust Anchor */}
                    <div className="flex items-center gap-4 pt-2">
                        <span className="text-sm text-gray-400 dark:text-slate-500">
                            Trusted by forward-thinking SMEs globally
                        </span>
                        <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-gray-300 dark:text-slate-600" />
                            <Building2 className="h-4 w-4 text-gray-300 dark:text-slate-600" />
                            <Building2 className="h-4 w-4 text-gray-300 dark:text-slate-600" />
                        </div>
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

                {/* Hero Visual - Success Dashboard (Business Results Focus) */}
                <div className="relative flex aspect-square items-center justify-center">
                    {/* Gradient Glow Background */}
                    <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-to-tr from-blue-500/20 via-violet-500/20 to-fuchsia-500/20 blur-3xl"></div>

                    {/* Success Dashboard Card */}
                    <div
                        className="glass-panel animate-breathe relative w-full max-w-sm overflow-hidden rounded-3xl p-6 shadow-2xl motion-reduce:animate-none dark:shadow-violet-500/5"
                        role="img"
                        aria-label="Dashboard showing efficiency gains and optimization metrics"
                    >
                        {/* Header */}
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                Efficiency Metrics
                            </h3>
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                Live
                            </span>
                        </div>

                        {/* SVG Chart - Upward Trend */}
                        <div className="relative mb-6 h-32 w-full overflow-hidden rounded-xl bg-gradient-to-b from-gray-50 to-white p-4 dark:from-slate-800/50 dark:to-slate-900/50">
                            <svg
                                viewBox="0 0 200 80"
                                className="h-full w-full"
                                preserveAspectRatio="none"
                            >
                                {/* Gradient Fill */}
                                <defs>
                                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                {/* Area Fill */}
                                <path
                                    d="M0 70 Q30 65, 50 55 T100 40 T150 25 T200 10 L200 80 L0 80 Z"
                                    fill="url(#chartGradient)"
                                />
                                {/* Line */}
                                <path
                                    d="M0 70 Q30 65, 50 55 T100 40 T150 25 T200 10"
                                    fill="none"
                                    stroke="#8B5CF6"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                                {/* End Point */}
                                <circle cx="200" cy="10" r="4" fill="#8B5CF6" />
                            </svg>
                            <div className="absolute right-4 top-4 text-right">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white">+147%</div>
                                <div className="text-xs text-gray-500 dark:text-slate-400">Revenue Efficiency</div>
                            </div>
                        </div>

                        {/* Metric Pills */}
                        <div className="mb-6 grid grid-cols-3 gap-3">
                            <div className="rounded-xl bg-blue-50 p-3 text-center dark:bg-blue-900/20">
                                <div className="text-lg font-bold text-blue-700 dark:text-blue-300">4.5×</div>
                                <div className="text-[10px] font-medium uppercase tracking-wide text-blue-700/80 dark:text-blue-300/80">ROI</div>
                            </div>
                            <div className="rounded-xl bg-violet-50 p-3 text-center dark:bg-violet-900/20">
                                <div className="text-lg font-bold text-violet-700 dark:text-violet-300">98%</div>
                                <div className="text-[10px] font-medium uppercase tracking-wide text-violet-700/80 dark:text-violet-300/80">Automated</div>
                            </div>
                            <div className="rounded-xl bg-green-50 p-3 text-center dark:bg-green-900/20">
                                <div className="text-lg font-bold text-green-700 dark:text-green-300">24/7</div>
                                <div className="text-[10px] font-medium uppercase tracking-wide text-green-700/80 dark:text-green-300/80">Active</div>
                            </div>
                        </div>

                        {/* Status Footer */}
                        <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 dark:bg-slate-800/50">
                            <div className="flex items-center gap-2">
                                <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
                                    Optimization Complete
                                </span>
                            </div>
                            <span className="text-xs text-gray-400">Just now</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Human Bottleneck Section (Agitation Phase) */}
            <section className="border-t border-gray-100 py-20 dark:border-slate-800">
                <div className="grid gap-12 md:grid-cols-2">
                    {/* Left Column - Narrative */}
                    <div className="space-y-6">
                        <span className="inline-block rounded-full border border-red-200/50 bg-red-50 px-3 py-1 font-mono text-xs uppercase tracking-wider text-red-600 dark:border-red-800/50 dark:bg-red-950/50 dark:text-red-400">
                            {bottleneckSection.badge}
                        </span>
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
                            {bottleneckSection.title}
                        </h2>
                        <p className="max-w-lg text-lg text-gray-600 dark:text-slate-400">
                            {bottleneckSection.description}
                        </p>
                        <p className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-2xl font-bold text-transparent">
                            {bottleneckSection.highlight}
                        </p>
                    </div>

                    {/* Right Column - Visual Evidence (Bento Box) */}
                    <div className="grid gap-4">
                        {/* Digital Waste Card */}
                        <div className="glass-panel rounded-2xl p-6">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 dark:bg-red-900/30">
                                    <Copy className="h-5 w-5 text-red-600 dark:text-red-400" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-white">Digital Waste Detected</div>
                                    <div className="text-xs text-gray-500">Copy-Paste Operations</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 dark:bg-red-900/20">
                                <AlertTriangle className="h-4 w-4 text-red-500" />
                                <span className="text-sm font-medium text-red-700 dark:text-red-400">
                                    Manual data entry consuming 60% of work hours
                                </span>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {bottleneckSection.stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="glass-panel rounded-2xl p-4 text-center"
                                >
                                    <div className="mb-1 text-3xl font-bold text-gray-900 dark:text-white">
                                        {stat.value}
                                    </div>
                                    <div className="mb-2 text-xs text-gray-500 dark:text-slate-400">
                                        {stat.label}
                                    </div>
                                    <span
                                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${stat.status === 'Critical'
                                                ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                                : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                                            }`}
                                    >
                                        {stat.status}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Solution Teaser */}
                        <div className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 p-4">
                            <Zap className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                            <span className="font-medium text-gray-700 dark:text-slate-300">
                                Autonomous systems eliminate the friction
                            </span>
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
