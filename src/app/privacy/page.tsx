// src/app/privacy/page.tsx
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export const metadata = {
    title: 'Privacy Protocols | SolvoVis',
    description: 'Data handling and protection standards.',
};

export default function PrivacyPage() {
    return (
        <div className="mx-auto max-w-3xl px-6 pb-24 pt-32">
            <Link
                href="/"
                className="mb-8 inline-flex items-center gap-2 rounded text-sm text-gray-500 transition-colors hover:text-ios-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ios-blue"
            >
                <ArrowLeft className="h-4 w-4" /> Return to System
            </Link>

            <div className="mb-12 border-b border-gray-100 pb-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-gray-900">
                    <ShieldCheck className="h-6 w-6" />
                </div>
                <h1 className="mb-4 text-3xl font-bold tracking-tight">Data Protocols.</h1>
                <p className="text-gray-500" suppressHydrationWarning>
                    Last Updated:{' '}
                    {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
            </div>

            <div className="prose prose-gray prose-headings:font-semibold prose-a:text-ios-blue max-w-none">
                <div className="mb-8 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
                    <strong>Legal Notice:</strong> SolvoVis is operated by <strong>Varick Chen</strong>.
                    Governed by the laws of <strong>Mackay, Queensland, Australia</strong>.
                </div>

                <h3>1. Data Collection</h3>
                <p>
                    SolvoVis operates on a principle of minimal data retention. We collect only what
                    is strictly necessary to initialize audits and maintain system communications.
                </p>

                <h3>2. Usage of Information</h3>
                <p>
                    Data entered into our &quot;Logic Audit&quot; forms is processed solely for the
                    purpose of generating efficiency reports. We do not sell data to third-party
                    brokers.
                </p>

                <h3>3. Cookie Protocols</h3>
                <p>
                    We use essential cookies to maintain session stability. Analytics cookies are
                    only deployed upon explicit user consent via our Compliance Banner.
                </p>

                <h3>4. Contact & Rights</h3>
                <p>
                    You retain full rights to your data. For data deletion requests (Right to be Forgotten) or inquiries regarding your personal information, please execute a command to our Data Protection Officer at:{' '}
                    <a href="mailto:varick.chen@icloud.com">varick.chen@icloud.com</a>
                </p>
            </div>
        </div>
    );
}
