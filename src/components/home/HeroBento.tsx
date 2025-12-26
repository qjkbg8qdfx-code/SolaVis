'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Code2, Brain, Cpu } from 'lucide-react';

export default function HeroBento() {
    return (
        <section className="relative bg-slate-950 py-12 md:py-20" aria-labelledby="hero-heading">
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
                        <span className="text-sm font-medium text-gray-400">Workforce Composition</span>
                        <div className="flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-950/50 px-3 py-1 text-xs font-semibold text-violet-400">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75 motion-reduce:animate-none" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-violet-500" />
                            </span>
                            80/20 Rule Active
                        </div>
                    </div>

                    {/* Donut Chart - 80/20 Workforce Composition */}
                    <div className="relative z-10 my-6 flex flex-1 items-center justify-center rounded-2xl bg-gradient-to-b from-white/5 to-transparent p-4">
                        <div className="relative">
                            <svg className="h-40 w-40 -rotate-90" viewBox="0 0 100 100">
                                <defs>
                                    <filter id="glowFilter">
                                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                {/* Background Circle */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="#1e293b"
                                    strokeWidth="12"
                                />
                                {/* 80% AI Agents - Violet Glowing */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="#8B5CF6"
                                    strokeWidth="12"
                                    strokeDasharray="201.06 251.33"
                                    strokeLinecap="round"
                                    filter="url(#glowFilter)"
                                    style={{ filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.7))' }}
                                />
                                {/* 20% Human Strategy - Muted Slate */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="#475569"
                                    strokeWidth="12"
                                    strokeDasharray="50.26 251.33"
                                    strokeDashoffset="-201.06"
                                    strokeLinecap="round"
                                />
                            </svg>
                            {/* Center Text */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-2xl font-bold text-white">80%</span>
                                <span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">Automated</span>
                            </div>
                        </div>
                        {/* Legend */}
                        <div className="ml-6 space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="h-3 w-3 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
                                <span className="text-xs text-gray-300">AI Agents (Execution)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-3 w-3 rounded-full bg-slate-600" />
                                <span className="text-xs text-gray-400">Human Strategy</span>
                            </div>
                        </div>
                    </div>

                    {/* Metric Pills */}
                    <div className="relative z-10 grid grid-cols-3 gap-3">
                        <div className="rounded-xl bg-white/5 p-3 text-center backdrop-blur-sm">
                            <div className="text-lg font-bold text-green-400">-60%</div>
                            <div className="text-[10px] font-medium uppercase tracking-wide text-gray-400">Cost Velocity</div>
                        </div>
                        <div className="rounded-xl bg-white/5 p-3 text-center backdrop-blur-sm">
                            <div className="text-lg font-bold text-violet-400">+4.5x</div>
                            <div className="text-[10px] font-medium uppercase tracking-wide text-gray-400">Output</div>
                        </div>
                        <div className="rounded-xl bg-white/5 p-3 text-center backdrop-blur-sm">
                            <div className="text-lg font-bold text-emerald-400">0%</div>
                            <div className="text-[10px] font-medium uppercase tracking-wide text-gray-400">Error Rate</div>
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

            {/* Hero-to-Body Gradient Fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 via-slate-50/20 to-transparent dark:from-slate-950 dark:via-slate-950/20" />
        </section>
    );
}
