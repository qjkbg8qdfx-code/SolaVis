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
} from '@/config/content';

export default function Home() {
    return (
        <div className="mx-auto max-w-7xl px-6">
            {/* Hero Section */}
            <section className="grid items-center gap-12 py-24 md:grid-cols-2 md:py-32">
                <div className="animate-fade-in-up space-y-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-green-200/50 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700 shadow-sm backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                        </span>
                        {heroContent.badge}
                    </div>

                    <h1 className="text-hero leading-tight">
                        {heroContent.title.line1} <br />
                        <span className="text-gray-400">{heroContent.title.line2}</span>
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
                    <div className="flex gap-8 border-t border-gray-100 pt-8 md:gap-12">
                        {heroContent.metrics.map((metric) => (
                            <div key={metric.label}>
                                <div className="text-2xl font-bold text-gray-900">
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

                    {/* Glass Panel Code Card */}
                    <div
                        className="glass-panel relative w-full max-w-sm transform overflow-hidden rounded-2xl border border-white/40 p-6 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                        role="img"
                        aria-label="Code visualization showing optimization logic: a function that analyzes workflow and returns 'Efficiency_Maximized'"
                    >
                        {/* Header */}
                        <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
                            <div className="flex gap-2">
                                <div className="h-3 w-3 rounded-full bg-red-400/80"></div>
                                <div className="h-3 w-3 rounded-full bg-yellow-400/80"></div>
                                <div className="h-3 w-3 rounded-full bg-green-400/80"></div>
                            </div>
                            <div className="font-mono text-[10px] text-gray-400">
                                system_core.tsx
                            </div>
                        </div>

                        {/* Code Content */}
                        <div className="space-y-3 font-mono text-xs md:text-sm">
                            <div className="flex gap-2">
                                <span className="text-purple-500">const</span>
                                <span className="text-blue-600">optimize</span>
                                <span className="text-gray-400">=</span>
                                <span className="text-yellow-600">async</span>
                                <span className="text-gray-500">()</span>
                                <span className="text-gray-400">=&gt;</span>
                                <span className="text-gray-500">{`{`}</span>
                            </div>
                            <div className="pl-4 text-gray-600">
                                <span className="text-purple-500">await</span> SolaVis.
                                <span className="text-blue-600">execute</span>(workflow);
                            </div>
                            <div className="pl-4 text-gray-600">
                                <span className="text-purple-500">return</span>{' '}
                                <span className="text-green-600">
                                    &quot;Efficiency_Maximized&quot;
                                </span>
                                ;
                            </div>
                            <div className="text-gray-500">{`}`}</div>
                        </div>

                        {/* Interactive Element */}
                        <div className="mt-6 flex items-center justify-between border-t border-gray-100/50 pt-4">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                                <span className="text-[10px] uppercase tracking-wider text-gray-500">
                                    Processing
                                </span>
                            </div>
                            <div className="h-1 w-16 overflow-hidden rounded-full bg-gray-100">
                                <div className="h-full w-2/3 bg-blue-500"></div>
                            </div>
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
            <section className="border-t border-gray-100 py-20">
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
                            className="rounded-r-2xl border-l-4 border-l-ios-blue bg-gray-50 p-8"
                        >
                            <div className="mb-4 flex items-center justify-between font-mono text-xs text-ios-blue">
                                <span>CASE_ID: {study.logId} | VERIFIED</span>
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
                            <p className="mb-6 text-lg font-medium text-gray-900">
                                &quot;{study.quote}&quot;
                            </p>
                            <div className="mt-auto border-t border-gray-200 pt-4">
                                <a
                                    href={
                                        study.clientWebsite !== '[REQUIRED]'
                                            ? study.clientWebsite
                                            : '#'
                                    }
                                    className="text-sm font-bold text-gray-900 transition-colors hover:text-ios-blue"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {study.company}
                                </a>
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
