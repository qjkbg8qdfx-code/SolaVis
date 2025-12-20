import { TerminalSquare } from 'lucide-react';
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
                    <span className="text-xl font-bold text-gray-800">AWS</span>
                    <span className="text-xl font-bold text-gray-800">HubSpot</span>
                </div>
            </div>

            {/* Regional Operation Nodes - Global Presence */}
            <section className="mt-16 border-t border-gray-100 pt-12">
                <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-gray-400">
                    Regional Operation Nodes
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* APAC - HQ */}
                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600">
                            <span className="text-lg">🌏</span>
                        </div>
                        <h3 className="mb-1 font-semibold text-gray-900">APAC (HQ)</h3>
                        <p className="text-sm text-gray-500">Singapore</p>
                        <span className="mt-2 inline-block rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                            Primary Node
                        </span>
                    </div>

                    {/* AMER - Remote */}
                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                            <span className="text-lg">🌎</span>
                        </div>
                        <h3 className="mb-1 font-semibold text-gray-900">AMER (Node)</h3>
                        <p className="text-sm text-gray-500">New York</p>
                        <span className="mt-2 inline-block rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
                            Remote Uplink
                        </span>
                    </div>

                    {/* EMEA - Remote */}
                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                            <span className="text-lg">🌍</span>
                        </div>
                        <h3 className="mb-1 font-semibold text-gray-900">EMEA (Node)</h3>
                        <p className="text-sm text-gray-500">London</p>
                        <span className="mt-2 inline-block rounded-full bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700">
                            Remote Uplink
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
}
