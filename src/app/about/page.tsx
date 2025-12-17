import { GitCommit, GitPullRequest, Terminal } from "lucide-react"

export const metadata = {
    title: 'The Manifesto | SolvoVis',
    description: 'System Origin Log. Why we removed the human bottleneck.',
}

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">

            <div className="text-center mb-20 animate-fade-in-up">
                <span className="font-mono text-ios-blue text-sm tracking-wider uppercase mb-4 block">System Origin Log</span>
                <h1 className="text-hero mb-6">
                    The Human Bottleneck.
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    We realized human error was the #1 cost center. <br />
                    <span className="text-gray-900 font-medium">So we removed it.</span>
                </p>
            </div>

            {/* Vertical Timeline / Bento-ish Sequence */}
            <div className="space-y-4 max-w-3xl mx-auto relative">
                {/* Connecting Line */}
                <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-gray-200 via-ios-blue to-gray-200 hidden md:block"></div>

                {/* 2020: The Hypothesis */}
                <div className="relative group md:pl-24">
                    <div className="hidden md:flex absolute left-5 w-6 h-6 bg-white border-2 border-gray-200 rounded-full items-center justify-center group-hover:border-ios-blue transition-colors z-10">
                        <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-ios-blue transition-colors"></div>
                    </div>

                    <div className="card-ios p-8 hover:border-ios-blue/30 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="font-mono text-sm text-gray-400">2020 // INITIAL_COMMIT</span>
                            <GitCommit className="w-4 h-4 text-gray-400" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">The Hypothesis</h2>
                        <p className="text-gray-500">
                            Founders notice a pattern: 60% of enterprise "work" is just copy-pasting data between tabs. The concept of "Digital Waste" is defined.
                        </p>
                    </div>
                </div>

                {/* 2022: The Prototype */}
                <div className="relative group md:pl-24">
                    <div className="hidden md:flex absolute left-5 w-6 h-6 bg-white border-2 border-gray-200 rounded-full items-center justify-center group-hover:border-ios-blue transition-colors z-10">
                        <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-ios-blue transition-colors"></div>
                    </div>

                    <div className="card-ios p-8 hover:border-ios-blue/30 transition-all">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="font-mono text-sm text-gray-400">2022 // BETA_BUILD</span>
                            <GitPullRequest className="w-4 h-4 text-gray-400" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">The Prototype</h2>
                        <p className="text-gray-500">
                            "Solvo v1" is deployed for a Logistics client. It replaces 3 full-time admins with a single Node.js script. ROI exceeds 10x in month one.
                        </p>
                    </div>
                </div>

                {/* 2025: SolvoVis Online */}
                <div className="relative group md:pl-24">
                    <div className="hidden md:flex absolute left-5 w-6 h-6 bg-white border-2 border-green-500 rounded-full items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.5)] z-10">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>

                    <div className="card-ios p-8 border-green-500/20 shadow-[0_0_30px_rgba(0,0,0,0.05)]">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="font-mono text-sm text-green-600 font-semibold px-2 py-0.5 bg-green-50 rounded">2025 // SYSTEM_ONLINE</span>
                            <Terminal className="w-4 h-4 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">SolvoVis Operational</h2>
                        <p className="text-gray-500 mb-6">
                            We pivoted from "Consultancy" to "Infrastructure." We don't just advise; we install the machine.
                        </p>

                        {/* Abstract Data Flow Visual */}
                        <div className="bg-gray-900 rounded-xl p-4 font-mono text-xs text-green-400 overflow-hidden relative">
                            <div className="flex justify-between border-b border-gray-800 pb-2 mb-2">
                                <span>STATUS: OPTIMAL</span>
                                <span>UPTIME: 99.99%</span>
                            </div>
                            <div className="space-y-1 opacity-80">
                                <div>&gt; Initiating Trust_Protocol...</div>
                                <div>&gt; Removing human_error_v1.0... <span className="text-red-400">[DELETED]</span></div>
                                <div>&gt; Injecting logic_gates... <span className="text-white">[DONE]</span></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* The Architects Section */}
            <section className="mt-24 pt-20 border-t border-gray-100">
                <div className="text-center mb-12">
                    <span className="font-mono text-ios-blue text-sm tracking-wider uppercase mb-4 block">System Creators</span>
                    <h2 className="text-3xl font-bold tracking-tight">The Architects.</h2>
                </div>

                <div className="max-w-md mx-auto">
                    {/* Grayscale Team Placeholder with Noise Filter */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                        {/* Noise Overlay */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay z-10"></div>

                        {/* Placeholder with Grayscale Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 flex items-center justify-center">
                            <div className="text-center text-gray-600/50">
                                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-400/50 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </div>
                                <span className="text-xs font-mono uppercase tracking-wider">Team Archive</span>
                            </div>
                        </div>
                    </div>

                    {/* Caption */}
                    <p className="text-center text-ios-subtext mt-6 text-lg font-medium">
                        System designed by humans. <br />
                        <span className="text-ios-text">Operated by AI.</span>
                    </p>
                </div>
            </section>

        </div>
    )
}
