import Link from 'next/link';
import { Target, FileCode, Bot, RefreshCw, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { methodologyContent } from '@/config/content';

export const metadata = {
    title: 'The Protocol | SolvoVis',
    description:
        'Our proprietary 4-stage engineering protocol to systematically extract inefficiencies and replace them with autonomous logic.',
};

export default function Methodology() {
    // Icon mapping helper
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Target':
                return <Target className="h-6 w-6" />;
            case 'FileCode':
                return <FileCode className="h-6 w-6" />;
            case 'Bot':
                return <Bot className="h-6 w-6" />;
            case 'RefreshCw':
                return <RefreshCw className="h-6 w-6" />;
            default:
                return <Target className="h-6 w-6" />;
        }
    };

    return (
        <div className="mx-auto max-w-5xl px-6 pb-24 pt-32">
            {/* 1. Blueprint Hero */}
            <section className="mb-24 text-center">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600">
                    {methodologyContent.hero.badge}
                </span>
                <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
                    {methodologyContent.hero.title}
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                    {methodologyContent.hero.subtitle}
                </p>
            </section>

            {/* 2. The Protocol Timeline (Vertical Schematic) */}
            <section className="relative mb-32">
                {/* Central Line (The Backbone) */}
                <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 md:left-1/2"></div>

                <div className="space-y-12 md:space-y-24">
                    {methodologyContent.phases.map((phase, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={phase.id}
                                className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Node Point (Mobile: Left, Desktop: Center) */}
                                <div className="absolute left-8 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-blue-500 bg-white dark:bg-black md:left-1/2">
                                    <div className="h-full w-full animate-ping rounded-full bg-blue-500 opacity-20"></div>
                                </div>

                                {/* Content Card */}
                                <div
                                    className={`ml-20 w-full md:w-[45%] ${isEven ? 'md:ml-0 md:text-right' : 'md:mr-0 md:text-left'}`}
                                >
                                    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-blue-500/50 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
                                        {/* Hover Glow */}
                                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100"></div>

                                        <div
                                            className={`mb-4 flex items-center gap-3 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                                        >
                                            <span className="font-mono text-4xl font-bold text-gray-200 dark:text-gray-800">
                                                {phase.id}
                                            </span>
                                            <div className="text-blue-600 dark:text-blue-400">
                                                {getIcon(phase.icon)}
                                            </div>
                                        </div>

                                        <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                                            {phase.title}
                                        </h3>
                                        <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                                            {phase.description}
                                        </p>

                                        <div className="inline-block rounded bg-gray-100 px-3 py-1 font-mono text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                                            {phase.technicalDetail}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty spacer for desktop alignment */}
                                <div className="hidden w-[45%] md:block"></div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 3. The Black Box (Security) */}
            <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-800 dark:bg-gray-900/50 md:p-12">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                    <Shield className="h-8 w-8" />
                </div>

                <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                    {methodologyContent.security.title}
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-gray-600 dark:text-gray-300">
                    {methodologyContent.security.description}
                </p>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {methodologyContent.security.features.map((feature) => (
                        <div
                            key={feature}
                            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                        >
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. CTA */}
            <div className="mt-24 text-center">
                <p className="mb-6 font-mono text-sm text-gray-500">READY TO INITIALIZE PHASE 01?</p>
                <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
                >
                    Start Logic Audit <ArrowRight className="h-5 w-5" />
                </Link>
            </div>
        </div>
    );
}
