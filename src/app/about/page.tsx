import FounderBio from '@/components/FounderBio';
import { GitCommit, GitPullRequest, Terminal } from 'lucide-react';

export const metadata = {
    title: 'The Manifesto | SolvoVis',
    description: 'System Origin Log. Why we removed the human bottleneck.',
};

export default function AboutPage() {
    return (
        <div className="mx-auto max-w-4xl px-6 pb-24 pt-32">
            <div className="mb-20 animate-fade-in-up text-center">
                <span className="mb-4 block font-mono text-sm uppercase tracking-wider text-ios-blue">
                    System Origin Log
                </span>
                <h1 className="text-hero mb-6">The Human Bottleneck.</h1>
                <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-500 md:text-2xl">
                    We realized human error was the #1 cost center. <br />
                    <span className="font-medium text-gray-900">So we removed it.</span>
                </p>
            </div>

            {/* Vertical Timeline / Bento-ish Sequence */}
            <div className="relative mx-auto max-w-3xl space-y-4">
                {/* Connecting Line */}
                <div className="absolute bottom-8 left-8 top-8 hidden w-px bg-gradient-to-b from-gray-200 via-ios-blue to-gray-200 md:block"></div>

                {/* 2020: The Hypothesis */}
                <div className="group relative md:pl-24">
                    <div className="absolute left-5 z-10 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-gray-200 bg-white transition-colors group-hover:border-ios-blue md:flex">
                        <div className="h-2 w-2 rounded-full bg-gray-300 transition-colors group-hover:bg-ios-blue"></div>
                    </div>

                    <div className="card-ios p-8 transition-all hover:border-ios-blue/30">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="font-mono text-sm text-gray-400">
                                2020 // INITIAL_COMMIT
                            </span>
                            <GitCommit className="h-4 w-4 text-gray-400" />
                        </div>
                        <h2 className="mb-2 text-2xl font-bold">The Hypothesis</h2>
                        <p className="text-gray-500">
                            Founders notice a pattern: 60% of enterprise &quot;work&quot; is just copy-pasting
                            data between tabs. The concept of &quot;Digital Waste&quot; is defined.
                        </p>
                    </div>
                </div>

                {/* 2022: The Prototype */}
                <div className="group relative md:pl-24">
                    <div className="absolute left-5 z-10 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-gray-200 bg-white transition-colors group-hover:border-ios-blue md:flex">
                        <div className="h-2 w-2 rounded-full bg-gray-300 transition-colors group-hover:bg-ios-blue"></div>
                    </div>

                    <div className="card-ios p-8 transition-all hover:border-ios-blue/30">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="font-mono text-sm text-gray-400">
                                2022 // BETA_BUILD
                            </span>
                            <GitPullRequest className="h-4 w-4 text-gray-400" />
                        </div>
                        <h2 className="mb-2 text-2xl font-bold">The Prototype</h2>
                        <p className="text-gray-500">
                            &quot;Solvo v1&quot; is deployed for a Logistics client. It replaces 3 full-time
                            admins with a single Node.js script. ROI exceeds 10x in month one.
                        </p>
                    </div>
                </div>

                {/* 2025: SolvoVis Online */}
                <div className="group relative md:pl-24">
                    <div className="absolute left-5 z-10 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-green-500 bg-white shadow-[0_0_10px_rgba(34,197,94,0.5)] md:flex">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                    </div>

                    <div className="card-ios border-green-500/20 p-8 shadow-[0_0_30px_rgba(0,0,0,0.05)]">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="rounded bg-green-50 px-2 py-0.5 font-mono text-sm font-semibold text-green-600">
                                2025 // SYSTEM_ONLINE
                            </span>
                            <Terminal className="h-4 w-4 text-green-600" />
                        </div>
                        <h2 className="mb-2 text-2xl font-bold">SolvoVis Operational</h2>
                        <p className="mb-6 text-gray-500">
                            We pivoted from &quot;Consultancy&quot; to &quot;Infrastructure.&quot; We don&apos;t just advise;
                            we install the machine.
                        </p>

                        {/* Abstract Data Flow Visual */}
                        <div className="relative overflow-hidden rounded-xl bg-gray-900 p-4 font-mono text-xs text-green-400">
                            <div className="mb-2 flex justify-between border-b border-gray-800 pb-2">
                                <span>STATUS: OPTIMAL</span>
                                <span>UPTIME: 99.99%</span>
                            </div>
                            <div className="space-y-1 opacity-80">
                                <div>&gt; Initiating Trust_Protocol...</div>
                                <div>
                                    &gt; Removing human_error_v1.0...{' '}
                                    <span className="text-red-400">[DELETED]</span>
                                </div>
                                <div>
                                    &gt; Injecting logic_gates...{' '}
                                    <span className="text-white">[DONE]</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Architect Section */}
            <section className="mt-24 border-t border-gray-100 pt-20">
                <div className="mb-12 text-center">
                    <span className="mb-4 block font-mono text-sm uppercase tracking-wider text-ios-blue">
                        System Creator
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight">The Architect.</h2>
                </div>

                <FounderBio />
            </section>
        </div>
    );
}
