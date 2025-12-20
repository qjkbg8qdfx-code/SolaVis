// src/app/terms/page.tsx
import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';

export const metadata = {
    title: 'Terms of Service | SolvoVis',
    description: 'Terms and conditions for using SolvoVis services.',
};

export default function TermsPage() {
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
                    <FileText className="h-6 w-6" />
                </div>
                <h1 className="mb-4 text-3xl font-bold tracking-tight">Terms of Service.</h1>
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

                <h3>1. Acceptance of Terms</h3>
                <p>
                    By accessing or using SolvoVis services, you agree to be bound by these Terms of Service.
                    If you do not agree, you may not use our services.
                </p>

                <h3>2. Service Description</h3>
                <p>
                    SolvoVis provides AI infrastructure services including workflow audits, automation deployment,
                    and system monitoring. All services are provided on a consulting and implementation basis.
                </p>

                <h3>3. Intellectual Property</h3>
                <p>
                    All custom AI modules, scripts, and systems developed by SolvoVis remain the intellectual
                    property of SolvoVis Systems unless otherwise specified in writing.
                </p>

                <h3>4. Limitation of Liability</h3>
                <p>
                    SolvoVis provides services on an &quot;as-is&quot; basis. We are not liable for indirect,
                    incidental, or consequential damages arising from service use.
                </p>

                <h3>5. Contact</h3>
                <p>
                    For questions regarding these terms, contact us at:{' '}
                    <a href="mailto:varick.chen@icloud.com">varick.chen@icloud.com</a>
                </p>
            </div>
        </div>
    );
}
