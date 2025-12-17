import Link from 'next/link'
import { ShieldCheck, ArrowLeft } from 'lucide-react'

export const metadata = {
    title: 'Privacy Protocols | SolvoVis',
    description: 'Data handling and protection standards.',
}

export default function PrivacyPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-ios-blue mb-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ios-blue rounded">
                <ArrowLeft className="w-4 h-4" /> Return to System
            </Link>

            <div className="mb-12 border-b border-gray-100 pb-8">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 mb-6">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight mb-4">Data Protocols.</h1>
                <p className="text-gray-500" suppressHydrationWarning>
                    Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
            </div>

            <div className="prose prose-gray max-w-none prose-headings:font-semibold prose-a:text-ios-blue">
                <h3>1. Data Collection</h3>
                <p>
                    SolvoVis operates on a principle of minimal data retention. We collect only what is strictly necessary to initialize audits and maintain system communications.
                </p>

                <h3>2. Usage of Information</h3>
                <p>
                    Data entered into our &quot;Logic Audit&quot; forms is processed solely for the purpose of generating efficiency reports. We do not sell data to third-party brokers.
                </p>

                <h3>3. Cookie Protocols</h3>
                <p>
                    We use essential cookies to maintain session stability. Analytics cookies are only deployed upon explicit user consent via our Compliance Banner.
                </p>

                <h3>4. Contact</h3>
                <p>
                    For data deletion requests (Right to be Forgotten), execute a command to: <a href="mailto:legal@solvovis.com">legal@solvovis.com</a>
                </p>
            </div>
        </div>
    )
}
