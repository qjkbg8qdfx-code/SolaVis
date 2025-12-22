import Link from 'next/link';
import { Target, FileCode, Bot, RefreshCw, Shield, Check, ArrowRight } from 'lucide-react';
import { methodologyContent } from '@/config/content';

export const metadata = {
    title: 'The Protocol | SolvoVis',
    description:
        'Our proprietary 4-stage engineering protocol to systematically extract inefficiencies and replace them with autonomous logic.',
};

// Icon mapping
const iconMap = {
    Target,
    FileCode,
    Bot,
    RefreshCw,
};

export default function MethodologyPage() {
    return (
        <div className="min-h-screen">
            {/* Section 1: The Blueprint Hero (Dark/Stark) */}
            <section className="bg-gray-950 py-32 text-white">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="animate-fade-in-up text-center">
                        <span className="mb-4 inline-block font-mono text-sm uppercase tracking-widest text-blue-400">
                            {methodologyContent.hero.badge}
                        </span>
                        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
                            {methodologyContent.hero.title}
                        </h1>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-400">
                            {methodologyContent.hero.subtitle}
                        </p>
                    </div>

                    {/* Schematic Lines Decoration */}
                    <div className="mt-16 flex items-center justify-center gap-4">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-700" />
                        <div className="h-3 w-3 rotate-45 border border-gray-700" />
                        <div className="h-px w-32 bg-gray-700" />
                        <div className="h-3 w-3 rotate-45 border border-gray-700" />
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-700" />
                    </div>
                </div>
            </section>

            {/* Section 2: The Protocol Timeline */}
            <section className="bg-white py-24 dark:bg-gray-950">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
                            The Engineering Protocol
                        </h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                            Four stages. Zero guesswork.
                        </p>
                    </div>

                    {/* Zig-Zag Timeline */}
                    <div className="relative">
                        {/* Central Backbone Line (Desktop) */}
                        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 md:block" />

                        {/* Mobile Backbone Line */}
                        <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 md:hidden" />

                        <div className="space-y-12 md:space-y-24">
                            {methodologyContent.phases.map((phase, index) => {
                                const IconComponent = iconMap[phase.icon as keyof typeof iconMap];
                                const isEven = index % 2 === 0;

                                return (
                                    <div
                                        key={phase.id}
                                        className={`relative flex items-center gap-8 pl-16 md:gap-16 md:pl-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                            }`}
                                    >
                                        {/* Mobile Node */}
                                        <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-500 bg-white dark:bg-gray-950 md:hidden">
                                            <div className="h-3 w-3 rounded-full bg-blue-500" />
                                        </div>

                                        {/* Desktop: Left/Right Card */}
                                        <div
                                            className={`flex-1 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                                                }`}
                                        >
                                            <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:border-blue-500/30 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
                                                {/* Phase Number */}
                                                <div
                                                    className={`mb-4 flex items-center gap-3 ${isEven ? 'md:flex-row-reverse' : ''
                                                        }`}
                                                >
                                                    <span className="font-mono text-4xl font-bold text-gray-200 transition-colors group-hover:text-blue-500/50 dark:text-gray-800">
                                                        {phase.id}
                                                    </span>
                                                    {IconComponent && (
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-500 group-hover:text-white dark:bg-blue-900/30 dark:text-blue-400">
                                                            <IconComponent className="h-5 w-5" />
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Content */}
                                                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                                    {phase.title}
                                                </h3>
                                                <p className="mb-4 text-gray-600 dark:text-gray-400">
                                                    {phase.description}
                                                </p>

                                                {/* Technical Detail */}
                                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1.5 font-mono text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                                                    {phase.technicalDetail}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Desktop Center Node */}
                                        <div className="absolute left-1/2 hidden -translate-x-1/2 md:flex">
                                            <div className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 bg-white transition-all hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 dark:border-gray-700 dark:bg-gray-950">
                                                <div className="h-4 w-4 rounded-full bg-gray-300 transition-colors group-hover:bg-blue-500 dark:bg-gray-700" />
                                            </div>
                                        </div>

                                        {/* Empty space for other side */}
                                        <div className="hidden flex-1 md:block md:w-1/2" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: The "Black Box" (Security) */}
            <section className="border-t border-gray-100 bg-gray-50 py-24 dark:border-gray-800 dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-3xl">
                        {/* Shield Visual */}
                        <div className="mb-8 flex justify-center">
                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-green-500/30 bg-gradient-to-br from-green-50 to-green-100 dark:border-green-500/20 dark:from-green-900/20 dark:to-green-800/10">
                                <Shield className="h-10 w-10 text-green-600 dark:text-green-400" />
                            </div>
                        </div>

                        <div className="text-center">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {methodologyContent.security.title}
                            </h2>
                            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                                {methodologyContent.security.description}
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="rounded-2xl border border-green-500/20 bg-white p-6 dark:bg-gray-950">
                            <ul className="space-y-4">
                                {methodologyContent.security.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                                            <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                                        </div>
                                        <span className="font-medium text-gray-700 dark:text-gray-300">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Final CTA */}
            <section className="bg-gray-950 py-24 text-white">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                        Ready to initialize Phase 01?
                    </h2>
                    <p className="mx-auto mb-8 max-w-xl text-gray-400">
                        Your first Logic Audit is on us. Let&apos;s map your friction points.
                    </p>
                    <Link
                        href="/contact"
                        className="btn-primary inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                    >
                        Start Logic Audit <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>

            {/* HowTo Schema (AI-Readable) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'HowTo',
                        name: 'The SolvoVis Protocol: How to Scale Revenue with AI Infrastructure',
                        description:
                            'A proprietary 4-stage engineering protocol to systematically extract inefficiencies and replace them with autonomous logic.',
                        totalTime: 'P90D',
                        estimatedCost: {
                            '@type': 'MonetaryAmount',
                            currency: 'USD',
                            value: 'Custom',
                        },
                        step: methodologyContent.phases.map((phase, index) => ({
                            '@type': 'HowToStep',
                            position: index + 1,
                            name: phase.title,
                            text: phase.description,
                            url: `https://solvovis.com/methodology#phase-${phase.id}`,
                        })),
                    }),
                }}
            />
        </div>
    );
}
