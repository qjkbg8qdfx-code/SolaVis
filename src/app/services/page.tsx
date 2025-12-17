import Link from 'next/link'
import { ArrowRight, Bot, Database, Target, UploadCloud } from 'lucide-react'

export const metadata = {
    title: 'Modules | SolvoVis',
    description: 'Autonomous software modules for revenue scaling.',
}

export default function ServicesPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">

            {/* Header */}
            <div className="max-w-2xl mb-16 animate-fade-in-up">
                <span className="font-mono text-ios-blue text-sm tracking-wider uppercase mb-4 block">System Capabilities</span>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                    Modules.
                </h1>
                <p className="text-xl text-gray-500 leading-relaxed">
                    Deployable software infrastructure. We replace human bottlenecks with autonomous code.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

                {/* Card 1: Core Strategy (Strategy) - Large Square/Wide */}
                <div className="card-ios md:col-span-2 group relative overflow-hidden bg-gray-900 border-gray-800 p-8 flex flex-col justify-between">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="relative z-10 flex justify-between items-start">
                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white">
                            <Target className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs text-gray-500">INIT_SEQ_01</span>
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-2xl font-semibold text-white mb-2">Core.exe</h3>
                        <p className="text-gray-400 max-w-sm">Strategic P&L audit. We identify the friction points before writing a single line of code.</p>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>

                {/* Card 2: Automation (Auto-Pilot) - Tall Vertical (Requires Row Span if logic permits, strict grid here implies 1 row height if not spanned) 
                    User requested 4 cards. "Vertical" usually means row-span-2. 
                    Let's adjust grid to allow taller items.
                */}
                <div className="card-ios md:row-span-2 bg-gray-50 border-gray-200 p-8 flex flex-col relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-8 relative z-10">
                        <div className="bg-white p-3 rounded-xl shadow-sm text-blue-600">
                            <Bot className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs text-gray-400">AUTO_PILOT</span>
                    </div>

                    <div className="relative z-10 flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Auto-Pilot</h3>
                        <p className="text-gray-500 text-sm">24/7 autonomous workflow execution.</p>
                    </div>

                    {/* Visual: Progress Bar Animation */}
                    <div className="absolute bottom-10 left-8 right-8 space-y-4">
                        <div className="space-y-1">
                            <div className="flex justify-between text-[10px] font-mono text-gray-400">
                                <span>PROCESSING_LEADS</span>
                                <span>98%</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-[98%] animate-pulse"></div>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="flex justify-between text-[10px] font-mono text-gray-400">
                                <span>SYNC_CRM</span>
                                <span>100%</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3: Data (Data_Kernel) - Standard */}
                <div className="card-ios p-8 flex flex-col justify-between group hover:border-ios-blue/50 transition-colors">
                    <div className="flex justify-between items-start">
                        <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                            <Database className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs text-gray-400">DATA_KERNEL</span>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">Data_Kernel</h3>
                        <p className="text-gray-500 text-sm">Structuring chaos into clean JSON.</p>
                    </div>
                </div>

                {/* Card 4: Training (Upload) - Standard with CTA style */}
                <div className="card-ios p-8 bg-ios-text text-white border-none flex flex-col justify-between group cursor-pointer">
                    <div className="flex justify-between items-start">
                        <div className="bg-white/20 p-3 rounded-xl text-white">
                            <UploadCloud className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs text-gray-400">UPLOAD</span>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-1">Upload</h3>
                        <div className="flex items-center gap-2 text-gray-300 text-sm group-hover:text-white transition-colors">
                            <span>Install Knowledge</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Service Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        serviceType: 'AI Infrastructure Audit',
                        provider: {
                            '@type': 'Organization',
                            name: 'SolvoVis'
                        },
                        areaServed: 'Global',
                        hasOfferCatalog: {
                            '@type': 'OfferCatalog',
                            name: 'Modules',
                            itemListElement: [
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Core Strategy Audit' } },
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auto-Pilot Automation' } },
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Kernel Cleaning' } },
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Training' } }
                            ]
                        }
                    })
                }}
            />
        </div>
    )
}
