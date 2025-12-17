import { ArrowRight, Search, Settings, Zap } from "lucide-react"

export const metadata = {
    title: 'The Protocol | SolvoVis',
    description: 'Our proprietary 3-step audit and automation protocol.',
}

export default function MethodologyPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
            <div className="text-center mb-20 animate-fade-in-up">
                <span className="font-mono text-ios-blue text-sm tracking-wider uppercase mb-4 block">System Architecture</span>
                <h1 className="text-hero mb-6">
                    The Protocol.
                </h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                    A deterministic pipeline. Input Chaos &rarr; Output Scale.
                </p>
            </div>

            {/* Pipeline Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {/* Step 1: Audit */}
                <div className="card-ios group hover:-translate-y-1 transition-transform relative z-10">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-6xl font-bold font-mono">01</span>
                    </div>
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 mb-6 group-hover:bg-ios-blue group-hover:text-white transition-colors">
                        <Search className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Audit</h3>
                    <p className="text-gray-500 leading-relaxed">
                        We map your entire P&L. We identify the "Leakage Nodes"—where money is lost to inefficiency.
                    </p>

                    {/* Pseudo Code Visual */}
                    <div className="mt-6 pt-4 border-t border-gray-100 font-mono text-xs text-gray-400">
                        &gt; scan(operations);<br />
                        &gt; detect(redundancy);
                    </div>
                </div>

                {/* Arrow Connector (Desktop Only) */}
                <div className="hidden md:flex absolute top-1/2 left-[30%] right-[66%] h-px bg-gray-200 z-0"></div>

                {/* Step 2: Deploy */}
                <div className="card-ios group hover:-translate-y-1 transition-transform relative z-10 border-l-4 border-l-ios-blue md:border-l-white md:border-t-4 md:border-t-ios-blue">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-6xl font-bold font-mono">02</span>
                    </div>
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 mb-6 group-hover:bg-ios-blue group-hover:text-white transition-colors">
                        <Settings className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Deploy</h3>
                    <p className="text-gray-500 leading-relaxed">
                        The "SolvoVis Patch." We install custom scripts to bridge your disconnected software stacks.
                    </p>

                    <div className="mt-6 pt-4 border-t border-gray-100 font-mono text-xs text-gray-400">
                        &gt; install(modules);<br />
                        &gt; npm run build;
                    </div>
                </div>

                {/* Step 3: Optimize */}
                <div className="card-ios group hover:-translate-y-1 transition-transform relative z-10">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-6xl font-bold font-mono">03</span>
                    </div>
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 mb-6 group-hover:bg-ios-blue group-hover:text-white transition-colors">
                        <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Scale</h3>
                    <p className="text-gray-500 leading-relaxed">
                        The System runs autonomously. Your team focuses on high-value strategy, not data entry.
                    </p>

                    <div className="mt-6 pt-4 border-t border-gray-100 font-mono text-xs text-gray-400">
                        &gt; while(true) optimize();
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="mt-20 text-center">
                <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                    Start Protocol v1 <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    )
}
