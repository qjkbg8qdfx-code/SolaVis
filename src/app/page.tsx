import Link from 'next/link'
import { ArrowRight, PlayCircle } from 'lucide-react'
import Counter from '@/components/Counter'

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
                        SolvoVis Operational
                    </div>

                    <h1 className="text-hero leading-tight">
                        Scale Revenue. <br />
                        <span className="text-gray-400">Freeze Headcount.</span>
                    </h1>

                    <p className="text-sub max-w-lg">
                        We don&apos;t just &apos;consult.&apos; We inject autonomous AI infrastructure into your business. Reduce operational friction by 40% in 90 days.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact" className="btn-primary flex items-center justify-center gap-2">
                            Initialize Audit <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/methodology" className="btn-secondary flex items-center justify-center gap-2">
                            <PlayCircle className="w-4 h-4" /> How it Works
                        </Link>
                    </div>

                    {/* Social Proof / System Metrics */}
                    <div className="pt-8 border-t border-gray-100 flex gap-8 md:gap-12">
                        <div>
                            <div className="text-2xl font-bold text-gray-900">
                                <Counter value={4.5} suffix="x" decimals={1} />
                            </div>
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. ROI</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-gray-900">
                                <Counter value={12} suffix="k+" duration={2000} />
                            </div>
                            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Hours Saved</div>
                        </div>
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
                    <h2 className="text-4xl font-semibold tracking-tight">The Modules.</h2>
                    <Link href="/services" className="text-ios-blue font-medium hover:underline">View All</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
                    {/* Module 1: Core Strategy (Large Square) */}
                    <div className="card-ios md:col-span-2 md:row-span-2 bg-black text-white p-10 flex flex-col justify-between group relative overflow-hidden">
                        {/* Subtle bg grid or gloss */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="relative z-10">
                            <span className="text-sm font-mono text-gray-400 mb-2 block">01. Core Strategy</span>
                            <h3 className="text-3xl font-semibold mb-4 text-white">Profit & Loss Audit</h3>
                            <p className="text-gray-400 text-lg max-w-xs leading-relaxed">
                                We audit your P&L to find inefficiencies. Pinpoint the 40% of friction in your operations.
                            </p>
                        </div>
                        <div className="mt-8 relative z-10">
                            <div className="inline-flex items-center gap-2 text-sm font-medium text-white/90 border-b border-white/20 pb-1">
                                Explore Methodology <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>

                    {/* Module 2: Auto-Process (Tall/Vertical) */}
                    <div className="card-ios md:col-span-1 md:row-span-2 bg-gray-50 flex flex-col relative overflow-hidden group">
                        <div className="flex-1 p-8 relative z-10">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-ios-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot"><rect width="18" height="10" x="3" y="11" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" x2="8" y1="16" y2="16" /><line x1="16" x2="16" y1="16" y2="16" /></svg>
                            </div>
                            <span className="text-sm font-mono text-gray-400 mb-1 block">02. Auto-Process</span>
                            <h3 className="text-xl font-semibold text-gray-900">24/7 Worker Bots</h3>
                            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                                Deploy autonomous agents that never sleep.
                            </p>
                        </div>

                        {/* Abstract Visual Bottom */}
                        <div className="h-1/3 bg-gradient-to-b from-transparent to-blue-50/50 w-full relative">
                            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
                            {/* Animated bar elements */}
                            <div className="absolute bottom-4 left-6 right-6 space-y-2">
                                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-400 w-3/4"></div>
                                </div>
                                <div className="h-1.5 w-2/3 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-300 w-1/2"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Module 3: Data Kernel (Small Wide) */}
                    <div className="card-ios md:col-span-1 md:row-span-1 bg-white p-6 flex flex-col justify-between border border-gray-100">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-sm font-mono text-gray-400">03.</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Data Kernel</h3>
                        </div>
                        <p className="text-xs text-gray-500 font-medium">Clean assets for <br /> clean AI output.</p>
                    </div>

                    {/* Module 4: Training (Small Wide/CTA) */}
                    <div className="card-ios md:col-span-1 md:row-span-1 bg-ios-blue text-white p-6 flex flex-col justify-between group cursor-pointer hover:bg-blue-700 transition-colors">
                        <div>
                            <span className="text-sm font-mono text-blue-100/70 mb-1 block">04.</span>
                            <h3 className="text-lg font-semibold">Training</h3>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-blue-100">Empower teams</span>
                            <ArrowRight className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Deployment Logs (Social Proof) */}
            <section className="py-20 border-t border-gray-100">
                <div className="mb-12">
                    <span className="font-mono text-ios-blue text-sm tracking-wider uppercase mb-2 block">System Logs</span>
                    <h2 className="text-3xl font-bold tracking-tight">Deployment Records.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Log 1 */}
                    <div className="bg-gray-50 p-8 border-l-4 border-l-ios-blue rounded-r-2xl">
                        <div className="font-mono text-xs text-ios-blue mb-4">LOG_ID: 8821 // SUCCESS</div>
                        <p className="text-lg font-medium text-gray-900 mb-6">
                            &quot;We replaced our entire manual data entry team with SolvoVis bots. Zero errors since launch.&quot;
                        </p>
                        <div className="border-t border-gray-200 pt-4 mt-auto">
                            <div className="font-bold text-sm text-gray-900">TechFlow Inc.</div>
                            <div className="text-xs text-gray-500 font-mono mt-1">
                                <span className="text-gray-400">AUTH:</span> VP Engineering <br />
                                <span className="text-gray-400">MODULE:</span> DevOps Pipeline
                            </div>
                        </div>
                    </div>

                    {/* Log 2 */}
                    <div className="bg-gray-50 p-8 border-l-4 border-l-ios-blue rounded-r-2xl">
                        <div className="font-mono text-xs text-ios-blue mb-4">LOG_ID: 4102 // SUCCESS</div>
                        <p className="text-lg font-medium text-gray-900 mb-6">
                            &quot;The data cleaning module recovered $2M in lost inventory assets in the first 48 hours.&quot;
                        </p>
                        <div className="border-t border-gray-200 pt-4 mt-auto">
                            <div className="font-bold text-sm text-gray-900">Apex Logistics</div>
                            <div className="text-xs text-gray-500 font-mono mt-1">
                                <span className="text-gray-400">AUTH:</span> COO <br />
                                <span className="text-gray-400">MODULE:</span> Supply Chain Data
                            </div>
                        </div>
                    </div>

                    {/* Log 3 */}
                    <div className="bg-gray-50 p-8 border-l-4 border-l-ios-blue rounded-r-2xl">
                        <div className="font-mono text-xs text-ios-blue mb-4">LOG_ID: 9943 // SUCCESS</div>
                        <p className="text-lg font-medium text-gray-900 mb-6">
                            &quot;We scaled content production by 10x without hiring a single new writer. Pure leverage.&quot;
                        </p>
                        <div className="border-t border-gray-200 pt-4 mt-auto">
                            <div className="font-bold text-sm text-gray-900">Creative Pulse</div>
                            <div className="text-xs text-gray-500 font-mono mt-1">
                                <span className="text-gray-400">AUTH:</span> Founder <br />
                                <span className="text-gray-400">MODULE:</span> Content System
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manifesto Teaser */}
            <section className="py-32 text-center max-w-3xl mx-auto">
                <span className="text-ios-blue font-semibold tracking-wider text-sm uppercase">The Manifesto</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight">
                    Old ways won't open <br /> new doors.
                </h2>
                <Link href="/about" className="btn-secondary inline-flex">
                    Read the Full Story
                </Link>
            </section>

        </div>
    )
}
