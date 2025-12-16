import Link from 'next/link'
import { ArrowRight, PlayCircle } from 'lucide-react'

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto px-6">

            {/* Hero Section */}
            <section className="py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-fade-in-up">
                    <div className="inline-block px-3 py-1 bg-white rounded-full border border-gray-200 text-xs font-semibold text-ios-subtext uppercase tracking-wide">
                        v2.0 System Online
                    </div>

                    <h1 className="text-hero">
                        Scale your operations. <br />
                        <span className="text-ios-subtext">Not your headcount.</span>
                    </h1>

                    <p className="text-sub max-w-lg">
                        We deploy autonomous AI systems that help Global SMEs grow revenue without adding complexity.
                    </p>

                    <div className="flex flex-row gap-4">
                        <Link href="/contact" className="btn-primary flex items-center gap-2">
                            Start Audit <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/methodology" className="btn-secondary flex items-center gap-2">
                            <PlayCircle className="w-4 h-4" /> How it Works
                        </Link>
                    </div>

                    <div className="pt-8 flex items-center gap-4 text-xs font-medium text-gray-400">
                        <span>TRUSTED BY 50+ SMEs</span>
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>
                </div>

                {/* Hero Visual (Apple Style Abstract) */}
                <div className="card-ios aspect-square flex items-center justify-center bg-gray-50 relative overflow-hidden group">
                    <div className="w-64 h-64 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-70 group-hover:scale-110 transition-transform duration-1000"></div>
                    <div className="glass-panel absolute p-6 rounded-2xl shadow-xl max-w-xs">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 w-full bg-gray-200 rounded-full"></div>
                            <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
                            <div className="h-2 w-1/2 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid (iOS Style) */}
            <section id="services" className="py-20">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl font-semibold tracking-tight">The Modules.</h2>
                    <Link href="/services" className="text-ios-blue font-medium hover:underline">View All</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
                    {/* Card 1: Strategy */}
                    <div className="card-ios col-span-1 md:col-span-2 bg-black text-white p-10 flex flex-col justify-between group">
                        <div>
                            <h3 className="text-3xl font-semibold mb-2">01. Strategy</h3>
                            <p className="text-gray-400 text-lg">90-Day Roadmap to P&L Impact.</p>
                        </div>
                        <div className="mt-8">
                            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-md border border-white/20">
                                Avg ROI: 4.5x
                            </span>
                        </div>
                    </div>

                    {/* Card 2: Auto-Process */}
                    <div className="card-ios bg-white flex flex-col justify-center items-center text-center p-8 relative overflow-hidden">
                        <div className="w-32 h-32 bg-blue-50 rounded-full blur-2xl absolute top-0 right-0"></div>
                        <h3 className="text-xl font-semibold z-10">02. Auto-Process</h3>
                        <p className="text-gray-500 mt-2 z-10">24/7 Worker Bots</p>
                    </div>

                    {/* Card 3: Data */}
                    <div className="card-ios bg-gray-50 p-8 flex flex-col justify-between">
                        <h3 className="text-xl font-semibold">03. Data Kernel</h3>
                        <p className="text-gray-500">Clean Assets.</p>
                    </div>

                    {/* Card 4: Training */}
                    <div className="card-ios col-span-1 md:col-span-2 bg-blue-600 text-white p-8 flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl font-semibold">04. Corporate Training</h3>
                            <p className="text-blue-100">Empower your workforce.</p>
                        </div>
                        <ArrowRight className="w-6 h-6" />
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
