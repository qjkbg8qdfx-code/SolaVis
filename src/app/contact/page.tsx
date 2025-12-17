
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
        </div>
    )
}
