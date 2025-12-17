import Link from 'next/link'
import { RefreshCw, AlertTriangle } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
            <div className="mb-8 relative">
                <div className="absolute inset-0 bg-red-100 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative w-20 h-20 bg-white border-2 border-red-100 rounded-2xl flex items-center justify-center text-red-500 shadow-xl">
                    <AlertTriangle className="w-10 h-10" />
                </div>
            </div>

            <h1 className="font-mono text-red-500 mb-2 tracking-widest text-sm uppercase">Error: 404_Not_Found</h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">System Node Missing.</h2>
            <p className="text-gray-500 max-w-md mb-10">
                The requested operational module could not be located. It may have been deprecated or moved to a secure sector.
            </p>

            <Link href="/" className="btn-primary inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ios-blue focus-visible:ring-offset-2">
                <RefreshCw className="w-4 h-4" /> Reboot System
            </Link>
        </div>
    )
}
