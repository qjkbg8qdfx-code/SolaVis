import Link from 'next/link'
import { ArrowRight, PlayCircle, ExternalLink } from 'lucide-react'
import Counter from '@/components/Counter'
import BentoCard from '@/components/ui/BentoCard'
import {
    heroContent,
    bentoModules,
    modulesSection,
    deploymentLogs,
    logsSection,
    manifestoTeaser,
} from '@/config/content'

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto px-6">

            {/* Hero Section */}
            <section className="py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-green-200/50 text-xs font-semibold text-green-700 uppercase tracking-wide shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        {heroContent.badge}
                    </div>

                    <h1 className="text-hero leading-tight">
                        {heroContent.title.line1} <br />
                        <span className="text-gray-400">{heroContent.title.line2}</span>
                    </h1>

                    <p className="text-sub max-w-lg">
                        {heroContent.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href={heroContent.primaryCta.href} className="btn-primary flex items-center justify-center gap-2">
                            {heroContent.primaryCta.label} <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href={heroContent.secondaryCta.href} className="btn-secondary flex items-center justify-center gap-2">
                            <PlayCircle className="w-4 h-4" /> {heroContent.secondaryCta.label}
                        </Link>
                    </div>

                    {/* Social Proof / System Metrics */}
                    <div className="pt-8 border-t border-gray-100 flex gap-8 md:gap-12">
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
                                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hero Visual (Logic Gate / System Architecture) */}
                <div className="relative aspect-square flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-indigo-50/50 rounded-full blur-3xl opacity-60"></div>

                    {/* Glass Panel Code Card */}
                    <div className="relative w-full max-w-sm glass-panel p-6 rounded-2xl shadow-2xl border border-white/40 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                            </div>
                            <div className="text-[10px] font-mono text-gray-400">system_core.tsx</div>
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
                                <span className="text-purple-500">await</span> SolvoVis.<span className="text-blue-600">analyze</span>(workflow);
                            </div>
                            <div className="pl-4 text-gray-600">
                                <span className="text-purple-500">return</span> <span className="text-green-600">&quot;Efficiency_Maximized&quot;</span>;
                            </div>
                            <div className="text-gray-500">{`}`}</div>
                        </div>

                        {/* Interactive Element */}
                        <div className="mt-6 pt-4 border-t border-gray-100/50 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-[10px] uppercase tracking-wider text-gray-500">Processing</span>
                            </div>
                            <div className="h-1 w-16 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-2/3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid (Bento) */}
            <section id="services" className="py-20">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl font-semibold tracking-tight">{modulesSection.title}</h2>
                    <Link href={modulesSection.viewAllHref} className="text-ios-blue font-medium hover:underline">
                        {modulesSection.viewAllLabel}
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
                    {bentoModules.map((module) => (
                        <BentoCard key={module.id} module={module} />
                    ))}
                </div>
            </section>

            {/* Deployment Logs (Social Proof) */}
            <section className="py-20 border-t border-gray-100">
                <div className="mb-12">
                    <span className="font-mono text-ios-blue text-sm tracking-wider uppercase mb-2 block">{logsSection.badge}</span>
                    <h2 className="text-3xl font-bold tracking-tight">{logsSection.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {deploymentLogs.map((log) => (
                        <div key={log.id} className="bg-gray-50 p-8 border-l-4 border-l-ios-blue rounded-r-2xl">
                            <div className="font-mono text-xs text-ios-blue mb-4 flex items-center justify-between">
                                <span>LOG_ID: {log.logId} // SUCCESS</span>
                                {log.caseStudyHref && (
                                    <a href={log.caseStudyHref} className="text-gray-400 hover:text-ios-blue transition-colors" aria-label="View case study">
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                            <p className="text-lg font-medium text-gray-900 mb-6">
                                &quot;{log.quote}&quot;
                            </p>
                            <div className="border-t border-gray-200 pt-4 mt-auto">
                                <div className="font-bold text-sm text-gray-900">{log.company}</div>
                                <div className="text-xs text-gray-500 font-mono mt-1">
                                    <span className="text-gray-400">AUTH:</span> {log.auth} <br />
                                    <span className="text-gray-400">MODULE:</span> {log.module}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Privacy Disclaimer */}
                <p className="text-center text-xs text-gray-400 mt-8 font-mono">
                    {logsSection.disclaimer}
                </p>
            </section>

            {/* Manifesto Teaser */}
            <section className="py-32 text-center max-w-3xl mx-auto">
                <span className="text-ios-blue font-semibold tracking-wider text-sm uppercase">{manifestoTeaser.badge}</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight">
                    {manifestoTeaser.title.split(' ').slice(0, 3).join(' ')} <br />
                    {manifestoTeaser.title.split(' ').slice(3).join(' ')}
                </h2>
                <Link href={manifestoTeaser.ctaHref} className="btn-secondary inline-flex">
                    {manifestoTeaser.ctaLabel}
                </Link>
            </section>

        </div>
    )
}
