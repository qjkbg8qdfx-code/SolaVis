import { ArrowRight, Search, Settings, Zap } from 'lucide-react';

export const metadata = {
    title: 'The Protocol | SolvoVis',
    description: 'Our proprietary 3-step audit and automation protocol.',
};

export default function MethodologyPage() {
    return (
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-32">
            <div className="mb-20 animate-fade-in-up text-center">
                <span className="mb-4 block font-mono text-sm uppercase tracking-wider text-ios-blue">
                    System Architecture
                </span>
                <h1 className="text-hero mb-6">The Protocol.</h1>
                <p className="mx-auto max-w-2xl text-xl text-gray-500 dark:text-slate-400">
                    A deterministic pipeline. Input Chaos &rarr; Output Scale.
                </p>
            </div>

            {/* Pipeline Visualization */}
            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Step 1: Audit */}
                <div className="card-ios group relative z-10 transition-transform hover:-translate-y-1">
                    <div className="absolute right-0 top-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
                        <span className="font-mono text-6xl font-bold">01</span>
                    </div>
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-gray-900 transition-colors group-hover:bg-ios-blue group-hover:text-white dark:bg-slate-800 dark:text-white">
                        <Search className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">Audit</h3>
                    <p className="leading-relaxed text-gray-500 dark:text-slate-400">
                        We map your entire P&L. We identify the &quot;Leakage Nodes&quot;—where money is lost
                        to inefficiency.
                    </p>

                    {/* Pseudo Code Visual */}
                    <div className="mt-6 border-t border-gray-100 pt-4 font-mono text-xs text-gray-400 dark:border-slate-700">
                        &gt; scan(operations);
                        <br />
                        &gt; detect(redundancy);
                    </div>
                </div>



                {/* Step 2: Deploy */}
                <div className="card-ios group relative z-10 transition-transform hover:-translate-y-1">
                    <div className="absolute right-0 top-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
                        <span className="font-mono text-6xl font-bold">02</span>
                    </div>
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-gray-900 transition-colors group-hover:bg-ios-blue group-hover:text-white dark:bg-slate-800 dark:text-white">
                        <Settings className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">Deploy</h3>
                    <p className="leading-relaxed text-gray-500 dark:text-slate-400">
                        The &quot;SolvoVis Patch.&quot; We install custom scripts to bridge your disconnected
                        software stacks.
                    </p>

                    <div className="mt-6 border-t border-gray-100 pt-4 font-mono text-xs text-gray-400 dark:border-slate-700">
                        &gt; install(modules);
                        <br />
                        &gt; npm run build;
                    </div>
                </div>

                {/* Step 3: Optimize */}
                <div className="card-ios group relative z-10 transition-transform hover:-translate-y-1">
                    <div className="absolute right-0 top-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
                        <span className="font-mono text-6xl font-bold">03</span>
                    </div>
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-gray-900 transition-colors group-hover:bg-ios-blue group-hover:text-white dark:bg-slate-800 dark:text-white">
                        <Zap className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">Scale</h3>
                    <p className="leading-relaxed text-gray-500 dark:text-slate-400">
                        The System runs autonomously. Your team focuses on high-value strategy, not
                        data entry.
                    </p>

                    <div className="mt-6 border-t border-gray-100 pt-4 font-mono text-xs text-gray-400 dark:border-slate-700">
                        &gt; while(true) optimize();
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="mt-20 text-center">
                <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                    Start Protocol v1 <ArrowRight className="h-4 w-4" />
                </a>
            </div>

            {/* HowTo Schema (AI-Readable) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'HowTo',
                        name: 'The SolvoVis Protocol: How to Scale Revenue with AI Infrastructure',
                        description:
                            'A deterministic 3-step pipeline to transform operational chaos into scalable systems.',
                        totalTime: 'P90D',
                        estimatedCost: {
                            '@type': 'MonetaryAmount',
                            currency: 'USD',
                            value: 'Custom',
                        },
                        step: [
                            {
                                '@type': 'HowToStep',
                                position: 1,
                                name: 'Audit',
                                text: 'We map your entire P&L to identify the "Leakage Nodes"—where money is lost to inefficiency. This includes scanning operations and detecting redundancy.',
                                url: 'https://solvovis.com/methodology#audit',
                            },
                            {
                                '@type': 'HowToStep',
                                position: 2,
                                name: 'Deploy',
                                text: 'The "SolvoVis Patch": We install custom scripts and AI modules to bridge your disconnected software stacks and automate repetitive workflows.',
                                url: 'https://solvovis.com/methodology#deploy',
                            },
                            {
                                '@type': 'HowToStep',
                                position: 3,
                                name: 'Scale',
                                text: 'The System runs autonomously 24/7. Your team focuses on high-value strategy while the AI handles data entry, processing, and optimization.',
                                url: 'https://solvovis.com/methodology#scale',
                            },
                        ],
                    }),
                }}
            />
        </div>
    );
}
