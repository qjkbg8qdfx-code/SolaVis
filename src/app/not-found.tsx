import Link from 'next/link';
import { RefreshCw, AlertTriangle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
            <div className="relative mb-8">
                <div className="absolute inset-0 animate-pulse rounded-full bg-red-100 opacity-50 blur-xl"></div>
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-red-100 bg-white text-red-500 shadow-xl">
                    <AlertTriangle className="h-10 w-10" />
                </div>
            </div>

            <h1 className="mb-2 font-mono text-sm uppercase tracking-widest text-red-500">
                Error: 404_Logic_Not_Found
            </h1>
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                System Error: Logic Not Found
            </h2>
            <p className="mb-10 max-w-md text-gray-500 dark:text-slate-400">
                The page you are looking for has been deprecated or does not exist in the current
                protocol.
            </p>

            <Link
                href="/"
                className="btn-primary inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ios-blue focus-visible:ring-offset-2"
            >
                <RefreshCw className="h-4 w-4" /> Return to Base
            </Link>
        </div>
    );
}
