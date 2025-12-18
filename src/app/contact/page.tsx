
import { TerminalSquare } from "lucide-react"
import ContactForm from "@/components/ContactForm"

export const metadata = {
    title: 'Initialize Audit | SolvoVis',
    description: 'Begin the system audit sequence.',
}

export default function ContactPage() {
    return (
        <div className="max-w-xl mx-auto px-6 pt-32 pb-24">
            <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-xl mb-6 shadow-xl">
                    <TerminalSquare className="w-6 h-6" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight mb-2">Initialize System</h1>
                <p className="text-gray-500">Secure Uplink Established.</p>
            </div>

            {/* Terminal Style Form */}
            <ContactForm />

            {/* Trust Signals / Integrated Partners */}
            <div className="mt-12 text-center">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">Compatible With</p>
                <div className="flex justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="font-bold text-xl text-gray-800">OpenAI</span>
                    <span className="font-bold text-xl text-gray-800">AWS</span>
                    <span className="font-bold text-xl text-gray-800">HubSpot</span>
                </div>
            </div>

            {/* Regional Operation Nodes - Global Presence */}
            <section className="mt-16 pt-12 border-t border-gray-100">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-8 text-center">Regional Operation Nodes</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* APAC - HQ */}
                    <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-green-100 text-green-600 rounded-xl mb-4">
                            <span className="text-lg">🌏</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">APAC (HQ)</h3>
                        <p className="text-sm text-gray-500">Singapore</p>
                        <span className="inline-block mt-2 px-2 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded-full">Primary Node</span>
                    </div>

                    {/* AMER - Remote */}
                    <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-xl mb-4">
                            <span className="text-lg">🌎</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">AMER (Node)</h3>
                        <p className="text-sm text-gray-500">New York</p>
                        <span className="inline-block mt-2 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Remote Uplink</span>
                    </div>

                    {/* EMEA - Remote */}
                    <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-purple-100 text-purple-600 rounded-xl mb-4">
                            <span className="text-lg">🌍</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">EMEA (Node)</h3>
                        <p className="text-sm text-gray-500">London</p>
                        <span className="inline-block mt-2 px-2 py-0.5 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">Remote Uplink</span>
                    </div>
                </div>
            </section>
        </div>
    )
}
