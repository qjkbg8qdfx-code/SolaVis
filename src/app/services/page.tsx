import Link from 'next/link';
import { ArrowRight, Target, Bot, Brain, ShieldCheck, LucideIcon } from 'lucide-react';
import { faqContent, faqSection, bentoModules } from '@/config/content';

// Icon map for rendering icons from string names
const iconMap: Record<string, LucideIcon> = {
    Target,
    Bot,
    Brain,
    ShieldCheck,
};

export const metadata = {
    title: 'Modules | SolvoVis',
    description: 'Autonomous software modules for revenue scaling.',
};

export default function ServicesPage() {
    return (
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-32">
            {/* Header */}
            <div className="mb-16 max-w-2xl animate-fade-in-up">
                <span className="mb-4 block font-mono text-sm uppercase tracking-wider text-ios-blue">
                    System Capabilities
                </span>
                <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">Modules.</h1>
                <p className="text-xl leading-relaxed text-gray-500 dark:text-gray-400">
                    Deployable software infrastructure. We replace human bottlenecks with autonomous
                    code.
                </p>
            </div>

            {/* Bento Grid - Dynamic from bentoModules */}
            <div className="grid auto-rows-[300px] grid-cols-1 gap-6 md:grid-cols-3">
                {bentoModules.map((module) => {
                    const Icon = module.iconName ? iconMap[module.iconName] : null;

                    // Large variant (Card 1)
                    if (module.variant === 'large') {
                        return (
                            <div
                                key={module.id}
                                className="card-ios group relative flex flex-col justify-between overflow-hidden border-gray-800 bg-gray-900 p-8 md:col-span-2"
                            >
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                                <div className="relative z-10 flex items-start justify-between">
                                    <div className="rounded-xl border border-white/10 bg-white/10 p-3 text-white backdrop-blur-md">
                                        {Icon && <Icon className="h-6 w-6" />}
                                    </div>
                                    <span className="font-mono text-xs text-gray-500">
                                        INIT_SEQ_{module.number}
                                    </span>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="mb-2 text-2xl font-semibold text-white">
                                        {module.title}
                                    </h3>
                                    <p className="max-w-sm text-gray-400">{module.description}</p>
                                </div>
                                <div className="absolute bottom-0 left-0 h-1 w-full scale-x-0 transform bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-500 group-hover:scale-x-100"></div>
                            </div>
                        );
                    }

                    // Tall variant (Card 2)
                    if (module.variant === 'tall') {
                        return (
                            <div
                                key={module.id}
                                className="card-ios group relative flex flex-col overflow-hidden border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900 md:row-span-2"
                            >
                                <div className="relative z-10 mb-8 flex items-start justify-between">
                                    <div className="rounded-xl bg-white p-3 text-blue-600 shadow-sm dark:bg-gray-800">
                                        {Icon && <Icon className="h-6 w-6" />}
                                    </div>
                                    <span className="font-mono text-xs text-gray-400">
                                        {module.title.toUpperCase().replace(' ', '_')}
                                    </span>
                                </div>
                                <div className="relative z-10 flex-1">
                                    <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                                        {module.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {module.description}
                                    </p>
                                </div>
                                {/* Visual: Progress Bar Animation */}
                                <div className="absolute bottom-10 left-8 right-8 space-y-4">
                                    <div className="space-y-1">
                                        <div className="flex justify-between font-mono text-[10px] text-gray-400">
                                            <span>PROCESSING_TASKS</span>
                                            <span>98%</span>
                                        </div>
                                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                                            <div className="h-full w-[98%] animate-pulse bg-blue-500"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex justify-between font-mono text-[10px] text-gray-400">
                                            <span>SYNC_COMPLETE</span>
                                            <span>100%</span>
                                        </div>
                                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                                            <div className="h-full w-full bg-green-500"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    // Small variant (Card 3 - Visual_Matrix)
                    if (module.variant === 'small') {
                        return (
                            <div
                                key={module.id}
                                className="card-ios group flex flex-col justify-between p-8 transition-colors hover:border-ios-blue/50"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600 dark:bg-blue-900/30">
                                        {Icon && <Icon className="h-6 w-6" />}
                                    </div>
                                    <span className="font-mono text-xs text-gray-400">
                                        {module.title.toUpperCase()}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                                        {module.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {module.description}
                                    </p>
                                </div>
                            </div>
                        );
                    }

                    // CTA variant (Card 4 - Deploy)
                    if (module.variant === 'cta') {
                        return (
                            <Link
                                key={module.id}
                                href={module.ctaHref || '/contact'}
                                className="card-ios group flex cursor-pointer flex-col justify-between border-none bg-ios-text p-8 text-white dark:bg-ios-blue"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="rounded-xl bg-white/20 p-3 text-white">
                                        {Icon && <Icon className="h-6 w-6" />}
                                    </div>
                                    <span className="font-mono text-xs text-gray-400">
                                        {module.title.toUpperCase()}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="mb-1 text-xl font-semibold">{module.title}</h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-300 transition-colors group-hover:text-white">
                                        <span>{module.description}</span>
                                        <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        );
                    }

                    return null;
                })}
            </div>

            {/* FAQ Section (Voice Search Optimized) */}
            <section className="mt-20 border-t border-gray-100 pt-16 dark:border-slate-800">
                <div className="mb-12 max-w-2xl">
                    <span className="mb-4 block font-mono text-sm uppercase tracking-wider text-ios-blue">
                        {faqSection.badge}
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight">{faqSection.title}</h2>
                </div>

                <div className="max-w-3xl space-y-4">
                    {faqContent.map((faq, index) => (
                        <details
                            key={index}
                            className="group overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 dark:border-slate-800 dark:bg-slate-900"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-slate-800">
                                <span>{faq.question}</span>
                                <span className="ml-4 text-gray-400 transition-transform group-open:rotate-180">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M5 7.5L10 12.5L15 7.5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </summary>
                            <div className="px-6 pb-6 leading-relaxed text-gray-600 dark:text-slate-400">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </section>

            {/* Service Schema with Offers */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        serviceType: 'AI Infrastructure Audit',
                        provider: {
                            '@type': 'Organization',
                            name: 'SolvoVis',
                        },
                        areaServed: 'Global',
                        hasOfferCatalog: {
                            '@type': 'OfferCatalog',
                            name: 'Modules',
                            itemListElement: [
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Core Strategy Audit',
                                    },
                                    priceCurrency: 'USD',
                                    price: 'Contact for quote',
                                    priceSpecification: {
                                        '@type': 'PriceSpecification',
                                        priceCurrency: 'USD',
                                        price: 'Custom',
                                    },
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Auto-Pilot Automation',
                                    },
                                    priceCurrency: 'USD',
                                    price: 'Contact for quote',
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Data Kernel Cleaning',
                                    },
                                    priceCurrency: 'USD',
                                    price: 'Contact for quote',
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: { '@type': 'Service', name: 'Corporate Training' },
                                    priceCurrency: 'USD',
                                    price: 'Contact for quote',
                                },
                            ],
                        },
                    }),
                }}
            />


        </div>
    );
}
