"use client"

import { useState } from 'react'

export default function ContactForm() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        if (!email) {
            e.preventDefault()
            setError('> Error: Email_Required')
            return
        }
        // Proceed with submission logic (or default HTML behavior for now)
        setError('')
    }

    return (
        <div className="bg-gray-900 rounded-3xl p-1 shadow-2xl border border-gray-800">
            <div className="bg-gray-800/50 rounded-t-[20px] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-2 text-[10px] font-mono text-gray-400">root@solvovis-terminal: ~</div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
                <div>
                    <label htmlFor="email" className="block text-xs font-mono text-gray-400 mb-1.5 ml-1">$ enter_work_email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            if (error) setError('')
                        }}
                        className={`w-full px-4 py-3 rounded-lg bg-black/60 border ${error ? 'border-red-500' : 'border-gray-700'} text-gray-100 font-mono placeholder-gray-600 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 outline-none transition-all`}
                        placeholder="name@company.com"
                    />
                    {error && (
                        <p className="text-red-500 font-mono text-xs mt-2 animate-pulse">{error}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="objective" className="block text-xs font-mono text-gray-400 mb-1.5 ml-1">$ define_objective:</label>
                    <select id="objective" className="w-full px-4 py-3 rounded-lg bg-black/60 border border-gray-700 text-gray-100 font-mono focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 outline-none appearance-none">
                        <option>Cost_Reduction</option>
                        <option>Process_Automation</option>
                        <option>Data_Cleaning</option>
                        <option>Other</option>
                    </select>
                </div>

                <button type="submit" className="w-full py-4 bg-green-500 hover:bg-green-400 text-black font-mono font-bold uppercase tracking-wider rounded-lg transition-colors shadow-lg hover:shadow-green-500/20 active:scale-[0.98] outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                    &gt; Execute_Audit_Sequence
                </button>

                <div className="text-center">
                    <p className="text-[10px] text-gray-600 font-mono">
                        * Encryption: AES-256 Enabled.
                    </p>
                </div>
            </form>
        </div>
    )
}
