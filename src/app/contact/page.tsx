import { TerminalSquare, MapPin, Cpu, Network } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: 'Initialize Audit | SolvoVis',
    description: 'Begin the system audit sequence.',
};

export default function ContactPage() {
    return (
        <div className="mx-auto max-w-xl px-6 pb-24 pt-32">
            <div className="mb-10 text-center">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white shadow-xl">
                    <TerminalSquare className="h-6 w-6" />
                </div>
                <h1 className="mb-2 text-4xl font-bold tracking-tight">Initialize System</h1>
                <p className="text-gray-500">Secure Uplink Established.</p>
            </div>

            {/* Terminal Style Form */}
            <ContactForm />

            {/* Trust Signals / Integrated Partners */}
            <div className="mt-12 text-center">
                <p className="mb-6 text-xs font-medium uppercase tracking-widest text-gray-400">
                    Compatible With
                </p>
                <div className="flex items-center justify-center gap-8 opacity-40 grayscale transition-all duration-500 hover:grayscale-0">
                    <span className="text-xl font-bold text-gray-800">OpenAI</span>
                    <span className="text-xl font-bold text-gray-800">Cloudflare</span>
                    <span className="text-xl font-bold text-gray-800">Google Labs</span>
                </div>
            </div>

            {/* Regional Operation Nodes - Strategic Architecture */}
            <section className="mt-16 border-t border-gray-100 pt-12">
                <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-gray-400">
                    Regional Operation Nodes
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Card 1: Global HQ - Mackay */}
                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600">
                            <MapPin className="h-5 w-5" />
                        </div>
                        <h3 className="mb-1 font-semibold text-gray-900">Global HQ (APAC)</h3>
                        <p className="text-sm text-gray-500">Mackay, Australia</p>
                        <span className="mt-2 inline-block rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                            Command Center
                        </span>
                    </div>

                    {/* Card 2: R&D Uplink - Taipei */}
                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                            <Cpu className="h-5 w-5" />
                        </div>
                        <h3 className="mb-1 font-semibold text-gray-900">R&D Uplink (Asia)</h3>
                        <p className="text-sm text-gray-500">Taipei Strategic Network</p>
                        <span className="mt-2 inline-block rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">
                            Partner Network
                        </span>
                    </div>

                    {/* Card 3: Global Service Mesh - Remote */}
                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                            <Network className="h-5 w-5" />
                        </div>
                        <h3 className="mb-1 font-semibold text-gray-900">Global Service Mesh</h3>
                        <p className="text-sm text-gray-500">AMER & EMEA Zones</p>
                        <span className="mt-2 inline-block rounded-full bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700">
                            Remote Uplink 24/7
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
}
