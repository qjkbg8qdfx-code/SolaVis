'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Code2, Brain, Cpu } from 'lucide-react';

export default function HeroBento() {
    return (
        <section className="py-12 md:py-20" aria-labelledby="hero-heading">
            {/* Bento Grid Container */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-3">
                {/* ============================================ */}
                {/* BOX A - The Hook (2x2) - Top Left */}
                {/* ============================================ */}
                <div className="order-first flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 via-slate-900 to-black p-8 text-white shadow-2xl md:col-span-2 md:row-span-2 md:p-10">
                    {/* Glow Effect */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 blur-3xl" />

                    <div className="relative z-10 space-y-6">
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-950/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-400">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 motion-reduce:animate-none" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                            </span>
                            Accepting New Clients
                        </div>

                        {/* H1 - Primary Headline (SEO Critical) */}
                        <h1
                            id="hero-heading"
                            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                        >
                            Automate the Ordinary.
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Unleash the Extraordinary.
                            </span>
                        </h1>

                        {/* Value Proposition - 80% Trust Signal */}
                        <p className="max-w-lg text-base leading-relaxed text-gray-300 md:text-lg">
                            Architecting autonomous systems that eliminate 80% of operational
                            friction. We build the logic; you scale the vision.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/services"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/25"
                            >
                                Deploy System
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="/methodology"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                            >
                                View Methodology
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ============================================ */}
                {/* BOX B - Visual Evidence (1x2) - Top Right */}
                {/* ============================================ */}
                <div className="relative order-2 flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/50 p-6 shadow-xl backdrop-blur-xl md:col-span-2 md:row-span-2 md:p-8">
                    {/* Glassmorphism Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-fuchsia-500/5" />

                    {/* Header */}
                    <div className="relative z-10 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-400">Live Dashboard</span>
                        <div className="flex items-center gap-2 rounded-full border border-green-400/30 bg-green-950/50 px-3 py-1 text-xs font-semibold text-green-400">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 motion-reduce:animate-none" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                            </span>
                            System Status: Active
                        </div>
                    </div>

                    {/* Visual Placeholder - Simulated UI */}
                    <div className="relative z-10 my-6 flex-1 rounded-2xl bg-gradient-to-b from-white/5 to-transparent p-4">
                        {/* Mini Chart with Glow Effect */}
                        <svg className="h-full w-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="bentoChartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            <path
                                d="M0 60 Q20 55, 40 50 T80 40 T120 30 T160 35 T200 15 L200 80 L0 80 Z"
                                fill="url(#bentoChartGradient)"
                            />
                            <path
                                d="M0 60 Q20 55, 40 50 T80 40 T120 30 T160 35 T200 15"
                                fill="none"
                                stroke="#8B5CF6"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                filter="url(#glow)"
                                style={{ filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))' }}
                            />
                            <circle cx="200" cy="15" r="4" fill="#8B5CF6" filter="url(#glow)" />
                        </svg>
                    </div>

                    {/* Metric Pills */}
                    <div className="relative z-10 grid grid-cols-3 gap-3">
                        <div className="rounded-xl bg-white/5 p-3 text-center backdrop-blur-sm">
                            <div className="text-lg font-bold text-white">4.5×</div>
                            <div className="text-[10px] font-medium uppercase tracking-wide text-gray-400">ROI</div>
                        </div>
                        <div className="rounded-xl bg-white/5 p-3 text-center backdrop-blur-sm">
                            <div className="text-lg font-bold text-white">98%</div>
                            <div className="text-[10px] font-medium uppercase tracking-wide text-gray-400">Automated</div>
                        </div>
                        <div className="rounded-xl bg-white/5 p-3 text-center backdrop-blur-sm">
                            <div className="text-lg font-bold text-white">24/7</div>
                            <div className="text-[10px] font-medium uppercase tracking-wide text-gray-400">Active</div>
                        </div>
                    </div>
                </div>

                {/* ============================================ */}
                {/* BOX C - Social Proof (1x1) - Bottom Left */}
                {/* ============================================ */}
                <div className="order-3 flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl md:col-span-1 md:row-span-1">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                        <Zap className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white">Global SMEs</div>
                        <p className="mt-1 text-sm text-gray-400">
                            Trusted by forward-thinking businesses worldwide
                        </p>
                    </div>
                </div>

                {/* ============================================ */}
                {/* BOX D - Tech Stack (3x1) - Bottom Right */}
                {/* ============================================ */}
                <div className="order-4 flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl md:col-span-3 md:row-span-1">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-200">
                                Built on Autonomous Standards
                            </p>
                            <p className="mt-1 text-xs text-gray-400">
                                Enterprise-grade infrastructure for scale
                            </p>
                        </div>
                        {/* Tech Icons */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                <Code2 className="h-5 w-5 text-gray-300" />
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                <Brain className="h-5 w-5 text-violet-400" />
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                <Cpu className="h-5 w-5 text-fuchsia-400" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                            Next.js
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                            Python
                        </span>
                        <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                            AI Agents
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                            LangChain
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                            Vector DB
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
